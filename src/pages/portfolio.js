import React from 'react';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
// import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';

function Portfolio() {
  return (
    <div>
      <h1 style={{textAlign:"center", fontFamily:"cursive", fontSize:"40px"}}>My Creative Designs</h1>
      <p style={{textAlign:"center", fontSize:"18px"}}>Here are some of the projects I have worked on.</p>
      {/* <p style={{marginLeft: "70px", fontSize:"18px"}}>My best graphics in The Kenya Times as Graphics Designer</p> */}
      <div className="gallery">
        {/* Replace src with your actual images */}
        <div className="card">
          <img src={image5} alt="Project 1" className="project-image" />
          {/* <h3 className="project-title">Project Title 1</h3>
          <p className="project-desc">Brief description of Project 1.</p> */}
        </div>
        <div className="card">
          <img src={image6} alt="Project 2" className="project-image" />
          {/* <h3 className="project-title">Project Title 2</h3>
          <p className="project-desc">Brief description of Project 2.</p> */}
        </div>
        <div className="card">
          <img src={image8} alt="Project 3" className="project-image" />
          {/* <h3 className="project-title">Project Title 3</h3>
          <p className="project-desc">Brief description of Project 3.</p> */}
        </div>
        <div className="card">
          <img src={image4} alt="Project 3" className="project-image" />
          {/* <h3 className="project-title">Project Title 3</h3>
          <p className="project-desc">Brief description of Project 3.</p> */}
        </div>
        <div className="card">
          <img src={image1} alt="Project 3" className="project-image" />
          {/* <h3 className="project-title">Project Title 3</h3>
          <p className="project-desc">Brief description of Project 3.</p> */}
        </div>
        <div className="card">
          <img src={image2} alt="Project 3" className="project-image" />
          {/* <h3 className="project-title">Project Title 3</h3>
          <p className="project-desc">Brief description of Project 3.</p> */}
        </div>
        {/* <div className="card">
          <img src={image7} alt="Project 3" className="project-image" />
          <h3 className="project-title">Project Title 3</h3>
          <p className="project-desc">Brief description of Project 3.</p>
        </div> */}
        <div className="card">
          <img src={image3} alt="Project 3" className="project-image" />
          {/* <h3 className="project-title">Project Title 3</h3>
          <p className="project-desc">Brief description of Project 3.</p> */}
        </div>
        
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
}

export default Portfolio;