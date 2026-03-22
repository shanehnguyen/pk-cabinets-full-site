import React from 'react';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';

// Image constants
const aboutUs2 = '/images/about-us2.webp';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="About Us" 
        breadcrumb={{ label: 'About', path: '/about' }}
      />

      {/* Pull-quote Section */}
      <section className="bg-white py-[60px] md:py-[80px] px-4 md:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] w-full"
        >
          <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold mb-6">
            Our Mission.
          </span>
          <p className="text-[24px] md:text-[30px] font-serif italic font-normal text-pk-dark leading-[1.6]">
            "Operating through a factory direct network, PK Cabinet lets you purchase high-quality cabinetry directly from the factory — eliminating the middleman and the extra costs."
          </p>
        </motion.div>
      </section>

      {/* "Our Craft" Split Section */}
      <section className="bg-white py-[60px] md:py-[72px] px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left Column: Text (45%) */}
          <div className="lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-serif italic text-pk-gold block tracking-[0.12em] uppercase">
                  Our Craft
                </span>
                <h2 className="text-[28px] md:text-[34px] font-serif font-normal text-pk-dark leading-[1.2]">
                  The Perfect Combination of Quality and Value
                </h2>
              </div>
              <p className="text-[15px] leading-[1.8] text-pk-muted">
                Every piece of cabinetry is carefully crafted to ensure exceptional quality standards. We pay attention to every detail and are committed to providing durable, beautiful solutions for your home. We're especially known for our signature Shaker style — acclaimed for its simplicity, timeless appeal, and versatility.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Image (55%) */}
          <div className="lg:w-[55%] w-full flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <img 
                src={aboutUs2} 
                alt="Cabinet Craftsmanship" 
                className="w-full aspect-[3/2] object-cover rounded-sm shadow-lg"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Circled-word Section */}
      <section className="bg-white py-[60px] md:py-[80px] px-4 md:px-8 flex flex-col items-center text-center">
        <div className="max-w-4xl w-full space-y-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[36px] md:text-[56px] font-serif font-bold text-pk-dark leading-[1.1] tracking-tight"
          >
            The heart of <br /> 
            every 
            <span className="ml-2">
              cabinet.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-pk-muted leading-[1.8] text-[15px] max-w-[520px] mx-auto"
          >
            At PK Cabinet, we believe your home deserves furniture as enduring as the memories made inside it. From design to delivery, we handle every step so you don't have to.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#f9f9f7] py-[60px] md:py-[80px] px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                label: "Quality & Value", 
                body: "Every cabinet is built to exceptional standards. We pay attention to every detail — durable, beautiful, and built to last." 
              },
              { 
                label: "One-Stop Solutions", 
                body: "From design to installation, we offer comprehensive kitchen and bathroom cabinet services. Professional support at every step." 
              },
              { 
                label: "Fast & Affordable", 
                body: "Efficient, fast, and cost-effective. Whether a home renovation or commercial project, we help you save time and money." 
              }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="space-y-4"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold block">
                  {item.label}
                </span>
                <p className="text-pk-muted text-[15px] leading-[1.6]">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white px-4 md:px-8 py-[60px] md:py-[72px]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold">
              The People Behind Our Cabinetry
            </span>
          </div>
          <hr className="border-t border-pk-border w-full mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Arthur", title: "Founder & Master Craftsman" },
              { name: "Elena", title: "Creative Director" },
              { name: "Julian", title: "Head of Workshop" },
              { name: "Maya", title: "Lead Designer" },
              { name: "Carlos", title: "Senior Craftsman" },
              { name: "Lisa", title: "Customer Experience Lead" },
            ].map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col"
              >
                <div className="mb-6 overflow-hidden">
                  <ImagePlaceholder aspectRatio="aspect-square" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[22px] font-serif italic text-pk-dark">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold">
                    {member.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story & Commitment Section */}
      <section className="bg-white py-[60px] md:py-[80px] px-4 md:px-8 border-t border-pk-border">
        <div className="max-w-3xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-[16px] leading-[1.8] text-pk-muted">
              At PK Cabinet, we don't just rely on technical and product strengths — we have a passionate and creative team. Our designers translate your ideas into specific design solutions. Our craftsmen handcraft every cabinet to ensure flawless quality. And our customer service team is always on hand to ensure your renovation experience is smooth and worry-free.
            </p>
            <p className="text-[16px] leading-[1.8] text-pk-muted font-medium italic">
              As our style options continue to expand, PK Cabinet maintains our core commitment to providing fast, cost-effective renovations without compromising on quality. We are more than just a cabinet company — we are committed to creating functional and beautiful living spaces that give you confidence on every home renovation journey.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
