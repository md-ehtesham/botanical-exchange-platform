import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Product Pages
import ProductsListing from "./pages/products/ProductsListing";
import ProductDetail from "./pages/products/ProductDetail";

// Company Pages
import AboutUs from "./pages/company/AboutUs";
import Quality from "./pages/company/Quality";
import Sustainability from "./pages/company/Sustainability";
import CSR from "./pages/company/CSR";
import Careers from "./pages/company/Careers";

// Blog Pages
import BlogListing from "./pages/blog/BlogListing";
import BlogPost from "./pages/blog/BlogPost";

// Other Pages
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import RequestQuote from "./pages/forms/RequestQuote";
import OrderSample from "./pages/forms/OrderSample";
import DownloadCatalogue from "./pages/forms/DownloadCatalogue";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <Route path="/standardized-extracts" element={<ProductsListing category="standardized" />} />
          <Route path="/organic-extracts" element={<ProductsListing category="organic" />} />
          <Route path="/signature-ingredients" element={<ProductsListing category="signature" />} />
          <Route path="/probiotics" element={<ProductsListing category="probiotics" />} />
          
          {/* Company Routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/quality-assurance" element={<Quality />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/csr-initiatives" element={<CSR />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          
          {/* Other Routes */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/request-sample" element={<OrderSample />} />
          <Route path="/download-catalogue" element={<DownloadCatalogue />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
