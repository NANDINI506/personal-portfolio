import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="section-wrap">
        <SectionHeading
          number="01 — Skills"
          title="Technologies I work with"
          subtitle="Grouped by domain — every language, framework, and tool I use, laid out clearly."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className={`skill-bento group ${category.span}`}
              style={{
                ["--accent"]: category.accent,
                animationDelay: `${index * 80}ms`,
              }}
            >
              <div className="skill-bento-glow" aria-hidden="true" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="skill-bento-index">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-2xl font-bold text-white mt-2">
                      {category.title}
                    </h3>
                  </div>
                  <span
                    className="skill-bento-count"
                    style={{ color: category.accent }}
                  >
                    {category.skills.length}
                  </span>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <span className="skill-item">
                        <span
                          className="skill-item-dot"
                          style={{ background: category.accent }}
                        />
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
