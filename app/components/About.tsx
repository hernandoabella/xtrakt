"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de la línea de escaneo lateral
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 }, 
        { 
          scaleY: 1, 
          duration: 1.5, 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

      // Entrada de bloques de texto
      gsap.from(".about-item", {
        opacity: 0,
        x: -20,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] py-32 px-6 flex flex-col items-center justify-center overflow-hidden border-b border-zinc-900"
    >
      {/* Elemento Decorativo: Código de Barras / ID */}
      <div className="absolute top-10 right-10 flex flex-col items-end opacity-20">
        <div className="w-20 h-[1px] bg-white mb-1" />
        <div className="w-12 h-[1px] bg-white mb-6" />
        <span className="font-mono text-[8px] tracking-[0.5em] text-white rotate-90 origin-right translate-y-10">
          DECLASS_015_REF
        </span>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Lado Izquierdo: Título y Línea */}
        <div className="md:col-span-4 sticky top-32">
          <div className="flex items-start gap-4">
            <div ref={lineRef} className="w-[1px] h-40 bg-blue-600 origin-top" />
            <div>
              <h2 ref={titleRef} className="font-cosmic text-3xl md:text-5xl font-black italic uppercase leading-none">
                The<br/><span className="text-blue-500">Origin</span>
              </h2>
              <p className="font-mono text-[10px] text-zinc-600 mt-4 tracking-widest uppercase">
                Subject: NΛND15 // Human_Abduction_Protocol
              </p>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Contenido Desclasificado */}
        <div className="md:col-span-8 space-y-16">
          <div className="about-item space-y-4">
            <h3 className="font-cosmic text-xs text-zinc-400 tracking-[0.3em] uppercase underline decoration-blue-500/50 underline-offset-8">
              01. La Anomalía
            </h3>
            <p className="font-mono text-sm md:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              NΛND15 no es una marca, es una <span className="text-white bg-zinc-900 px-1">interferencia</span>. Surgimos de la necesidad de cuestionar la realidad programada, utilizando el concepto de la abducción como símbolo de despertar consciente.
            </p>
          </div>

          <div className="about-item space-y-4">
            <h3 className="font-cosmic text-xs text-zinc-400 tracking-[0.3em] uppercase underline decoration-blue-500/50 underline-offset-8">
              02. El Platillo Volador
            </h3>
            <p className="font-mono text-sm md:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              Nuestro emblema representa el momento exacto donde la gravedad pierde su poder. El platillo no solo eleva un cuerpo, eleva una <span className="text-blue-500 italic">frecuencia mental</span> por encima del ruido cotidiano.
            </p>
          </div>

          <div className="about-item space-y-6">
            <div className="p-6 border border-zinc-900 bg-zinc-950/50 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500/20 translate-y-[-100%] group-hover:translate-y-[500%] transition-transform duration-[3s] ease-linear infinite" />
              <p className="font-mono text-[11px] text-zinc-500 leading-relaxed uppercase tracking-tighter">
                [DATA_ENCRYPTED]: Si has llegado hasta aquí, el protocolo NEBOLA ha sido inyectado en tu sistema. Ya no eres un espectador, eres parte del 404. El error consciente.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}