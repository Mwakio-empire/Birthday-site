import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen bg-[#fffaf5] px-6 py-10 md:py-16 soft-fade-up">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b07a7a]">
            Happy Birthday
          </p>

         <h1 className="font-heading text-4xl font-bold leading-tight text-[#5c3b3b] sm:text-5xl md:text-7xl">
            For her
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#7a5c5c] md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ducimus, ex hic inventore laboriosam ut vero! Atque dicta distinctio earum eum harum minus officiis possimus, quibusdam reiciendis repellat repellendus suscipit?
          </p>

          <p className="mt-4 text-base leading-7 text-[#8b6b6b] md:text-lg">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores cum deserunt ducimus, eos explicabo illo libero magni necessitatibus neque odio ratione recusandae repellendus reprehenderit voluptates. Earum natus perferendis vitae.</span><span>Animi beatae et expedita facilis in iusto maiores minus molestiae quas soluta! Consequuntur, dolore excepturi facilis illo ipsum magni maiores maxime numquam perspiciatis placeat repellat soluta ut velit veniam vero?</span>
          </p>

          <div className="mt-10">
            <Link
              href="/countdown"
              className="inline-block rounded-full bg-[#e7bcbc] px-8 py-4 text-lg font-medium text-[#4a2f2f] shadow-md transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
            >
              Start the Story
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-[2rem] border border-[#f1dede] bg-white shadow-sm">
            <div className="relative h-[340px] w-full sm:h-[420px] md:h-[620px]">
              <Image
                src="/images/"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
                className="object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <p className="font-handwritten text-2xl text-[#b07a7a]">
                For Her
              </p>
              <p className="mt-3 text-xl leading-8 text-[#7a5c5c]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}