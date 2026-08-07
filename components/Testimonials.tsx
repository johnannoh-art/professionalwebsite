const testimonials = [
  {
    quote:
      "He is a talented commercial marketer with a keen eye for branding and a thoughtful approach to building and strengthening brand identity.",
    name: "VP of Marketing",
  },
  {
    quote:
      "Working with John has been an incredibly transformative experience. Not only did he provide invaluable guidance but he also played a pivotal role in my personal growth journey.",
    name: "Direct Report",
  },
  {
    quote:
      "John goes above and beyond to deliver results, and the resounding success of projects under his stewardship are a testament to his hard work and keen eye for detail.",
    name: "Studio Manager",
  },
  {
    quote: "John is not just a leader, he is a driving force for collaboration.",
    name: "Senior Designer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white/60">
      <div className="mx-auto max-w-content px-6 py-24 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          What people say
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-ink/10 bg-cream p-7"
            >
              <p className="text-lg leading-relaxed text-ink/85">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-5 font-display text-sm font-semibold text-teal">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
