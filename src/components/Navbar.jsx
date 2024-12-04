import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaPerson } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleToggle = (e) => {
    console.log(e);
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localtheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localtheme);
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut, imageKey } = useContext(AuthContext);
  // console.log(user);
  const [isHovered, setIsHovered] = useState(false);
  const handleLogOut = () => {
    toast("Sign out..");

    logOut();
  };

  const signInSignOutToggle = (
    <>
      {user ? (
        <div className="flex justify-between items-center gap-2 w-full">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative cursor-pointer"
          >
            <div role="button" className="avatar btn btn-circle btn-ghost">
              <div className="rounded-full w-10">
                <img
                  key={imageKey}
                  src={
                    user.photoURL ||
                    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316600/316631.1.png"
                  }
                  alt="Tailwind CSS Navbar component"
                />
              </div>
            </div>

            {/* Overlay Name */}
            <div
              className={`absolute w-[200px] h-[50px] text-center z-10 md:-right-10 -right-30  top-16 flex items-center justify-center
           bg-black bg-opacity-50 text-white text-lg font-semibold rounded-lg transition-opacity ${
             isHovered ? "opacity-200" : "opacity-0"
           }`}
            >
              {user?.displayName}
            </div>
          </div>

          <button
            onClick={handleLogOut}
            className="my-5 rounded-xl font-medium text-sm text-white-700 hover:text-blue-600 btn btn-sm btn-warning"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center w-full">
          <div>
            <FaUserAlt className="text-white text-xl" />
          </div>
          <NavLink
            to="/auth/login"
            className="mx-3 rounded-md font-medium text-sm hover:text-blue-600"
          >
            <button className="py-2 btn btn-sm btn-success">Login</button>
          </NavLink>
        </div>
      )}
    </>
  );
  const navMenu = (
    <div className="flex justify-center gap-2">
      <NavLink to="/" className="btn btn-sm">
        Home
      </NavLink>
      <NavLink to="/main/allEquipment" className="btn btn-sm">
        All Equipment
      </NavLink>
      {user ? (
        <div className="flex gap-2">
          <NavLink to="/main/addEquipment" className="btn btn-sm">
            Add Equipment
          </NavLink>
          <NavLink to="/main/myEquipment" className="btn btn-sm">
            My Equipment
          </NavLink>
        </div>
      ) : (
        ""
      )}
    </div>
  );
  return (
    <div>
      <div className="flex justify-between items-center bg-none mx-auto w-11/12 min-h-8">
        {/* left side */}
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm"
            >
              {navMenu}
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">EquiSports</a>
        </div>
        {/* middle area */}

        <div className="invisible md:visible w-full">
          <ul className="w-full">{navMenu}</ul>
        </div>
        {/* right side */}
        <div className="flex items-center">
          {/* <div>
            <NavLink to={"/login"} className="btn btn-sm">
              Login
            </NavLink>
          </div> */}

          <div className="lg:flex space-x-4 lg:visible invisible">
            {signInSignOutToggle}
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="mx-1 label-text">
                {theme == "light" ? "Light " : "Dark "}
              </span>
              <input
                onChange={handleToggle}
                type="checkbox"
                className="toggle"
              />
            </label>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
