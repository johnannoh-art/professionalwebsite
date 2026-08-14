const steps = [
  {
    number: "01",
    title: "Find the truth",
    description: "Understand the customer, the market and the commercial problem.",
  },
  {
    number: "02",
    title: "Build the strategy",
    description:
      "Turn insight into a clear proposition, brand strategy and plan for growth.",
  },
  {
    number: "03",
    title: "Mobilise the business",
    description:
      "Bring Brand, Product, CRM, Performance and CX together around a shared customer goal.",
  },
  {
    number: "04",
    title: "Prove the impact",
    description:
      "Connect marketing activity to acquisition, revenue, retention and long-term brand growth.",
  },
];

export default function HowIWork() {
  return (
    <section className="mx-auto max-w-content px-6 py-24 lg:px-8">
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        How I work
      </h2>
      <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4">
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
