import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-white' : 'text-white/80 hover:text-white'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
      isActive
        ? 'bg-white/15 text-white'
        : 'text-white/85 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-[#e4560f] shadow-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-white tracking-wider shrink-0"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            N.D.I.C.H.U
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5">
            <NavLink to="/" className={linkClass} end>
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white rounded-full" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              {({ isActive }) => (
                <>
                  About
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white rounded-full" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/portfolio" className={linkClass}>
              {({ isActive }) => (
                <>
                  Creative Designs
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white rounded-full" />
                  )}
                </>
              )}
            </NavLink>

            <Link
              to="/contact"
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold text-[#e4560f] bg-white hover:bg-white/90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#e4560f] border-t border-white/15 px-4 py-4 space-y-1">
          <NavLink to="/" end className={mobileLinkClass} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={mobileLinkClass} onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/portfolio" className={mobileLinkClass} onClick={toggleMenu}>
            Creative Designs
          </NavLink>
          <NavLink to="/contact" className={mobileLinkClass} onClick={toggleMenu}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;