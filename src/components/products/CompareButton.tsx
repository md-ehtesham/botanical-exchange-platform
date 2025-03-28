
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface CompareButtonProps {
  productId: string;
  className?: string;
}

const CompareButton = ({ productId, className = "" }: CompareButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const addToComparison = () => {
    const searchParams = new URLSearchParams(location.search);
    const compareParam = searchParams.get("compare");
    let compareIds: string[] = [];
    
    if (compareParam) {
      compareIds = compareParam.split(",");
    }
    
    // Check if product is already in comparison
    if (compareIds.includes(productId)) {
      toast({
        title: "Already in comparison",
        description: "This product is already in your comparison list",
      });
      return;
    }
    
    // Check if we've reached the maximum number of products
    if (compareIds.length >= 4) {
      toast({
        title: "Comparison limit reached",
        description: "You can compare up to 4 products at once",
        variant: "destructive"
      });
      return;
    }
    
    // Add product to comparison
    compareIds.push(productId);
    searchParams.set("compare", compareIds.join(","));
    
    toast({
      title: "Added to comparison",
      description: "Product added to your comparison list",
    });
    
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
  
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className={`px-2 hover:bg-starhi-green/10 text-starhi-green hover:text-starhi-green-dark ${className}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addToComparison();
      }}
    >
      + Compare
    </Button>
  );
};

export default CompareButton;
