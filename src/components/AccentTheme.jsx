import { useEffect, useState } from "react";
import { accentThemes } from "../data/portfolio";

const STORAGE_KEY = "portfolio-accent";

function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty("--accent", theme.primary);
  root.style.setProperty("--accent-secondary", theme.secondary);
  root.dataset.theme = theme.id;
}

export default function AccentTheme() {
  const [active, setActive] = useState("rose");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const theme = accentThemes.find((t) => t.id === saved) || accentThemes[0];
    setActive(theme.id);
    applyTheme(theme);
  }, []);

  const pick = (theme) => {
    setActive(theme.id);
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme.id);
  };

  return (
    <div className="accent-picker" aria-label="Pick accent color">
      <span className="accent-picker-label">Theme</span>
      <div className="accent-picker-swatches">
        {accentThemes.map((theme) => (
          <button
            key={theme.id}
            type="button"
            className={`accent-swatch ${active === theme.id ? "accent-swatch-active" : ""}`}
            style={{ "--swatch": theme.primary }}
            onClick={() => pick(theme)}
            title={theme.label}
            aria-label={`${theme.label} theme`}
            aria-pressed={active === theme.id}
          />
        ))}
      </div>
    </div>
  );
}
