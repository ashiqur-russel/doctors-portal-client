import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleSignOut = () => {
    logout()
      .then(() => {
        localStorage.removeItem("accessToken");
      })
      .catch((err) => {
        console.error("Logout error:", err);
      });
  };

  const renderUserAvatar = () => {
    if (user?.photoURL) {
      return <img src={user.photoURL} alt="User Avatar" />;
    } else {
      const initials = user?.displayName
        ? user.displayName
            .split(" ")
            .map((name) => name.charAt(0).toUpperCase())
            .join("")
        : "NN"; 
      return (
        <div className="w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center">
          {initials}
        </div>
      );
    }
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            {user?.displayName ? (
              <span>{user.displayName}</span>
            ) : (
              <span>No Name</span>
            )}
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link onClick={handleSignOut}>Logout</Link>
          </li>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">{renderUserAvatar()}</div>
          </label>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doctors Chamber
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>

      <label
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
        htmlFor="dashboard-drawer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
      </label>
    </div>
  );
};

export default Navbar;
