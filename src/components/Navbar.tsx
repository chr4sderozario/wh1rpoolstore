import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 px-6 py-4 top-0">
      <div className="max-w-7xl mx-auto glass-card rounded-full px-6 py-3 flex justify-between items-center bg-black/50">
        <Link to="/" className="text-2xl font-display uppercase tracking-tighter text-white">
          Wh<span className="text-primary italic">1</span>rlpool
        </Link>
        
        <div className="hidden md:flex gap-8 items-center text-sm uppercase font-bold tracking-widest">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link to="/cart" className="relative hover:text-primary transition-colors">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-black text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-black">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <Link to="/cart" className="relative group">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-black text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-black">
                {totalItems}
              </span>
            )}
          </Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass-card rounded-3xl p-6 flex flex-col gap-6 text-center text-lg font-bold uppercase tracking-widest bg-black"
          >
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
