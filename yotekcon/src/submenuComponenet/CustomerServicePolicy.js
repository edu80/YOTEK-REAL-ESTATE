import React from 'react';
import LeftSide from '../LeftSide';
import './CustomerServicePolicy.css';
import { Link } from 'react-router-dom';

const CustomerServicePolicy = () => {
  return (
    <div className="content">
    <div className="page-wrapper">
      <LeftSide />
      <div className="right-side">
        <header>
          <h1 className="item_title">CUSTOMER SERVICE POLICY
</h1>
        </header>
        <div className="item_fulltext">
          <section className="entry-content clearfix">
            <p>
            YOTEK Construction PLC is committed to developing close and mutually beneficial working relationships with clients and suppliers.
            </p>
            <p>
            YOTEK Construction PLC is committed to delivering exceptional customer service by :


            </p>
            <ul>
              <li>Providing integrated best value service.</li>
              <li>Employing high caliber people who understand the importance of customer service.</li>
            <li>  Understanding and meeting each client s requirements and endeavoring to exceed their expectation.</li>
            <li> Continually striving to improve our services.</li>
            <li> Expanding our scope of service to meet our customer s changing needs.</li>
            <li> Being aware of the impacts of our operation on third parties and managing these impacts appropriately.</li>
            <li> Implementing project-specific communication strategies as and when required.</li>
            <li> Responding rapidly and effectively to issues and concerns raised by customers, suppliers and third parties.</li>
            <li> Ensuring the health and safety of all people involved in or affected by our operation is given top priority at all times.</li>
            <li> Maximizing opportunities to protect and enhance the environment while minimizing any negative impact from our activities or service.</li>
            <li> Seeking and acting on feedback on our performance and quality of our service.</li>
            </ul>
            <p>
              The achievement of this policy will support our vision. It will be reviewed annually to ensure continual improvement.
            </p>
          </section>
        </div>
        <div className="navigation">
          {/* Add previous page link */}
          <Link to="/communication" className="arrow-link">&#8249; Prev</Link>
          {/* Add next page link */}
          <Link to="/considerate-constructors-policy" className="arrow-link">Next &#8250;</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CustomerServicePolicy;
