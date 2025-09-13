import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

interface ProductFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

const ProductFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}: ProductFiltersProps) => {
  const categories = [
    "All",
    "Smart Devices",
    "Automation",
    "Sensors",
    "Controllers",
    "Accessories",
  ];

  return (
    <div className="glass-effect rounded-2xl p-6 mb-8 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-sky-600" />
        <h3 className="text-xl font-semibold gradient-text">Filters</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative bg-white/80 rounded-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-10 border-sky-300 focus:border-sky-500 focus:ring-sky-500"
          />
        </div>

        {/* Category Filter */}
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full h-10 p-2 border border-sky-300 rounded-md bg-white/80 focus:border-sky-500 focus:ring-sky-500 text-sm"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        <div>
          <Button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            
            className="w-full h-10 border border-sky-300 text-sky-600 hover:bg-sky-50 bg-white/80"
          >
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
