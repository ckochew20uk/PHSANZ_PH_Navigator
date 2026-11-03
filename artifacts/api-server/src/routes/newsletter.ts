import { Router, raw } from "express";
import {
  handleNewsletter,
  newsletterResponse,
  NEWSLETTER_BODY_LIMIT,
} from "../lib/newsletter";

const router = Router();
router.all(
  "/newsletter/subscribe",
  raw({ type: () => true, limit: NEWSLETTER_BODY_LIMIT, inflate: false }),
  async (req, res) => {
    const headers = new Headers();
    for (const key of [
      "content-type",
      "origin",
      "sec-fetch-site",
      "content-encoding",
    ]) {
      const value = req.get(key);
      if (value) headers.set(key, value);
    }
    const request = new Request(
      `${req.protocol}://${req.get("host")}/api/newsletter/subscribe`,
      {
        method: req.method,
        headers,
        ...(req.method === "GET" || req.method === "HEAD"
          ? {}
          : { body: new Uint8Array(req.body ?? []) }),
      },
    );
    // Express may terminate behind an HTTPS proxy: compare host, without trusting forwarded headers.
    const result = await handleNewsletter(request, process.env, true);
    result.headers.forEach((value, key) => res.setHeader(key, value));
    res.status(result.status).send(await result.text());
  },
);
router.use(
  (
    error: { status?: number },
    _req: import("express").Request,
    res: import("express").Response,
    _next: import("express").NextFunction,
  ) => {
    const status =
      error.status === 413 ? 413 : error.status === 415 ? 415 : 400;
    const result = newsletterResponse(
      status,
      status === 413 ? "Request is too large." : "Invalid request body.",
    );
    result.headers.forEach((value, key) => res.setHeader(key, value));
    res
      .status(status)
      .json({
        message:
          status === 413 ? "Request is too large." : "Invalid request body.",
      });
  },
);
export default router;
