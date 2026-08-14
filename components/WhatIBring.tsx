const pillars = [
  {
    title: "Brand that drives growth",
    description:
      "Building distinctive brands and propositions that translate into acquisition, consideration, loyalty and revenue.",
  },
  {
    title: "Customer-led strategy",
    description:
      "Turning customer research, behaviour and data into clear choices about audiences, propositions and experiences.",
  },
  {
    title: "Leadership that gets things done",
    description:
      "Aligning Brand, Product, CRM, Performance and CX around shared customer and commercial goals.",
  },
];

export default function WhatIBring() {
  return (
    <section className="mx-auto max-w-content px-6 py-24 lg:px-8">
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        What I bring
      </h2>
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl border border-ink/10 bg-white p-7 shadow-sm"
          >
            <div className="h-1 w-10 rounded-full bg-gold" />
            <h3 className="mt-4 font-display text-lg font-bold text-ink">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
