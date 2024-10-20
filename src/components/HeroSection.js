// src/components/HeroSection.js
import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path to your logo file
import abstractBg from '../assets/abstract-bg.png'; // Adjust the path to your background image
import cover from '../assets/cover.png'; // Adjust the path to your cover image

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700"></div>

      {/* Background Image */}
      <img
        src={abstractBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Logo in the top-left corner */}
      <div className="absolute top-0 left-0 m-4">
        <img src={logo} alt="Logo" className="h-16" />
      </div>

      {/* Vertical Sidebar with Added Space */}
      <div className="absolute top-64 left-10 bottom-24 flex">
        <div className="flex flex-col items-center justify-between h-full space-y-12">
          <div className="text-red-500 text-lg font-bold transform -rotate-90 origin-left">
            Visión
          </div>
          <div className="text-red-500 text-lg font-bold transform -rotate-90 origin-left">
            Prerrequisitos
          </div>
          <div className="text-red-500 text-lg font-bold transform -rotate-90 origin-left">
            Drop your Demo
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative text-center px-4 flex flex-col items-center">
        <div className="flex items-center">
          {/* Description Text */}
          <div className="text-white text-lg max-w-md mr-8">
            <h1 className="text-4xl">
              Aceleradora de música Web 3.
            </h1>
            <br></br>
            <h2>
              Aprende cómo distribuir tu música a nuevos mercados y nuevas monetizaciónes
            </h2>
            <br></br>
            <h2>
              Al 1er puesto en el concurso de canciones le garantizamos un sold out de su canción y un mercado secundario. 
            </h2>
          </div>

          {/* Center Image */}
          <img src={cover} alt="Center" className="h-96 w-96 object-contain ml-8" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;