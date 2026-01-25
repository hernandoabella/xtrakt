"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { 
  ChevronDown, 
  ShoppingCart, 
  X, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";

interface Product {
  name: string;
  price: string;
  src: string;
}

export default function Nand15StableExperience() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderLogo1 = useRef<HTMLImageElement>(null);
  const loaderLogo2 = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gallerySectionRef = useRef<HTMLElement>(null);

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

  const closeLightbox = useCallback(() => {
    setSelectedImg(null);
    document.body.style.overflow = "auto";
  }, []);

  const nextImg = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIdx = (prev + 1) % products.length;
      setSelectedImg(products[newIdx].src);
      return newIdx;
    });
  }, [products]);

  const prevImg = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIdx = (prev - 1 + products.length) % products.length;
      setSelectedImg(products[newIdx].src);
      return newIdx;
    });
  }, [products]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImg) return;
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImg, nextImg, prevImg, closeLightbox]);

  // --- TRANSICIÓN LIMPIA ---
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ 
        onComplete: () => {
          setIsLoading(false);
          // Espera 3 segundos y baja a la galería
          setTimeout(() => {
            gallerySectionRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 3000);
        } 
      });

      // Animación inicial del logo
      tl.set(loaderLogo2.current, { display: "none", opacity: 0 })
        .to(loaderLogo1.current, { opacity: 1, duration: 0.6 })
        .to(loaderLogo1.current, { x: 3, skewX: 5, duration: 0.05, repeat: 4, yoyo: true })
        .set(loaderLogo1.current, { display: "none" })
        .set(loaderLogo2.current, { display: "block" })
        .to(loaderLogo2.current, { opacity: 1, scale: 1.05, duration: 0.4 })
        .to(loaderLogo2.current, { rotation: 360, duration: 1.2, ease: "expo.inOut" });

      // Transición Maestra: El loader sube mientras el contenido aparece
      tl.to(loaderRef.current, { 
        yPercent: -100, 
        duration: 1.2, 
        ease: "power4.inOut" 
      }, "+=0.2") // Pequeña pausa antes de subir
      .to(contentRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 1.5,
        ease: "power2.out"
      }, "-=1"); // Empieza un poco antes de que el loader termine de subir

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImg(products[index].src);
    document.body.style.overflow = "hidden";
  };

  return (
    <main ref={containerRef} className="bg-[#050505] text-white min-h-screen relative overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;700&display=swap');
        .font-cosmic { font-family: 'Orbitron', sans-serif; letter-spacing: 0.2em; }
        body { font-family: 'Inter', sans-serif; background: #050505; margin: 0; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* LOADER OVERLAY */}
      <div 
        ref={loaderRef} 
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-none"
      >
        <div className="relative">
          <img ref={loaderLogo1} src="/logo.png" className="w-32 md:w-40 opacity-0" alt="L1" />
          <img ref={loaderLogo2} src="/logo2.png" className="w-32 md:w-40 hidden" alt="L2" />
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 font-cosmic text-[8px] text-zinc-700 animate-pulse tracking-[1em] whitespace-nowrap">
            SYSTEM_READY
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL CON ESTADO INICIAL DIFUMINADO */}
      <div 
        ref={contentRef} 
        className="opacity-0 scale-[0.98]"
        style={{ filter: "blur(20px)" }}
      >
        {/* HERO */}
        <section className="h-screen flex flex-col items-center justify-center relative">
          <div className="absolute opacity-[0.03] font-cosmic text-[20vw] select-none pointer-events-none uppercase italic leading-none">Nand15</div>
          <img src="/logo.png" className="w-64 md:w-[380px] z-10" alt="Brand" />
          <div className="mt-8 flex flex-col items-center gap-4 z-10">
            <h1 className="font-cosmic text-[9px] text-zinc-500 uppercase tracking-[1em]">Traveling on the Space</h1>
          </div>
          <ChevronDown className="absolute bottom-10 animate-bounce text-zinc-800" />
        </section>

        {/* GALLERY SECTION */}
        <section ref={gallerySectionRef} className="max-w-[1400px] mx-auto px-6 py-20">
          <div className="mb-16 border-b border-zinc-900 pb-8">
            <h2 className="font-cosmic text-4xl md:text-6xl font-black opacity-10 italic uppercase">Catalog</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {products.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[3/4] bg-zinc-950 cursor-zoom-in overflow-hidden rounded-sm border border-white/5 transition-all duration-500 hover:border-white/20"
              >
                <img 
                  src={item.src} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                  alt={item.name}
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <span className="font-cosmic text-[8px] text-zinc-400 uppercase">{item.name}</span>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">{item.price}</span>
                    <ShoppingCart size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-20 text-center opacity-20">
          <p className="font-cosmic text-[7px] tracking-[1.5em] uppercase">Nand15 Studio // 2026</p>
        </footer>
      </div>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-white z-[10001]">
            <X size={32} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImg(); }} className="absolute left-4 p-4 hover:bg-white/5 rounded-full z-[10001]">
            <ChevronLeft size={30} />
          </button>
          <div className="relative max-w-5xl w-full h-[85vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg} className="max-w-full max-h-full object-contain" alt="View" />
          </div>
          <button onClick={(e) => { e.stopPropagation(); nextImg(); }} className="absolute right-4 p-4 hover:bg-white/5 rounded-full z-[10001]">
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </main>
  );
}