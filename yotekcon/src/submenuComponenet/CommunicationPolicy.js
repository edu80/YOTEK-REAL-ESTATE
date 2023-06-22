import React from 'react';
import LeftSide from '../LeftSide';
import './CommunicationPolicy.css';
import { Link } from 'react-router-dom';

const CommunicationPolicy = () => {
  return (
    <div className="content">
    <div className="page-wrapper">
      <LeftSide />
      <div className="right-side">
        <header>
          <h1 className="item_title">COMMUNICATION POLICY</h1>
        </header>
        <div className="item_fulltext">
          <section className="entry-content clearfix">
            <p>
              YOTEK Construction PLC is committed to fully engaging with its employees through effective communication. Our policy on communication is fundamental to meeting the vision.
            </p>
            <p>
              It is YOTEK Construction PLC's policy to:
            </p>
            <ul>
              <li>Provide regular communication through the YOTEK server database, company publications, and email. These provide up-to-date information, including:</li>
              <ul>
                <li>Company news</li>
                <li>Company new initiatives</li>
                <li>Projects awarded</li>
                <li>Projects in progress and completed</li>
                <li>All procedures and policies</li>
                <li>Key staff movement and appointments</li>
                <li>Awards</li>
              </ul>
              <li>Hold regular meetings with department heads to discuss organizational development.</li>
              <li>Provide specific company, department, and project updates on performance and upcoming projects.</li>
              <li>Hold regular presentations, open to all staff, encouraging two-way dialogue.</li>
              <li>Promote an open and honest culture where employees feel able to voice their views and offer feedback.</li>
              <li>Utilize human resource processes, such as the annual appraisal system, to facilitate formal and informal discussions on all aspects of personal performance and development.</li>
              <li>Identify and implement the organizational structure needed to deliver the objectives of the policy. This structure will be regularly reviewed to ensure the appropriate level of support is given.</li>
            </ul>
            <p>
              The policy will be reviewed regularly to ensure it remains fit for purpose and fulfills the stated aims of the vision.
            </p>
          </section>
        </div>
        <div className="navigation">
          {/* Add previous page link */}
          <Link to="/environmental" className="arrow-link">&#8249; Prev</Link>
          {/* Add next page link */}
          <Link to="/customer-service-policy" className="arrow-link">Next &#8250;</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CommunicationPolicy;
