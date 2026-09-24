'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [summary, setSummary] = useState<any>(null);

  const loadSummary = async () => {
    const response = await fetch('/api/dashboard');
    const data = await response.json();
    setSummary(data);
  };

  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-card">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
            <h1>Business dashboard</h1>
            <p>Overview of your customer conversations, active leads, and sales activity.</p>
          </div>

          <div className="row" style={{ marginBottom: '28px' }}>
            <button className="btn btn-primary" type="button" onClick={loadSummary}>
              Refresh analytics
            </button>
          </div>

          <div className="metrics">
            <div className="metric-box">
              <strong>{summary?.metrics?.totalLeads ?? 214}</strong>
              <span>Messages</span>
            </div>
            <div className="metric-box">
              <strong>{summary?.metrics?.qualifiedLeads ?? 91}</strong>
              <span>Qualified</span>
            </div>
            <div className="metric-box">
              <strong>{summary?.metrics?.bookings ?? 46}</strong>
              <span>Bookings</span>
            </div>
            <div className="metric-box">
              <strong>{summary?.metrics?.conversionRate ?? 42}%</strong>
              <span>Conversion</span>
            </div>
          </div>

          <div style={{ marginTop: '28px' }}>
            <h2>Recent leads</h2>
            <div className="dashboard-shell" style={{ padding: '18px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>
                    <th style={{ padding: '12px 8px' }}>Customer</th>
                    <th style={{ padding: '12px 8px' }}>Source</th>
                    <th style={{ padding: '12px 8px' }}>Status</th>
                    <th style={{ padding: '12px 8px' }}>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {(summary?.leads ?? [
                    { name: 'Amina B.', source: 'Website', status: 'New', value: 450 },
                    { name: 'Youssef K.', source: 'WhatsApp', status: 'Qualified', value: 1500 },
                    { name: 'Hassan I.', source: 'Instagram', status: 'Booked', value: 800 },
                    { name: 'Sara T.', source: 'Email', status: 'Contacted', value: 600 }
                  ]).map((lead: any) => (
                    <tr key={lead.name + lead.source} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '12px 8px' }}>{lead.name}</td>
                      <td style={{ padding: '12px 8px' }}>{lead.source}</td>
                      <td style={{ padding: '12px 8px' }}>{lead.status}</td>
                      <td style={{ padding: '12px 8px' }}>{lead.value} MAD</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
