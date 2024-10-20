// src/components/Footer.js
import React from 'react';
import footerLogos from '../assets/footer-logos.png'; // Adjust path to your combined logo image

function Footer() {
  return (
    <footer className="py-6 bg-blue-700">
      <div className="container mx-auto px-4 text-center text-white">
        {/* Text above the logo image */}
        <div className="flex justify-around items-center mb-4">
          <div className="text-sm">DISTRIBUTED VIA</div>
          <div className="text-sm">RELEASED BY</div>
          <div className="text-sm">CLEARED VIA</div>
          <div className="text-sm">POWERED BY</div>
        </div>

        {/* Single Combined Logos Image */}
        <img
          src={footerLogos}
          alt="Footer Logos"
          className="mx-auto max-w-5xl w-full"
        />
      </div>
    </footer>
  );
}

export default Footer;