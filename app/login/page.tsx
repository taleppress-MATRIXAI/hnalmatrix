'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter your email and password');
      return;
    }

    alert('Demo login successful. This is a SaaS starter build for hnalmatrix.');
  };

  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-card">
          <h1>Welcome back</h1>
          <p>Access your hnalmatrix workspace and manage customer conversations, leads, and bookings.</p>

          <div className="form-grid">
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@business.com"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
              />
            </div>
            <button className="btn btn-primary" type="button" onClick={handleLogin}>
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
