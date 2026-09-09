/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTelegram,
  FaYoutube,
  FaDev,
  FaMedium
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function ContactClient() {
  const contactInfo = {
    email: "allanmathenge67@gmail.com",
    phone: "+254 740 955111",
    location: "Nairobi, Kenya",
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ALLAN-star-glitch",
      icon: FaGithub,
      color: "hover:text-gray-400",
      bg: "hover:bg-gray-500/10",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/allan-mathenge",
      icon: FaLinkedin,
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-500/10",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: FaTwitter,
      color: "hover:text-sky-400",
      bg: "hover:bg-sky-500/10",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/254740955111",
      icon: FaWhatsapp,
      color: "hover:text-green-400",
      bg: "hover:bg-green-500/10",
    },
    {
      name: "Telegram",
      url: "https://t.me",
      icon: FaTelegram,
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-500/10",
    },
    {
      name: "Dev.to",
      url: "https://dev.to",
      icon: FaDev,
      color: "hover:text-gray-400",
      bg: "hover:bg-gray-500/10",
    },
    {
      name: "Medium",
      url: "https://medium.com",
      icon: FaMedium,
      color: "hover:text-gray-400",
      bg: "hover:bg-gray-500/10",
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: FaYoutube,
      color: "hover:text-red-400",
      bg: "hover:bg-red-500/10",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0B1120] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="px-5 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-sm font-medium text-blue-400">
            Let's Connect
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Get In Touch
          </h1>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and exciting projects. 
            Reach out and let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Contact Info Cards */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email Card */}
              <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 text-center">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <MdOutlineEmail className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors mt-2 inline-block"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 text-center">
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                  <MdPhone className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors mt-2 inline-block"
                >
                  {contactInfo.phone}
                </a>
              </div>

              {/* Location Card */}
              <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 text-center">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <MdLocationOn className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-gray-400 mt-2">{contactInfo.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-white text-center mb-8">
              Connect With Me
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 ${social.bg}`}
                  >
                    <Icon className={`w-5 h-5 text-gray-400 transition-colors ${social.color}`} />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Response Message */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm text-green-400">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-cyan-400">10+</div>
              <div className="text-sm text-gray-400 mt-1">Projects Delivered</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-cyan-400">3+</div>
              <div className="text-sm text-gray-400 mt-1">Years Experience</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-cyan-400">100%</div>
              <div className="text-sm text-gray-400 mt-1">Client Satisfaction</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-sm text-gray-400 mt-1">Response Time</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}