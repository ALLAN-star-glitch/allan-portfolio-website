"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineSend,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";

export default function ContactPage() {
  const contactDetails = [
    {
      icon: <AiOutlineMail className="w-6 h-6 text-blue-700" />,
      title: "Email",
      detail: "allanmathenge67@gmail.com",
      link: "mailto:allanmathenge67@gmail.com",
    },
    {
      icon: <AiOutlinePhone className="w-6 h-6 text-blue-700" />,
      title: "Phone",
      detail: "+254740955111",
      link: "tel:+254740955111",
    },
    {
      icon: <GoLocation className="w-6 h-6 text-blue-700" />,
      title: "Location",
      detail: "Nairobi, Kenya",
      link: "#",
    },
    {
      icon: <AiOutlineLinkedin className="w-6 h-6 text-blue-700" />,
      title: "LinkedIn",
      detail: "linkedin.com/in/allan-mathenge-534a36239",
      link: "https://www.linkedin.com/in/allan-mathenge-534a36239/",
    },
    {
      icon: <AiOutlineGithub className="w-6 h-6 text-blue-700" />,
      title: "GitHub",
      detail: "github.com/allan-star-glitch",
      link: "https://github.com/ALLAN-star-glitch",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-linear-to-b from-blue-50 to-white py-20 px-6 md:px-12 lg:px-24"
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Let’s Connect
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a project, collaboration, or just want to say hi? Drop me a message below.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-blue-100 p-8 md:p-12 mb-20">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              placeholder="Write your message here..."
              rows={5}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition mx-auto"
          >
            <AiOutlineSend className="w-5 h-5" /> Send Message
          </button>
        </form>
      </div>

      {/* Contact Info Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {contactDetails.map((item, idx) => (
          <Link
            href={item.link}
            key={idx}
            target={item.link.startsWith("http") ? "_blank" : "_self"}
            className="bg-blue-50 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md hover:bg-blue-100 transition"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
          </Link>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-16 text-gray-600">
        <p className="text-lg font-medium">
          Let’s build something amazing together ✨
        </p>
      </div>
    </motion.section>
  );
}
