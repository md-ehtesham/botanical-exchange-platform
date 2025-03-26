
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Droplet, Sprout, Recycle, Factory, TreePine, Wind, Users } from "lucide-react";

const Sustainability = () => {
  return (
    <PageLayout title="Sustainability">
      <PageHeader 
        title="Our Sustainability Commitment" 
        subtitle="Discover how we're working to create a positive environmental impact through responsible sourcing and sustainable practices."
        backgroundImage="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
      />
      
      {/* Sustainability Overview */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-herb-800">Our Approach to Sustainability</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Star Hi Herbs, sustainability isn't just a practice—it's a core value that guides everything we do. We believe that the botanical extracts industry has a responsibility to protect the natural resources it depends on.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our comprehensive sustainability strategy focuses on environmental stewardship, ethical sourcing, waste reduction, and community empowerment. We continuously work to minimize our ecological footprint while maximizing the positive impact we have on communities where we source our raw materials.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="bg-herb-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Leaf className="h-5 w-5 text-herb-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-herb-700 mb-1">Environmental Responsibility</h3>
                    <p className="text-gray-600">Minimizing our environmental impact through energy efficiency, waste reduction, and water conservation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-herb-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Sprout className="h-5 w-5 text-herb-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-herb-700 mb-1">Sustainable Sourcing</h3>
                    <p className="text-gray-600">Ethically sourcing raw materials with respect for biodiversity and ecosystem health.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-herb-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Users className="h-5 w-5 text-herb-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-herb-700 mb-1">Community Engagement</h3>
                    <p className="text-gray-600">Supporting local communities through fair trade practices and development programs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-herb-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Recycle className="h-5 w-5 text-herb-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-herb-700 mb-1">Circular Economy</h3>
                    <p className="text-gray-600">Implementing circular economy principles to reduce waste and maximize resource efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Sustainability" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-herb-500 text-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                <h3 className="font-bold text-xl mb-2">40% Reduction</h3>
                <p className="text-herb-100">In carbon emissions since 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Initiatives */}
      <section className="py-16 bg-herb-50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-herb-800 text-center">Our Key Sustainability Initiatives</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-herb-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Sprout className="h-8 w-8 text-herb-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">Sustainable Farming Practices</h3>
              <p className="text-gray-600 mb-4">
                We partner with farmers who use sustainable agricultural practices, including organic farming, crop rotation, and natural pest control methods.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Promoting organic cultivation techniques
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Supporting biodiversity conservation
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Reducing chemical inputs in farming
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-herb-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Droplet className="h-8 w-8 text-herb-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">Water Conservation</h3>
              <p className="text-gray-600 mb-4">
                Our manufacturing facilities implement advanced water management systems to reduce consumption and treat wastewater for reuse.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Closed-loop water recycling systems
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Rainwater harvesting infrastructure
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  30% reduction in water usage since 2019
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-herb-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Factory className="h-8 w-8 text-herb-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">Green Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Our production facilities are designed to minimize energy consumption and reduce carbon emissions through efficient processes.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Energy-efficient equipment and lighting
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Solar panels powering 35% of operations
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Optimized extraction processes
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-herb-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Recycle className="h-8 w-8 text-herb-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">Waste Reduction</h3>
              <p className="text-gray-600 mb-4">
                We've implemented comprehensive waste management programs to reduce, reuse, and recycle materials throughout our operations.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Zero-waste-to-landfill initiative
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Upcycling plant waste into biofuel
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Compostable and recyclable packaging
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-herb-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <TreePine className="h-8 w-8 text-herb-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">Biodiversity Protection</h3>
              <p className="text-gray-600 mb-4">
                We actively work to protect plant species and their ecosystems through sustainable harvesting practices and conservation efforts.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Plant species conservation programs
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Restoration of natural habitats
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Non-destructive harvesting techniques
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-herb-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-herb-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-herb-700">Community Development</h3>
              <p className="text-gray-600 mb-4">
                We invest in the communities where we source our materials, supporting education, healthcare, and economic development.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Fair trade partnerships with farmers
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Agricultural training programs
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-herb-500 mr-2"></span>
                  Community infrastructure projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sustainability Goals */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-herb-800">Our 2030 Sustainability Goals</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We've set ambitious targets to guide our sustainability journey over the next decade, aligned with the United Nations Sustainable Development Goals.
              </p>
              
              <div className="space-y-6">
                <div className="bg-herb-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="bg-herb-200 text-herb-700 font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                    <h3 className="font-bold text-herb-700">Carbon Neutrality</h3>
                  </div>
                  <p className="text-gray-600 pl-11">Achieve carbon neutrality across all operations by 2030.</p>
                </div>
                
                <div className="bg-herb-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="bg-herb-200 text-herb-700 font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                    <h3 className="font-bold text-herb-700">Zero Waste</h3>
                  </div>
                  <p className="text-gray-600 pl-11">Eliminate all waste to landfill from our manufacturing processes.</p>
                </div>
                
                <div className="bg-herb-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="bg-herb-200 text-herb-700 font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                    <h3 className="font-bold text-herb-700">Water Stewardship</h3>
                  </div>
                  <p className="text-gray-600 pl-11">Reduce water consumption by 50% and implement closed-loop water systems in all facilities.</p>
                </div>
                
                <div className="bg-herb-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="bg-herb-200 text-herb-700 font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                    <h3 className="font-bold text-herb-700">Sustainable Sourcing</h3>
                  </div>
                  <p className="text-gray-600 pl-11">Source 100% of raw materials from certified sustainable or regenerative agricultural practices.</p>
                </div>
                
                <div className="bg-herb-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="bg-herb-200 text-herb-700 font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                    <h3 className="font-bold text-herb-700">Social Impact</h3>
                  </div>
                  <p className="text-gray-600 pl-11">Improve the livelihoods of 10,000 farmers and their communities through our supply chain initiatives.</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1564121211008-963e432bd5ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Sustainability Goals" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-herb-700/80 text-white p-6 rounded-lg backdrop-blur-sm max-w-xs">
                  <h3 className="font-bold text-xl mb-2">Sustainability Report</h3>
                  <p className="text-herb-100 mb-4">Download our latest sustainability report to learn more about our progress and initiatives.</p>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10 w-full">
                    Download Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 bg-herb-700 text-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">Our Sustainability Certifications</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-herb-600/50 p-6 rounded-lg text-center">
              <div className="bg-white/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-cream-300" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-white">USDA Organic</h3>
              <p className="text-herb-100 text-sm">Certified organic practices</p>
            </div>
            
            <div className="bg-herb-600/50 p-6 rounded-lg text-center">
              <div className="bg-white/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-cream-300" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-white">EU Organic</h3>
              <p className="text-herb-100 text-sm">European Union organic certification</p>
            </div>
            
            <div className="bg-herb-600/50 p-6 rounded-lg text-center">
              <div className="bg-white/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Recycle className="h-8 w-8 text-cream-300" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-white">Fair Trade</h3>
              <p className="text-herb-100 text-sm">Fair trade practices</p>
            </div>
            
            <div className="bg-herb-600/50 p-6 rounded-lg text-center">
              <div className="bg-white/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Droplet className="h-8 w-8 text-cream-300" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-white">Rainforest Alliance</h3>
              <p className="text-herb-100 text-sm">Sustainable forestry</p>
            </div>
            
            <div className="bg-herb-600/50 p-6 rounded-lg text-center">
              <div className="bg-white/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Wind className="h-8 w-8 text-cream-300" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-white">Carbon Trust</h3>
              <p className="text-herb-100 text-sm">Carbon reduction</p>
            </div>
            
            <div className="bg-herb-600/50 p-6 rounded-lg text-center">
              <div className="bg-white/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <TreePine className="h-8 w-8 text-cream-300" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-white">Non-GMO Project</h3>
              <p className="text-herb-100 text-sm">GMO-free verification</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partner Stories */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-herb-800 text-center">Sustainability Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-herb-50 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1591184510259-b6f1be3d7aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Turmeric Farming Initiative" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-herb-700">Turmeric Farming Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Our partnership with turmeric farmers in Southern India has improved yields by 40% while reducing water usage by 30% through sustainable farming techniques.
                </p>
                <Button variant="link" className="text-herb-600 p-0" asChild>
                  <a href="#">Read the full story</a>
                </Button>
              </div>
            </div>
            
            <div className="bg-herb-50 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1562694364-0b92ec580dd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Solar-Powered Facility" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-herb-700">Solar-Powered Facility</h3>
                <p className="text-gray-600 mb-4">
                  Our manufacturing facility in Gujarat now runs on 85% solar power, reducing carbon emissions by over 1,200 tons annually.
                </p>
                <Button variant="link" className="text-herb-600 p-0" asChild>
                  <a href="#">Read the full story</a>
                </Button>
              </div>
            </div>
            
            <div className="bg-herb-50 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1592978562538-952c0c8c1163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Water Recycling System" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-herb-700">Water Recycling System</h3>
                <p className="text-gray-600 mb-4">
                  Our innovative water recycling system recovers and purifies 95% of water used in extraction processes, saving over 20 million liters annually.
                </p>
                <Button variant="link" className="text-herb-600 p-0" asChild>
                  <a href="#">Read the full story</a>
                </Button>
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
                <h2 className="text-3xl font-bold mb-4 text-herb-800">Partner with Us for a Sustainable Future</h2>
                <p className="text-gray-600 mb-6">
                  Join us in our sustainability journey. Whether you're a supplier, customer, or community organization, we welcome opportunities to collaborate on initiatives that promote environmental and social responsibility.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/contact-us">
                      Contact Sustainability Team
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-herb-600 text-herb-600" asChild>
                    <Link to="/download-catalogue">
                      Download Sustainability Report
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-herb-50 p-6 rounded-lg">
                  <div className="flex justify-center mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Sustainable Future" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-herb-700 text-white rounded-lg">
                    <div>
                      <h3 className="font-bold">UN Sustainable Development Goals</h3>
                      <p className="text-herb-100 text-sm">Aligned with 7 SDGs</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/10">
                      Learn More
                    </Button>
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

export default Sustainability;
