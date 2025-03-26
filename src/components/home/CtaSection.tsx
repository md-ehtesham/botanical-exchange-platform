
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-cream-500/10">
      <div className="container-wide">
        <div className="rounded-2xl bg-gradient-to-br from-herb-500 to-herb-700 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Ready to Enhance Your Product Line?
              </h2>
              <p className="text-herb-100 text-lg mb-8 leading-relaxed">
                Whether you need standardized extracts, organic ingredients, or custom formulations, our team is here to support your product development journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-herb-700 hover:bg-cream-100 border-transparent shadow-md"
                  asChild 
                >
                  <Link to="/request-sample">
                    Order a Sample
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/request-quote">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block h-full min-h-[400px]">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1585435557343-3b348586bc1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                  alt="Laboratory samples" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-herb-700/30 backdrop-blur-sm"></div>
              </div>
              
              <div className="relative z-10 h-full flex items-center justify-center p-10">
                <div className="glass-card rounded-xl p-8 backdrop-blur-lg bg-white/20 max-w-md shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Custom Formulation Services</h3>
                  <p className="text-white/90 mb-6">
                    Our R&D team can develop custom botanical extracts tailored to your specific requirements and specifications.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white/10"
                    asChild
                  >
                    <Link to="/custom-formulations">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
