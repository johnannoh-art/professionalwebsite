const LINKEDIN_URL = "https://www.linkedin.com/in/john-annoh/";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-display text-base font-bold text-ink">
            John Annoh
          </p>
          <p className="mt-1 text-sm text-ink/60">
            Brand &amp; marketing leadership for B2C and challenger brands.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-teal hover:underline"
          >
            LinkedIn
          </a>
          <p className="text-ink/50">© {year} John Annoh</p>
        </div>
      </div>
    </footer>
  );
}
