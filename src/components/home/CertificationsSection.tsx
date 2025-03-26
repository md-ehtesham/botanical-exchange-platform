
import { useRef, useEffect } from 'react';

const certifications = [
  {
    name: "ISO 9001:2015",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/ISO_9001_logo.svg/240px-ISO_9001_logo.svg.png",
  },
  {
    name: "GMP Certified",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/GMP_logo.svg/240px-GMP_logo.svg.png",
  },
  {
    name: "USDA Organic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/USDA_organic_seal.svg/240px-USDA_organic_seal.svg.png",
  },
  {
    name: "Kosher Certified",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Kosher_certification_logo.svg/240px-Kosher_certification_logo.svg.png",
  },
  {
    name: "Halal Certified",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Halal_logo.svg/240px-Halal_logo.svg.png",
  },
  {
    name: "Non-GMO Project",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Non-GMO_Project_butterfly.svg/240px-Non-GMO_Project_butterfly.svg.png",
  },
  {
    name: "EU Organic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Organic-Logo.svg/240px-Organic-Logo.svg.png",
  },
  {
    name: "FSSC 22000",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/FSSC_22000_logo.svg/240px-FSSC_22000_logo.svg.png",
  },
];

const CertificationsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let scrollDirection = 1;
    let scrollAmount = 0;
    let animationFrameId: number;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    
    const step = () => {
      if (!scrollContainer) return;
      
      // Change direction if we reach either end
      if (scrollAmount >= maxScroll) {
        scrollDirection = -1;
      } else if (scrollAmount <= 0) {
        scrollDirection = 1;
      }
      
      scrollAmount += scrollDirection * 0.5;
      scrollContainer.scrollLeft = scrollAmount;
      
      animationFrameId = requestAnimationFrame(step);
    };
    
    animationFrameId = requestAnimationFrame(step);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="py-16 bg-herb-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-10 fade-in-section">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our Quality Certifications
          </h2>
          <p className="text-gray-600">
            We maintain the highest industry standards through rigorous certification processes, ensuring our products meet global quality requirements.
          </p>
        </div>
        
        <div className="relative overflow-hidden px-4">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto py-6 no-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {certifications.map((cert, index) => (
              <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center">
                <div className="h-24 w-24 flex items-center justify-center bg-white rounded-lg p-3 shadow-soft">
                  <img src={cert.logo} alt={cert.name} className="max-h-16 max-w-16" />
                </div>
                <span className="mt-3 text-sm text-gray-600 font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
          
          {/* Gradient fade on sides */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-herb-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-herb-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
