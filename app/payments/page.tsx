export default function PaymentsPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-card">
          <h1>Subscriptions and payments</h1>
          <p>Monetize your platform with subscriptions, paid leads, and sales commissions.</p>

          <div className="pricing-grid" style={{ marginTop: '30px' }}>
            <div className="plan">
              <h3>Starter</h3>
              <div className="price">49<span> MAD</span><small>/mo</small></div>
              <ul>
                <li>AI chatbot</li>
                <li>Basic analytics</li>
                <li>Lead dashboard</li>
              </ul>
            </div>
            <div className="plan featured">
              <h3>Professional</h3>
              <div className="price">149<span> MAD</span><small>/mo</small></div>
              <ul>
                <li>Everything in Starter</li>
                <li>Lead scoring</li>
                <li>Sales automation</li>
              </ul>
            </div>
            <div className="plan">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Custom integrations</li>
                <li>Dedicated support</li>
                <li>Advanced reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
