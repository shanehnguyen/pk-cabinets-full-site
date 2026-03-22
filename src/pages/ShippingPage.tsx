import React from 'react';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const ShippingPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Shipping & Delivery" 
        breadcrumb={{ label: 'Shipping', path: '/shipping' }}
      />
      <div className="bg-pk-placeholder-bg/30 min-h-screen py-12 md:py-24 lg:py-32">
        <div className="max-w-[850px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12 md:space-y-16"
          >
            {/* Section: Free Shipping */}
            <section className="space-y-4">
              <h2 className="text-[20px] md:text-2xl font-bold text-pk-dark tracking-tight">
                Free Shipping
              </h2>
              <p className="text-base md:text-lg text-pk-muted leading-relaxed">
                All qualifying orders will receive final mile delivery service at no additional charge. Orders over $3,500 qualify for FREE shipping. Some restrictions may apply in select areas.
              </p>
            </section>

            {/* Section: What To Expect */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-pk-dark tracking-tight">
                What To Expect For Your Final Mile Delivery
              </h2>
              <ul className="space-y-4">
                {[
                  "Box truck transportation",
                  "Hassle-free, respectful, and courteous delivery experience",
                  "Professional delivery personnel in appropriate branded uniforms",
                  "Call ahead and text notifications",
                  "Your order delivered to the first dry space at your delivery location",
                  "Customer satisfaction and a great delivery experience"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-lg text-pk-muted leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-pk-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section: Delivery Process */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-pk-dark tracking-tight">
                Delivery Process
              </h2>
              <div className="space-y-6">
                {[
                  "You will receive a call from our delivery company to schedule your in-home delivery appointment",
                  "You will receive a call the day before the scheduled delivery date to provide you with a 4-hour delivery window",
                  "Your driver will call you 30 minutes to 1 hour before arrival",
                  "You will receive a customer satisfaction follow-up call after delivery. We encourage all feedback."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-pk-gold flex items-center justify-center text-pk-gold font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-lg text-pk-muted leading-relaxed pt-0.5">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer Note */}
            <div className="pt-8 border-t border-pk-dark/10">
              <p className="text-sm text-pk-muted italic">
                For any questions regarding your delivery, please contact our support team at <a href="mailto:support@pkcabinet.com" className="text-pk-gold hover:underline">support@pkcabinet.com</a> or call us at <a href="tel:+1800PKCABINET" className="text-pk-gold hover:underline">1-800-PK-CABINET</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingPage;
