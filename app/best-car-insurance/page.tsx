import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://insurancefinder.com";

export const metadata: Metadata = {
  title: "Best Car Insurance — Compare Companies Smarter",
  description:
    "Find the best car insurance for your situation. Compare state minimums, use a Confidence Score, and shop quotes the right way.",
  alternates: { canonical: "/best-car-insurance" },
  openGraph: {
    type: "website",
    url: "/best-car-insurance",
    title: "Best Car Insurance — Compare Companies Smarter",
    description:
      "Compare companies with state minimums + Confidence Score to shop smarter.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Insurance Finder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Car Insurance — Compare Smarter",
    description: "State minimums + Confidence Score + smarter comparison.",
    images: ["/og.png"],
  },
};

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Best Car Insurance — Compare Companies Smarter",
    url: `${SITE_URL}/best-car-insurance`,
    description:
      "Find the best car insurance for your situation by comparing state minimums and using a Confidence Score.",
    isPartOf: {
      "@type": "WebSite",
      name: "Insurance Finder",
      url: SITE_URL,
    },
  };
}

export default function BestCarInsurancePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Script
        id="best-car-insurance-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm text-blue-700">
            Insurance Finder 💙 <span className="text-slate-400">•</span> SEO Page
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Best car insurance — for <span className="text-blue-600">your</span> situation
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            “Best” depends on your state, driving history, and how predictable your quote options are.
            We help you compare the right way: correct minimums, same limits/deductibles, and a
            Confidence Score to know when you should shop more.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/compare"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
            >
              Compare Options →
            </Link>
            <Link
              href="/cheap-car-insurance"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-900 shadow-sm hover:bg-slate-50 transition"
            >
              Cheap Car Insurance
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Pick correct coverage first">
              Start with your state minimums — then consider higher liability to protect savings.
            </Card>
            <Card title="Compare quotes fairly">
              Same limits + deductibles. Otherwise you’re comparing apples vs oranges.
            </Card>
            <Card title="Use Confidence Score">
              Lower score means shop more quotes before choosing.
            </Card>
          </div>
        </div>

        <footer className="py-10 text-center text-sm text-slate-500">
          Informational tool only. Not an insurance provider. No guaranteed pricing.
        </footer>
      </div>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{children}</p>
    </div>
  );
}
