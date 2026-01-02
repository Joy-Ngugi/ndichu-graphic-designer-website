import React from 'react';
import logo from '../images/logo2.jpg';




function Home() {
  return (
    <div style={{display: 'flex', alignItems: 'center',gap: '0px',}}>
    <div>
      <img src={logo} alt="Gallery" style={{
    width: '400px', // adjust as needed
    height: '400px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginLeft:'80px',
    marginTop:"50px",
  }} />
  </div>
  <div >
      <div className="gradient-text">FRANCIS NDICHU KAMAU</div>
      <h1 style={{fontFamily:"serif", fontSize:'40px', textAlign:'center'}}>Welcome to my Graphic Designer <br></br> & <br></br>Video Editor Portfolio </h1>
      <p style={{fontSize:'20px', textAlign:'center'}}>Bringing ideas to life through stunning visuals and compelling videos.</p>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <button
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#ff9d00ff',
        color: '#fff',
        cursor: 'pointer',
        
        fontWeight:"bold",
        transition: 'background-color 0.3s, transform 0.2s', // Add transition for smooth animation
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = '#ff6600ff'; // Darker orange on hover
      e.target.style.transform = 'scale(1.05)'; // Slightly enlarge on hover
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = '#ff9d00ff'; // Reset to original color
      e.target.style.transform = 'scale(1)'; // Reset scale
    }}
    onClick={() => (window.location.href = '/about')}
  >
      
      About Me
    </button>
  </div>
    </div>
      

    </div>
  );
}

export default Home;