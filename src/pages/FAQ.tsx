
import PageLayout from "@/components/layout/PageLayout";
import FAQSection, { FAQItem } from "@/components/common/FAQSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  // Group FAQ items by category
  const productFaqs: FAQItem[] = [
    {
      question: "What makes your herbal extracts different from others in the market?",
      answer: "Our herbal extracts stand out due to our rigorous quality control processes, sustainable sourcing practices, and advanced extraction technologies. We use state-of-the-art equipment and methods to ensure maximum potency and purity while preserving the natural properties of the herbs."
    },
    {
      question: "Do you provide Certificate of Analysis (CoA) for your products?",
      answer: "Yes, we provide a comprehensive Certificate of Analysis for all our products. Each CoA includes information on potency, purity, microbial testing, heavy metal analysis, and other relevant quality parameters to ensure our products meet the highest standards."
    },
    {
      question: "Are your products suitable for vegan and vegetarian formulations?",
      answer: "Yes, all our herbal extracts are plant-based and suitable for vegan and vegetarian formulations. We do not use any animal-derived ingredients or test our products on animals."
    },
    {
      question: "What is the shelf life of your herbal extracts?",
      answer: "The shelf life of our herbal extracts typically ranges from 2 to 3 years when stored properly in a cool, dry place away from direct sunlight. Specific shelf life information is provided on each product's documentation and packaging."
    }
  ];

  const orderingFaqs: FAQItem[] = [
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer: "Our standard minimum order quantity varies by product, but typically starts at 25kg for most herbal extracts. For specialty ingredients, the MOQ may be lower. Please contact our sales team for specific product MOQs."
    },
    {
      question: "How can I request samples of your products?",
      answer: "You can request samples through our website by filling out the Sample Request Form. Sample quantities are typically 50-100g and are provided at a nominal charge to cover shipping and handling. For existing customers, we often provide samples free of charge."
    },
    {
      question: "What are your payment terms?",
      answer: "For new customers, we typically require prepayment for the first order. For established customers, we offer Net 30 payment terms. We accept payment via bank transfer, credit card, and other standard business payment methods."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship our products worldwide. We work with reliable logistics partners to ensure safe and timely delivery of your orders. International shipping costs and delivery times vary based on destination country and chosen shipping method."
    }
  ];

  const qualityFaqs: FAQItem[] = [
    {
      question: "What certifications do your products have?",
      answer: "Our products hold various certifications including USDA Organic, EU Organic, Non-GMO Project Verified, Kosher, Halal, and GMP. Specific certifications vary by product and are clearly listed on each product page and documentation."
    },
    {
      question: "How do you ensure the purity and potency of your extracts?",
      answer: "We implement a rigorous quality assurance system that includes testing at multiple stages of production. This includes identity testing of raw materials, in-process testing during extraction, and final product testing for potency, purity, and contaminants using HPLC, GC-MS, and other advanced analytical methods."
    },
    {
      question: "Are your facilities GMP certified?",
      answer: "Yes, all our manufacturing facilities are GMP (Good Manufacturing Practice) certified and regularly audited by third-party certification bodies to ensure compliance with international quality standards."
    },
    {
      question: "Do you test for heavy metals and contaminants?",
      answer: "Absolutely. We conduct comprehensive testing for heavy metals (lead, arsenic, cadmium, mercury), pesticide residues, mycotoxins, and microbial contaminants on all our products to ensure safety and compliance with international regulatory standards."
    }
  ];

  const sustainabilityFaqs: FAQItem[] = [
    {
      question: "What sustainable practices do you implement in your operations?",
      answer: "Our sustainability initiatives include renewable energy use in our facilities, water recycling systems, zero-waste packaging options, and carbon offset programs. We are committed to reducing our environmental footprint across all aspects of our business."
    },
    {
      question: "How do you ensure ethical sourcing of your raw materials?",
      answer: "We have established direct relationships with farmers and wild-crafters who follow sustainable harvesting practices. We conduct regular audits of our supply chain to ensure fair labor practices, appropriate compensation, and sustainable agricultural methods."
    },
    {
      question: "Do you offer organic certified products?",
      answer: "Yes, we offer a wide range of USDA and EU Organic certified herbal extracts. Our organic products are grown without synthetic pesticides or fertilizers and processed according to organic standards."
    },
    {
      question: "What packaging options do you offer for sustainable businesses?",
      answer: "We offer several eco-friendly packaging options including recyclable drums, biodegradable bags, and bulk shipping containers that minimize packaging waste. We're also developing compostable packaging solutions for smaller quantity orders."
    }
  ];

  return (
    <PageLayout title="Frequently Asked Questions">
      <div className="pt-10 pb-16 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-bold text-herb-800 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our products, ordering process, and company policies.
            </p>
          </div>
          
          {/* Quick navigation section */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-12">
            <h2 className="text-xl font-semibold mb-4 text-herb-700">Quick Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#products" className="p-4 border border-gray-200 rounded-md hover:border-herb-500 hover:bg-herb-50 transition-colors">
                <h3 className="font-medium text-herb-600 mb-1">Product Information</h3>
                <p className="text-sm text-gray-600">Questions about our herbal extracts and ingredients</p>
              </a>
              <a href="#ordering" className="p-4 border border-gray-200 rounded-md hover:border-herb-500 hover:bg-herb-50 transition-colors">
                <h3 className="font-medium text-herb-600 mb-1">Ordering & Shipping</h3>
                <p className="text-sm text-gray-600">Information about orders, samples, and delivery</p>
              </a>
              <a href="#quality" className="p-4 border border-gray-200 rounded-md hover:border-herb-500 hover:bg-herb-50 transition-colors">
                <h3 className="font-medium text-herb-600 mb-1">Quality & Certifications</h3>
                <p className="text-sm text-gray-600">Details about our quality standards and testing</p>
              </a>
              <a href="#sustainability" className="p-4 border border-gray-200 rounded-md hover:border-herb-500 hover:bg-herb-50 transition-colors">
                <h3 className="font-medium text-herb-600 mb-1">Sustainability</h3>
                <p className="text-sm text-gray-600">Our environmental and ethical practices</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12" id="products">
        <FAQSection 
          title="Product Information" 
          description="Common questions about our herbal extracts and ingredients"
          faqs={productFaqs} 
        />
      </div>
      
      <div className="py-12 bg-gray-50" id="ordering">
        <FAQSection 
          title="Ordering & Shipping" 
          description="Information about orders, samples, and delivery processes"
          faqs={orderingFaqs} 
        />
      </div>
      
      <div className="py-12" id="quality">
        <FAQSection 
          title="Quality & Certifications" 
          description="Details about our quality standards, testing protocols, and certifications"
          faqs={qualityFaqs} 
        />
      </div>
      
      <div className="py-12 bg-gray-50" id="sustainability">
        <FAQSection 
          title="Sustainability" 
          description="Our commitment to environmental and ethical practices"
          faqs={sustainabilityFaqs} 
        />
      </div>
      
      <div className="py-16 bg-herb-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-herb-800 mb-3">Still have questions?</h2>
            <p className="text-gray-600 mb-8">
              If you couldn't find the answer to your question, please don't hesitate to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-herb-600 hover:bg-herb-700">
                <Link to="/contact-us">Contact Support</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/request-quote">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;
