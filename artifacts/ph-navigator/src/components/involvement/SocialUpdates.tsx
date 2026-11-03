import { Link } from "wouter";
import { officialSocialAccounts } from "@/data/getInvolved";

export function SocialUpdates() {
  if (!officialSocialAccounts.length) return null;
  return (
    <div className="mt-6 border-t border-white/20 pt-4">
      <h3 className="font-heading text-lg font-bold">Follow project updates</h3>
      <ul className="mt-3 space-y-2">
        {officialSocialAccounts.map((account) => (
          <li key={account.platform}>
            <a
              href={account.url}
              aria-label={`Follow PH Navigator on ${account.platform}`}
              className="inline-block py-1 text-sm underline underline-offset-4"
            >
              {account.platform}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm">
        For participation information, visit{" "}
        <Link href="/get-involved" className="underline underline-offset-4">
          Get Involved
        </Link>{" "}
        on this website.
      </p>
    </div>
  );
}
