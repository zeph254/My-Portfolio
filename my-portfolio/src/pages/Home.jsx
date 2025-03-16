import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaTools, FaProjectDiagram, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import unishop from "../assets/unishop.png";
import conta from "../assets/conta.png";
import chama from "../assets/chama.jpeg";
import { Link } from "react-router-dom";
import { SiFlask, SiDjango, SiFastapi, SiAngular } from "react-icons/si";

// SkillToggle Component
const SkillToggle = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div className="mt-6">
      {/* Toggle Buttons */}
      <div className="flex space-x-4 mb-4">
        {Object.keys(skills).map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <div className="flex items-center space-x-2">
              {/* Add Icons for Each Category */}
              {category === "Frontend" && <FaCode className="w-5 h-5" />}
              {category === "Backend" && <FaTools className="w-5 h-5" />}
              {category === "DevOps" && <FaProjectDiagram className="w-5 h-5" />}
              <span>{category}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Display Skills */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-xl font-medium text-white"
      >
        {skills[activeCategory].join(" • ")}
      </motion.div>
    </div>
  );
};

// Skills Data
const skills = {
  Frontend: ["React", "Tailwind", "Framer Motion"],
  Backend: ["Flask", "Django", "PostgreSQL"],
  DevOps: ["Docker", "CI/CD", "Netlify"],
};

export default function Home() {
  return (
    <div className="bg-gray-900 text-white font-poppins">
      {/* Hero Section */}
      <section className="min-h-[120vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900">
        {/* Personal Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 opacity-50 blur-xl rounded-full"></div>
          <img
            src={profile}
            alt="Your Name"
            className="w-48 h-60 rounded-full border-[6px] border-white shadow-2xl backdrop-blur-md bg-opacity-30 hover:shadow-blue-400 transition-all duration-300"
          />
        </motion.div>

        {/* Name and Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-4"
        >
          Zeph.dev
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-8"
        >
          {/* Smaller Text */}
          <p className="text-sm text-gray-300 mb-4">
            Building the future, one line of code at a time.
            <br />
            Want to build a simple web app real quick? Use the toggles below.
          </p>

          {/* Animated Arrow */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* SkillToggle Component */}
        <SkillToggle />
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Python", icon: <FaPython className="w-12 h-12 mb-4" /> },
              { name: "Flask", icon: <SiFlask className="w-12 h-12 mb-4" /> },
              { name: "Django", icon: <SiDjango className="w-12 h-12 mb-4" /> },
              { name: "FastAPI", icon: <SiFastapi className="w-12 h-12 mb-4" /> },
              { name: "JavaScript", icon: <FaCode className="w-12 h-12 mb-4" /> },
              { name: "React", icon: <FaTools className="w-12 h-12 mb-4" /> },
              { name: "Angular", icon: <SiAngular className="w-12 h-12 mb-4" /> },
              { name: "Node.js", icon: <FaProjectDiagram className="w-12 h-12 mb-4" /> },
              { name: "UI/UX Design", icon: <FaCode className="w-12 h-12 mb-4" /> },
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="text-blue-500">{skill.icon}</div>
                <h3 className="text-2xl font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "unishop",
                description: "An e-commerce platform with a focus on user experience.",
                image: unishop,
                link: "https://run-sigma.vercel.app/",
              },
              {
                title: "Conta",
                description: "A real-time platform for collaborative note creation, editing, and management.",
                image: conta,
                link: "https://github.com/zeph254/Collaborative-Note-Taking-App",
              },
              {
                title: "Chama Backend",
                description: "Backend for a group savings platform built with Python.",
                image: chama,
                link: "https://github.com/zeph254/chama-backend",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-blue-500 hover:text-blue-400 transition-all duration-300"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-12">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-all duration-300">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-all duration-300">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:zeph@example.com" className="text-gray-400 hover:text-white transition-all duration-300">
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">&copy; 2025 Zeph.dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}