import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure the logo path is correct
import { FaHome, FaBriefcase, FaFolder, FaEnvelope, FaTools } from "react-icons/fa"; // Import icons

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  const routes = [
    { name: "Home", path: "/", icon: <FaHome className="mr-2" /> },
    { name: "Experience", path: "/experience", icon: <FaBriefcase className="mr-2" /> },
    { name: "Projects", path: "/projects", icon: <FaFolder className="mr-2" /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope className="mr-2" /> },
    { name: "Skills", path: "/skills", icon: <FaTools className="mr-2" /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-blue-900 shadow-xl">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          {/* Logo on Far Left */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Zeph.dev Logo"
              className="w-20 h-20 rounded-full border-2 border-blue-400 shadow-lg"
            />
            <div className="ml-3">
              <span className="text-blue-400 text-2xl font-bold font-poppins relative">
                Zeph.dev
                <span className="block w-full h-1 bg-blue-400 rounded mt-1"></span>
              </span>

            </div>
          </div>


          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {routes.map((route) => (
                <Link
                  key={route.name}
                  to={route.path}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                    location.pathname === route.path
                      ? "bg-blue-800 text-white shadow-md"
                      : "text-gray-300 hover:bg-blue-800 hover:text-white"
                  }`}
                >
                  {route.icon}
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"} transition-all duration-300`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {routes.map((route) => (
            <Link
              key={route.name}
              to={route.path}
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.pathname === route.path
                  ? "bg-blue-800 text-white shadow-md"
                  : "text-gray-300 hover:bg-blue-800 hover:text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {route.icon}
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}