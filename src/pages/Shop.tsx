import React from 'react';
import { PRODUCTS } from '../constants';
import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const Shop = () => {
  return (
    <div className="pt-32 px-6 min-h-[80vh]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
          <h1 className="text-6xl font-display uppercase tracking-tighter">
            Full <span className="text-primary italic">Kit</span>
          </h1>
          <span className="text-xs font-black uppercase text-white/30 tracking-widest bg-white/5 px-4 py-2 rounded-full">
            {PRODUCTS.length} Products Found
          </span>
        </div>

        {PRODUCTS.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-40 text-center"
          >
            <div className="w-24 h-24 mb-6 text-white/10">
                <ShoppingBag size={96} strokeWidth={1} />
            </div>
            <h2 className="text-4xl font-display uppercase mb-4">Stocking the Vault</h2>
            <p className="text-white/40 max-w-md uppercase text-xs tracking-[0.2em] leading-relaxed">
              Our latest jersey drops are being prepared. Check back shortly for the new season collection.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Products will be mapped here once provided */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
