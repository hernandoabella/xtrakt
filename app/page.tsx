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
      // Loader Timeline
      const tl = gsap.timeline({ 
        onComplete: () => {
          setIsLoading(false);
          // Forzamos el refresco de ScrollTrigger una vez el loader se va
          ScrollTrigger.refresh();
        } 
      });

      tl.set(loaderLogo2.current, { display: "none", opacity: 0 })
        .to(loaderLogo1.current, { opacity: 1, duration: 0.5 })
        .to(loaderLogo1.current, { x: 10, skewX: 10, duration: 0.05, repeat: 5, yoyo: true })
        .set(loaderLogo1.current, { display: "none" })
        .set(loaderLogo2.current, { display: "block" })
        .to(loaderLogo2.current, { opacity: 1, scale: 1.1, duration: 0.3 })
        .to(loaderLogo2.current, { rotation: 360, duration: 1, ease: "expo.inOut" })
        .to(loaderRef.current, { 
          yPercent: -100, 
          duration: 0.8, 
          ease: "expo.inOut" 
        });

      // Animaciones de la galería (siempre activas)
      gsap.from(".gallery-item", {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out"
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImg(products[index].src);
    document.body.style.overflow = "hidden"; // Bloquear scroll
  };

  const closeLightbox = () => {
    setSelectedImg(null);
    document.body.style.overflow = "auto"; // Liberar scroll
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
    <main ref={containerRef} className="bg-[#050505] text-white min-h-screen relative">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;700&display=swap');
        .font-cosmic { font-family: 'Orbitron', sans-serif; letter-spacing: 0.2em; }
        body { font-family: 'Inter', sans-serif; overflow-x: hidden; background: #050505; }
      `}</style>

      {/* LOADER (Overlay) */}
      <div ref={loaderRef} className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-auto">
        <div className="relative">
          <img ref={loaderLogo1} src="/logo.png" className="w-40 opacity-0" alt="L1" />
          <img ref={loaderLogo2} src="/logo2.png" className="w-40 hidden" alt="L2" />
        </div>
        <div className="absolute bottom-10 font-cosmic text-[8px] text-zinc-700 animate-pulse tracking-[1em]">SYSTEM_READY</div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        {/* HERO */}
        <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute opacity-[0.02] font-cosmic text-[20vw] select-none pointer-events-none uppercase italic">Nand15</div>
          <img src="/logo.png" className="w-64 md:w-[380px] z-10" alt="Brand" />
          <div className="mt-8 flex flex-col items-center gap-4">
            <h1 className="font-cosmic text-[9px] text-zinc-600 uppercase tracking-[1em]">Traveling on the Space</h1>
          </div>
          <ChevronDown className="absolute bottom-10 animate-bounce text-zinc-900" />
        </section>

        {/* GALLERY */}
        <section ref={galleryRef} className="max-w-[1400px] mx-auto px-6 py-20">
          <div className="mb-16 border-b border-zinc-900 pb-8">
            <h2 className="font-cosmic text-4xl md:text-6xl font-black opacity-10 italic uppercase">Archives</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => openLightbox(idx)}
                className="gallery-item group relative aspect-[3/4] bg-zinc-900 cursor-zoom-in overflow-hidden rounded-sm border border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <img 
                  src={item.src} 
                  className="w-full h-full object-cover" 
                  alt={item.name}
                  loading="eager" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="font-cosmic text-[8px] text-zinc-400 uppercase">{item.name}</span>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">{item.price}</span>
                    <ShoppingCart size={16} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-20 text-center opacity-10">
          <p className="font-cosmic text-[7px] tracking-[1.5em] uppercase">Nand15 Studio // 2026</p>
        </footer>
      </div>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50">
            <X size={32} />
          </button>

          <button onClick={prevImg} className="absolute left-4 p-3 bg-white/5 hover:bg-white/10 rounded-full z-50">
            <ChevronLeft size={24} />
          </button>

          <div className="relative max-w-4xl max-h-[80vh] flex flex-col items-center">
            <img 
              src={selectedImg} 
              className="max-w-full max-h-full object-contain"
              alt="View"
            />
            <div className="mt-6 text-center">
              <p className="font-cosmic text-[10px] text-white uppercase tracking-widest">{products[currentIndex].name}</p>
              <p className="font-bold text-zinc-500">{products[currentIndex].price}</p>
            </div>
          </div>

          <button onClick={nextImg} className="absolute right-4 p-3 bg-white/5 hover:bg-white/10 rounded-full z-50">
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </main>
  );
}