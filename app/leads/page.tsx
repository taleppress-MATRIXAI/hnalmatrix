const leadRows = [
  { name: 'Amina B.', source: 'Website', status: 'New', value: 450 },
  { name: 'Youssef K.', source: 'WhatsApp', status: 'Qualified', value: 1500 },
  { name: 'Hassan I.', source: 'Instagram', status: 'Booked', value: 800 },
  { name: 'Sara T.', source: 'Email', status: 'Contacted', value: 600 }
];

export default function LeadsPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-card">
          <h1>Leads pipeline</h1>
          <p>Track every inquiry, qualify leads, and know which ones are ready for conversion.</p>

          <div className="dashboard-shell" style={{ marginTop: '20px', padding: '18px' }}>
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
                {leadRows.map((lead) => (
                  <tr key={lead.name} style={{ borderBottom: '1px solid #f1f5f9' }}>
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
    </main>
  );
}
