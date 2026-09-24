'use client';

import { useState } from 'react';

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, language: 'fr' })
    });

    const data = await response.json();
    setReply(data.reply || 'Merci pour votre message.');
    setLoading(false);
    setMessage('');
  };

  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-card">
          <h1>AI customer chat</h1>
          <p>Deploy a multilingual assistant that answers questions, captures details, and qualifies leads.</p>

          <div className="dashboard-shell" style={{ marginTop: '24px', padding: '18px' }}>
            <div style={{ display: 'grid', gap: '14px' }}>
              <div style={{ background: '#f8fafc', borderRadius: '14px', padding: '14px 16px' }}>
                <strong>AI:</strong> Bonjour ! Je peux vous aider à réserver un rendez-vous ou demander un devis.
              </div>
              <div style={{ background: '#ecfeff', borderRadius: '14px', padding: '14px 16px', marginLeft: '40px' }}>
                <strong>Customer:</strong> Je veux une consultation pour mon salon.
              </div>
              {reply ? (
                <div style={{ background: '#f8fafc', borderRadius: '14px', padding: '14px 16px' }}>
                  <strong>AI:</strong> {reply}
                </div>
              ) : null}
            </div>

            <div style={{ marginTop: '22px', display: 'grid', gap: '12px' }}>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Écrivez votre message ici..."
              />
              <button type="button" className="btn btn-primary" onClick={sendMessage} disabled={loading}>
                {loading ? 'Sending...' : 'Send message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
