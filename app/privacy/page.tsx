import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — 100 Tips",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <article className="max-w-[680px] mx-auto px-6 py-12 leading-relaxed">
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-brand-muted">Last updated: May 17, 2026</p>

        <p className="mt-8 text-base">
          100 Tips (&ldquo;the app&rdquo;) is built to be private by default. This policy
          explains what that means in plain language.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-8 mb-3">
          What we collect
        </h2>
        <p>
          Nothing. 100 Tips does not collect, transmit, sell, or share any personal
          information. There are no accounts, no logins, no analytics SDKs, and no
          advertising trackers.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-8 mb-3">
          What stays on your device
        </h2>
        <p>
          Everything you do in the app — saved tips, your own written tips, streak
          count, history of recently seen tips, and reminder settings — is stored
          locally on your iPhone using Apple&apos;s standard storage. We never see it.
          If you delete the app, this data is deleted with it.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-8 mb-3">
          Notifications
        </h2>
        <p>
          If you enable daily reminders, the app schedules local notifications on
          your device. These notifications never leave your phone. We do not run a
          push notification server.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-8 mb-3">
          Tip content
        </h2>
        <p>
          The 100 tips bundled with the app, along with any future tip updates, are
          delivered as content. Fetching that content uses standard network requests
          and does not include any identifier tied to you.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Children</h2>
        <p>
          The app is rated 12+ and does not knowingly collect information from
          anyone, including children under 13.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Changes</h2>
        <p>
          If this policy ever changes, the &ldquo;last updated&rdquo; date above will change.
          Material changes will be highlighted in the app.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Contact</h2>
        <p className="mb-16">
          Questions? Email{" "}
          <a
            href="mailto:panoramaprmedia@gmail.com"
            className="text-brand-accent underline decoration-brand-accent/40 underline-offset-4 hover:decoration-brand-accent"
          >
            panoramaprmedia@gmail.com
          </a>
          .
        </p>
      </article>
    </main>
  );
}
