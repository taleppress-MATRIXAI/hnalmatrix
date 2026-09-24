import Link from 'next/link';

const features = [
  {
    icon: '💬',
    title: 'AI customer chat',
    text: 'Capture conversations from your website, WhatsApp, email, and social channels in one intelligent inbox.'
  },
  {
    icon: '📈',
    title: 'Lead qualification',
    text: 'Identify hot prospects using AI scoring, conversation context, and business-specific criteria.'
  },
  {
    icon: '📅',
    title: 'Booking automation',
    text: 'Collect bookings, appointments, and service requests without manual follow-up or missed opportunities.'
  }
];

const industries = ['Restaurants', 'Clinics', 'Real estate', 'Tourism', 'Retail shops', 'All businesses'];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="pill">AI lead capture for Moroccan businesses</p>
            <h1>Turn conversations into sales with hnalmatrix</h1>
            <p>
              hnalmatrix helps businesses collect customer messages, qualify leads, automate follow-up,
              and convert buyers faster in Arabic, French, and English.
            </p>
            <div className="hero-actions">
              <Link href="/login" className="btn btn-primary">
                Start free
              </Link>
              <Link href="/pricing" className="btn btn-ghost">
                View pricing
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>+42%</strong>
                <span>lead conversion</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>AI coverage</span>
              </div>
              <div className="stat">
                <strong>3 langs</strong>
                <span>Arabic, French, English</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="dashboard-mini">
              <div className="dashboard-top">
                <span>Sales dashboard</span>
                <span>Live</span>
              </div>
              <div className="mini-body">
                <div className="mini-card">
                  <strong>1,284 leads</strong>
                  <div>Qualified this month</div>
                </div>
                <div className="mini-list">
                  <div className="mini-item">
                    <span>New inquiries</span>
                    <strong>94</strong>
                  </div>
                  <div className="mini-item">
                    <span>Bookings</span>
                    <strong>31</strong>
                  </div>
                  <div className="mini-item">
                    <span>Sales closed</span>
                    <strong>18</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Built for businesses that want more qualified leads</h2>
            <p>
              hnalmatrix brings together customer capture, AI replies, follow-ups, lead scoring, and
              revenue tracking in one business platform.
            </p>
          </div>

          <div className="grid-3">
            {features.map((feature) => (
              <div key={feature.title} className="card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="pill-row">
            {industries.map((industry) => (
              <span key={industry} className="pill">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-banner">
          <div className="two-col">
            <div>
              <h2>From website visitors to paying customers</h2>
              <p>
                A business receives a customer inquiry, the AI replies instantly, collects the customer info,
                qualifies the request, and sends the best opportunities to the sales team or booking flow.
              </p>
              <div className="row">
                <Link href="/dashboard" className="btn btn-primary">
                  See dashboard
                </Link>
              </div>
            </div>
            <div className="dashboard-shell">
              <h3>Lead pipeline</h3>
              <div className="metrics">
                <div className="metric-box">
                  <strong>214</strong>
                  <span>New</span>
                </div>
                <div className="metric-box">
                  <strong>91</strong>
                  <span>Qualified</span>
                </div>
                <div className="metric-box">
                  <strong>46</strong>
                  <span>Booked</span>
                </div>
                <div className="metric-box">
                  <strong>27</strong>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Simple pricing built for growth</h2>
            <p>Start small, then scale as your business captures more opportunities.</p>
          </div>

          <div className="pricing-grid">
            <div className="plan">
              <h3>Starter</h3>
              <div className="price">49<span> MAD</span><small>/mo</small></div>
              <ul>
                <li>AI chatbot</li>
                <li>Lead capture</li>
                <li>Basic dashboard</li>
                <li>1 business profile</li>
              </ul>
              <Link href="/login" className="btn btn-ghost" style={{ border: '1px solid #cbd5e1' }}>
                Choose Starter
              </Link>
            </div>

            <div className="plan featured">
              <h3>Professional</h3>
              <div className="price">149<span> MAD</span><small>/mo</small></div>
              <ul>
                <li>Everything in Starter</li>
                <li>Advanced automations</li>
                <li>Multi-channel inbox</li>
                <li>Booking management</li>
              </ul>
              <Link href="/login" className="btn btn-primary">
                Choose Pro
              </Link>
            </div>

            <div className="plan">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Multi-branch support</li>
                <li>Custom workflows</li>
                <li>Dedicated onboarding</li>
                <li>Advanced support</li>
              </ul>
              <Link href="/contact" className="btn btn-ghost" style={{ border: '1px solid #cbd5e1' }}>
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
