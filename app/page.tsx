"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingBag, ChevronDown, ArrowRight } from "lucide-react";

// Registramos el plugin de Scroll para animaciones avanzadas
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Nand15Landing() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animación Inicial: El Logo
      const tl = gsap.timeline();

      tl.fromTo(
        logoRef.current,
        { scale: 0.5, opacity: 0, filter: "blur(20px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "expo.out" }
      )
      .to(logoRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 2. Revelación de las Cards al hacer Scroll
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out"
      });

      // 3. Animación de las letras del fondo
      gsap.to(".bg-text", {
        xPercent: -20,
        scrollTrigger: {
          trigger: heroRef.current,
          scrub: 1
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const products = [
    { title: "Gorra Signature", price: "$25", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=500" },
    { title: "Camiseta Oversize", price: "$40", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500" },
    { title: "Buzo Essential", price: "$65", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500" },
  ];

  return (
    <main ref={containerRef} className="bg-[#050505] text-white overflow-x-hidden">
      
      {/* SECCIÓN HERO (Full Screen) */}
      <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Texto de fondo dinámico */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <h2 className="bg-text text-[30vw] font-black whitespace-nowrap">
            NAND15 NAND15 NAND15
          </h2>
        </div>

        {/* Logo Central */}
        <div className="relative z-10 flex flex-col items-center">
          <div ref={logoRef} className="mb-8">
            {/* Reemplaza 'logo.png' con tu ruta real */}
            <img 
              src="/logo.png" 
              alt="nand15 logo" 
              className="w-48 md:w-64 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/200x200?text=NAND15";
              }}
            />
          </div>
          
          <div className="text-center space-y-4">
            <h1 className="text-sm tracking-[0.5em] uppercase font-light text-zinc-400">
              Future Streetwear
            </h1>
            <div className="h-[1px] w-12 bg-zinc-700 mx-auto"></div>
          </div>
        </div>

        {/* Indicador de Scroll */}
        <div className="absolute bottom-10 animate-bounce flex flex-col items-center text-zinc-500">
          <span className="text-[10px] uppercase tracking-widest mb-2 font-bold">Explorar</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* SECCIÓN PRODUCTOS */}
      <section ref={cardsRef} className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-2">DROP_01</h2>
            <p className="text-zinc-500 uppercase text-xs tracking-widest font-bold">Selección Exclusiva</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            Ver todo <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <div 
              key={idx} 
              className="product-card group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
              </div>
              
              <div className="p-6 flex justify-between items-center bg-gradient-to-t from-black/80 to-transparent">
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.price}</p>
                </div>
                <button className="p-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer simple */}
      <footer className="py-20 border-t border-zinc-900 text-center text-zinc-600 text-xs tracking-widest uppercase">
        &copy; 2026 nand15 studio. todos los derechos reservados.
      </footer>
    </main>
  );
}