import Link from "next/link";

const features = [
  {
    title: "Save the ones that hit",
    body: "Double-tap any card to keep it. Your saved tips live on your phone, not on a server.",
  },
  {
    title: "Daily reminders, on your terms",
    body: "Pick a time. The app pings you locally — no push servers, no tracking.",
  },
  {
    title: "Write your own",
    body: "Got a tip that works for you? Add it. Yours mix into the feed alongside the originals.",
  },
  {
    title: "Share as a 9:16 card",
    body: "Tap share and the app renders a story-ready image. Drop it in iMessage, Stories, or TikTok.",
  },
  {
    title: "Private by default",
    body: "No accounts. No logins. No analytics SDKs. Everything stays on your iPhone.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm tracking-widest uppercase text-brand-muted mb-6">
            For iPhone
          </p>
          <h1 className="font-display text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
            100 short tips
            <br />
            for when your brain
            <br />
            <span className="text-brand-accent">won&apos;t shut up.</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-brand-muted leading-relaxed max-w-xl mx-auto">
            A pocket-sized library of small things that actually help. No
            doom-scroll. No accounts. Just one tip at a time, whenever you need
            one.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center rounded-full bg-brand-ink text-brand-bg px-7 py-3.5 text-base font-medium opacity-60 cursor-not-allowed"
            >
              Coming to the App Store
            </button>
            <p className="text-xs text-brand-muted">
              Launching soon — built for iOS 17+
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-brand-ink/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12">
            What it does
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title}>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {f.title}
                </h3>
                <p className="text-brand-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-brand-ink/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Built to leave you alone.
          </h2>
          <p className="mt-5 text-lg text-brand-muted leading-relaxed">
            No feed-tuning. No engagement metrics. No newsletter. The app shows up
            when you tap it, says one useful thing, and gets out of the way.
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-brand-ink underline decoration-brand-ink/20 underline-offset-4 hover:decoration-brand-accent hover:text-brand-accent"
            >
              Privacy
            </Link>
            <Link
              href="/support"
              className="text-brand-ink underline decoration-brand-ink/20 underline-offset-4 hover:decoration-brand-accent hover:text-brand-accent"
            >
              Support
            </Link>
            <a
              href="mailto:panoramaprmedia@gmail.com"
              className="text-brand-ink underline decoration-brand-ink/20 underline-offset-4 hover:decoration-brand-accent hover:text-brand-accent"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-xs text-brand-muted">
        © 100 Tips
      </footer>
    </main>
  );
}
