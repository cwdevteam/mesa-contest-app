// src/components/SponsorsSection.js
import React from 'react';

function SponsorsSection() {
  const sponsors = [
    {
      id: 1,
      name: 'Sponsor 1',
      logo: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Sponsor 2',
      logo: 'https://via.placeholder.com/150',
    },
    // Add more sponsors as needed
  ];

  return (
    <section id="sponsors" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Sponsors</h2>
        <div className="flex flex-wrap justify-center items-center">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="m-4">
              <img src={sponsor.logo} alt={sponsor.name} className="h-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsorsSection;