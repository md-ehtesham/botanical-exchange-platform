
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-starhi-green text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/8e20f2d2-8630-4b31-afdf-c69ba0c397d0.png" 
                alt="StarHi Herbs Logo" 
                className="h-12 bg-white p-1 rounded" 
              />
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Premium manufacturer of botanical extracts, organic herbal extracts, and probiotics for pharmaceutical, nutraceutical, food, and cosmetic industries.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Products</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/standardized-extracts" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-1 bg-white rounded-full mr-2"></span>
                  Standardized Herbal Extracts
                </Link>
              </li>
              <li>
                <Link to="/organic-extracts" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-1 bg-white rounded-full mr-2"></span>
                  Organic Herbal Extracts
                </Link>
              </li>
              <li>
                <Link to="/signature-ingredients" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-1 bg-white rounded-full mr-2"></span>
                  Signature Ingredients
                </Link>
              </li>
              <li>
                <Link to="/probiotics" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-1 bg-white rounded-full mr-2"></span>
                  Probiotics
                </Link>
              </li>
              <li>
                <Link to="/download-catalogue" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-1 bg-white rounded-full mr-2"></span>
                  Download Catalog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about-us" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-1 bg-white rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/quality-assurance" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-1 bg-white rounded-full mr-2"></span>
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-1 bg-white rounded-full mr-2"></span>
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-1 bg-white rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-1 bg-white rounded-full mr-2"></span>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-1 bg-white rounded-full mr-2"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Contact Us</h4>
            <div className="text-white/90 space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Unit-1 (Corporate Office)</p>
                  <p>STAR HI HERBS PVT LTD</p>
                  <p>Plot No. 50, 3rd Road, 1st Phase</p>
                  <p>K. I. A. D. B. Industrial Area, Jigani</p>
                  <p>Bengaluru - 560105, Karnataka, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Unit-2 (Production)</p>
                  <p>STAR HI HERBS PVT LTD</p>
                  <p>Plot No 105-B, Pharma SEZ</p>
                  <p>KIADB Industrial Area</p>
                  <p>Hassan - 573 201</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-white flex-shrink-0" />
                <div>
                  <p>+91 81104 17554</p>
                  <p>+91 98864 22452</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-white flex-shrink-0" />
                <div>
                  <a href="mailto:info@starhiherbs.com" className="block text-white/90 hover:text-white transition-colors">
                    info@starhiherbs.com
                  </a>
                  <a href="mailto:najish.n@starhiherbs.com" className="block text-white/90 hover:text-white transition-colors">
                    najish.n@starhiherbs.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              &copy; {currentYear} StarHi Herbs. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/terms" className="text-white/80 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-white/80 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-white/80 hover:text-white transition-colors text-sm">
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
