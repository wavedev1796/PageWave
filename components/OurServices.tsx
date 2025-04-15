"use client";

import React from 'react';

// Estilos comunes
const titleStyles = "text-3xl md:text-5xl lg:text-6xl font-bold font-Lora text-[#2A4365]";
const textStyles = "text-gray-600 text-lg md:text-xl lg:text-2xl font-Lora font-regular max-w-3xl mx-auto";

// Textos de la sección
const TEXTS = {
  title: "Nuestros",
  content: "Soluciones digitales completas adaptadas a las necesidades de tu negocio.",
  services: [
    {
      title: "Desarrollo de Software a Medida",
      images: ["/assets/images/app.png"],
      description: "Soluciones personalizadas diseñadas específicamente para tus requerimientos operativos."
    },
    {
      title: "Aplicaciones Web y Móviles",
      images: ["/assets/images/globe.png"],
      description: "Aplicaciones multiplataforma con experiencias de usuario excepcionales."
    },
    {
      title: "Consultoría en Transformación Digital",
      images: ["/assets/images/tecnology.png"],
      description: "Orientación estratégica para tu viaje de evolución digital."
    },
    {
      title: "Integración de APIs",
      images: ["/assets/images/develop.png"],
      description: "Conectividad perfecta entre tus sistemas y plataformas."
    },
    {
      title: "Mantenimiento y Soporte Técnico",
      images: ["/assets/images/settings.png"],
      description: "Soporte continuo confiable para tu infraestructura digital."
    },
    {
      title: "IA y Machine Learning",
      images: ["/assets/images/cloud.png"],
      description: "Soluciones inteligentes que aprovechan tecnologías de vanguardia."
    },
  ],
};

const OurServices = () => {
  return (
    <section id="our-services" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#F7FAFC] font-Lora">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="mb-12 lg:mb-16">
          <h2 className={titleStyles}>
            {TEXTS.title} <span className="text-[#40B4E4]">Servicios</span>
          </h2>
          <p className={`mt-6 ${textStyles}`}>
            {TEXTS.content}
          </p>
        </div>

        {/* Contenedor de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {TEXTS.services.map((service, index) => (
            <div 
              key={index} 
              className="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-full p-6 bg-white rounded-xl border border-[#E2E8F0] shadow-sm group-hover:shadow-md group-hover:border-[#40B4E4] transition-all duration-300 flex flex-col">
                {/* Contenedor de imagen */}
                <div className="w-24 h-24 mb-6 mx-auto rounded-full bg-[#] flex items-center justify-center p-4">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Título */}
                <h3 className="text-xl lg:text-2xl font-bold text-[#2A4365] text-center mb-4">
                  {service.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-700 text-base lg:text-lg text-center mb-4">
                  {service.description}
                </p>

                {/* Botón/Link (opcional) */}
                {/* <div className="mt-auto pt-4">
                  <button className="text-[#40B4E4] font-medium hover:text-[#2A4365] transition-colors duration-300 flex items-center justify-center mx-auto">
                    Saber más
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;