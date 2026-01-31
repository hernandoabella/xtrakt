"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ChevronLeft, Copyright, Fingerprint, Zap, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function IntellectualProperty() {
  useEffect(() => {
    gsap.fromTo(
      ".ip-content",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "expo.out" }
    );
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-blue-600 selection:text-white font-mono">
      {/* HEADER TÉCNICO */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-8 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link 
          href="/" 
          className="group flex items-center gap-2 font-cosmic text-[10px] tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          RETURN_TO_HOME
        </Link>
        <div className="font-cosmic text-[10px] tracking-[0.5em] text-blue-500 uppercase animate-pulse">
          PROTECTION_STATUS: ACTIVE
        </div>
      </nav>

      <div className="max-w-4xl mx-auto pt-40 pb-20 px-6">
        <header className="ip-content mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-blue-600" />
            <span className="font-cosmic text-[10px] text-blue-500 tracking-[0.5em] uppercase">Legal_Archive_01</span>
          </div>
          <h1 className="font-cosmic text-4xl md:text-7xl font-black italic uppercase leading-none">
            Intellectual <br />
            <span className="text-zinc-800 outline-text">Assets</span>
          </h1>
        </header>

        <section className="space-y-32">
          {/* SECCIÓN 1: EL LOGO */}
          <div className="ip-content grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <div className="aspect-square bg-zinc-900/50 border border-zinc-800 flex items-center justify-center relative group">
                 <img src="/logo.png" className="w-32 opacity-20 group-hover:opacity-100 transition-opacity duration-700" alt="Identity" />
                 <div className="absolute top-2 left-2 p-1 border border-blue-500/30 text-[8px] text-blue-500">REF_ID: UFO_ABDUCTION</div>
              </div>
            </div>
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-zinc-500 italic">
                <Fingerprint size={16} />
                <span className="text-[10px] uppercase tracking-widest">Visual Identity</span>
              </div>
              <h2 className="font-cosmic text-xl tracking-widest uppercase">Identidad Visual Holográfica</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                El isotipo que representa un **platillo volador abduciendo a un individuo**, así como la tipografía personalizada de **NΛND15**, son propiedad exclusiva de NΛND15 Studio. Cualquier reproducción total o parcial fuera de nuestra atmósfera digital sin autorización previa será tratada como una violación del protocolo de seguridad.
              </p>
            </div>
          </div>

          {/* SECCIÓN 2: EL MANIFIESTO */}
          <div className="ip-content grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-1 text-blue-500">
               <Zap size={24} />
            </div>
            <div className="md:col-span-11 space-y-4">
              <h2 className="font-cosmic text-xl tracking-widest uppercase">Contenido y Narrativa</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                El concepto "NEBOLA", el manifiesto "404_NOT_FOUND" y toda la narrativa visual/textual de este sitio han sido generados bajo estricta supervisión creativa. La "Inmunidad Mental" y otros conceptos filosóficos presentados aquí están protegidos por leyes de propiedad intelectual internacionales y universales.
              </p>
            </div>
          </div>

          {/* ADVERTENCIA FINAL */}
          <div className="ip-content relative p-10 border border-red-900/30 bg-red-950/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-2 text-red-900/20">
              <ShieldAlert size={80} />
            </div>
            <div className="relative z-10">
              <h3 className="text-red-500 font-cosmic text-xs tracking-[0.5em] uppercase mb-4">Warning_Notice</h3>
              <p className="text-zinc-500 text-[11px] leading-relaxed uppercase tracking-tighter">
                Cualquier intento de clonación, "scraping" de datos o uso no autorizado de nuestros activos visuales activará el protocolo de contención legal. No intentes replicar la abducción; solo nosotros conocemos la frecuencia correcta.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px #333;
          color: transparent;
        }
      `}</style>
    </main>
  );
}