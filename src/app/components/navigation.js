import React from "react";

export default function Navigation() {
    return (


        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl p-6 md:p-10 max-w-6xl mx-auto border-4 border-blue-500">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="/images/InspireWallet.jpg"
            alt="Inspire Wallet"
            className="w-full h-full object-contain rounded-l-2xl"
          />
        </div>
  
        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 font-bold text-center md:text-left mt-6 md:mt-0 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Inspire Wallet Mobile App
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            A secure and private wallet for your digital assets. At Inspire, we
            are trusted financial advisors to investors worldwide, known for our
            proven track record in sectors like entertainment and real estate
            development. While we have primarily served high-profile clients,
            we're now expanding our services to support even more people.
            Whether you need assistance with business growth, investments,
            finances, or legal matters, we're here to provide comprehensive
            solutions. Feel free to reach out - we're here to help you achieve
            your goals here at Inspire.
          </p>
  
          <div className="flex justify-center md:justify-end mt-4">
       <a
          href="https://inspirenextglobal.com"    
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
      Learn More
          </a>
  
          </div>
        </div>
      </div>
    );
  }
  

