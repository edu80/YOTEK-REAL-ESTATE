import React from 'react';
import LeftSide from '../LeftSide';
import './HealthPolicy.css';
import { Link } from 'react-router-dom';

const HealthPolicy = () => {
  return (
    <div className="content">
 <div className="page-wrapper">
      <LeftSide />
      <div className="right-side">
        <header>
          <h1 className="item_title">HEALTH AND SAFETY POLICY</h1>
        </header>
        <div className="item_fulltext">
          <section className="entry-content clearfix">
            <p>
              YOTEK Construction PLC is committed to providing a safe and healthy workplace for all stakeholders.
            </p>
            <p>
              The management understands that no activity is more important than protecting the health and safety of
              our employees, subcontractors' employees, and those who live and work adjacent to our operations.
            </p>
            <p>
              It is YOTEK Construction PLC's policy to:
            </p>
            <ul>
              <li>Prevent occupational illness, injury, and property damage.</li>
              <li>Take active steps to create safe work environments.</li>
              <li>Have a well-trained and fully competent workforce that actively contributes to the safe planning of its work.</li>
            </ul>
            <p>
              As a minimum, our health and safety obligations will comply with international guidelines. This health and safety policy will be diligently enforced and reviewed at least annually for continual improvement.
            </p>
            <p>
              YOTEK Construction PLC takes pride in ensuring that all stakeholders return home safely to their loved ones every day.
            </p>
          </section>
        </div>
        <div className="navigation">
          {/* Add previous page link */}
          <Link to="/quality" className="arrow-link">&#8249; Prev</Link>
          {/* Add next page link */}
          <Link to="/environmental" className="arrow-link">Next &#8250;</Link>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default HealthPolicy;
