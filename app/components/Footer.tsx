"use client";

import React from "react";
import { Instagram, Twitter, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-zinc-900 pt-20 pb-10 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
          
          {/* LADO IZQUIERDO: MARCA */}
          <div className="flex flex-col gap-4">
            <img src="/logo.png" alt="Nand15" className="w-24 opacity-50 hover:opacity-100 transition-opacity duration-500" />
            <p className="font-cosmic text-[7px] text-zinc-600 tracking-[0.5em] uppercase leading-relaxed">
              Exploration and aesthetic <br /> excellence through space.
            </p>
          </div>

          {/* CENTRO: REDES SOCIALES */}
          <div className="flex justify-center gap-8">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors duration-300">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors duration-300">
              <Twitter size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors duration-300">
              <MessageCircle size={18} strokeWidth={1.5} />
            </a>
          </div>

          {/* LADO DERECHO: ACCIÓN / SCROLL */}
          <div className="flex flex-col items-end gap-4">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 font-cosmic text-[8px] text-zinc-500 hover:text-white tracking-[0.3em] uppercase transition-all"
            >
              Back to Top
              <div className="p-2 border border-zinc-800 rounded-full group-hover:border-white transition-colors">
                <ArrowUp size={12} />
              </div>
            </button>
          </div>
        </div>

        {/* LÍNEA FINAL Y COPYRIGHT */}
        <div className="mt-20 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-cosmic text-[7px] text-zinc-700 tracking-[0.8em] uppercase">
            © {currentYear} Nand15 — All Rights Reserved
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="font-cosmic text-[6px] text-zinc-800 hover:text-zinc-400 tracking-[0.2em] uppercase transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-cosmic text-[6px] text-zinc-800 hover:text-zinc-400 tracking-[0.2em] uppercase transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}