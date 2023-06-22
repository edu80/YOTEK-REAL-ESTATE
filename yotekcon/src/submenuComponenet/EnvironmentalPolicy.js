import React from 'react';
import LeftSide from '../LeftSide';
import './EnvironmentalPolicy.css';
import { Link } from 'react-router-dom';

const EnvironmentalPolicy = () => {
  return (
    <div className="content">
      <div className="page-wrapper">
      <LeftSide />
      <div className="right-side">
        <header>
          <h1 className="item_title">ENVIRONMENTAL POLICY</h1>
        </header>
        <div className="item_fulltext">
          <section className="entry-content clearfix">
            <p>
              YOTEK Construction PLC management understands that construction work has some damaging impact upon the environment, and therefore, the management is committed to ensuring that all construction and other activities are carried out in such a manner as to ensure a high standard of environmental protection and awareness.
            </p>
            <p>
              YOTEK Construction PLC will take appropriate precautions towards environmental improvement by using best practices and innovation to minimize environmental impacts. We will play an active role in supporting and encouraging employees and subcontractors working on our projects to reduce their environmental impacts.
            </p>
            <p>
              YOTEK Construction PLC will assess the following activities and strive to minimize their impacts in line with Ethiopia's environmental vision for sustainable development:
            </p>
            <ol>
              <li>Waste</li>
              <li>Water use</li>
              <li>Contamination of land</li>
              <li>Emission to air</li>
              <li>Carbon emissions</li>
              <li>Wildlife</li>
            </ol>
            <p>
              The policy will be enforced and reviewed annually for continual improvement.
            </p>
          </section>
        </div>
        <div className="navigation">
          {/* Add previous page link */}
          <Link to="/healthPolicy" className="arrow-link">&#8249; Prev</Link>
          {/* Add next page link */}
          <Link to="/communication" className="arrow-link">Next &#8250;</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EnvironmentalPolicy;
