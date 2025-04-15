"use client";

import React from 'react';

// Estilos comunes
const titleStyles = "text-3xl md:text-5xl lg:text-6xl font-bold font-Lora text-[#2A4365]";
const textStyles = "text-gray-600 text-lg md:text-xl lg:text-2xl font-Lora font-regular max-w-3xl mx-auto";

// Text content
const TEXTS = {
  title: "Who We Are",
  content: "Somos un equipo apasionado que está comenzando su viaje para ofrecer soluciones tecnológicas innovadoras.",
};

// Datos del equipo
const TEAM = [
  {
    name: "Fundadores",
    description: "Los visionarios detrás de este emprendimiento",
    image: "/assets/images/team-founders.jpg"
  },
  {
    name: "Desarrolladores",
    description: "Talentos técnicos construyendo nuestras primeras soluciones",
    image: "/assets/images/team-developers.jpg"
  },
  {
    name: "Diseñadores",
    description: "Creativos dando forma a experiencias intuitivas",
    image: "/assets/images/team-designers.jpg"
  },
  {
    name: "Asesores",
    description: "Expertos guiando nuestro crecimiento",
    image: "/assets/images/team-consultant.jpg"
  }
];

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#F7FAFC] font-Lora">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="mb-12 lg:mb-16">
          <h2 className={titleStyles}>
            Quienes <span className="text-[#40B4E4]">Somos</span>
          </h2>
          <p className={`mt-6 ${textStyles}`}>
            {TEXTS.content}
          </p>
        </div>

        {/* Grid del equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {TEAM.map((member, index) => (
            <div 
              key={index} 
              className="group transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-full bg-white rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
                {/* Imagen */}
                <div className="h-48 overflow-hidden bg-[#D4EEFD] flex items-center justify-center">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-5xl">👥</span>
                  )}
                </div>
                
                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2A4365] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-700">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas ajustadas para emprendimiento */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4">
            <div className="text-2xl md:text-3xl font-bold text-[#40B4E4]">5+</div>
            <div className="text-gray-600">Miembros</div>
          </div>
          <div className="p-4">
            <div className="text-2xl md:text-3xl font-bold text-[#40B4E4]">10+</div>
            <div className="text-gray-600">Proyectos</div>
          </div>
          <div className="p-4">
            <div className="text-2xl md:text-3xl font-bold text-[#40B4E4]">5+</div>
            <div className="text-gray-600">Año de experiencia</div>
          </div>
          <div className="p-4">
            <div className="text-2xl md:text-3xl font-bold text-[#40B4E4]">100%</div>
            <div className="text-gray-600">Dedicación</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;