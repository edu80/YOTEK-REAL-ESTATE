import React from 'react';
import LeftSide from '../LeftSide';
import './ConsiderateConstructorsPolicy.css';
import { Link } from 'react-router-dom';

const ConsiderateConstructorsPolicy = () => {
  return (
    <div className="content">
    <div className="page-wrapper">
      <LeftSide />
      <div className="right-side">
        <header>
          <h1 className="item_title">CONSIDERATE CONSTRUCTORS POLICY</h1>
        </header>
        <div className="item_fulltext">
          <section className="entry-content clearfix">
            <p>
              YOTEK Construction PLC is committed to delivering quality service, on time, and at a competitive cost. We understand the significance of presenting a positive image to the communities we work for and making a good impression on residents and members of the public affected by our work.
            </p>
            <p>
              It is YOTEK Construction PLC's policy to:
            </p>
            <ul>
              <li>Protect the health and safety of site personnel, visitors, and the general public.</li>
              <li>Respect the needs of subcontractors, suppliers, site personnel, and visitors.</li>
              <li>Communicate, where necessary, with neighboring residents and businesses on programming and activities that might affect the community.</li>
              <li>Protect the environment during construction by minimizing any negative impact caused by our activities, products, and services.</li>
              <li>Maintain excellent standards of housekeeping.</li>
              <li>Ensure our employees and those working on behalf of the company maintain appropriate standards of dress and conduct.</li>
              <li>Ensure everyone involved in the company's activities and services understands the importance of adhering to this policy.</li>
            </ul>
            <p>
              The achievement of this policy will support our vision. It will be reviewed annually to ensure continual improvement.
            </p>
          </section>
        </div>
        <div className="navigation">
          {/* Add previous page link */}
          <Link to="/customer-service-policy" className="arrow-link">&#8249; Prev</Link>
          {/* Add next page link */}
          <Link to="/management-team" className="arrow-link">Next &#8250;</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ConsiderateConstructorsPolicy;
