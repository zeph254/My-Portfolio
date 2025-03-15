import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "Exerience", icon: <FaUser />, path: "/experience" },
    { name: "Projects", icon: <FaProjectDiagram />, path: "/projects" },
    { name: "Contact", icon: <FaEnvelope />, path: "/contact" },
    { name: "Skills", icon: <FaEnvelope />, path: "/skills" },

  ];

  return (
    <nav className="bg-black text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-around">
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to={item.path}
              className="flex items-center space-x-2 hover:text-blue-400"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
