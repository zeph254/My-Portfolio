import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-900 text-white font-poppins">
      {/* Hero Section */}
      <section className="h-64 flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-300">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </section>

      {/* Contact Form and Details Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted successfully!");
              }}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Let's work together!"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Hi Zeph, I'd like to discuss a project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Email</h3>
                <a
                  href="mailto:ularezephaniah@gmail.com"
                  className="text-blue-500 hover:text-blue-400 transition-all duration-300"
                >
                  ularezephaniah@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/254769068663"
                  className="text-blue-500 hover:text-blue-400 transition-all duration-300"
                >
                  +254 769 068 663
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Social Media</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/zeph254"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zephaniah-ulare-452019347/"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/254769068663"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}