import React from 'react';
import { Link } from 'react-router-dom';
import LeftSide from '../LeftSide';
import './QualityPolicy.css';

const QualityPolicy = () => {
  return (
    <div className="content">
    <div className="page-wrapper">
      <LeftSide />

      <div className="right-side">
        <header>
          <h1 className="item_title">OUR QUALITY POLICY</h1>
        </header>
        <div className="item_fulltext">
          <section className="entry-content clearfix">
            <p>
              YOTEK Construction PLC team is committed to meet and driven to exceed customers' Expectation. It has
              established a Quality Management System which contains our business management system with the objective of
              meeting our Vision:
            </p>
            <ul>
              <li>To be all stakeholders' first choice company.</li>
              <li>To be a company that will inspire the construction industry in Ethiopia.</li>
            </ul>
            <p>
              The management is committed to ensuring the established Quality Management System is implemented in line
              with ISO 9001:2008 by all employees, subcontractors, and suppliers working on YOTEK Construction PLC
              projects.
            </p>
            <p>
              YOTEK Construction PLC aims to be a learning organization by developing a continual improvement culture
              through the application of:
            </p>
            <ul>
              <li>Adaptation of technology</li>
              <li>Transfer of knowledge in management</li>
              <li>Quality objectives</li>
              <li>Audit results</li>
              <li>Analysis of data</li>
              <li>Corrective and preventive action</li>
              <li>Management review</li>
              <li>Effective integration into a team</li>
            </ul>
            <p>The policy will be enforced and reviewed annually for continual improvement.</p>
          </section>
          <div className="navigation">
            {/* Add previous page link */}
            <Link to="/mission" className="arrow-link">&#8249; Prev</Link>
            {/* Add next page link */}
            <Link to="/healthPolicy" className="arrow-link">Next &#8250;</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default QualityPolicy;
