import { ArrowRight } from "lucide-react";
import HeroWorkspace from "./HeroWorkspace";
import { highlights, profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero-section pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="section-wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Software Engineer · Full-Stack
            </div>

            <h1 className="hero-title">
              Hi, I&apos;m{" "}
              <span className="hero-name">{profile.name}</span>
              <span className="hero-title-accent">
                I design interfaces &amp; build products end-to-end.
              </span>
            </h1>

            <p className="hero-lead">{profile.tagline}</p>

            <div className="hero-actions">
              <a href="#projects" className="btn-fill">
                View my work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#skills" className="btn-outline">
                Skills
              </a>
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                className="btn-outline"
              >
                Resume
              </a>
            </div>

            <dl className="hero-stats">
              {highlights.map((item) => (
                <div key={item.label} className="hero-stat">
                  <dt className="hero-stat-value">{item.value}</dt>
                  <dd className="hero-stat-label">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero-visual">
            <HeroWorkspace />
          </div>
        </div>
      </div>
    </section>
  );
}
