import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { MdDelete } from "react-icons/md";
import { FaFilePen } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

const MyEquipPage = () => {
  // const [products, setProducts] = useState([]);
  const products = useLoaderData() || [];
  // console.log(products);
  const navigate = useNavigate();
  const { isLoading, setLoading } = useContext(AuthContext);
  useEffect(() => {
    // setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  // useEffect(() => {
  //   fetch(`https://equi-sports-server-iota.vercel.app/myEquipment/sitarek77@gmail.com`)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://equi-sports-server-iota.vercel.app/product/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    console.log("Update product with ID:", id);
    navigate(`/main/addEquipment/${id}`);
  };

  const handleViewDetails = (id) => {
    console.log("View details of product with ID:", id);
  };

  return (
    <div className="bg-gray-100 mx-auto min-h-screen">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mx-auto my-6 w-11/12">
          <h1 className="my-6 font-bold text-3xl text-center text-gray-800">
            {products.length == 0 ? (
              <div className="flex justify-center items-center">
                <img
                  src="https://icons.veryicon.com/png/o/miscellaneous/contribution/empty-box-1.png"
                  alt="empty"
                  className="w-24 h-24"
                />
                <h1>No Item Availabe </h1>{" "}
              </div>
            ) : (
              "My Equipment"
            )}
          </h1>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="flex flex-col bg-white shadow-lg p-4 rounded-lg"
              >
                {/* Product Image */}
                <img
                  src={product.imageUrl}
                  alt={product.itemName}
                  className="mb-4 rounded-md w-full h-48 object-cover"
                />
                {/* Product Details */}
                <h2 className="mb-2 font-bold text-gray-800 text-xl">
                  {product.itemName}
                </h2>
                <p className="text-gray-600">
                  Price: {product.originalPrice} ${" "}
                </p>
                <p className="mb-2 text-yellow-500">Rating: {product.rating}</p>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-green-500 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-green-500 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-green-500 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-green-500 mask mask-star-2"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className={`bg-green-500 mask-half-1  mask-star-2 `}
                  />
                </div>

                <p className={`my-2 font-semibold`}>
                  Availability:{" "}
                  <span
                    className={`${
                      product.stockStatus === "In Stock"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {product.stockStatus}
                  </span>
                </p>
                <p className="mb-4 text-gray-600">
                  Category: {product.categoryName}
                </p>
                {/* Action Buttons */}
                <div className="flex justify-between space-x-2 mt-auto">
                  <MdDelete
                    className="rounded font-bold text-3xl text-red-500 cursor-pointer"
                    onClick={() => handleDelete(product._id)}
                  />
                  <FaFilePen
                    className="rounded font-bold text-3xl cursor-pointer hover:update text-yellow-500"
                    onClick={() => handleUpdate(product._id)}
                  />
                  <NavLink
                    to={`/main/productDetails/${product._id}`}
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-bold text-white btn-sm"
                    // onClick={() => handleViewDetails(product._id)}
                  >
                    {/* <BsThreeDotsVertical /> */}
                    View Details
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEquipPage;
