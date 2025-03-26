
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

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
          ? "bg-white/90 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-herb-700">
            Star Hi <span className="text-cream-500">Herbs</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-herb-500 transition-colors">
              Products <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-medium rounded-md p-3 border border-border">
              <Link to="/standardized-extracts" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">Standardized Herbal Extracts</Link>
              <Link to="/organic-extracts" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">Organic Herbal Extracts</Link>
              <Link to="/signature-ingredients" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">Signature Ingredients</Link>
              <Link to="/probiotics" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">Probiotics</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-herb-500 transition-colors">
              Company <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-medium rounded-md p-3 border border-border">
              <Link to="/about-us" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">About Us</Link>
              <Link to="/our-story" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">Our Story</Link>
              <Link to="/team" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">Team</Link>
              <Link to="/facilities" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">Facilities</Link>
            </div>
          </div>
          <Link to="/quality-assurance" className="text-foreground hover:text-herb-500 transition-colors">
            Quality Assurance
          </Link>
          <Link to="/sustainability" className="text-foreground hover:text-herb-500 transition-colors">
            Sustainability
          </Link>
          <Link to="/blog" className="text-foreground hover:text-herb-500 transition-colors">
            Blog
          </Link>
          <Link to="/contact-us" className="text-foreground hover:text-herb-500 transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Login & CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/login" className="btn btn-ghost btn-sm">
            Client Login
          </Link>
          <Link to="/request-quote" className="btn btn-primary btn-sm">
            Request a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        <div className="container px-4 py-6 space-y-6">
          <div className="space-y-2">
            <div className="font-medium text-lg">Products</div>
            <Link to="/standardized-extracts" className="block py-2 pl-4 text-foreground hover:text-herb-500" onClick={() => setIsMenuOpen(false)}>
              Standardized Herbal Extracts
            </Link>
            <Link to="/organic-extracts" className="block py-2 pl-4 text-foreground hover:text-herb-500" onClick={() => setIsMenuOpen(false)}>
              Organic Herbal Extracts
            </Link>
            <Link to="/signature-ingredients" className="block py-2 pl-4 text-foreground hover:text-herb-500" onClick={() => setIsMenuOpen(false)}>
              Signature Ingredients
            </Link>
            <Link to="/probiotics" className="block py-2 pl-4 text-foreground hover:text-herb-500" onClick={() => setIsMenuOpen(false)}>
              Probiotics
            </Link>
          </div>
          
          <div className="space-y-2">
            <div className="font-medium text-lg">Company</div>
            <Link to="/about-us" className="block py-2 pl-4 text-foreground hover:text-herb-500" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/our-story" className="block py-2 pl-4 text-foreground hover:text-herb-500" onClick={() => setIsMenuOpen(false)}>
              Our Story
            </Link>
            <Link to="/team" className="block py-2 pl-4 text-foreground hover:text-herb-500" onClick={() => setIsMenuOpen(false)}>
              Team
            </Link>
            <Link to="/facilities" className="block py-2 pl-4 text-foreground hover:text-herb-500" onClick={() => setIsMenuOpen(false)}>
              Facilities
            </Link>
          </div>
          
          <Link to="/quality-assurance" className="block py-2 text-foreground hover:text-herb-500 font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
            Quality Assurance
          </Link>
          
          <Link to="/sustainability" className="block py-2 text-foreground hover:text-herb-500 font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
            Sustainability
          </Link>
          
          <Link to="/blog" className="block py-2 text-foreground hover:text-herb-500 font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          
          <Link to="/contact-us" className="block py-2 text-foreground hover:text-herb-500 font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
          
          <div className="pt-6 space-y-4">
            <Link to="/login" className="block w-full btn btn-outlined">
              Client Login
            </Link>
            <Link to="/request-quote" className="block w-full btn btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
