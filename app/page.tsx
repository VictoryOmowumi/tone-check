export default function Home() {
  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-8">
      <header className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          ToneCheck
        </p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          Ready to check your tone?
        </h1>
        <p className="text-base text-gray-400">
          Paste a message, get instant feedback, and rewrite with confidence.
        </p>
      </header>

      <div className="relative w-full max-w-3xl bg-gemini-surface rounded-[32px] p-4 transition-colors focus-within:bg-[#28292A]">
        <label className="sr-only" htmlFor="tone-input">
          Paste your message
        </label>
        <textarea
          id="tone-input"
          name="tone-input"
          placeholder="Paste your email or slack message here..."
          className="w-full h-32 bg-transparent text-gray-100 placeholder-gray-500 resize-none focus:outline-none text-lg p-2"
        />

        {/* Action Bar inside the input container */}
        <div className="flex justify-between items-center mt-4 px-2">
          <div className="text-xs text-gray-500">
            {/* Char count or icon could go here */}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="p-2 hover:bg-white/10 rounded-full transition text-gray-400 hover:text-gray-200"
            >
              Analyze
            </button>
            <button
              type="button"
              className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Rewrite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
