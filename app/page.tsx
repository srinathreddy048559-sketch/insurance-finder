import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Insurance Finder — Compare Auto Insurance Plans",
  description:
    "Compare state minimums, get a personalized plan, and use a Confidence Score to shop smarter.",
};


export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
        {/* Background layers */}
        <div className="pointer-events-none absolute inset-0">
          {/* Soft global tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />

          {/* Car image only on right, very subtle */}
          <div className="absolute inset-y-0 right-0 w-[62%]">
            {/* Fade mask so it doesn't hit the text area */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <Image
              src="/car-hero.png"
              alt="Car background"
              fill
              priority
              className="object-contain object-right opacity-[0.14]"
            />
          </div>

          {/* Extra spotlight behind headline for clarity */}
          <div className="absolute left-[-120px] top-[-160px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-[-140px] top-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <div className="relative grid gap-8 p-10 md:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <span className="font-semibold">Insurance Finder</span>
              <span>💙</span>
              <span className="text-slate-400">•</span>
              <span>Clear</span>
              <span className="text-slate-400">•</span>
              <span>Honest</span>
              <span className="text-slate-400">•</span>
              <span>Practical</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl">
              Find the best auto insurance plan{" "}
              <span className="text-blue-600">for your situation</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Built for <span className="font-semibold text-slate-900">everyone</span> in the USA —
              with a special{" "}
              <span className="font-semibold text-slate-900">Student Mode</span> when you need it.
              We show your{" "}
              <span className="font-semibold text-slate-900">state minimums</span>, recommend a{" "}
              <span className="font-semibold text-slate-900">safer plan</span>, and help you compare
              companies with confidence.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/compare"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Compare Options →
              </Link>

              <Link
                href="/compare"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                See Confidence Score
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Disclaimer: Informational tool only. Not an insurance provider. No “cheapest guarantee”.
            </p>
          </div>

          {/* Right trust box */}
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
            <div className="mb-4 text-sm font-bold text-slate-900">
              Why people trust this tool ✅
            </div>

            <div className="grid gap-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="font-semibold text-slate-900">State-accurate minimums</div>
                <div className="mt-1 text-sm text-slate-600">
                  We show minimum legal coverage for your state so you don’t buy invalid coverage.
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="font-semibold text-slate-900">Personalized plan</div>
                <div className="mt-1 text-sm text-slate-600">
                  Ownership + age band + history + car year → a practical plan you can understand.
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="font-semibold text-slate-900">Confidence Score</div>
                <div className="mt-1 text-sm text-slate-600">
                  Helps you know when you should compare more quotes (and why).
                </div>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <div className="font-semibold text-amber-900">Pro tip</div>
                <div className="mt-1 text-sm text-amber-800">
                  Always compare at least <span className="font-semibold">3 quotes</span> with the same
                  deductibles + limits.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            step: "Step 1",
            title: "Tell us your basics",
            desc: "State, ownership, age band, driving history, license type.",
          },
          {
            step: "Step 2",
            title: "Get a coverage plan",
            desc: "We recommend limits + deductible, and explain what it protects you from.",
          },
          {
            step: "Step 3",
            title: "Compare companies",
            desc: "See smart-ranked company cards + why each one fits your situation.",
          },
        ].map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
          >
            <div className="text-sm text-slate-500">{item.step}</div>
            <div className="mt-2 text-lg font-bold text-slate-900">{item.title}</div>
            <div className="mt-2 text-sm text-slate-600">{item.desc}</div>
          </div>
        ))}
      </section>

      <p className="mt-10 text-center text-sm text-slate-500">
        Built to explain insurance clearly — and help you feel confident. 💙
      </p>
    </main>
  );
}
