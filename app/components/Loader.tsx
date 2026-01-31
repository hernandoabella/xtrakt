"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface LoaderProps {
  onLoadingComplete?: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderLogo1 = useRef<HTMLImageElement>(null);
  const loaderLogo2 = useRef<HTMLImageElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onLoadingComplete) onLoadingComplete();
        }
      });

      // 1. Setup Inicial
      tl.set(loaderLogo2.current, { display: "none", opacity: 0 })
        .set(beamRef.current, { scaleY: 0, opacity: 0 });

      // 2. Animación de Abducción y Logos (Sincronizada)
      tl.to(loaderLogo1.current, { opacity: 1, duration: 0.6 })
        .to(loaderLogo1.current, { 
          x: 3, 
          skewX: 10, 
          filter: "brightness(2)", 
          duration: 0.05, 
          repeat: 4, 
          yoyo: true 
        })
        // El muñequito es abducido (desaparece Logo1 con tirón hacia arriba)
        .to(loaderLogo1.current, { 
          y: -50, 
          opacity: 0, 
          duration: 0.4, 
          ease: "power4.in" 
        })
        .set(loaderLogo1.current, { display: "none" })
        .set(loaderLogo2.current, { display: "block" })
        // Aparece el Platillo Volador (Logo 2)
        .to(loaderLogo2.current, { 
          opacity: 1, 
          scale: 1.1, 
          duration: 0.4, 
          ease: "back.out(1.7)" 
        })
        .to(beamRef.current, { 
          scaleY: 1, 
          opacity: 0.6, 
          duration: 0.8, 
          ease: "expo.out" 
        }, "-=0.2")
        .to(loaderLogo2.current, { 
          rotation: 360, 
          duration: 1.2, 
          ease: "expo.inOut" 
        });

      // 3. Lógica del Contador Digital
      let obj = { val: 0 };
      gsap.to(obj, {
        val: 100,
        duration: 2.2,
        ease: "none",
        onUpdate: () => setPercent(Math.floor(obj.val)),
      });

      // 4. TRANSICIÓN MAESTRA (Igual a tu ejemplo)
      // El loader sube como un telón mientras revela la web
      tl.to(loaderRef.current, { 
        yPercent: -100, 
        duration: 1.2, 
        ease: "power4.inOut" 
      }, "+=0.3");

    }, loaderRef);

    return () => ctx.revert();
  }, [onLoadingComplete]);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[99999] bg-[#050505] flex items-center justify-center pointer-events-none overflow-hidden"
    >
      {/* Haz de luz de abducción */}
      <div 
        ref={beamRef}
        className="absolute w-32 md:w-48 h-screen bg-gradient-to-t from-blue-600/20 to-transparent origin-bottom blur-xl opacity-0"
      />

      <div className="relative flex flex-col items-center">
        {/* Contenedor de Logos */}
        <div className="relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center">
          <img 
            ref={loaderLogo1} 
            src="/logo.png" 
            className="absolute w-full h-full object-contain opacity-0" 
            alt="Abductee" 
          />
          <img 
            ref={loaderLogo2} 
            src="/logo2.png" 
            className="absolute w-full h-full object-contain hidden" 
            alt="UFO" 
          />
        </div>

        {/* HUD Técnico */}
        <div className="absolute -bottom-20 flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="font-cosmic text-[8px] text-zinc-500 tracking-[1em] uppercase animate-pulse">
              Abducting_Data
            </div>
            <div className="font-mono text-[10px] text-blue-500">{percent}%</div>
          </div>
          
          {/* Barra de progreso minimalista */}
          <div className="w-40 h-[1px] bg-zinc-900 relative overflow-hidden">
            <div 
              className="absolute h-full bg-blue-600 transition-all duration-100"
              style={{ width: `${percent}%` }}
            />
          </div>
          
          <div className="font-cosmic text-[6px] text-zinc-800 tracking-[0.5em] uppercase">
            Nebola_Protocol_v.2026
          </div>
        </div>
      </div>
    </div>
  );
}