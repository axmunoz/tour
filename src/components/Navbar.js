import React from "react";
import "../styles/Navbar.css";
import useNavbarState from "../hooks/useNavbarState";
import './Login';
import { Link } from 'react-router-dom';

function Navbar() {
  const { isMobile, menuOpen, toggleMenu, isScrolled } = useNavbarState();

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a href="www.google.com" className="logo">
          TRAVELER
        </a>
        {isMobile ? (
          <>
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
            <ul className={`nav-links-mobile ${menuOpen ? "active" : ""}`}>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/destinations">Destinos</Link></li>
              <li><a href="www.google.com">Packages</a></li>
              <li><a href="www.google.com">Contact</a></li>
            </ul>
          </>
        ) : (
          <div className="desktop-menu">
            <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/destinations">Destinos</Link></li>
              <li><a href="www.google.com">Packages</a></li>
              <li><a href="www.google.com">Contact</a></li>
            </ul>
            <Link to="/login">
              <button className="btn-book">Login</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;