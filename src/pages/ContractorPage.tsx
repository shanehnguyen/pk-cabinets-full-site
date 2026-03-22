import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Percent, UserCheck, Layout as LayoutIcon, Package, Users, DoorOpen, CheckCircle2 } from 'lucide-react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const ContractorPage: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    website: '',
    address: '',
    phone: '',
    enquiryType: '',
    taxId: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.enquiryType) newErrors.enquiryType = 'Please select an enquiry type';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      setTimeout(() => {
        setSubmitted(true);
      }, 800);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: <Percent className="text-white" size={32} strokeWidth={1.5} />,
      title: "Exclusive Discounts",
      description: "Enjoy extra savings on every order, every day—no matter the size."
    },
    {
      icon: <UserCheck className="text-white" size={32} strokeWidth={1.5} />,
      title: "Dedicated Account Manager",
      description: "Receive personalized support designed to help you streamline your business."
    },
    {
      icon: <LayoutIcon className="text-white" size={32} strokeWidth={1.5} />,
      title: "Showroom Resources",
      description: "Enhance your sales with premium showroom materials. Pro members can order 12\" base and wall sample cabinets at minimal cost with free shipping to showcase product quality and design."
    },
    {
      icon: <Package className="text-white" size={32} strokeWidth={1.5} />,
      title: "Branded Dropshipping",
      description: "Deliver products directly to your customers—custom-branded with your logo."
    },
    {
      icon: <Users className="text-white" size={32} strokeWidth={1.5} />,
      title: "Free Local Customer Referrals",
      description: "We connect you with local homeowners to help expand your customer base."
    },
    {
      icon: <DoorOpen className="text-white" size={32} strokeWidth={1.5} />,
      title: "Complimentary Sample Doors",
      description: "Get up to 5 free sample doors with your Pro account—ideal for client presentations."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Contractor Program" 
        breadcrumb={{ label: 'Contractor', path: '/contractor' }}
      />
      <div className="bg-white">
        {/* SECTION 2 - BENEFITS GRID */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background Image (Same as Hero) */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
              alt="Contractor benefits background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Darker overlay for text readability */}
            <div className="absolute inset-0 bg-pk-dark/85" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16 md:mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[32px] md:text-[48px] font-serif text-white"
              >
                Contractor Benefits
              </motion.h2>
              <div className="w-24 h-1 bg-pk-gold mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-20">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 p-3 border border-white/20 rounded-sm">
                    {benefit.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[20px] font-bold text-white tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 text-[15px] leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 - APPLICATION FORM */}
        <section ref={formRef} className="bg-white py-16 md:py-32 border-t border-pk-dark/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
              {/* Left Side: Hero Image for Form Section */}
              <div className="lg:w-[40%] h-[300px] md:h-[400px] lg:h-[800px] relative overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2000&auto=format&fit=crop" 
                  alt="Modern Kitchen Collection" 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-pk-dark/10" />
              </div>

              {/* Right Side: Application Form */}
              <div className="lg:w-[60%]">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6 }}
                      className="space-y-8 md:space-y-12"
                    >
                      <div className="space-y-4">
                        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-pk-gold block">
                          Contractor Partnership
                        </span>
                        <h2 className="text-[32px] md:text-[56px] font-serif text-pk-dark leading-[1.1] tracking-tight">
                          Apply for Contractor Account
                        </h2>
                        <p className="text-pk-muted text-base md:text-lg max-w-lg">
                          Join our professional network to unlock exclusive pricing, dedicated support, and priority fulfillment for your professional projects.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Row 1 */}
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Full Name *</label>
                            <input 
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className={`w-full px-4 py-3 bg-transparent border ${errors.name ? 'border-red-400' : 'border-pk-input-border'} focus:border-pk-gold outline-none transition-colors text-[14px]`}
                            />
                            {errors.name && <p className="text-[10px] text-red-500 uppercase font-bold tracking-tighter">{errors.name}</p>}
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Email Address *</label>
                            <input 
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@company.com"
                              className={`w-full px-4 py-3 bg-transparent border ${errors.email ? 'border-red-400' : 'border-pk-input-border'} focus:border-pk-gold outline-none transition-colors text-[14px]`}
                            />
                            {errors.email && <p className="text-[10px] text-red-500 uppercase font-bold tracking-tighter">{errors.email}</p>}
                          </div>

                          {/* Row 2 */}
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Company Name *</label>
                            <input 
                              type="text"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleChange}
                              placeholder="Your Business Ltd"
                              className={`w-full px-4 py-3 bg-transparent border ${errors.companyName ? 'border-red-400' : 'border-pk-input-border'} focus:border-pk-gold outline-none transition-colors text-[14px]`}
                            />
                            {errors.companyName && <p className="text-[10px] text-red-500 uppercase font-bold tracking-tighter">{errors.companyName}</p>}
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Website</label>
                            <input 
                              type="text"
                              name="website"
                              value={formData.website}
                              onChange={handleChange}
                              placeholder="www.yourbusiness.com"
                              className="w-full px-4 py-3 bg-transparent border border-pk-input-border focus:border-pk-gold outline-none transition-colors text-[14px]"
                            />
                          </div>

                          {/* Row 3 */}
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Invoice Address</label>
                            <input 
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              placeholder="123 Business St, City, State"
                              className="w-full px-4 py-3 bg-transparent border border-pk-input-border focus:border-pk-gold outline-none transition-colors text-[14px]"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Phone Number *</label>
                            <input 
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+1 (555) 000-0000"
                              className={`w-full px-4 py-3 bg-transparent border ${errors.phone ? 'border-red-400' : 'border-pk-input-border'} focus:border-pk-gold outline-none transition-colors text-[14px]`}
                            />
                            {errors.phone && <p className="text-[10px] text-red-500 uppercase font-bold tracking-tighter">{errors.phone}</p>}
                          </div>

                          {/* Row 4 */}
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Enquiry Type *</label>
                            <select 
                              name="enquiryType"
                              value={formData.enquiryType}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 bg-transparent border ${errors.enquiryType ? 'border-red-400' : 'border-pk-input-border'} focus:border-pk-gold outline-none transition-colors text-[14px] appearance-none cursor-pointer`}
                            >
                              <option value="" disabled>Select type</option>
                              <option value="contractor">Contractor</option>
                              <option value="interior-designer">Interior Designer</option>
                              <option value="architect">Architect</option>
                              <option value="developer">Developer</option>
                              <option value="other">Other</option>
                            </select>
                            {errors.enquiryType && <p className="text-[10px] text-red-500 uppercase font-bold tracking-tighter">{errors.enquiryType}</p>}
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Tax or Business ID</label>
                            <input 
                              type="text"
                              name="taxId"
                              value={formData.taxId}
                              onChange={handleChange}
                              placeholder="EIN or Business License #"
                              className="w-full px-4 py-3 bg-transparent border border-pk-input-border focus:border-pk-gold outline-none transition-colors text-[14px]"
                            />
                          </div>
                        </div>

                        {/* Row 5 */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-pk-dark">Message</label>
                          <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your upcoming projects..."
                            className="w-full px-4 py-4 bg-transparent border border-pk-input-border focus:border-pk-gold outline-none transition-colors text-[14px] h-40 resize-none"
                          />
                        </div>

                        <div className="pt-4">
                          <Button type="submit" className="px-12 py-4">
                            Submit Application
                          </Button>
                        </div>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                    >
                      <div className="flex justify-center">
                        <div className="w-20 h-20 bg-pk-gold/10 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="text-pk-gold" size={40} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-3xl font-serif text-pk-dark">Application Received</h3>
                        <p className="text-pk-muted max-w-sm mx-auto">
                          Thank you for applying for a contractor account. Our team will review your application and get back to you within 24-48 hours.
                        </p>
                      </div>
                      <Button onClick={() => setSubmitted(false)} className="mt-4">
                        Submit Another
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContractorPage;
