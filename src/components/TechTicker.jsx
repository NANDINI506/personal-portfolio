import { tickerTech } from "../data/portfolio";

const colors = [
  "var(--accent)",
  "var(--accent-secondary)",
  "#f472b6",
  "#38bdf8",
  "#34d399",
  "#fbbf24",
];

export default function TechTicker() {
  const items = [...tickerTech, ...tickerTech];

  return (
    <div className="tech-ticker" aria-hidden="true">
      <div className="tech-ticker-fade tech-ticker-fade-left" />
      <div className="tech-ticker-fade tech-ticker-fade-right" />
      <div className="tech-ticker-track">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="tech-ticker-item"
            style={{ color: colors[i % colors.length] }}
          >
            {tech}
            <span className="tech-ticker-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
