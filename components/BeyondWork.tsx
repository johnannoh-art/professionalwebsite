const items = [
  {
    title: "Podcast host",
    description: "“Lessons Outside the Classroom”",
  },
  {
    title: "Youth mentor",
    description: "Mentoring students across two secondary schools",
  },
  {
    title: "Co-host, LaunchPad",
    description: "An employability programme for 18–25 year-olds",
  },
  {
    title: "Founder",
    description: "Built and sold a personal chef business, Chef’s Compliments",
  },
];

export default function BeyondWork() {
  return (
    <section className="mx-auto max-w-content px-6 py-24 lg:px-8">
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Beyond the day job
      </h2>
      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title}>
            <div className="h-1 w-10 rounded-full bg-gold" />
            <h3 className="mt-4 font-display text-lg font-bold text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
