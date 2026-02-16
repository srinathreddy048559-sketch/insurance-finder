import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { STATES } from "@/app/data/states";
import JsonLd from "@/app/components/JsonLd";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://insurancefinder.com";

type ParamsMaybePromise = { code: string } | Promise<{ code: string }>;
type PageProps = { params: ParamsMaybePromise };

function getStateByCode(rawCode: string | undefined) {
  const c = (rawCode ?? "").trim().toUpperCase();
  return STATES.find((s) => (s.code ?? "").trim().toUpperCase() === c);
}

/** ✅ prebuild all 50 */
export function generateStaticParams() {
  return STATES.map((s) => ({ code: s.code }));
}

/** ✅ Per-page SEO (works even if params is Promise) */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await Promise.resolve(params);
  const st = getStateByCode(resolved.code);

  if (!st) {
    return {
      title: "State not found",
      description: "This state page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const title = `Cheap Car Insurance in ${st.name} (${st.code})`;
  const description = `Find cheap car insurance in ${st.name}. See ${st.name} minimum coverage requirements, practical tips to lower your rate, and smarter ways to compare quotes.`;

  const url = `${baseUrl}/cheap-car-insurance/${st.code}`;
  const ogImage = `${baseUrl}/og.png`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Insurance Finder" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function CheapInsuranceStatePage({ params }: PageProps) {
  const resolved = await Promise.resolve(params);
  const st = getStateByCode(resolved.code);

  if (!st) return notFound();

  const pageUrl = `${baseUrl}/cheap-car-insurance/${st.code}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cheap Car Insurance",
        item: `${baseUrl}/cheap-car-insurance`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${st.name} (${st.code})`,
        item: pageUrl,
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Cheap Car Insurance in ${st.name} (${st.code})`,
    url: pageUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Insurance Finder",
      url: baseUrl,
    },
    description: `Minimum coverage requirements and tips for cheap car insurance in ${st.name}.`,
  };

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={webPageJsonLd} />

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* top nav */}
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold text-slate-900">
            Insurance Finder <span className="text-blue-600">💙</span>
          </Link>

          <div className="flex items-center gap-6 text-sm text-slate-600">
            <Link href="/compare" className="hover:text-slate-900">
              Compare
            </Link>
            <Link href="/cheap-car-insurance" className="hover:text-slate-900">
              Cheap Insurance by State
            </Link>
          </div>
        </div>

        {/* breadcrumbs */}
        <div className="mt-10 text-sm text-slate-500">
          <Link className="hover:text-slate-700" href="/">
            Home
          </Link>{" "}
          <span className="mx-2">/</span>
          <Link className="hover:text-slate-700" href="/cheap-car-insurance">
            Cheap Car Insurance
          </Link>{" "}
          <span className="mx-2">/</span>
          <span className="text-slate-700 font-medium">
            {st.name} ({st.code})
          </span>
        </div>

        {/* hero */}
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <p className="text-blue-600 font-medium">Insurance Finder 💙</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900">
              Cheap Car Insurance in {st.name}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Looking for affordable auto insurance in {st.name}? Here are the{" "}
              <span className="font-semibold text-slate-900">{st.name}</span>{" "}
              state minimum requirements and smart coverage tips.
            </p>
          </div>

          <Link
            href="/compare"
            className="hidden md:inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
          >
            Compare Plans →
          </Link>
        </div>

        {/* minimums */}
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-bold text-slate-900">
            Minimum Coverage in {st.name}
          </h2>
          <p className="mt-2 text-slate-600">
            These are the minimum legal coverage limits required in {st.name}.
            Minimum coverage may not fully protect you in serious accidents.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-700">State minimums</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">
              {st.minimums ?? "—"}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              BI = Bodily Injury • PD = Property Damage • PIP = Personal Injury Protection
            </p>
          </div>
        </section>

        {/* tips */}
        <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-bold text-slate-900">
              Tips to Get Cheap Car Insurance in {st.name}
            </h2>

            <ul className="mt-5 space-y-3 text-slate-700">
              <li>• Compare at least <b>3 quotes</b> using the same deductibles + limits.</li>
              <li>• Ask about discounts: bundling, safe driver, good student, telematics.</li>
              <li>• Raise deductibles carefully if you can afford a higher out-of-pocket cost.</li>
              <li>• Consider higher liability if you have savings/assets to protect.</li>
            </ul>

            <div className="mt-6">
              <Link
                href="/compare"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
              >
                Compare options →
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
            <p className="font-semibold text-amber-900">Pro tip</p>
            <p className="mt-2 text-amber-900/80">
              The cheapest policy isn’t always best. A small upgrade in liability can save you
              thousands if an accident happens.
            </p>
          </aside>
        </section>

        <footer className="py-12 text-center text-sm text-slate-500">
          Built to explain insurance clearly — and help you feel confident. 💙
        </footer>
      </div>
    </main>
  );
}
