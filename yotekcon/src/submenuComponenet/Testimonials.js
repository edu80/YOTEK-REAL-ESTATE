import React from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.css';
import LeftSide from '../LeftSide';

const Testimonials = () => {
  return (
    <div className="content">
      <div className="page-wrapper">
        <LeftSide />
        <div className="right-side">
        <header>
          <h3 className="item_title">
          TESTIMONIALS
          </h3>
        </header>           
    
          <div className="testimonials-wrapper">
            <div className="testimonials-row">
              <div className="testimonials-content">
                <p>Yotek construction plc has signed an agreement with our university to construct Ambo University walliso campus Dormitory, Administration office and classroom As well as G+4 dormitory blocks which is included within the main contract. The University appreciates the good performance of the contractor and proudly recommends the company to handle works having similar nature of the aforementioned project.
                </p><em> -Ambo university</em>
              </div>
            </div>
            <div className="testimonials-row">
              <div className="testimonials-content">
                <p>Yotek  Construction P.L.C has signed a contract agreement with our enterprise to execute the construction of kombolcha  Airfield and Access Road Phase 2. Therefore, this letter of testimony is issued to Yotek Construction P.L.C testifying that the contractor has undertaken the aforementioned construction project and has execution work to date accomplishing a physical progress of 100% .The contractor ,Yotek Construction P.L.C ,has shown a good performance in fulfilling its contract obligations to our satisfaction .
                </p><em>–Ethiopian  Airports Enterprise</em> 
              </div>
            </div>
            <div className="testimonials-row">
              <div className="testimonials-content">
                <p>Yotek Construction P.L.C has signed a contract  agreement with the Municipality to execute the Construction of Hawassa  City Asphalt  Road project ( package three ) which includes earth work, sub base, base course , asphalt  concrete, sidewalks, drainage and ancillary work of four routes of 8.00km asphalt  concrete roads. Therefore, this letter of testimony is issued to Yotek Construction P.L.C testifying that the contractor is undertaking the aforementioned construction project with outstanding performance in fulfilling its contractual obligation to our satisfaction regardless of right of way obstructions and unfavorable weather condition.
                </p><em>–Southern Nations Nationalities and Peoples Regional State Municipality of Hawassa</em>
              </div>
            </div>
            <div className="testimonials-row">
              <div className="testimonials-content">
                <p>This is to certify that Yotek Construction has signed a contract Agreement to construct a multi – purpose Hall (Lot 23) with Aksum University . Accordingly we would like to write Recommendation letter  as per their Request on date 19/09/2015. Furthermore the said contractor from the commencement date Dec 18/2013 has been executing with a well organized team work and sufficient materials and labor ( skilled and non skilled ).Based on this Executed progress work up to date is 84.48%. Therefore Yotek Construction is the one who have the fastest progress and excellence in quality performance.
                </p><em>–AKSUM UNIVERSITY Construction project office</em>
              </div>
            </div>
            <div className="testimonials-row">
              <div className="testimonials-content">
                <p>Yotek Construction P.L.C has signed a contract agreement with the Municipality to execute the Construction of Hawassa City Asphalt Road project (package four )which includes earth work sub base ,base course , asphalt concrete , sidewalks , drainage and ancillary works of four routes of 5.9km asphalt concrete roads. Therefore, this letter of testimony is issued to Yotek Construction  P.L.C testifying that the contractor completed the aforementioned construction project 100% with outstanding performance in fulfilling its contractual obligation to our satisfaction . Additionally, we are delighted to testify and  witness that the contractor is efficient and has qualified professionals, sufficient equipment and resources to finish all work with best quality supported by test results and on time as per the proposed  schedule.
<em>–Southern Nations Nationalities and Peoples Regional State Municipality of hawassa</em></p>
              </div>
            </div>
            <div className="testimonials-row">
              <div className="testimonials-content">
                <p>Yotek Construction P.L.C  has signed a contract agreement with our enterprise to execute the Construction of Hawassa Airfield . The project consists of the construction of 150m wide run way /60. Wide asphalt concrete/ with a runway length of 3km. Therefore, this letter of testimony is issued to Yotek construction P.L.C testifying that the contractor was able to record an accelerated work progress due to deployment of the required resource as per project demand and diversification of project activities in fulfilling its contractual obligation to our satisfaction.
                    </p>
                    <em>–Ethiopian  Airports Enterprise</em>
              </div>
            </div>
            <div className="testimonials-row">
                <p>Accordingly the company is executing Ambo University sport field project. The contract period for this project was 150 days. This project is under construction with extra ordinary speed. The Present status of work performed is 109.3% whereas the work schedule is 85.45% so we are proud to recommend the company for any similar civil engineering work and witness that they have qualified personnel and adequate resources.
                </p>–<em>Ambo university</em>
              </div>
            </div>
         
          <div className="navigation">
            {/* Add previous page link */}
            <Link to="/roads" className="arrow-link">&#8249; Prev</Link>
            {/* Add next page link */}
            <Link to="/roads" className="arrow-link">Next &#8250;</Link>
          </div>
        </div>
      </div>
      </div>
  
   
  );
};

export default Testimonials;
