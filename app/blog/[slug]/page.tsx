import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import { POSTS } from "@/app/data/posts";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://insurancefinder.com";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      siteName: "Insurance Finder",
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <JsonLd data={faqSchema} />

        <div className="text-sm text-slate-500">{post.date}</div>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">{post.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{post.description}</p>

        <div className="mt-10 space-y-10">
          {post.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-2xl font-semibold text-slate-900">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-3 text-slate-700">
                {s.body.map((b, i) => (
                  <p key={i}>{b}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">FAQs</h2>
          <div className="mt-4 space-y-5">
            {post.faqs.map((f) => (
              <div key={f.q}>
                <div className="font-semibold text-slate-900">{f.q}</div>
                <div className="mt-1 text-slate-700">{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-xl font-semibold text-blue-900">
            Ready to compare smarter?
          </h3>
          <p className="mt-2 text-blue-800">
            Use Insurance Finder to see state minimums + personalized plan + a
            Confidence Score.
          </p>
          <a
            href="/compare"
            className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            Compare Insurance →
          </a>
        </div>
      </div>
    </main>
  );
}
