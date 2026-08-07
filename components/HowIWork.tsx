const steps = [
  {
    number: "01",
    title: "Find the truth",
    description:
      "Get to the real customer insight and the commercial problem that actually needs solving.",
  },
  {
    number: "02",
    title: "Build the strategy",
    description:
      "Shape a brand position the business can own and commit to.",
  },
  {
    number: "03",
    title: "Align the teams",
    description:
      "Bring product, CRM, performance and CX together so the strategy actually ships.",
  },
];

export default function HowIWork() {
  return (
    <section className="mx-auto max-w-content px-6 py-24 lg:px-8">
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        How I work
      </h2>
      <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
        {steps.map((step) => (
          <div key={step.number} className="relative pl-2">
            <span className="font-display text-sm font-bold text-gold">
              {step.number}
            </span>
            <h3 className="mt-3 font-display text-xl font-bold text-ink">
              {step.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
