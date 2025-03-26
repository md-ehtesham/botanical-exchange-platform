
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Star Hi Herbs has been our trusted supplier for over 8 years. Their consistent quality and innovative extracts have helped us develop premium formulations that outperform in the market.",
    author: "Dr. Sarah Johnson",
    position: "R&D Director",
    company: "NutriLife Pharmaceuticals",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    content: "The quality documentation and technical support provided by Star Hi Herbs is exceptional. Their extracts have become a cornerstone of our product line due to their consistent potency and purity.",
    author: "Michael Chen",
    position: "Procurement Manager",
    company: "Vitality Supplements Inc.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    content: "We switched to Star Hi Herbs' organic extracts two years ago and have seen remarkable improvements in our product efficacy. Their commitment to sustainability aligns perfectly with our brand values.",
    author: "Emma Rodriguez",
    position: "CEO",
    company: "Pure Nature Organics",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 bg-herb-700 text-white">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-herb-600 text-herb-100 rounded-full text-sm font-medium mb-6">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-herb-100 text-lg">
            We're proud to partner with leading brands worldwide who trust our ingredients for their premium formulations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-herb-600/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-strong">
            <div className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cream-400 opacity-50">
                <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H7C7.53043 5 8.03914 5.21071 8.41421 5.58579C8.78929 5.96086 9 6.46957 9 7M10 11V15C10 15.5304 9.78929 16.0391 9.41421 16.4142C9.03914 16.7893 8.53043 17 8 17H7M10 11H14M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7M20 11V15C20 15.5304 19.7893 16.0391 19.4142 16.4142C19.0391 16.7893 18.5304 17 18 17H17M20 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#caa256" color="#caa256" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl mb-8 italic text-white">
                "{testimonials[activeIndex].content}"
              </p>
              
              <div className="flex items-center">
                <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonials[activeIndex].author}</h4>
                  <p className="text-herb-100">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute right-12 bottom-12 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full flex items-center justify-center bg-herb-600 hover:bg-herb-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full flex items-center justify-center bg-herb-600 hover:bg-herb-500 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-white' : 'bg-herb-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
