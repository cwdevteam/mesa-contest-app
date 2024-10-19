// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SubmissionSection from './components/SubmissionSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App scroll-smooth">
      <HeroSection />
      <AboutSection />
      <SubmissionSection />
      <Footer />
    </div>
  );
}
export default App;