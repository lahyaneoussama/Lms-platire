import React from 'react';
import "./css/Dash.css"
import { BadgeCent } from 'lucide-react';
import Headeradmin from './Headeradmin';
import MapDecoration from '../Galery/MapDecoration';

const Dashboard = () => {
  return (
    <>
    <Headeradmin />
    <div className="dashboard-container">
      <h1 className="dashboard-title">Tableau de Bord</h1>
      <div className="metrics-container">
        <div className="metric-card green">
          <div className="metric-number">Bienvenue</div>
          <div className="metric-info">
            <div className="metric-text">
              <p className='metric-Text-parghraphe'>Mr.LAHYANE LAHCEN</p>
            </div>
          </div>
        </div>

        <div className="metric-card blue">
          <div className="metric-number">Galery</div>
          <div className="metric-info">
            <div className="metric-text">
              <p className='metric-Text-parghraphe'>200 Images</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};




export default Dashboard;