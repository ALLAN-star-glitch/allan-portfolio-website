"use client";

import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

export default function ResumePage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen w-full bg-linear-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center py-16 px-6"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          My Resume
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-6">
          Explore my professional background and download my detailed CV below.
        </p>

        {/* Download Button */}
        <a
          href="/Allan%20Mathenge%20Curriculumn%20Vitae.pdf"
          download="Allan Mathenge Curriculum Vitae.pdf"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <AiOutlineDownload className="w-5 h-5" />
          Download CV (PDF)
        </a>
      </div>

      {/* PDF Preview */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg border border-blue-100 bg-white">
        <iframe
          src="/Allan%20Mathenge%20Curriculumn%20Vitae.pdf"
          className="w-full h-[700px]"
          title="Allan Mathenge Curriculum Vitae"
        ></iframe>
      </div>
    </motion.section>
  );
}
