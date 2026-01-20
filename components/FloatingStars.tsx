"use client";

import { useEffect, useState } from "react";

type Star = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

const STARS = ["✦", "✧", "✩", "✪", "✫"];

export default function FloatingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated: Star[] = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 18,
      duration: 14 + Math.random() * 12,
      delay: Math.random() * 12,
      opacity: 0.25 + Math.random() * 0.4,
    }));

    setStars(generated);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {stars.map((s) => (
        <span
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.left}%`,
            bottom: "-10%",
            fontSize: s.size,
            opacity: s.opacity,
            animation: `floatUp ${s.duration}s linear ${s.delay}s infinite`,
            filter: "drop-shadow(0 0 8px rgba(255,183,227,0.6))",
            color: "#ffb7e3",
          }}
        >
          {STARS[s.id % STARS.length]}
        </span>
      ))}
    </div>
  );
}
