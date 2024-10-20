// src/components/SubmissionSection.js
import React, { useState } from 'react';
import axios from 'axios';
import background from '../assets/background1.png'; // Adjust the path to your background image
import arrowImage from '../assets/arrow.png'; // Add the path to your arrow image
import logo from '../assets/logo.png'; // Add the path to your logo

function SubmissionSection() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('email', email);

    try {
      const response = await axios.post('https://lit-atoll-20776-d2acf1580841.herokuapp.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError(error.message);
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700"></div>

      {/* Background Image */}
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Top Left Text */}
      <div className="absolute top-8 left-8 text-white max-w-[25%]">
        <p className="text-lg">ASEGÚRATE DE TENER LOS 3 ARCHIVOS, COMPRÍMELOS EN UN ZIP Y SÚBELOS EN 'DROP YOUR DEMO'.</p>
        <p className="text-base mt-2">RECUERDA: A) CANCIÓN, B) PORTADA, C) SPLITS.</p>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center relative z-10">
        <img src={logo} alt="Logo" className="w-32 h-32 mb-6" />

        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4 text-center">
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border border-gray-300 text-lg text-gray-700 rounded-lg"
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 text-lg text-gray-700 rounded-lg"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 text-lg text-gray-700 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            DROP YOUR DEMO
          </button>
        </form>

        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>

      {/* Bottom Text and Arrow */}
      <div className="absolute bottom-8 w-full flex items-center justify-center">
        <p className="text-2xl font-semibold text-white">DROP YOUR DEMO ES UNA ACELERADORA MUSICAL WEB3</p>
        <img src={arrowImage} alt="Arrow" className="w-8 h-8 ml-4" />
      </div>
    </section>
  );
}

export default SubmissionSection;