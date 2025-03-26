
import Button from '../common/Button';

const QualitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-lg">
              <div className="inline-block px-4 py-1 bg-herb-100 text-herb-700 rounded-full text-sm font-medium mb-6">
                Quality Assurance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Uncompromising Quality at Every Step
              </h2>
              <p className="text-gray-700 mb-6">
                At Star Hi Herbs, quality is not just a standard—it's our foundation. Our comprehensive quality assurance program ensures that every extract meets the strictest global standards for purity, potency, and safety.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-herb-100 flex items-center justify-center text-herb-600 mr-4 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Advanced Testing Methods</h3>
                    <p className="text-gray-600">
                      HPLC, HPTLC, LC-MS, GC-MS analysis for compound identification and standardization, ensuring product consistency.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-herb-100 flex items-center justify-center text-herb-600 mr-4 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Rigorous Safety Protocols</h3>
                    <p className="text-gray-600">
                      Comprehensive testing for heavy metals, pesticides, microbial contamination, and aflatoxins in every batch.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-herb-100 flex items-center justify-center text-herb-600 mr-4 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Complete Documentation</h3>
                    <p className="text-gray-600">
                      Detailed certificates of analysis, stability data, and regulatory compliance documents available for all products.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button
                variant="primary"
                size="md"
                asChild
                href="/quality-assurance"
              >
                Learn More About Our Quality
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1581093577421-f561a654a353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Quality testing at Star Hi Herbs laboratory"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-8 -right-8 h-64 w-64 bg-cream-100 rounded-lg -z-10"></div>
              <div className="absolute -bottom-8 -left-8 h-40 w-40 bg-herb-100 rounded-lg -z-10"></div>
              
              <div className="absolute bottom-6 left-6 glass-card p-6 rounded-lg backdrop-blur-md bg-white/60 shadow-soft max-w-[250px]">
                <span className="text-herb-500 font-semibold block mb-2">QUALITY CONTROL</span>
                <p className="text-gray-700">Our in-house laboratory conducts over 15 quality tests on each product batch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
