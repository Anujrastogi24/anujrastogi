"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1024px)");
    if (reduced.matches || !desktop.matches) return;

    let raf = 0;

    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(Math.max(window.scrollY, 0), 240);
        layer.style.transform = `scale(1.15) translateY(${y * -0.06}px)`;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      className="absolute inset-0 will-change-transform motion-reduce:transform-none"
      style={{ transform: "scale(1.15)" }}
    >
      {children}
    </div>
  );
}