"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { STATES } from "@/app/data/states";

type Audience = "Everyone" | "Student mode";
type Ownership = "Own" | "Finance" | "Lease";
type AgeBand = "16-17" | "18-24" | "25-29" | "30-39" | "40+";
type History = "Clean record" | "New driver" | "1 ticket" | "At-fault accident";
type Goal = "Cheapest" | "Balanced" | "Max protection";

const audiences: Audience[] = ["Everyone", "Student mode"];
const ownerships: Ownership[] = ["Own", "Finance", "Lease"];
const ages: AgeBand[] = ["16-17", "18-24", "25-29", "30-39", "40+"];
const histories: History[] = [
  "Clean record",
  "New driver",
  "1 ticket",
  "At-fault accident",
];
const goals: Goal[] = ["Cheapest", "Balanced", "Max protection"];

// ✅ easy to change later (no hardcoding inside JSX)
const POPULAR_STATE_CODES = ["CA", "TX", "FL", "NY", "CT", "NJ", "PA", "GA"] as const;

function scoreFromInputs(age: AgeBand, history: History, goal: Goal): number {
  let score = 72;

  if (age === "16-17") score -= 18;
  if (age === "18-24") score -= 10;

  if (history === "New driver") score -= 10;
  if (history === "1 ticket") score -= 12;
  if (history === "At-fault accident") score -= 18;

  if (goal === "Cheapest") score -= 8;
  if (goal === "Max protection") score += 6;

  return Math.max(0, Math.min(100, score));
}

function riskFromScore(score: number): "Low" | "Medium" | "High" {
  if (score >= 75) return "Low";
  if (score >= 55) return "Medium";
  return "High";
}

