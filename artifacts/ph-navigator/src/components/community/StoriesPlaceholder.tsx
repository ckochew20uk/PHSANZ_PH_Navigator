import { Users } from "lucide-react";

export function StoriesPlaceholder() {
  return (
    <div className="flex items-start gap-5 rounded-2xl border border-primary/20 bg-white/70 p-6 sm:p-8">
      <Users className="h-10 w-10 shrink-0 text-secondary" aria-hidden="true" />
      <div>
        <h3 className="font-heading text-2xl font-bold text-primary">
          Making space for community voices
        </h3>
        <p className="mt-3 max-w-2xl text-foreground leading-relaxed">
          This story collection is being developed. No patient or carer stories
          are published here yet.
        </p>
        <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
          Future stories and portraits will appear only after consent and
          publication approval are confirmed.
        </p>
        <p className="mt-4 inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium text-primary">
          Story content coming later
        </p>
      </div>
    </div>
  );
}
