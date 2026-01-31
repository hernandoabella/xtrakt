"use client";

import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import ManifestoScroll from "./components/ManifestoScroll";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Page() {
  

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-blue-600 selection:text-white">
      
      
      {/* 2. CONTENIDO PRINCIPAL: Aparece suavemente cuando el loader termina */}
      <div
        
      >
        {/* Secciones de la Web */}
        <Hero />

        <ManifestoScroll />

        <div id="catalog-section">
          <Gallery />
        </div>

        <Footer />


      </div>

    </main>
  );
}