import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CheckoutFormData, PaymentMethod } from '../types';
import { CONTACT_INFO } from '../constants';
import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'motion/react';
import { CheckCircle2, CreditCard, Truck } from 'lucide-react';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    phoneNumber: '',
    address: '',
    city: '',
    pincode: '',
    country: '',
    paymentMethod: 'COD'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== '' &&
      formData.phoneNumber.trim() !== '' &&
      formData.address.trim() !== '' &&
      formData.city.trim() !== '' &&
      formData.pincode.trim() !== '' &&
      formData.country.trim() !== ''
    );
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert("Please fill all mandatory fields.");
      return;
    }
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="pt-40 px-6 min-h-screen flex flex-col items-center text-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-primary mb-8"
        >
          <CheckCircle2 size={120} strokeWidth={1.5} />
        </motion.div>
        <h1 className="text-6xl font-display uppercase mb-4 tracking-tighter">Order Placed</h1>
        <p className="text-white/40 uppercase tracking-widest max-w-sm">
          Get ready for the storm. Your Wh1rlpool kit is being gathered.
        </p>
      </div>
    );
  }

  if (cart.length === 0) return null;

  return (
    <div className="pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-display uppercase mb-12 tracking-tighter">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Billing Form */}
          <div className="glass-card p-10 rounded-[40px]">
            <h2 className="text-2xl font-display uppercase mb-8 flex items-center gap-3">
              <Truck size={24} className="text-primary" /> Delivery Info
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Full Name</label>
                <input 
                  name="fullName" value={formData.fullName} onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors" 
                  placeholder="Lionel Messi" required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Phone</label>
                    <input 
                      name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors" 
                      placeholder="+91..." required
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Pincode</label>
                    <input 
                      name="pincode" value={formData.pincode} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors" 
                      placeholder="123456" required
                    />
                 </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Street Address</label>
                <textarea 
                  name="address" value={formData.address} onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors min-h-[100px]" 
                  placeholder="Area, Street, Building..." required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">City</label>
                    <input 
                      name="city" value={formData.city} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors" 
                      placeholder="City Name" required
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Country</label>
                    <input 
                      name="country" value={formData.country} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors" 
                      placeholder="Country Name" required
                    />
                 </div>
              </div>
            </form>
          </div>

          {/* Payment Section */}
          <div className="space-y-8">
            <div className="glass-card p-10 rounded-[40px] border-primary/20">
               <h2 className="text-2xl font-display uppercase mb-8 flex items-center gap-3">
                 <CreditCard size={24} className="text-primary" /> Payment Options
               </h2>
               
               <div className="space-y-4">
                  {/* COD */}
                  <button 
                    onClick={() => setFormData(p => ({ ...p, paymentMethod: 'COD' }))}
                    className={`w-full flex items-center justify-between p-6 rounded-3xl border-2 transition-all ${
                      formData.paymentMethod === 'COD' ? 'border-primary bg-primary/10' : 'border-white/5 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="text-left">
                       <span className="block font-black uppercase tracking-widest text-xs">Option 1</span>
                       <span className="text-xl font-display uppercase">Cash on Delivery</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 p-1 ${formData.paymentMethod === 'COD' ? 'border-primary' : 'border-white/20'}`}>
                       {formData.paymentMethod === 'COD' && <div className="w-full h-full bg-primary rounded-full" />}
                    </div>
                  </button>

                  {/* UPI */}
                  <button 
                    onClick={() => setFormData(p => ({ ...p, paymentMethod: 'UPI' }))}
                    className={`w-full flex items-center justify-between p-6 rounded-3xl border-2 transition-all ${
                      formData.paymentMethod === 'UPI' ? 'border-primary bg-primary/10' : 'border-white/5 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="text-left">
                       <span className="block font-black uppercase tracking-widest text-xs">Option 2</span>
                       <span className="text-xl font-display uppercase">Online Payment (UPI)</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 p-1 ${formData.paymentMethod === 'UPI' ? 'border-primary' : 'border-white/20'}`}>
                       {formData.paymentMethod === 'UPI' && <div className="w-full h-full bg-primary rounded-full" />}
                    </div>
                  </button>

                  {formData.paymentMethod === 'UPI' && (
                    <motion.div 
                      key="upi-panel"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-white/5 rounded-3xl p-8 flex flex-col items-center gap-6 mt-4"
                    >
                       <div className="bg-white p-4 rounded-2xl">
                          <QRCodeSVG 
                            value={`upi://pay?pa=${CONTACT_INFO.upiId}&pn=Wh1rlpool&am=${totalPrice}&cu=INR`} 
                            size={180}
                          />
                       </div>
                       <div className="text-center">
                          <p className="text-[10px] font-black uppercase tracking-tighter text-white/40 mb-2">Scan & Pay</p>
                          <p className="font-mono text-primary text-sm font-bold">{CONTACT_INFO.upiId}</p>
                          <p className="text-xs text-white/60 mt-4 leading-relaxed uppercase">
                            “Scan the QR code and complete payment. After payment, confirm your order.”
                          </p>
                       </div>
                    </motion.div>
                  )}
               </div>
            </div>

            <div className="glass-card p-10 rounded-[40px] border-white/5">
                <div className="flex justify-between items-end mb-8">
                  <span className="text-xs font-black uppercase text-white/30">Total Weight In Bag</span>
                  <span className="text-4xl font-display text-primary">₹{totalPrice}</span>
                </div>
                <button 
                  onClick={handleOrder}
                  disabled={!isFormValid()}
                  className="w-full bg-primary text-black py-6 text-2xl font-black uppercase transition-all hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed group"
                >
                  Confirm Order
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
