import {
  handleNewsletter,
  type NewsletterEnv,
} from "./artifacts/api-server/src/lib/newsletter";

interface Env extends NewsletterEnv {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (new URL(request.url).pathname === "/api/newsletter/subscribe")
      return handleNewsletter(request, env);
    return env.ASSETS.fetch(request);
  },
};
