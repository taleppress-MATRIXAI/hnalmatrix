export default function ChatPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-card">
          <h1>AI customer chat</h1>
          <p>Deploy a multilingual assistant that answers questions, captures details, and qualifies leads.</p>

          <div className="dashboard-shell" style={{ marginTop: '24px', padding: '18px' }}>
            <div style={{ display: 'grid', gap: '14px' }}>
              <div style={{ background: '#f8fafc', borderRadius: '14px', padding: '14px 16px' }}>
                <strong>AI:</strong> Bonjour! Je peux vous aider à réserver un rendez-vous ou demander un devis.
              </div>
              <div style={{ background: '#ecfeff', borderRadius: '14px', padding: '14px 16px', marginLeft: '40px' }}>
                <strong>Customer:</strong> Je veux une consultation pour mon salon.
              </div>
              <div style={{ background: '#f8fafc', borderRadius: '14px', padding: '14px 16px' }}>
                <strong>AI:</strong> Très bien. Pouvez-vous me donner votre nom et votre numéro de téléphone ?
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
