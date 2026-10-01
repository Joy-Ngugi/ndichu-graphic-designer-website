import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo2.jpg';

function Home() {
  return (
    <section className="min-h-screen bg-neutral-50 text-neutral-900 flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Image */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30"
              style={{ background: 'radial-gradient(circle, #ff9d00, transparent 70%)' }}
              aria-hidden="true"
            />
            <img
              src={logo}
              alt="Francis Ndichu Kamau"
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <p
            className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: '#ff9d00' }}
          >
            Francis Ndichu Kamau
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Graphic Designer
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-neutral-500 mt-2">
              & Video Editor
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            Bringing ideas to life through stunning visuals and compelling
            videos — where every frame tells a story.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: '#ff9d00' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e68a00')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ff9d00')}
            >
              About Me
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: '#ff9d00', color: '#ff9d00' }}
            >
              View Portfolio
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;