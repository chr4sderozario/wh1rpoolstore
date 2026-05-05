import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <Link to="/" className="text-3xl font-display uppercase tracking-tighter mb-4 block">
            Wh<span className="text-primary italic">1</span>rlpool
          </Link>
          <p className="text-white/50 text-sm max-w-xs">
            Premium football jerseys for the ultimate fan. Experience the storm.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-white/30">Shop</span>
            <Link to="/shop" className="text-sm hover:text-primary transition-colors">All Jerseys</Link>
            <Link to="/new" className="text-sm hover:text-primary transition-colors">New Arrivals</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-white/30">Support</span>
            <Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
            <Link to="/shipping" className="text-sm hover:text-primary transition-colors">Shipping</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-white/20">
        <p>© 2026 WH1RLPOOL FOOTBALL. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
