import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowLeft, ChevronRight } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');

  if (!product) {
    return (
      <div className="pt-40 px-6 min-h-screen flex flex-col items-center">
        <h2 className="text-4xl font-display uppercase mb-4">Tactical Error</h2>
        <p className="text-white/40 uppercase mb-8">This kit is not in our archives yet.</p>
        <Link to="/shop" className="bg-white text-black px-8 py-4 font-black uppercase skew-x-[-15deg]">
          <span className="skew-x-[15deg]">Back to Shop</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <Link to="/shop" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 uppercase text-xs font-black tracking-widest">
          <ArrowLeft size={16} /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-white/5 rounded-[40px] flex items-center justify-center font-display text-[15vw] text-white/5 uppercase italic"
          >
            JRSY
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">{product.category}</span>
            <h1 className="text-7xl font-display uppercase tracking-tighter mb-6">{product.name}</h1>
            <p className="text-5xl font-display text-white mb-8 italic">₹{product.price}</p>
            
            <p className="text-white/40 text-lg mb-12 leading-relaxed uppercase tracking-wide">
              {product.description}
            </p>

            <div className="mb-12">
              <span className="block text-xs font-black uppercase text-white/30 tracking-widest mb-4">Select Size</span>
              <div className="flex gap-4">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center font-bold transition-all ${
                      selectedSize === size ? 'border-primary bg-primary text-black' : 'border-white/10 text-white hover:border-white/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              disabled={!selectedSize}
              onClick={() => addToCart(product, selectedSize)}
              className="group bg-white text-black py-6 text-2xl font-black uppercase skew-x-[-10deg] hover:bg-primary transition-all disabled:opacity-30 flex items-center justify-center gap-4"
            >
              <span className="skew-x-[10deg] flex items-center gap-3">
                <ShoppingBag size={28} /> Add to Bag <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
