import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "../layout/MainLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signedIn, setUser, user, setLoading, isLoading, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Add your login logic here
    console.log("Login details:", { email, password });

    signedIn(email, password)
      .then((userCredential) => {
        // Signed in
        toast("Log in Processing..");
        const user = userCredential.user;
        console.log(user);
        setUser(user);

        console.log(location?.state);
        if (location?.state) navigate(location?.state);
        else {
          navigate("/");
        }
        setLoading(false);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        setErr(errorMessage);
        // console.log(error.)
      });
  };

  const handleGoogleLogin = () => {
    toast("Log in Processing...");
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);

        if (location?.state) navigate(location?.state);
        else {
          navigate("/");
        }
        setLoading(false);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // FOrgot pass
  const history = useLocation(); // For navigation to the forgot password page

  const handleForgotPasswordClick = () => {
    // Redirect to forgot password page with email as a query param
    // history.push(`/forgot-password?email=${email}`);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-white shadow-lg py-16 p-8 rounded-lg w-11/12 md:w-8/12 lg:w-6/12 h-full">
          <h2 className="font-bold text-3xl text-center text-green-600">
            Login
          </h2>
          <form onSubmit={handleLogin} className="mt-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-500 w-full focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-2 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-500 w-full focus:outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="top-2 right-3 absolute inset-y-0 flex items-center text-gray-600 hover:text-blue-500"
                >
                  {showPassword ? (
                    <span>
                      <FaEyeSlash />
                    </span> // Replace with an icon like FontAwesome or Heroicons
                  ) : (
                    <span>
                      <FaEye />
                    </span> // Replace with an icon
                  )}
                </button>
              </div>
            </div>
            {/* FOrgo pass */}
            <Link state={{ email: email }} to={`/auth/forgot-password/`}>
              <p
                onClick={handleForgotPasswordClick}
                className="my-3 text-sm underline cursor-pointer"
              >
                {" "}
                Forgot Password?
              </p>
            </Link>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg w-full text-white focus:outline-none"
            >
              Login
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            type="submit"
            className="justify-center bg-green-600 hover:bg-green-800 px-4 py-2 rounded-lg w-full text-white focus:outline-none flex items-center gap-2 my-2 cursor-pointer"
          >
            <FaGoogle className="" /> Continue with Google
          </button>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <a href="/auth/signup" className="text-blue-600 hover:underline">
              Register here
            </a>
          </p>

          {err ? (
            <h1 className="text-center text-red-500">
              Can't Login Check Email or Password {err}
            </h1>
          ) : (
            ""
          )}
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
