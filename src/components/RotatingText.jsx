import { useEffect, useState } from "react";
import { heroRotatingLines } from "../data/portfolio";

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % heroRotatingLines.length);
        setVisible(true);
      }, 350);
    }, 3400);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`rotating-text ${visible ? "rotating-text-visible" : ""}`}>
      {heroRotatingLines[index]}
    </span>
  );
}
