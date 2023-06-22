import React from 'react';
import LeftSide from '../LeftSide';


const ProjectUnderDevelopment = () => {
  return (
    <div className="content">
      <div className="page-wrapper">
      <LeftSide />
      <div className="right-side">
          <h1 className="item_title">PROJECTS AT HAND</h1>
          
          <main>
        <div className="front-page">
          <h2>No Data Available</h2>
          <p>Sorry, there is no data to display at the moment.</p>
        </div>
      </main>
      </div>
    </div>
    </div>
  );
};

export default ProjectUnderDevelopment;