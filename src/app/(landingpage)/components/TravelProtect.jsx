import React from "react";
import Link from "next/link";

export default function TravelProtect() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl p-6 md:p-10 max-w-6xl mx-auto">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="/images/TravelProtect1.jpg"
          alt="Travel Protect"
          className="w-full h-full object-contain rounded-l-2xl"
        />
      </div>
      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 font-bold text-center md:text-left mt-6 md:mt-0 px-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Inspire Travel Protection.
        </h1>
        <br></br>
        <h2 className="text-2xl font-bold text-gray-900">
          We guarantee your stay in Manile will be safe and worry free.
        </h2>
        <div className="flex justify-center md:justify-end mt-4">
          <Link
            href="TravelProtectAllInfo.js"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}
