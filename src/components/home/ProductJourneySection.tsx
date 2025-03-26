
import { useEffect, useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Sustainable Sourcing",
    description: "We ethically source our raw materials directly from farmers, ensuring fair compensation and sustainable harvesting practices.",
    icon: "🌱",
  },
  {
    number: "02",
    title: "State-of-the-Art Processing",
    description: "Our advanced facilities process herbs using innovative methods that preserve their natural potency and bioactive compounds.",
    icon: "🔬",
  },
  {
    number: "03",
    title: "Rigorous Quality Testing",
    description: "Every batch undergoes comprehensive testing for purity, potency, and safety, meeting the highest global standards.",
    icon: "✓",
  },
  {
    number: "04",
    title: "Secure Global Delivery",
    description: "We ensure timely, secure delivery with complete documentation and quality certificates for your peace of mind.",
    icon: "🌍",
  },
];

const ProductJourneySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            const steps = sectionRef.current.querySelectorAll('.journey-step');
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('is-visible');
              }, 200 * index);
            });
          }
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-10 md:py-20 bg-herb-50/50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 px-4">
          <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-herb-100 text-herb-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-herb-200 shadow-sm">
            Our Process
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            From Nature to Formulation: The Star Hi Herbs Journey
          </h2>
          <p className="text-gray-600 text-sm md:text-lg">
            We maintain complete control and transparency throughout our supply chain, ensuring quality at every step from plant selection to final delivery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-0">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="journey-step fade-in-section bg-white rounded-lg p-5 md:p-8 shadow-soft border border-herb-100 relative h-full"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-herb-100 flex items-center justify-center text-herb-600 mb-4 md:mb-6 text-base md:text-xl">
                <span>{step.icon}</span>
              </div>
              <div className="text-cream-500 font-bold text-xl md:text-2xl mb-2 md:mb-3">{step.number}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-herb-700">{step.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-0 -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#829575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductJourneySection;
