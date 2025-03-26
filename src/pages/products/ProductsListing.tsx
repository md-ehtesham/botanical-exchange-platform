
import { useState, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/common/PageHeader";
import ProductCard from "@/components/products/ProductCard";
import { Product, getAllProducts, getProductsByCategory } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductsListingProps {
  category?: string;
}

const ProductsListing = ({ category }: ProductsListingProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(category || "all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    }
  }, [category]);

  useEffect(() => {
    let filteredProducts: Product[];
    
    // Filter by category
    if (activeCategory === "all") {
      filteredProducts = getAllProducts();
    } else {
      filteredProducts = getProductsByCategory(activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setProducts(filteredProducts);
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (newCategory: string) => {
    setActiveCategory(newCategory);
  };

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case "standardized":
        return "Standardized Herbal Extracts";
      case "organic":
        return "Organic Herbal Extracts";
      case "signature":
        return "Signature Ingredients";
      case "probiotics":
        return "Probiotics";
      default:
        return "All Products";
    }
  };

  const getCategoryDescription = () => {
    switch (activeCategory) {
      case "standardized":
        return "Our comprehensive range of standardized herbal extracts, carefully processed to ensure consistent active compound levels.";
      case "organic":
        return "Certified organic herbal extracts sourced from sustainable farms and processed according to organic standards.";
      case "signature":
        return "Proprietary formulations developed by our R&D team, offering enhanced efficacy and bioavailability.";
      case "probiotics":
        return "High-quality probiotic strains with guaranteed potency and stability for various applications.";
      default:
        return "Browse our complete catalog of premium botanical extracts, organic herbs, signature ingredients, and probiotics.";
    }
  };

  return (
    <PageLayout title={getCategoryTitle()}>
      <PageHeader 
        title={getCategoryTitle()} 
        subtitle={getCategoryDescription()}
        backgroundImage="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
      />
      
      <div className="container-wide py-12">
        <div className="mb-10">
          <Tabs defaultValue={activeCategory} onValueChange={handleCategoryChange}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <TabsList className="mb-4 md:mb-0">
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="standardized">Standardized</TabsTrigger>
                <TabsTrigger value="organic">Organic</TabsTrigger>
                <TabsTrigger value="signature">Signature</TabsTrigger>
                <TabsTrigger value="probiotics">Probiotics</TabsTrigger>
              </TabsList>
              
              <div className="relative w-full md:w-60">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herb-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <TabsContent value="all" className="mt-0">
              {products.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No products found. Try adjusting your search.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="standardized" className="mt-0">
              {/* Content will be populated by the effect */}
            </TabsContent>
            
            <TabsContent value="organic" className="mt-0">
              {/* Content will be populated by the effect */}
            </TabsContent>
            
            <TabsContent value="signature" className="mt-0">
              {/* Content will be populated by the effect */}
            </TabsContent>
            
            <TabsContent value="probiotics" className="mt-0">
              {/* Content will be populated by the effect */}
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-16 bg-herb-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-herb-800">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-3 text-herb-700">What makes your extracts different?</h3>
              <p className="text-gray-600">Our extracts are produced using proprietary extraction technologies that preserve the full spectrum of beneficial compounds while ensuring consistent standardization.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-3 text-herb-700">Do you offer custom formulations?</h3>
              <p className="text-gray-600">Yes, our R&D team can develop custom botanical extracts tailored to your specific requirements and specifications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-3 text-herb-700">What certifications do your products have?</h3>
              <p className="text-gray-600">Our products carry various certifications including ISO 9001, GMP, HACCP, Organic, Kosher, and Halal, depending on the specific product.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-3 text-herb-700">What is your minimum order quantity?</h3>
              <p className="text-gray-600">Minimum order quantities vary by product. Please contact our sales team for specific information about the products you're interested in.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductsListing;
