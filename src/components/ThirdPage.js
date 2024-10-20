// src/components/ThirdPage.js
import React from 'react';
import background from '../assets/background1.png'; // Adjust the path to your background image
import flameIcon from '../assets/Droplets.png'; // Replace with the correct path to your flame icon
import dropArrow from '../assets/dropandarrow.png'; // Replace with the correct path to your drop arrow icon

function ThirdPage() {
  return (
    <section
      id="new-page"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700"></div>

      {/* Background Image */}
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Flame Icon as Background */}
      <img
        src={flameIcon}
        alt="Flame Icon"
        className="absolute top-1/18 w-1/8 h-auto opacity-100"
      />

      <div className="container mx-auto px-4 relative z-10 text-white flex flex-col items-start justify-center h-full">
        <p className="max-w-md mx-auto mb-8">
          Sube un archivo zip con los 3 archivos requeridos. Si tu aplicación está completa entrarás al programa y te contactaremos via email.
        </p>
        <p className="max-w-md mx-auto mb-8">
          La canción ganadora será escogida por votación de los participantes en el concurso.
        </p>
      </div>

      {/* Drop Arrow in Bottom Right Corner */}
      <img
        src={dropArrow}
        alt="Drop Arrow"
        className="absolute bottom-4 right-4 w-48 h-64"
      />
    </section>
  );
}

export default ThirdPage;