import React from 'react';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const RefundPolicyPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Refund Policy" 
        breadcrumb={{ label: 'Refund', path: '/refund' }}
      />
      <div className="bg-pk-placeholder-bg/30 min-h-screen py-12 md:py-24 lg:py-32">
        <div className="max-w-[850px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12 md:space-y-16"
          >
            {/* Section: Conditions for Returns */}
            <section className="space-y-6">
              <h3 className="text-[20px] md:text-2xl font-bold text-pk-dark tracking-tight">
                Conditions for Returns
              </h3>
              <ol className="space-y-6">
                {[
                  { title: "Request Period", text: "You may request a return within 14 days of receiving the item." },
                  { title: "Product Condition", text: "Returned items must be unused, unassembled, and in the same condition as received. The packaging, accessories, and manuals must also be intact and in original condition." },
                  { title: "Damaged or Defective Items", text: "If the product is damaged during shipping or has manufacturing defects, please contact us within 48 hours of receipt and provide photos as proof." }
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 md:gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-pk-gold flex items-center justify-center text-pk-gold font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg text-pk-muted leading-relaxed">
                      <strong className="text-pk-dark">{item.title}:</strong> {item.text}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Section: Conditions for Exchanges */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-pk-dark tracking-tight">
                Conditions for Exchanges
              </h3>
              <ol className="space-y-6">
                {[
                  { title: "Request Period", text: "Exchanges can be requested within 14 days of receiving the item." },
                  { title: "Eligible Items", text: "The product must be unused, unassembled, and in its original condition with all packaging and components intact." },
                  { title: "Damaged or Defective Items", text: "If you received a damaged or defective product and prefer an exchange instead of a return, please notify us within 48 hours of receiving the item, providing photos as proof." },
                  { title: "Product Availability", text: "Exchanges are subject to product availability. If the requested replacement item is out of stock, we will assist with alternative solutions, such as a refund or selecting a similar product." }
                ].map((item, index) => (
                  <li key={index} className="flex gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-pk-gold flex items-center justify-center text-pk-gold font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-lg text-pk-muted leading-relaxed">
                      <strong className="text-pk-dark">{item.title}:</strong> {item.text}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Section: Returns Not Accepted */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-pk-dark tracking-tight">
                Returns Not Accepted
              </h3>
              <ul className="space-y-4">
                {[
                  "Items that have been assembled or used are not eligible",
                  "Damage caused by improper assembly due to failure to follow the instructions",
                  "Customized cabinets, including special sizes, colors, or configurations are non-returnable",
                  "Requests submitted after the return period will not be accepted"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-lg text-pk-muted leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-pk-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section: Return Process */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-pk-dark tracking-tight">
                Return Process
              </h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-pk-gold flex items-center justify-center text-pk-gold font-bold text-sm">1</span>
                  <div className="space-y-4">
                    <p className="text-lg text-pk-muted leading-relaxed">
                      <strong className="text-pk-dark">Contact Us:</strong> Please reach out to us via email or customer service with the following information:
                    </p>
                    <ul className="space-y-2 pl-6">
                      {["Purchase order number", "Product name and model", "Reason for the return, along with photos of the issue (if applicable)"].map((sub, i) => (
                        <li key={i} className="flex items-center gap-3 text-pk-muted text-base">
                          <span className="w-1 h-1 bg-pk-gold rounded-full" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-pk-gold flex items-center justify-center text-pk-gold font-bold text-sm">2</span>
                  <p className="text-lg text-pk-muted leading-relaxed">
                    <strong className="text-pk-dark">Return Authorization:</strong> Once the return conditions are verified, we will provide a return authorization and the return address.
                  </p>
                </div>

                <div className="flex gap-6">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-pk-gold flex items-center justify-center text-pk-gold font-bold text-sm">3</span>
                  <p className="text-lg text-pk-muted leading-relaxed">
                    <strong className="text-pk-dark">Return the Item:</strong> For both returns and exchanges, please send the item back within 7 days after receiving the return authorization and provide the tracking number.
                  </p>
                </div>

                <div className="flex gap-6">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-pk-gold flex items-center justify-center text-pk-gold font-bold text-sm">4</span>
                  <div className="space-y-4">
                    <p className="text-lg text-pk-muted leading-relaxed">
                      <strong className="text-pk-dark">Refund Process:</strong>
                    </p>
                    <ul className="space-y-4 pl-6">
                      <li className="text-pk-muted text-base leading-relaxed">
                        <span className="text-pk-gold font-bold mr-2">•</span>
                        <strong className="text-pk-dark">For returns:</strong> Once the item is received, inspected and approved, we will process your refund within 7-10 business days to the original payment method.
                      </li>
                      <li className="text-pk-muted text-base leading-relaxed">
                        <span className="text-pk-gold font-bold mr-2">•</span>
                        <strong className="text-pk-dark">For exchanges:</strong> The replacement item will be shipped once the returned item is received, inspected and approved.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Shipping Costs */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-pk-dark tracking-tight">
                Return & Exchange Shipping Costs
              </h3>
              <ul className="space-y-4">
                {[
                  "For returns due to product defects or shipping damage, we will cover the return shipping costs",
                  "For returns due to personal reasons (e.g., change of mind or dissatisfaction with the product), the buyer is responsible for covering the return shipping costs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-lg text-pk-muted leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-pk-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section: Contact Information */}
            <section className="space-y-8 pt-8 border-t border-pk-dark/10">
              <h3 className="text-2xl font-bold text-pk-dark tracking-tight">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-pk-gold">Email</p>
                  <a href="mailto:support@pkcabinet.com" className="text-lg text-pk-dark hover:text-pk-gold transition-colors font-medium">
                    support@pkcabinet.com
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-pk-gold">Customer Service Line</p>
                  <a href="tel:5626256101" className="text-lg text-pk-dark hover:text-pk-gold transition-colors font-medium">
                    562-625-6101
                  </a>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-pk-gold">Business Hours</p>
                  <p className="text-lg text-pk-dark font-medium">
                    Monday to Friday, 8:00 AM - 4:00 PM (PST)
                  </p>
                </div>
              </div>
              
              <div className="pt-8 text-center">
                <p className="text-xl font-serif text-pk-dark italic">
                  "We are committed to providing you with high-quality service. Thank you for your understanding and cooperation!"
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default RefundPolicyPage;
