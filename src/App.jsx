import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Settings2, 
  Droplets, 
  LineChart, 
  Activity, 
  Wrench, 
  GitMerge, 
  GitCompare, 
  CheckSquare,
  Bell
} from 'lucide-react';

import Overview from './pages/Overview';
import WellDigitalTwin from './pages/WellDigitalTwin';
import CSSOptimizer from './pages/CSSOptimizer';
import ReservoirProduction from './pages/ReservoirProduction';
import SRPMonitoring from './pages/SRP';
import EquipmentHealth from './pages/EquipmentHealth';
import IntegratedOptimizer from './pages/IntegratedOptimizer';
import ScenarioComparison from './pages/ScenarioComparison';
import Recommendations from './pages/Recommendations';

function App() {
  const [activePage, setActivePage] = useState('Overview');
  const [selectedWell, setSelectedWell] = useState('BGH-001');

  const navItems = [
    { id: 'Overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'WellDigitalTwin', label: 'Well Digital Twin', icon: Activity },
    { id: 'CSSOptimizer', label: 'CSS Optimizer', icon: Droplets },
    { id: 'ReservoirProduction', label: 'Reservoir & Prod', icon: LineChart },
    { id: 'SRP', label: 'SRP Monitoring', icon: Settings2 },
    { id: 'EquipmentHealth', label: 'Equipment Health', icon: Wrench },
    { id: 'IntegratedOptimizer', label: 'Integrated Optimizer', icon: GitMerge },
    { id: 'ScenarioComparison', label: 'Scenario Comparison', icon: GitCompare },
    { id: 'Recommendations', label: 'Recommendations', icon: CheckSquare },
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'Overview': return <Overview setPage={setActivePage} />;
      case 'WellDigitalTwin': return <WellDigitalTwin />;
      case 'CSSOptimizer': return <CSSOptimizer />;
      case 'ReservoirProduction': return <ReservoirProduction />;
      case 'SRP': return <SRPMonitoring />;
      case 'EquipmentHealth': return <EquipmentHealth />;
      case 'IntegratedOptimizer': return <IntegratedOptimizer />;
      case 'ScenarioComparison': return <ScenarioComparison />;
      case 'Recommendations': return <Recommendations />;
      default: return <Overview setPage={setActivePage} />;
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>PETROTWIN</h1>
          <p>Baghewala Field | Oil India Limited</p>
        </div>
        <div className="sidebar-nav">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                onClick={() => setActivePage(item.id)}
              >
                <Icon className="nav-icon" size={20} />
                {item.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="topbar">
          <div className="topbar-left">
            <span style={{ fontWeight: 500 }}>Select Well:</span>
            <select 
              className="well-selector"
              value={selectedWell}
              onChange={(e) => setSelectedWell(e.target.value)}
            >
              <option value="BGH-001">BGH-001 (Sample)</option>
              <option value="BGH-002">BGH-002 (Sample)</option>
              <option value="BGH-003">BGH-003 (Sample)</option>
            </select>
          </div>
          <div className="topbar-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              {new Date().toLocaleString()}
            </span>
            <Bell size={20} style={{ color: 'var(--text-secondary)', cursor: 'pointer' }} />
          </div>
        </div>
        
        <div className="page-content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
