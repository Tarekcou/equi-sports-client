import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

function CheckoutPage() {
  const { cart, setCart, emptyCart, removeItemFromCart } =
    useContext(AuthContext);
  // const { cartItems, setCartItems } = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "creditCard",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Football Shoes", price: 10, quantity: 2 },
    { id: 2, name: "Batminton bal", price: 20, quantity: 1 },
    { id: 3, name: "Cricket Stamp", price: 15, quantity: 3 },
  ]);

  // Calculate total cost
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // const [cout, setCount] = useState();
  // const countOccurrences = cart.reduce((acc, item) => {
  //   acc[item] = (acc[item] || 0) + 1;
  //   console.log(acc);
  //   setCount(acc);
  //   return acc;
  // }, {});

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 mx-auto p-4 w-8/12 min-h-screen">
      {/* cart item table */}
      <div className="mx-auto mt-10 w-full">
        <button onClick={() => emptyCart()} className="btn btn-sm btn-warning">
          clear cart
        </button>
        <h1 className="mb-5 font-bold text-2xl">Shopping Cart</h1>
        <table className="border-collapse border-gray-300 border w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-gray-300 p-2 border text-left">Item</th>
              <th className="text-right border-gray-300 p-2 border">Price</th>
              <th className="text-right border-gray-300 p-2 border">
                Quantity
              </th>
              <th className="text-right border-gray-300 p-2 border">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border-gray-300 p-2 border">{item.name}</td>
                <td className="text-right border-gray-300 p-2 border">
                  ${item.price.toFixed(2)}
                </td>
                <td className="text-right border-gray-300 p-2 border">
                  {item.quantity}
                </td>
                <td className="text-right border-gray-300 p-2 border">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-200 font-bold">
              <td className="border-gray-300 p-2 border" colSpan="3">
                Total
              </td>
              <td className="text-right border-gray-300 p-2 border">
                ${totalCost}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* checkout form */}
      <div className="bg-white shadow-md p-6 rounded-lg w-full">
        <h2 className="mb-4 font-bold text-2xl">Checkout</h2>
        <form onSubmit={handleSubmit}>
          {/* Personal Details */}
          <div className="mb-4">
            <label
              className="block mb-2 font-medium text-gray-700"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="border-gray-300 p-2 border rounded-lg focus:ring focus:ring-blue-300 w-full"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border-gray-300 p-2 border rounded-lg focus:ring focus:ring-blue-300 w-full"
              placeholder="example@domain.com"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label
              className="block mb-2 font-medium text-gray-700"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="border-gray-300 p-2 border rounded-lg focus:ring focus:ring-blue-300 w-full"
              placeholder="123 Main St"
              required
            />
          </div>

          <div className="gap-4 grid grid-cols-2 mb-4">
            <div>
              <label
                className="block mb-2 font-medium text-gray-700"
                htmlFor="city"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="border-gray-300 p-2 border rounded-lg focus:ring focus:ring-blue-300 w-full"
                placeholder="City"
                required
              />
            </div>
            <div>
              <label
                className="block mb-2 font-medium text-gray-700"
                htmlFor="zipCode"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="border-gray-300 p-2 border rounded-lg focus:ring focus:ring-blue-300 w-full"
                placeholder="12345"
                required
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700">
              Payment Method
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={formData.paymentMethod === "creditCard"}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Credit Card</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">PayPal</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg focus:ring focus:ring-blue-300 w-full font-medium text-white"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;
