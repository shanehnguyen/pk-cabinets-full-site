import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingCart, ChevronDown, Menu, X as CloseIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SearchOverlay from './SearchOverlay';

// Image constants
const pkLogo = '/images/pk-logo.png';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Show if scrolling up OR at the very top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    { 
      name: 'Product', 
      path: '/products'
    },
    { name: 'Collections', path: '/collections' },
    { name: 'Design', path: '/designs' },
    { name: 'Sample Doors', path: '/sample-doors' },
    { 
      name: 'Support', 
      path: '/contact', 
      subtabs: [
        { name: 'FAQ', path: '/faq' },
        { name: 'About', path: '/about' },
        { name: 'Support', path: '/contact' }
      ] 
    },
  ];

  const isActive = (path: string) => {
    if (path.includes('#')) {
      return location.pathname === path.split('#')[0] && location.hash === '#' + path.split('#')[1];
    }
    return location.pathname === path;
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      if (location.pathname === route || (route === '/' && location.pathname === '/')) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <nav className={`h-16 md:h-20 px-4 md:px-8 flex items-center justify-between bg-white border-b border-pk-dark/5 fixed top-0 left-0 right-0 z-50 font-sans transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center gap-8 md:gap-12">
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              className="lg:hidden p-2 -ml-2 text-pk-dark hover:text-pk-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
            <Link to="/" className="flex items-center shrink-0 gap-3 md:gap-4">
              <img src={pkLogo} alt="PK Cabinet Logo" className="h-6 md:h-12 w-auto" referrerPolicy="no-referrer" />
              <span className="text-pk-dark font-serif text-lg md:text-2xl font-bold tracking-tight">PK Cabinet</span>
            </Link>
          </div>
          
          <ul className="hidden lg:flex items-center gap-8 text-[13px] font-medium">
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.subtabs && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`transition-colors flex items-center gap-1 py-4 ${isActive(link.path) ? 'text-pk-dark font-semibold' : 'text-pk-muted hover:text-pk-dark'}`}
                >
                  {link.name}
                  {link.subtabs && <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : 'rotate-0'}`} />}
                </Link>

                {link.subtabs && (
                  <div className={`absolute top-full left-0 w-48 bg-white border border-pk-border shadow-xl transition-all duration-300 ${activeDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <ul className="py-2">
                      {link.subtabs.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.path}
                            className={`block px-6 py-3 text-[12px] transition-colors ${isActive(sub.path) ? 'text-pk-dark font-semibold' : 'text-pk-muted hover:text-pk-dark hover:bg-pk-placeholder-bg/50'}`}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 md:gap-8">
          <div className="flex items-center gap-1 md:gap-6">
            <Link 
              to="/contractor" 
              className={`hidden md:block text-[13px] font-medium transition-colors ${isActive('/contractor') ? 'text-pk-dark font-semibold' : 'text-pk-muted hover:text-pk-dark'}`}
            >
              Contractor
            </Link>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 p-1.5 text-pk-muted hover:text-pk-dark transition-colors group"
            >
              <Search size={18} strokeWidth={1.5} />
              <span className="hidden sm:inline text-[13px] font-medium border-b border-transparent group-hover:border-pk-dark transition-colors">Search</span>
            </button>
            <button className="hidden sm:block p-1.5 text-pk-muted hover:text-pk-dark transition-colors"><User size={18} strokeWidth={1.5} /></button>
            <Link to="/cart" className="p-1.5 text-pk-muted hover:text-pk-dark transition-colors relative">
              <ShoppingCart size={18} strokeWidth={1.5} />
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-pk-dark text-white text-[8px] flex items-center justify-center rounded-full">2</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-pk-dark/60 backdrop-blur-sm z-[100] lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-[320px] bg-white z-[110] lg:hidden flex flex-col shadow-2xl"
            >
              <div className="h-16 px-6 flex items-center justify-between border-b border-pk-border">
                <div className="flex items-center gap-3">
                  <img src={pkLogo} alt="PK Cabinet Logo" className="h-6 w-auto" referrerPolicy="no-referrer" />
                  <span className="text-pk-dark font-serif text-lg font-bold">PK Cabinet</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-pk-dark hover:text-pk-gold transition-colors"
                >
                  <CloseIcon size={24} strokeWidth={1.5} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <ul className="space-y-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <div className="space-y-4">
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-lg font-serif tracking-tight block ${isActive(link.path) ? 'text-pk-gold' : 'text-pk-dark'}`}
                        >
                          {link.name}
                        </Link>
                        {link.subtabs && (
                          <ul className="pl-4 space-y-3 border-l border-pk-border">
                            {link.subtabs.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  to={sub.path}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`text-sm tracking-wide block ${isActive(sub.path) ? 'text-pk-gold' : 'text-pk-muted'}`}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border-t border-pk-border space-y-6 bg-pk-placeholder-bg/30">
                <Link 
                  to="/account" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-pk-dark hover:text-pk-gold transition-colors"
                >
                  <User size={20} strokeWidth={1.5} />
                  <span className="text-sm font-medium uppercase tracking-widest">My Account</span>
                </Link>
                <Link 
                  to="/cart" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-pk-dark hover:text-pk-gold transition-colors"
                >
                  <ShoppingCart size={20} strokeWidth={1.5} />
                  <span className="text-sm font-medium uppercase tracking-widest">Shopping Cart (2)</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
