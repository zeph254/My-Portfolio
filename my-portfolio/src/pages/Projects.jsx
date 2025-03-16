import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Auctigon",
      description: "A feature-rich e-commerce auction platform built with React, Flask, and PostgreSQL.",
      technologies: ["React", "Flask", "PostgreSQL"],
      github: "https://github.com/zeph254/Auctigon-online-auction",
      live: "#",
    },
    {
      title: "Chama Backend",
      description: "Backend for a group savings platform built with Python.",
      technologies: ["Python", "Flask"],
      github: "https://github.com/zeph254/chama-backend",
      live: "#",
    },
    {
      title: "Hive Selling Store",
      description: "An online store built with JavaScript.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/zeph254/hive-selling-store",
      live: "#",
    },
    {
      title: "Collaborative Note-Taking App",
      description: "A real-time collaborative note-taking application built with React and Firebase.",
      technologies: ["React", "Firebase"],
      github: "https://github.com/zeph254/collaborative-note-taking-app",
      live: "#",
    },
  ];

  return (
    <div className="bg-gray-900 text-white font-poppins">
      {/* Hero Section */}
      <section className="h-64 flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-gray-300">
          Here are some of the projects I've worked on. Feel free to explore!
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-400 transition-all duration-300"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}