import React from 'react';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image8 from '../images/8.jpg';

function Portfolio() {
  const projects = [
    { src: image5, alt: 'Design project 1' },
    { src: image6, alt: 'Design project 2' },
    { src: image8, alt: 'Design project 3' },
    { src: image4, alt: 'Design project 4' },
    { src: image1, alt: 'Design project 5' },
    { src: image2, alt: 'Design project 6' },
    { src: image3, alt: 'Design project 7' },
  ];

  return (
    <section className="min-h-screen bg-neutral-50 text-neutral-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: '#ff9d00' }}
          >
            Portfolio
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            My Creative Designs
          </h1>
          <div
            className="w-16 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: '#ff9d00' }}
          />
          <p className="text-neutral-600 max-w-lg mx-auto">
            A selection of the projects I've worked on — from brand identity to
            editorial graphics.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Subtle overlay on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;