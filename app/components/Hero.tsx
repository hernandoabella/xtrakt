"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgTextContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animación de entrada coordinada
      tl.fromTo(
        bgTextContainerRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 2, ease: "expo.out" }
      )
      .fromTo(
        logoRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5 },
        "-=1.5"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, letterSpacing: "1em" },
        "-=0.5"
      );

      // Flotación del platillo (abducción activa)
      gsap.to(logoRef.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen w-full flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
    >
      {/* CAPA DE FONDO: N [LOGO] ND15 */}
      <div 
        ref={bgTextContainerRef}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0"
      >
        <div className="flex items-center justify-center w-full px-4">
          {/* La N inicial */}
          
          
          {/* Espacio hueco para el Logo (el logo físico está arriba, esto es el espaciador) */}
          <div className="w-[15vw] md:w-[20vw]" />

          {/* El resto de la marca */}
          <h2 className="font-cosmic text-[22vw] md:text-[25vw] uppercase italic leading-none text-white opacity-[0.03]">NAND15
          </h2>
        </div>
      </div>

      {/* CAPA DEL LOGO (PLATILLO VOLADOR) */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          {/* Resplandor de abducción detrás del logo */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full animate-pulse" />
          
          <img 
            ref={logoRef}
            src="/logo.png" 
            alt="Nand15 UFO" 
            className="w-48 md:w-[400px] lg:w-[500px] h-auto object-contain relative z-20"
          />
        </div>
        
        {/* SUBTÍTULO */}
        <div 
          ref={textRef}
          className="mt-6 md:mt-0 text-center z-20"
        >
          <span className="font-cosmic text-[8px] md:text-[10px] text-zinc-500 uppercase tracking-[0.8em] block">
            Traveling on the Space
          </span>
        </div>
      </div>

      {/* AMBIENTE ESPACIAL (Nebulosas sutiles) */}
      <div className="absolute top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}