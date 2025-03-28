
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LiveChatSupport from "./components/chat/LiveChatSupport";

// Product Pages
import ProductsListing from "./pages/products/ProductsListing";
import ProductDetail from "./pages/products/ProductDetail";
import ProductCompare from "./pages/products/ProductCompare";

// Company Pages
import AboutUs from "./pages/company/AboutUs";
import Quality from "./pages/company/Quality";
import Sustainability from "./pages/company/Sustainability";
import CSR from "./pages/company/CSR";
import Careers from "./pages/company/Careers";
import FAQ from "./pages/FAQ";

// New Company Pages
import OurStory from "./pages/company/OurStory";
import Team from "./pages/company/Team";
import Facilities from "./pages/company/Facilities";

// Blog Pages
import BlogListing from "./pages/blog/BlogListing";
import BlogPost from "./pages/blog/BlogPost";

// Legal Pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";

// Other Pages
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import RequestQuote from "./pages/forms/RequestQuote";
import OrderSample from "./pages/forms/OrderSample";
import DownloadCatalogue from "./pages/forms/DownloadCatalogue";

const queryClient = new QueryClient();

// Enhanced ScrollToTop component that works on every route change
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Scroll to top whenever the path changes
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Product Routes */}
          <Route path="/products" element={<ProductsListing />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/products/compare" element={<ProductCompare />} />
          <Route path="/standardized-extracts" element={<ProductsListing category="standardized" />} />
          <Route path="/organic-extracts" element={<ProductsListing category="organic" />} />
          <Route path="/signature-ingredients" element={<ProductsListing category="signature" />} />
          <Route path="/probiotics" element={<ProductsListing category="probiotics" />} />
          
          {/* Company Routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/team" element={<Team />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/quality-assurance" element={<Quality />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/csr-initiatives" element={<CSR />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          
          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          
          {/* Other Routes */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/request-sample" element={<OrderSample />} />
          <Route path="/download-catalogue" element={<DownloadCatalogue />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Global Live Chat Support */}
        <LiveChatSupport />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
