import React, { useState, useEffect, useCallback } from 'react';
import './ContentComponent.css';
import ImageSlider from 'react-simple-image-slider';
import LeftSide from './LeftSide';

const ContentComponent = ({ selectedMenuItem }) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const slideImages = [
    'http://www.yotekcon.com/images/banners/combolcaairfield.png',
    'http://www.yotekcon.com/images/banners/jimma%20dormitary.png',
    'http://www.yotekcon.com/images/banners/yotekrealestate.png',
    'http://www.yotekcon.com/images/banners/axumunversity.png',
    'http://www.yotekcon.com/images/banners/bahirdarpresedantoffice.png',
    'http://www.yotekcon.com/images/banners/hawasaroad.png',
    'http://www.yotekcon.com/images/banners/yotekmekele.png',
  ];

  const totalSlides = slideImages.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);


  const renderContent = () => {
    switch (selectedMenuItem) {
      case '/about':
        return <div>About Content</div>;
      case '/projects':
        return <div>Projects Content</div>;
      case '/contact':
        return <div>Contact Content</div>;

      default:
        return null;
    }
  };

  return (
    <div className="content">
            <div className="page-wrapper">
      <LeftSide />
      <div className="right-side">
        <div className="moduletable-wrapper">
          <ImageSlider
            width={'60%'}
            height={300}
            images={slideImages}
            showBullets={true}
            showNavs={true}
            startIndex={currentSlide}
            onClick={(index) => setCurrentSlide(index)}
          />

          <div id="main-content-bottom-row" className="row-fluid">
            <div id="content-bottom">
              <div className="moduletable">
                <div className="moduletable-wrapper">
                <header>
                    <h3 className="moduleTitle">
                      <span className="item_title_part0">YOTEK</span>
                      <span className="item_title_part1">Construction</span>
                    </h3>
                  </header>
                  <div className="mod-newsflash mod-newsflash__">
  
                  YOTEK Construction plc. was established in 1998 by Yohannes Teklay. In the last 21 years, the Company has established itself as one of the leading construction companies in Ethiopia, providing various construction services like the construction of buildings, roads, special factory foundations, bridges, and various types of civil engineering edifice, contributing to the development of the construction industry.
                  <a className="readmore" href="/index.php/about-us">Read more...</a>
      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    {renderContent()}
  </div>
</div>
);
};

export default ContentComponent;
