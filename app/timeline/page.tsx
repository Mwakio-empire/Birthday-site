import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "At ABC",
    text: "Write whatever will make her special.usiniulize hiyo I already gave u the code.",
  },
  {
    title: "Title 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis cum cumque dicta eius facilis fuga laudantium libero maxime minima minus necessitatibus officia porro quod rerum tenetur totam ut, voluptatem.",
  },
  {
    title: "Title 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis cum cumque dicta eius facilis fuga laudantium libero maxime minima minus necessitatibus officia porro quod rerum tenetur totam ut, voluptatem.",
  },
  {
    title: "Title 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis cum cumque dicta eius facilis fuga laudantium libero maxime minima minus necessitatibus officia porro quod rerum tenetur totam ut, voluptatem.",
  },
  {
    title: "Title 5",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis cum cumque dicta eius facilis fuga laudantium libero maxime minima minus necessitatibus officia porro quod rerum tenetur totam ut, voluptatem..",
  },
  {
    title: "Title 6",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis cum cumque dicta eius facilis fuga laudantium libero maxime minima minus necessitatibus officia porro quod rerum tenetur totam ut, voluptatem.",
  },
  {
    title: "Title 6",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis cum cumque dicta eius facilis fuga laudantium libero maxime minima minus necessitatibus officia porro quod rerum tenetur totam ut, voluptatem.",
  },
];

export default function TimelinePage() {
  return (
    <main className="relative z-10 min-h-screen bg-[#fffaf5] px-6 py-16 soft-fade-up">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b07a7a]">
            Our Story
          </p>
          <h1 className="font-heading text-4xl font-bold text-[#5c3b3b] md:text-6xl">
            Little chapters of us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#7a5c5c]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid architecto dolor dolores ea expedita fugiat harum itaque iusto, laborum nisi nobis possimus ratione, reiciendis saepe sapiente suscipit totam voluptatum?
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-[#f1dede] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#b07a7a]">
                  Chapter {index + 1}
                </p>
                <h2 className="font-heading mt-3 text-2xl font-semibold text-[#5c3b3b] md:text-3xl">
                  {event.title}
                </h2>
                <p className="mt-4 leading-8 text-[#7a5c5c]">{event.text}</p>
              </div>
            ))}
          </div>

          <div className="h-fit md:sticky md:top-10">
            <div className="overflow-hidden rounded-[2rem] border border-[#f1dede] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-[340px] w-full overflow-hidden sm:h-[420px] md:h-[480px]">
                <Image
                  src="/images/"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[#b07a7a]">
                  A favorite frame
                </p>
                <p className="mt-3 text-xl leading-8 text-[#7a5c5c]">
                  A whole personality in one picture.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/gallery"
            className="rounded-full border border-[#d9b4b4] px-6 py-3 text-[#6d4b4b] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            Back
          </Link>

          <Link
            href="/quiz"
            className="rounded-full bg-[#e7bcbc] px-6 py-3 font-medium text-[#4a2f2f] shadow-md transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
          >
            Next
          </Link>
        </div>
      </div>
    </main>
  );
}