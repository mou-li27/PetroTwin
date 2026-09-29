import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function ScenarioComparison() {
  const [selectedScenario, setSelectedScenario] = useState('A');

  const data = [
    { name: 'Predicted Prod (bbl)', Current: 1200, 'Scenario A': 1450, 'Scenario B': 1550 },
    { name: 'Energy (kWh)', Current: 4350, 'Scenario A': 3700, 'Scenario B': 4800 },
  ];

  return (
    <div>
      <h2 className="page-title">What-If Scenario Comparison</h2>
      
      <div className="card" style={{ marginBottom: '24px' }}>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          Compare current operations with proposed scenarios to balance production, energy cost, and equipment risk.
          <br/><strong>Note:</strong> Simulated values are estimates for demonstration purposes.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '24px', overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Current Operation</th>
              <th style={{ backgroundColor: selectedScenario === 'A' ? 'rgba(59, 130, 246, 0.1)' : 'transparent', cursor: 'pointer' }} onClick={() => setSelectedScenario('A')}>
                Scenario A (Balanced)
              </th>
              <th style={{ backgroundColor: selectedScenario === 'B' ? 'rgba(59, 130, 246, 0.1)' : 'transparent', cursor: 'pointer' }} onClick={() => setSelectedScenario('B')}>
                Scenario B (Aggressive)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Steam Volume</td>
              <td>2,000 tons</td>
              <td>2,200 tons</td>
              <td>2,800 tons</td>
            </tr>
            <tr>
              <td>Soak Time</td>
              <td>7 days</td>
              <td>8 days</td>
              <td>5 days</td>
            </tr>
            <tr>
              <td>SRP SPM</td>
              <td>5.0</td>
              <td>4.0</td>
              <td>6.0</td>
            </tr>
            <tr>
              <td>Predicted Cycle Prod</td>
              <td>1,200 bbl</td>
              <td className="text-green">1,450 bbl</td>
              <td className="text-green">1,550 bbl</td>
            </tr>
            <tr>
              <td>Expected SOR</td>
              <td>3.2</td>
              <td className="text-green">2.8</td>
              <td className="text-amber">3.5</td>
            </tr>
            <tr>
              <td>Energy Consumption</td>
              <td>High</td>
              <td className="text-green">Low</td>
              <td className="text-red">Very High</td>
            </tr>
            <tr>
              <td>Mechanical Risk</td>
              <td className="text-amber">Elevated (Rod Float)</td>
              <td className="text-green">Low</td>
              <td className="text-red">Critical (Pump Unset risk)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Production vs Energy</h3>
          </div>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a' }} />
                <Legend />
                <Bar dataKey="Current" fill="#64748b" />
                <Bar dataKey="Scenario A" fill="#3b82f6" />
                <Bar dataKey="Scenario B" fill="#14b8a6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="card-header">
            <h3 className="card-title">Scenario Details: {selectedScenario === 'A' ? 'Scenario A (Balanced)' : 'Scenario B (Aggressive)'}</h3>
          </div>
          {selectedScenario === 'A' ? (
            <div style={{ fontSize: '0.875rem' }}>
              <p><strong>Focus:</strong> Balancing decent production uplift with equipment safety and energy efficiency.</p>
              <p>By slightly increasing steam and extending soak time, viscosity drops. By lowering SPM to 4.0, we prevent rod floating while maintaining optimal pump fillage.</p>
              <p className="text-green" style={{ marginTop: '16px' }}><strong>PETROTWIN Recommended</strong></p>
            </div>
          ) : (
            <div style={{ fontSize: '0.875rem' }}>
              <p><strong>Focus:</strong> Maximum short-term oil recovery.</p>
              <p>Massive steam injection followed by aggressive pumping (6.0 SPM). This yields higher initial production but comes at a severe energy cost and high risk of rod failures due to rapid viscosity changes.</p>
              <p className="text-red" style={{ marginTop: '16px' }}><strong>Not Recommended - High Equipment Risk</strong></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
