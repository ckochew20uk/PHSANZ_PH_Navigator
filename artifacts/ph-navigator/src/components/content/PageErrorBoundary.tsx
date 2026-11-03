import React from "react";

/** Keep navigation available when an article chunk cannot be downloaded. */
export class PageErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div role="alert" className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="mb-4 font-heading text-3xl font-bold text-primary">
          We couldn’t load this page
        </h1>
        <p className="mb-6">
          Please check your connection and reload, or choose another section
          from the navigation.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-lg bg-primary px-5 py-3 font-semibold text-white"
        >
          Reload page
        </button>
      </div>
    );
  }
}
