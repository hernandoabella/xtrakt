"use client";

import React, { useState, useCallback, useEffect } from "react";
import { ShoppingCart, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Opcional pero recomendado para fluidez

interface Product {
  name: string;
  price: string;
  src: string;
}

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImg(products[index].src);
    document.body.style.overflow = "hidden";
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20 bg-[#050505]">
      <div className="mb-16 border-b border-zinc-900 pb-8">
        <h2 className="font-cosmic text-4xl md:text-6xl font-black opacity-10 italic uppercase">
          Catalog
        </h2>
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
              <span className="font-cosmic text-[8px] text-zinc-400 uppercase tracking-widest">{item.name}</span>
              <div className="flex justify-between items-center mt-1">
                <span className="font-bold text-sm tracking-tighter">{item.price}</span>
                <ShoppingCart size={14} className="hover:text-blue-500 transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL ARREGLADO */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999999] bg-black/98 flex items-center justify-center backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Botón Cerrar */}
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={40} strokeWidth={1} />
            </button>
            
            {/* Navegación Izquierda */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImg(); }} 
              className="absolute left-4 md:left-10 p-4 hover:bg-white/5 rounded-full text-white/30 hover:text-white transition-all"
            >
              <ChevronLeft size={50} strokeWidth={1} />
            </button>

            {/* Contenedor de Imagen Central */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg} 
                className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(0,0,0,1)] rounded-sm" 
                alt="Product View" 
              />
              
              {/* Info rápida en el lightbox */}
              <div className="absolute -bottom-12 left-0 right-0 flex justify-between items-center px-2">
                <span className="font-cosmic text-[10px] tracking-[0.5em] text-zinc-500 uppercase">
                  {products[currentIndex].name}
                </span>
                <span className="font-mono text-xs text-white">
                  {products[currentIndex].price}
                </span>
              </div>
            </motion.div>

            {/* Navegación Derecha */}
            <button 
              onClick={(e) => { e.stopPropagation(); nextImg(); }} 
              className="absolute right-4 md:right-10 p-4 hover:bg-white/5 rounded-full text-white/30 hover:text-white transition-all"
            >
              <ChevronRight size={50} strokeWidth={1} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}