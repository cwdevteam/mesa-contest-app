// src/components/AboutSection.js
import React from 'react';
import background from '../assets/background2.png'; // Adjust the path to your background image
import image1 from '../assets/image1.png'; // Adjust the path to your image
import image2 from '../assets/image2.png'; // Adjust the path to your image
import image3 from '../assets/image3.png'; // Adjust the path to your image
import arrow from '../assets/arrow.png'; // Adjust the path to your arrow image

function AboutSection() {
  return (
    <section
      id="about"
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-4 text-white">REQUISITOS</h2>

        {/* Images Section with Titles and Links to Loom */}
        <div className="flex justify-around items-center w-full mb-8">
          <div className="text-center">
            <a href="https://www.loom.com/share/30c26337ebe34dfa8a80750c85034678?sid=34a29bba-4e8e-45af-89da-20979a868fe0" target="_blank" rel="noopener noreferrer">
              <img src={image1} alt="Image 1" className="w-44 h-auto mx-4" />
            </a>
            <p className="mt-2 text-2xl font-bold text-white">CANCIÓN</p>
          </div>

          <div className="text-center">
            <a href="https://www.loom.com/share/6ea01f9e18a646dc8130b208b6831334?sid=294d860e-8f21-46c3-ad76-fa36f8f19158" target="_blank" rel="noopener noreferrer">
              <img src={image2} alt="Image 2" className="w-44 h-auto mx-4" />
            </a>
            <p className="mt-2 text-2xl font-bold text-white">PORTADA</p>
          </div>

          <div className="text-center">
            <a href="https://www.loom.com/share/b49392d1212741ed97df870102e693a8?sid=b6ffdeaf-8501-482b-bb03-fb4d72747146" target="_blank" rel="noopener noreferrer">
              <img src={image3} alt="Image 3" className="w-44 h-auto mx-4" />
            </a>
            <p className="mt-2 text-2xl font-bold text-white">SPLITS</p>
          </div>
        </div>

        {/* Explanatory Text Below the Middle Image and Above the Button */}
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-center text-white text-xl font-semibold mb-4">
            ¿Necesitas un contrato de splits?
          </p>
        </div>

        {/* Button and Arrow in Horizontal Row */}
      <div className="flex justify-center items-center mt-4 ml-10">
        <a 
          href="https://contract-builder-chi.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-8 py-4 bg-blue-500 text-white font-bold rounded-full text-xl hover:bg-blue-600"
        >
          LA CASA PAGA
        </a>
        <div className="ml-4">
          <a href="https://contract-builder-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={arrow} alt="Arrow" className="w-8 h-auto" />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default AboutSection;