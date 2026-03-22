import React from 'react';
import { 
  Truck, Wrench, FileText, Box, Pencil, RotateCcw, DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Accordion from '../components/Accordion';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  questions: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    id: 'shipping',
    title: 'Shipping',
    icon: <Truck size={24} />,
    questions: [
      { q: "Do you ship outside California?", a: "Yes, we ship to all 48 contiguous states in the US. Shipping rates and delivery times vary by location. Please enter your zip code at checkout for an accurate shipping estimate." },
      { q: "Can I pick up my order from your warehouse?", a: "Absolutely. Local pickup is available at our La Mirada distribution center. Select 'Local Pickup' at checkout and we will notify you when your order is ready for collection." },
      { q: "Can I choose my delivery date?", a: "Once your order has been dispatched, our freight partner will contact you via phone or email to schedule a specific delivery window that works for you." },
      { q: "Where is PK Cabinet located?", a: "Our main distribution center and headquarters are located in La Mirada, California. This central location allows us to efficiently manage inventory and shipping." },
      { q: "How long does delivery take after ordering?", a: "Most in-stock orders are processed within 24-48 hours. Delivery typically takes 3 to 5 business days depending on your distance from our California warehouse." }
    ]
  },
  {
    id: 'assembly',
    title: 'Assembly & Installation',
    icon: <Wrench size={24} />,
    questions: [
      { q: "Do the cabinets come with installation hardware?", a: "Yes, all our cabinets include the necessary assembly hardware and soft-close hinges. However, specific wall-mounting screws may need to be purchased separately based on your wall type." },
      { q: "Are PK Cabinet cabinets sold assembled or unassembled?", a: "We offer both options. Our standard shipping is for RTA (Ready-To-Assemble) cabinets, which are easier to ship and more cost-effective. Pre-assembly services are available for local orders." },
      { q: "Do you offer installation services?", a: "While we specialize in manufacturing and distribution, we have a network of preferred contractors in Southern California. Contact our trade desk for recommendations." },
      { q: "What tools do I need for installation?", a: "For RTA assembly, you will typically need a screwdriver (or power drill), wood glue, and a rubber mallet. For installation, a level, shims, and a stud finder are essential." }
    ]
  },
  {
    id: 'orders',
    title: 'Orders',
    icon: <FileText size={24} />,
    questions: [
      { q: "How do I place an order?", a: "You can place an order directly through our website by adding items to your cart. For large commercial projects or contractor orders, please contact our sales team for a custom quote." },
      { q: "Can I modify or cancel my order?", a: "Orders can be modified or cancelled within 24 hours of placement. Once an order has entered the processing or shipping phase, standard return policies will apply." },
      { q: "Do you offer bulk or trade discounts?", a: "Yes, we have a dedicated Trade Program for contractors, developers, and interior designers. Please visit our 'Trade' page to apply for professional pricing." },
      { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex, Discover), PayPal, and Apple Pay. Financing options are also available through our partners." }
    ]
  },
  {
    id: 'product',
    title: 'Product',
    icon: <Box size={24} />,
    questions: [
      { q: "What materials are used in PK Cabinet cabinets?", a: "Our cabinets feature Grade-A plywood boxes and solid wood frames. We do not use particle board in any of our structural components." },
      { q: "Are your cabinets solid wood?", a: "Yes, our doors and face frames are made from solid hardwood (typically Maple or Birch), while the cabinet boxes are constructed from high-quality furniture-grade plywood." },
      { q: "What is the warranty on your products?", a: "We offer a 5-year limited warranty on all cabinet boxes and a lifetime warranty on our soft-close hardware and hinges against manufacturing defects." },
      { q: "Do you offer sample doors?", a: "Yes, we highly recommend ordering a sample door to see the finish and quality in your own home. Sample doors are available for purchase in our 'Products' section." }
    ]
  },
  {
    id: 'designs',
    title: 'Designs',
    icon: <Pencil size={24} />,
    questions: [
      { q: "What Shaker styles do you offer?", a: "We specialize in the classic Shaker aesthetic, offering several variations including Slim Shaker, Inset Shaker, and Traditional Shaker in multiple premium finishes." },
      { q: "Can I get a custom size cabinet?", a: "While our cabinets come in a wide range of standard modular sizes, we do offer limited customization for specific filler pieces and trim to ensure a perfect fit." },
      { q: "How do I choose the right finish?", a: "Consider your kitchen's natural light and overall style. Our White Shaker is timeless and bright, while our Grey and Navy options offer a more modern, sophisticated look." }
    ]
  },
  {
    id: 'returns',
    title: 'Returns',
    icon: <RotateCcw size={24} />,
    questions: [
      { q: "What is your return policy?", a: "Unopened items in their original packaging can be returned within 30 days of delivery. A 20% restocking fee applies to all returns, and the customer is responsible for return shipping." },
      { q: "How do I initiate a return?", a: "To start a return, please contact our support team with your order number. We will provide you with a Return Merchandise Authorization (RMA) and shipping instructions." },
      { q: "What if my order arrives damaged?", a: "Please inspect your delivery immediately. If you notice damage, note it on the delivery receipt and contact us within 48 hours. We will ship replacement parts at no cost." },
      { q: "Are sample doors refundable?", a: "Sample doors are non-refundable, but the cost of your sample can be applied as a credit toward your full kitchen order (minimum purchase applies)." }
    ]
  },
  {
    id: 'financing',
    title: 'Financing',
    icon: <DollarSign size={24} />,
    questions: [
      { q: "Do you offer financing options?", a: "Yes, we partner with leading financing providers to offer flexible payment plans, including 0% APR options for qualified buyers." },
      { q: "What are the installment terms?", a: "Terms range from 3 to 24 months depending on the order total and credit approval. You can see your specific options by selecting 'Financing' at checkout." },
      { q: "Is there a minimum order for financing?", a: "Financing is typically available for orders over $500. The exact minimum may vary depending on the specific financing partner selected." },
      { q: "How do I apply for financing?", a: "Simply select the financing option at checkout. You will be redirected to a secure application that provides an instant decision without affecting your credit score." }
    ]
  }
];

