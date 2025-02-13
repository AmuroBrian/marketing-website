"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-[#fefffe] to-[#ffffff]`}>

        {/* Navigation Bar */}
        <nav className="bg-white dark:bg-gray-800 p-4 shadow-md w-full fixed top-0 z-50 h-16">
          <div className="max-w-7xl mx-auto flex items-center justify-between">

            {/* Logo & Title */}
            <div className="flex items-center text-white text-lg md:text-2xl font-semibold font-serif">
              <img
                src=" "
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="ml-4">Inspire</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <Link href="/ContactUs" className="text-white hover:text-gray-600">Contact Us</Link>
              <Link href="/Login" className="text-white hover:text-gray-600">LogIn</Link>
              {pathname !== "/" && (
                <Link href="/" className="text-white hover:text-gray-600">Home</Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none z-50 relative"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-8 h-8 text-black"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  // Close Icon (X)
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger Menu Icon
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden flex flex-col space-y-2 bg-white p-4 absolute top-16 left-0 w-full shadow-lg">
              <Link href="/about" className="text-black hover:text-gray-600 p-2" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/RSSpage" className="text-black hover:text-gray-600 p-2" onClick={() => setMenuOpen(false)}>News</Link>
              {pathname !== "/" && (
                <Link href="/" className="text-black hover:text-gray-600 p-2" onClick={() => setMenuOpen(false)}>Home</Link>
              )}
            </div>
          )}
        </nav>

        {/* Push Content Below Navbar */}
        <div className="pt-20"></div>

        <div className="container mx-auto px-4 py-6">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-white shadow-sm w-full dark:bg-gray-800 mt-10">
          <div className="w-full mx-auto max-w-screen-xl p-4 text-center text-sm text-gray-500 dark:text-gray-400">
            Copyright © 2024 Inspire Holdings Inc. - All Rights Reserved.
          </div>
          
          <div className="w-full mx-auto max-w-screen-xl p-4 text-center text-sm text-gray-500 dark:text-gray-400 flex justify-center space-x-6">
            <a href="https://inspirenextglobal.com/" className="text-white hover:text-gray-600">
              Inspire Next Global
            </a>

            <a href="https://inspireholdings.ph/home" className="text-white hover:text-gray-600">
              Inspire Holdings
            </a>
          </div>


          <div className="w-full mx-auto max-w-screen-xl p-4 text-center text-sm text-gray-500 dark:text-gray-400">
            Powered by Inspire Holdings Inc.
          </div>
        </footer>
      </body>
    </html>
  );
}