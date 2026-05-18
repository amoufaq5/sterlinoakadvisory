import { useState, useEffect, useRef, useCallback, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ArrowRight, Search } from 'lucide-react';

/* ───────────────────────── types ───────────────────────── */

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  label: string;
  path: string;
  category: string;
}

/* ───────────────────────── data ───────────────────────── */

const searchableItems: SearchItem[] = [
  // Services
  { label: 'M&A Advisory', path: '/services/mergers-acquisitions', category: 'Services' },
  { label: 'Financial Advisory', path: '/services/financial-advisory', category: 'Services' },
  { label: 'ESG & Sustainability', path: '/services/esg-advisory', category: 'Services' },
  { label: 'Capital Raising & IPO', path: '/services/capital-raising', category: 'Services' },
  { label: 'Wealth Planning', path: '/services/wealth-planning', category: 'Services' },

  // Insights
  { label: 'ESG in MENA', path: '/insights/esg-advisory-mena-imperative', category: 'Insights' },
  {
    label: 'Debt Restructuring in Egypt',
    path: '/insights/corporate-debt-restructuring-egypt',
    category: 'Insights',
  },
  { label: 'IPO Readiness', path: '/insights/ipo-readiness-mena-2026', category: 'Insights' },

  // Pages
  { label: 'About Us', path: '/about', category: 'Pages' },
  { label: 'Case Studies', path: '/case-studies', category: 'Pages' },
  { label: 'Careers', path: '/careers', category: 'Pages' },
  { label: 'Contact', path: '/contact', category: 'Pages' },
  { label: 'Industries', path: '/industries', category: 'Pages' },
];

const categories = ['Services', 'Insights', 'Pages'] as const;

/* ───────────────────────── component ───────────────────────── */

const SearchOverlay: FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const prefersReduced = useReducedMotion();

  /* Lock body scroll */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* Auto-focus input when opened */
  useEffect(() => {
    if (isOpen) {
      // Small delay so the animation can start before focusing
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  /* Reset query on close */
  useEffect(() => {
    if (!isOpen) setQuery('');
  }, [isOpen]);

  /* Escape key closes overlay */
  const handleKeyDown = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  /* Navigate to item */
  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  /* Filter logic */
  const trimmed = query.trim().toLowerCase();
  const filtered = trimmed
    ? searchableItems.filter((item) => item.label.toLowerCase().includes(trimmed))
    : null;

  /* Group items by category */
  const groupByCategory = (items: SearchItem[]) => {
    const grouped: Record<string, SearchItem[]> = {};
    for (const item of items) {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    }
    return grouped;
  };

  const motionProps = prefersReduced
    ? {}
    : {
        initial: { y: '-100%', opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: '-100%', opacity: 0 },
        transition: {
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] bg-warm-white/95 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
          {...motionProps}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 z-10 flex items-center justify-center w-12 h-12 text-dark hover:text-oak transition-colors duration-300"
            aria-label="Close search"
          >
            <X size={28} />
          </button>

          {/* Content */}
          <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
            {/* Search input */}
            <div className="relative">
              <Search
                size={24}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-light-gray pointer-events-none"
                aria-hidden="true"
              />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Sterling Oak..."
                className="w-full bg-transparent border-0 border-b-2 border-oak pl-10 pr-4 pb-4 pt-2 font-display text-3xl md:text-4xl font-light text-dark placeholder:text-light-gray focus:outline-none focus:ring-0"
              />
            </div>

            {/* Results / Quick Links */}
            <div className="mt-12">
              {filtered !== null ? (
                /* ─── Filtered results ─── */
                filtered.length > 0 ? (
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-light-gray mb-6">
                      {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                    </p>
                    <ul className="space-y-1">
                      {filtered.map((item) => (
                        <ResultItem
                          key={item.path}
                          item={item}
                          onSelect={handleSelect}
                        />
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="font-body text-mid text-lg">
                    No results found for &ldquo;{query}&rdquo;
                  </p>
                )
              ) : (
                /* ─── Quick Links ─── */
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-light-gray mb-8">
                    Quick Links
                  </p>
                  {categories.map((cat) => {
                    const items = groupByCategory(searchableItems)[cat];
                    if (!items) return null;
                    return (
                      <div key={cat} className="mb-8 last:mb-0">
                        <h3 className="font-body text-[11px] uppercase tracking-[0.2em] text-oak mb-3">
                          {cat}
                        </h3>
                        <ul className="space-y-1">
                          {items.map((item) => (
                            <ResultItem
                              key={item.path}
                              item={item}
                              onSelect={handleSelect}
                            />
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ───────────────────────── sub-component ───────────────────────── */

interface ResultItemProps {
  item: SearchItem;
  onSelect: (path: string) => void;
}

const ResultItem: FC<ResultItemProps> = ({ item, onSelect }) => {
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(item.path)}
        className="group w-full flex items-center justify-between gap-4 px-4 py-3 text-left rounded-none transition-colors duration-200 hover:bg-cream"
      >
        <div className="flex items-center gap-4">
          <span className="inline-block rounded-none border border-border text-light-gray font-body uppercase text-[9px] tracking-[0.15em] px-2 py-0.5 shrink-0">
            {item.category}
          </span>
          <span className="font-body text-dark text-[15px] group-hover:text-oak transition-colors duration-200">
            {item.label}
          </span>
        </div>
        <ArrowRight
          size={16}
          className="text-light-gray opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0"
        />
      </button>
    </li>
  );
};

export default SearchOverlay;
