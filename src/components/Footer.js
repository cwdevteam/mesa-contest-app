// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="py-6 bg-gray-800">
      <div className="container mx-auto px-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Music Contest. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;