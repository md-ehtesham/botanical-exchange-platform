import { useState, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/common/PageHeader";
import ProductCard from "@/components/products/ProductCard";
import { Product, getAllProducts, getProductsByCategory } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductFilters from "@/components/products/ProductFilters";
import SearchInput from "@/components/search/SearchInput";

interface ProductsListingProps {
  category?: string;
}

const ProductsListing = ({ category }: ProductsListingProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(category || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("featured");

  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    }
  }, [category]);

  useEffect(() => {
    // Get products by category
    const productsForCategory = activeCategory === "all" 
      ? getAllProducts() 
      : getProductsByCategory(activeCategory);
    
    setProducts(productsForCategory);
  }, [activeCategory]);

  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchQuery.trim() !== "") {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply additional filters (simulated - in a real app these would be based on actual product properties)
    if (activeFilters.length > 0) {
      // This is just a simulation - in a real app, the products would have these properties
      result = result.filter(product => {
        // For demo purposes, we'll just filter based on some arbitrary logic using string IDs instead of modulo operations
        if (activeFilters.includes("organic") && product.id.includes("2")) return false;
        if (activeFilters.includes("kosher") && product.id.includes("3")) return false;
        if (activeFilters.includes("halal") && product.id.includes("4")) return false;
        if (activeFilters.includes("non-gmo") && product.id.includes("5")) return false;
        
        if (activeFilters.includes("nutraceutical") && product.category !== "standardized") return false;
        if (activeFilters.includes("pharmaceutical") && product.category !== "organic") return false;
        if (activeFilters.includes("cosmetic") && product.category !== "signature") return false;
        if (activeFilters.includes("food-beverage") && product.category !== "probiotics") return false;
        
        return true;
      });
    }
    
    // Apply sorting
    result = sortProducts(result, sortOption);
    
    setFilteredProducts(result);
  }, [products, searchQuery, activeFilters, sortOption]);

  const sortProducts = (productsToSort: Product[], sort: string): Product[] => {
    const sorted = [...productsToSort];
    
    switch (sort) {
      case "alphabetical":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "alphabetical-reverse":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case "newest":
        // In a real app, we would sort by date - here we'll just reverse the order as a simulation
        return sorted.reverse();
      case "featured":
      default:
        // Keep default order
        return sorted;
    }
  };

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
              
              <SearchInput 
                onSearch={setSearchQuery} 
                placeholder="Search products..." 
                className="w-full md:w-60"
              />
            </div>
            
            <ProductFilters 
              onFilterChange={setActiveFilters}
              onSortChange={setSortOption}
            />
            
            <TabsContent value="all" className="mt-0">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-500 mb-4">No products found matching your criteria.</p>
                  <button 
                    className="text-herb-600 underline"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveFilters([]);
                      setSortOption("featured");
                    }}
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map(product => (
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
