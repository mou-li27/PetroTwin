import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Play } from 'lucide-react';

export default function CSSOptimizer() {
  const [steamVol, setSteamVol] = useState(2000);
  const [injPress, setInjPress] = useState(80);
  const [soakTime, setSoakTime] = useState(7);
  const [prodCutoff, setProdCutoff] = useState(5);
  const [hasRun, setHasRun] = useState(false);

  const handleOptimize = () => {
    setHasRun(true);
  };

  const chartData = [
    { day: 1, current: 40, recommended: 45 },
    { day: 10, current: 35, recommended: 42 },
    { day: 20, current: 30, recommended: 38 },
    { day: 30, current: 25, recommended: 34 },
    { day: 40, current: 20, recommended: 30 },
    { day: 50, current: 15, recommended: 25 },
  ];

  return (
    <div>
      <h2 className="page-title">CSS Cycle Optimizer</h2>
      
      <div className="grid grid-cols-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">CSS Cycle Parameters Input</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Steam Volume (tons) - {steamVol}</label>
              <input type="range" min="1000" max="3000" step="100" value={steamVol} onChange={(e) => setSteamVol(e.target.value)} style={{ width: '100%' }} />
            </div>
            <div className="form-group">
              <label className="form-label">Injection Pressure (kg/cm²) - {injPress}</label>
              <input type="range" min="50" max="120" step="5" value={injPress} onChange={(e) => setInjPress(e.target.value)} style={{ width: '100%' }} />
            </div>
            <div className="form-group">
              <label className="form-label">Soak Time (days) - {soakTime}</label>
              <input type="range" min="3" max="14" step="1" value={soakTime} onChange={(e) => setSoakTime(e.target.value)} style={{ width: '100%' }} />
            </div>
            <div className="form-group">
              <label className="form-label">Production Cut-off (bbl/d) - {prodCutoff}</label>
              <input type="range" min="2" max="15" step="1" value={prodCutoff} onChange={(e) => setProdCutoff(e.target.value)} style={{ width: '100%' }} />
            </div>
            <button className="btn btn-primary" onClick={handleOptimize}>
              <Play size={16} /> Run CSS Optimization
            </button>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
              Simulated recommendation using demonstration data.
            </div>
          </div>
        </div>

        {hasRun ? (
          <div className="card" style={{ border: '1px solid var(--accent-teal)' }}>
            <div className="card-header">
              <h3 className="card-title text-teal">Optimization Results</h3>
            </div>
            <div className="grid grid-cols-2" style={{ gap: '16px', marginBottom: '24px' }}>
              <div style={{ padding: '12px', backgroundColor: 'var(--bg-primary)', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Recommended Steam Vol.</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>2,200 tons</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--status-green)' }}>+200 tons</div>
              </div>
              <div style={{ padding: '12px', backgroundColor: 'var(--bg-primary)', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Recommended Soak Time</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>8 days</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--status-amber)' }}>+1 day</div>
              </div>
              <div style={{ padding: '12px', backgroundColor: 'var(--bg-primary)', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Predicted Cycle Recovery</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--status-green)' }}>1,450 bbl</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--status-green)' }}>+12% vs current plan</div>
              </div>
              <div style={{ padding: '12px', backgroundColor: 'var(--bg-primary)', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Expected SOR</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>2.8</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--status-green)' }}>Optimal</div>
              </div>
            </div>
            
            <h4 style={{ fontSize: '0.875rem', marginBottom: '8px' }}>Production Prediction</h4>
            <div style={{ height: '200px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a' }} />
                  <Legend iconSize={10} wrapperStyle={{ fontSize: '12px' }}/>
                  <Line type="monotone" dataKey="current" name="Current Plan" stroke="#64748b" strokeWidth={2} />
                  <Line type="monotone" dataKey="recommended" name="Optimized Plan" stroke="#14b8a6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            Configure parameters and run optimization to see predictions.
          </div>
        )}
      </div>
    </div>
  );
}
