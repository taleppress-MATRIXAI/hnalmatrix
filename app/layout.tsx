import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'hnalmatrix | AI customer acquisition for Moroccan businesses',
  description:
    'A multilingual AI platform that helps businesses collect customer messages, leads, and booking requests while converting sales faster.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <div className="container nav">
            <Link href="/" className="brand">
              hnalmatrix
            </Link>
            <nav className="nav-links" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/chat">Chat</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <div className="nav-actions">
              <Link href="/login" className="btn btn-ghost">
                Login
              </Link>
              <Link href="/login" className="btn btn-primary">
                Start free
              </Link>
            </div>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <div className="brand brand-footer">hnalmatrix</div>
              <p>
                AI-powered customer capture, leads, and sales conversion for businesses across Morocco.
              </p>
            </div>
            <div>
              <h4>Platform</h4>
              <ul>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/chat">Chat widget</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h4>Languages</h4>
              <ul>
                <li>Arabic</li>
                <li>French</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
