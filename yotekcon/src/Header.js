import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <header className="header fixed-header"> 
      <img
        src="http://www.yotekcon.com/images/Yotechcon_03.jpg"
        alt="Yotech Construction"
        className="logo"
      />
      <nav>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li>
          <Link to="" onClick={handleClick}>ABOUT US</Link>
            <ul className="sub-menu">
              <li><Link to="/introduction">Introduction</Link></li>
              <li><Link to="/mission">Mission and Vision</Link></li>
              <li>
              <Link to="" onClick={handleClick}>Policies</Link>
                <ul className="sub-menu">
                  <li><Link to="/quality">Our Quality Policy</Link></li>
                  <li><Link to="/healthPolicy">Health and Safety Policy</Link></li>
                  <li><Link to="/environmental">Environmental Policy</Link></li>
                  <li><Link to="/communication">Communication policy</Link></li>
                  <li><Link to="/customer-service-policy">Customer Service Policy</Link></li>
                  <li><Link to="/considerate-constructors-policy">Considerate Constructors Policy</Link></li>
                </ul>
              </li>
              <li><Link to="/management-team">Management Team</Link></li>
            </ul>
          </li>
          <li>
          <Link to="" onClick={handleClick}>BUSINESS LINES</Link>
            <ul className="sub-menu">
              <li><Link to="/real-estate">Real Estate</Link></li>
              <li><Link to="/building">Building</Link></li>
              <li><Link to="/airfield-construction">Airfield</Link></li>
              <li><Link to="/roads">Roads</Link></li>
            </ul>
          </li>
          <li>
          <Link to="" onClick={handleClick}>PROJECTS SHOWCASE</Link>
            <ul className="sub-menu">
              <li><Link to="/projects-completed">Projects Completed</Link></li>
              <li><Link to="/projects-under-development">Projects Under Development</Link></li>
              <li><Link to="/projects-awarded">Projects Awarded</Link></li>
            </ul>
          </li>
          <li>
          <Link to="" onClick={handleClick}>CERTIFICATION AND TESTIMONIALS</Link>
            <ul className="sub-menu">
              <li><Link to="/certifications">Certifications</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/social-contribution">Social Contribution</Link></li>
            </ul>
          </li>
          <li><Link to="/careers">CAREERS</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
