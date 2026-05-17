import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — 100 Tips",
};

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "How do I save a tip?",
    a: "Double-tap the card, or tap the heart on the right side.",
  },
  {
    q: "How do I turn on daily reminders?",
    a: 'Tap the "You" icon → Reminders. Pick a time and allow notifications.',
  },
  {
    q: "Can I write my own tips?",
    a: 'Yes. Go to "You" → My Tips → tap + to compose. They’ll mix into your feed.',
  },
  {
    q: "How do I share a tip?",
    a: "Tap the share icon on the right rail. The app renders a 9:16 image you can post to Stories, TikTok, or send in iMessage.",
  },
  {
    q: "Is my data private?",
    a: (
      <>
        Yes. Everything stays on your device. See our{" "}
        <Link
          href="/privacy"
          className="text-brand-accent underline decoration-brand-accent/40 underline-offset-4 hover:decoration-brand-accent"
        >
          Privacy Policy
        </Link>
        .
      </>
    ),
  },
  {
    q: "I have feedback / a tip idea / a bug.",
    a: (
      <>
        Email{" "}
        <a
          href="mailto:panoramaprmedia@gmail.com"
          className="text-brand-accent underline decoration-brand-accent/40 underline-offset-4 hover:decoration-brand-accent"
        >
          panoramaprmedia@gmail.com
        </a>
        {" "}— a real human reads everything.
      </>
    ),
  },
];

export default function SupportPage() {
  return (
    <main className="flex-1">
      <article className="max-w-[680px] mx-auto px-6 py-12 leading-relaxed">
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          100 Tips — Support
        </h1>
        <p className="mt-4 text-lg text-brand-muted">
          100 short tips for when your brain won&rsquo;t shut up. Here&rsquo;s how to get help.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Contact</h2>
        <p>
          Email{" "}
          <a
            href="mailto:panoramaprmedia@gmail.com"
            className="text-brand-accent underline decoration-brand-accent/40 underline-offset-4 hover:decoration-brand-accent"
          >
            panoramaprmedia@gmail.com
          </a>
          . We usually reply within 1–2 business days.
        </p>

        <h2 className="font-display text-2xl font-semibold mt-8 mb-4">FAQ</h2>
        <div className="mb-16">
          {faqs.map((item) => (
            <div key={item.q} className="mb-4">
              <p className="font-semibold">{item.q}</p>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}
