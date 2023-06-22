import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';
import ContentComponent from './ContentComponent';
import Footer from './Footer';
import Introduction from './submenuComponenet/Introduction';
import Mission from './submenuComponenet/Mission';
import QualityPolicy from './submenuComponenet/QualityPolicy';
import HealthPolicy from './submenuComponenet/HealthPolicy';
import EnvironmentalPolicy from './submenuComponenet/EnvironmentalPolicy';
import CommunicationPolicy from './submenuComponenet/CommunicationPolicy';
import CustomerServicePolicy from './submenuComponenet/CustomerServicePolicy';
import ConsiderateConstructorsPolicy from './submenuComponenet/ConsiderateConstructorsPolicy';
import ManagementTeam from './submenuComponenet/ManagementTeam';
import RealEstate from './submenuComponenet/RealEstate';
import Building from './submenuComponenet/Building';
import Airfield from './submenuComponenet/Airfield';
import ProjectsCompleted from './submenuComponenet/ProjectsCompleted';
import ProjectUnderDevelopment from './submenuComponenet/ProjectUnderDevelopment';
import Testimonials from './submenuComponenet/Testimonials';
import Contact from './submenuComponenet/Contact';
import Roads from './submenuComponenet/Roads';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ContentComponent />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/mission" element={<Mission/>} />
          <Route path="/quality" element={<QualityPolicy/>} />
          <Route path="/healthPolicy" element={<HealthPolicy/>} />
          <Route path="/environmental" element={<EnvironmentalPolicy/>} />
          <Route path="/communication" element={<CommunicationPolicy/>} />
          <Route path="/customer-service-policy" element={<CustomerServicePolicy/>} />
          <Route path="/considerate-constructors-policy" element={<ConsiderateConstructorsPolicy/>} />
          <Route path="/management-team" element={<ManagementTeam/>} />
          <Route path="/real-estate" element={<RealEstate/>} />
          <Route path="/building" element={<Building />} />
          <Route path="/airfield-construction" element={<Airfield />} />
          <Route path="/roads" element={<Roads />} />
          <Route path="/projects-completed" element={<ProjectsCompleted />} />
          <Route path="/projects-under-development" element={<ProjectUnderDevelopment />} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/contact" element={<Contact/>} />

          <Route path="/certifications" element={<Roads />} />
          <Route path="/social-contribution" element={<Roads />} />
          <Route path="/social-contribution" element={<Roads />} />
          <Route path="/social-contribution" element={<Roads />} />
          <Route path="/projects-awarded" element={<Roads />} />
          <Route path="/careers" element={<Roads />} />

    

         
          
          /roads


          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
