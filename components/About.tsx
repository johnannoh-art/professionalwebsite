export default function About() {
  return (
    <section className="bg-white/60">
      <div className="mx-auto max-w-content px-6 py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            About
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              I&rsquo;m John — a brand and marketing leader who moved from
              agency-side account management (VCCP, BD Network, Mullen Lowe)
              into in-house brand leadership across telecoms, hospitality,
              retail and iGaming. I&rsquo;ve led multi-million-pound budgets
              and international teams, but I&rsquo;m probably best known for
              bringing people together behind a shared customer vision and
              turning brand strategy into measurable growth.
            </p>
            <p>
              Currently working fractionally with{" "}
              <span className="font-semibold text-ink">
                The Great Friendship Project
              </span>
              ,{" "}
              <span className="font-semibold text-ink">
                ArrowTown Drinks
              </span>{" "}
              and{" "}
              <span className="font-semibold text-ink">
                Grae Matta Foundation
              </span>
              , while actively looking for my next Head of Brand or Head of
              Marketing role.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
