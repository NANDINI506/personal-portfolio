import { useEffect, useState } from "react";
import { terminalScript } from "../data/portfolio";

export default function DevTerminal() {
  const [lines, setLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState("");

  useEffect(() => {
    if (lineIndex >= terminalScript.length) {
      const reset = setTimeout(() => {
        setLines([]);
        setLineIndex(0);
        setCharIndex(0);
        setCurrentLine("");
      }, 4000);
      return () => clearTimeout(reset);
    }

    const entry = terminalScript[lineIndex];
    const fullText = entry.text;

    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(fullText.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, entry.type === "cmd" ? 38 : 18);
      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      setLines((prev) => [...prev, { ...entry, text: fullText }]);
      setCurrentLine("");
      setCharIndex(0);
      setLineIndex((i) => i + 1);
    }, 600);

    return () => clearTimeout(pause);
  }, [lineIndex, charIndex]);

  return (
    <div className="dev-terminal">
      <div className="dev-terminal-chrome">
        <span className="ui-dot bg-[#ff5f57]" />
        <span className="ui-dot bg-[#febc2e]" />
        <span className="ui-dot bg-[#28c840]" />
        <span className="dev-terminal-title">~/nandini — zsh</span>
      </div>
      <div className="dev-terminal-body">
        {lines.map((line, i) => (
          <p key={i} className={`dev-terminal-line dev-terminal-${line.type}`}>
            {line.type === "cmd" && <span className="dev-terminal-prompt">$ </span>}
            {line.text}
          </p>
        ))}
        {lineIndex < terminalScript.length && (
          <p
            className={`dev-terminal-line dev-terminal-${terminalScript[lineIndex].type}`}
          >
            {terminalScript[lineIndex].type === "cmd" && (
              <span className="dev-terminal-prompt">$ </span>
            )}
            {currentLine}
            <span className="dev-terminal-cursor" />
          </p>
        )}
      </div>
    </div>
  );
}
