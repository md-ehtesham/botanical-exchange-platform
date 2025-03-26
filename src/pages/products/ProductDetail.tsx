
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "@/data/products";
import PageLayout from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Download, ShoppingCart, FlaskConical, Building, Beaker, HelpCircle } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { getAllProducts } from "@/data/products";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState(getProductById(productId || ""));
  const [relatedProducts, setRelatedProducts] = useState(getAllProducts().slice(0, 3));

  useEffect(() => {
    if (productId) {
      const foundProduct = getProductById(productId);
      setProduct(foundProduct);
      
      if (foundProduct) {
        // Get related products (same category, excluding current product)
        const related = getAllProducts()
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 3);
          
        setRelatedProducts(related);
      }
    }
  }, [productId]);

  if (!product) {
    return (
      <PageLayout>
        <div className="container-wide py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={product.name}>
      <div className="pt-24 pb-16 bg-herb-50">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Product Image */}
            <div className="lg:w-2/5">
              <div className="bg-white p-4 rounded-lg shadow-sm overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto rounded-md object-cover aspect-square"
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div className="lg:w-3/5">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-herb-100 text-herb-700 capitalize">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-herb-800 mb-4">{product.name}</h1>
              
              <p className="text-lg text-gray-600 mb-6">{product.shortDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {product.certifications.map((cert, index) => (
                  <span key={index} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cream-100 text-cream-700">
                    {cert}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <span className="text-sm text-gray-500">SKU</span>
                  <p className="font-medium">{product.sku}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <span className="text-sm text-gray-500">Origin</span>
                  <p className="font-medium">{product.origin}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button className="bg-herb-600 hover:bg-herb-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Order a Sample
                </Button>
                <Button variant="outline" className="border-herb-600 text-herb-600 hover:bg-herb-50">
                  <FileText className="mr-2 h-4 w-4" />
                  Request a Quote
                </Button>
                <Button variant="ghost" className="text-herb-600 hover:bg-herb-50 hover:text-herb-700">
                  <Download className="mr-2 h-4 w-4" />
                  Product Sheet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-wide py-12">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="functionality">Functionality</TabsTrigger>
            <TabsTrigger value="industry">Industry Uses</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-herb-700">
                <FileText className="mr-2 h-5 w-5" />
                Product Description
              </h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="applications" className="mt-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-herb-700">
                <FlaskConical className="mr-2 h-5 w-5" />
                Applications
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-herb-400 mr-2"></span>
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="functionality" className="mt-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-herb-700">
                <Beaker className="mr-2 h-5 w-5" />
                Functionality
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.functionality.map((func, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-herb-400 mr-2"></span>
                    {func}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="industry" className="mt-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-herb-700">
                <Building className="mr-2 h-5 w-5" />
                Industry Uses
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.industryUses.map((industry, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-herb-400 mr-2"></span>
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="faqs" className="mt-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-herb-700">
                <HelpCircle className="mr-2 h-5 w-5" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {product.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <h3 className="font-medium text-lg mb-2 text-herb-700">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-herb-800">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ProductDetail;
