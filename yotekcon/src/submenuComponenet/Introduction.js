import React from 'react';
import LeftSide from '../LeftSide';
import './Introduction.css';

const Introduction = () => {
  return (
      <div className="content">
          <div className="page-wrapper">
      <LeftSide />
     <div className="right-side">
    
        <h2 className="item_title">
          <span className="item_title_part0">YOTEK</span>
          <span className="item_title_part1"> CONSTRUCTION</span>
        </h2>

      <div className="item_fulltext">
        <section className="entry-content clearfix">
          YOTEK Construction plc. was established in 1998 by Yohannes Teklay. In the last 21 years, the Company has
          established itself as one of the leading construction companies in Ethiopia providing various construction
          services like construction of buildings, roads, special factory Foundations, bridges, and various types of civil
          engineering edifice contributing to the development of the construction industry. YOTEK construction is fully
          equipped with modern machineries and tools in accordance with the applicable regulations of the FDRE Ministry of
          Works and Urban Development /MoWUD/, and has been participating in different regions of Ethiopia. Rendering
          services of high quality, timelines, and cost-effective management schemes are a principal concern.
          <br />
          <br />
          So far YOTEK Construction Plc. has carried out different projects worth more than ETB 9 billion and currently
          has a project worth ETB 4.5 billion at hand. Currently, YOTEK has more than 5,500 employees which include 1100
          permanent employees.
          <br />
          Armed with strong, stable, experienced and sound management gained ever since its establishment,
          <br />
          <br />
          <strong>
            <em>YOTEK construction is well positioned to continue supplying its excellent service</em>
          </strong>
          <br />
          <br />
        </section>
      </div>

   </div>
    </div>
    </div>
  );
};


export default Introduction;
