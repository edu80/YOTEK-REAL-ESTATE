import React from 'react';
import { Link } from 'react-router-dom';
import LeftSide from '../LeftSide';
import './ProjectsCompleted.css';

const ProjectsCompleted = () => {
  // Define the image categories
  const imageCategories = [
    { id: 1, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/AXUM%20UNIVERSITY%20LOT%2001.jpg', alt: 'Category 1' },
    { id: 2, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/AXUM%20UNIVERSITY%20LOT%2002.jpg', alt: 'Category 2' },
    { id: 3, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/Adwa%20TTI%20project.jpg', alt: 'Category 3' },
    { id: 4, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/Ambo%20University%20ambo%20guder%2001.JPG', alt: 'Category 4' },
    { id: 5, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/Ambo%20University%20ambo%20guder%2002.JPG', alt: 'Category 5' },
    { id: 6, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/Ambo%20stadium.jpg', alt: 'Category 6' },
    { id: 7, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/Bahir%20Dar%20University%20Dormitory%2001.JPG', alt: 'Category 7' },
    { id: 8, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/Jimma%20university%20kito%20furdisa%20Dormitary.jpg', alt: 'Category 8' },
    { id: 9, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/Mizan%20Teferi%20TVET%20project.jpg', alt: 'Category 9' },
    { id: 10, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/Sendafa%20police%20College%2001.jpg', alt: 'Category 10' },
    { id: 11, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/Transport%20Network%20service%20building%20addis%20ababa%20tele%20.jpg', alt: 'Category 11' },
    { id: 12, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/Weliso%20civil%20service%20university%20project.jpg', alt: 'Category 12' },
    { id: 13, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/Yirgalem%20police%20college.jpg', alt: 'Category 13' },
    { id: 14, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/Yirgalem%20police%20college01jpg.jpg', alt: 'Category 14' },
    { id: 15, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/Yotek%20Bullding%20Mekele01%202.jpg', alt: 'Category 15' },
    { id: 16, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/arbaminch%20universty%20(2).jpg', alt: 'Category 16' },
    { id: 17, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/bahir%20dar%20lot%202%20law%20faculty.jpg', alt: 'Category 17' },
    { id: 18, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/bahir%20dar%20president%20offce01.jpg', alt: 'Category 18' },
    { id: 19, imageUrl: 'http://www.yotekcon.com/images/Projectfinished/jimma%20university%20conference%20hall.jpg', alt: 'Category 19' },

  ];

  return (
    <div className="content">
      <div className="page-wrapper">
      <LeftSide />
       
      <div className="right-side">
        <div className="real-estate-info">
          <h2>PROJECTS COMPLETED
</h2>
         

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
          <Link to="/roads" className="arrow-link">&#8249; Prev</Link>
          {/* Add next page link */}
          <Link to="/projects-under-development" className="arrow-link">Next &#8250;</Link>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default ProjectsCompleted;
