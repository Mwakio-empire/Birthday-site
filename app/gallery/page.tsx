import Image from "next/image";
import Link from "next/link";

const memories = [
  {
    title: "The birthday glow",
    text: "That quiet smile right before the candles were lit.",
    image: "/images/amara-birthday.png",
  },
  {
    title: "A room full of warmth",
    text: "Soft flowers, candlelight and the people who make life sweeter.",
    image: "/images/amara-birthday.png",
  },
  {
    title: "One wish for the year ahead",
    text: "More joy, more courage and more reasons to celebrate yourself.",
    image: "/images/amara-birthday.png",
  },
];

export default function GalleryPage() {
  return (
    <main className="relative z-10 min-h-screen bg-[#fffaf5] px-6 py-16 soft-fade-up">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b07a7a]">
            Memory Book
          </p>
          <h1 className="font-heading text-4xl font-bold text-[#5c3b3b] md:text-6xl">
            A few beautiful little moments
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#7a5c5c]">
            A small gallery can hold the photographs that mean the most to you both.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[2rem] border border-[#f1dede] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden sm:h-72">
                <Image
                  src={memory.image}
                  alt={memory.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="eager"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h2 className="font-heading text-2xl font-semibold text-[#5c3b3b]">
                  {memory.title}
                </h2>
                <p className="mt-3 leading-7 text-[#7a5c5c]">{memory.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/countdown"
            className="rounded-full border border-[#d9b4b4] px-6 py-3 text-[#6d4b4b] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            Back
          </Link>

          <Link
            href="/timeline"
            className="rounded-full bg-[#e7bcbc] px-6 py-3 font-medium text-[#4a2f2f] shadow-md transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
          >
            Next
          </Link>
        </div>
      </div>
    </main>
  );
}
