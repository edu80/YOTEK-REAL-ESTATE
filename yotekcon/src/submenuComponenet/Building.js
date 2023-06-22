import React from 'react';
import { Link } from 'react-router-dom';
import LeftSide from '../LeftSide';
import './Building.css';

const Building = () => {
  return (
    <div className="content">
      <div className="page-wrapper">
      <LeftSide />
  
      <div className="right-side">
      <header>
          <h1 className="item_title">
            BUILDING             </h1>
        </header>
        <div className="building">
          <div className="row">
            <div className="column">
              <img src="http://www.yotekcon.com/images/buildings/IMG_2173.JPG" alt="Building 1" />
              <h1>YOTEK HEAD QUARTER</h1>
              <p>We put as much hard work and dedication into this project which is 3 basement G+ 12 building with our consultant Nomy, and the results we achieved were a real boon for our company. All our contributions were the main reason this project succeeded.</p>
             
            </div>
           
            <div className="column">
                     <img src="http://www.yotekcon.com/images/buildings/AAU-forum.PNG" alt="Building 2" />
              <h1>ADDIS ABABA UNIVERSITY</h1>
              <p>Addis Ababa University Forum building Project which is 5 buildings including G + 15 is among an enviable record achieved. We feel great, and our clients are impressed, too Job well done, Parrish.</p>
             
            </div>
           </div>
           <div className="row">
            <div className="column">
               <hr className="hr-line" />
              <h1>BAHIR DAR IOTEX LOT V</h1>
              <p>We put in an extreme amount of hard work and has shown qualities we wish all our client possessed to finish Bahir Dar University Iotex Lot v. Our dedication and perseverance has manifested itself in to this project as usual.</p>
             
            </div>
           
            <div className="column">
            <hr className="hr-line" />
              <h1>MEKELLE UNIVERSITY</h1>
              <p>Yotek construction has offered  top-notch  quality and service to accomplish Mekelle University G+6 stuff residence. We are always pleased with this work. This project in particular illustrates our attention for detail and concern for quality.</p>
             
            </div>
           </div>
          <div className="row">
            <div className="column">
            <hr className="hr-line" />
              <img src="http://www.yotekcon.com/images/Projectfinished/AXUM%20UNIVERSITY%20LOT%2001.jpg" alt="Building 3" />
              <h3>AXUM UNIVERSITY</h3>
              <p>Yotek construction has shown an honest and hard working Character on this project.  During construction we have always been fair, thoughtful, and thorough.  It has been easy to develop a team approach to the construction process with clients too.  We also value this type of relationship with our client. The work performed was Conference Hall for Axum University.</p>
                  </div>
            <div className="column">
            <hr className="hr-line" />
              <img src="http://www.yotekcon.com/images/Projectfinished/Jimma%20university%20kito%20furdisa%20Dormitary.jpg" alt="Building 4" />
              <h1>JIMMA UNIVERSITY</h1>
              <p>On this project, Jimma University Conference Hall, We displayed a high level of professionalism, experience, dedication and commitment to quality. Yotek Construction did a good job of cultivating a teamwork oriented atmosphere and worked well with the project team to find solutions to problems and overcome numerous challenges during the course of construction</p>
                       </div>
          </div>
          <div className="row">
            <div className="column">
            <hr className="hr-line" />
              <img src="http://www.yotekcon.com/images/projectathand/Addis%20Ababa%20university%20college%20of%20Commerce02...jpg" alt="Building 5" />
              <h1>ADDIS ABABA UNIVERSITY COLLEGE OF COMMERCE</h1>
              <p>Yotek construction   had the pleasure of doing business with Addis Ababa University. As usual we have always operated in a professional and ethical manner and have successfully accomplished this project over the given period of time. We are very glad to produce a “better-than-most” product to our customer. The job done was 2 Basement and G+10 building.</p>
            
            </div>
            <div className="column">
            <hr className="hr-line" />
              <img src="http://www.yotekcon.com/images/buildings/GAST-Building-Project.jpg" alt="Building 6" />
              <h1>GAST BUILDING PROJECT</h1>
              <p>GAST Building Project was handled in a very professional way that our company handle the project by working together with clients closely.  Including our personal involvement, availability and attention the field and office staff dedicated to the project. The work performed was 2 Basement and G+9 Building.</p>
              
            </div>
          </div>
         <div className="navigation">
            <Link to="/real-estate" className="arrow-link">&#8249; Prev</Link>
            <Link to="/airfield-construction" className="arrow-link">Next &#8250;</Link>
          </div>
        </div>
      </div>
    </div>
 </div>
  );
};

export default Building;

