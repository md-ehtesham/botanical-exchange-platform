
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Leaf, Microscope, Users, Globe, ShieldCheck, Award, TrendingUp } from "lucide-react";

const AboutUs = () => {
  return (
    <PageLayout title="About Us">
      <PageHeader 
        title="About Us" 
        subtitle="Learn about our mission, values, and the journey that made us a leading manufacturer of botanical extracts."
        backgroundImage="https://images.unsplash.com/photo-1565954786464-82f0608d2b0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
      />
      
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-herb-800">Our Mission & Vision</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Star Hi Herbs, our mission is to harness nature's potential through innovative extraction technologies, delivering premium botanical ingredients that enhance health and wellness globally.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our vision is to be the world's most trusted partner for botanical extracts, setting industry standards for quality, innovation, and sustainability while improving lives through nature's solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="bg-herb-100 p-3 rounded-full mr-4">
                    <Microscope className="h-6 w-6 text-herb-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-herb-700 mb-1">Research-Driven</h3>
                    <p className="text-sm text-gray-600">Continuous innovation through scientific research</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-herb-100 p-3 rounded-full mr-4">
                    <ShieldCheck className="h-6 w-6 text-herb-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-herb-700 mb-1">Quality Assurance</h3>
                    <p className="text-sm text-gray-600">Rigorous testing and quality control</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-herb-100 p-3 rounded-full mr-4">
                    <Leaf className="h-6 w-6 text-herb-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-herb-700 mb-1">Sustainability</h3>
                    <p className="text-sm text-gray-600">Environmentally responsible practices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-herb-100 p-3 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-herb-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-herb-700 mb-1">Global Reach</h3>
                    <p className="text-sm text-gray-600">Serving clients in over 40 countries</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1617781913051-f0d151ee5afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Lab researchers" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-herb-500 text-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                <h3 className="font-bold text-xl mb-2">25+ Years</h3>
                <p className="text-herb-100">Of experience and expertise in botanical extracts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Timeline */}
      <section className="py-16 bg-herb-50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-herb-800 text-center">Our Journey</h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-herb-200 hidden md:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="font-bold text-xl mb-2 text-herb-700">1998</h3>
                  <h4 className="font-semibold text-lg mb-3 text-herb-600">Founding</h4>
                  <p className="text-gray-600">Star Hi Herbs was founded with a mission to provide high-quality herbal extracts to the pharmaceutical industry.</p>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 bg-herb-400 rounded-full h-8 w-8 flex items-center justify-center border-4 border-herb-100 z-10"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 bg-herb-400 rounded-full h-8 w-8 flex items-center justify-center border-4 border-herb-100 z-10"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="font-bold text-xl mb-2 text-herb-700">2005</h3>
                  <h4 className="font-semibold text-lg mb-3 text-herb-600">Expansion</h4>
                  <p className="text-gray-600">Expanded operations with a new state-of-the-art manufacturing facility and R&D center.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="font-bold text-xl mb-2 text-herb-700">2010</h3>
                  <h4 className="font-semibold text-lg mb-3 text-herb-600">Global Presence</h4>
                  <p className="text-gray-600">Established international distribution network serving clients in Europe, North America, and Asia.</p>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 bg-herb-400 rounded-full h-8 w-8 flex items-center justify-center border-4 border-herb-100 z-10"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 bg-herb-400 rounded-full h-8 w-8 flex items-center justify-center border-4 border-herb-100 z-10"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="font-bold text-xl mb-2 text-herb-700">2015</h3>
                  <h4 className="font-semibold text-lg mb-3 text-herb-600">Organic Certification</h4>
                  <p className="text-gray-600">Launched organic line of herbal extracts and obtained USDA and EU organic certifications.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="font-bold text-xl mb-2 text-herb-700">2020</h3>
                  <h4 className="font-semibold text-lg mb-3 text-herb-600">Innovation Center</h4>
                  <p className="text-gray-600">Opened advanced innovation center dedicated to developing proprietary extraction technologies.</p>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 bg-herb-400 rounded-full h-8 w-8 flex items-center justify-center border-4 border-herb-100 z-10"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 bg-herb-400 rounded-full h-8 w-8 flex items-center justify-center border-4 border-herb-100 z-10"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="font-bold text-xl mb-2 text-herb-700">Today</h3>
                  <h4 className="font-semibold text-lg mb-3 text-herb-600">Leading Manufacturer</h4>
                  <p className="text-gray-600">Now a leading global manufacturer of botanical extracts serving pharmaceutical, nutraceutical, food, and cosmetic industries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-herb-800 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-herb-50 p-6 rounded-lg text-center">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-herb-500" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in everything we do, from sourcing to manufacturing to customer service.</p>
            </div>
            
            <div className="bg-herb-50 p-6 rounded-lg text-center">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Microscope className="h-8 w-8 text-herb-500" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">Innovation</h3>
              <p className="text-gray-600">We continuously innovate to develop better extraction methods and discover new applications.</p>
            </div>
            
            <div className="bg-herb-50 p-6 rounded-lg text-center">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-herb-500" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">Integrity</h3>
              <p className="text-gray-600">We operate with transparency, honesty, and accountability in all business practices.</p>
            </div>
            
            <div className="bg-herb-50 p-6 rounded-lg text-center">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-herb-500" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">Sustainability</h3>
              <p className="text-gray-600">We are committed to environmental sustainability and responsible sourcing practices.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-herb-50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-herb-800 text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80" 
                alt="CEO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1 text-herb-800">Dr. Raj Sharma</h3>
                <p className="text-herb-500 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600 mb-4">Ph.D. in Pharmacognosy with over 30 years of experience in botanical research and extraction technologies.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2388&q=80" 
                alt="COO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1 text-herb-800">Dr. Priya Patel</h3>
                <p className="text-herb-500 font-medium mb-4">Chief Operations Officer</p>
                <p className="text-gray-600 mb-4">Expert in manufacturing operations with 20 years of experience in the herbal extract industry.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="CSO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1 text-herb-800">Dr. Vikram Singh</h3>
                <p className="text-herb-500 font-medium mb-4">Chief Scientific Officer</p>
                <p className="text-gray-600 mb-4">Leading our R&D initiatives with extensive experience in phytochemistry and natural product development.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/team">
                View Full Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-herb-700 text-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <TrendingUp className="h-10 w-10 text-cream-400" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-white">25+</h3>
              <p className="text-herb-100 font-medium">Years of Experience</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <Leaf className="h-10 w-10 text-cream-400" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-white">200+</h3>
              <p className="text-herb-100 font-medium">Botanical Products</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <Globe className="h-10 w-10 text-cream-400" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-white">40+</h3>
              <p className="text-herb-100 font-medium">Countries Served</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <Users className="h-10 w-10 text-cream-400" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-white">500+</h3>
              <p className="text-herb-100 font-medium">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="bg-herb-50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-herb-800">Ready to Partner with Us?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you need standardized extracts, organic ingredients, or custom formulations, our team is ready to support your product development needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <Link to="/contact-us">
                  Contact Us
                </Link>
              </Button>
              <Button variant="outline" className="border-herb-600 text-herb-600" asChild>
                <Link to="/request-quote">
                  Request a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
