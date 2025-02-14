// components/LoginModal.js
"use client"; // For Next.js 13+ (App Router)

import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginModal({ isOpen, closeModal }) {
  return (
    <div>
      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[10000]">
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} // Set duration for the fade-in effect
            className="bg-white p-6 rounded-lg shadow-lg w-96 z-70 flex flex-col justify-center items-center"
          >
            <h2 className="text-xl font-semibold mb-4 text-black">Login</h2>
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            {/* Login Button */}
            <Link
              href="/"
              className="w-full bg-blue-600 text-white py-2 rounded m-2 p-2 justify-center text-center"
            >
              Login
            </Link>
            {/* Close Button */}
            <Link
              href="/"
              onClick={closeModal}
              className="w-full bg-red-600 mt-3 text-gray-600 hover:text-gray-800 text-sm m-2 p-2 justify-center text-center rounded text-white hover:bg-transparent hover:border-solid hover:border-black hover:border-2"
            >
              Close
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
}
