"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ManifestoScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const phrases = [
    "404 — YOU ARE NOT HERE",
    "NEBOLA: MENTAL IMMUNITY",
    "SYSTEM ERROR: CONSCIOUSNESS DETECTED",
    "INVISIBLE BY DESIGN",
    "YOU DON’T WAKE UP. YOU BREAK OUT.",
    "NOT LOST. NOT FOUND.",
    "THIS IS NOT FASHION. THIS IS A SIGNAL.",
    "NEBOLA ACTIVE",
  ];

  useEffect(() => {
    const scrollContent = scrollRef.current;
    const container = containerRef.current;
    if (!scrollContent || !container) return;

    // Clonamos el contenido para el loop infinito perfecto
    const clone = scrollContent.cloneNode(true);
    container.appendChild(clone);

    const duration = 40; // Ajusta la velocidad aquí (más alto = más lento)

    const scrollAnimation = gsap.to(container, {
      x: "-50%",
      duration: duration,
      ease: "none",
      repeat: -1,
    });

    // Pausar al hacer hover (opcional, le da un toque interactivo)
    container.addEventListener("mouseenter", () => scrollAnimation.pause());
    container.addEventListener("mouseleave", () => scrollAnimation.play());

    return () => {
      scrollAnimation.kill();
    };
  }, []);

  return (
    <section className="bg-white text-black py-4 overflow-hidden border-y border-zinc-800 flex whitespace-nowrap select-none">
      <div ref={containerRef} className="flex gap-12 items-center">
        <div ref={scrollRef} className="flex gap-12 items-center uppercase font-cosmic text-[10px] md:text-sm tracking-[0.4em]">
          {phrases.map((phrase, idx) => (
            <React.Fragment key={idx}>
              <span className="font-black italic">{phrase}</span>
              <span className="text-[20px] opacity-20">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}