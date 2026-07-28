"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const letterSteps = [
  {
    title: "For your birthday",
    text: "I hope today feels spacious enough for joy, loud enough for laughter and gentle enough for you to notice how loved you are.",
  },
  {
    title: "For how it started",
    text: "Some people arrive quietly and still change the atmosphere of a life. You did that without ever needing to announce it.",
  },
  {
    title: "For the memories",
    text: "The photographs matter, but what I treasure most is everything around them: the jokes, the courage and the ordinary days made brighter.",
  },
  {
    title: "For the moments I still remember too well",
    text: "I remember your kindness in the difficult moments and your joy in the easy ones. Both have left their mark on me.",
  },
  {
    title: "For you, Amara",
    text: "May the year ahead bring brave beginnings, peaceful endings and plenty of beautiful stories in between. Happy birthday.",
  },
];

export default function RevealPage() {
  const [step, setStep] = useState(0);

  const current = letterSteps[step];

  return (
    <main className="relative z-10 min-h-screen bg-[#fffaf5] px-6 py-16 soft-fade-up">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <div className="h-fit md:sticky md:top-10">
          <div className="overflow-hidden rounded-[2rem] border border-[#f1dede] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-[340px] w-full overflow-hidden sm:h-[420px] md:h-[620px]">
              <Image
                src="/images/amara-birthday.png"
                alt="Fictional birthday celebrant Amara smiling beside her cake"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                loading="eager"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="font-handwritten text-2xl text-[#b07a7a]">
                For Amara
              </p>
              <p className="mt-3 text-xl leading-8 text-[#7a5c5c]">
                Soft, beautiful, unforgettable.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#f1dede] bg-white p-6 shadow-sm transition duration-300 sm:p-8 md:p-12">
          <div className="text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b07a7a]">
              Final Reveal
            </p>

            <h1 className="font-heading text-4xl font-bold leading-tight text-[#5c3b3b] md:text-6xl">
              For Amara, with love
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#7a5c5c]">
              A few little pieces of us, opened one by one.
            </p>
          </div>

         <div className="mt-10 rounded-[2rem] border border-[#f3dede] bg-[#fffafa] p-6 shadow-sm transition duration-300 sm:mt-12 sm:p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#b07a7a]">
              Part {step + 1} of {letterSteps.length}
            </p>

            <h2 className="font-heading mt-3 text-2xl font-semibold text-[#5c3b3b] md:text-3xl">
              {current.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#7a5c5c]">
              {current.text}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/notes"
              className="rounded-full border border-[#d9b4b4] px-6 py-3 text-[#6d4b4b] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              Back
            </Link>

            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="rounded-full border border-[#d9b4b4] px-6 py-3 text-[#6d4b4b] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                Previous
              </button>
            )}

            {step < letterSteps.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="rounded-full bg-[#e7bcbc] px-6 py-3 font-medium text-[#4a2f2f] shadow-md transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
              >
                Open Next
              </button>
            ) : (
              <Link
                href="/"
                className="rounded-full bg-[#e7bcbc] px-6 py-3 font-medium text-[#4a2f2f] shadow-md transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
              >
                Start Again
              </Link>
            )}
          </div>
          <div className="mt-10 text-center">
            <p className="font-handwritten text-3xl text-[#b07a7a]">
              Happy Birthday, Amara
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-[#7a5c5c] md:text-lg">
              This fictional story is only a sample. A real birthday site can be
              written around your own photos, private jokes, favorite music and the
              moments that belong to you.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
