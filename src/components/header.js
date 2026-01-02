import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav  style={{ padding: '40px', background:'#e4560fff', color: '#fff' }}>

      <Link to="/" className='link-style' style={{ margin: '0 15px',padding:'20px',borderLeftStyle:'solid', color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" className='link-style' style={{ padding:'20px',borderLeftStyle:'solid', margin: '0 15px', color: '#fff', textDecoration: 'none' }}>About</Link>
      <Link to="/portfolio" className='link-style' style={{ padding:'20px',borderLeftStyle:'solid', margin: '0 1px', color: '#fff', textDecoration: 'none' }}>Creative Designs</Link>
      
      <Link to="/contact" className='link-style' style={{ padding:'20px',borderRightStyle:'solid',borderRightWidth: '2px', margin: '0 15px', color: '#fff', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Header;