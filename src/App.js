import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../src/components/Footer';
import Home from '../src/views/Home';
import About from '../src/views/About';
import Destinations from '../src/views/Destinations';
import Packages from '../src/views/Packages';
import Contact from '../src/views/Contact';
import Navbar from '../src/components/Navbar.js';
import Login from '../src/components/Login.js';
import PackageDetail from './views/PackageDetails.js';



function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/packageDetail" element={<PackageDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
