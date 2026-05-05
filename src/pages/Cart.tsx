import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div className="pt-32 px-6 min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <ShoppingCart size={32} className="text-primary" />
          <h1 className="text-6xl font-display uppercase tracking-tighter">Your Bag</h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 glass-card rounded-3xl p-12">
            <p className="text-white/40 uppercase tracking-widest mb-8">Your dugout is empty</p>
            <Link to="/shop" className="inline-flex bg-primary text-black px-8 py-4 font-black uppercase skew-x-[-15deg]">
              <span className="skew-x-[15deg]">Take the Field</span>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={`${item.id}-${item.selectedSize}`}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6 rounded-3xl"
                >
                  <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center font-display text-4xl text-white/10 uppercase italic">
                    JRSY
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display uppercase">{item.name}</h3>
                    <p className="text-xs font-bold text-white/30 uppercase tracking-widest">
                      Size: {item.selectedSize} | Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-display mb-2 text-primary">₹{item.price * item.quantity}</p>
                    <button 
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="text-red-500 hover:bg-red-500/10 p-2 rounded-xl transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="mt-12 glass-card p-10 rounded-3xl border-primary/20 bg-primary/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-black uppercase tracking-widest text-white/40">Total Amount</span>
                <span className="text-5xl font-display text-primary">₹{totalPrice}</span>
              </div>
              <Link 
                to="/checkout" 
                className="flex items-center justify-center gap-4 bg-white text-black w-full py-6 text-2xl font-black uppercase skew-x-[-10deg] hover:bg-primary transition-colors"
              >
                <span className="skew-x-[10deg] flex items-center gap-3">
                  Proceed to Payment <ArrowRight size={28} />
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
