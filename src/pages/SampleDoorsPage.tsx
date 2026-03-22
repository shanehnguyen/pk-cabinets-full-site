import React from 'react';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Button from '../components/Button';

const SampleDoorsPage: React.FC = () => {
  const doorStyles = [
    { name: 'Classic Shaker White', material: 'Solid Oak', price: '25' },
    { name: 'Classic Shaker Gray', material: 'Solid Oak', price: '25' },
    { name: 'Modern Slab Walnut', material: 'Walnut Veneer', price: '30' },
    { name: 'Modern Slab Oak', material: 'Oak Veneer', price: '30' },
    { name: 'Traditional Raised Maple', material: 'Maple', price: '28' },
    { name: 'Minimalist White', material: 'Painted MDF', price: '22' },
    { name: 'Minimalist Black', material: 'Painted MDF', price: '22' },
    { name: 'Industrial Steel', material: 'Steel Frame', price: '45' },
    { name: 'Rustic Pine', material: 'Pine', price: '35' },
    { name: 'Slim Shaker White', material: 'Birch', price: '26' },
    { name: 'Slim Shaker Oak', material: 'Birch', price: '26' },
    { name: 'Slim Shaker Black', material: 'Birch', price: '26' },
    { name: 'Mallorca White', material: 'Solid Wood', price: '28' },
    { name: 'Mallorca Dolphin', material: 'Solid Wood', price: '28' },
    { name: 'Shady Gray', material: 'Glass & Wood', price: '32' },
    { name: 'Shady Neutral', material: 'Glass & Wood', price: '32' },
    { name: 'Franco Oak', material: 'Solid Oak', price: '35' },
    { name: 'Newport Natural', material: 'Elm', price: '29' },
    { name: 'Newport Umbria', material: 'Elm', price: '29' },
    { name: 'Aspen Stone', material: 'Textured', price: '27' },
    { name: 'Aspen Emerald', material: 'Textured', price: '27' },
    { name: 'Aspen Raven', material: 'Textured', price: '27' },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Sample Doors" 
        breadcrumb={{ label: 'Sample Doors', path: '/sample-doors' }}
      />
      
      <section className="px-8 py-[72px] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doorStyles.map((door, index) => (
              <motion.div 
                key={door.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <ImagePlaceholder aspectRatio="aspect-square" className="mb-6" />
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h2 className="text-[15px] font-medium text-pk-dark group-hover:text-pk-gold transition-colors">{door.name}</h2>
                    <span className="text-[14px] text-pk-dark font-medium">${door.price}</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-pk-gold">{door.material}</p>
                  <div className="pt-2">
                    <Button className="w-full !py-2 text-[11px]">Order Sample</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-[72px] bg-white border-t border-pk-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold block">Try Before You Buy</span>
              <h2 className="text-[48px] font-serif font-normal text-pk-dark leading-tight">
                The Sample Program
              </h2>
              <div className="space-y-6 text-[15px] text-pk-muted leading-[1.8]">
                <p>
                  Choosing the right finish for your kitchen is a big decision. That's why we offer a comprehensive sample program that brings our workshop to your doorstep.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-pk-gold font-bold">01.</span>
                    <span>Order up to 3 sample doors to compare different styles and materials.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-pk-gold font-bold">02.</span>
                    <span>The cost of your samples is fully refundable when you place a full kitchen order.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-pk-gold font-bold">03.</span>
                    <span>Free shipping on all sample orders within the continental US.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Button>Learn More About Our Process</Button>
              </div>
            </div>
            <div className="relative">
              <ImagePlaceholder aspectRatio="aspect-square" />
              <div className="absolute -bottom-8 -left-8 bg-pk-dark p-8 hidden md:block">
                <p className="text-white text-[24px] font-serif italic">"Seeing the samples in our own light made all the difference."</p>
                <p className="text-pk-gold text-[11px] font-bold uppercase tracking-widest mt-4">— Sarah M., Los Angeles</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SampleDoorsPage;
