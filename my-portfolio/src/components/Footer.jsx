import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col items-center md:flex-row justify-between">
        
        {/* Logo & Slogan */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-3xl font-bold text-blue-400">
            Zeph<span className="text-white">.dev</span>
          </div>
          <p className="mt-2 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 italic tracking-wide">
            ✦ Code with <span className="text-white font-bold">Power</span> ✦
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 mt-6 md:mt-0">
          <li>
            <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition duration-300">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400 transition duration-300">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
            <FaFacebook size={26} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
            <FaTwitter size={26} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
            <FaLinkedin size={26} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
            <FaGithub size={26} />
          </a>
        </div>
      </div>

      {/* Copyright & Glow Effect */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Zeph.dev</span> | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
