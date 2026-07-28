import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const experience = ["Gallery", "Timeline", "Quiz", "Hidden notes", "Final letter"];

  return (
    <main className="relative z-10 min-h-screen bg-[var(--background)] px-5 pb-10 pt-10 soft-fade-up sm:px-8 md:pb-16 md:pt-14">
      <div className="mx-auto max-w-7xl">
        <section className="grid items-center gap-10 md:grid-cols-[1.02fr_0.98fr] md:gap-14">
          <div className="order-2 text-center md:order-1 md:text-left">
            <h1 className="font-heading text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-[var(--ink)] sm:text-6xl lg:text-[5.4rem]">
              A little world made just for{" "}
              <span className="font-handwritten block pt-2 font-normal text-[var(--accent-dark)] sm:inline sm:pt-0">
                Amara
              </span>
            </h1>

            <div className="mx-auto mt-6 h-px w-32 bg-[var(--accent-soft)] md:mx-0" />

            <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-[var(--muted)] md:mx-0 md:text-xl">
              Photos, memories, music and tiny surprises - gathered into one
              birthday experience made just for her.
            </p>

            <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:justify-center md:justify-start">
              <Link href="/countdown" className="button-primary px-8 py-4 text-base">
                Start the story <span aria-hidden="true">&rarr;</span>
              </Link>

              <a href="#experience" className="text-link text-base">
                See what&apos;s inside <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="hero-frame mx-auto max-w-[34rem]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/images/amara-birthday.png"
                  alt="Fictional birthday celebrant Amara smiling beside her cake"
                  fill
                  sizes="(max-width: 768px) 92vw, 46vw"
                  loading="eager"
                  className="object-cover"
                />
              </div>

              <div className="px-2 pb-2 pt-4 text-center md:text-left">
                <p className="font-handwritten text-3xl text-[var(--accent-dark)]">
                  For Amara &hearts;
                </p>
                <p className="mt-1 text-sm italic leading-6 text-[var(--muted)]">
                  A fictional demo, made to show what your story could feel like.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-title"
          className="mt-14 rounded-[1.75rem] border border-[var(--border)] bg-white/55 px-5 py-7 sm:px-8 md:mt-20"
        >
          <h2
            id="experience-title"
            className="font-heading text-center text-2xl text-[var(--ink)] md:text-3xl"
          >
            Your experience includes
          </h2>

          <ul className="mt-6 grid grid-cols-2 gap-y-4 text-center text-[var(--muted)] sm:grid-cols-5">
            {experience.map((item) => (
              <li
                key={item}
                className="border-[var(--border)] px-3 text-sm first:border-l-0 sm:border-l sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
