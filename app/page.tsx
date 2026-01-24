"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronDown,
  Activity,
  ShoppingCart,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Definimos la interfaz para nuestros productos
interface Product {
  name: string;
  price: string;
  src: string;
}

export default function Nand15UltimateExperience() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderLogo1 = useRef<HTMLImageElement>(null);
  const loaderLogo2 = useRef<HTMLImageElement>(null);
  const galleryRef = useRef<HTMLElement>(null);

  const products: Product[] = [
    { name: "Product 1", price: "$10", src: "/gallery/img1.jpeg" },
    { name: "Product 2", price: "$15", src: "/gallery/img2.jpeg" },
    { name: "Product 3", price: "$20", src: "/gallery/img3.jpeg" },
    { name: "Product 4", price: "$25", src: "/gallery/img4.jpeg" },
    { name: "Product 5", price: "$30", src: "/gallery/img5.jpeg" },
    { name: "Product 6", price: "$35", src: "/gallery/img6.jpeg" },
    { name: "Product 7", price: "$40", src: "/gallery/img7.jpeg" },
    { name: "Product 8", price: "$45", src: "/gallery/img8.jpeg" },
    { name: "Product 9", price: "$50", src: "/gallery/img9.jpeg" },
    { name: "Product 10", price: "$55", src: "/gallery/img10.jpeg" },
    { name: "Product 11", price: "$60", src: "/gallery/img11.jpeg" },
    { name: "Product 12", price: "$65", src: "/gallery/img12.jpeg" },
    { name: "Product 13", price: "$70", src: "/gallery/img13.jpeg" },
    { name: "Product 14", price: "$75", src: "/gallery/img14.jpeg" },
    { name: "Product 15", price: "$80", src: "/gallery/img15.jpeg" }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => setIsLoading(false) });

      tl.set(loaderLogo2.current, { display: "none", opacity: 0 })
        .to(loaderLogo1.current, { opacity: 1, duration: 0.8 })
        .to(loaderLogo1.current, { x: 15, skewX: 20, duration: 0.05, repeat: 10, yoyo: true })
        .set(loaderLogo1.current, { display: "none" })
        .set(loaderLogo2.current, { display: "block" })
        .to(loaderLogo2.current, { opacity: 1, scale: 1.1, duration: 0.4 })
        .to(loaderLogo2.current, { rotation: 360, duration: 1.5, ease: "expo.inOut" })
        .to(loaderLogo2.current, { scale: 20, opacity: 0, duration: 0.8, ease: "power4.in" })
        .to(loaderRef.current, { opacity: 0, pointerEvents: "none", duration: 0.5 });

      if (!isLoading) {
        gsap.from(".hero-el", { y: 40, opacity: 0, stagger: 0.2, duration: 1, ease: "power3.out" });
        gsap.from(".gallery-item", {
          scrollTrigger: { trigger: galleryRef.current, start: "top 85%" },
          y: 60, opacity: 0, stagger: 0.05, duration: 0.8, ease: "power2.out"
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, [isLoading]);

  // Funciones con Tipado TypeScript
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImg(products[index].src);
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIdx = (currentIndex + 1) % products.length;
    setCurrentIndex(newIdx);
    setSelectedImg(products[newIdx].src);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIdx = (currentIndex - 1 + products.length) % products.length;
    setCurrentIndex(newIdx);
    setSelectedImg(products[newIdx].src);
  };

  return (
    <main ref={containerRef} className="bg-[#050505] text-white min-h-screen">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;700&display=swap');
        .font-cosmic { font-family: 'Orbitron', sans-serif; letter-spacing: 0.2em; }
        body { font-family: 'Inter', sans-serif; overflow-x: hidden; background: #050505; }
      `}</style>

      {/* LOADER */}
      {isLoading && (
        <div ref={loaderRef} className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          <div className="relative">
            <img ref={loaderLogo1} src="/logo.png" className="w-48 opacity-0" alt="L1" />
            <img ref={loaderLogo2} src="/logo2.png" className="w-48 hidden" alt="L2" />
          </div>
          <div className="absolute bottom-10 font-cosmic text-[9px] text-zinc-600 animate-pulse uppercase tracking-[1em]">Establishing_Connection</div>
        </div>
      )}

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute opacity-[0.02] font-cosmic text-[20vw] select-none pointer-events-none uppercase italic">Nand15</div>
        <img src="/logo.png" className="hero-el w-64 md:w-[400px] z-10" alt="Brand" />
        <div className="hero-el mt-8 flex flex-col items-center gap-4">
          <h1 className="font-cosmic text-[10px] md:text-xs text-zinc-500 uppercase tracking-[1em]">Traveling on the Space</h1>
        </div>
        <ChevronDown className="absolute bottom-10 animate-bounce text-zinc-800" />
      </section>

      {/* GALLERY */}
      <section ref={galleryRef} className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="mb-20 border-b border-zinc-900 pb-10">
          <h2 className="font-cosmic text-5xl md:text-7xl font-black opacity-10 italic uppercase">Archives</h2>
          <p className="font-cosmic text-[9px] text-zinc-600 mt-2 tracking-[0.4em]">SYSTEM_DATA // 015_ITEMS</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="gallery-item group relative aspect-[3/4] bg-zinc-900 cursor-zoom-in overflow-hidden rounded-sm border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              <img
                src={item.src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={item.name}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="font-cosmic text-[8px] text-zinc-400 uppercase">{item.name}</span>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm">{item.price}</span>
                  <ShoppingCart size={16} className="text-white hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX / FULLSCREEN VIEWER */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-xl"
          onClick={() => setSelectedImg(null)}
        >
          {/* Botón Cerrar */}
          <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors z-50">
            <X size={40} strokeWidth={1} />
          </button>

          {/* Flecha Izquierda */}
          <button
            onClick={prevImg}
            className="absolute left-4 md:left-10 p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all z-50"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Imagen Grande */}
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
            <img
              src={selectedImg}
              className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-300"
              alt="Fullscreen"
            />
            <div className="mt-8 text-center">
              <p className="font-cosmic text-xs text-white uppercase tracking-[0.5em]">{products[currentIndex].name}</p>
              <p className="font-bold text-zinc-500 mt-2">{products[currentIndex].price}</p>
            </div>
          </div>

          {/* Flecha Derecha */}
          <button
            onClick={nextImg}
            className="absolute right-4 md:right-10 p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all z-50"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}

      <footer className="py-32 text-center opacity-20">
        <img src="/logo2.png" className="w-16 mx-auto mb-6 grayscale" alt="Footer Logo" />
        <p className="font-cosmic text-[7px] tracking-[1.5em] uppercase">Nand15 Studio // 2026</p>
      </footer>
    </main>
  );
}