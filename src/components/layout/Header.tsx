
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
          <span className="text-2xl font-bold text-herb-700">
            Star<span className="text-cream-500">Hi</span> Herbs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-herb-500 transition-colors py-2">
              Products <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-medium rounded-md overflow-hidden border border-border z-50">
              <Link to="/standardized-extracts" className="block px-4 py-2.5 text-sm hover:bg-herb-50 border-b border-border">Standardized Herbal Extracts</Link>
              <Link to="/organic-extracts" className="block px-4 py-2.5 text-sm hover:bg-herb-50 border-b border-border">Organic Herbal Extracts</Link>
              <Link to="/signature-ingredients" className="block px-4 py-2.5 text-sm hover:bg-herb-50 border-b border-border">Signature Ingredients</Link>
              <Link to="/probiotics" className="block px-4 py-2.5 text-sm hover:bg-herb-50">Probiotics</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-herb-500 transition-colors py-2">
              Company <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-medium rounded-md overflow-hidden border border-border z-50">
              <Link to="/about-us" className="block px-4 py-2.5 text-sm hover:bg-herb-50 border-b border-border">About Us</Link>
              <Link to="/our-story" className="block px-4 py-2.5 text-sm hover:bg-herb-50 border-b border-border">Our Story</Link>
              <Link to="/team" className="block px-4 py-2.5 text-sm hover:bg-herb-50 border-b border-border">Team</Link>
              <Link to="/facilities" className="block px-4 py-2.5 text-sm hover:bg-herb-50">Facilities</Link>
            </div>
          </div>
          <Link to="/quality-assurance" className="text-foreground hover:text-herb-500 transition-colors py-2">
            Quality Assurance
          </Link>
          <Link to="/sustainability" className="text-foreground hover:text-herb-500 transition-colors py-2">
            Sustainability
          </Link>
          <Link to="/blog" className="text-foreground hover:text-herb-500 transition-colors py-2">
            Blog
          </Link>
          <Link to="/contact-us" className="text-foreground hover:text-herb-500 transition-colors py-2">
            Contact Us
          </Link>
        </nav>

        {/* Login & CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Client Login</Link>
          </Button>
          <Button variant="default" size="sm" className="bg-herb-500 hover:bg-herb-600" asChild>
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

      {/* Mobile Menu */}
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
            <div className="font-medium text-lg px-2 py-1 text-herb-700">Products</div>
            <Link to="/standardized-extracts" className="block py-2 px-4 text-foreground hover:bg-herb-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Standardized Herbal Extracts
            </Link>
            <Link to="/organic-extracts" className="block py-2 px-4 text-foreground hover:bg-herb-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Organic Herbal Extracts
            </Link>
            <Link to="/signature-ingredients" className="block py-2 px-4 text-foreground hover:bg-herb-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Signature Ingredients
            </Link>
            <Link to="/probiotics" className="block py-2 px-4 text-foreground hover:bg-herb-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Probiotics
            </Link>
          </div>
          
          <div className="space-y-1">
            <div className="font-medium text-lg px-2 py-1 text-herb-700">Company</div>
            <Link to="/about-us" className="block py-2 px-4 text-foreground hover:bg-herb-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/our-story" className="block py-2 px-4 text-foreground hover:bg-herb-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Our Story
            </Link>
            <Link to="/team" className="block py-2 px-4 text-foreground hover:bg-herb-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Team
            </Link>
            <Link to="/facilities" className="block py-2 px-4 text-foreground hover:bg-herb-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Facilities
            </Link>
          </div>
          
          <div className="space-y-1">
            <Link to="/quality-assurance" className="block py-2 px-4 text-foreground hover:bg-herb-50 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>
              Quality Assurance
            </Link>
            
            <Link to="/sustainability" className="block py-2 px-4 text-foreground hover:bg-herb-50 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>
              Sustainability
            </Link>
            
            <Link to="/blog" className="block py-2 px-4 text-foreground hover:bg-herb-50 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            
            <Link to="/contact-us" className="block py-2 px-4 text-foreground hover:bg-herb-50 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
          
          <div className="pt-6 space-y-3">
            <Button variant="outline" className="w-full justify-center" asChild>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>Client Login</Link>
            </Button>
            <Button variant="default" className="w-full justify-center bg-herb-500 hover:bg-herb-600" asChild>
              <Link to="/request-quote" onClick={() => setIsMenuOpen(false)}>Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
