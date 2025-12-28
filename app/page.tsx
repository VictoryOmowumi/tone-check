export default function Home() {
  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-8">
      <header className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          ToneCheck
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Ready to check your tone?
        </h1>
        <p className="text-base text-slate-300">
          Paste a message, get instant feedback, and rewrite with confidence.
        </p>
      </header>

      <section className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
        <label className="sr-only" htmlFor="tone-input">
          Paste your message
        </label>
        <textarea
          id="tone-input"
          name="tone-input"
          placeholder="Paste your email or slack message here..."
          className="min-h-[220px] w-full resize-none rounded-2xl border border-white/10 bg-[#131314] p-4 text-base text-slate-100 placeholder:text-slate-500 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500/30"
        />
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-full border border-white/10 px-6 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10"
          >
            Analyze
          </button>
          <button
            type="button"
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#131314] transition hover:bg-slate-100"
          >
            Rewrite
          </button>
        </div>
      </section>
    </div>
  );
}
