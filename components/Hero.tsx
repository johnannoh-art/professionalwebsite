import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div className="order-2 lg:order-1">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Head of Brand &amp; Marketing · London
          </p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            I build{" "}
            <span className="underline-gold">customer-led brands</span> that
            drive commercial growth.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
            Brand and marketing leader with a track record of launching,
            repositioning and scaling B2C brands. From doubling awareness and
            beating customer acquisition targets by 69% at iD Mobile to
            building Japan&rsquo;s fastest-growing online gaming brand.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#case-studies"
              className="rounded-full bg-teal px-7 py-3.5 font-display text-sm font-semibold text-cream shadow-sm transition hover:bg-teal-dark"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/15 px-7 py-3.5 font-display text-sm font-semibold text-ink transition hover:border-ink/30"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div
            className="absolute -inset-4 -z-10 rotate-3 rounded-[2rem] bg-teal/90 sm:-inset-6"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-5 -right-5 -z-10 h-24 w-24 -rotate-6 rounded-2xl bg-gold sm:h-32 sm:w-32"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-ink/10 shadow-xl">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of John Annoh"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
