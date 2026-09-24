export default function LoginPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-card">
          <h1>Welcome back</h1>
          <p>Access your hnalmatrix workspace and manage customer conversations, leads, and bookings.</p>

          <div className="form-grid">
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@business.com" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="••••••••" />
            </div>
            <button className="btn btn-primary" type="button">
              Login
            </button>
            <button className="btn btn-ghost" type="button" style={{ border: '1px solid #cbd5e1' }}>
              Create a free account
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
