import {
  handleNewsletter,
  type NewsletterEnv,
} from "../../../artifacts/api-server/src/lib/newsletter";

// All methods reach the shared handler, including a JSON 405 + Allow header.
export const onRequest: PagesFunction<NewsletterEnv> = ({ request, env }) =>
  handleNewsletter(request, env);
