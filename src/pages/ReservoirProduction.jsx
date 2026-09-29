import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ComposedChart, Bar } from 'recharts';

export default function ReservoirProduction() {
  const trendData = [
    { day: 1, temp: 95, visc: 500, prod: 60 },
    { day: 10, temp: 85, visc: 650, prod: 52 },
    { day: 20, temp: 75, visc: 900, prod: 45 },
    { day: 30, temp: 68, visc: 1200, prod: 38 },
    { day: 40, temp: 62, visc: 1450, prod: 35 },
    { day: 50, temp: 58, visc: 1800, prod: 30 },
  ];

  return (
    <div>
      <h2 className="page-title">Reservoir & Production Prediction</h2>
      
      <div className="card" style={{ marginBottom: '24px', backgroundColor: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
        <p style={{ margin: 0, fontSize: '0.875rem' }}>
          <strong>PETROTWIN Insight:</strong> As the reservoir cools after steam injection, crude viscosity may increase, affecting oil mobility and pumping performance. The charts below display the predicted trends based on current operating parameters.
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Temperature & Viscosity Trend</h3>
          </div>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" label={{ value: 'Days Since Soak', position: 'insideBottomRight', offset: -5, fill: '#64748b', fontSize: 12 }} />
                <YAxis yAxisId="left" stroke="#ef4444" label={{ value: 'Temp (°C)', angle: -90, position: 'insideLeft', fill: '#ef4444', fontSize: 12 }} />
                <YAxis yAxisId="right" orientation="right" stroke="#d97706" label={{ value: 'Viscosity (cP)', angle: 90, position: 'insideRight', fill: '#d97706', fontSize: 12 }} />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a' }} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="temp" name="Temperature (°C)" stroke="#ef4444" strokeWidth={2} dot={false} />
                <Line yAxisId="right" type="monotone" dataKey="visc" name="Viscosity (cP)" stroke="#d97706" strokeWidth={2} dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Production Forecast vs Actual</h3>
          </div>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a' }} />
                <Legend />
                <Line type="monotone" dataKey="prod" name="Predicted Prod (bbl/d)" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" />
                {/* Simulated actuals dropping off */}
                <Line type="monotone" dataKey="prod" name="Actual Prod (bbl/d)" stroke="#10b981" strokeWidth={2} data={trendData.slice(0, 5).map(d => ({...d, prod: d.prod - Math.random() * 2}))} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '8px' }}>
            *Note: Visually clear that this is a predicted trend, not live reservoir measurement.
          </div>
        </div>
      </div>
    </div>
  );
}
