import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Airfield.css';
import LeftSide from '../LeftSide';

const Airfield = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
        <div className="content">
          <div className="page-wrapper">
          <LeftSide />
      
          <div className="right-side">
          <div className="row">
            <div className="column">
            <div className="image-container">
              <img
              src="http://www.yotekcon.com/images/airfield/hawassa%20city%20%20airfield%2006.jpg"
              alt="Airfield"
              width="500"
              height="300"
              onLoad={handleImageLoad}
              style={{ display: imageLoaded ? 'block' : 'none' }}
            />
          </div>
          </div>
              <div className="column">
                <p>Hawassa city area  Airfield is one of the projects we worked  and  pointed out the concern for quality  and attention to the detail. The knowledge and creativity  of Yotek construction resulted in such impressive result.</p>
                 
                </div>
               </div>            
              <div className="navigation">
                <Link to="/building" className="arrow-link">&#8249; Prev</Link>
                <Link to="/roads" className="arrow-link">Next &#8250;</Link>
              </div>
            </div>
          </div>
        </div>
      
      );
    };   
 

export default Airfield;
