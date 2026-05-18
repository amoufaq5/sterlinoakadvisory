import { useState, useEffect, useCallback, useRef, type FC, type KeyboardEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { openCalendly } from '../../lib/calendly';

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Insights', to: '/insights' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Contact', to: '/contact' },
];

const NavBar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Focus trap inside mobile menu
  useEffect(() => {
    if (!mobileOpen || !mobileMenuRef.current) return;

    const menu = mobileMenuRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    // Focus first element on open
    const firstFocusable = menu.querySelector<HTMLElement>(focusableSelector);
    firstFocusable?.focus();

    const handleTab = (e: globalThis.KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusables = menu.querySelectorAll<HTMLElement>(focusableSelector);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [mobileOpen]);

  // Escape closes mobile menu
  const handleKeyDown = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    },
    [mobileOpen],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const closeMobile = () => setMobileOpen(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'relative font-body text-sm tracking-wide uppercase transition-all duration-300',
      isActive ? 'text-oak' : 'text-dark hover:text-oak',
    ].join(' ');

  const activeIndicator = (
    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-oak rounded-none" />
  );

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { y: '-100%', opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: '-100%', opacity: 0 },
        transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
      };

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 w-full z-50',
          'bg-warm-white/90 backdrop-blur-md',
          'border-b border-border',
          'transition-all duration-300',
          scrolled ? 'py-2' : 'py-4',
        ].join(' ')}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between px-6">
          {/* Logo — left */}
          <Logo size={scrolled ? 'sm' : 'md'} variant="dark" />

          {/* Desktop nav links — center */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={linkClass}>
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && activeIndicator}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA — right */}
          <div className="hidden lg:block">
            <Button variant="primary" size="sm" onClick={openCalendly}>
              Schedule a Call
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10 text-dark hover:text-oak transition-all duration-300"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed inset-0 z-50 flex flex-col bg-warm-white lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            {...motionProps}
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <Logo size="sm" variant="dark" />
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 text-dark hover:text-oak transition-all duration-300"
                onClick={closeMobile}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile nav links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    [
                      'relative font-display text-2xl tracking-wide transition-all duration-300',
                      isActive ? 'text-oak' : 'text-dark hover:text-oak',
                    ].join(' ')
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-oak rounded-none" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              <div className="mt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    closeMobile();
                    openCalendly();
                  }}
                >
                  Schedule a Call
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
