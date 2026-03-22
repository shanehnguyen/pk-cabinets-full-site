import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const TermsOfServicePage: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Layout>
      <PageHeader 
        title="Terms of Service" 
        breadcrumb={{ label: 'Terms', path: '/terms' }}
      />
      <div className="bg-pk-placeholder-bg/30 min-h-screen py-12 md:py-24 lg:py-32">
        <div className="max-w-[850px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Content Sections */}
            <div className="space-y-10 text-pk-muted leading-relaxed text-base md:text-lg">
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">1. Acceptance of Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>By accessing and using PK Cabinet's website, you accept and agree to be bound by these Terms of Service.</li>
                  <li>If you do not agree to these terms, please do not use our services or access our website.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">2. Use of Website</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The website is provided for personal and commercial use related to purchasing our products.</li>
                  <li>Prohibited activities include data scraping, unauthorized access to our systems, and any malicious use that interferes with website functionality.</li>
                  <li>All content, including images, text, and designs, are the intellectual property of PK Cabinet.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">3. Product Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We strive for accuracy in product descriptions and pricing; however, errors may occur.</li>
                  <li>We reserve the right to modify prices, specifications, and availability without prior notice.</li>
                  <li>Please note that actual product colors and finishes may vary slightly from what is displayed on your screen due to monitor settings and natural wood characteristics.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">4. Orders and Payment</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Order acceptance occurs when we send a confirmation email. We reserve the right to refuse any order.</li>
                  <li>We accept major credit cards and other secure payment methods as specified at checkout.</li>
                  <li>All prices are in USD. We reserve the right to cancel orders due to pricing errors.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">5. Shipping and Delivery</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delivery timeframes are estimates. Please refer to our <Link to="/shipping" className="text-pk-gold hover:underline">Shipping & Delivery</Link> page for details.</li>
                  <li>Risk of loss and title for products pass to you upon delivery to the carrier or delivery location.</li>
                  <li>Customers are required to inspect all items upon receipt and report any damage within 48 hours.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">6. Returns and Refunds</h2>
                <p>
                  Our return process is governed by our <Link to="/refund-policy" className="text-pk-gold hover:underline">Refund Policy</Link>. 
                  Generally, requests must be submitted within 14 days of receipt for unused and unassembled items.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">7. Warranty</h2>
                <p>
                  Products are covered by a limited warranty as detailed on our <Link to="/guarantee" className="text-pk-gold hover:underline">Guarantee and Warranty</Link> page. 
                  Liability is limited to the repair or replacement of defective components.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">8. Limitation of Liability</h2>
                <p>
                  PK Cabinet shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products. 
                  Our maximum liability is limited to the purchase price of the specific product in question.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">9. Dispute Resolution</h2>
                <p>
                  These terms are governed by the laws of the State of California. Any disputes shall be resolved through binding arbitration in Los Angeles County, California.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of the website following changes constitutes your acceptance of the new terms.
                </p>
              </section>

              <section className="space-y-6 pt-8 border-t border-pk-dark/10">
                <h2 className="text-xl font-bold text-pk-dark">11. Contact Information</h2>
                <div className="space-y-2 text-pk-dark font-medium">
                  <p>PK Cabinet</p>
                  <p>Email: <a href="mailto:support@pkcabinet.com" className="text-pk-gold hover:underline">support@pkcabinet.com</a></p>
                  <p>Phone: <a href="tel:5626256101" className="text-pk-gold hover:underline">562-625-6101</a></p>
                  <p>Address: 123 Cabinet Way, Los Angeles, CA 90001</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfServicePage;
