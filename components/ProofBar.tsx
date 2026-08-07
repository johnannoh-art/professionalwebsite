const stats = [
  {
    value: "330,000",
    label: "customers acquired in year one, vs. a 195,000 target (iD Mobile)",
  },
  {
    value: "€1.2M",
    label: "monthly revenue built from zero in 5 months (Bally’s, Japan)",
  },
  {
    value: "£8.5M",
    label: "media budget managed, 13% CPM reduction (Premier Inn)",
  },
  {
    value: "110%",
    label: "of revenue target — Sportsbook launch, UK & Spain (Bally’s)",
  },
];

export default function ProofBar() {
  return (
    <section className="border-y border-ink/10 bg-white/60">
      <div className="mx-auto max-w-content px-6 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-extrabold tracking-tight text-teal sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-ink/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
