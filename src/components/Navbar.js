// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Mesa Music Contest</div>
        <div>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="mx-2 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="mx-2 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="submission"
            smooth={true}
            duration={500}
            className="mx-2 cursor-pointer"
          >
            Submit
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;