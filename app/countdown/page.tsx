import Link from "next/link";

export default function CountdownPage() {
  return (
    <main className="relative z-10 min-h-screen bg-[#fffaf5] px-6 soft-fade-up flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-[#b07a7a] mb-4">
          The birthday note
        </p>

        <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#5c3b3b] leading-tight">
          Today is for you, Amara
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#7a5c5c] leading-8">
          Before the photos, stories and little surprises, there is one thing you
          should know: this whole place was made to remind you how deeply you are
          seen, celebrated and loved.
        </p>

        <div className="mt-10 rounded-3xl border border-[#f0d6d6] bg-white/70 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b07a7a]">
            Birthday Note
          </p>
          <p className="mt-4 text-2xl md:text-3xl text-[#5c3b3b] font-semibold leading-relaxed">
            May this next chapter be gentle with your heart and generous with your dreams.
          </p>
        </div>

        <p className="mt-8 text-[#8b6b6b] leading-7">
          Take your time as you move through each page. Every detail is part of the gift.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-full border border-[#d9b4b4] px-6 py-3 text-[#6d4b4b] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            Back
          </Link>

          <Link
            href="/gallery"
            className="rounded-full bg-[#e7bcbc] px-6 py-3 text-[#4a2f2f] font-medium shadow-md transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
          >
            Next
          </Link>
        </div>
      </div>
    </main>
  );
}
