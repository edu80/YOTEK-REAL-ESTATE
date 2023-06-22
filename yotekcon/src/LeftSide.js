import React, { useState } from 'react';
import './LeftSide.css';

const LeftSide = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="left-side">
      <div className="mod-custom mod-custom__">
        <p>
          <img
            src="http://www.yotekcon.com/images/yotekconstructionhq.jpg"
            alt=""
            width="250"
            height="372"
            onLoad={handleImageLoad}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
        </p>
        <p>
          <strong>
            <span className="contact-telephone">Tel.:+251115573196/98 Fax: </span>
            <span className="contact-fax">+251115573187/97<br /></span>
            <span className="contact-street">H.Q Addis Ababa in front of AU</span>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default  LeftSide;


