export default function SectionHeading({ number, title, subtitle, align = "left" }) {
  return (
    <div className={`mb-10 md:mb-12 ${align === "center" ? "text-center" : ""}`}>
      <p className="font-mono text-xs tracking-[0.2em] uppercase mb-3 text-[color:var(--accent)]">
        {number}
      </p>
      <h2
        className={`font-display text-3xl md:text-5xl font-bold tracking-tight text-white ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[#8b8b9e] text-base md:text-lg leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
