
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
  initialValue?: string;
}

const SearchInput = ({ 
  onSearch, 
  placeholder = "Search...", 
  className = "",
  initialValue = ""
}: SearchInputProps) => {
  const [query, setQuery] = useState(initialValue);
  
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(query);
    }, 300);
    
    return () => clearTimeout(debounceTimer);
  }, [query, onSearch]);
  
  const handleClear = () => {
    setQuery("");
    onSearch("");
  };
  
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="search"
        className="w-full py-2 pl-10 pr-10 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herb-500"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={handleClear}
          type="button"
        >
          <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
