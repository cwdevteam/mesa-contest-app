// src/components/AboutSection.js
import React from 'react';
import background from '../assets/backgroung2.png'; // Adjust the path to your background image

function AboutSection() {
  return (
    <section
      id="about"
      className="relative h-screen flex items-center justify-center overflow-hidden"
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
        <h2 className="text-4xl font-bold text-center mb-8">About the Contest</h2>
        <p className="text-center max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          vestibulum erat. Cras vulputate auctor lectus at fringilla.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;