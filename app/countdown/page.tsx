import Link from "next/link";

export default function CountdownPage() {
  return (
    <main className="relative z-10 min-h-screen bg-[#fffaf5] px-6 soft-fade-up flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-[#b07a7a] mb-4">
          lorem ispidous
        </p>

        <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#5c3b3b] leading-tight">
          Today is for you,(name)
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#7a5c5c] leading-8">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cupiditate est repellendus veritatis. Ab aliquid dolorem doloribus ducimus error et hic iure nisi obcaecati, officia praesentium quibusdam repudiandae soluta veritatis!</span><span>Illo inventore iste nesciunt nobis pariatur perspiciatis qui ut! Accusantium aliquam architecto atque earum eius, incidunt neque officiis omnis perspiciatis provident quaerat quis quos repudiandae sit totam ullam unde vitae?</span><span>Aliquid animi, aspernatur deleniti doloremque eius fugiat illo labore natus neque nesciunt, provident ratione recusandae veniam! A debitis deleniti ducimus odio odit recusandae temporibus, vitae! Obcaecati qui quos vel vitae?</span>
        </p>

        <div className="mt-10 rounded-3xl border border-[#f0d6d6] bg-white/70 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b07a7a]">
            Birthday Note
          </p>
          <p className="mt-4 text-2xl md:text-3xl text-[#5c3b3b] font-semibold leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <p className="mt-8 text-[#8b6b6b] leading-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cupiditate debitis deserunt dicta eveniet harum illo, maiores mollitia nemo, quidem rem repellendus repudiandae sed velit vero! Animi commodi fuga fugit!
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