
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../common/Button';

const products = [
  {
    id: 1,
    name: "Turmeric Extract",
    category: "Standardized Herbal Extract",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9400ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Standardized to 95% curcuminoids, our premium turmeric extract offers powerful anti-inflammatory and antioxidant properties."
  },
  {
    id: 2,
    name: "Ashwagandha Extract",
    category: "Standardized Herbal Extract",
    image: "https://images.unsplash.com/photo-1620881266303-71cc59a3f5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Our KSM-66® Ashwagandha extract is standardized to contain >5% withanolides for optimum adaptogenic benefits."
  },
  {
    id: 3,
    name: "Bacopa Monnieri Extract",
    category: "Standardized Herbal Extract",
    image: "https://images.unsplash.com/photo-1567233308607-116d37603a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Standardized to 20% bacosides, our Bacopa extract supports cognitive function and memory enhancement."
  },
  {
    id: 4,
    name: "Organic Turmeric Extract",
    category: "Organic Herbal Extract",
    image: "https://images.unsplash.com/photo-1615485552848-8e6d3bad363c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "USDA Certified Organic turmeric extract with natural curcuminoids, free from synthetic additives and pesticides."
  },
  {
    id: 5,
    name: "Turmimax™",
    category: "Signature Ingredients",
    image: "https://images.unsplash.com/photo-1615484477201-9f4953340fab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Our proprietary turmeric formulation with enhanced bioavailability and proven efficacy at lower dosages."
  },
  {
    id: 6,
    name: "Lactobacillus acidophilus",
    category: "Probiotics",
    image: "https://images.unsplash.com/photo-1576086135878-bd7e7c29d82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "High-potency, acid-resistant probiotic strain to support digestive health and immune function."
  },
];

const ProductsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollToProduct = (index: number) => {
    if (scrollContainerRef.current) {
      const productWidth = scrollContainerRef.current.scrollWidth / products.length;
      scrollContainerRef.current.scrollTo({
        left: productWidth * index,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };
  
  const scrollNext = () => {
    const nextIndex = Math.min(activeIndex + 1, products.length - 1);
    scrollToProduct(nextIndex);
  };
  
  const scrollPrev = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    scrollToProduct(prevIndex);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const productWidth = scrollWidth / products.length;
        const newIndex = Math.round(scrollLeft / productWidth);
        setActiveIndex(newIndex);
      }
    };
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [products.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <div className="inline-block px-4 py-1 bg-herb-100 text-herb-700 rounded-full text-sm font-medium mb-6">
              Our Products
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Signature Products for Superior Formulations
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our range of premium botanical extracts designed to enhance your product line with potent, pure, and traceable ingredients.
            </p>
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              className="h-10 w-10 rounded-full flex items-center justify-center border border-herb-200 hover:bg-herb-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous product"
            >
              <ChevronLeft size={20} className="text-herb-700" />
            </button>
            <button
              onClick={scrollNext}
              disabled={activeIndex === products.length - 1}
              className="h-10 w-10 rounded-full flex items-center justify-center border border-herb-200 hover:bg-herb-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next product"
            >
              <ChevronRight size={20} className="text-herb-700" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory gap-6 pb-6 mask-fade-right"
        >
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="min-w-[300px] md:min-w-[400px] bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden flex-shrink-0 snap-start"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-herb-100 text-herb-700 rounded-full text-xs font-medium mb-3">
                  {product.category}
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button
                  variant="outlined"
                  size="sm"
                  asChild
                  href={`/product/${product.id}`}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToProduct(index)}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === activeIndex ? 'bg-starhi-green' : 'bg-herb-200'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="md"
            asChild
            href="/products"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
