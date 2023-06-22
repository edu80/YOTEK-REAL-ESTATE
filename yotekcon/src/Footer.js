import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Careers</a>|{' '}
        <a href="/">FAQ</a> |{' '}
        <a href="/">Privacy Policy</a>|{' '}
        <a href="/">Login</a>
      </div>
      <div className="footer-icons">
        <a href="/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faGooglePlus} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