const FAQPage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout>
      <PageHeader 
        title="Frequently Asked Questions" 
        breadcrumb={{ label: 'FAQ', path: '/faq' }} 
        subline={
          <>
            Here you'll find answers to our most commonly asked questions. 
            Can't find what you're looking for? <Link to="/contact" className="text-pk-gold hover:underline">Contact us directly.</Link>
          </>
        }
      />

      {/* Category Navigation Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8 border-b border-pk-border">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[24px] md:text-[28px] font-serif font-normal text-pk-dark mb-2">
            What kind of help do you need?
          </h2>
          <p className="text-[14px] text-pk-muted mb-10 md:mb-16">
            For more questions, please <Link to="/contact" className="text-pk-gold font-medium hover:underline">Contact Us</Link>
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {faqData.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className="bg-white border border-pk-border p-8 flex flex-col items-center gap-4 hover:border-pk-gold transition-all group"
              >
                <div className="text-pk-gold group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <span className="text-[11px] font-bold text-pk-dark uppercase tracking-wider">
                  {category.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Groups */}
      <section className="bg-white py-[60px] md:py-[100px] px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          {faqData.map((category) => (
            <div key={category.id} id={category.id} className="mb-24 scroll-mt-32">
              <div className="flex items-center gap-4 mb-10">
                <div className="text-pk-gold">
                  {category.icon}
                </div>
                <h2 className="text-[24px] font-serif font-normal text-pk-dark uppercase tracking-tight">
                  {category.title}
                </h2>
              </div>
              
              <Accordion 
                items={category.questions.map(q => ({
                  question: q.q,
                  answer: q.a
                }))}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
