const stats = [
  {
    value: "330K",
    label: "Customers acquired",
    detail: "169% of target",
  },
  {
    value: "€1.2M",
    label: "Monthly revenue",
    detail: "Built from zero in five months",
  },
  {
    value: "£8.5M",
    label: "Media budget managed",
    detail: "13% lower CPM",
  },
  {
    value: "110%",
    label: "Revenue target achieved",
    detail: "Sportsbook launch",
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
              <p className="mt-2 text-sm font-semibold leading-snug text-ink">
                {stat.label}
              </p>
              <p className="mt-0.5 text-sm leading-snug text-ink/60">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
