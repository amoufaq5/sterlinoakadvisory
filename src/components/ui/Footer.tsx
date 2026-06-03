import { useState, type FC, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const LinkedinIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const serviceLinks = [
  { label: 'Business Advisory', slug: 'business-advisory' },
  { label: 'Financial Advisory', slug: 'financial-advisory' },
  { label: 'M&A', slug: 'mergers-acquisitions' },
  { label: 'Wealth Planning', slug: 'wealth-planning' },
  { label: 'Risk & Compliance', slug: 'risk-compliance' },
  { label: 'Market Entry', slug: 'market-entry' },
];

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Industries', to: '/industries' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Insights', to: '/insights' },
  { label: 'Newsroom', to: '/newsroom' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
  { label: 'Accreditations', to: '/accreditations' },
];

const columnHeading = 'font-body uppercase tracking-widest text-xs text-oak mb-6';
const linkClass = 'text-light-gray hover:text-oak-light transition-colors';

const Footer: FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-content px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 — Brand + Contact */}
          <div className="space-y-6">
            <Logo variant="light" size="sm" />
            <p className="font-display italic text-light-gray text-sm leading-relaxed">
              Where Strategy Meets Enduring Prosperity
            </p>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:hello@sterling-oakadvisory.com"
                className={`flex items-center gap-2 ${linkClass}`}
              >
                <Mail className="w-4 h-4 shrink-0" />
                hello@sterling-oakadvisory.com
              </a>
              <a
                href="tel:+201000222724"
                className={`flex items-center gap-2 ${linkClass}`}
              >
                <Phone className="w-4 h-4 shrink-0" />
                +20 (100) 022-2724
              </a>
              <p className={`flex items-center gap-2 text-light-gray`}>
                <MapPin className="w-4 h-4 shrink-0" />
                Cairo (HQ) · London · Dubai · Riyadh (Soon)
              </p>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className={columnHeading}>Services</h4>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((item) => (
                <li key={item.slug}>
                  <Link to={`/services/${item.slug}`} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className={columnHeading}>Company</h4>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div>
            <h4 className={columnHeading}>Connect</h4>

            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Your email"
                  className="w-full bg-transparent border border-border px-3 py-2 text-sm text-warm-white placeholder:text-light-gray focus:outline-none focus:border-oak-light transition-colors"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="border border-l-0 border-border px-3 py-2 text-light-gray hover:text-oak-light hover:border-oak-light transition-colors disabled:opacity-50"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className={`w-4 h-4 ${status === 'loading' ? 'animate-pulse' : ''}`} />
                </button>
              </div>

              {status === 'success' && (
                <p className="mt-2 text-xs text-oak">
                  You're subscribed. Thank you.
                </p>
              )}
              {status === 'error' && errorMsg && (
                <p className="mt-2 text-xs text-red-400">
                  {errorMsg}
                </p>
              )}
            </form>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm ${linkClass}`}
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-light-gray">
          <p>&copy; 2026 Sterling Oak Advisory &mdash; Cairo, Egypt</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className={linkClass}>
              Privacy Policy
            </Link>
            <Link to="/terms" className={linkClass}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
