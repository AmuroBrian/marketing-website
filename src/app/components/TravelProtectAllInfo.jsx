"use client";
import React , {useState, useEffect} from "react";

export default function TravelProtectAllInfo() {
    return (
 

        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl p-6 md:p-10 max-w-6xl mx-auto border-4 border-blue-500">
          
          <div className="relative w-full max-w-2xl h-96 mx-auto">
      {/* Background Image - Slightly Zoomed */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-md"
        style={{ backgroundImage: "url('/images/TravelProtect1.jpg')" }}
      ></div>

      {/* Foreground Image - Normal Size */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="/images/TravelProtect1.jpg"
          alt="Main"
          className="w-3/4 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>


      </div>
    );
  }
  

