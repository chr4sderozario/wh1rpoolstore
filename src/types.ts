export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  sizes: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export type PaymentMethod = 'COD' | 'UPI';

export interface CheckoutFormData {
  fullName: string;
  phoneNumber: string;
  address: string;
  city: string;
  pincode: string;
  country: string;
  paymentMethod: PaymentMethod;
}
