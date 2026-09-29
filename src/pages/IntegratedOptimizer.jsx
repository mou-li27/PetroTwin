import React, { useState } from 'react';
import { ArrowDown, GitMerge, CheckCircle2 } from 'lucide-react';

export default function IntegratedOptimizer() {
  const [hasRun, setHasRun] = useState(false);

  return (
    <div>
      <h2 className="page-title">Integrated CSS–SRP Optimizer</h2>
      
      <div className="card" style={{ marginBottom: '24px', backgroundColor: 'var(--bg-primary)' }}>
        <p style={{ margin: 0, fontSize: '0.875rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          PETROTWIN connects CSS decisions with SRP operations to optimize the entire system rather than isolated parts.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '24px 0' }}>
          <div className="badge badge-normal" style={{ fontSize: '0.875rem', padding: '8px 16px' }}>CSS Steam Injection</div>
          <ArrowDown size={20} className="text-secondary" style={{ margin: '8px 0' }} />
          <div className="badge badge-warning" style={{ fontSize: '0.875rem', padding: '8px 16px', backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>Reservoir Heating & Cooling</div>
          <ArrowDown size={20} className="text-secondary" style={{ margin: '8px 0' }} />
          <div className="badge" style={{ fontSize: '0.875rem', padding: '8px 16px', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-blue)' }}>Crude Viscosity Change</div>
          <ArrowDown size={20} className="text-secondary" style={{ margin: '8px 0' }} />
          <div className="badge badge-warning" style={{ fontSize: '0.875rem', padding: '8px 16px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--status-red)' }}>SRP Performance & Mechanical Loading</div>
          <ArrowDown size={20} className="text-secondary" style={{ margin: '8px 0' }} />
          <div className="badge badge-normal" style={{ fontSize: '1rem', padding: '12px 24px', border: '1px solid var(--status-green)' }}>Integrated Recommendation</div>
        </div>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '24px', marginBottom: '24px' }}>
        <div className="card" style={{ borderTop: '4px solid var(--accent-blue)' }}>
          <h3 className="card-title" style={{ marginBottom: '16px' }}>Current CSS Cycle Plan</h3>
          <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Steam Volume:</span> <strong>2,000 tons</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Injection Pressure:</span> <strong>80 kg/cm²</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Soak Time:</span> <strong>7 days</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Prod Cut-off:</span> <strong>5 bbl/d</strong></div>
          </div>
        </div>
        
        <div className="card" style={{ borderTop: '4px solid var(--accent-teal)' }}>
          <h3 className="card-title" style={{ marginBottom: '16px' }}>Current SRP Operation</h3>
          <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>SPM:</span> <strong>5.0</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>VFD Setting:</span> <strong>42 Hz</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Pump Eff:</span> <strong className="text-amber">68%</strong></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Mech Load:</span> <strong className="text-red">High (Rod Floating)</strong></div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <button className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '1rem' }} onClick={() => setHasRun(true)}>
          <GitMerge size={20} /> Generate Integrated Recommendation
        </button>
      </div>

      {hasRun && (
        <div className="card" style={{ border: '1px solid var(--status-green)', backgroundColor: 'rgba(16, 185, 129, 0.02)' }}>
          <div className="card-header">
            <h3 className="card-title text-green" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={20} /> Optimal Integrated Strategy
            </h3>
          </div>
          
          <div className="grid grid-cols-2" style={{ gap: '24px' }}>
            <div>
              <h4 style={{ fontSize: '0.875rem', marginBottom: '12px', color: 'var(--accent-blue)' }}>1. CSS Cycle Adjustment (Planning Level)</h4>
              <ul style={{ fontSize: '0.875rem', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Increase Steam Volume to <strong>2,200 tons</strong>.</li>
                <li>Extend soak time to <strong>8 days</strong> for better heat distribution.</li>
              </ul>
              
              <h4 style={{ fontSize: '0.875rem', margin: '16px 0 12px 0', color: 'var(--accent-teal)' }}>2. SRP Adjustment (Operational Level)</h4>
              <ul style={{ fontSize: '0.875rem', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Reduce SPM to <strong>4.0</strong> immediately.</li>
                <li>Adjust VFD to <strong>38 Hz</strong>.</li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '16px', borderRadius: '8px' }}>
              <h4 style={{ fontSize: '0.875rem', marginBottom: '12px' }}>Expected Integrated Outcomes</h4>
              <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Oil Production:</span> <strong className="text-green">+12% over cycle</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Expected SOR:</span> <strong>2.8 (Optimal)</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Energy Consumption:</span> <strong className="text-green">-15%</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Equipment Risk:</span> <strong className="text-green">Significantly Reduced</strong></div>
              </div>
              <div style={{ marginTop: '16px', fontSize: '0.75rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
                <strong>Reasoning:</strong> Higher steam volume reduces viscosity for longer. Lowering SPM now mitigates rod floating risk during the current high-viscosity phase, improving pump fillage and saving energy without sacrificing actual production.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
