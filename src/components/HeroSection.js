// src/components/HeroSection.js
import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path to your logo file
import abstractBg from '../assets/abstract-bg.png'; // Adjust the path to your background image

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
            DROP IT HERE
          </div>
          <div className="text-red-500 text-lg font-bold transform -rotate-90 origin-left">
            MUSIC DEAL
          </div>
          <div className="text-red-500 text-lg font-bold transform -rotate-90 origin-left">
            CHECKLIST
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative text-center px-4 flex flex-col items-center">
        <div className="flex items-center">
          {/* "Drop Your" Text */}
          <h1 className="text-6xl font-bold text-red-500 mr-4">Drop Your</h1>

          {/* "DEMO" Stacked Vertically */}
          <div className="text-6xl font-bold text-red-500 leading-none">
            <div>D</div>
            <div>E</div>
            <div>M</div>
            <div>O</div>
          </div>
        </div>
        {/* Submit Button */}
        <a
          href="#submission"
          className="inline-block bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-600 font-semibold text-xl mt-8"
        >
          Submit Your Demo
        </a>
      </div>
    </section>
  );
}

export default HeroSection;