import Link from 'next/link';

export default function BusinessPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-card">
          <h1>Business setup</h1>
          <p>Register your company, configure your chatbot, and start capturing leads.</p>

          <div className="form-grid">
            <div>
              <label htmlFor="business-name">Business name</label>
              <input id="business-name" type="text" placeholder="Your business name" />
            </div>
            <div>
              <label htmlFor="industry">Industry</label>
              <select id="industry">
                <option>Restaurant</option>
                <option>Clinic</option>
                <option>Real estate</option>
                <option>Tourism</option>
                <option>Retail</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="website">Website</label>
              <input id="website" type="text" placeholder="https://example.com" />
            </div>
            <div>
              <label htmlFor="lang">Primary language</label>
              <select id="lang">
                <option>Arabic</option>
                <option>French</option>
                <option>English</option>
              </select>
            </div>
            <Link href="/dashboard" className="btn btn-primary">
              Save business profile
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
