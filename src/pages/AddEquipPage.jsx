import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const AddEquipPage = ({ userEmail }) => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  // console.log(product);
  const [formData, setFormData] = useState({
    name: user.displayName,
    email: user.email,
    imageUrl: "",
    itemName: "",
    categoryName: "",
    description: "",
    originalPrice: "",
    discountedPrice: "",
    discountPercentage: "",

    rating: "",
    customization: "",
    processingTime: "",
    stockStatus: "",
    stockItem: "",
  });
  useEffect(() => {
    if (product) setFormData({ ...formData, ...product });
  }, []);

  // Calculate discount
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  // Handle file input
  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, image: e.target.files[0] });
  //   console.log(e.target.files[0]);
  // };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateDiscount();
    console.log(formData);

    fetch("http://localhost:5005/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // form.clear;
        Swal.fire({
          title: "Success!",
          text: "One item added successfully",
          icon: "success",
          confirmButtonText: "ok",
        });
      })
      .catch((error) => {
        console.error("Error adding item:", error);
        Swal.fire({
          title: "Error!",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };
  // Handle file input
  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, image: e.target.files[0] });
  //   console.log(e.target.files[0]);
  // };

  // Handle form submission
  const handleUpdate = (e, id) => {
    e.preventDefault();
    calculateDiscount();
    console.log(id);
    // API call to add item (example endpoint)
    fetch(`http://localhost:5005/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        Swal.fire({
          title: "Success!",
          text: "One item Updated successfully",
          icon: "success",
          confirmButtonText: "ok",
        });
      })
      .catch((error) => {
        console.error("Error adding item:", error);
        Swal.fire({
          title: "Error!",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };
  const calculateDiscount = () => {
    console.log(formData.originalPrice, typeof formData.discountPercentage);
    if (formData.discountPercentage == "0") return formData.originalPrice;

    if (formData.originalPrice && formData.discountPercentage) {
      const discount =
        (parseInt(formData.originalPrice) *
          parseInt(formData.discountPercentage)) /
        100;
      const finalPrice = parseInt(formData.originalPrice) - discount;
      setFormData((prev) => ({
        ...prev,
        discountedPrice: finalPrice.toFixed(2),
      }));
      console.log(formData.discountedPrice);
    } else {
      alert("Please enter valid values for both fields.");
    }
  };

  return (
    <form
      className="space-y-6 bg-gray-100 shadow-md mx-auto p-6 rounded-lg max-w-4xl"
      onSubmit={product ? (e) => handleUpdate(e, product._id) : handleSubmit}
    >
      <h1 className="font-bold text-2xl text-center">Add Sports Equipment</h1>
      {/* Read-Only Fields */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          User Name
        </label>
        <input
          type="text"
          value={user.displayName}
          readOnly
          className="block bg-gray-200 px-4 py-2 border rounded-md w-full cursor-not-allowed"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700">
          User Email
        </label>
        <input
          type="email"
          value={user?.email}
          readOnly
          className="block bg-gray-200 px-4 py-2 border rounded-md w-full cursor-not-allowed"
        />
      </div>

      {/* Item Name */}
      <div>
        <label
          className="block mb-2 font-medium text-gray-700"
          htmlFor="itemName"
        >
          Item Name
        </label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          className="block px-4 py-2 border rounded-md w-full"
          required
        />
      </div>

      {/* Category Name */}
      <div>
        <label
          className="block mb-2 font-medium text-gray-700"
          htmlFor="categoryName"
        >
          Category Name
        </label>
        <select
          type="text"
          id="categoryName"
          name="categoryName"
          value={formData.categoryName}
          onChange={handleChange}
          className="block px-4 py-2 border rounded-md w-full"
          required
        >
          <option value="">Select Categories</option>
          <option value="Football">Football</option>
          <option value="Cricket">Cricket</option>
          <option value="Volleybal">Volleybal</option>
          <option value="Basketball">Basketball</option>
          <option value="Batminton">Batminton</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label
          className="block mb-2 font-medium text-gray-700"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="block px-4 py-2 border rounded-md w-full"
          rows="3"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          htmlFor="originalPrice"
          className="block mb-2 font-semibold text-gray-700"
        >
          Original Price ($)
        </label>
        <input
          type="number"
          id="originalPrice"
          name="originalPrice"
          value={formData.originalPrice}
          onChange={handleChange}
          placeholder="Please Enter a price"
          className="block px-4 py-2 border rounded-md w-full"
          step={0}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="discountPercentage"
          className="block mb-2 font-semibold text-gray-700"
        >
          Discount Percentage (%)
        </label>

        <select
          type="text"
          id="discountPercentage"
          name="discountPercentage"
          value={formData.discountPercentage}
          onChange={handleChange}
          className="block px-4 py-2 border rounded-md w-full"
          required
        >
          <option value="">Discount Percent</option>
          <option value="0">0%</option>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
          <option value="20">20%</option>
          <option value="25">25%</option>
          <option value="30">30%</option>
          <option value="50">50%</option>
        </select>
      </div>

      {/* Rating */}
      <div>
        <label
          className="block mb-2 font-medium text-gray-700"
          htmlFor="rating"
        >
          Rating (1-5)
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="block px-4 py-2 border rounded-md w-full"
          min="1"
          max="5"
          step={0}
          required
        />
      </div>

      {/* Customization */}
      <div>
        <label
          className="block mb-2 font-medium text-gray-700"
          htmlFor="customization"
        >
          Customization Options
        </label>
        <input
          type="text"
          id="customization"
          name="customization"
          value={formData.customization}
          onChange={handleChange}
          className="block px-4 py-2 border rounded-md w-full"
          placeholder="e.g., Bat with extra grip, Hit paper"
        />
      </div>

      {/* Processing Time */}
      <div>
        <label
          className="block mb-2 font-medium text-gray-700"
          htmlFor="processingTime"
        >
          Processing Time (in days)
        </label>
        <input
          type="number"
          id="processingTime"
          name="processingTime"
          value={formData.processingTime}
          onChange={handleChange}
          className="block px-4 py-2 border rounded-md w-full"
          required
          step={0}
        />
      </div>

      {/* Stock Status */}
      <div>
        <label
          className="block mb-2 font-medium text-gray-700"
          htmlFor="stockStatus"
        >
          Stock Quantity
        </label>
        <select
          type="text"
          id="stockStatus"
          name="stockStatus"
          value={formData.stockStatus}
          onChange={handleChange}
          className="block px-4 py-2 border rounded-md w-full"
          required
        >
          <option value="">Stock Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Not In Stock">Not In Stock</option>
        </select>
      </div>
      {formData.stockStatus == "In Stock" && (
        <div className="mb-4">
          <label
            htmlFor="stock item"
            className="block mb-2 font-semibold text-gray-700"
          >
            Stock Amount
          </label>
          <input
            type="number"
            id="stockItem"
            name="stockItem"
            value={formData.stockItem}
            onChange={handleChange}
            placeholder="Please enter a stock amount"
            className="block px-4 py-2 border rounded-md w-full"
            step={0}
            required
          />
        </div>
      )}
      {/* Image Upload */}
      <div>
        <label
          className="block mb-2 font-medium text-gray-700"
          htmlFor="imageUrl"
        >
          Upload Image
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="block px-4 py-2 border rounded-md w-full"
        />
      </div>

      {/* Submit Button */}
      {product ? (
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-lg font-semibold text-white"
          >
            Update Item
          </button>
        </div>
      ) : (
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-lg font-semibold text-white"
          >
            Add Item
          </button>
        </div>
      )}
    </form>
  );
};

export default AddEquipPage;
