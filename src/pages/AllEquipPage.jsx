import React, { useContext, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import notAvailable from "../../src/assets/notavailabe.jpg";
const AllEquipPage = () => {
  const navigate = useNavigate();

  // console.log(equipmentData);
  const { isLoading, setLoading } = useContext(AuthContext);

  const products = useLoaderData();
  // console.log(products);

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
      // console.log(product.categoryName, filters.category);
      if (filters.category && product.categoryName !== filters.category)
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
      // if (
      //   filters.discount &&
      //   parseInt(product.discountPercentage) < Number(filters.discount)
      // )
      //   return false;

      // Filter by stock availability
      // console.log(filters.inStock);
      // if (filters.inStock == false) return false;

      return true;
    });
  };
  // console.log(filters);

  const filteredProducts = filterProducts();
  const handleViewDetails = (id) => {
    navigate(`/main/productDetails/${id}`);
  };

  return (
    <div className="bg-gray-100 mx-auto p-2 max-w-11/12">
      <h2 className="mb-6 font-bold text-3xl text-center">Sports Equipment</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex lg:flex-row flex-col shadow-md">
          {/* Filter Section */}
          <div className="bg-gray-100 mx-auto p-4 rounded-lg w-full lg:w-3/12">
            <h2 className="mb-4 font-bold text-xl">Filters</h2>
            <div className="flex flex-row md:flex-col gap-3">
              {/* Category Name */}
              <div>
                <label
                  className="block mb-2 font-medium text-gray-700"
                  htmlFor="categoryName"
                >
                  Category Name
                </label>
                <select
                  className="border-gray-300 p-2 border rounded w-full"
                  value={filters.category}
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                >
                  <option value="">Select Categories</option>
                  <option value="Football">Football</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Volleybal">Volleybal</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Batminton">Batminton</option>
                </select>
              </div>
              {/* Price Range Filter */}
              <div className="mb-4">
                <h3 className="mb-2 font-semibold">Price Range</h3>
                <div className="space-y-2">
                  {["", "0-1000", "1000-3000", "3000-10000", "10000-20000"].map(
                    (range) => (
                      <label
                        key={range}
                        className="flex items-center space-x-2"
                      >
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
                    )
                  )}
                </div>
              </div>

              {/* Discount Filter */}
              {/* <div className="mb-4">
              <h3 className="mb-2 font-semibold">Minimum Discount</h3>
              <div className="space-y-2">
                <select
                  className="border-gray-300 p-2 border rounded w-full"
                  value={filters.discount}
                  onChange={(e) =>
                    handleFilterChange("discount", e.target.value)
                  }
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
            </div> */}
              {/* Stock Availability Filter */}
              {/* <div className="mb-4">
                <label className="flex md:flex-row flex-col items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={filters.inStock}
                    onChange={(e) =>
                      handleFilterChange("inStock", e.target.checked)
                    }
                  />
                  <span>In Stock Only</span>
                </label>
              </div> */}
            </div>
          </div>
          {filteredProducts.length == 0 ? (
            <h1 className="mx-auto mt-10 w-9/12 h-fu text-3xl text-center">
              No Data Found{" "}
              <img className="m-10 mx-auto w-36" src={notAvailable} />
            </h1>
          ) : (
            <div className="w-full lg:w-9/12 overflow-x-auto">
              <table className="border-gray-200 bg-white shadow-md border rounded-lg table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left">Serial</th>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Category</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Rating</th>
                    <th className="px-4 py-2 text-left">Stock Status</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((equipment, index) => (
                    <tr
                      key={index}
                      className={`border-t  ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{equipment.itemName}</td>
                      <td className="px-4 py-2">{equipment.categoryName}</td>
                      <td className="px-4 py-2">{equipment.originalPrice}</td>
                      <td className="px-4 py-2">
                        {"⭐".repeat(equipment.rating)}{" "}
                        <span className="text-gray-500">
                          ({equipment.rating}/5)
                        </span>
                      </td>
                      <td
                        className={`px-4 py-2 font-semibold ${
                          equipment.stockStatus === "In Stock"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {equipment.stockStatus}
                      </td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleViewDetails(equipment._id)}
                          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition duration-200 md:btn-sm"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllEquipPage;
