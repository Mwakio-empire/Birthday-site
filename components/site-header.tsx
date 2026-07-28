import Link from "next/link";

const whatsappUrl =
  "https://wa.me/254714819427?text=Hi%20Michael%2C%20I%20would%20like%20a%20custom%20birthday%20website";

export default function SiteHeader() {
  return (
    <header className="site-header relative z-20 border-b border-[var(--border)] bg-[var(--background)]/95 px-5 py-4 backdrop-blur sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link
          href="/"
          className="font-heading text-xl text-[var(--ink)] transition-colors hover:text-[var(--accent-dark)] sm:text-2xl"
        >
          A Birthday Story
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="button-primary px-5 py-2.5 text-sm sm:px-6"
          aria-label="Request a custom birthday website on WhatsApp"
        >
          Request yours
        </a>
      </div>
    </header>
  );
}
