import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full text-center">
        <h1 className="font-display text-6xl sm:text-7xl font-semibold tracking-tight">
          100 Tips
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-brand-muted leading-relaxed">
          100 short tips for when your brain won&apos;t shut up.
        </p>
        <div className="mt-12 flex items-center justify-center gap-8 text-sm">
          <Link
            href="/privacy"
            className="text-brand-ink hover:text-brand-accent underline decoration-brand-ink/20 underline-offset-4 hover:decoration-brand-accent"
          >
            Privacy
          </Link>
          <Link
            href="/support"
            className="text-brand-ink hover:text-brand-accent underline decoration-brand-ink/20 underline-offset-4 hover:decoration-brand-accent"
          >
            Support
          </Link>
        </div>
      </div>
    </main>
  );
}
