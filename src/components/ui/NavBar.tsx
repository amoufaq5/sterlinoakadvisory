import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type FC,
  type ReactNode,
} from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { openCalendly } from '../../lib/calendly';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ServiceLink {
  name: string;
  slug: string;
  brief: string;
}

const serviceLinks: ServiceLink[] = [
  { name: 'Business Advisory', slug: 'business-advisory', brief: 'Strategy, operations, and governance' },
  { name: 'Financial Advisory', slug: 'financial-advisory', brief: 'Capital structure and valuation' },
  { name: 'Mergers & Acquisitions', slug: 'mergers-acquisitions', brief: 'Buy-side and sell-side M&A' },
  { name: 'Wealth & Estate Planning', slug: 'wealth-planning', brief: 'Succession and tax strategy' },
  { name: 'Risk & Compliance', slug: 'risk-compliance', brief: 'Regulatory and operational risk' },
  { name: 'Market Entry & Expansion', slug: 'market-entry', brief: 'MENA go-to-market strategy' },
  { name: 'ESG & Sustainability', slug: 'esg-advisory', brief: 'Carbon, climate, and reporting' },
  { name: 'Debt Advisory & Restructuring', slug: 'debt-restructuring', brief: 'Creditor negotiation and turnaround' },
  { name: 'Capital Raising & IPO', slug: 'capital-raising', brief: 'IPO readiness and placement' },
  { name: 'Digital Transformation', slug: 'digital-transformation', brief: 'AI, automation, and procurement' },
];

const industryNames: string[] = [
  'Healthcare & Pharmaceuticals',
  'Energy & Utilities',
  'Financial Services',
  'Real Estate & Construction',
  'Technology & Software',
  'Telecommunications',
  'Manufacturing & Industrials',
  'Government & Public Sector',
  'Infrastructure & Transport',
  'FMCG & Retail',
  'Education',
  'Hospitality & Tourism',
  'Private Equity',
  'Family Offices',
];

interface InsightCard {
  title: string;
  category: string;
  date: string;
  slug: string;
}

const recentInsights: InsightCard[] = [
  {
    title: 'ESG in MENA',
    category: 'ESG',
    date: 'April 2026',
    slug: 'esg-advisory-mena-imperative',
  },
  {
    title: 'Debt Restructuring in Egypt',
    category: 'Restructuring',
    date: 'March 2026',
    slug: 'corporate-debt-restructuring-egypt',
  },
  {
    title: 'IPO Readiness',
    category: 'Capital Markets',
    date: 'March 2026',
    slug: 'ipo-readiness-mena-2026',
  },
];

interface PopularSearch {
  label: string;
  to: string;
}

const popularSearches: PopularSearch[] = [
  { label: 'M&A Advisory', to: '/services/mergers-acquisitions' },
  { label: 'ESG', to: '/services/esg-advisory' },
  { label: 'IPO Readiness', to: '/insights/ipo-readiness-mena-2026' },
  { label: 'Wealth Planning', to: '/services/wealth-planning' },
  { label: 'Market Entry', to: '/services/market-entry' },
];

type DropdownKey = 'services' | 'industries' | 'insights';

interface NavItemDef {
  label: string;
  to?: string;
  dropdown?: DropdownKey;
}

