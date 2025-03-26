
import { useEffect, useRef } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatItem = ({ value, label, suffix = '', delay = 0 }: StatItemProps) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current && counterRef.current) {
        hasAnimated.current = true;
        
        // Start with 0 and count up to the target value
        let start = 0;
        const increment = Math.ceil(value / 40);
        const duration = 1500; // Animation duration in ms
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);
        let frame = 0;
        
        const timer = setTimeout(() => {
          const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const currentCount = Math.round(progress * value);
            
            if (counterRef.current) {
              counterRef.current.textContent = currentCount + suffix;
            }
            
            if (frame === totalFrames) {
              clearInterval(counter);
            }
          }, frameDuration);
        }, delay);
        
        return () => clearTimeout(timer);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [value, suffix, delay]);

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-soft border border-herb-100">
      <div ref={counterRef} className="text-4xl md:text-5xl font-bold text-herb-600 mb-2">
        0{suffix}
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-herb-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Trusted By Industry Leaders Worldwide
          </h2>
          <p className="text-gray-600 text-lg">
            Our commitment to quality and innovation has established us as a leading global supplier of premium botanical ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem value={25} label="Years of Experience" suffix="+" delay={0} />
          <StatItem value={200} label="Premium Products" suffix="+" delay={100} />
          <StatItem value={40} label="Countries Served" suffix="+" delay={200} />
          <StatItem value={500} label="Happy Clients" suffix="+" delay={300} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
