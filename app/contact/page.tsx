export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-card">
          <h1>Contact us</h1>
          <p>Talk with our team about your business and how hnalmatrix can generate more sales.</p>

          <div className="form-grid">
            <div>
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="company">Business name</label>
              <input id="company" type="text" placeholder="Business name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell us what your business needs." />
            </div>
            <button className="btn btn-primary" type="button">
              Send message
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
