import Link from "next/link";
import type { Metadata } from "next";
import { STATES } from "@/app/data/states";

export const metadata: Metadata = {
  title: "Cheap Car Insurance by State",
  description:
    "Browse cheap car insurance guides by state. See minimum coverage requirements and practical tips to compare quotes smarter.",
  alternates: {
    canonical: "/cheap-car-insurance",
  },
  openGraph: {
    title: "Cheap Car Insurance by State",
    description:
      "Pick your state to see minimum coverage requirements + practical tips to compare quotes smarter.",
    url: "/cheap-car-insurance",
    type: "website",
  },
};

export default function CheapCarInsuranceIndexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Top bar */}
      <div className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-slate-900">Insurance Finder</span>
            <span className="text-blue-600">💙</span>
          </Link>

          <div className="flex items-center gap-4 text-sm text-slate-600">
            <Link href="/compare" className="hover:text-slate-900">
              Compare
            </Link>
            <Link href="/cheap-car-insurance" className="hover:text-slate-900">
              Cheap Insurance by State
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Hero */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold">Insurance Finder 💙</p>

            <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Cheap car insurance by state
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Minimum insurance rules change by state. Pick your state to see
              minimum coverage, practical recommendations, and tips to compare quotes smarter.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/compare"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
              >
                Go to Compare →
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition"
              >
                Back to Home
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Informational tool only. Not an insurance provider. No “cheapest guarantee”.
            </p>
          </div>
        </div>

        {/* All states grid */}
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">All states</h2>
              <p className="mt-2 text-slate-600">
                Pick a state to view minimums + cheap insurance tips.
              </p>
            </div>

            <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
              Total: <span className="font-semibold">{STATES.length}</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {STATES.map((s) => (
              <Link
                key={s.code}
                href={`/cheap-car-insurance/${s.code}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:bg-blue-50 hover:border-blue-200 transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-500">{s.code}</p>
                    <p className="mt-1 text-lg font-bold text-slate-900 group-hover:text-slate-900">
                      {s.name}
                    </p>
                  </div>

                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 group-hover:border-blue-200">
                    View →
                  </span>
                </div>

                <div className="mt-3 text-sm text-slate-600">
                  {s.minimums ? (
                    <>
                      <span className="font-semibold text-slate-700">{s.minimums}</span>{" "}
                      <span className="text-slate-500">(BI/BI/PD)</span>
                    </>
                  ) : (
                    <span className="text-slate-500">Minimums coming soon</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trust / Authority */}
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-bold text-slate-900">How to use this</h2>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">1) Pick your state</p>
              <p className="mt-2 text-sm text-slate-600">
                Minimum coverage requirements depend on where your car is registered.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">2) Understand minimums</p>
              <p className="mt-2 text-sm text-slate-600">
                Minimums are legal requirements, not always “safe” coverage.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">3) Compare quotes</p>
              <p className="mt-2 text-sm text-slate-600">
                Always compare at least 3 quotes with the same deductibles + limits.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Information updated February 2026. Minimum requirements should be verified with official state resources.
          </p>
        </section>

        <footer className="py-10 text-center text-sm text-slate-500">
          Built to explain insurance clearly — and help you feel confident. 💙
        </footer>
      </div>
    </main>
  );
}