const navItems: NavItemDef[] = [
  { label: 'About', to: '/about' },
  { label: 'Services', dropdown: 'services' },
  { label: 'Industries', dropdown: 'industries' },
  { label: 'Insights', dropdown: 'insights' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Contact', to: '/contact' },
];

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const EASE_OUT = 'easeOut' as const;
const EASE_BEZIER = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const mobileOverlayVariants = {
  hidden: { y: '-100%' as const, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: '-100%' as const, opacity: 0 },
};

const searchOverlayVariants = {
  hidden: { y: '-100%' as const, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: '-100%' as const, opacity: 0 },
};

/* ------------------------------------------------------------------ */
/*  Mega menu panels                                                   */
/* ------------------------------------------------------------------ */

const ServicesMega: FC<{ onNavigate: () => void }> = ({ onNavigate }) => (
  <div className="flex gap-10">
    {/* Left — service grid */}
    <div className="flex-[2] grid grid-cols-2 gap-x-8 gap-y-4 py-2">
      {serviceLinks.map((s) => (
        <Link
          key={s.slug}
          to={`/services/${s.slug}`}
          onClick={onNavigate}
          className="group flex flex-col rounded-md px-3 py-2.5 -mx-3 border-l-2 border-transparent hover:border-oak transition-all duration-200"
        >
          <span className="font-body text-sm text-dark group-hover:text-oak transition-colors duration-200">
            {s.name}
          </span>
          <span className="font-body text-xs text-light-gray mt-0.5">{s.brief}</span>
        </Link>
      ))}
    </div>

    {/* Right — featured panel */}
    <div className="flex-1 rounded-lg bg-dark p-6 flex flex-col justify-between min-h-[280px]">
      <div>
        <span className="inline-block font-body text-[10px] uppercase tracking-[0.2em] text-oak-light mb-3">
          Featured
        </span>
        <h4 className="font-display text-xl text-cream leading-snug mb-3">
          Our Approach to Advisory
        </h4>
        <p className="font-body text-sm text-light-gray leading-relaxed">
          Senior-led, conflict-free counsel across 10 disciplines.
        </p>
      </div>
      <Link
        to="/services"
        onClick={onNavigate}
        className="inline-flex items-center gap-1.5 font-body text-sm text-oak-light hover:text-cream transition-colors duration-200 mt-4"
      >
        View All Services <ArrowRight size={14} />
      </Link>
    </div>
  </div>
);

const IndustriesMega: FC<{ onNavigate: () => void }> = ({ onNavigate }) => (
  <div className="flex gap-10">
    {/* Left — industry grid */}
    <div className="flex-[2] grid grid-cols-3 gap-x-8 gap-y-3 py-2">
      {industryNames.map((name) => (
        <Link
          key={name}
          to="/industries"
          onClick={onNavigate}
          className="font-body text-sm text-dark hover:text-oak transition-colors duration-200 py-1.5"
        >
          {name}
        </Link>
      ))}
    </div>

    {/* Right — featured panel */}
    <div className="flex-1 rounded-lg bg-dark p-6 flex flex-col justify-between min-h-[240px]">
      <div>
        <span className="inline-block font-body text-[10px] uppercase tracking-[0.2em] text-oak-light mb-3">
          Industries
        </span>
        <h4 className="font-display text-xl text-cream leading-snug mb-3">
          14 sectors. One standard of excellence.
        </h4>
        <p className="font-body text-sm text-light-gray leading-relaxed">
          Deep domain expertise across every major industry vertical in MENA and beyond.
        </p>
      </div>
      <Link
        to="/#industries"
        onClick={onNavigate}
        className="inline-flex items-center gap-1.5 font-body text-sm text-oak-light hover:text-cream transition-colors duration-200 mt-4"
      >
        Explore Industries <ArrowRight size={14} />
      </Link>
    </div>
  </div>
);

const InsightsMega: FC<{ onNavigate: () => void }> = ({ onNavigate }) => (
  <div className="flex gap-10">
    {/* Left — insight cards */}
    <div className="flex-[2] grid grid-cols-3 gap-6 py-2">
      {recentInsights.map((insight) => (
        <Link
          key={insight.slug}
          to={`/insights/${insight.slug}`}
          onClick={onNavigate}
          className="group flex flex-col rounded-lg border border-border p-4 hover:border-oak/40 transition-all duration-200"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.15em] text-oak mb-2">
            {insight.category}
          </span>
          <span className="font-body text-sm font-medium text-dark group-hover:text-oak transition-colors duration-200 mb-2 leading-snug">
            {insight.title}
          </span>
          <span className="font-body text-xs text-light-gray mt-auto">
            {insight.date}
          </span>
        </Link>
      ))}
    </div>

    {/* Right — featured panel */}
    <div className="flex-1 rounded-lg bg-dark p-6 flex flex-col justify-between min-h-[200px]">
      <div>
        <span className="inline-block font-body text-[10px] uppercase tracking-[0.2em] text-oak-light mb-3">
          Thought Leadership
        </span>
        <p className="font-body text-sm text-light-gray leading-relaxed">
          Expert perspectives on markets, regulation, and strategy across MENA and beyond.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <Link
          to="/insights"
          onClick={onNavigate}
          className="inline-flex items-center gap-1.5 font-body text-sm text-oak-light hover:text-cream transition-colors duration-200"
        >
          View All Insights <ArrowRight size={14} />
        </Link>
        <Link
          to="/resources"
          onClick={onNavigate}
          className="inline-flex items-center gap-1.5 font-body text-sm text-oak-light hover:text-cream transition-colors duration-200"
        >
          Resources &amp; Downloads <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Mobile expandable section                                          */
/* ------------------------------------------------------------------ */

const MobileSection: FC<{
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}> = ({ title, expanded, onToggle, children }) => (
  <div className="border-b border-border">
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between py-4 px-2 font-display text-xl text-dark"
      aria-expanded={expanded}
    >
      {title}
      <ChevronDown
        size={18}
        className={`text-light-gray transition-transform duration-200 ${
          expanded ? 'rotate-180' : ''
        }`}
      />
    </button>
    <AnimatePresence>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="overflow-hidden"
        >
          <div className="pb-4 px-2 flex flex-col gap-2">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/* ------------------------------------------------------------------ */
/*  NavBar                                                             */
/* ------------------------------------------------------------------ */

const NavBar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey | null>(null);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const location = useLocation();

  // Close everything on route change
  useEffect(() => {
    setActiveDropdown(null);
    setSearchOpen(false);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

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

  // Lock body scroll when mobile menu or search is open
  useEffect(() => {
    if (mobileOpen || searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, searchOpen]);

  // Focus search input when search opens
  useEffect(() => {
    if (searchOpen) {
      // Small delay to let animation start
      const t = setTimeout(() => searchInputRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  // Focus trap inside mobile menu
  useEffect(() => {
    if (!mobileOpen || !mobileMenuRef.current) return;

    const menu = mobileMenuRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

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

  // Global escape handler
  const handleKeyDown = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (searchOpen) {
        setSearchOpen(false);
        return;
      }
      if (activeDropdown) {
        setActiveDropdown(null);
        return;
      }
      if (mobileOpen) {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    },
    [searchOpen, activeDropdown, mobileOpen],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Cleanup hover timeouts
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  /* ---------- Hover handlers for dropdown ---------- */

  const handleMouseEnter = (key: DropdownKey) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (activeDropdown === key) return;
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(key);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  const handleDropdownLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  /* ---------- Helpers ---------- */

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const closeDropdown = () => setActiveDropdown(null);

  const toggleMobileSection = (key: DropdownKey) => {
    setMobileExpanded((prev) => (prev === key ? null : key));
  };

  const dropdownTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: EASE_OUT };

  const mobileMotionProps = prefersReducedMotion
    ? {}
    : {
        initial: 'hidden' as const,
        animate: 'visible' as const,
        exit: 'exit' as const,
        variants: mobileOverlayVariants,
        transition: { duration: 0.35, ease: EASE_BEZIER },
      };

  /* ---------- Dropdown content selector ---------- */

  const renderDropdown = (key: DropdownKey) => {
    switch (key) {
      case 'services':
        return <ServicesMega onNavigate={closeDropdown} />;
      case 'industries':
        return <IndustriesMega onNavigate={closeDropdown} />;
      case 'insights':
        return <InsightsMega onNavigate={closeDropdown} />;
    }
  };

  /* ---------- Active-link check for items with dropdowns ---------- */

  const isDropdownActive = (key: DropdownKey): boolean => {
    const path = location.pathname;
    switch (key) {
      case 'services':
        return path.startsWith('/services');
      case 'industries':
        return path.startsWith('/industries');
      case 'insights':
        return path.startsWith('/insights');
      default:
        return false;
    }
  };

  /* ================================================================ */
  /*  Render                                                           */
  /* ================================================================ */

  return (
    <>
      {/* ---- Header ---- */}
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
          {/* Logo */}
          <Link to="/" aria-label="Sterling Oak Advisory home">
            <Logo size={scrolled ? 'sm' : 'md'} variant="dark" />
          </Link>

          {/* ---- Desktop nav ---- */}
          <ul className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              // Simple link (no dropdown)
              if (item.to) {
                return (
                  <li key={item.label}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        [
                          'relative font-body text-sm tracking-wide uppercase transition-all duration-300 py-2',
                          isActive ? 'text-oak' : 'text-dark hover:text-oak',
                        ].join(' ')
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {item.label}
                          {isActive && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-oak" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                );
              }

              // Dropdown item
              const key = item.dropdown!;
              const isActive = isDropdownActive(key);
              const isOpen = activeDropdown === key;

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={[
                      'relative flex items-center gap-1 font-body text-sm tracking-wide uppercase transition-all duration-300 py-2',
                      isActive || isOpen ? 'text-oak' : 'text-dark hover:text-oak',
                    ].join(' ')}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() =>
                      setActiveDropdown((prev) => (prev === key ? null : key))
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                    {isActive && !isOpen && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-oak" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* ---- Right side: search + CTA ---- */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              className="flex items-center justify-center w-9 h-9 rounded-full text-dark hover:text-oak hover:bg-cream transition-all duration-200"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
            >
              <Search size={18} />
            </button>
            <Button variant="primary" size="sm" onClick={openCalendly}>
              Schedule a Call
            </Button>
          </div>

          {/* ---- Mobile hamburger ---- */}
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

        {/* ---- Desktop mega menu dropdowns ---- */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              key={activeDropdown}
              variants={prefersReducedMotion ? undefined : dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={dropdownTransition}
              className="absolute left-0 w-full bg-warm-white border-t-2 border-oak shadow-lg z-40"
              role="menu"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="mx-auto max-w-content px-6 py-8">
                {renderDropdown(activeDropdown)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ---- Search overlay ---- */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            variants={prefersReducedMotion ? undefined : searchOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.3, ease: EASE_BEZIER }
            }
            className="fixed inset-0 z-[60] bg-warm-white flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
          >
            <div className="mx-auto w-full max-w-content px-6">
              {/* Close bar */}
              <div className="flex items-center justify-between py-6">
                <Logo size="sm" variant="dark" />
                <button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 text-dark hover:text-oak transition-all duration-200"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Search input */}
              <div className="border-b-2 border-oak/30 pb-4 mt-12">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search insights, services, case studies..."
                  className="w-full bg-transparent font-display text-2xl md:text-4xl text-dark placeholder:text-light-gray outline-none"
                  aria-label="Search"
                />
              </div>

              {/* Popular searches */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="font-body text-xs uppercase tracking-wider text-light-gray mr-1">
                  Popular:
                </span>
                {popularSearches.map((ps) => (
                  <Link
                    key={ps.label}
                    to={ps.to}
                    onClick={() => setSearchOpen(false)}
                    className="font-body text-sm text-dark hover:text-oak border border-border rounded-full px-4 py-1.5 transition-all duration-200 hover:border-oak/40"
                  >
                    {ps.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- Mobile menu overlay ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed inset-0 z-50 flex flex-col bg-warm-white lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            {...mobileMotionProps}
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

            {/* Mobile search */}
            <div className="px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3 bg-cream rounded-lg px-4 py-3">
                <Search size={18} className="text-light-gray shrink-0" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent font-body text-sm text-dark placeholder:text-light-gray outline-none"
                  aria-label="Search"
                />
              </div>
            </div>

            {/* Mobile nav items */}
            <div className="flex-1 px-6 py-2">
              {/* About — simple link */}
              <div className="border-b border-border">
                <NavLink
                  to="/about"
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `block py-4 px-2 font-display text-xl transition-colors duration-200 ${
                      isActive ? 'text-oak' : 'text-dark'
                    }`
                  }
                >
                  About
                </NavLink>
              </div>

              {/* Services — expandable */}
              <MobileSection
                title="Services"
                expanded={mobileExpanded === 'services'}
                onToggle={() => toggleMobileSection('services')}
              >
                {serviceLinks.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={closeMobile}
                    className="font-body text-sm text-mid hover:text-oak transition-colors duration-200 py-1"
                  >
                    {s.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={closeMobile}
                  className="inline-flex items-center gap-1 font-body text-sm text-oak mt-2"
                >
                  View All Services <ArrowRight size={14} />
                </Link>
              </MobileSection>

              {/* Industries — expandable */}
              <MobileSection
                title="Industries"
                expanded={mobileExpanded === 'industries'}
                onToggle={() => toggleMobileSection('industries')}
              >
                {industryNames.map((name) => (
                  <Link
                    key={name}
                    to="/industries"
                    onClick={closeMobile}
                    className="font-body text-sm text-mid hover:text-oak transition-colors duration-200 py-1"
                  >
                    {name}
                  </Link>
                ))}
              </MobileSection>

              {/* Insights — expandable */}
              <MobileSection
                title="Insights"
                expanded={mobileExpanded === 'insights'}
                onToggle={() => toggleMobileSection('insights')}
              >
                {recentInsights.map((insight) => (
                  <Link
                    key={insight.slug}
                    to={`/insights/${insight.slug}`}
                    onClick={closeMobile}
                    className="flex flex-col py-1"
                  >
                    <span className="font-body text-[10px] uppercase tracking-wider text-oak">
                      {insight.category}
                    </span>
                    <span className="font-body text-sm text-mid hover:text-oak transition-colors duration-200">
                      {insight.title}
                    </span>
                  </Link>
                ))}
                <Link
                  to="/insights"
                  onClick={closeMobile}
                  className="inline-flex items-center gap-1 font-body text-sm text-oak mt-2"
                >
                  View All Insights <ArrowRight size={14} />
                </Link>
              </MobileSection>

              {/* Case Studies — simple link */}
              <div className="border-b border-border">
                <NavLink
                  to="/case-studies"
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `block py-4 px-2 font-display text-xl transition-colors duration-200 ${
                      isActive ? 'text-oak' : 'text-dark'
                    }`
                  }
                >
                  Case Studies
                </NavLink>
              </div>

              {/* Contact — simple link */}
              <div className="border-b border-border">
                <NavLink
                  to="/contact"
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `block py-4 px-2 font-display text-xl transition-colors duration-200 ${
                      isActive ? 'text-oak' : 'text-dark'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="px-6 py-6 border-t border-border">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  closeMobile();
                  openCalendly();
                }}
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
