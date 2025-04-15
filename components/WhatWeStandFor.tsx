"use client";

import React from 'react';

// Estilos comunes
const titleStyles = "text-3xl md:text-5xl lg:text-6xl font-bold font-Lora text-[#2A4365]";
const textStyles = "text-gray-600 text-lg md:text-xl lg:text-2xl font-Lora font-regular max-w-3xl mx-auto";

// Valores y principios
const VALUES = [
  {
    title: "Innovación",
    icon: "💡",
    description: "Constantemente rompemos barreras para ofrecer soluciones vanguardistas."
  },
  {
    title: "Integridad",
    icon: "🤝",
    description: "Prácticas honestas y éticas en todo lo que hacemos."
  },
  {
    title: "Excelencia",
    icon: "🏆",
    description: "Calidad inquebrantable en nuestros productos y servicios."
  },
  {
    title: "Colaboración",
    icon: "👥",
    description: "Alianzas sólidas con nuestros clientes y equipo."
  },
  {
    title: "Transparencia",
    icon: "🔍",
    description: "Comunicación clara y procesos abiertos."
  },
  {
    title: "Sostenibilidad",
    icon: "🌱",
    description: "Prácticas ambiental y socialmente responsables."
  },
];

const WhatWeStandFor = () => {
  return (
    <section id="what-we-stand-for" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#F7FAFC] to-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="mb-12 lg:mb-16">
          <h2 className={titleStyles}>
            Nuestros <span className="text-[#40B4E4]">Valores</span>
          </h2>
          <p className={`mt-6 ${textStyles}`}>
            Los principios fundamentales que guían nuestro trabajo y relaciones.
          </p>
        </div>

        {/* Grid de valores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto font-Lora">
          {VALUES.map((value, index) => (
            <div 
              key={index} 
              className="group transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-full p-8 bg-white rounded-xl border border-[#E2E8F0] shadow-sm group-hover:shadow-md group-hover:border-[#40B4E4] transition-all duration-300 flex flex-col items-center text-center">
                {/* Icono */}
                <div className="text-4xl mb-4">{value.icon}</div>
                
                {/* Título */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#2A4365] mb-4">
                  {value.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-700 text-base lg:text-lg">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cita o declaración adicional (opcional) */}
        <div className="mt-16 max-w-4xl mx-auto">
          <blockquote className="text-xl lg:text-2xl italic text-[#2A4365]  font-Lora">
            "Nuestros valores no son solo palabras en una página, son el fundamento de cada decisión que tomamos y cada solución que entregamos."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhatWeStandFor;