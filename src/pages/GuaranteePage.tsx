import React from 'react';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const GuaranteePage: React.FC = () => {
  const exclusions = [
    "The warranty does not cover cabinets that have been mishandled, modified, damaged, improperly installed, or stored in a manner that exceeds industry standards.",
    "Exclusions also include damage resulting from misuse, neglect, acts of God, exposure to moisture, extreme temperatures, or use in non-residential applications.",
    "Additional exclusions encompass RTA cabinets subjected to outdoor installation, misuse, physical or chemical abuse, and exposure to extreme conditions such as direct sunlight, fire, or flood.",
    "Natural characteristics of wood, including variations in color, separation lines, darkening due to aging, and color inconsistency resulting from exposure to sunlight, are not covered under the warranty.",
    "Excluded factors also encompass separation lines at joints between pieces of wood due to temperature or humidity changes, which may occur unavoidably.",
    "Normal wear and tear, improper installation, care, and maintenance are not covered under the warranty.",
    "Damage or defects resulting from misuse, alteration, negligence, abuse, improper handling, and extreme temperature changes are not covered by the warranty.",
    "Labor costs for removal, reinstallation, transportation, and shipping expenses are excluded from coverage.",
    "Products that have been modified in any way are not eligible for warranty coverage.",
    "Surface staining or etching caused by leaving acidic or aggressive chemicals in contact with the material for excessive periods of time is not covered by the warranty.",
    "Surface chipping and scratching resulting from negligence and abuse are excluded from warranty coverage.",
    "Warping caused by extreme temperature changes is not covered under the warranty.",
    "The warranty does not extend to flooring, tile, sink, accessories, countertops, appliances, plumbing fixtures, or any associated labor costs for removal and reinstallation.",
    "Please note that the warranty becomes void if cabinets are modified, moved from their original installation, improperly installed, or damaged due to the installation process."
  ];

  return (
    <Layout>
      <PageHeader 
        title="Guarantee and Warranty" 
        breadcrumb={{ label: 'Guarantee', path: '/guarantee' }}
      />
      <div className="bg-pk-placeholder-bg/30 min-h-screen py-12 md:py-24 lg:py-32">
        <div className="max-w-[850px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12 md:space-y-16"
          >
            {/* Section: General Warranty Details */}
            <section className="space-y-6">
              <h2 className="text-[20px] md:text-2xl font-bold text-pk-dark tracking-tight">
                General Warranty Details
              </h2>
              <div className="space-y-6">
                <p className="text-base md:text-lg text-pk-muted leading-relaxed">
                  The kitchen cabinets and vanity cabinets sold by PK Cabinet are covered by a 5-year limited warranty against manufacturer defects in material and workmanship under normal use, starting from the original date of purchase invoice. This warranty applies specifically to cabinets used in residential applications within the United States and is valid only for PK Cabinet direct customers. It does not extend to any third parties and is non-transferable. Proof of purchase and the original invoice are necessary for any warranty claim submission.
                </p>
                <div className="bg-pk-dark text-white p-4 rounded-sm inline-block">
                  <p className="text-sm font-bold uppercase tracking-widest">
                    Important Note: In order to be eligible for warranty consideration, cabinets must be installed within 90 days of purchase.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Limited Warranty Terms */}
            <section className="space-y-6">
              <h2 className="text-[20px] md:text-2xl font-bold text-pk-dark tracking-tight">
                Limited Warranty Terms by PK Cabinet
              </h2>
              <p className="text-base md:text-lg text-pk-muted leading-relaxed">
                Our limited warranty ensures that your investment is protected against structural failures and material defects. We stand behind the quality of our craftsmanship and the durability of our products.
              </p>
            </section>

            {/* Section: Exclusions */}
            <section className="space-y-8">
              <h2 className="text-[20px] md:text-2xl font-bold text-pk-dark tracking-tight">
                Exclusions from Warranty Coverage
              </h2>
              <ul className="space-y-6">
                {exclusions.map((exclusion, index) => (
                  <li key={index} className="flex items-start gap-4 text-base md:text-lg text-pk-muted leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-pk-gold flex-shrink-0" />
                    <span>{exclusion}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Footer Note */}
            <div className="pt-12 border-t border-pk-dark/10 text-center">
              <p className="text-pk-muted text-sm italic">
                For warranty claims or inquiries, please contact our support team with your original invoice and proof of purchase.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default GuaranteePage;
