import React from 'react';
import { AlertTriangle, ShieldCheck, Clock, Activity, ArrowRight } from 'lucide-react';

export default function EquipmentHealth() {
  return (
    <div>
      <h2 className="page-title">Equipment Health & Alerts</h2>

      <div className="grid grid-cols-4" style={{ marginBottom: '24px' }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <AlertTriangle size={32} className="text-amber" style={{ marginBottom: '8px' }} />
          <div className="card-title">Overall Status</div>
          <div className="kpi-value text-amber">Warning</div>
        </div>
        <div className="card">
          <div className="card-title">Rod Floating</div>
          <div className="kpi-value text-amber">Detected</div>
          <div className="kpi-subtext">Freq: High</div>
        </div>
        <div className="card">
          <div className="card-title">Impact Loading</div>
          <div className="kpi-value text-red">Critical</div>
          <div className="kpi-subtext">Peak Load: 15.2k lbs</div>
        </div>
        <div className="card">
          <div className="card-title">Pump Unsetting Risk</div>
          <div className="kpi-value text-amber">Elevated</div>
          <div className="kpi-subtext">Based on viscosity trend</div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Active Health Alerts</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="alert-card" style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
              <AlertTriangle className="alert-icon text-red" />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontWeight: 600 }}>Abnormal Impact Loading</div>
                  <span className="badge badge-critical">Critical</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>BGH-001 • Today, 09:30 AM</div>
                <div style={{ fontSize: '0.875rem' }}><strong>Possible Cause:</strong> Fluid pound or severe rod floating.</div>
                <div style={{ fontSize: '0.875rem' }}><strong>Recommendation:</strong> Reduce SPM immediately to prevent rod failure.</div>
              </div>
            </div>

            <div className="alert-card warning">
              <Activity className="alert-icon text-amber" />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontWeight: 600 }}>Suspected Rod Floating</div>
                  <span className="badge badge-warning">Warning</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>BGH-001 • Today, 08:45 AM</div>
                <div style={{ fontSize: '0.875rem' }}><strong>Possible Cause:</strong> Increased crude viscosity due to reservoir cooling.</div>
                <div style={{ fontSize: '0.875rem' }}><strong>Recommendation:</strong> Review integrated CSS-SRP optimization plan.</div>
              </div>
            </div>
            
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
              *Note: Actual diagnosis requires validated field signals and engineering review. Do not consider these as confirmed failures.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Historical Events (Sample Well)</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Event Type</th>
                <th>Resolution</th>
                <th>Downtime</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12 Aug 2026</td>
                <td>Pump Unsetting</td>
                <td>Respaced pump</td>
                <td>14 hrs</td>
              </tr>
              <tr>
                <td>05 Jul 2026</td>
                <td>Rod String Failure</td>
                <td>Replaced 2 rods</td>
                <td>36 hrs</td>
              </tr>
              <tr>
                <td>18 May 2026</td>
                <td>VFD Trip (Overload)</td>
                <td>Reset & lowered SPM</td>
                <td>2 hrs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
