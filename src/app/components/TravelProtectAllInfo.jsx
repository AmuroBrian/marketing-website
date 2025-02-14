"use client";
import React , {useState, useEffect} from "react";


const images = [
  "/images/aa.jpg",
  "/images/InspireWallet.jpg",
  "/images/TravelProtect.jpg",
  "/images/TravelProtect1.jpg",
  "/images/aa.jpg",
  "/images/InspireWallet.jpg",
  "/images/TravelProtect.jpg",
  "/images/TravelProtect1.jpg",
]; 



export default function TravelProtectAllInfo() {
    
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };


  return (
 

        <div className="flex flex-col md:flex-row items-center bg-gray-300 shadow-lg rounded-2xl p-6 md:p-10 max-w-6xl mx-auto border-4 border-blue-500">
          
          <div className="relative w-full max-w-2xl h-96 mx-auto">
    
      <div className="relative w-full max-w-2xl h-96 mx-auto">
   
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-md transition-all duration-500"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Foreground Image - Normal Size */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src={images[currentIndex]}
          alt="Main"
          className="w-3/4 h-auto rounded-lg shadow-lg transition-opacity duration-500"
        />
      </div>

      {currentIndex > 0 && (
        <button
          onClick={prevImage}
          className="absolute bottom-1/2 left-4 transform -translate-y-1/2 text-black text-5xl opacity-50 hover:opacity-100 hover:text-blue-500 transition duration-300"
        >
          ❮
        </button>
      )}

<button
        onClick={nextImage}
        className="absolute bottom-1/2 right-4 transform -translate-y-1/2 text-black text-5xl opacity-50 hover:opacity-100 hover:text-blue-500 transition duration-300"
      >
        ❯
      </button>

    </div>


      </div>
      </div>
    );
  }
  

