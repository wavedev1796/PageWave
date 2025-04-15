"use client";

import React, { useState } from 'react';

// Estilos comunes
const linkStyles = "font-normal text-black hover:text-[#40B4E4] text-base md:text-sm";

// Datos de los enlaces del Navbar
const NAV_LINKS = [
  { id: "who-we-are", text: "Who We Are" },
  { id: "our-services", text: "Our Services" },
  { id: "our-process", text: "Our Process" },
  { id: "what-we-stand-for", text: "What We Stand For" },
  { id: "contact-us", text: "Contact Us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Versión móvil: Navbar arriba, logo abajo */}
      <div className="w-full md:hidden">
        <nav className="w-full h-16 bg-[#D4EEFD]  shadow-md flex justify-between items-center p-4 font-Lora font-medium relative z-50">
          <button 
            className="focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col space-y-1">
              <span className={`h-0.5 w-full bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`h-0.5 w-full bg-black transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 w-full bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>

          <div className="invisible">
            <div className="w-6"></div>
          </div>
        </nav>

        <div className="w-full flex justify-center items-center p-4 mt-8 bg-white">
          <img
            src="/assets/images/logoóptica 3.jpg"
            alt="Logo"
            className="h-20"
          />
        </div>
      </div>

      {/* Versión desktop: Mantenemos el diseño original */}
      <div className="hidden md:flex flex-col items-center w-full">
        <div className="flex justify-center items-center p-4">
          <img
            src="/assets/images/logoóptica 3.jpg"
            alt="Logo"
            className="h-24 md:h-32 "
          />
        </div>
        
        <nav className="w-3/4 h-12 bg-[#D4EEFD] rounded-full shadow-md flex justify-center items-center p-4 font-Lora font-medium relative">
          <ul className="flex flex-row items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={linkStyles}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menú móvil full-screen */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#D4EEFD] z-40 pt-20 flex flex-col items-center mt-16 md:hidden">
          <ul className="w-full flex flex-col items-center space-y-8 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="w-full text-center">
                <a
                  href={`#${link.id}`}
                  className={`${linkStyles} text-xl py-4 block`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;