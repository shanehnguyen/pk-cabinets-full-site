import React, { useState, useMemo, useEffect } from 'react';
import { X, ChevronDown, Plus, Minus, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Button from '../components/Button';

import { PRODUCTS, Product } from '../data/products';

const COLOR_MAP: Record<string, string> = {
  "White": "#FFFFFF",
  "Dolphin Gray": "#A9AFB2",
  "Gray Slim": "#808080",
  "Slim Oak": "#E9E4D4",
  "Slim White": "#F5F5F0",
};

const PRODUCTS_DATA = PRODUCTS;

const COLLECTIONS = Array.from(new Set(PRODUCTS_DATA.map(p => p.collection))).sort();
const COLORS = Array.from(new Set(PRODUCTS_DATA.map(p => p.color))).sort();
const PRICE_RANGES = [
  { label: "Under $600", min: 0, max: 600 },
  { label: "$600–$1,200", min: 600, max: 1200 },
  { label: "$1,200–$1,600", min: 1200, max: 1600 },
  { label: "Over $1,600", min: 1600, max: Infinity },
];

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  const initialCollections = useMemo(() => searchParams.getAll('collection'), [searchParams]);
  const initialColors = useMemo(() => searchParams.getAll('color'), [searchParams]);

  const [selectedCollections, setSelectedCollections] = useState<string[]>(initialCollections);
  const [selectedColors, setSelectedColors] = useState<string[]>(initialColors);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Featured");
  const [visibleCount, setVisibleCount] = useState(12);

  // Sync state with URL params on mount or when params change
  useEffect(() => {
    setSelectedCollections(searchParams.getAll('collection'));
    setSelectedColors(searchParams.getAll('color'));
  }, [searchParams]);

  useEffect(() => {
    setVisibleCount(12);
  }, [selectedCollections, selectedColors, selectedPriceRanges, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS_DATA];

    if (selectedCollections.length > 0) {
      result = result.filter(p => selectedCollections.includes(p.collection));
    }

    if (selectedColors.length > 0) {
      result = result.filter(p => selectedColors.includes(p.color));
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter(p => {
        return selectedPriceRanges.some(rangeLabel => {
          const range = PRICE_RANGES.find(r => r.label === rangeLabel);
          if (!range) return false;
          return p.price >= range.min && p.price < range.max;
        });
      });
    }

    switch (sortBy) {
      case "Price: Low–High":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Price: High–Low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "Newest":
        // Since we don't have createdAt in new data, we'll just keep original order or sort by id
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCollections, selectedColors, selectedPriceRanges, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  // Calculate counts for each filter option
  const filterCounts = useMemo(() => {
    const counts = {
      collections: {} as Record<string, number>,
      colors: {} as Record<string, number>,
      priceRanges: {} as Record<string, number>,
    };

    COLLECTIONS.forEach(c => {
      counts.collections[c] = PRODUCTS_DATA.filter(p => {
        const matchesColor = selectedColors.length === 0 || selectedColors.includes(p.color);
        const matchesPrice = selectedPriceRanges.length === 0 || selectedPriceRanges.some(rangeLabel => {
          const range = PRICE_RANGES.find(r => r.label === rangeLabel);
          return range ? (p.price >= range.min && p.price < range.max) : false;
        });
        return p.collection === c && matchesColor && matchesPrice;
      }).length;
    });

    COLORS.forEach(c => {
      counts.colors[c] = PRODUCTS_DATA.filter(p => {
        const matchesCollection = selectedCollections.length === 0 || selectedCollections.includes(p.collection);
        const matchesPrice = selectedPriceRanges.length === 0 || selectedPriceRanges.some(rangeLabel => {
          const range = PRICE_RANGES.find(r => r.label === rangeLabel);
          return range ? (p.price >= range.min && p.price < range.max) : false;
        });
        return p.color === c && matchesCollection && matchesPrice;
      }).length;
    });

    PRICE_RANGES.forEach(r => {
      counts.priceRanges[r.label] = PRODUCTS_DATA.filter(p => {
        const matchesCollection = selectedCollections.length === 0 || selectedCollections.includes(p.collection);
        const matchesColor = selectedColors.length === 0 || selectedColors.includes(p.color);
        return p.price >= r.min && p.price < r.max && matchesCollection && matchesColor;
      }).length;
    });

    return counts;
  }, [selectedCollections, selectedColors, selectedPriceRanges]);

  const toggleCollection = (collection: string) => {
    const next = selectedCollections.includes(collection) 
      ? selectedCollections.filter(c => c !== collection) 
      : [...selectedCollections, collection];
    
    setSelectedCollections(next);
    
    // Update URL
    const params = new URLSearchParams(searchParams);
    params.delete('collection');
    next.forEach(c => params.append('collection', c));
    setSearchParams(params);
  };

  const toggleColor = (color: string) => {
    const next = selectedColors.includes(color) 
      ? selectedColors.filter(c => c !== color) 
      : [...selectedColors, color];
    
    setSelectedColors(next);

    // Update URL
    const params = new URLSearchParams(searchParams);
    params.delete('color');
    next.forEach(c => params.append('color', c));
    setSearchParams(params);
  };

  const togglePriceRange = (range: string) => {
    setSelectedPriceRanges(prev => 
      prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
    );
  };

  const clearAllFilters = () => {
    setSelectedCollections([]);
    setSelectedColors([]);
    setSelectedPriceRanges([]);
    setSearchParams(new URLSearchParams());
  };

  return (
    <Layout>
      <PageHeader 
        title="All Products" 
        breadcrumb={{ label: 'Products', path: '/products' }}
      />
      
      <main className="max-w-7xl mx-auto px-8 py-[72px] w-full bg-white">
        {/* Toolbar */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.04em] text-pk-dark hover:text-pk-gold transition-colors"
              >
                {showFilters ? <Minus size={16} /> : <Plus size={16} />}
                {showFilters ? "Hide filters" : "Show filters"}
              </button>
              <span className="text-[11px] uppercase tracking-[0.12em] text-pk-gold font-bold">
                {filteredProducts.length} products
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.12em] text-pk-muted font-bold">Sort by:</span>
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-pk-border px-4 py-2 pr-10 text-[13px] font-medium focus:outline-none cursor-pointer text-pk-dark focus:border-pk-gold transition-colors min-w-[160px]"
                >
                  <option>Featured</option>
                  <option>Price: Low–High</option>
                  <option>Price: High–Low</option>
                  <option>Newest</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-pk-gold" />
              </div>
            </div>
          </div>

          {/* Active Filter Chips */}
          <AnimatePresence>
            {(selectedCollections.length > 0 || selectedColors.length > 0 || selectedPriceRanges.length > 0) && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-wrap gap-2"
              >
                {selectedCollections.map(c => (
                  <button 
                    key={c}
                    onClick={() => toggleCollection(c)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-pk-border/30 text-[11px] uppercase tracking-[0.04em] font-medium text-pk-dark hover:bg-pk-border/50 transition-colors"
                  >
                    {c} <X size={12} />
                  </button>
                ))}
                {selectedColors.map(c => (
                  <button 
                    key={c}
                    onClick={() => toggleColor(c)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-pk-border/30 text-[11px] uppercase tracking-[0.04em] font-medium text-pk-dark hover:bg-pk-border/50 transition-colors"
                  >
                    {c} <X size={12} />
                  </button>
                ))}
                {selectedPriceRanges.map(r => (
                  <button 
                    key={r}
                    onClick={() => togglePriceRange(r)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-pk-border/30 text-[11px] uppercase tracking-[0.04em] font-medium text-pk-dark hover:bg-pk-border/50 transition-colors"
                  >
                    {r} <X size={12} />
                  </button>
                ))}
                <button 
                  onClick={clearAllFilters}
                  className="text-[11px] uppercase tracking-[0.12em] font-bold text-pk-gold hover:text-pk-dark transition-colors ml-2"
                >
                  Clear all
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Filter Sidebar */}
          <AnimatePresence>
            {showFilters && (
              <motion.aside 
                initial={{ width: 0, opacity: 0, x: -20 }}
                animate={{ width: 240, opacity: 1, x: 0 }}
                exit={{ width: 0, opacity: 0, x: -20 }}
                className="flex-shrink-0 overflow-hidden"
              >
                <div className="w-60 space-y-10">
                  <div className="space-y-6">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-dark">Collection</h3>
                    <div className="space-y-3">
                      {COLLECTIONS.map(c => (
                        <label key={c} className="flex items-center justify-between cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <input 
                              type="checkbox" 
                              checked={selectedCollections.includes(c)}
                              onChange={() => toggleCollection(c)}
                              className="w-4 h-4 border-pk-border rounded-none checked:bg-pk-gold transition-all cursor-pointer accent-pk-gold"
                            />
                            <span className="text-[13px] text-pk-muted group-hover:text-pk-dark transition-colors">{c}</span>
                          </div>
                          <span className="text-[11px] text-pk-muted/60 font-medium">({filterCounts.collections[c]})</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-dark">Color</h3>
                    <div className="space-y-3">
                      {COLORS.map(c => (
                        <label key={c} className="flex items-center justify-between cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <input 
                              type="checkbox" 
                              checked={selectedColors.includes(c)}
                              onChange={() => toggleColor(c)}
                              className="w-4 h-4 border-pk-border rounded-none checked:bg-pk-gold transition-all cursor-pointer accent-pk-gold"
                            />
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-3 h-3 rounded-full border border-pk-border"
                                style={{ backgroundColor: COLOR_MAP[c] || '#ccc' }}
                              />
                              <span className="text-[13px] text-pk-muted group-hover:text-pk-dark transition-colors">{c}</span>
                            </div>
                          </div>
                          <span className="text-[11px] text-pk-muted/60 font-medium">({filterCounts.colors[c]})</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-dark">Price</h3>
                    <div className="space-y-3">
                      {PRICE_RANGES.map(r => (
                        <label key={r.label} className="flex items-center justify-between cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <input 
                              type="checkbox" 
                              checked={selectedPriceRanges.includes(r.label)}
                              onChange={() => togglePriceRange(r.label)}
                              className="w-4 h-4 border-pk-border rounded-none checked:bg-pk-gold transition-all cursor-pointer accent-pk-gold"
                            />
                            <span className="text-[13px] text-pk-muted group-hover:text-pk-dark transition-colors">{r.label}</span>
                          </div>
                          <span className="text-[11px] text-pk-muted/60 font-medium">({filterCounts.priceRanges[r.label]})</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className={`grid gap-x-8 gap-y-16 ${showFilters ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}>
              {displayedProducts.map((product, index) => (
                <motion.div 
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index % 4 * 0.1, duration: 0.5 }}
                  className="group cursor-pointer"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-square mb-6 overflow-hidden bg-[#ffffff]">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-[15px] font-medium text-pk-dark group-hover:text-pk-gold transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 text-[12px]">
                        <div className="flex items-center text-pk-gold">
                          <Star size={12} fill="currentColor" />
                          <span className="font-medium ml-1 text-pk-dark">5.0/5</span>
                        </div>
                        <span className="text-pk-border">|</span>
                        <span className="text-pk-muted">3 reviews</span>
                        <span className="text-pk-border">|</span>
                        <span className="text-pk-muted">{product.subtitle}</span>
                      </div>
                      <span className="text-[15px] font-medium text-pk-dark block pt-0.5">
                        ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            {visibleCount < filteredProducts.length && (
              <div className="mt-24 flex justify-center">
                <Button onClick={() => setVisibleCount(prev => prev + 12)}>
                  Load more
                </Button>
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="py-32 text-center space-y-4">
                <p className="text-pk-muted text-[15px]">No products found matching your filters.</p>
                <button 
                  onClick={clearAllFilters}
                  className="text-pk-gold underline underline-offset-4 text-[13px] font-medium uppercase tracking-[0.04em] hover:text-pk-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProductsPage;
