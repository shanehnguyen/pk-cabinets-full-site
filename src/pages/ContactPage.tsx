import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ChevronRight, User } from 'lucide-react';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import ImagePlaceholder from '../components/ImagePlaceholder';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        breadcrumb={{ label: 'Contact', path: '/contact' }}
      />

      {/* Section 1 — Contact Form */}
      <section className="flex flex-col lg:flex-row w-full min-h-[800px] bg-white">
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
        <div className="lg:w-[55%] bg-white p-4 md:p-12 flex flex-col justify-center">
          <div className="max-w-2xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold">
                  Drop Us A Line
                </span>
                <h2 className="text-[32px] md:text-[48px] font-serif font-normal text-pk-dark leading-tight">
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

      {/* Section 2 — Location */}
      <section className="bg-white py-[60px] md:py-[72px] px-4 md:px-8 border-t border-pk-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold">
                Our Location
              </span>
              <h2 className="text-[32px] md:text-[48px] font-serif font-normal text-pk-dark leading-tight">
                Distribution Center
              </h2>
            </div>
            <p className="text-[15px] text-pk-muted md:text-right max-w-sm leading-relaxed">
              If you'd like to get in touch, please refer to the contact information below.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[400px] border border-pk-border p-10 space-y-8"
          >
            <h3 className="text-[20px] font-serif font-normal text-pk-dark">
              PK Cabinet — La Mirada
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-pk-gold mt-1" size={18} />
                <p className="text-[15px] text-pk-muted leading-relaxed">
                  14301 Gannet St.,<br />
                  La Mirada CA 90638
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="text-pk-gold" size={18} />
                <p className="text-[15px] text-pk-muted">
                  562-625-6101
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="text-pk-gold" size={18} />
                <p className="text-[15px] text-pk-muted">
                  Support@pkcabinet.com
                </p>
              </div>
            </div>

            <hr className="border-t border-pk-border w-full pt-2" />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
