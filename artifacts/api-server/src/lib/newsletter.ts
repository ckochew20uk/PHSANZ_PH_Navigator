/** Shared, runtime-neutral contract for Pages, Workers and Express. */
export interface NewsletterEnv {
  MAILCHIMP_API_KEY?: string;
  MAILCHIMP_LIST_ID?: string;
}
export const NEWSLETTER_BODY_LIMIT = 4096;
const tagNames = {
  patient: "Patient",
  carer: "Carer",
  research: "Research",
  events: "Events",
};
const successMessage =
  "Thank you. If confirmation is needed, please check your inbox to complete your subscription.";

export function newsletterResponse(
  status: number,
  message: string,
  success = false,
) {
  return Response.json(
    { ...(success ? { success: true } : {}), message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "no-referrer",
        "Content-Security-Policy": "default-src 'none'; frame-ancestors 'none'",
        ...(status === 405 ? { Allow: "POST" } : {}),
      },
    },
  );
}

function parseBody(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const body = value as Record<string, unknown>;
  if (typeof body.email !== "string") return null;
  const email = body.email.trim().toLowerCase();
  // Practical input validation; provider confirmation establishes ownership.
  if (email.length > 254 || !/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(email))
    return null;
  const names: Record<string, string> = {};
  for (const [field, merge] of [
    ["firstName", "FNAME"],
    ["lastName", "LNAME"],
  ]) {
    if (body[field] === undefined) continue;
    if (
      typeof body[field] !== "string" ||
      body[field].length > 100 ||
      /[\u0000-\u001f\u007f]/.test(body[field])
    )
      return null;
    if (body[field].trim()) names[merge] = body[field].trim();
  }
  const interests = body.interests ?? [];
  if (
    !Array.isArray(interests) ||
    interests.length > 4 ||
    interests.some((v) => typeof v !== "string" || !Object.hasOwn(tagNames, v))
  )
    return null;
  return {
    email_address: email,
    status: "pending",
    merge_fields: names,
    tags: [...new Set(interests as (keyof typeof tagNames)[])].map(
      (v) => tagNames[v],
    ),
  };
}

export async function handleNewsletter(
  request: Request,
  env: NewsletterEnv,
  sameHostOrigin = false,
): Promise<Response> {
  if (request.method !== "POST")
    return newsletterResponse(405, "Method not allowed.");
  const origin = request.headers.get("Origin");
  const target = new URL(request.url);
  if (origin) {
    try {
      const source = new URL(origin);
      const matches = sameHostOrigin
        ? source.host === target.host &&
          ["http:", "https:"].includes(source.protocol)
        : source.origin === target.origin;
      if (source.origin !== origin || !matches)
        return newsletterResponse(403, "Request origin is not allowed.");
    } catch {
      return newsletterResponse(403, "Request origin is not allowed.");
    }
  }
  if (request.headers.get("Sec-Fetch-Site") === "cross-site")
    return newsletterResponse(403, "Request origin is not allowed.");
  // This is a browser-origin boundary, not bot protection or authentication.
  if (
    request.headers.get("Content-Type")?.split(";")[0].trim().toLowerCase() !==
      "application/json" ||
    request.headers.has("Content-Encoding")
  ) {
    return newsletterResponse(415, "Send an uncompressed JSON request.");
  }
  if (Number(request.headers.get("Content-Length")) > NEWSLETTER_BODY_LIMIT)
    return newsletterResponse(413, "Request is too large.");
  let value: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return newsletterResponse(400, "Invalid request body.");
    const chunks: Uint8Array[] = [];
    let length = 0;
    try {
      for (;;) {
        const chunk = await reader.read();
        if (chunk.done) break;
        length += chunk.value.byteLength;
        if (length > NEWSLETTER_BODY_LIMIT) {
          await reader.cancel();
          return newsletterResponse(413, "Request is too large.");
        }
        chunks.push(chunk.value);
      }
    } finally {
      reader.releaseLock();
    }
    const bytes = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    value = JSON.parse(
      new TextDecoder("utf-8", { fatal: true, ignoreBOM: false }).decode(bytes),
    );
  } catch {
    return newsletterResponse(400, "Invalid request body.");
  }
  const payload = parseBody(value);
  if (!payload)
    return newsletterResponse(
      400,
      "Check your email address and optional fields.",
    );
  const apiKey = env.MAILCHIMP_API_KEY;
  const listId = env.MAILCHIMP_LIST_ID;
  const server = apiKey?.split("-").pop();
  if (!apiKey || !listId || !server || !/^us\d+$/.test(server)) {
    return newsletterResponse(
      503,
      "Newsletter signup is not yet configured. Please check back soon.",
    );
  }
  try {
    const result = await fetch(
      `https://${server}.api.mailchimp.com/3.0/lists/${encodeURIComponent(listId)}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      },
    );
    const data: unknown = await result.json();
    const exists =
      result.status === 400 &&
      !!data &&
      typeof data === "object" &&
      "title" in data &&
      data.title === "Member Exists";
    if (result.ok || exists)
      return newsletterResponse(200, successMessage, true);
  } catch {
    /* Never log names, addresses, credentials or provider error payloads. */
  }
  return newsletterResponse(
    502,
    "We could not complete your subscription. Please try again later.",
  );
}
