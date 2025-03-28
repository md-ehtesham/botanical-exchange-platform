
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/8e20f2d2-8630-4b31-afdf-c69ba0c397d0.png" 
            alt="StarHi Herbs Logo" 
            className="h-12" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-starhi-green transition-colors py-2">
              Products <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-medium rounded-md overflow-hidden border border-border z-50">
              <Link to="/standardized-extracts" className="block px-4 py-2.5 text-sm hover:bg-starhi-green/10 border-b border-border">Standardized Herbal Extracts</Link>
              <Link to="/organic-extracts" className="block px-4 py-2.5 text-sm hover:bg-starhi-green/10 border-b border-border">Organic Herbal Extracts</Link>
              <Link to="/signature-ingredients" className="block px-4 py-2.5 text-sm hover:bg-starhi-green/10 border-b border-border">Signature Ingredients</Link>
              <Link to="/probiotics" className="block px-4 py-2.5 text-sm hover:bg-starhi-green/10">Probiotics</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-starhi-green transition-colors py-2">
              Company <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-medium rounded-md overflow-hidden border border-border z-50">
              <Link to="/about-us" className="block px-4 py-2.5 text-sm hover:bg-starhi-green/10 border-b border-border">About Us</Link>
              <Link to="/our-story" className="block px-4 py-2.5 text-sm hover:bg-starhi-green/10 border-b border-border">Our Story</Link>
              <Link to="/team" className="block px-4 py-2.5 text-sm hover:bg-starhi-green/10 border-b border-border">Team</Link>
              <Link to="/facilities" className="block px-4 py-2.5 text-sm hover:bg-starhi-green/10">Facilities</Link>
            </div>
          </div>
          <Link to="/quality-assurance" className="text-foreground hover:text-starhi-green transition-colors py-2">
            Quality Assurance
          </Link>
          <Link to="/sustainability" className="text-foreground hover:text-starhi-green transition-colors py-2">
            Sustainability
          </Link>
          <Link to="/faq" className="text-foreground hover:text-starhi-green transition-colors py-2">
            FAQ
          </Link>
          <Link to="/blog" className="text-foreground hover:text-starhi-green transition-colors py-2">
            Blog
          </Link>
          <Link to="/contact-us" className="text-foreground hover:text-starhi-green transition-colors py-2">
            Contact Us
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button variant="default" size="sm" className="bg-starhi-green hover:bg-starhi-green/90 text-white" asChild>
            <Link to="/request-quote">Request a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-foreground p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Updated to have solid white background */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-20 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        {/* Close button for mobile menu - added at the top right */}
        <button 
          className="absolute top-4 right-4 text-foreground p-2"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        <div className="container px-4 py-6 space-y-6 overflow-y-auto max-h-[calc(100vh-5rem)]">
          <div className="space-y-1">
            <div className="font-medium text-lg px-2 py-1 text-starhi-green">Products</div>
            <Link to="/standardized-extracts" className="block py-2 px-4 text-foreground hover:bg-starhi-green/10 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Standardized Herbal Extracts
            </Link>
            <Link to="/organic-extracts" className="block py-2 px-4 text-foreground hover:bg-starhi-green/10 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Organic Herbal Extracts
            </Link>
            <Link to="/signature-ingredients" className="block py-2 px-4 text-foreground hover:bg-starhi-green/10 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Signature Ingredients
            </Link>
            <Link to="/probiotics" className="block py-2 px-4 text-foreground hover:bg-starhi-green/10 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Probiotics
            </Link>
          </div>
          
          <div className="space-y-1">
            <div className="font-medium text-lg px-2 py-1 text-starhi-green">Company</div>
            <Link to="/about-us" className="block py-2 px-4 text-foreground hover:bg-starhi-green/10 rounded-md" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/our-story" className="block py-2 px-4 text-foreground hover:bg-starhi-green/10 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Our Story
            </Link>
            <Link to="/team" className="block py-2 px-4 text-foreground hover:bg-starhi-green/10 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Team
            </Link>
            <Link to="/facilities" className="block py-2 px-4 text-foreground hover:bg-starhi-green/10 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Facilities
            </Link>
          </div>
          
          <div className="space-y-1">
            <Link to="/quality-assurance" className="block py-2 px-4 text-foreground hover:bg-starhi-green/10 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>
              Quality Assurance
            </Link>
            
            <Link to="/sustainability" className="block py-2 px-4 text-foreground hover:bg-starhi-green/10 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>
              Sustainability
            </Link>
            
            <Link to="/faq" className="block py-2 px-4 text-foreground hover:bg-starhi-green/10 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
            
            <Link to="/blog" className="block py-2 px-4 text-foreground hover:bg-starhi-green/10 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            
            <Link to="/contact-us" className="block py-2 px-4 text-foreground hover:bg-starhi-green/10 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
          
          <div className="pt-6 space-y-3">
            <Button variant="default" className="w-full justify-center bg-starhi-green hover:bg-starhi-green/90 text-white" asChild>
              <Link to="/request-quote" onClick={() => setIsMenuOpen(false)}>Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
