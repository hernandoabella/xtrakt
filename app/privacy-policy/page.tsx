"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ShieldCheck, Lock, EyeOff } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    gsap.fromTo(
      ".privacy-content",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-blue-600 selection:text-white font-mono">
      {/* HEADER DE NAVEGACIÓN */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-8 flex justify-between items-center bg-gradient-to-b from-[#050505] to-transparent">
        <Link 
          href="/" 
          className="group flex items-center gap-2 font-cosmic text-[10px] tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          RETURN_TO_BASE
        </Link>
        <div className="font-cosmic text-[10px] tracking-[0.5em] text-zinc-800 uppercase">
          Document_ID: P-404-015
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-4xl mx-auto pt-40 pb-20 px-6">
        <header className="privacy-content mb-20 border-b border-zinc-900 pb-12">
          <h1 className="font-cosmic text-4xl md:text-6xl font-black italic uppercase mb-6">
            Privacy <span className="text-blue-600">Protocol</span>
          </h1>
          <p className="text-zinc-500 text-xs tracking-widest uppercase">
            Última actualización: Ciclo Solar 2026 // NEBOLA_ENCRYPTION_v1
          </p>
        </header>

        <section className="space-y-24">
          {/* BLOQUE 1 */}
          <div className="privacy-content grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-1 text-blue-500">
              <ShieldCheck size={24} strokeWidth={1} />
            </div>
            <div className="md:col-span-11 space-y-4">
              <h2 className="font-cosmic text-sm tracking-[0.4em] text-zinc-200 uppercase">01. Recopilación de Frecuencias</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                NΛND15 recopila únicamente la información necesaria para garantizar una abducción visual óptima. Esto incluye datos de navegación, interacción con el catálogo y señales de conciencia digital que nos ayudan a mejorar la experiencia NEBOLA. No vendemos tus datos a entidades terrestres.
              </p>
            </div>
          </div>

          {/* BLOQUE 2 */}
          <div className="privacy-content grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-1 text-blue-500">
              <Lock size={24} strokeWidth={1} />
            </div>
            <div className="md:col-span-11 space-y-4">
              <h2 className="font-cosmic text-sm tracking-[0.4em] text-zinc-200 uppercase">02. Encriptación de Conciencia</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Toda la información transmitida entre tu terminal y nuestro platillo volador está protegida mediante protocolos de encriptación AES-256. Tus datos personales son almacenados en servidores descentralizados fuera de la atmósfera convencional.
              </p>
            </div>
          </div>

          {/* BLOQUE 3 */}
          <div className="privacy-content grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-1 text-blue-500">
              <EyeOff size={24} strokeWidth={1} />
            </div>
            <div className="md:col-span-11 space-y-4">
              <h2 className="font-cosmic text-sm tracking-[0.4em] text-zinc-200 uppercase">03. El Derecho al Olvido (404)</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                En cualquier momento, puedes solicitar la eliminación total de tus registros en nuestra base de datos. Al activar este protocolo, tu rastro en NΛND15 se convertirá en un estado 404 permanente, eliminando cualquier vínculo entre tu identidad y nuestras operaciones.
              </p>
            </div>
          </div>

          {/* NOTA LEGAL FINAL */}
          <div className="privacy-content p-8 border border-zinc-900 bg-zinc-950/50 backdrop-blur-md">
            <p className="text-[10px] text-zinc-600 leading-relaxed uppercase tracking-tighter">
              Aviso: Al navegar por este sitio, aceptas que NΛND15 no se hace responsable de cambios en la percepción de la realidad producidos por el exceso de estilo o la exposición prolongada al protocolo NEBOLA.
            </p>
          </div>
        </section>
      </div>

      <Footer />


      {/* Efecto de ruido analógico de fondo */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
    </main>
  );
}