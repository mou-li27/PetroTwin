import React from 'react';
import { Layers, ArrowDown, Activity, Settings, Database } from 'lucide-react';

export default function WellDigitalTwin() {
  return (
    <div>
      <h2 className="page-title">Well Digital Twin (2D Schematic)</h2>
      
      <div className="card" style={{ padding: '40px', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', position: 'relative' }}>
          
          {/* Surface Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%', justifyContent: 'center' }}>
            <div className="card" style={{ width: '250px', borderLeft: '4px solid var(--accent-blue)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Settings size={20} className="text-blue-500" />
                <span style={{ fontWeight: 600 }}>Surface Equipment</span>
              </div>
              <div style={{ fontSize: '0.875rem' }}>
                <div><strong>SRP SPM:</strong> 5.0</div>
                <div><strong>VFD Freq:</strong> 42 Hz</div>
                <div><strong>Power:</strong> 145 kWh/d</div>
                <div><strong>Output:</strong> 35 bbl/d</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--bg-card)', borderRadius: '8px', border: '2px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Settings size={32} />
              </div>
              <ArrowDown size={32} style={{ color: 'var(--text-secondary)', margin: '10px 0' }} />
            </div>
            
            <div style={{ width: '250px' }}></div> {/* Spacer */}
          </div>

          {/* Wellbore Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%', justifyContent: 'center' }}>
            <div style={{ width: '250px', textAlign: 'right', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Production Flow (Up)
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '20px', height: '120px', backgroundColor: 'var(--border-color)', borderRadius: '4px', position: 'relative' }}>
                {/* Simulated fluid level */}
                <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%', backgroundColor: 'rgba(59, 130, 246, 0.5)', borderRadius: '4px' }}></div>
              </div>
            </div>

            <div className="card" style={{ width: '250px', borderLeft: '4px solid var(--accent-teal)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Activity size={20} className="text-teal-500" />
                <span style={{ fontWeight: 600 }}>Wellbore Condition</span>
              </div>
              <div style={{ fontSize: '0.875rem' }}>
                <div><strong>Pump Eff:</strong> 68%</div>
                <div><strong>Status:</strong> Rod floating suspected</div>
                <div><strong>Fluid Lvl:</strong> 850m</div>
              </div>
            </div>
          </div>

          {/* Reservoir Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%', justifyContent: 'center' }}>
            <div className="card" style={{ width: '250px', borderLeft: '4px solid var(--status-amber)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Database size={20} className="text-amber-500" />
                <span style={{ fontWeight: 600 }}>Reservoir (Jodhpur Sandstone)</span>
              </div>
              <div style={{ fontSize: '0.875rem' }}>
                <div><strong>Temp:</strong> 62°C (Cooling)</div>
                <div><strong>Pressure:</strong> 25 kg/cm²</div>
                <div><strong>Est. Viscosity:</strong> 1,450 cP</div>
                <div><strong>Oil Mobility:</strong> Poor</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ArrowDown size={32} style={{ color: 'var(--text-secondary)', margin: '10px 0', transform: 'rotate(180deg)' }} />
              <div style={{ width: '120px', height: '60px', backgroundColor: '#78350f', borderRadius: '30px 30px 0 0', opacity: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: 'none' }}>
                <Layers size={24} color="#fcd34d" />
              </div>
            </div>
            
            <div style={{ width: '250px' }}></div> {/* Spacer */}
          </div>
          
        </div>
        
        <div style={{ marginTop: '40px', padding: '16px', backgroundColor: 'rgba(59, 130, 246, 0.05)', borderRadius: '8px', fontSize: '0.875rem' }}>
          <strong>PETROTWIN Integration:</strong> As the reservoir cools, viscosity increases in the wellbore, which directly causes higher mechanical load and potential rod floating on the surface SRP equipment.
        </div>
      </div>
    </div>
  );
}
