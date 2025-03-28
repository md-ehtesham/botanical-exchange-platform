
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-herb-100 text-herb-700 capitalize">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 text-herb-700">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.shortDescription}</p>
        <div className="flex justify-between items-center">
          <Button variant="ghost" size="sm" className="text-starhi-green hover:text-starhi-green-dark hover:bg-starhi-green/10 p-0" asChild>
            <Link to={`/products/${product.id}`}>
              View Details <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
