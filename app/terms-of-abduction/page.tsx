"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ChevronLeft, FileText, Globe, AlertTriangle, Radio } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function TermsOfAbduction() {
  useEffect(() => {
    gsap.fromTo(
      ".term-card",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
    );
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-blue-600 selection:text-white font-mono">
      {/* NAVEGACIÓN TÉCNICA */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-8 flex justify-between items-center bg-[#050505]/90 backdrop-blur-xl border-b border-zinc-900">
        <Link 
          href="/" 
          className="group flex items-center gap-2 font-cosmic text-[9px] tracking-[0.4em] text-zinc-500 hover:text-blue-500 transition-all"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          EXIT_TO_ATMOSPHERE
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden md:block font-mono text-[8px] text-zinc-700 tracking-[0.2em]">PROTOCOL_LEVEL: ALPHA</span>
          <div className="px-3 py-1 border border-blue-500/50 text-blue-500 font-cosmic text-[8px] tracking-widest">
            CONTRACT_ACTIVE
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto pt-40 pb-20 px-6">
        {/* HEADER ESTILO EXPEDIENTE */}
        <header className="mb-24 relative">
          <div className="absolute -left-6 top-0 w-1 h-full bg-blue-600" />
          <h1 className="font-cosmic text-5xl md:text-8xl font-black italic uppercase leading-tight tracking-tighter">
            Terms of <br />
            <span className="text-blue-600">Abduction</span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-6 text-[9px] text-zinc-500 uppercase tracking-[0.3em]">
            <span className="flex items-center gap-2"><Globe size={12} /> Jurisdiction: Interstellar</span>
            <span className="flex items-center gap-2"><Radio size={12} /> Signal: Encrypted</span>
            <span className="text-zinc-800">Ref: NAND15-TOA-2026</span>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CLÁUSULA 1 */}
          <div className="term-card p-8 border border-zinc-900 bg-zinc-950/30 hover:border-blue-500/30 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <FileText className="text-blue-500" size={20} />
              <span className="font-cosmic text-[10px] text-zinc-800 group-hover:text-zinc-600">01_ACCEPTANCE</span>
            </div>
            <h3 className="font-cosmic text-xs tracking-widest uppercase mb-4">Aceptación del Vínculo</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Al interactuar con NΛND15, el usuario reconoce que ha sido "seleccionado" para una experiencia visual no convencional. El acceso a nuestro catálogo implica la aceptación total de ser abducido por nuestra estética, sin derecho a reclamar por pérdida de tiempo en dimensiones inferiores.
            </p>
          </div>

          {/* CLÁUSULA 2 */}
          <div className="term-card p-8 border border-zinc-900 bg-zinc-950/30 hover:border-blue-500/30 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <Radio className="text-blue-500" size={20} />
              <span className="font-cosmic text-[10px] text-zinc-800 group-hover:text-zinc-600">02_TRANSMISSION</span>
            </div>
            <h3 className="font-cosmic text-xs tracking-widest uppercase mb-4">Uso de la Señal</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Queda prohibido el uso de técnicas de ingeniería inversa para intentar decodificar el origen de nuestras prendas o la frecuencia de nuestro diseño. Cualquier intento de "hackeo visual" resultará en el baneo permanente de tu dirección IP de esta galaxia.
            </p>
          </div>

          {/* CLÁUSULA 3 (ANCHO COMPLETO) */}
          <div className="term-card md:col-span-2 p-8 border border-zinc-900 bg-zinc-950/30 hover:border-blue-500/30 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="text-yellow-600" size={20} />
              <h3 className="font-cosmic text-xs tracking-widest uppercase">03_LIMITATION_OF_REALITY</h3>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-3xl">
              NΛND15 no se hace responsable si, tras adquirir uno de nuestros productos o navegar extensamente por nuestra terminal, el usuario experimenta una desconexión con la Matrix terrestre. No garantizamos que vuelvas a ver la moda convencional de la misma manera. El riesgo de elevar tu conciencia es enteramente tuyo.
            </p>
          </div>

          {/* CLÁUSULA 4 */}
          <div className="term-card p-8 border border-zinc-900 bg-zinc-950/30 hover:border-blue-500/30 transition-colors group">
            <div className="font-cosmic text-[10px] text-zinc-800 mb-6 group-hover:text-zinc-600">04_TERMINATION</div>
            <h3 className="font-cosmic text-xs tracking-widest uppercase mb-4">Fin del Protocolo</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Nos reservamos el derecho de interrumpir tu sesión en cualquier momento si detectamos vibraciones de baja frecuencia o intentos de plagio. La abducción es un privilegio, no un derecho.
            </p>
          </div>

          {/* CLÁUSULA 5 */}
          <div className="term-card p-8 border border-zinc-900 bg-zinc-950/30 hover:border-blue-500/30 transition-colors group">
            <div className="font-cosmic text-[10px] text-zinc-800 mb-6 group-hover:text-zinc-600">05_COMMUNICATIONS</div>
            <h3 className="font-cosmic text-xs tracking-widest uppercase mb-4">Canales de Extracción</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Cualquier duda sobre estos términos debe ser enviada a través de la terminal oficial. No respondemos señales de humo ni correos convencionales. Solo frecuencias encriptadas.
            </p>
          </div>
        </section>

        {/* FIRMA DIGITAL */}
        <div className="mt-20 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2">
            <div className="font-cosmic text-[8px] text-zinc-700 tracking-[0.5em] uppercase">Digital_Signature_Required</div>
            <div className="font-mono text-xl italic text-zinc-400">NΛND15_OFFICIAL_SYSTEM</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[10px] text-blue-500 animate-pulse">
              {">>> VALIDATING_TERMS_OF_SERVICE_2026"}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Scanline effect para que parezca una pantalla de computadora vieja */}
      <div className="fixed inset-0 pointer-events-none z-[1000] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </main>
  );
}