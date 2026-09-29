import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { AlertCircle, ArrowRight } from 'lucide-react';

const prodData = [
  { day: 'Day 1', actual: 45, predicted: 46 },
  { day: 'Day 2', actual: 42, predicted: 43 },
  { day: 'Day 3', actual: 40, predicted: 40 },
  { day: 'Day 4', actual: 38, predicted: 39 },
  { day: 'Day 5', actual: 35, predicted: 36 },
];

export default function Overview({ setPage }) {
  return (
    <div>
      <h2 className="page-title">Overview Dashboard</h2>
      
      <div className="grid grid-cols-4" style={{ marginBottom: '24px' }}>
        <div className="card">
          <div className="card-title">Reservoir Temperature</div>
          <div className="kpi-value text-amber">62°C</div>
          <div className="kpi-subtext">Cooling trend detected</div>
        </div>
        <div className="card">
          <div className="card-title">Est. Crude Viscosity</div>
          <div className="kpi-value">1,450 cP</div>
          <div className="kpi-subtext text-amber">Increasing</div>
        </div>
        <div className="card">
          <div className="card-title">Current Production</div>
          <div className="kpi-value text-green">35 bbl/d</div>
          <div className="kpi-subtext">Predicted: 36 bbl/d</div>
        </div>
        <div className="card">
          <div className="card-title">Current SOR</div>
          <div className="kpi-value">3.2</div>
          <div className="kpi-subtext text-green">Optimal range</div>
        </div>
        
        <div className="card">
          <div className="card-title">Pump Efficiency</div>
          <div className="kpi-value text-amber">68%</div>
          <div className="kpi-subtext">Declining due to viscosity</div>
        </div>
        <div className="card">
          <div className="card-title">Energy Consumption</div>
          <div className="kpi-value">145 kWh/d</div>
          <div className="kpi-subtext text-amber">Above average</div>
        </div>
        <div className="card">
          <div className="card-title">Equipment Health</div>
          <div className="kpi-value text-amber">Warning</div>
          <div className="kpi-subtext">Rod floating suspected</div>
        </div>
        <div className="card" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: 'var(--accent-blue)' }}>
          <div className="card-title" style={{ color: 'var(--accent-blue)' }}>PETROTWIN AI Suggestion</div>
          <div style={{ fontSize: '0.875rem', marginTop: '8px', marginBottom: '12px' }}>
            Reduce SPM to 4 to mitigate rod floating and save energy.
          </div>
          <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '0.75rem' }} onClick={() => setPage('IntegratedOptimizer')}>
            View Recommendation <ArrowRight size={14}/>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Oil Production Trend</h3>
          </div>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={prodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a' }} />
                <Legend />
                <Line type="monotone" dataKey="actual" name="Actual (bbl/d)" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="predicted" name="Predicted (bbl/d)" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Recent Alerts</h3>
          </div>
          <div className="alert-card warning">
            <AlertCircle className="alert-icon text-amber" />
            <div>
              <div style={{ fontWeight: 600 }}>Possible Rod Floating Detected</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>BGH-001 • Today, 08:45 AM</div>
              <div style={{ fontSize: '0.875rem', marginTop: '4px' }}>Load variation indicates suspected rod floating due to high viscosity. Suggest reviewing SRP SPM settings.</div>
            </div>
          </div>
          <div className="alert-card" style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
            <AlertCircle className="alert-icon text-green" />
            <div>
              <div style={{ fontWeight: 600 }}>Normal Operation</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>BGH-002 • Today, 06:00 AM</div>
              <div style={{ fontSize: '0.875rem', marginTop: '4px' }}>Well performance is within expected limits.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
