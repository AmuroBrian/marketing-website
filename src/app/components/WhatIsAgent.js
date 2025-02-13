"use client";
 // Adjust the path based on the actual folder structure


import React from "react";

export default function WhatIsAgent() {
  return (
    <div className=" min-h-screen flex items-center justify-center p-6 font-serif">
      <div className="bg-white w-full max-w-5xl p-6  rounded-lg shadow-lg text-center md:p-8 animate-fadeIn ">
        <h2 className="text-2xl md:text-3xl font-bold text-black">Become an Inspire Inc. Agent & Earn Big!</h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg">
          Looking for an opportunity to <strong>earn extra income</strong> while helping others <strong>invest in quality products</strong>? 
          Join <strong>Inspire Inc.</strong> as an <strong>Agent</strong> today!
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-700 text-left mx-auto max-w-md text-sm md:text-base">
          <li><strong>Earn Commission</strong> on every successful investment or product purchase</li>
          <li><strong>Get Exclusive Incentives</strong> for top-performing agents</li>
          <li><strong>Be Your Own Boss</strong> – Work at your own pace and build your network</li>
          <li><strong>Unlimited Earning Potential</strong> – The more you bring in, the more you earn!</li>
        </ul>
        <p className="mt-4 text-gray-700 text-base md:text-lg">
          <strong>What does an Inspire Inc. Agent do?</strong> <br/>
          An Agent connects potential investors and buyers with Inspire Inc.'s high-value products and investment opportunities. 
          You <strong>get rewarded</strong> every time you help someone <strong>invest or purchase!</strong>
        </p>
        <p className="mt-4 text-xl md:text-2xl font-bold text-black">Don't Miss Out! Sign Up Today & Start Earning!</p>
        <button className="mt-6 w-full max-w-sm bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold md:py-4 md:text-xl transition-transform transform hover:scale-105">
          Register Now
        </button>
      </div>

      

      
    </div>
  );
}
