"use client";

import { useState } from "react";

type CaseStudy = {
  title: string;
  company: string;
  role: string;
  dates: string;
  summary: string;
  detail: string;
  results: string[];
};

const caseStudies: CaseStudy[] = [
  {
    title: "Creating Japan’s fastest-growing casino brand",
    company: "Bally’s Interactive",
    role: "Head of Brand",
    dates: "June 2019 – Dec 2023",
    summary: "Built a new online gaming brand from scratch for the Japanese market.",
    detail:
      "Built a new online gaming brand from scratch for the Japanese market, owning positioning, creative and go-to-market from a standing start.",
    results: [
      "€1.2M monthly revenue and 50,000 active players by month five",
      "40% prompted brand awareness within 18 months",
    ],
  },
  {
    title: "Launching Sportsbook across UK & Spain",
    company: "Bally’s Interactive",
    role: "Head of Marketing",
    dates: "Jan – Nov 2024",
    summary: "Led go-to-market for a new product launch across six departments.",
    detail:
      "Led go-to-market for a new product launch across six departments, aligning product, CRM, performance and CX behind a single commercial plan.",
    results: [
      "£770k revenue, 110% of target",
      "6% cross-product conversion, 150% of target",
    ],
  },
  {
    title: "iD Mobile — disrupting the UK mobile market",
    company: "Currys",
    role: "Brand Marketing Manager",
    dates: "Dec 2015 – Apr 2018",
    summary: "Owned brand strategy and a £2.2M budget for a challenger telecoms brand.",
    detail:
      "Owned brand strategy and a £2.2M budget for a challenger telecoms brand, building the case for investment and shaping the customer proposition.",
    results: [
      "Doubled brand awareness to 36%",
      "330,000 customers acquired vs. a 195,000 target",
      "NPS up from -20 to +12",
    ],
  },
];

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="case-studies" className="mx-auto max-w-content px-6 py-24 lg:px-8">
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        The work
      </h2>
      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {caseStudies.map((study, index) => {
          const isOpen = openIndex === index;
          return (
            <button
              key={study.title}
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex flex-col rounded-2xl border border-ink/10 bg-white p-7 text-left shadow-sm transition hover:border-teal/40 hover:shadow-md"
            >
              <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                {study.company} · {study.role}
              </p>
              <p className="mt-1 text-xs text-ink/50">{study.dates}</p>
              <h3 className="mt-4 font-display text-xl font-bold leading-snug text-ink">
                {study.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {isOpen ? study.detail : study.summary}
              </p>

              {isOpen && (
                <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5">
                  {study.results.map((result) => (
                    <li
                      key={result}
                      className="flex gap-2 text-sm leading-relaxed text-ink/80"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {result}
                    </li>
                  ))}
                </ul>
              )}

              <span className="mt-6 font-display text-sm font-semibold text-teal">
                {isOpen ? "Show less −" : "Read more +"}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
