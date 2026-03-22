import React, { useState, useRef, useMemo } from 'react';
import { Star, ChevronLeft, ChevronRight, Info, Box, ShoppingCart, ShieldCheck, Plus, X, Download } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Button from '../components/Button';
import { PRODUCTS } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const accordionItems = [
    {
      title: 'Dimensions',
      content: (
        <div className="space-y-3 py-4">
          <div className="flex justify-between border-b border-pk-border pb-2">
            <span className="text-pk-muted text-[13px] uppercase tracking-wider">Model Number</span>
            <span className="text-pk-dark text-[14px]">{product.subtitle}</span>
          </div>
          <div className="flex justify-between border-b border-pk-border pb-2">
            <span className="text-pk-muted text-[13px] uppercase tracking-wider">Specifications</span>
            <span className="text-pk-dark text-[14px]">
              {product.specifications.doors} Doors | {product.specifications.shelves} Shelves
              {product.specifications.drawers ? ` | ${product.specifications.drawers} Drawers` : ''}
            </span>
          </div>
        </div>
      )
    },
    {
      title: 'Materials and Contents',
      content: (
        <p className="text-[14px] text-pk-muted leading-relaxed py-4">
          Solid wood frame with HDF center panel. ¾" plywood box construction. Scratch-resistant multilayered AC paint finish.
        </p>
      )
    },
    {
      title: 'Care Instructions',
      content: (
        <p className="text-[14px] text-pk-muted leading-relaxed py-4">
          Wipe clean with a damp cloth. Avoid abrasive cleaners. Do not expose to prolonged moisture.
        </p>
      )
    },
    {
      title: 'Downloads',
      content: (
        <div className="py-4">
          <Link to="#" className="flex items-center gap-2 text-[14px] text-pk-dark hover:text-pk-gold transition-colors">
            <Download size={16} />
            <span>Installation Guide (PDF)</span>
          </Link>
        </div>
      )
    },
    {
      title: 'Delivery',
      content: (
        <p className="text-[14px] text-pk-muted leading-relaxed py-4">
          In stock. Ships within 3 business days from our Texas warehouse. Free shipping on orders over $5,000.
        </p>
      )
    },
    {
      title: 'Reviews',
      content: (
        <div className="space-y-6 py-4">
          {[
            { name: "John D.", comment: "Excellent quality and easy to install. The finish is beautiful." },
            { name: "Sarah M.", comment: "Perfect fit for my kitchen remodel. Highly recommend!" },
            { name: "Michael P.", comment: "Great value for the price. Very sturdy construction." }
          ].map((review, i) => (
            <div key={i} className="space-y-2 pb-4 border-b border-pk-border last:border-0">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#a89060" stroke="#a89060" />)}
              </div>
              <p className="font-bold text-pk-dark text-[14px]">"Verified Purchase"</p>
              <p className="text-pk-muted italic font-light text-[13px]">"{review.comment}"</p>
              <p className="text-[11px] uppercase tracking-[0.12em] text-pk-gold">— {review.name}</p>
            </div>
          ))}
        </div>
      )
    }
  ];

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 5);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout>
      <PageHeader 
        title={product.name} 
        breadcrumb={{ label: 'Product', path: '/products' }}
      />

      <main className="flex flex-col lg:flex-row bg-white min-h-screen relative">
        {/* Left: Amazon-style Image Gallery (60%) */}
        <div className="lg:w-[60%] p-10 flex gap-6">
          {/* Thumbnails Strip */}
          <div className="flex flex-col gap-3 w-[60px] flex-shrink-0">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImageIndex(i)}
                className={`w-[60px] h-[60px] border transition-all duration-200 overflow-hidden bg-[#ffffff] ${
                  selectedImageIndex === i ? 'border-pk-dark' : 'border-pk-border hover:border-pk-muted'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${product.name} thumbnail ${i + 1}`} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>

          {/* Main Image Display */}
          <div className="flex-1 bg-[#ffffff] overflow-hidden aspect-square">
            <img 
              src={product.images[selectedImageIndex]} 
              alt={product.name}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right: Natural Height Sidebar (40%) */}
        <aside className="lg:w-[40%] border-l border-pk-border bg-white p-10 flex flex-col">
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-pk-muted">
                PK Cabinet
              </span>
              <h1 className="text-[30px] font-serif text-pk-dark leading-tight">
                {product.name}
              </h1>
              <p className="text-[18px] text-pk-dark mt-2">
                ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#a89060" stroke="#a89060" />
                ))}
              </div>
              <span className="text-[13px] text-pk-dark font-medium">5.0</span>
              <Link to="#reviews" className="text-[13px] text-pk-muted underline underline-offset-4 hover:text-pk-dark transition-colors">
                3 Reviews
              </Link>
            </div>

            <div className="pt-6 border-t border-pk-border space-y-4">
              <p className="text-[13px] text-pk-muted leading-relaxed">
                {product.description}
                <Link to="#details" className="ml-2 text-pk-dark underline underline-offset-4 hover:text-pk-gold transition-colors">
                  See Details
                </Link>
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[13px] font-bold text-pk-dark">
                Finish: <span className="font-normal text-pk-muted">{product.color}</span>
              </p>
              <div className="flex gap-4">
                <div
                  className="w-[36px] h-[36px] rounded-full relative ring-2 ring-pk-dark ring-offset-2"
                  style={{ backgroundColor: product.color === 'White' ? '#FFFFFF' : product.color === 'Dolphin Gray' ? '#A9AFB2' : product.color === 'Gray Slim' ? '#808080' : product.color === 'Slim Oak' ? '#E9E4D4' : product.color === 'Slim White' ? '#F5F5F0' : '#CCCCCC' }}
                  title={product.color}
                />
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <Button className="w-full bg-black text-white hover:bg-black/90 border-none rounded-none py-4 text-[12px] font-bold uppercase tracking-widest">
                Add to Cart
              </Button>
              <Link to="/contact" className="flex items-center justify-center gap-2 text-[12px] text-pk-muted underline underline-offset-4 hover:text-pk-dark transition-colors">
                <Info size={14} /> Need help?
              </Link>
            </div>

            {/* Pairs Well With */}
            <div className="pt-12 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-[14px] font-bold uppercase tracking-wider text-pk-dark">
                  Pairs well with
                </h3>
                <div className="flex gap-2">
                  <button 
                    onClick={() => scroll('left')}
                    className="w-8 h-8 rounded-full border border-pk-border flex items-center justify-center hover:bg-pk-border/10 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button 
                    onClick={() => scroll('right')}
                    className="w-8 h-8 rounded-full border border-pk-border flex items-center justify-center hover:bg-pk-border/10 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div 
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
              >
                {relatedProducts.map((item) => (
                  <Link 
                    key={item.id}
                    to={`/product/${item.id}`}
                    className="flex-shrink-0 w-[280px] flex items-center gap-4 p-4 border border-pk-border group hover:border-pk-gold transition-colors snap-start"
                  >
                    <div className="w-16 h-16 overflow-hidden bg-[#ffffff]">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] font-bold text-pk-dark truncate">{item.name}</h4>
                      <p className="text-[12px] text-pk-gold">${item.price.toLocaleString()}</p>
                    </div>
                    <Button className="!px-4 !py-2 !text-[10px] bg-pk-dark text-white border-none rounded-none">
                      + View
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Product Details Section */}
      <section className="bg-[#f9f9f7] py-14 px-12 border-t border-pk-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Product Details */}
          <div className="space-y-10">
            <h2 className="text-[32px] font-serif text-pk-dark">
              Product details
            </h2>
            <div className="space-y-6">
              <p className="text-[14px] leading-[1.8] text-pk-muted">
                The Mallorca Base Cabinet is a testament to the enduring appeal of minimalist design. Every line is intentional, every joint is a celebration of traditional craftsmanship. Designed to be the functional heart of your kitchen, it provides ample workspace and storage without compromising on elegance.
              </p>
              <p className="text-[14px] leading-[1.8] text-pk-muted">
                We use only the finest materials, selected for their durability and character. Our cabinetry is engineered to ensure stability, then finished with a protective coating that enhances the natural beauty while providing a durable surface for daily life.
              </p>
              <p className="text-[14px] leading-[1.8] text-pk-muted">
                This piece features our signature Shaker styling and high-quality hardware, adding a touch of quiet luxury to the utilitarian form. It's a piece designed not just for today, but for generations to come.
              </p>
            </div>
            
            <div className="pt-4 flex items-start gap-4">
              <div className="w-10 h-10 bg-pk-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-serif font-bold text-lg">
                D
              </div>
              <div className="space-y-1">
                <p className="text-[14px] font-serif italic font-light text-pk-muted">
                  Handcrafted with excellence in furniture design and sustainable manufacturing practices.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Dropdowns */}
          <div className="w-full">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-t border-pk-border first:border-t-0">
                <button
                  onClick={() => setOpenAccordionIndex(openAccordionIndex === index ? null : index)}
                  className="w-full py-5 flex items-center justify-between text-left group"
                >
                  <span className="text-[15px] font-normal text-pk-dark group-hover:text-pk-gold transition-colors">
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: openAccordionIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-pk-dark"
                  >
                    <Plus size={20} strokeWidth={1.5} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openAccordionIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You May Also Like Carousel */}
      <section className="bg-[#f9f9f7] py-10 px-10 border-t border-pk-border">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-[36px] font-serif text-pk-dark">
              You may also like
            </h2>
            <div className="flex gap-3">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border-[0.5px] border-pk-border flex items-center justify-center hover:bg-pk-gold hover:text-white transition-all duration-300"
              >
                <ChevronLeft size={20} strokeWidth={1} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border-[0.5px] border-pk-border flex items-center justify-center hover:bg-pk-gold hover:text-white transition-all duration-300"
              >
                <ChevronRight size={20} strokeWidth={1} />
              </button>
            </div>
          </div>

          <div 
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
          >
            {relatedProducts.map((product, index) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="flex-shrink-0 w-[calc(25%-24px)] min-w-[280px] snap-start space-y-4 group cursor-pointer"
              >
                <div className="bg-[#ffffff] aspect-square overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-pk-muted">
                    {product.collection}
                  </p>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-[14px] text-pk-dark font-normal group-hover:text-pk-gold transition-colors">{product.name}</h3>
                    <p className="text-[14px] text-pk-dark">
                      ${product.price}
                    </p>
                  </div>
                  <div className="flex gap-1.5 pt-1">
                    <div 
                      className="w-[13px] h-[13px] rounded-full border border-pk-border"
                      style={{ backgroundColor: product.color }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-pk-border py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 divide-x divide-pk-border">
          <div className="flex flex-col items-center justify-center text-center px-4 space-y-2">
            <Box size={24} strokeWidth={1} className="text-pk-dark mb-1" />
            <p className="text-[14px] text-pk-dark font-medium">3-Day Quick Ship</p>
            <p className="text-[12px] text-pk-gold font-bold uppercase tracking-wider">In stock & ready</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4 space-y-2">
            <ShoppingCart size={24} strokeWidth={1} className="text-pk-dark mb-1" />
            <p className="text-[14px] text-pk-dark font-medium">Free Shipping</p>
            <p className="text-[12px] text-pk-gold font-bold uppercase tracking-wider">On orders over $5,000</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4 space-y-2">
            <ShieldCheck size={24} strokeWidth={1} className="text-pk-dark mb-1" />
            <p className="text-[14px] text-pk-dark font-medium">Best Price Guarantee</p>
            <p className="text-[12px] text-pk-gold font-bold uppercase tracking-wider">We'll match + 10% off</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4 space-y-2">
            <ShieldCheck size={24} strokeWidth={1} className="text-pk-dark mb-1" />
            <p className="text-[14px] text-pk-dark font-medium">5-Year Warranty</p>
            <p className="text-[12px] text-pk-gold font-bold uppercase tracking-wider">Comprehensive coverage</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4 space-y-2">
            <Box size={24} strokeWidth={1} className="text-pk-dark mb-1" />
            <p className="text-[14px] text-pk-dark font-medium">30-Day Returns</p>
            <p className="text-[12px] text-pk-gold font-bold uppercase tracking-wider">Hassle-free policy</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetailPage;

