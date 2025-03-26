
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck, CheckCircle, Award, Search, FileText, Server, FlaskConical, BarChart3 } from "lucide-react";

const Quality = () => {
  return (
    <PageLayout title="Quality Assurance">
      <PageHeader 
        title="Quality Assurance" 
        subtitle="Our commitment to excellence through rigorous quality control and testing protocols."
        backgroundImage="https://images.unsplash.com/photo-1579154392043-724d81b3c5cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
      />
      
      {/* Quality Commitment */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-herb-800">Our Commitment to Quality</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Star Hi Herbs, quality is not just a standard—it's our foundation. Every product we manufacture undergoes rigorous testing and quality control procedures to ensure consistent potency, purity, and efficacy.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our state-of-the-art quality control laboratory is equipped with advanced analytical instruments operated by experienced scientists who verify that each product meets our stringent specifications before release.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-herb-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">In-house quality testing at every stage of production</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-herb-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">Third-party verification by accredited laboratories</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-herb-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">Complete traceability from raw material to finished product</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-herb-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">Comprehensive documentation and Certificate of Analysis</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Quality Testing" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-herb-500 text-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                <h3 className="font-bold text-xl mb-2">ISO 9001:2015</h3>
                <p className="text-herb-100">Certified Quality Management System</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quality Control Process */}
      <section className="py-16 bg-herb-50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-herb-800 text-center">Our Quality Control Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-herb-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-herb-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">Raw Material Testing</h3>
              <p className="text-gray-600">Each batch of raw materials undergoes identity verification, heavy metal testing, and microbial analysis before acceptance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-herb-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <FlaskConical className="h-8 w-8 text-herb-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">In-Process Testing</h3>
              <p className="text-gray-600">Continuous monitoring and testing during the extraction and processing phases to ensure consistency and quality.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-herb-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-herb-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">Finished Product Analysis</h3>
              <p className="text-gray-600">Comprehensive testing of finished products for potency, purity, and compliance with specifications.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-herb-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-herb-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">Documentation</h3>
              <p className="text-gray-600">Detailed documentation for each batch, including test results, process parameters, and traceability information.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testing Methods */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-herb-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-herb-700">HPLC Analysis</h3>
                  <p className="text-gray-600">High-Performance Liquid Chromatography for accurate quantification of active compounds.</p>
                </div>
                
                <div className="bg-herb-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-herb-700">GC-MS</h3>
                  <p className="text-gray-600">Gas Chromatography-Mass Spectrometry for volatile compound identification and analysis.</p>
                </div>
                
                <div className="bg-herb-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-herb-700">FTIR Spectroscopy</h3>
                  <p className="text-gray-600">Fourier-Transform Infrared Spectroscopy for identification and structural analysis.</p>
                </div>
                
                <div className="bg-herb-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-herb-700">ICP-MS</h3>
                  <p className="text-gray-600">Inductively Coupled Plasma Mass Spectrometry for heavy metal analysis with high sensitivity.</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-herb-800">Advanced Testing Methods</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our quality control laboratory is equipped with the latest analytical technologies to ensure comprehensive testing and accurate results for every product.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of analytical chemists and quality control specialists utilize these advanced methods to verify the identity, potency, and purity of our extracts, ensuring they meet our strict quality standards.
              </p>
              <Button asChild className="mt-4">
                <Link to="/request-quote">
                  Request Detailed Testing Information
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 bg-herb-700 text-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">Our Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-herb-600/50 p-6 rounded-lg text-center">
              <div className="bg-white/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-cream-300" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">ISO 9001:2015</h3>
              <p className="text-herb-100">Certified Quality Management System ensuring consistent quality standards across all operations.</p>
            </div>
            
            <div className="bg-herb-600/50 p-6 rounded-lg text-center">
              <div className="bg-white/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-cream-300" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">GMP Certified</h3>
              <p className="text-herb-100">Good Manufacturing Practice certification ensuring products are consistently produced according to quality standards.</p>
            </div>
            
            <div className="bg-herb-600/50 p-6 rounded-lg text-center">
              <div className="bg-white/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-cream-300" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">HACCP</h3>
              <p className="text-herb-100">Hazard Analysis Critical Control Point certification for systematic preventive approach to food safety.</p>
            </div>
            
            <div className="bg-herb-600/50 p-6 rounded-lg text-center">
              <div className="bg-white/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-cream-300" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">USDA Organic</h3>
              <p className="text-herb-100">Certification for organic products meeting strict USDA regulations for organic agricultural production.</p>
            </div>
            
            <div className="bg-herb-600/50 p-6 rounded-lg text-center">
              <div className="bg-white/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-cream-300" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Kosher Certified</h3>
              <p className="text-herb-100">Products certified to comply with kosher dietary laws and regulations.</p>
            </div>
            
            <div className="bg-herb-600/50 p-6 rounded-lg text-center">
              <div className="bg-white/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-cream-300" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Halal Certified</h3>
              <p className="text-herb-100">Products certified to comply with Islamic dietary laws and regulations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-herb-800 text-center">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-herb-50 p-6 rounded-lg shadow-sm">
              <div className="flex space-x-1 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic">"Star Hi Herbs' quality control processes are unmatched in the industry. Their commitment to excellence ensures that we receive consistent, high-quality extracts for our formulations."</p>
              <div>
                <h4 className="font-bold text-herb-700">Dr. Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Chief Scientific Officer, NutriHealth Inc.</p>
              </div>
            </div>
            
            <div className="bg-herb-50 p-6 rounded-lg shadow-sm">
              <div className="flex space-x-1 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic">"The comprehensive documentation and certificates provided with each product give us complete confidence in the quality and compliance of Star Hi Herbs' extracts."</p>
              <div>
                <h4 className="font-bold text-herb-700">Michael Chen</h4>
                <p className="text-sm text-gray-500">Quality Director, Global Nutraceuticals</p>
              </div>
            </div>
            
            <div className="bg-herb-50 p-6 rounded-lg shadow-sm">
              <div className="flex space-x-1 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic">"We've been working with Star Hi Herbs for over a decade. Their quality assurance team is responsive, knowledgeable, and always willing to answer our technical questions."</p>
              <div>
                <h4 className="font-bold text-herb-700">Emma Thompson</h4>
                <p className="text-sm text-gray-500">Procurement Manager, Wellness Products Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-herb-50">
        <div className="container-wide">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-herb-800">Need Detailed Quality Information?</h2>
                <p className="text-gray-600 mb-6">
                  Our team is ready to provide you with detailed quality specifications, testing methodologies, and certification information for any of our products.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/request-quote">
                      Request Product Specifications
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-herb-600 text-herb-600" asChild>
                    <Link to="/contact-us">
                      Contact Quality Team
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-4 -left-4 bg-herb-100 w-24 h-24 rounded-full"></div>
                  <div className="absolute -bottom-4 -right-4 bg-cream-100 w-32 h-32 rounded-full"></div>
                  <div className="relative z-10 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-center mb-6">
                      <ShieldCheck className="h-16 w-16 text-herb-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-herb-700 text-center">Quality Guarantee</h3>
                    <p className="text-gray-600 text-center">
                      We stand behind the quality of every product we produce. Our commitment to excellence is backed by our satisfaction guarantee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Quality;
