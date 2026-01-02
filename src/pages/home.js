// import React from 'react';
// import logo from '../images/logo2.jpg';




// function Home() {
//   return (
//     <div style={{display: 'flex', alignItems: 'center',gap: '0px',}}>
//     <div>
//       <img src={logo} alt="Gallery" style={{
//     width: '400px', // adjust as needed
//     height: '400px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     marginLeft:'80px',
//     marginTop:"50px",
//   }} />
//   </div>
//   <div >
//       <div className="gradient-text">FRANCIS NDICHU KAMAU</div>
//       <h1 style={{fontFamily:"serif", fontSize:'40px', textAlign:'center'}}>Welcome to my Graphic Designer <br></br> & <br></br>Video Editor Portfolio </h1>
//       <p style={{fontSize:'20px', textAlign:'center'}}>Bringing ideas to life through stunning visuals and compelling videos.</p>
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//     <button
//       style={{
//         padding: '10px 20px',
//         fontSize: '16px',
//         borderRadius: '5px',
//         border: 'none',
//         backgroundColor: '#ff9d00ff',
//         color: '#fff',
//         cursor: 'pointer',
        
//         fontWeight:"bold",
//         transition: 'background-color 0.3s, transform 0.2s', // Add transition for smooth animation
//     }}
//     onMouseEnter={(e) => {
//       e.target.style.backgroundColor = '#ff6600ff'; // Darker orange on hover
//       e.target.style.transform = 'scale(1.05)'; // Slightly enlarge on hover
//     }}
//     onMouseLeave={(e) => {
//       e.target.style.backgroundColor = '#ff9d00ff'; // Reset to original color
//       e.target.style.transform = 'scale(1)'; // Reset scale
//     }}
//     onClick={() => (window.location.href = '/about')}
//   >
      
//       About Me
//     </button>
//   </div>
//     </div>
      

//     </div>
//   );
// }

// export default Home;


import React from 'react';
import logo from '../images/logo2.jpg';

function Home() {
  return (
    <>
      {/* Add styles for responsiveness */}
      <style>
        {`
          @media (max-width: 768px) {
            /* Styles for tablets and mobiles */
            .container {
              flex-direction: column;
              align-items: center;
              padding: 20px;
            }
            .profile-img {
              width: 60vw;
              height: auto;
              margin-left: 0;
            }
            .text-content {
              max-width: 90%;
              text-align: center;
            }
            h1 {
              font-size: 1.8rem;
            }
            p {
              font-size: 1rem;
            }
            button {
              padding: 10px 20px;
              font-size: 1rem;
            }
          }

          @media (min-width: 1200px) {
            /* Styles for large screens like desktops/laptops */
            .container {
              flex-direction: row;
              justify-content: center;
              gap: 40px;
              padding: 40px;

            }
            .gradient-text {
              font-size: 9rem;
            }
            .profile-img {
              width: 400px;
              height: 400px;
            }
            .text-content {
              max-width: 600px;
              text-align: left;
            }
            h1 {
              font-size: 2.5rem;
            }
            
            p {
              font-size: 1.2rem;
            }
            button {
              padding: 12px 24px;
              font-size: 1.1rem;
            }
          }
        `}
      </style>

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        overflowX: 'hidden',
      }}>
        {/* Image section */}
        <div>
          <img
            src={logo}
            alt="Gallery"
            className="profile-img"
            style={{
              width: '400px', // default for larger screens
              height: '400px',
              borderRadius: '50%',
              objectFit: 'cover',
              // marginLeft: '80px',
              marginTop: '50px',
            }}
          />
        </div>

        {/* Text Content */}
        <div className="text-content" style={{ maxWidth: '600px', margin: '20px' }}>
          <div className="gradient-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            FRANCIS NDICHU KAMAU
          </div>
          <h1 style={{ fontFamily: 'serif', fontSize: '2rem', textAlign: 'center', margin: '20px 0' }}>
            Welcome to my Graphic Designer <br /> & <br /> Video Editor Portfolio
          </h1>
          <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>
            Bringing ideas to life through stunning visuals and compelling videos.
          </p>
          {/* Button */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              style={{
                padding: '10px 20px',
                fontSize: '1rem',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#ff9d00ff',
                color: '#fff',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background-color 0.3s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ff6600ff';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#ff9d00ff';
                e.target.style.transform = 'scale(1)';
              }}
              onClick={() => (window.location.href = '/about')}
            >
              About Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

