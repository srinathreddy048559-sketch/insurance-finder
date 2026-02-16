import Link from "next/link";
import { POSTS } from "@/app/data/posts";

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-900">Insurance Blog</h1>
        <p className="mt-3 text-slate-600">
          Clear guides on auto insurance, coverage, and saving money.
        </p>

        <div className="mt-10 grid gap-6">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-sm text-slate-500">{p.date}</div>
              <div className="mt-2 text-xl font-semibold text-slate-900">
                {p.title}
              </div>
              <p className="mt-2 text-slate-600">{p.description}</p>
              <div className="mt-4 text-blue-600 font-medium">Read →</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
