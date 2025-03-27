
import { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog";
import { getAllProducts } from "@/data/products";
import { useLocation, useNavigate } from "react-router-dom";

const ProductComparisonTool = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [availableProducts, setAvailableProducts] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Parse the URL query parameters to get selected products
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const compareIds = searchParams.get("compare")?.split(",") || [];
    
    if (compareIds.length > 0) {
      const allProducts = getAllProducts();
      const productsToCompare = allProducts.filter(p => compareIds.includes(p.id));
      setSelectedProducts(productsToCompare);
      
      // Set available products (excluding already selected ones)
      setAvailableProducts(allProducts.filter(p => !compareIds.includes(p.id)));
    } else {
      setSelectedProducts([]);
      setAvailableProducts(getAllProducts());
    }
  }, [location.search]);

  const addProductToComparison = (product: any) => {
    const updatedSelected = [...selectedProducts, product];
    setSelectedProducts(updatedSelected);
    setAvailableProducts(availableProducts.filter(p => p.id !== product.id));
    
    // Update URL
    const compareIds = updatedSelected.map(p => p.id).join(',');
    navigate(`${location.pathname}?compare=${compareIds}`, { replace: true });
    
    setIsDialogOpen(false);
  };

  const removeProductFromComparison = (productId: string) => {
    const removedProduct = selectedProducts.find(p => p.id === productId);
    const updatedSelected = selectedProducts.filter(p => p.id !== productId);
    setSelectedProducts(updatedSelected);
    
    if (removedProduct) {
      setAvailableProducts([...availableProducts, removedProduct]);
    }
    
    // Update URL
    if (updatedSelected.length > 0) {
      const compareIds = updatedSelected.map(p => p.id).join(',');
      navigate(`${location.pathname}?compare=${compareIds}`, { replace: true });
    } else {
      navigate(location.pathname, { replace: true });
    }
  };

  const clearComparison = () => {
    setSelectedProducts([]);
    setAvailableProducts(getAllProducts());
    navigate(location.pathname, { replace: true });
  };

  if (selectedProducts.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg transition-transform duration-300">
      <div className="container-wide py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-herb-700">Product Comparison ({selectedProducts.length})</h3>
          <div className="flex items-center gap-3">
            <Button 
              variant="default" 
              className="bg-herb-600 hover:bg-herb-700"
              onClick={() => navigate(`/products/compare?compare=${selectedProducts.map(p => p.id).join(',')}`)}
            >
              Compare Products
            </Button>
            <Button variant="ghost" onClick={clearComparison}>
              Clear All
            </Button>
          </div>
        </div>
        
        <div className="flex items-stretch gap-4 overflow-x-auto pb-2">
          {selectedProducts.map(product => (
            <div 
              key={product.id}
              className="flex-shrink-0 w-48 bg-gray-50 rounded-md border border-gray-200 relative"
            >
              <button 
                className="absolute top-2 right-2 p-1 bg-white rounded-full border border-gray-200 hover:bg-gray-100"
                onClick={() => removeProductFromComparison(product.id)}
              >
                <X size={16} />
              </button>
              <div className="p-3">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
                <h4 className="font-medium text-sm line-clamp-2 mb-1">{product.name}</h4>
                <p className="text-xs text-gray-500 capitalize">{product.category}</p>
              </div>
            </div>
          ))}
          
          {selectedProducts.length < 4 && (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button className="flex-shrink-0 w-48 h-[184px] border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                  <Plus size={24} className="text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Add Product</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Select Product to Compare</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto py-4">
                  {availableProducts.map(product => (
                    <button
                      key={product.id}
                      className="flex flex-col items-center p-3 border border-gray-200 rounded-md hover:border-herb-500 hover:shadow-sm transition-all"
                      onClick={() => addProductToComparison(product)}
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-32 object-cover rounded-md mb-2"
                      />
                      <h4 className="font-medium text-sm text-center line-clamp-2">{product.name}</h4>
                    </button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductComparisonTool;
