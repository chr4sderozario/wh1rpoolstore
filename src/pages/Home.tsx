import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-32 px-6">
      <section className="max-w-7xl mx-auto h-[70vh] flex flex-col justify-center items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="relative"
        >
          <h1 className="text-8xl md:text-[15vw] font-display uppercase leading-[0.8] tracking-tighter mb-6">
            WH<span className="sporty-outline italic">1</span>RLPOOL
          </h1>
          <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-primary text-black px-4 py-1 text-xs font-black uppercase skew-x-12">
            Football Store
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/60 max-w-xl mx-auto mb-10 text-lg md:text-xl uppercase tracking-wider font-medium"
        >
          The official source for premium football jerseys. 
          Limited editions. Maximum performance.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            to="/shop" 
            className="group flex items-center gap-4 bg-white text-black px-8 py-4 text-xl font-black uppercase skew-x-[-15deg] hover:bg-primary transition-colors"
          >
            <span className="skew-x-[15deg] flex items-center gap-3">
              Enter Shop <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Elite Quality", value: "Premium fabrics used by pro athletes" },
          { label: "Global Shipping", value: "Fast delivery to any goal post" },
          { label: "Safe Payment", value: "COD and UPI available" }
        ].map((feat, i) => (
          <div key={feat.label} className="glass-card p-10 rounded-3xl border-white/5">
             <span className="text-primary text-4xl font-display mb-4 block">0{i+1}</span>
             <h3 className="text-2xl font-display uppercase mb-2">{feat.label}</h3>
             <p className="text-white/40 text-sm">{feat.value}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
