import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
  const navMenu = (
    <>
      <NavLink to="/" className="btn btn-sm">
        Home
      </NavLink>
      <NavLink to="/allEquipment" className="btn btn-sm">
        All Equipment
      </NavLink>
      <NavLink to="/addEquipment" className="btn btn-sm">
        Add Equipment
      </NavLink>
      <NavLink to="/myEquipment" className="btn btn-sm">
        My Equipment
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="justify-between bg-base-100 navbar">
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

        <div className="lg:flex sm:hidden">
          <ul className="px-1 menu menu-horizontal">{navMenu}</ul>
        </div>
        <div>
          <div role="button" className="avatar btn btn-circle btn-ghost">
            <div className="rounded-full w-10">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
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
    </div>
  );
};

export default Navbar;
