import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { STATES } from "@/app/data/states";
import { slugifyStateName, stateTitle } from "@/app/lib/seo";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://insurancefinder.com";

type Props = { params: { code: string } };

export function generateStaticParams() {
  return STATES.map((s) => ({ code: s.code }));
}

export function generateMetadata({ params }: Props): Metadata {
  const code = params.code.toUpperCase();
  const s = STATES.find((x) => x.code === code);

  const name = s?.name || code;
  const title = stateTitle(name);

  const canonical = `/states/${code}`;
  const desc = `Check ${name} car insurance state minimums, then compare quotes smarter using a Confidence Score and the same limits + deductibles.`;

  return {
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description: desc,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Insurance Finder" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: ["/og.png"],
    },
  };
}

function jsonLd(name: string, code: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: stateTitle(name),
    url: `${SITE_URL}/states/${code}`,
    description: `State minimums and smarter comparison for ${name} car insurance.`,
    isPartOf: {
      "@type": "WebSite",
      name: "Insurance Finder",
      url: SITE_URL,
    },
  };
}

export default function StatePage({ params }: Props) {
  const code = params.code.toUpperCase();
  const s = STATES.find((x) => x.code === code);

  const name = s?.name || code;
  const minimums = s?.minimums || "Coming soon (we’ll fill this in).";
  const slug = slugifyStateName(name);

  return (
    <main className="min-h-screen bg-slate-50">
      <Script
        id={`state-${code}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(name, code)) }}
      />

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm text-blue-700">
            Insurance Finder 💙 <span className="text-slate-400">•</span> State Page
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            {name} car insurance{" "}
            <span className="text-blue-600">state minimums</span> + smarter comparison
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Use this page to understand {name} minimum coverage rules, then compare quotes fairly
            with the same limits + deductibles.
          </p>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Info title="State" value={`${name} (${code})`} />
            <Info title="Minimums" value={minimums} />
            <Info title="Tip" value="Compare 3+ quotes using the same limits." />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/compare`}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
            >
              Compare in {code} →
            </Link>

            <Link
              href="/cheap-car-insurance"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-900 shadow-sm hover:bg-slate-50 transition"
            >
              Cheap Car Insurance
            </Link>

            <Link
              href="/best-car-insurance"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-900 shadow-sm hover:bg-slate-50 transition"
            >
              Best Car Insurance
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            URL slug preview (optional): <span className="font-medium">{slug}</span>
          </p>
        </div>

        <footer className="py-10 text-center text-sm text-slate-500">
          Informational tool only. Not an insurance provider. No guaranteed pricing.
        </footer>
      </div>
    </main>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-2 text-slate-600">{value}</p>
    </div>
  );
}
