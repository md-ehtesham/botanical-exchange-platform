
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-section">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-medium">
                <img
                  src="/lovable-uploads/1c951dc7-1ef1-4a68-b225-545fa0804cf7.png"
                  alt="Star Hi Herbs facility"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 h-64 w-64 bg-cream-100 rounded-lg -z-10"></div>
              <div className="absolute -top-8 -left-8 h-40 w-40 bg-herb-100 rounded-lg -z-10"></div>
              
              <div className="absolute top-6 right-6 glass-card p-6 rounded-lg backdrop-blur-md bg-white/60 shadow-soft max-w-[200px]">
                <span className="text-herb-500 font-semibold block mb-2">CERTIFIED</span>
                <p className="text-gray-700">ISO 9001, GMP, and USDA Organic certified facility</p>
              </div>
            </div>
          </div>
          
          <div className="fade-in-section">
            <div className="max-w-lg">
              <div className="inline-block px-4 py-1.5 bg-herb-100 text-herb-700 rounded-full text-sm font-medium mb-6 border border-herb-200 shadow-sm">
                About Star Hi Herbs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Committed to Quality and Sustainability Since 1998
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Star Hi Herbs has been at the forefront of herbal extract manufacturing for over two decades. Our state-of-the-art facilities combine traditional knowledge with modern technology to produce premium botanical ingredients.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We work directly with farmers to ensure sustainable sourcing practices while maintaining complete traceability from seed to extract. Our team of expert scientists, herbalists, and quality control specialists ensure that every product meets the highest standards.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-herb-100 flex items-center justify-center text-herb-600 mr-3 mt-0.5">
                    <Check size={14} />
                  </span>
                  <span className="text-gray-700">State-of-the-art manufacturing facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-herb-100 flex items-center justify-center text-herb-600 mr-3 mt-0.5">
                    <Check size={14} />
                  </span>
                  <span className="text-gray-700">Rigorous quality control measures</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-herb-100 flex items-center justify-center text-herb-600 mr-3 mt-0.5">
                    <Check size={14} />
                  </span>
                  <span className="text-gray-700">Sustainable and ethical sourcing practices</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-herb-100 flex items-center justify-center text-herb-600 mr-3 mt-0.5">
                    <Check size={14} />
                  </span>
                  <span className="text-gray-700">Innovative R&D for new formulations</span>
                </li>
              </ul>
              <Button
                className="bg-herb-500 hover:bg-herb-600 shadow-md text-white"
                asChild
              >
                <Link to="/about-us">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