export default function ComparePage() {
  const [audience, setAudience] = useState<Audience>("Everyone");
  const [state, setState] = useState<string>("CT");
  const [ownership, setOwnership] = useState<Ownership>("Own");
  const [age, setAge] = useState<AgeBand>("18-24");
  const [history, setHistory] = useState<History>("New driver");
  const [goal, setGoal] = useState<Goal>("Balanced");

  const selectedState = useMemo(
    () => STATES.find((s) => s.code === state) ?? STATES[0],
    [state]
  );

  const confidenceScore = useMemo(
    () => scoreFromInputs(age, history, goal),
    [age, history, goal]
  );
  const risk = useMemo(() => riskFromScore(confidenceScore), [confidenceScore]);

  const downloadPdfUrl = useMemo(() => {
    const qs = new URLSearchParams({
      state,
      age,
      ownership,
      history,
      goal,
    });
    return `/api/plan-pdf?${qs.toString()}`;
  }, [state, age, ownership, history, goal]);

  // ✅ dynamic list built from STATES
  const popularStates = useMemo(() => {
    const wanted = new Set<string>(POPULAR_STATE_CODES as unknown as string[]);
    return STATES.filter((s) => wanted.has(s.code));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Top bar */}
      <div className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/75 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-slate-900">Insurance Finder</span>
            <span className="text-blue-600">💙</span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-sm text-slate-600">
            <span>Clear</span>
            <span>•</span>
            <span>Honest</span>
            <span>•</span>
            <span>Practical</span>
            <span className="ml-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-blue-700">
              State data reviewed: Feb 2026
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hero Card */}
          <section className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.08)]">
            {/* background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />

            {/* Car background */}
            <div className="absolute right-[-40px] bottom-[-30px] hidden lg:block pointer-events-none">
              <img
                src="/car-hero.png"
                alt=""
                className="w-[780px] max-w-none opacity-[0.18]"
              />
              {/* fade so text stays readable */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white/85" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-1 text-sm text-slate-700 shadow-sm">
                <span className="font-medium">Insurance Finder</span>
                <span className="text-blue-600">💙</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-600">Built to feel clear and safe</span>
              </div>

              <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                Find the best auto insurance plan{" "}
                <span className="text-blue-600">for your situation</span>
              </h1>

              <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                We show your{" "}
                <span className="font-semibold text-slate-900">state minimums</span>,
                recommend a{" "}
                <span className="font-semibold text-slate-900">practical plan</span>,
                and help you compare companies with a transparent{" "}
                <span className="font-semibold text-slate-900">Confidence Score</span>.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="#details"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
                >
                  Compare Options →
                </Link>

                <a
                  href={downloadPdfUrl}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-900 shadow-sm hover:bg-slate-50 transition"
                >
                  Download Plan PDF 📄
                </a>

                <button
                  onClick={() =>
                    setAudience(audience === "Everyone" ? "Student mode" : "Everyone")
                  }
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-900 shadow-sm hover:bg-slate-50 transition"
                >
                  Toggle Student Mode 🎓
                </button>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                Informational tool only. Not an insurance provider. No “cheapest guarantee”.
              </p>
            </div>
          </section>

          {/* Confidence / Trust Card */}
          <aside className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Confidence Score</p>
                <div className="mt-1 text-4xl font-bold text-slate-900">
                  {confidenceScore}/100
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Good confidence 👍 · Risk:{" "}
                  <span className="font-semibold text-slate-900">{risk}</span>
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">What this means</p>
                <p className="mt-1">Higher = more predictable choices</p>
                <p>Lower = compare more quotes</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 p-5">
              <p className="font-semibold text-slate-900">Why people trust this tool ✅</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
                <li>State-accurate minimums (so you don’t buy invalid coverage)</li>
                <li>Practical plan you can understand</li>
                <li>Company cards with “why” + “caution” (transparent)</li>
              </ul>
            </div>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">Pro tip</p>
              <p className="mt-1 text-sm text-amber-900/80">
                Compare at least <span className="font-semibold">3 quotes</span> with the same
                deductibles + limits.
              </p>
            </div>
          </aside>
        </div>

        {/* DETAILS */}
        <section
          id="details"
          className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Your details</h2>
              <p className="mt-1 text-slate-600">
                Change inputs to see smarter results instantly.
              </p>
            </div>

            <div className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700">
              Selected:{" "}
              <span className="font-semibold">
                {selectedState.name} ({selectedState.code})
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            <Field label="Audience">
              <select
                value={audience}
                onChange={(e) => setAudience(e.target.value as Audience)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                {audiences.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="State">
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                {STATES.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name} ({s.code})
                  </option>
                ))}
              </select>

              <p className="mt-2 text-xs text-slate-500">
                Minimums:{" "}
                <span className="font-medium">{selectedState.minimums ?? "—"}</span>
              </p>
            </Field>

            <Field label="Car ownership">
              <select
                value={ownership}
                onChange={(e) => setOwnership(e.target.value as Ownership)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                {ownerships.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Age">
              <select
                value={age}
                onChange={(e) => setAge(e.target.value as AgeBand)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                {ages.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Driving history">
              <select
                value={history}
                onChange={(e) => setHistory(e.target.value as History)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                {histories.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Goal">
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value as Goal)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                {goals.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </section>

        {/* ✅ Popular States Section (AUTO) */}
        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-bold text-slate-900">
            Compare Car Insurance by State
          </h2>

          <p className="mt-2 text-slate-600">
            Auto insurance minimums vary by state. Explore requirements and recommended coverage:
          </p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularStates.map((s) => (
              <Link
                key={s.code}
                href={`/cheap-car-insurance/${s.code}`}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm hover:bg-blue-50 hover:border-blue-200 transition"
              >
                <div className="text-sm text-slate-500">{s.code}</div>
                <div className="font-semibold text-slate-900">{s.name}</div>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/cheap-car-insurance"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              Browse all states →
            </Link>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-slate-500">
          Built to explain insurance clearly — and help you feel confident. 💙
        </footer>
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-900 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
