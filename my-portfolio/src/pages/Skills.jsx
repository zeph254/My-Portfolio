import React from "react";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiFlask, SiDjango, SiFastapi, SiAngular, SiWordpress } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython className="w-12 h-12" /> },
    { name: "Flask", icon: <SiFlask className="w-12 h-12" /> },
    { name: "Django", icon: <SiDjango className="w-12 h-12" /> },
    { name: "FastAPI", icon: <SiFastapi className="w-12 h-12" /> },
    { name: "JavaScript", icon: <FaJs className="w-12 h-12" /> },
    { name: "React", icon: <FaReact className="w-12 h-12" /> },
    { name: "Angular", icon: <SiAngular className="w-12 h-12" /> },
    { name: "HTML", icon: <FaHtml5 className="w-12 h-12" /> },
    { name: "CSS", icon: <FaCss3 className="w-12 h-12" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-12 h-12" /> },
    { name: "Git", icon: <FaGitAlt className="w-12 h-12" /> },
    { name: "Databases SQL,Postgress", icon: <FaDatabase className="w-12 h-12" /> },
    { name: "WordPress", icon: <SiWordpress className="w-12 h-12" /> },
  ];

  return (
    <div className="bg-gray-900 text-white font-poppins">
      {/* Hero Section */}
      <section className="h-64 flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900">
        <h1 className="text-4xl font-bold mb-4">My Skills</h1>
        <p className="text-lg text-gray-300">
          Here are some of the technologies and tools I work with.
        </p>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-500 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}