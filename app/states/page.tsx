import Link from "next/link";
import { STATES } from "@/app/data/states";

export default function StatesIndex() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-900">
          State Insurance Minimums
        </h1>
        <p className="mt-3 text-slate-600">
          Browse state-by-state minimum coverage info and compare smarter.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {STATES.map((s) => (
            <Link
              key={s.code}
              href={`/states/${s.code}`}
              className="rounded-xl border border-slate-200 bg-white p-4 text-slate-900 hover:shadow-md transition"
            >
              <div className="font-semibold">{s.name}</div>
              <div className="text-sm text-slate-500">{s.code}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
