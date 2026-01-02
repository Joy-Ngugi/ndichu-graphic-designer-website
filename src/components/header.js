// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <nav  style={{ padding: '40px', background:'#e4560fff', color: '#fff' }}>

//       <Link to="/" className='link-style' style={{ margin: '0 15px',padding:'20px',borderLeftStyle:'solid', color: '#fff', textDecoration: 'none' }}>Home</Link>
//       <Link to="/about" className='link-style' style={{ padding:'20px',borderLeftStyle:'solid', margin: '0 15px', color: '#fff', textDecoration: 'none' }}>About</Link>
//       <Link to="/portfolio" className='link-style' style={{ padding:'20px',borderLeftStyle:'solid', margin: '0 1px', color: '#fff', textDecoration: 'none' }}>Creative Designs</Link>
      
//       <Link to="/contact" className='link-style' style={{ padding:'20px',borderRightStyle:'solid',borderRightWidth: '2px', margin: '0 15px', color: '#fff', textDecoration: 'none' }}>Contact</Link>
//     </nav>
//   );
// }

// export default Header;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Added to detect route changes

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // **New: Close menu on route change**
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      {/* Site Title */}
      <div className="logo" style={{fontFamily:"cursive"}}>N.D.I.C.H.U</div>

      {/* Hamburger Button */}
      <button
        className="menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Creative Designs</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Styles */}
      <style jsx>{`
        .navbar {
          background-color: #e4560fff;
          padding: 30px 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #fff;
        }

        /* Hamburger button styles */
        .menu-btn {
          background: none;
          border: 2px solid #fff;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1.5rem;
          display: none; /* Hidden on large screens by default */
          color: #fff;
        }

        /* Navigation links styles */
        .nav-links {
          display: flex;
          gap: 15px;
          
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          padding: 10px;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          /* Show hamburger button on small screens */
          .menu-btn {
            display: block;
          }

          /* Hide nav links initially */
          .nav-links {
            position: absolute;
            top: 60px;
            right: 20px;
            background-color: rgba(228, 86, 15, 0.9);
            flex-direction: column;
            width: 200px;
            border-radius: 8px;
            padding: 10px;
            display: none; /* Hidden by default */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
          }

          /* Show menu when open */
          .nav-links.open {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;