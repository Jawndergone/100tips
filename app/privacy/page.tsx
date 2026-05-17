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
        <p className="mt-2 text-sm text-brand-muted">
          Effective date: May 17, 2026
        </p>

        <p className="mt-8 text-base">
          100 Tips is an iOS app made by 100 Tips for Anxiety. This policy
          describes, in plain language, how the app handles information. The
          short version: the app does not collect personal data, does not use
          accounts, and stores everything it knows about you on your device.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-10 mb-3">
          What the app does
        </h2>
        <p>
          100 Tips shows a swipeable feed of short calming and anxiety tips. You
          can save tips you like, write your own, view your tip history, set a
          local daily reminder, and share tips as images.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-10 mb-3">
          Data we collect
        </h2>
        <p>
          None. Specifically:
        </p>
        <ul className="mt-3 ml-5 list-disc space-y-1.5">
          <li>No accounts, no sign-in, no sign-up.</li>
          <li>No email address, password, or user ID.</li>
          <li>No analytics, no crash reporting, no advertising SDKs.</li>
          <li>No tracking across apps or websites.</li>
          <li>No access to location, contacts, microphone, or camera.</li>
          <li>No third-party SDKs that collect user data.</li>
        </ul>

        <h2 className="font-display text-2xl font-semibold mt-10 mb-3">
          What stays on your device
        </h2>
        <p>
          The following is stored locally on your iPhone using Apple&apos;s
          standard on-device storage. It is never transmitted to us or anyone
          else:
        </p>
        <ul className="mt-3 ml-5 list-disc space-y-1.5">
          <li>Tips you&apos;ve saved</li>
          <li>Your tip viewing history</li>
          <li>Tips you&apos;ve written yourself</li>
          <li>Your streak count and reminder time</li>
          <li>App preferences</li>
        </ul>

        <h2 className="font-display text-2xl font-semibold mt-10 mb-3">
          Third-party services
        </h2>
        <p className="font-semibold mt-3">Supabase</p>
        <p>
          The app fetches its read-only catalog of tips and scenario categories
          from Supabase. No user data is sent to Supabase, and no account is
          created. The request includes only a public anonymous API key. As with
          any web request, Supabase&apos;s servers may log standard request
          metadata such as IP address and timestamp; that processing is governed
          by Supabase&apos;s own privacy policy.
        </p>
        <p className="font-semibold mt-4">Apple App Store</p>
        <p>
          Standard App Store and device telemetry (downloads, crash reports
          aggregated by Apple, etc.) is handled by Apple under Apple&apos;s
          privacy policy. We do not receive personally identifiable information
          from Apple.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-10 mb-3">
          Permissions
        </h2>
        <p className="font-semibold mt-3">Notifications</p>
        <p>
          Optional. If you turn on the daily reminder, the app schedules a local
          notification on your device for the time you chose. Notifications are
          scheduled by iOS on-device — there is no push notification server
          involved.
        </p>
        <p className="font-semibold mt-4">Photos</p>
        <p>
          Only requested when you tap Share and choose to save a tip image to
          your photo library. The app writes a single image. It never reads
          existing photos from your library.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-10 mb-3">
          Children
        </h2>
        <p>
          100 Tips is not directed at children under 13 and does not knowingly
          collect data from anyone, including children.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-10 mb-3">
          Your rights
        </h2>
        <p>
          Because the app collects no personal data, there is nothing for us to
          export, correct, or delete on a server. Deleting the app from your
          device removes all saved tips, history, user-written tips, and
          preferences associated with it.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-10 mb-3">
          Changes to this policy
        </h2>
        <p>
          If this policy changes, the &ldquo;effective date&rdquo; above will
          change. Material changes will be highlighted in the app.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-10 mb-3">
          Contact
        </h2>
        <p className="mb-16">
          For privacy questions, email{" "}
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
