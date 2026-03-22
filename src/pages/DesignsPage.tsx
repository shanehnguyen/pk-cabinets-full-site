import React, { useState } from 'react';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { ClipboardList, Ruler, Package, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// Image constants
const shadyImg = '/images/shady.png';
const mallorcaImg = '/images/mallorca.png';
const francoImg = '/images/franco.png';
const irenaImg = '/images/irena.png';
const newportImg = '/images/newport.png';
const aspenImg = '/images/aspen.png';

const DesignsPage: React.FC = () => {
  const [projectType, setProjectType] = useState<'remodel' | 'new-construction' | null>(null);
  const [decidedStyle, setDecidedStyle] = useState<'yes' | 'no' | null>(null);

  const designs = [
    { label: "Shady White Shaker", url: shadyImg },
    { label: "Mallorca Dolphin Gray", url: mallorcaImg },
    { label: "Franco Slim Black", url: francoImg },
    { label: "Irena Collection", url: irenaImg },
    { label: "Newport Shoreline", url: newportImg },
    { label: "Aspen Stone Gray", url: aspenImg },
  ];

  const steps = [
    {
      icon: <ClipboardList size={22} strokeWidth={1.5} className="text-white" />,
      title: "Step 1: Fill Out the Form",
      description: "Share your kitchen dimensions, style preferences, and budget with our design team."
    },
    {
      icon: <Ruler size={22} strokeWidth={1.5} className="text-white" />,
      title: "Step 2: Receive Your Free Design",
      description: "Our expert designers craft a custom cabinet layout tailored specifically to your space."
    },
    {
      icon: <Package size={22} strokeWidth={1.5} className="text-white" />,
      title: "Step 3: Order & Install",
      description: "Approve your design, place your order, and we'll ship your cabinets directly to your door."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Free Design Service" 
        breadcrumb={{ label: 'Design', path: '/designs' }}
      />

      {/* Gallery Section */}
      <section className="px-4 md:px-8 py-[60px] md:py-[100px] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {designs.map((design, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="space-y-6"
              >
                <div className="aspect-square overflow-hidden bg-pk-placeholder-bg">
                  <img 
                    src={design.url} 
                    alt={design.label}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[15px] text-pk-dark font-sans leading-relaxed">{design.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="px-4 md:px-8 py-[60px] md:py-[100px] bg-white border-y border-pk-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-start gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-pk-dark rounded-lg flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-[18px] font-sans font-bold text-pk-dark tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-pk-muted leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Form Section */}
      <section className="px-4 md:px-8 py-[60px] md:py-[100px] bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 md:space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-[32px] md:text-[42px] font-serif text-pk-dark leading-tight">Start Your Free Design</h2>
              <p className="text-pk-muted text-[14px] md:text-[15px]">Please fill out the form below and a designer will reach out to you shortly.</p>
            </div>

            <form className="space-y-8">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">First Name *</label>
                  <input 
                    type="text" 
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 border border-pk-border focus:border-pk-gold outline-none transition-colors text-[14px] text-pk-dark"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Last Name *</label>
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 border border-pk-border focus:border-pk-gold outline-none transition-colors text-[14px] text-pk-dark"
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Email *</label>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 border border-pk-border focus:border-pk-gold outline-none transition-colors text-[14px] text-pk-dark"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Phone Number *</label>
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 border border-pk-border focus:border-pk-gold outline-none transition-colors text-[14px] text-pk-dark"
                  />
                </div>
              </div>

              {/* Project Type Toggle */}
              <div className="space-y-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">What type of project do you have?</p>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={() => setProjectType('remodel')}
                    className={`py-4 border ${projectType === 'remodel' ? 'border-pk-dark bg-pk-dark text-white' : 'border-pk-border text-pk-muted hover:border-pk-dark'} transition-all text-[12px] font-bold uppercase tracking-widest`}
                  >
                    Remodel
                  </button>
                  <button 
                    type="button"
                    onClick={() => setProjectType('new-construction')}
                    className={`py-4 border ${projectType === 'new-construction' ? 'border-pk-dark bg-pk-dark text-white' : 'border-pk-border text-pk-muted hover:border-pk-dark'} transition-all text-[12px] font-bold uppercase tracking-widest`}
                  >
                    New Construction
                  </button>
                </div>
              </div>

              {/* Decided Style Toggle */}
              <div className="space-y-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Have you decided on a cabinet door style?</p>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={() => setDecidedStyle('yes')}
                    className={`py-4 border ${decidedStyle === 'yes' ? 'border-pk-dark bg-pk-dark text-white' : 'border-pk-border text-pk-muted hover:border-pk-dark'} transition-all text-[12px] font-bold uppercase tracking-widest`}
                  >
                    Yes
                  </button>
                  <button 
                    type="button"
                    onClick={() => setDecidedStyle('no')}
                    className={`py-4 border ${decidedStyle === 'no' ? 'border-pk-dark bg-pk-dark text-white' : 'border-pk-border text-pk-muted hover:border-pk-dark'} transition-all text-[12px] font-bold uppercase tracking-widest`}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Textarea */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Tell us more about your space</label>
                <textarea 
                  placeholder="Ceiling height, appliance sizes, or any specific requests..."
                  rows={5}
                  className="w-full px-4 py-3 border border-pk-border focus:border-pk-gold outline-none transition-colors text-[14px] text-pk-dark resize-none"
                />
              </div>

              {/* Dropdowns */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">How did you hear about us?</label>
                  <div className="relative">
                    <select 
                      defaultValue=""
                      className="w-full px-4 py-3 border border-pk-border focus:border-pk-gold outline-none transition-colors text-[14px] text-pk-dark appearance-none bg-white"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="google">Google Search</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Word of Mouth</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-pk-muted pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Best way to contact you?</label>
                  <div className="relative">
                    <select 
                      defaultValue=""
                      className="w-full px-4 py-3 border border-pk-border focus:border-pk-gold outline-none transition-colors text-[14px] text-pk-dark appearance-none bg-white"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="text">Text Message</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-pk-muted pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* SMS Consent */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="sms-consent" className="mt-1 accent-pk-dark" />
                  <label htmlFor="sms-consent" className="text-[12px] text-pk-muted leading-relaxed">
                    I agree to receive SMS messages from PK Cabinet for project updates and design consultations. Message and data rates may apply. Reply STOP to opt out. View our <Link to="/privacy" className="underline hover:text-pk-dark transition-colors">Privacy Policy</Link> and <Link to="/terms" className="underline hover:text-pk-dark transition-colors">Terms of Service</Link>.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full py-5 bg-pk-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-[13px] hover:bg-pk-gold transition-colors duration-300 shadow-lg"
              >
                Send to My Designer
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="bg-pk-dark py-[60px] md:py-[100px] px-4 md:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-[32px] md:text-[42px] font-serif italic">Need more inspiration?</h2>
          <p className="text-base md:text-[18px] text-white/70 leading-relaxed">
            Explore our full collection of premium cabinetry and find the perfect fit for your home.
          </p>
          <div className="pt-4">
            <Link 
              to="/products" 
              className="inline-block px-10 py-4 bg-white text-pk-dark font-sans font-bold uppercase tracking-widest text-[12px] hover:bg-pk-gold hover:text-white transition-colors duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DesignsPage;
