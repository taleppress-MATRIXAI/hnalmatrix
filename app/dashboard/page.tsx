const leads = [
  { name: 'Amina B.', source: 'Website', status: 'New', value: '+450 MAD' },
  { name: 'Youssef K.', source: 'WhatsApp', status: 'Qualified', value: '+1500 MAD' },
  { name: 'Hassan I.', source: 'Instagram', status: 'Booked', value: '+800 MAD' },
  { name: 'Sara T.', source: 'Email', status: 'Contacted', value: '+600 MAD' }
];

export default function DashboardPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-card">
          <h1>Business dashboard</h1>
          <p>Overview of your customer conversations, active leads, and sales activity.</p>

          <div className="metrics">
            <div className="metric-box">
              <strong>1,284</strong>
              <span>Messages</span>
            </div>
            <div className="metric-box">
              <strong>214</strong>
              <span>New leads</span>
            </div>
            <div className="metric-box">
              <strong>46</strong>
              <span>Appointments</span>
            </div>
            <div className="metric-box">
              <strong>18</strong>
              <span>Closed sales</span>
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
                  {leads.map((lead) => (
                    <tr key={lead.name} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '12px 8px' }}>{lead.name}</td>
                      <td style={{ padding: '12px 8px' }}>{lead.source}</td>
                      <td style={{ padding: '12px 8px' }}>{lead.status}</td>
                      <td style={{ padding: '12px 8px' }}>{lead.value}</td>
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
