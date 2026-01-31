"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X, ShieldCheck, Zap, EyeOff, Activity } from "lucide-react";

interface Product {
  name: string;
  price: string;
  src: string;
  description?: string;
}

interface ProductDrawerProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDrawer({ product, isOpen, onClose }: ProductDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, { opacity: 1, display: "block", duration: 0.4 });
      gsap.to(drawerRef.current, { x: 0, duration: 0.6, ease: "expo.out" });
    } else {
      document.body.style.overflow = "auto";
      gsap.to(overlayRef.current, { opacity: 0, display: "none", duration: 0.4 });
      gsap.to(drawerRef.current, { x: "100%", duration: 0.6, ease: "expo.in" });
    }
  }, [isOpen]);

  if (!product) return null;

  return (
    <>
      {/* OVERLAY */}
      <div 
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 z-[10001] bg-black/60 backdrop-blur-sm hidden opacity-0"
      />

      {/* DRAWER */}
      <div 
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#080808] z-[10002] shadow-[-10px_0_30px_rgba(0,0,0,0.5)] border-l border-zinc-900 translate-x-full overflow-y-auto"
      >
        {/* HEADER TÉCNICO */}
        <div className="p-6 border-b border-zinc-900 flex justify-between items-center bg-zinc-950">
          <div className="flex flex-col">
            <span className="font-cosmic text-[8px] text-blue-500 tracking-[0.3em] uppercase">Status: Analysis_Active</span>
            <span className="font-cosmic text-xs text-white tracking-[0.1em]">{product.name}</span>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8 space-y-10">
          {/* IMAGEN DE REFERENCIA */}
          <div className="aspect-[3/4] w-full bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800">
            <img src={product.src} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={product.name} />
          </div>

          {/* DATOS DE LA MATRIZ */}
          <div className="space-y-6">
            <div className="flex justify-between items-end border-b border-zinc-900 pb-2">
              <span className="font-cosmic text-[9px] text-zinc-600 uppercase">Unit_Value</span>
              <span className="text-2xl font-black">{product.price}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-zinc-900 bg-zinc-950/50">
                <ShieldCheck size={14} className="text-blue-500 mb-2" />
                <p className="font-cosmic text-[7px] text-zinc-500 uppercase">Immunity_Level</p>
                <p className="text-[10px] font-bold">MAX_NEBOLA</p>
              </div>
              <div className="p-3 border border-zinc-900 bg-zinc-950/50">
                <Zap size={14} className="text-yellow-500 mb-2" />
                <p className="font-cosmic text-[7px] text-zinc-500 uppercase">Signal_Status</p>
                <p className="text-[10px] font-bold">ENCRYPTED</p>
              </div>
            </div>
          </div>

          {/* DESCRIPCIÓN NARRATIVA */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Activity size={12} className="text-zinc-700" />
              <span className="font-cosmic text-[8px] text-zinc-500 uppercase tracking-widest">Protocol_Notes</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-light italic">
              "Esta pieza no es tendencia, es una interrupción. Diseñada para quienes ya no responden al sistema. 
              404 no es ausencia, es invisibilidad selectiva frente al caos programado."
            </p>
          </div>

          {/* BOTÓN DE ACCIÓN */}
          <button className="w-full py-4 bg-white text-black font-cosmic text-[10px] tracking-[0.5em] uppercase hover:bg-blue-500 hover:text-white transition-all duration-500 group flex items-center justify-center gap-2">
            <EyeOff size={14} className="group-hover:animate-pulse" />
            Acquire_Signal
          </button>

          {/* FOOTER DEL DRAWER */}
          <div className="pt-10 flex justify-center">
            <span className="font-cosmic text-[6px] text-zinc-800 tracking-[1em] uppercase">NΛND15_SYSTEM_v2.026</span>
          </div>
        </div>
      </div>
    </>
  );
}