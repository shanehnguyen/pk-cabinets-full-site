import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pk-dark text-white font-sans">
      {/* Newsletter Bar */}
      <div className="border-b border-white/10 py-10 md:py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-serif">Stay Connected</h3>
            <p className="text-white/60 text-sm">Join our newsletter for design inspiration and exclusive offers.</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/5 border border-white/10 px-6 py-3 text-sm focus:outline-none focus:border-pk-gold w-full md:w-80"
            />
            <button className="bg-pk-gold hover:bg-pk-gold-dark px-8 py-3 text-[13px] font-medium tracking-wider transition-colors whitespace-nowrap">
              JOIN
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6 text-center md:text-left">
          <Link to="/" className="flex items-center gap-4">
            <img src="/images/pk-logo.png" alt="PK Cabinet Logo" className="h-10 md:h-12 w-auto brightness-0 invert" referrerPolicy="no-referrer" />
            <span className="text-white font-serif text-xl md:text-2xl font-bold tracking-tight">PK Cabinet</span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Premium cabinetry for local businesses. Quality craftsmanship meets modern design.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold">Shop</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li><Link to="/products" className="hover:text-pk-gold transition-colors">Product</Link></li>
            <li><Link to="/collections" className="hover:text-pk-gold transition-colors">Collections</Link></li>
            <li><Link to="/sample-doors" className="hover:text-pk-gold transition-colors">Sample Doors</Link></li>
            <li><Link to="/contractor" className="hover:text-pk-gold transition-colors">Contractor</Link></li>
            <li><Link to="/cart" className="hover:text-pk-gold transition-colors">Your Cart</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold">Support</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li><Link to="/faq" className="hover:text-pk-gold transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-pk-gold transition-colors">Support</Link></li>
            <li><Link to="/designs" className="hover:text-pk-gold transition-colors">Design</Link></li>
            <li><Link to="/shipping" className="hover:text-pk-gold transition-colors">Shipping & Delivery</Link></li>
            <li><Link to="/refund-policy" className="hover:text-pk-gold transition-colors">Returns & Exchanges</Link></li>
            <li><Link to="/guarantee" className="hover:text-pk-gold transition-colors">Guarantee & Warranty</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold">Company</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-pk-gold transition-colors">About Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-medium uppercase tracking-widest text-white/40 text-center md:text-left">
          <div>© 2026 PK Cabinet. All Rights Reserved.</div>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
