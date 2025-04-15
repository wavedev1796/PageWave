"use client";

import React from 'react';

// Estilos comunes
const titleStyles = "text-3xl md:text-5xl lg:text-6xl font-bold font-Lora text-[#2A4365]";
const textStyles = "text-gray-600 text-lg md:text-xl lg:text-2xl font-Lora font-regular max-w-3xl mx-auto";

// Textos de la sección
const TEXTS = {
  title: "Nuestro",
  content: "Un proceso optimizado que entrega resultados excepcionales en cada proyecto.",
  processes: [
    {
      title: "Ingeniería & Análisis",
      description: [
        "Consulta con el cliente",
        "Definición de requisitos",
        "Estudio de viabilidad",
      ],
    },
    {
      title: "Recopilación de Requisitos",
      description: [
        "Creación de wireframes",
        "Diseño de interfaces",
        "Prototipado",
      ],
    },
    {
      title: "Diseño UI/UX",
      description: [
        "Implementación del código",
        "Integración de APIs",
        "Pruebas unitarias",
      ],
    },
    {
      title: "Desarrollo Ágil",
      description: [
        "Pruebas de integración",
        "Pruebas de rendimiento",
        "Corrección de errores",
      ],
    },
    {
      title: "Pruebas & Calidad",
      description: [
        "Configuración del servidor",
        "Implementación en producción",
        "Monitoreo inicial",
      ],
    },
    {
      title: "Mejora Continua",
      description: [
        "Soporte técnico",
        "Actualizaciones periódicas",
        "Mejoras continuas",
      ],
    },
  ],
};

const OurProcess = () => {
  return (
    <section id="our-process" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#F7FAFC] font-Lora">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="mb-12 lg:mb-16">
          <h2 className={titleStyles}>
            {TEXTS.title} <span className="text-[#40B4E4]">Proceso</span>
          </h2>
          <p className={`mt-6 ${textStyles}`}>
            {TEXTS.content}
          </p>
        </div>

        {/* Contenedor de los procesos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {TEXTS.processes.map((process, index) => (
            <div 
              key={index} 
              className="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-full p-6 bg-white rounded-xl border border-[#E2E8F0] shadow-sm group-hover:shadow-md group-hover:border-[#40B4E4] transition-all duration-300 flex flex-col">
                {/* Número del proceso */}
                <div className="w-12 h-12 mb-4 mx-auto rounded-full bg-[#2A4365] flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                
                {/* Título */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#2A4365] text-center mb-4">
                  {process.title}
                </h3>

                {/* Descripción */}
                <ul className="space-y-2 text-left flex-grow">
                  {process.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-[#40B4E4] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-base lg:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;