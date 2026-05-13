"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const notes = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis cum cumque dicta eius facilis fuga laudantium libero maxime minima minus necessitatibus officia porro quod rerum tenetur totam ut, voluptatem.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis cum cumque dicta eius facilis fuga laudantium libero maxime minima minus necessitatibus officia porro quod rerum tenetur totam ut, voluptatem..",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis cum cumque dicta eius facilis fuga laudantium libero maxime minima minus necessitatibus officia porro quod rerum tenetur totam ut, voluptatem.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis cum cumque dicta eius facilis fuga laudantium libero maxime minima minus necessitatibus officia porro quod rerum tenetur totam ut, voluptatem.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis cum cumque dicta eius facilis fuga laudantium libero maxime minima minus necessitatibus officia porro quod rerum tenetur totam ut, voluptatem.",
];

export default function NotesPage() {
  const [opened, setOpened] = useState<number[]>([]);
  const [showFunnyPhoto, setShowFunnyPhoto] = useState(false);

  const toggleNote = (index: number) => {
    if (opened.includes(index)) {
      setOpened(opened.filter((item) => item !== index));
    } else {
      setOpened([...opened, index]);
    }
  };

  return (
    <main className="relative z-10 min-h-screen bg-[#fffaf5] px-6 py-16 soft-fade-up">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b07a7a]">
            Hidden Notes
          </p>
          <h1 className="font-heading text-4xl font-bold text-[#5c3b3b] md:text-6xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#7a5c5c]">
            Just a few  thoughts for you — tap each
            one to open it.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {notes.map((note, index) => {
            const isOpen = opened.includes(index);

            return (
              <button
                key={index}
                onClick={() => toggleNote(index)}
                className="w-full rounded-[2rem] border border-[#f1dede] bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#b07a7a]">
                  Note {index + 1}
                </p>

                <h2 className="font-heading mt-3 text-2xl font-semibold text-[#5c3b3b]">
                  {isOpen ? "" : "Tap to reveal"}
                </h2>

                {isOpen && (
                  <p className="mt-4 leading-8 text-[#7a5c5c]">{note}</p>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setShowFunnyPhoto(!showFunnyPhoto)}
            className="rounded-full border border-[#d9b4b4] bg-white px-6 py-3 text-[#6d4b4b] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            {showFunnyPhoto ? "Hide the secret extra" : "Open a secret extra"}
          </button>
        </div>

        {showFunnyPhoto && (
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#f1dede] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-[300px] w-full overflow-hidden sm:h-[420px]">
              <Image
                src="/images/"
                alt="A funny hidden photo of ABC"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 text-center">
              <p className="text-sm uppercase tracking-[0.25em] text-[#b07a7a]">
                Secret Extra
              </p>
              <p className="mt-3 text-lg leading-8 text-[#7a5c5c]">
                You may not like this one, but I still had to hide it in here

              </p>
            </div>
          </div>
        )}

        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/quiz"
            className="rounded-full border border-[#d9b4b4] px-6 py-3 text-[#6d4b4b] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            Back
          </Link>

          <Link
            href="/reveal"
            className="rounded-full bg-[#e7bcbc] px-6 py-3 font-medium text-[#4a2f2f] shadow-md transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
          >
            Final Page
          </Link>
        </div>
      </div>
    </main>
  );
}