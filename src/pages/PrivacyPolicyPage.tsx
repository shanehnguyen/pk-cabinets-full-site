import React from 'react';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Layout>
      <PageHeader 
        title="Privacy Policy" 
        breadcrumb={{ label: 'Privacy', path: '/privacy' }}
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
                <h2 className="text-xl font-bold text-pk-dark">1. Introduction</h2>
                <p>
                  At PK Cabinet, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our website, place orders, or communicate with us.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">2. Information We Collect</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-pk-dark">Personal Information:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name, email address, phone number, and billing/shipping address.</li>
                    <li>Payment information (processed securely through third-party processors; we do not store full card details).</li>
                  </ul>
                  <h3 className="text-lg font-semibold text-pk-dark">Automatically Collected Information:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address, browser type, and device information.</li>
                    <li>Cookies and tracking technologies to enhance your experience.</li>
                    <li>Website usage data and analytics.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To process and fulfill your orders and manage deliveries.</li>
                  <li>To provide customer support and respond to inquiries.</li>
                  <li>To send marketing and promotional emails (you may opt-out at any time).</li>
                  <li>To improve our website, products, and overall customer experience.</li>
                  <li>To comply with legal obligations and prevent fraud.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">4. Information Sharing and Disclosure</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We share information with third-party service providers (e.g., payment processors, shipping carriers) only as necessary to fulfill our services.</li>
                  <li>We may disclose information if required by law or in response to valid legal requests.</li>
                  <li>In the event of a business transfer or acquisition, your data may be transferred to the new owner.</li>
                  <li><strong>We do NOT sell your personal information to third parties.</strong></li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">5. Cookies and Tracking Technologies</h2>
                <p>
                  We use essential cookies for website functionality, analytics cookies to understand usage, and marketing cookies for personalized experiences. 
                  You can manage your cookie preferences through your browser settings.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">6. Data Security</h2>
                <p>
                  We implement industry-standard security measures, including SSL encryption, to protect your data. 
                  While we strive for maximum security, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">7. Your Rights and Choices</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You have the right to access, update, or correct your personal information.</li>
                  <li>You can opt-out of marketing communications using the "unsubscribe" link in our emails.</li>
                  <li>You may request the deletion of your account or personal data, subject to legal retention requirements.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to external sites. We are not responsible for the privacy practices or content of these third-party websites.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">9. Children's Privacy</h2>
                <p>
                  Our website is not intended for users under the age of 16. We do not knowingly collect data from children.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">10. International Users</h2>
                <p>
                  Your data is processed and stored in the United States. By using our services, you consent to this transfer and processing.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-pk-dark">11. Changes to Privacy Policy</h2>
                <p>
                  We reserve the right to update this policy. Material changes will be notified via email or a prominent notice on our website.
                </p>
              </section>

              <section className="space-y-6 pt-8 border-t border-pk-dark/10">
                <h2 className="text-xl font-bold text-pk-dark">12. Contact Us</h2>
                <div className="space-y-2 text-pk-dark font-medium">
                  <p>PK Cabinet Privacy Office</p>
                  <p>Email: <a href="mailto:support@pkcabinet.com" className="text-pk-gold hover:underline">support@pkcabinet.com</a></p>
                  <p>Phone: <a href="tel:5626256101" className="text-pk-gold hover:underline">562-625-6101</a></p>
                  <p>Mailing Address: 123 Cabinet Way, Los Angeles, CA 90001</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
