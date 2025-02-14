"use client"; // For Next.js 13+ (App Router)

import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ Corrected import
import { useState } from "react";
import { auth } from "../scripts/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginModal({ isOpen, closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); // ✅ Redirects after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[10000]">
        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center"
        >
          <h2 className="text-xl font-semibold mb-4 text-black">Login</h2>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            value={email} // ✅ Controlled input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2 text-black"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password} // ✅ Controlled input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
          />

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded m-2 p-2"
          >
            Login
          </button>

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="w-full bg-red-600 mt-3 text-white py-2 rounded m-2 hover:bg-transparent hover:border-solid hover:border-black hover:border-2 hover:text-black"
          >
            Close
          </button>
        </motion.div>
      </div>
    )
  );
}
