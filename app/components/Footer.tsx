"use client";

import React from "react";
import Link from "next/link";
import { Shield, Globe, Lock, Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020202] pt-24 pb-10 px-6 border-t border-zinc-900 overflow-hidden">
      {/* Efecto de luz de fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* BLOQUE 1: BRAND IDENTITY */}
          <div className="md:col-span-4 space-y-6">
            <div className="font-cosmic text-2xl tracking-[0.4em] text-white italic">
              NΛND15
            </div>
            <p className="font-mono text-[10px] text-zinc-500 leading-relaxed uppercase tracking-widest max-w-sm">
              Despliegue de conciencia visual descentralizada. 
              No estamos aquí para encajar, estamos aquí para abducir tu percepción. 
              <span className="text-blue-500 block mt-2">STATUS: MISSION_ACTIVE</span>
            </p>
          </div>

          {/* BLOQUE 2: PROTOCOLO LEGAL (ENLACES ACTUALIZADOS) */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-cosmic text-[9px] text-zinc-700 tracking-[0.6em] uppercase border-b border-zinc-900 pb-2">
              Legal_Protocols
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="group flex items-center gap-3 font-mono text-[10px] text-zinc-400 hover:text-white transition-all">
                  <Lock size={12} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  [ PRIVACY_POLICY ]
                </Link>
              </li>
              <li>
                <Link href="/intellectual-property" className="group flex items-center gap-3 font-mono text-[10px] text-zinc-400 hover:text-white transition-all">
                  <Shield size={12} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  [ INTELLECTUAL_PROPERTY ]
                </Link>
              </li>
              <li>
                <Link href="/terms-of-abduction" className="group flex items-center gap-3 font-mono text-[10px] text-zinc-400 hover:text-white transition-all">
                  <Zap size={12} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  [ TERMS_OF_ABDUCTION ]
                </Link>
              </li>
            </ul>
          </div>

          {/* BLOQUE 3: SISTEMA / COORDENADAS */}
          <div className="md:col-span-4 space-y-6 text-right flex flex-col items-end">
            <h4 className="font-cosmic text-[9px] text-zinc-700 tracking-[0.6em] uppercase border-b border-zinc-900 pb-2 w-full">
              System_Telemetry
            </h4>
            <div className="space-y-2">
              <div className="font-mono text-[9px] text-zinc-500">ORIGIN: 0.0.0.0 // NEBOLA_CORE</div>
              <div className="font-mono text-[9px] text-zinc-500 flex items-center justify-end gap-2">
                SIGNAL_STRENGTH: <span className="text-blue-500">100%</span>
                <Globe size={10} />
              </div>
              <div className="font-mono text-[8px] text-zinc-800 bg-zinc-900/50 px-2 py-1 mt-4 inline-block tracking-[0.2em]">
                ENCRYPTION: AES_256_STABLE
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR: EL HIJUEPUTA FINAL */}
        <div className="pt-10 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-cosmic text-[7px] tracking-[1.5em] text-zinc-800 uppercase">
            © {currentYear} NAND15 STUDIO // DEPLOYED_IN_THE_VOID
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end">
              <span className="font-mono text-[6px] text-zinc-700 tracking-widest uppercase">Server_Location</span>
              <span className="font-mono text-[9px] text-zinc-500 uppercase">Unknown_Sector_7G</span>
            </div>
            {/* Pequeño logo decorativo en miniatura */}
            <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center p-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair">
              <img src="/logo2.png" alt="Mini UFO" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}