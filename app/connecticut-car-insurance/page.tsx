import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cheap Car Insurance in Connecticut (2026 Guide)",
  description:
    "Looking for cheap car insurance in Connecticut? See CT minimum coverage requirements, average rates, and smart tips to lower your premium.",
  keywords: [
    "cheap car insurance Connecticut",
    "Connecticut car insurance minimums",
    "CT auto insurance requirements",
    "best car insurance in CT",
    "Connecticut insurance quotes",
  ],
  alternates: {
    canonical: "https://insurancefinder.com/connecticut-car-insurance",
  },
};

export default function ConnecticutInsurancePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-900">
          Cheap Car Insurance in Connecticut (2026 Guide)
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          If you're searching for cheap car insurance in Connecticut,
          understanding the minimum coverage laws and smart comparison
          strategies can save you hundreds per year.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Connecticut Minimum Car Insurance Requirements
          </h2>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>$25,000 bodily injury per person</li>
            <li>$50,000 bodily injury per accident</li>
            <li>$25,000 property damage liability</li>
            <li>Uninsured / underinsured motorist coverage required</li>
          </ul>

          <p className="mt-4 text-slate-600">
            These are the legal minimums. Many drivers choose higher limits for
            better financial protection.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            How to Get Cheaper Insurance in CT
          </h2>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Compare at least 3 insurance quotes</li>
            <li>Ask about good student discounts</li>
            <li>Bundle auto + renters insurance</li>
            <li>Increase deductible (if financially safe)</li>
          </ul>
        </section>

        <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="text-xl font-semibold text-blue-900">
            Compare Connecticut Insurance Plans
          </h3>

          <p className="mt-3 text-blue-800">
            Use our Insurance Finder tool to see state minimums,
            personalized recommendations, and a Confidence Score.
          </p>

          <Link
            href="/compare"
            className="mt-5 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition"
          >
            Compare CT Insurance →
          </Link>
        </div>
      </div>
    </main>
  );
}
