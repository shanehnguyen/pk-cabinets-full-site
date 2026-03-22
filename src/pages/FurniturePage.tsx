import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';

// Image constants
const mallorcaWhite = '/mallorca-white.webp';
const mallorcaGray = '/mallorca-gray.webp';
const shadyWhite = '/shady-white.webp';
const shadyGray = '/shady-gray.webp';
const shadyNatural = '/shady-natural.webp';
const francoWhite = '/franco-white.webp';
const francoGray = '/franco-gray.webp';
const francoOak = '/franco-oak.webp';
const francoSlimWhite = '/franco-slim-white.webp';
const francoBlack = '/franco-black.webp';
const francoSlimOak = '/franco-slim-oak.webp';
const irenaWhite = '/irena-white.webp';
const irenaGray = '/irena-gray.webp';
const irenaOlive = '/irena-olive.webp';
const irenaGlossyWhite = '/irena-glossy-white.webp';
const irenaWoodgrains = '/irena-woodgrains.webp';
const newportOak = '/newport-oak.webp';
const newportUmbria = '/newport-umbria.webp';
const newportShoreline = '/newport-shoreline.webp';
const aspenGray = '/aspen-gray.webp';
const aspenEmerald = '/aspen-emerald.webp';
const aspenRaven = '/aspen-raven.webp';

interface Variant {
  name: string;
  image?: string;
}

interface Collection {
  name: string;
  variants: Variant[];
  layout: string;
}

const FurniturePage: React.FC = () => {
  const collections: Collection[] = [
    {
      name: 'Mallorca',
      layout: 'grid-cols-1 md:grid-cols-2',
      variants: [
        { name: 'White', image: mallorcaWhite },
        { name: 'Dolphin Gray', image: mallorcaGray },
      ]
    },
    {
      name: 'Shady',
      layout: 'grid-cols-1 md:grid-cols-3',
      variants: [
        { name: 'White', image: shadyWhite },
        { name: 'Gray', image: shadyGray },
        { name: 'Neutral', image: shadyNatural },
      ]
    },
    {
      name: 'Franco',
      layout: 'custom-franco',
      variants: [
        { name: 'White', image: francoWhite },
        { name: 'Gray', image: francoGray },
        { name: 'Oak', image: francoOak },
        { name: 'Slim White', image: francoSlimWhite },
        { name: 'Slim Black', image: francoBlack },
        { name: 'Slim Oak', image: francoSlimOak },
      ]
    },
    {
      name: 'Irena',
      layout: 'custom-irena',
      variants: [
        { name: 'White', image: irenaWhite },
        { name: 'Gray', image: irenaGray },
        { name: 'Olive', image: irenaOlive },
        { name: 'Glossy White', image: irenaGlossyWhite },
        { name: 'Woodgrains', image: irenaWoodgrains },
      ]
    },
    {
      name: 'Newport',
      layout: 'grid-cols-1 md:grid-cols-3',
      variants: [
        { name: 'Natural', image: newportOak },
        { name: 'Umbria Elm', image: newportUmbria },
        { name: 'Shoreline', image: newportShoreline },
      ]
    },
    {
      name: 'Aspen',
      layout: 'grid-cols-1 md:grid-cols-3',
      variants: [
        { name: 'Stone Gray', image: aspenGray },
        { name: 'Emerald', image: aspenEmerald },
        { name: 'Raven', image: aspenRaven },
      ]
    }
  ];

  const VariantCard: React.FC<{ variant: Variant; collectionName: string }> = ({ variant, collectionName }) => (
    <Link 
      to={`/products?collection=${encodeURIComponent(collectionName)}&color=${encodeURIComponent(variant.name)}`}
      className="block group"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="relative aspect-[8/5] overflow-hidden bg-pk-beige">
          {variant.image ? (
            <img 
              src={variant.image} 
              alt={variant.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="absolute inset-0 bg-[#eeebe6]" />
          )}
          <ImagePlaceholder aspectRatio="aspect-full" className="opacity-10 mix-blend-overlay" />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[14px] font-medium text-pk-dark group-hover:text-pk-gold transition-colors">{variant.name}</span>
          <span className="text-[20px] text-pk-gold transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </motion.div>
    </Link>
  );

  return (
    <Layout>
      <PageHeader 
        title="Collections" 
        breadcrumb={{ label: 'Collections', path: '/collections' }}
      />
      
      <main className="bg-white px-4 md:px-8 py-12 md:py-[72px]">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          {collections.map((collection) => (
            <section key={collection.name} className="space-y-8">
              <div className="space-y-4">
                <Link 
                  to={`/products?collection=${encodeURIComponent(collection.name)}`}
                  className="inline-block group"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold group-hover:text-pk-dark transition-colors">
                    {collection.name}
                  </span>
                </Link>
                <hr className="border-t border-pk-border" />
              </div>

              {collection.layout === 'custom-franco' ? (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {collection.variants.slice(0, 2).map(v => <VariantCard key={v.name} variant={v} collectionName={collection.name} />)}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {collection.variants.slice(2).map(v => <VariantCard key={v.name} variant={v} collectionName={collection.name} />)}
                  </div>
                </div>
              ) : collection.layout === 'custom-irena' ? (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {collection.variants.slice(0, 2).map(v => <VariantCard key={v.name} variant={v} collectionName={collection.name} />)}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {collection.variants.slice(2).map(v => <VariantCard key={v.name} variant={v} collectionName={collection.name} />)}
                  </div>
                </div>
              ) : (
                <div className={`grid gap-8 ${collection.layout}`}>
                  {collection.variants.map(v => <VariantCard key={v.name} variant={v} collectionName={collection.name} />)}
                </div>
              )}
            </section>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default FurniturePage;
