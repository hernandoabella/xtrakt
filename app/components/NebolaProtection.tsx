"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ShieldAlert, Lock, Unlock, AlertTriangle } from "lucide-react";

interface NebolaProtectionProps {
  onAccept: () => void;
}

export default function NebolaProtection({ onAccept }: NebolaProtectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDenied, setIsDenied] = useState(false);

  useEffect(() => {
    // Animación de entrada de la advertencia
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, scale: 0.9, filter: "blur(10px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  const handleDeny = () => {
    setIsDenied(true);
    // Simula un bloqueo del sistema
    setTimeout(() => {
      window.location.href = "https://www.google.com"; // O cualquier sitio "normal"
    }, 1500);
  };

  const handleAccept = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: onAccept
    });
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100000] bg-[#050505] flex items-center justify-center p-6 text-white overflow-hidden"
    >
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicGLeE/giphy.gif')] bg-cover" />

      <div ref={contentRef} className="max-w-md w-full space-y-8 text-center border border-zinc-900 p-8 md:p-12 bg-black/50 backdrop-blur-md relative">
        {isDenied && (
          <div className="absolute inset-0 bg-red-600 flex flex-col items-center justify-center z-50 animate-pulse">
            <Lock size={48} className="mb-4" />
            <h2 className="font-cosmic text-xl font-black">ACCESS_DENIED</h2>
            <p className="font-mono text-[10px] mt-2">REDIRECTING_TO_SAFE_ZONE...</p>
          </div>
        )}

        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-zinc-950 border border-zinc-800 text-blue-500 animate-pulse">
            <ShieldAlert size={40} strokeWidth={1} />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="font-cosmic text-xs tracking-[1em] text-zinc-500 uppercase">
            Protocol_Protection
          </h1>
          <h2 className="text-xl md:text-2xl font-black italic uppercase leading-tight">
            ¿Estás listo para la inmunidad mental?
          </h2>
          <p className="text-[10px] font-mono text-zinc-600 leading-relaxed">
            NΛND15 no es una marca de moda. Es una señal para quienes ya no responden al sistema. 
            Al entrar, aceptas que el 404 es tu nueva ubicación.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-10">
          <button 
            onClick={handleAccept}
            className="group relative w-full py-4 border border-blue-500/50 hover:bg-blue-500 transition-all duration-500 overflow-hidden"
          >
            <div className="relative z-10 flex items-center justify-center gap-2 font-cosmic text-[10px] tracking-[0.5em] uppercase">
              <Unlock size={14} /> Activate_Nebola
            </div>
          </button>

          <button 
            onClick={handleDeny}
            className="w-full py-4 font-cosmic text-[8px] text-zinc-700 tracking-[0.3em] uppercase hover:text-red-500 transition-colors"
          >
            [ Stay_Programmed ]
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-4 opacity-20">
          <AlertTriangle size={12} />
          <span className="font-mono text-[7px] uppercase tracking-widest">Error_Active_Consciousness_Detected</span>
        </div>
      </div>
    </div>
  );
}