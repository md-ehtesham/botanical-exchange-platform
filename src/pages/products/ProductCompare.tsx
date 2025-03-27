
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { getAllProducts } from "@/data/products";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";

const ProductCompare = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  
  // Parse the URL query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const compareIds = searchParams.get("compare")?.split(",") || [];
    
    if (compareIds.length > 0) {
      const allProducts = getAllProducts();
      const productsToCompare = allProducts.filter(p => compareIds.includes(p.id));
      setProducts(productsToCompare);
    } else {
      // If no products to compare, redirect back to products
      navigate("/products");
    }
  }, [location.search, navigate]);

  const removeProductFromComparison = (productId: string) => {
    const updatedProducts = products.filter(p => p.id !== productId);
    setProducts(updatedProducts);
    
    if (updatedProducts.length > 0) {
      const compareIds = updatedProducts.map(p => p.id).join(',');
      navigate(`/products/compare?compare=${compareIds}`, { replace: true });
    } else {
      navigate("/products", { replace: true });
    }
  };

  // Collect all unique property keys for comparison
  const getAllPropertyKeys = () => {
    const propertyGroups = [
      { label: "General Information", keys: ["category", "origin", "sku"] },
      { label: "Functionality", keys: ["functionality"] },
      { label: "Applications", keys: ["applications"] },
      { label: "Industry Uses", keys: ["industryUses"] },
      { label: "Certifications", keys: ["certifications"] }
    ];
    
    return propertyGroups;
  };

  return (
    <PageLayout title="Product Comparison">
      <div className="container-wide pt-8 pb-16">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/products">
              <ArrowLeft className="mr-2" size={16} />
              Back to Products
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold text-herb-800 mb-2">Product Comparison</h1>
          <p className="text-gray-600 mb-6">Compare features and specifications of our products</p>
        </div>

        {products.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-50 border border-gray-200 min-w-[200px]">
                    Product Information
                  </th>
                  {products.map(product => (
                    <th key={product.id} className="p-4 text-center bg-gray-50 border border-gray-200 min-w-[250px]">
                      <div className="relative">
                        <button 
                          className="absolute top-0 right-0 p-1 hover:bg-gray-100 rounded-full"
                          onClick={() => removeProductFromComparison(product.id)}
                        >
                          <X size={16} />
                        </button>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-32 h-32 object-cover rounded-md mx-auto mb-2"
                        />
                        <h3 className="font-medium">{product.name}</h3>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {getAllPropertyKeys().map((group, groupIndex) => (
                  <>
                    <tr key={`group-${groupIndex}`}>
                      <td colSpan={products.length + 1} className="p-3 bg-herb-50 font-medium text-herb-700 border border-gray-200">
                        {group.label}
                      </td>
                    </tr>
                    {group.keys.map(key => (
                      <tr key={key}>
                        <td className="p-4 border border-gray-200 font-medium">
                          {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                        </td>
                        {products.map(product => (
                          <td key={`${product.id}-${key}`} className="p-4 border border-gray-200">
                            {Array.isArray(product[key]) ? (
                              <ul className="list-disc pl-5">
                                {product[key].map((item: string, i: number) => (
                                  <li key={i} className="mb-1 text-sm">{item}</li>
                                ))}
                              </ul>
                            ) : (
                              product[key] || "N/A"
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
                
                {/* Action buttons */}
                <tr>
                  <td className="p-4 border border-gray-200 font-medium">
                    Actions
                  </td>
                  {products.map(product => (
                    <td key={`${product.id}-actions`} className="p-4 border border-gray-200 text-center">
                      <div className="flex flex-col gap-2">
                        <Button className="w-full bg-herb-600 hover:bg-herb-700" size="sm" asChild>
                          <Link to={`/request-sample?product=${product.id}`}>Order Sample</Link>
                        </Button>
                        <Button variant="outline" className="w-full" size="sm" asChild>
                          <Link to={`/request-quote?product=${product.id}`}>Request Quote</Link>
                        </Button>
                        <Button variant="ghost" className="w-full" size="sm" asChild>
                          <Link to={`/products/${product.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-600 mb-4">No products selected for comparison.</p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ProductCompare;
