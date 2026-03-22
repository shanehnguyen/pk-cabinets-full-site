import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import DesignsPage from './pages/DesignsPage';
import FurniturePage from './pages/FurniturePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SampleDoorsPage from './pages/SampleDoorsPage';
import CartPage from './pages/CartPage';
import ContractorPage from './pages/ContractorPage';
import ShippingPage from './pages/ShippingPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import GuaranteePage from './pages/GuaranteePage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/designs" element={<DesignsPage />} />
        <Route path="/collections" element={<FurniturePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/sample-doors" element={<SampleDoorsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contractor" element={<ContractorPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/guarantee" element={<GuaranteePage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
}
