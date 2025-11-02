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
      icon: <AiOutlineMail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      detail: "allanmathenge67@gmail.com",
      link: "mailto:allanmathenge67@gmail.com",
    },
    {
      icon: <AiOutlinePhone className="w-6 h-6 text-blue-600" />,
      title: "Phone",
      detail: "+254 740 955 111",
      link: "tel:+254740955111",
    },
    {
      icon: <GoLocation className="w-6 h-6 text-blue-600" />,
      title: "Location",
      detail: "Nairobi, Kenya",
      link: "#",
    },
    {
      icon: <AiOutlineLinkedin className="w-6 h-6 text-blue-600" />,
      title: "LinkedIn",
      detail: "allan-mathenge-534a36239",
      link: "https://www.linkedin.com/in/allan-mathenge-534a36239/",
    },
    {
      icon: <AiOutlineGithub className="w-6 h-6 text-blue-600" />,
      title: "GitHub",
      detail: "allan-star-glitch",
      link: "https://github.com/ALLAN-star-glitch",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen bg-linear-to-b from-blue-50 via-white to-blue-100 py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,197,253,0.15),transparent_70%)]" />

      {/* Heading */}
      <div className="relative text-center mb-20 z-10">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-linear-to-r from-blue-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
          Let’s Connect
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Have a project, collaboration, or idea? I’d love to hear from you.
        </p>
      </div>

      {/* Layout */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
        {/* Left: Elegant vertical contact list */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-10 relative"
        >
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-300 to-transparent hidden md:block" />

          {contactDetails.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              className="group relative flex items-start gap-6 pl-10 md:pl-14"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500 group-hover:scale-125 transition-transform hidden md:block" />
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 shadow-inner">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Right: Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/50 backdrop-blur-lg p-10 md:p-14 rounded-3xl shadow-xl border border-white/60"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full p-4 border border-gray-200 rounded-xl bg-white/70 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-4 border border-gray-200 rounded-xl bg-white/70 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project inquiry or hello..."
                className="w-full p-4 border border-gray-200 rounded-xl bg-white/70 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full p-4 border border-gray-200 rounded-xl bg-white/70 focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="flex items-center justify-center gap-3 w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <AiOutlineSend className="w-5 h-5" /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
