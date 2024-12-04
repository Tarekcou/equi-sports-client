import React from "react";
import MainLayout from "../layout/MainLayout";
import { useLoaderData, useNavigate } from "react-router-dom";
const AllEquipPage = () => {
  const navigate = useNavigate();
  const equipmentData = useLoaderData();
  console.log(equipmentData);

  // const equipmentData = [
  //   {
  //     id: 1,
  //     name: "Nivia High Grip Volleyball",
  //     category: "Volleyball",
  //     price: "$36.00",
  //     rating: 4,
  //     stock: "In Stock",
  //   },
  //   {
  //     id: 2,
  //     name: "Running Sports Shoes",
  //     category: "Footwear",
  //     price: "$35.00",
  //     rating: 5,
  //     stock: "Out of Stock",
  //   },
  //   {
  //     id: 3,
  //     name: "Badminton Racket",
  //     category: "Badminton",
  //     price: "$69.00",
  //     rating: 4,
  //     stock: "In Stock",
  //   },
  //   {
  //     id: 4,
  //     name: "Spider Protein Shaker Bottle",
  //     category: "Accessories",
  //     price: "$55.00",
  //     rating: 5,
  //     stock: "In Stock",
  //   },
  // ];

  const handleViewDetails = (id) => {
    navigate(`/main/allEquipment/${id}`);
  };

  return (
    <div className="bg-gray-100 mx-auto p-6 max-w-7xl">
      <h2 className="mb-6 font-bold text-2xl">Sports Equipment</h2>
      <table className="border-gray-200 bg-white shadow-md border rounded-lg min-w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Rating</th>
            <th className="px-4 py-2 text-left">Stock Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipmentData.map((equipment, index) => (
            <tr
              key={equipment.id}
              className={`border-t ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="px-4 py-2">{equipment.itemName}</td>
              <td className="px-4 py-2">{equipment.categoryName}</td>
              <td className="px-4 py-2">{equipment.price}</td>
              <td className="px-4 py-2">
                {"⭐".repeat(equipment.rating)}{" "}
                <span className="text-gray-500">({equipment.rating}/5)</span>
              </td>
              <td
                className={`px-4 py-2 font-semibold ${
                  equipment.stockStatus === "In Stock"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {equipment.stock}
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleViewDetails(equipment._id)}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition duration-200"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEquipPage;
