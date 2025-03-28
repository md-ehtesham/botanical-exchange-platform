
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay for the animation to be noticeable
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 bg-gradient-to-b from-herb-50/70 to-herb-100/50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-herb-200/10 to-cream-100/20 opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-herb-100 rounded-full blur-3xl opacity-20" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-herb-200/20 backdrop-blur-sm rounded-full animate-spin-slow origin-center opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/5 w-20 h-20 bg-cream-200/20 backdrop-blur-sm rounded-full animate-spin-slow origin-center opacity-30" style={{ animationDuration: '30s' }}></div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`max-w-xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block px-4 py-1.5 bg-herb-100 text-herb-700 rounded-full text-sm font-medium mb-6 border border-herb-200 shadow-sm">
              Premium Botanical Extracts Manufacturer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-herb-700">Nature's Finest Extracts</span> for Your Premium Formulations
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Star Hi Herbs delivers standardized botanical extracts, organic formulations, and probiotics with uncompromising quality for nutraceutical and pharmaceutical applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-starhi-green text-white hover:bg-starhi-green-dark shadow-md" 
                asChild
              >
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-starhi-green text-starhi-green hover:bg-starhi-green/10"
                asChild
              >
                <Link to="/about-us">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-herb-100/80 z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-60 h-60 rounded-full bg-cream-100/80 z-0"></div>
              
              <div className="w-full h-[500px] rounded-2xl bg-white shadow-medium overflow-hidden relative z-10">
                <img 
                  src="/lovable-uploads/2f40721d-b1fd-4594-a49d-ba85da03ed4b.png" 
                  alt="Herbal extracts in laboratory" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-herb-700/50 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-xl backdrop-blur-sm bg-white/30 shadow-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="h-3 w-3 rounded-full bg-herb-400"></div>
                    <span className="text-white font-medium text-sm">Quality Assurance</span>
                  </div>
                  <p className="text-white text-lg font-semibold">Every extract is rigorously tested to ensure premium quality and potency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
