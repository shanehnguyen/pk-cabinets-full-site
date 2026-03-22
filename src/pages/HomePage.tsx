import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Box, ShoppingCart, Star, ShieldCheck, User, Mail, Phone, Facebook, Linkedin, Instagram, Eye, X } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { PRODUCTS } from '../data/products';

// Image constants
const home1 = '/home1.png';
const home2 = '/home2.png';
const home3 = '/home3.png';
const mallorcaImg = '/mallorca.png';
const shadyImg = '/shady.png';
const francoImg = '/franco.png';
const irenaImg = '/irena.png';
const newportImg = '/newport.png';
const aspenImg = '/aspen.png';
const shadyGrayCollectionImg = '/shady-gray.webp';
const whiteShakerBanner = '/white-shaker-banner.jpg';
const francoWhiteShakerDoor = '/Franco-Collection-White-Shaker-Framed-Sample-Door.jpg';
const grayShakerbanner = '/Gray-Shaker-frameless-banner.jpg';
const mallorcaDolphingrayDoor = '/Mallorca-Collection-Dolphin-Gray-Frameless.jpg';
const shorelineWoodgrainBanner = '/Shoreline-Woodgrain-banner.jpg';
const newportShorelineDoor = '/Newport-Collection-Shoreline-Frameless-Sample-Door.jpg';
const aspenStoneGrayBg = '/aspen-collection-stone-gray-background.jpg';
const aspenStoneGrayDoor = '/Aspen-Collection-Stone-Gray-Frameless-Sample-Door.jpg';
const slimBlack = '/Slim-Black.jpg';
const francoSlimBlackDoor = '/Franco-Collection-Slim-Black-Framed-Sample-Door.jpg';
const naturalOakBanner = '/Natural-Oak-banner.jpg';
const newportNaturalOakDoor = '/Newport-Collection-Natural-Oak-Frameless-Sample-Door.jpg';

const TestimonialSlideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      name: "Jean Goolsby",
      text: "We were honestly surprised by how solid and well-made these cabinets are. The materials feel premium, and the finish looks beautiful in our kitchen. Delivery arrived in just a few days, packed carefully and in perfect condition."
    },
    {
      name: "Jessica Lopez",
      text: "From start to finish, the experience was smooth and professional. The cabinets are sturdy, well-constructed, and look far more expensive than they are. The 3 to 5 day delivery helped keep our renovation on schedule."
    },
    {
      name: "Jason Yoon",
      text: "These cabinets exceeded our expectations. The craftsmanship is excellent with clean lines and durable construction. Delivery was incredibly fast and installation was easy. Great quality, great value, reliable service."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-auto md:h-[400px] flex items-center bg-white py-12 md:py-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
          className="p-6 md:p-12 relative overflow-hidden w-full"
        >
          <span className="absolute top-0 md:top-4 left-2 md:left-4 text-6xl md:text-8xl font-serif text-pk-gold/10 leading-none select-none">“</span>
          <div className="relative z-10 space-y-4 md:space-y-6">
            <p className="text-base md:text-3xl font-serif text-pk-dark leading-relaxed md:leading-snug italic">
              "{testimonials[current].text}"
            </p>
            <p className="text-pk-gold font-medium tracking-widest uppercase text-[11px] md:text-sm">— {testimonials[current].name}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-6 md:left-12 flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${current === i ? 'bg-pk-gold w-6' : 'bg-pk-gold/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

const QuickViewModal: React.FC<{ product: any; isOpen: boolean; onClose: () => void }> = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-pk-dark/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-pk-dark hover:text-pk-gold transition-colors bg-white/80 backdrop-blur-sm rounded-full shadow-sm"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 bg-[#ffffff] p-6 md:p-8 flex items-center justify-center min-h-[250px] md:min-h-[300px]">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="max-w-full max-h-[300px] md:max-h-[400px] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6 md:p-12 space-y-4 md:space-y-6 flex flex-col justify-center">
              <div className="space-y-2">
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-pk-gold">{product.collection}</span>
                <h2 className="text-xl md:text-3xl font-serif text-pk-dark leading-tight">{product.name}</h2>
                
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex items-center text-pk-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                    <span className="text-[12px] md:text-[13px] font-medium ml-2 text-pk-dark">{product.rating}/5</span>
                  </div>
                  <span className="text-[12px] md:text-[13px] text-pk-muted">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-xl md:text-2xl font-medium text-pk-dark">${product.price}</span>
                  {product.oldPrice && (
                    <span className="text-base md:text-lg text-pk-muted line-through">${product.oldPrice}</span>
                  )}
                </div>
                <p className="text-[11px] md:text-[12px] text-pk-gold font-bold uppercase tracking-wider">
                  {product.availability || 'In Stock'}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-pk-dark">Key Features</h4>
                <ul className="space-y-1.5 md:space-y-2">
                  {product.features?.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] md:text-[14px] text-pk-muted">
                      <span className="text-pk-gold mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 md:pt-4">
                <Button className="py-3 md:py-4 text-[12px] md:text-[13px] uppercase tracking-[0.15em] w-full">
                  Add to Cart
                </Button>
                <p className="text-center mt-3 md:mt-4">
                  <Link to={`/product/${product.id}`} onClick={onClose} className="text-[11px] md:text-[12px] text-pk-muted hover:text-pk-gold underline underline-offset-4 transition-colors">
                    View Full Details
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ProductCard: React.FC<{ product: any; index: number; onQuickView: (product: any) => void }> = ({ product, index, onQuickView }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  useEffect(() => {
    if (isHovered && product.images.length > 1) {
      setCurrentImage(1);
    } else {
      setCurrentImage(0);
    }
  }, [isHovered, product.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="w-[80%] md:w-auto min-w-[280px] md:min-w-[320px] group cursor-pointer snap-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square mb-6 overflow-hidden bg-[#ffffff] rounded-sm group/image shadow-sm hover:shadow-md transition-shadow duration-500">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={product.images[currentImage]}
              alt={product.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </Link>

        {/* Quick View Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-pk-dark shadow-sm opacity-0 group-hover/image:opacity-100 transition-all hover:bg-pk-gold hover:text-white transform translate-y-2 group-hover/image:translate-y-0"
          title="Quick View"
        >
          <Eye size={18} />
        </button>

        {/* Arrows - only visible on hover */}
        <div className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={prevImage}
            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-pk-dark shadow-sm hover:bg-pk-gold hover:text-white transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextImage}
            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-pk-dark shadow-sm hover:bg-pk-gold hover:text-white transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div className="space-y-1.5">
        <Link to={`/product/${product.id}`} className="block group/title">
          <h3 className="text-[15px] font-medium text-pk-dark group-hover/title:text-pk-gold transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 text-[12px]">
          <div className="flex items-center text-pk-gold">
            <Star size={12} fill="currentColor" />
            <span className="font-medium ml-1 text-pk-dark">{product.rating}/5</span>
          </div>
          <span className="text-pk-border">|</span>
          <span className="text-pk-muted">{product.reviewCount} reviews</span>
          {product.name.includes(' ') && (
            <>
              <span className="text-pk-border">|</span>
              <span className="text-pk-muted">{product.name.substring(product.name.lastIndexOf(' ') + 1)}</span>
            </>
          )}
        </div>

        <div className="pt-0.5">
          <p className="text-[15px] font-medium text-pk-dark">
            ${product.price}
            {product.oldPrice && (
              <span className="ml-2 text-[13px] text-pk-muted line-through font-normal">${product.oldPrice}</span>
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const popularProducts = PRODUCTS.slice(0, 8);

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<any>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const openQuickView = (product: any) => {
    setSelectedQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
  };

  const heroSlides = [
    {
      title: "Discover Modern Kitchen Luxury",
      subtitle: "Premium Series",
      leftColor: "#1A1A1A",
      rightColor: "#0D0D0D",
      image: home1
    },
    {
      title: "Timeless White Shaker Elegance",
      subtitle: "Classic Series",
      leftColor: "#F5F5F5",
      rightColor: "#E0E0E0",
      image: home2
    },
    {
      title: "Bespoke Minimalist Design",
      subtitle: "Modern Series",
      leftColor: "#0A0A0A",
      rightColor: "#141414",
      image: home3
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full aspect-[16/7] min-h-[400px] overflow-hidden bg-[#1a1a1a]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={heroSlides[currentSlide].image} 
                alt="" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Gradient overlay: transparent top to semi-opaque black bottom-left */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content Container - Bottom Left Aligned */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-[40px]">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-3 md:space-y-4 max-w-2xl"
              >
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 block">
                  {heroSlides[currentSlide].subtitle}
                </span>
                <h1 className="text-white text-[28px] sm:text-[36px] md:text-[52px] font-serif font-normal leading-[1.2] md:leading-[1.1]">
                  {heroSlides[currentSlide].title}
                </h1>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="pt-1 md:pt-2"
                >
                  <Link 
                    to="/products" 
                    className="inline-flex items-center gap-2 text-white text-[12px] md:text-[13px] font-medium uppercase tracking-[0.1em] group"
                  >
                    <span>Explore Collection</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Far Edges */}
        <div className="absolute inset-y-0 left-0 flex items-center z-20">
          <button 
            onClick={prevSlide} 
            className="w-16 h-full flex items-center justify-center text-white/30 hover:text-white hover:bg-black/5 transition-all"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center z-20">
          <button 
            onClick={nextSlide} 
            className="w-16 h-full flex items-center justify-center text-white/30 hover:text-white hover:bg-black/5 transition-all"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 right-10 flex gap-3 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-white w-6' : 'bg-white/20'}`}
            />
          ))}
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="h-auto md:h-20 bg-white border-y border-pk-border flex items-center px-4 md:px-8 overflow-x-auto no-scrollbar py-6 md:py-0">
        <div className="flex items-center gap-8 md:gap-12 min-w-max mx-auto">
          <div className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] text-pk-gold whitespace-nowrap">
            In Stock and Ready to Ship in 3 Days
          </div>
          <div className="flex items-center gap-8 md:gap-12">
            <div className="hidden md:block h-8 w-px bg-pk-border" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif text-pk-dark leading-none">3-Day</span>
              <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-pk-gold mt-1">Quick Ship</span>
            </div>
            <div className="h-8 w-px bg-pk-border" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif text-pk-dark leading-none">Free</span>
              <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-pk-gold mt-1">Shipping over $5k</span>
            </div>
            <div className="h-8 w-px bg-pk-border" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif text-pk-dark leading-none">Best Price</span>
              <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-pk-gold mt-1">Guarantee</span>
            </div>
            <div className="h-8 w-px bg-pk-border" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif text-pk-dark leading-none">5-Year</span>
              <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-pk-gold mt-1">Warranty</span>
            </div>
            <div className="h-8 w-px bg-pk-border" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif text-pk-dark leading-none">30-Day</span>
              <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-pk-gold mt-1">Returns</span>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="px-4 md:px-8 py-12 md:py-[72px] bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold mb-3 md:mb-4 block">Collections</span>
          <h2 className="text-[32px] md:text-[48px] font-serif text-pk-dark leading-tight mb-8 md:mb-12">Our Signature Series</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Mallorca', image: mallorcaImg },
              { name: 'Shady', image: shadyImg },
              { name: 'Franco', image: francoImg },
              { name: 'Irena', image: irenaImg },
              { name: 'Newport', image: newportImg },
              { name: 'Aspen', image: aspenImg },
            ].map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative aspect-[3/4] overflow-hidden cursor-pointer group bg-pk-placeholder-bg"
              >
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-8 flex items-center justify-between text-white">
                  <span className="text-lg font-sans tracking-wide">{collection.name}</span>
                  <span className="text-2xl transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="px-4 md:px-8 py-12 md:py-[72px] bg-[#f9f9f7] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8 mb-10 md:mb-16">
            <div className="space-y-2 md:space-y-4">
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold">Featured</span>
              <h2 className="text-[32px] md:text-[48px] font-serif text-pk-dark leading-tight">Most Popular</h2>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-4">
              <div className="flex gap-2 md:mr-4">
                <button 
                  onClick={() => {
                    const el = document.getElementById('most-popular-scroll');
                    if (el) el.scrollBy({ left: -300, behavior: 'smooth' });
                  }}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-pk-border flex items-center justify-center text-pk-dark hover:bg-pk-dark hover:text-white transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('most-popular-scroll');
                    if (el) el.scrollBy({ left: 300, behavior: 'smooth' });
                  }}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-pk-border flex items-center justify-center text-pk-dark hover:bg-pk-dark hover:text-white transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              <Link to="/products" className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.12em] text-pk-dark border-b border-pk-dark pb-1 hover:text-pk-gold hover:border-pk-gold transition-all">
                View All
              </Link>
            </div>
          </div>
          
          <div 
            id="most-popular-scroll"
            className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory px-0 md:px-0"
          >
            {popularProducts.map((product, index) => (
              <ProductCard 
                key={product.name} 
                product={product} 
                index={index} 
                onQuickView={openQuickView}
              />
            ))}
          </div>
        </div>

        <QuickViewModal 
          product={selectedQuickViewProduct} 
          isOpen={isQuickViewOpen} 
          onClose={closeQuickView} 
        />
      </section>

      {/* Promotional Banner Section */}
      <section className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative w-full aspect-[21/9] min-h-[400px] bg-pk-dark overflow-hidden group cursor-pointer"
        >
          <img 
            src={shadyGrayCollectionImg} 
            className="absolute inset-0 w-full h-full object-cover opacity-60" 
            alt="Shady Collection - Slim White Shaker" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute bottom-0 left-0 p-6 md:p-16 lg:p-24 z-20 space-y-3 md:space-y-4">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white text-3xl md:text-6xl font-serif tracking-tight"
            >
              Shady Collection
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white/80 text-[11px] md:text-base font-medium tracking-widest uppercase"
            >
              Gray Shaker — Modern Minimalist Elegance
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="pt-2"
            >
              <Link to="/products" className="text-white text-[12px] md:text-sm font-medium tracking-widest uppercase underline underline-offset-8 hover:text-pk-gold transition-colors">
                Explore Collection
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Popular Sample Doors Section */}
      <section className="px-4 md:px-8 py-12 md:py-[72px] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold block">
              Popular Sample Doors
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { 
                name: "Franco Collection — White Shaker Sample Door", 
                link: "https://www.pkcabinet.com/products/franco-collection-white-shaker-sample-door",
                bgImage: whiteShakerBanner,
                doorImage: francoWhiteShakerDoor
              },
              { 
                name: "Mallorca Collection — Dolphin Gray Sample Door", 
                link: "https://www.pkcabinet.com/products/mallorca-collection-dolphin-gray-sample-door",
                bgImage: grayShakerbanner,
                doorImage: mallorcaDolphingrayDoor
              },
              { 
                name: "Newport Collection — Shoreline Sample Door", 
                link: "https://www.pkcabinet.com/products/newport-collection-shoreline-sample-door",
                bgImage: shorelineWoodgrainBanner,
                doorImage: newportShorelineDoor
              },
              { 
                name: "Aspen Collection — Stone Gray Sample Door", 
                link: "https://www.pkcabinet.com/products/aspen-collection-stone-gray-sample-door",
                bgImage: aspenStoneGrayBg,
                doorImage: aspenStoneGrayDoor
              },
              { 
                name: "Franco Collection — Slim Black Sample Door", 
                link: "https://www.pkcabinet.com/products/franco-collection-slim-black-sample-door",
                bgImage: slimBlack,
                doorImage: francoSlimBlackDoor
              },
              { 
                name: "Newport Collection — Natural Oak Sample Door", 
                link: "https://www.pkcabinet.com/products/newport-collection-natural-oak-sample-door",
                bgImage: naturalOakBanner,
                doorImage: newportNaturalOakDoor
              }
            ].map((door, index) => (
              <motion.div
                key={door.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <a 
                  href={door.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex flex-col items-center group cursor-pointer"
                >
                  <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-sm bg-pk-light">
                    <img 
                      src={door.bgImage} 
                      alt={`${door.name} background`}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      referrerPolicy="no-referrer"
                    />
                    <img 
                      src={door.doorImage} 
                      alt={door.name}
                      className="absolute inset-0 w-full h-full object-contain p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="text-[13px] font-normal text-pk-dark leading-tight group-hover:text-pk-gold transition-colors">
                      {door.name}
                    </h3>
                    <p className="text-[13px] text-pk-muted">
                      $25.00
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-8 py-12 md:py-[72px] bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold block">Testimonials</span>
              <h2 className="text-[32px] md:text-[48px] font-serif text-pk-dark leading-tight tracking-tight">A Few Words from <br className="hidden md:block" /> Happy Clients</h2>
              <p className="text-pk-gold italic font-medium tracking-wide text-sm md:text-base">Trusted by contractors and builders nationwide.</p>
            </div>
            <p className="text-pk-muted max-w-md leading-relaxed text-sm md:text-base">We pride ourselves on the relationships we build with our clients. Every project is a collaboration.</p>
            <Button className="flex items-center gap-3 group py-3 md:py-4 px-6 md:px-8 text-[12px] md:text-[13px]">
              Contact Us <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </motion.div>
          <TestimonialSlideshow />
        </div>
      </section>

      {/* Trade CTA Banner */}
      <section className="px-8 py-[72px] bg-white border-t border-pk-border">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-4 lg:max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold block">Trade Program</span>
            <h2 className="text-[48px] font-serif leading-tight">Are You A <span className="text-pk-gold">Designer or Contractor?</span></h2>
            <p className="text-pk-muted leading-relaxed">Join our exclusive trade programme to access professional bulk pricing, priority lead times, and a dedicated account manager.</p>
          </div>
          <div className="flex-shrink-0">
            <Button className="flex items-center gap-3 group">
              Apply for Trade Pricing <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="flex flex-col lg:flex-row w-full min-h-[800px] bg-white border-t border-pk-border">
        {/* Left Column: Image Placeholder */}
        <div className="lg:w-[45%] relative overflow-hidden min-h-[400px] lg:min-h-full">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
            alt="Modern Showroom Interior" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-pk-dark/10 mix-blend-multiply" />
        </div>

        {/* Right Column: Form */}
        <div className="lg:w-[55%] bg-white p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-2xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold">
                  Drop Us A Line
                </span>
                <h2 className="text-[48px] font-serif font-normal text-pk-dark leading-tight">
                  Get in Touch
                </h2>
                <p className="text-[15px] leading-[1.8] text-pk-muted max-w-lg">
                  Comments? Questions? We want to hear from you. Please fill out this contact form and a representative will be in touch shortly.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[18px] font-serif italic text-pk-dark">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook size={18} />, label: 'Facebook' },
                    { icon: <Linkedin size={18} />, label: 'LinkedIn' },
                    { icon: <Instagram size={18} />, label: 'Instagram' }
                  ].map((social) => (
                    <button 
                      key={social.label}
                      className="w-10 h-10 rounded-full bg-pk-dark text-white flex items-center justify-center hover:bg-pk-gold transition-colors duration-300"
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>

              <form className="space-y-6 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-pk-muted" size={16} />
                    <input 
                      type="text" 
                      placeholder="Name *" 
                      required
                      className="w-full pl-12 pr-4 py-3 border border-pk-border focus:border-pk-gold outline-none transition-colors text-[14px] text-pk-dark"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-pk-muted" size={16} />
                    <input 
                      type="email" 
                      placeholder="Email *" 
                      required
                      className="w-full pl-12 pr-4 py-3 border border-pk-border focus:border-pk-gold outline-none transition-colors text-[14px] text-pk-dark"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-pk-muted" size={16} />
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    className="w-full pl-12 pr-4 py-3 border border-pk-border focus:border-pk-gold outline-none transition-colors text-[14px] text-pk-dark"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="City" 
                    className="w-full px-4 py-3 border border-pk-border focus:border-pk-gold outline-none transition-colors text-[14px] text-pk-dark"
                  />
                  <input 
                    type="text" 
                    placeholder="State" 
                    className="w-full px-4 py-3 border border-pk-border focus:border-pk-gold outline-none transition-colors text-[14px] text-pk-dark"
                  />
                </div>

                <textarea 
                  placeholder="Send Us A Message *" 
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-pk-border focus:border-pk-gold outline-none transition-colors text-[14px] text-pk-dark resize-none"
                />

                <Button className="w-full flex items-center justify-center gap-2">
                  Submit <ChevronRight size={16} />
                </Button>
                
                <p className="text-[11px] text-pk-muted italic">
                  <span className="text-red-500">*</span> Required fields
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar Icons */}
      <section className="bg-white border-y border-pk-border py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 divide-x divide-pk-border">
          <div className="flex flex-col items-center justify-center text-center px-4 space-y-2">
            <Box size={24} strokeWidth={1} className="text-pk-dark" />
            <p className="text-[14px] text-pk-dark font-medium">3-Day Quick Ship</p>
            <p className="text-[12px] text-pk-gold uppercase tracking-wider">In stock & ready</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4 space-y-2">
            <ShoppingCart size={24} strokeWidth={1} className="text-pk-dark" />
            <p className="text-[14px] text-pk-dark font-medium">Free Shipping</p>
            <p className="text-[12px] text-pk-gold uppercase tracking-wider">On orders over $5,000</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4 space-y-2">
            <Star size={24} strokeWidth={1} className="text-pk-dark" />
            <p className="text-[14px] text-pk-dark font-medium">Best Price Guarantee</p>
            <p className="text-[12px] text-pk-gold uppercase tracking-wider">We'll match + 10% off</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4 space-y-2">
            <ShieldCheck size={24} strokeWidth={1} className="text-pk-dark" />
            <p className="text-[14px] text-pk-dark font-medium">5-Year Warranty</p>
            <p className="text-[12px] text-pk-gold uppercase tracking-wider">Comprehensive coverage</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4 space-y-2">
            <User size={24} strokeWidth={1} className="text-pk-dark" />
            <p className="text-[14px] text-pk-dark font-medium">30-Day Returns</p>
            <p className="text-[12px] text-pk-gold uppercase tracking-wider">Hassle-free policy</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
