
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-herb-700 text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Star Hi Herbs</h3>
            <p className="text-herb-100 mb-6">
              Premium manufacturer of botanical extracts, organic herbal extracts, and probiotics for pharmaceutical, nutraceutical, food, and cosmetic industries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-herb-100 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-herb-100 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-herb-100 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-herb-100 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-herb-100 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/standardized-extracts" className="text-herb-100 hover:text-white transition-colors">
                  Standardized Herbal Extracts
                </Link>
              </li>
              <li>
                <Link to="/organic-extracts" className="text-herb-100 hover:text-white transition-colors">
                  Organic Herbal Extracts
                </Link>
              </li>
              <li>
                <Link to="/signature-ingredients" className="text-herb-100 hover:text-white transition-colors">
                  Signature Ingredients
                </Link>
              </li>
              <li>
                <Link to="/probiotics" className="text-herb-100 hover:text-white transition-colors">
                  Probiotics
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-herb-100 hover:text-white transition-colors">
                  Download Catalog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-herb-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/quality-assurance" className="text-herb-100 hover:text-white transition-colors">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-herb-100 hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-herb-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-herb-100 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-herb-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-cream-400 flex-shrink-0" />
                <span className="text-herb-100">123 Botanical Way, Herbal District, HD 12345, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-cream-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-herb-100 hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-cream-400 flex-shrink-0" />
                <a href="mailto:info@starhiherbs.com" className="text-herb-100 hover:text-white transition-colors">
                  info@starhiherbs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-herb-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-herb-100 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Star Hi Herbs. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-herb-100 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-herb-100 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-herb-100 hover:text-white transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
