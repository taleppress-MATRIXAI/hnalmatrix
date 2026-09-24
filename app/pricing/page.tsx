export default function PricingPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="section-header">
          <h1>Pricing</h1>
          <p>Flexible plans for businesses of every size.</p>
        </div>

        <div className="pricing-grid">
          <div className="plan">
            <h3>Starter</h3>
            <div className="price">49<span> MAD</span><small>/mo</small></div>
            <ul>
              <li>AI chatbot</li>
              <li>Lead collection</li>
              <li>Basic dashboard</li>
            </ul>
          </div>

          <div className="plan featured">
            <h3>Professional</h3>
            <div className="price">149<span> MAD</span><small>/mo</small></div>
            <ul>
              <li>Everything in Starter</li>
              <li>Sales automation</li>
              <li>Multi-channel inbox</li>
            </ul>
          </div>

          <div className="plan">
            <h3>Enterprise</h3>
            <div className="price">Custom</div>
            <ul>
              <li>Custom workflows</li>
              <li>Advanced reporting</li>
              <li>Priority support</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
