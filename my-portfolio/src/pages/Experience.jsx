import React from "react";
import { Link } from "react-router-dom";
import {
 FaEnvelope,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { SiFlask, SiFastapi, SiDjango, SiAngular, SiWordpress } from "react-icons/si";

export default function Experience() {
  return (
    <div className="bg-gray-900 text-white font-poppins">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900">
        <h1 className="text-6xl font-bold mb-4">Zeph.dev</h1>
        <p className="text-2xl mb-8">Full-Stack Developer | Python & JavaScript Enthusiast</p>
        <p className="text-lg text-gray-300 max-w-2xl">
          Passionate about building scalable web applications with Flask, FastAPI, Django, React, HTML, and CSS.
        </p>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-gray-300 text-center">
            🎯 Currently working on: <strong>Auctigon</strong> - Online Auction House (🚧 In Production)
            <br />
            🌱 Currently learning: <strong>Django, WordPress, and Angular</strong>
            <br />
            🤝 Open to collaborations: Let's build something awesome together!
            <br />
            🏆 Seeking mentorship: Looking for a coach to guide me in my software development journey.
            <br />
            💡 Fun fact: When the learning gets hard, it means you're learning something new! 🚀
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Python", icon: <FaPython className="w-12 h-12 mb-4" /> },
              { name: "Flask", icon: <SiFlask className="w-12 h-12 mb-4" /> },
              { name: "FastAPI", icon: <SiFastapi className="w-12 h-12 mb-4" /> },
              { name: "Django", icon: <SiDjango className="w-12 h-12 mb-4" /> },
              { name: "React", icon: <FaReact className="w-12 h-12 mb-4" /> },
              { name: "Angular", icon: <SiAngular className="w-12 h-12 mb-4" /> },
              { name: "HTML", icon: <FaHtml5 className="w-12 h-12 mb-4" /> },
              { name: "CSS", icon: <FaCss3 className="w-12 h-12 mb-4" /> },
              { name: "WordPress", icon: <SiWordpress className="w-12 h-12 mb-4" /> },
              { name: "GitHub", icon: <FaGithub className="w-12 h-12 mb-4" /> },
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-blue-500">{skill.icon}</div>
                <h3 className="text-2xl font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Auctigon",
                description: "A feature-rich e-commerce auction platform built with React, Flask, and PostgreSQL.",
                link: "https://run-sigma.vercel.app/",
              },
              {
                title: "Chama Backend",
                description: "Backend for a group savings platform built with Python.",
                link: "https://github.com/zeph254/chama-backend",
              },
              {
                title: "Conta",
                description: "A real-time platform for collaborative note creation, editing, and management.",
                link: "https://github.com/zeph254/Collaborative-Note-Taking-App",
              },
            ].map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:text-blue-400 transition-all duration-300"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Currently Learning</h2>
          <p className="text-lg text-gray-300 mb-12">
            📌 <strong>Django</strong> – Mastering backend development with Django
            <br />
            📌 <strong>WordPress</strong> – Exploring CMS and web customization
            <br />
            📌 <strong>Angular</strong> – Building dynamic and scalable frontend applications
          </p>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Collaborate!</h2>
          <p className="text-lg text-gray-300 mb-12">
            Looking for exciting projects where I can contribute my expertise in Python & JavaScript. Let's collaborate and build something impactful!
          </p>
          <Link
          to="/contact"
          className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-300"
        >
          Contact Me
        </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:ularezephaniah@gmail.com" className="text-gray-400 hover:text-white transition-all duration-300">
              <FaEnvelope className="w-8 h-8" />
            </a>
            <a href="https://wa.me/254769068663" className="text-gray-400 hover:text-white transition-all duration-300">
              <FaWhatsapp className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/zephaniah-ulare-452019347/" className="text-gray-400 hover:text-white transition-all duration-300">
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Fun Fact</h2>
          <p className="text-lg text-gray-300">
            When learning gets hard, you're actually growing! Keep pushing! 🚀
          </p>
        </div>
      </section>
    </div>
  );
}