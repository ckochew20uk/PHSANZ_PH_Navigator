import type { Plugin } from "vite";
import { searchIndex } from "../src/data/searchIndex";

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ]!,
  );
}

/** Emit crawler-readable page heads; never guess a public domain from a preview URL. */
export function involvementSocialPages(
  basePath: string,
  publicOrigin?: string,
): Plugin {
  let origin: string | undefined;
  if (publicOrigin) {
    const parsed = new URL(publicOrigin);
    if (
      parsed.protocol !== "https:" ||
      parsed.username ||
      parsed.password ||
      parsed.pathname !== "/" ||
      parsed.search ||
      parsed.hash
    ) {
      throw new Error(
        "PUBLIC_SITE_ORIGIN must be a public HTTPS origin with no path, credentials, query or fragment.",
      );
    }
    origin = parsed.origin;
  }
  return {
    name: "ph-navigator-involvement-social-pages",
    enforce: "post",
    apply: "build",
    generateBundle: {
      order: "post",
      handler(_options, bundle) {
        const entry = bundle["index.html"];
        if (!entry || entry.type !== "asset")
          this.error(
            "Expected the built index.html before generating involvement social pages.",
          );
        const source =
          typeof entry.source === "string"
            ? entry.source
            : new TextDecoder().decode(entry.source);
        for (const page of searchIndex) {
          const title = `${page.title} | PH Navigator`;
          let html = source
            .replace(
              /<title>[\s\S]*?<\/title>/i,
              `<title>${escapeHtml(title)}</title>`,
            )
            .replace(
              /<meta\s+(?:name|property)="(?:description|og:[^"]+|twitter:[^"]+)"[^>]*>/gi,
              "",
            );
          const tags = [
            `<meta name="description" content="${escapeHtml(page.description)}" />`,
            `<meta property="og:title" content="${escapeHtml(title)}" />`,
            `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
            '<meta property="og:type" content="website" />',
            '<meta property="og:site_name" content="PH Navigator" />',
          ];
          if (origin) {
            const base = new URL(
              basePath.endsWith("/") ? basePath : basePath + "/",
              origin,
            );
            const url = new URL(page.path.slice(1), base).href;
            const image = new URL("opengraph.png", base).href;
            tags.push(
              `<link rel="canonical" href="${escapeHtml(url)}" />`,
              `<meta property="og:url" content="${escapeHtml(url)}" />`,
              `<meta property="og:image" content="${escapeHtml(image)}" />`,
              '<meta property="og:image:width" content="1200" />',
              '<meta property="og:image:height" content="630" />',
              '<meta property="og:image:alt" content="PH Navigator sailboat-and-heart logo and Navigating life with PH — together." />',
            );
          }
          html = html.replace("</head>", `${tags.join("\n    ")}\n  </head>`);
          if (page.path === "/") {
            entry.source = html;
            continue;
          }
          this.emitFile({
            type: "asset",
            fileName: page.path.slice(1) + "/index.html",
            source: html,
          });
        }
      },
    },
  };
}
