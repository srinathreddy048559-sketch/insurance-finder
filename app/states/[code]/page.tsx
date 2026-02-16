import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { STATES } from "@/app/data/states";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://insurancefinder.com";

type Props = { params: Promise<{ code: string }> };

export function generateStaticParams() {
  return STATES.map((s) => ({ code: s.code }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code: raw } = await params;
  const code = (raw || "").toUpperCase();

  const s = STATES.find((x) => x.code === code);
  const name = s?.name || code;

  const canonicalPath = `/cheap-car-insurance/${code}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  const title = `Cheap Car Insurance in ${name} (${code})`;
  const desc = `Check ${name} car insurance minimums, then compare quotes smarter using the same limits + deductibles.`;

  return {
    title,
    description: desc,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title,
      description: desc,
      images: [
        { url: "/og.png", width: 1200, height: 630, alt: "Insurance Finder" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: ["/og.png"],
    },
    // optional (since this page redirects, no need to index)
    robots: { index: false, follow: true },
  };
}

export default async function StatePage({ params }: Props) {
  const { code: raw } = await params;
  const code = (raw || "").toUpperCase();

  // ✅ Permanent redirect to your new route
  permanentRedirect(`/cheap-car-insurance/${code}`);
}
