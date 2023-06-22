import React from 'react';
import { Link } from 'react-router-dom';
import LeftSide from '../LeftSide';
import './RealEstate.css';

const RealEstate = () => {
  // Define the image categories
  const imageCategories = [
    { id: 1, imageUrl: 'http://www.yotekcon.com/images/realestate/DSC_1040.JPG', alt: 'Category 1' },
    { id: 2, imageUrl: 'http://www.yotekcon.com/images/realestate/DSC_1041.JPG', alt: 'Category 2' },
    { id: 3, imageUrl: 'http://www.yotekcon.com/images/realestate/DSC_1055.JPG', alt: 'Category 3' },
    { id: 4, imageUrl: 'http://www.yotekcon.com/images/realestate/DSC_1057.JPG', alt: 'Category 4' },
    { id: 5, imageUrl: 'http://www.yotekcon.com/images/realestate/YOTEK%20real%20estate%20photo%2001.JPG', alt: 'Category 5' },
    { id: 6, imageUrl: 'http://www.yotekcon.com/images/realestate/YOTEK%20real%20estate%20photo%2002.JPG', alt: 'Category 6' },
    { id: 7, imageUrl: 'http://www.yotekcon.com/images/realestate/YOTEK%20real%20estate%20photo%2003.JPG', alt: 'Category 7' },
    { id: 8, imageUrl: 'http://www.yotekcon.com/images/realestate/YOTEK%20real%20estate%20photo06.JPG', alt: 'Category 8' },
    { id: 9, imageUrl: 'http://www.yotekcon.com/images/realestate/YOTEK%20real%20estate%20photo07.JPG', alt: 'Category 9' },
  ];

  return (
    <div className="content">
      <div className="page-wrapper">
      <LeftSide />
       
      <div className="right-side">
        <div className="real-estate-info">
          <h2>YOTEK REAL ESTATE DEVELOPMENT</h2>
          <img src="http://www.yotekcon.com/images/realestate.jpg" alt="Real Estate" />

          <p>
            Due to various construction work experience and high housing demand, YOTEK is now involved in real estate
            development with a total area of 52,750 M2 in Mekanisalebu, Addis Ababa. Our main objective is to satisfy
            the housing demand in Ethiopia.
          </p>

          <p>
            In order to assure total satisfaction of our customers, the company is determined to provide quality and
            affordable houses with different types of payment schedules.
          </p>

          <h2>TYPES OF HOUSES</h2>
          <ul>
            <li>Villa - 300 msq and 250 msq G+1 & G+2</li>
            <li>Townhouse</li>
            <li>Apartment</li>
          </ul>

          <h2>MAJOR FACILITIES IN THE AREA</h2>
          <ul>
            <li>Asphalt road access to every home</li>
            <li>Drainage system</li>
            <li>Water & electricity</li>
            <li>Telephone facilities</li>
            <li>Security</li>
            <li>182 car parking for apartments</li>
          </ul>

          <h2>ADDITIONAL FACILITIES</h2>
          <ul>
            <li>Supermarket</li>
            <li>Green area</li>
            <li>Tennis court</li>
            <li>Basketball court</li>
            <li>Garbage disposal and many more...</li>
          </ul>

          <div className="image-grid">
            {imageCategories.map((category) => (
              <img
                key={category.id}
                src={category.imageUrl}
                alt={category.alt}
                className="category-image"
              />
            ))}
          </div>
        </div>

        <div className="navigation">
          {/* Add previous page link */}
          <Link to="/quality"className="arrow-link">&#8249; Prev</Link>
          {/* Add next page link */}
          <Link to="/building" className="arrow-link">Next &#8250;</Link>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default RealEstate;
