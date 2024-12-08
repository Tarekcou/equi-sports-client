import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";

const AllFeatureProducts = () => {
  const products = useLoaderData();

  // const [products] = useState([
  //   { id: 1, name: "Volleyball", category: "Sports", price: "$36" },
  //   { id: 2, name: "Badminton Racket", category: "Sports", price: "$69" },
  //   { id: 3, name: "Protein Shaker", category: "Fitness", price: "$55" },
  //   { id: 4, name: "Basketball Hoop", category: "Sports", price: "$9" },
  //   { id: 5, name: "Running Shoes", category: "Footwear", price: "$35" },
  // ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter products based on selected category
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    discount: "",
    inStock: false,
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filterProducts = () => {
    return products.filter((product) => {
      // Filter by category
      // console.log(product.categoryName);
      if (
        filters.category &&
        product.categoryName.toLowerCase() !== filters.category.toLowerCase()
      )
        return false;

      // Filter by price range
      if (filters.priceRange) {
        // console.log(filters.priceRange);
        const [min, max] = filters.priceRange.split("-").map(Number);
        // console.log(min, max, parseInt(product.originalPrice));
        if (
          parseInt(product.originalPrice) < min ||
          parseInt(product.originalPrice) > max
        )
          return false;
        // filters.priceRange = max;
      }

      // Filter by discount
      if (
        filters.discount &&
        parseInt(product.discountPercentage) < Number(filters.discount)
      )
        return false;

      // Filter by stock availability
      console.log(product.stockStatus);
      if (filters.inStock && !product.stockStatus == "In Stock") return false;

      return true;
    });
  };
  // console.log(filters);

  const filteredProducts = filterProducts();

  return (
    <div className="flex lg:flex-row flex-col gap-4 p-6">
      {/* Filter Section */}
      <div className="bg-gray-100 shadow-md p-4 rounded-lg w-ful lg:w-1/4">
        <h2 className="mb-4 font-bold text-xl">Filters</h2>

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Category</h3>
          <div className="space-y-2">
            {[
              "",
              "Cricket",
              "Football",
              "Batminton",
              "Volleyball",
              "Basketball",
            ].map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  className="form-radio"
                  checked={filters.category === category}
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                />
                <span>{category === "" ? "All" : category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Price Range</h3>
          <div className="space-y-2">
            {["", "0-1000", "1000-3000", "3000-10000"].map((range) => (
              <label key={range} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="priceRange"
                  value={range}
                  className="form-radio"
                  checked={filters.priceRange === range}
                  onChange={(e) =>
                    handleFilterChange("priceRange", e.target.value)
                  }
                />
                <span>{range === "" ? "All" : range}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Discount Filter */}
        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Minimum Discount</h3>
          <div className="space-y-2">
            <select
              className="border-gray-300 p-2 border rounded w-full"
              value={filters.discount}
              onChange={(e) => handleFilterChange("discount", e.target.value)}
            >
              <option value="">Discount (%) </option>
              <option value="5">5%</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="50">50%</option>
            </select>
          </div>
        </div>

        {/* Stock Availability Filter */}
        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={filters.inStock}
              onChange={(e) => handleFilterChange("inStock", e.target.checked)}
            />
            <span>In Stock Only</span>
          </label>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-1 max-w-10/12">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllFeatureProducts;
