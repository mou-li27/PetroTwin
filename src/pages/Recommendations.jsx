import React, { useState } from 'react';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

export default function Recommendations() {
  const [recs, setRecs] = useState([
    { id: 1, title: 'Integrated CSS-SRP Optimization', well: 'BGH-001', cat: 'Integrated', action: 'Increase Steam to 2200t, Reduce SPM to 4.0', impact: '+12% Prod, -15% Energy', conf: '92%', status: 'Pending' },
    { id: 2, title: 'Mitigate Rod Floating', well: 'BGH-002', cat: 'SRP', action: 'Reduce SPM from 5.5 to 4.5', impact: 'Prevent rod failure', conf: '88%', status: 'Approved' },
    { id: 3, title: 'Extend Soak Time', well: 'BGH-003', cat: 'CSS', action: 'Extend soak to 10 days', impact: 'Better heat distribution', conf: '75%', status: 'Rejected' },
  ]);

  const handleAction = (id, newStatus) => {
    setRecs(recs.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  return (
    <div>
      <h2 className="page-title">Recommendations & Engineer Review</h2>
      
      <div className="card" style={{ marginBottom: '24px' }}>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          PETROTWIN acts as a decision-support system. Engineers review AI recommendations and approve them before any field action is taken. No automatic control is executed.
        </p>
      </div>

      <div className="grid grid-cols-1" style={{ gap: '16px', marginBottom: '32px' }}>
        {recs.filter(r => r.status === 'Pending').map(rec => (
          <div key={rec.id} className="card" style={{ borderLeft: '4px solid var(--accent-blue)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 className="card-title" style={{ margin: 0, color: 'var(--text-primary)' }}>{rec.title}</h3>
                  <span className="badge badge-normal">{rec.cat}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{rec.well}</span>
                </div>
                <div style={{ fontSize: '0.875rem', marginBottom: '4px' }}><strong>Suggested Action:</strong> {rec.action}</div>
                <div style={{ fontSize: '0.875rem', marginBottom: '4px' }}><strong>Expected Impact:</strong> {rec.impact}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Confidence: {rec.conf} | Generated: Today, 09:00 AM</div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-success" onClick={() => handleAction(rec.id, 'Approved')}>
                  <CheckCircle2 size={16} /> Approve
                </button>
                <button className="btn btn-danger" onClick={() => handleAction(rec.id, 'Rejected')}>
                  <XCircle size={16} /> Reject
                </button>
                <button className="btn">
                  <Clock size={16} /> Send for Review
                </button>
              </div>
            </div>
          </div>
        ))}
        {recs.filter(r => r.status === 'Pending').length === 0 && (
          <div className="card" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
            No pending recommendations.
          </div>
        )}
      </div>

      <div className="grid grid-cols-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Decision History</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>Recommendation</th>
                <th>Status</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {recs.filter(r => r.status !== 'Pending').map(rec => (
                <tr key={rec.id}>
                  <td>{rec.title} ({rec.well})</td>
                  <td>
                    <span className={`badge ${rec.status === 'Approved' ? 'badge-normal' : 'badge-critical'}`}>
                      {rec.status}
                    </span>
                  </td>
                  <td>Today</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="card-header">
            <h3 className="card-title">Model Recalibration Feedback</h3>
          </div>
          <div style={{ fontSize: '0.875rem', marginBottom: '16px' }}>
            Provide actual field results to improve future PETROTWIN predictions.
          </div>
          <div className="form-group">
            <label className="form-label">Select Past Implementation</label>
            <select className="form-input">
              <option>BGH-001 (Last Cycle)</option>
            </select>
          </div>
          <div className="grid grid-cols-2" style={{ gap: '16px', marginBottom: '16px' }}>
            <div>
              <label className="form-label">Predicted Prod (bbl)</label>
              <input type="text" className="form-input" value="1450" disabled />
            </div>
            <div>
              <label className="form-label">Actual Prod (bbl)</label>
              <input type="text" className="form-input" defaultValue="1420" />
            </div>
          </div>
          <button className="btn btn-primary" style={{ width: '100%' }}>
            Update Feedback & Recalibrate Model
          </button>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '12px' }}>
            Feedback loop demonstration. Does not trigger real ML training.
          </div>
        </div>
      </div>
    </div>
  );
}
