import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ChevronDown, ChevronUp, Truck, Star } from 'lucide-react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import ImagePlaceholder from '../components/ImagePlaceholder';

interface CartItem {
  id: string;
  name: string;
  collection: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image?: string;
  rating: number;
  reviews: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Mallorca White Shaker Bridge Wall 36×12',
      collection: 'MALLORCA',
      price: 303.51,
      originalPrice: 350.00,
      quantity: 1,
      rating: 4.8,
      reviews: 124,
      image: 'https://img-va.myshopline.com/image/store/1736838390436/W361224-white-shaker-(2).jpg'
    },
    {
      id: '2',
      name: 'Mallorca White Shaker Blind Corner Base 45W',
      collection: 'MALLORCA',
      price: 672.21,
      originalPrice: 750.00,
      quantity: 1,
      rating: 4.9,
      reviews: 86,
      image: 'https://img-va.myshopline.com/image/store/1736838390436/BBC45-white-shaker.jpg'
    }
  ]);

  const [orderNotesOpen, setOrderNotesOpen] = useState(false);
  const [orderNotes, setOrderNotes] = useState('');

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 1500;
  const awayFromFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  if (cartItems.length === 0) {
    return (
      <Layout>
        <PageHeader 
          title="Your Cart" 
          breadcrumb={{ label: 'Cart', path: '/cart' }}
        />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="w-20 h-20 bg-pk-placeholder-bg rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="text-pk-muted" size={32} />
            </div>
            <div className="space-y-4">
              <h1 className="text-[42px] font-serif text-pk-dark">Your cart is empty</h1>
              <p className="text-pk-muted max-w-md mx-auto">
                Looks like you haven't added any cabinets to your cart yet. Explore our collections to find the perfect fit for your kitchen.
              </p>
            </div>
            <Link to="/products">
              <Button className="mt-4">Continue Shopping</Button>
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader 
        title="Your Cart" 
        breadcrumb={{ label: 'Cart', path: '/cart' }}
      />
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Side: Cart Items */}
            <div className="lg:w-[70%] space-y-10">
              <div className="flex justify-between items-end border-b border-pk-border pb-6">
                <h1 className="text-[32px] md:text-[42px] font-serif text-pk-dark leading-none">Your cart</h1>
                <span className="text-[13px] font-medium text-pk-muted uppercase tracking-wider">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              <div className="space-y-12">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row gap-8 pb-12 border-b border-pk-border last:border-0">
                    {/* Thumbnail */}
                    <div className="w-full md:w-[120px] aspect-square bg-white border border-pk-border overflow-hidden flex-shrink-0">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <ImagePlaceholder aspectRatio="aspect-square" />
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-grow space-y-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-pk-gold">
                          {item.collection}
                        </span>
                        <Link to="/product" className="block text-[18px] font-medium text-pk-dark hover:text-pk-gold transition-colors leading-tight">
                          {item.name}
                        </Link>
                        <div className="flex items-center gap-2 text-[13px] text-pk-muted">
                          <div className="flex text-pk-gold">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={12} fill={i < Math.floor(item.rating) ? "currentColor" : "none"} />
                            ))}
                          </div>
                          <span>({item.rating})</span>
                          <span className="text-pk-border">|</span>
                          <span>{item.reviews} reviews</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        {item.originalPrice && (
                          <span className="text-[14px] text-pk-muted line-through">
                            ${item.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span className="text-[18px] font-bold text-pk-gold">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-8 pt-2">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-pk-input-border">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-10 h-10 flex items-center justify-center text-pk-dark hover:bg-pk-placeholder-bg transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <input 
                            type="number" 
                            value={item.quantity}
                            readOnly
                            className="w-12 text-center text-[14px] font-medium focus:outline-none bg-transparent"
                          />
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-10 h-10 flex items-center justify-center text-pk-dark hover:bg-pk-placeholder-bg transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button 
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-pk-muted hover:text-pk-dark transition-colors"
                        >
                          <Trash2 size={14} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Order Summary */}
            <div className="lg:w-[30%]">
              <div className="sticky top-24 space-y-8">
                {/* Free Shipping Progress */}
                <div className="bg-pk-placeholder-bg p-6 space-y-4 rounded-sm">
                  <div className="flex items-center gap-3 text-pk-dark">
                    <Truck size={20} className="text-pk-gold" />
                    <p className="text-[14px] font-medium">
                      {awayFromFreeShipping > 0 
                        ? `Only $${awayFromFreeShipping.toFixed(2)} away from free shipping!`
                        : "You've unlocked free shipping!"}
                    </p>
                  </div>
                  <div className="h-1.5 w-full bg-white rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${shippingProgress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-pk-gold"
                    />
                  </div>
                </div>

                {/* Order Summary Box */}
                <div className="border border-pk-border p-8 space-y-8">
                  <h2 className="text-[24px] font-serif text-pk-dark border-b border-pk-border pb-4">Order Summary</h2>
                  
                  {/* Order Notes */}
                  <div className="space-y-4">
                    <button 
                      onClick={() => setOrderNotesOpen(!orderNotesOpen)}
                      className="flex items-center justify-between w-full text-[13px] font-bold uppercase tracking-wider text-pk-dark hover:text-pk-gold transition-colors"
                    >
                      <span>Add order notes</span>
                      {orderNotesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    <AnimatePresence>
                      {orderNotesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <textarea 
                            value={orderNotes}
                            onChange={(e) => setOrderNotes(e.target.value)}
                            placeholder="How can we help you?"
                            className="w-full h-32 p-4 text-[14px] border border-pk-input-border focus:outline-none focus:border-pk-gold transition-colors resize-none"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[14px] text-pk-muted">Subtotal</span>
                      <span className="text-[24px] font-bold text-pk-dark">${subtotal.toFixed(2)}</span>
                    </div>
                    <p className="text-[13px] text-pk-muted leading-relaxed">
                      Taxes and <Link to="/faq" className="underline hover:text-pk-gold transition-colors">shipping</Link> calculated at checkout
                    </p>
                  </div>

                  <Button className="w-full py-5 text-[14px] tracking-[0.1em]">
                    CHECKOUT
                  </Button>

                  <div className="pt-4 flex flex-col items-center gap-4">
                    <p className="text-[11px] uppercase tracking-widest text-pk-muted font-bold">Secure Checkout</p>
                    <div className="flex gap-3 opacity-50 grayscale">
                      <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-4" />
                      <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Mastercard" className="h-4" />
                      <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="Amex" className="h-4" />
                      <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="PayPal" className="h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
