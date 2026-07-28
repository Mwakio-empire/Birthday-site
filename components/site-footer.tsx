export default function SiteFooter() {
  const whatsappUrl =
    "https://wa.me/254714819427?text=Hi%20Michael%2C%20I%20would%20like%20a%20custom%20birthday%20website";

  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-[var(--background)] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-handwritten text-3xl text-[var(--accent-dark)]">
            Make their next birthday unforgettable.
          </p>
          <p className="mt-1 max-w-xl text-sm leading-6 text-[var(--muted)]">
            This is a fictional portfolio demo by Michael Mwakio. Your version can
            use your own photos, story, music and surprises.
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="button-primary shrink-0 px-6 py-3 text-sm"
        >
          Request yours on WhatsApp
        </a>
      </div>
    </footer>
  );
}
