import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/navbar';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      {/* <Name/> */}
      <Header />
     
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
       <Footer />
    </Router>
  );
}

export default App;