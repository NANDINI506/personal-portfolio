import avatarImg from "../assets/avatar.png";
import { profile } from "../data/portfolio";

export default function HeroWorkspace() {
  return (
    <div className="hero-workspace">
      <div className="hero-workspace-chrome">
        <div className="hero-workspace-dots">
          <span className="ui-dot bg-[#ff5f57]" />
          <span className="ui-dot bg-[#febc2e]" />
          <span className="ui-dot bg-[#28c840]" />
        </div>
        <span className="hero-workspace-url">nandini.dev / portfolio</span>
        <span className="hero-workspace-live">Live preview</span>
      </div>

      <div className="hero-workspace-body">
        <aside className="hero-workspace-profile">
          <div className="hero-avatar-shell">
            <img
              src={avatarImg}
              alt={profile.name}
              className="hero-avatar-img"
            />
            <div className="hero-avatar-vignette" aria-hidden="true" />
          </div>

          <div className="hero-workspace-id">
            <p className="hero-workspace-name">{profile.name}</p>
            <p className="hero-workspace-role">{profile.role}</p>
          </div>

          <div className="hero-workspace-tags">
            <span>React</span>
            <span>Node</span>
            <span>UI/UX</span>
          </div>
        </aside>

        <div className="hero-workspace-panel">
          <div className="hero-workspace-panel-head">
            <p>Build snapshot</p>
            <span>2026</span>
          </div>

          <div className="hero-workspace-metrics">
            <div className="hero-metric hero-metric-a">
              <span className="hero-metric-label">Frontend</span>
              <span className="hero-metric-value">React · TS</span>
            </div>
            <div className="hero-metric hero-metric-b">
              <span className="hero-metric-label">Backend</span>
              <span className="hero-metric-value">Node · Python</span>
            </div>
            <div className="hero-metric hero-metric-c">
              <span className="hero-metric-label">Focus</span>
              <span className="hero-metric-value">Full-Stack</span>
            </div>
          </div>

          <div className="hero-workspace-chart">
            <div className="hero-chart-bars">
              <span style={{ height: "42%" }} />
              <span style={{ height: "68%" }} />
              <span style={{ height: "55%" }} />
              <span style={{ height: "82%" }} />
              <span style={{ height: "61%" }} />
              <span style={{ height: "74%" }} />
            </div>
            <p className="hero-chart-caption">Design · Code · Ship</p>
          </div>
        </div>
      </div>
    </div>
  );
}
