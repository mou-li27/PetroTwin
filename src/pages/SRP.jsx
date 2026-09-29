import React, { useState } from 'react';
import { Activity, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function SRPMonitoring() {
  const [spm, setSpm] = useState(5.0);
  const [vfd, setVfd] = useState(42);
  const [showRec, setShowRec] = useState(false);

  const dynacardData = Array.from({ length: 50 }, (_, i) => {
    const pos = Math.sin((i / 50) * Math.PI * 2);
    const load = 10000 + 5000 * Math.sin((i / 50) * Math.PI * 2 + Math.PI/4) + (Math.random() * 500);
    return { pos, load };
  });

  return (
    <div>
      <h2 className="page-title">SRP Monitoring & Optimization</h2>
      
      <div className="grid grid-cols-4" style={{ marginBottom: '24px' }}>
        <div className="card">
          <div className="card-title">Stroke Length</div>
          <div className="kpi-value">120 in</div>
          <div className="kpi-subtext">Fixed Configuration</div>
        </div>
        <div className="card">
          <div className="card-title">Pump Efficiency</div>
          <div className="kpi-value text-amber">68%</div>
          <div className="kpi-subtext">Below Target (75%)</div>
        </div>
        <div className="card">
          <div className="card-title">Polished Rod Load</div>
          <div className="kpi-value text-amber">14,200 lbs</div>
          <div className="kpi-subtext">High mechanical stress</div>
        </div>
        <div className="card">
          <div className="card-title">Energy Consumption</div>
          <div className="kpi-value">145 kWh/d</div>
          <div className="kpi-subtext text-amber">High</div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Surface Dynamometer Card</h3>
            <span className="badge badge-warning">Rod Floating Suspected</span>
          </div>
          <div style={{ height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dynacardData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="pos" type="number" domain={[-1.2, 1.2]} tick={false} />
                <YAxis domain={[0, 20000]} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a' }} labelFormatter={() => ''} />
                <Line type="monotone" dataKey="load" stroke="#3b82f6" dot={false} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '8px' }}>
            Illustrative demo data representing load vs position.
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">SRP Control Panel</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">SPM (Strokes Per Minute) - {spm}</label>
              <input type="range" min="2" max="8" step="0.5" value={spm} onChange={(e) => setSpm(e.target.value)} style={{ width: '100%' }} />
            </div>
            <div className="form-group">
              <label className="form-label">VFD Frequency (Hz) - {vfd}</label>
              <input type="range" min="30" max="60" step="1" value={vfd} onChange={(e) => setVfd(e.target.value)} style={{ width: '100%' }} />
            </div>
            <button className="btn btn-primary" onClick={() => setShowRec(true)}>
              <Zap size={16} /> Evaluate SRP Settings
            </button>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
              Settings are evaluated via simulation. No real equipment control.
            </div>

            {showRec && (
              <div style={{ marginTop: '16px', padding: '16px', backgroundColor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '0.875rem', color: 'var(--status-green)', marginBottom: '12px' }}>Simulated Recommendation</h4>
                <div className="grid grid-cols-2" style={{ gap: '12px', fontSize: '0.875rem' }}>
                  <div><strong>Suggested SPM:</strong> 4.0 (Down from 5.0)</div>
                  <div><strong>Suggested VFD:</strong> 38 Hz</div>
                  <div><strong>Production Effect:</strong> Neutral (better fillage)</div>
                  <div><strong>Energy Effect:</strong> -12% consumption</div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <strong>Mechanical Risk:</strong> <span className="text-green">Reduced impact loading and rod floating.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
