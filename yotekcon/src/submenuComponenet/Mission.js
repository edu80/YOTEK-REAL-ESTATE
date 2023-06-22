import React from 'react';
import { Link } from 'react-router-dom';
import LeftSide from '../LeftSide';
import './Mission.css';

const Mission = () => {
  return (
    <div className="content">
      <div className="page-wrapper">
      <LeftSide />
      <div className="right-side">
        <header>
          <h1 className="item_title">
            <span className="item_title_part0">YOTEK</span>
            <span className="item_title_part1">Construction</span>
          </h1>
        </header>
        <div className="item_fulltext">
          <section className="entry-content clearfix">
            <h2>MISSION AND VISION</h2>
            <h3>Our Vision:</h3>
            <ul>
              <li>TO be all stakeholders first choice company</li>
              <li>To be a company that will inspire the construction industry in Ethiopia</li>
            </ul>
            <h3>Our Mission:</h3>
            <ul>
              <li>To build and maintain a dedicated team striving to exceed clients' expectations.</li>
              <li>
                To participate in the development endeavor of Ethiopia by bridging the construction technology and
                knowledge gap between Ethiopia and the rest of the world.
              </li>
              <li>
                We strive to work hard to maximize the benefit of our clients by delivering projects with quality, on
                time, and at a competitive cost.
              </li>
            </ul>
          </section>
          <div className="navigation">
            
            <Link to="/introduction" className="arrow-link">&#8249; Prev</Link>
          
            <Link to="/quality" className="arrow-link">Next &#8250;</Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
