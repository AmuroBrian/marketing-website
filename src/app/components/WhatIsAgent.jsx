"use client";

import React from "react";
import { motion } from "framer-motion";
import AccountInformation from "./AccountInformation";

export default function WhatIsAgent() {
  return (
    <div className="dark:bg-white-800 text-black p-3">
      {/* Divider Line */}
      <div className="border-t-4 border-black-900 w-1/2 mx-auto mt-10 mb-3"></div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-black mt-10 text-center">
        Become an <span className="text-black-500">Inspire Inc.</span> Agent &
        Earn <span className="text-black">Big!</span>
      </h2>

      <p className="mt-4 text-black text-lg md:text-xl text-center">
        Looking for an opportunity to{" "}
        <strong className="text-black">earn extra income</strong> while helping
        others{" "}
        <strong className="text-black">invest in quality products</strong>? Join{" "}
        <span className="text-black-500 font-bold">Inspire Inc.</span> as an{" "}
        <span className="text-black font-bold">Agent</span> today!
      </p>

      <ul className="mt-6 list-disc list-inside text-black text-lg md:text-xl space-y-2 ml-10">
        <li>
          <strong className="text-black-500">Earn Commission</strong> on every
          successful investment or product purchase
        </li>
        <li>
          <strong className="text-black-500">Get Exclusive Incentives</strong>{" "}
          for top-performing agents
        </li>
        <li>
          <strong className="text-black-500">Be Your Own Boss</strong> – Work at
          your own pace and build your network
        </li>
        <li>
          <strong className="text-black-500">
            Unlimited Earning Potential
          </strong>{" "}
          – The more you bring in, the more you earn!
        </li>
      </ul>

      <p className="mt-6 text-black text-lg md:text-xl text-center">
        <strong className="text-black-500 text-2xl ml-10 mr-10">
          What does an Inspire Inc. Agent do?
        </strong>{" "}
        <br />
        An Agent connects potential investors and buyers with Inspire Inc.'s
        high-value products and investment opportunities. You{" "}
        <strong className="text-black">get rewarded</strong> every time you help
        someone <strong className="text-black-500">invest or purchase!</strong>
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-2xl md:text-3xl font-extrabold text-black">
          🚀 Don't Miss Out!{" "}
          <span className="text-black-500">Sign Up Today</span> & Start Earning!
          💰
        </p>
      </motion.div>

      <motion.div
        className="mt-6 flex justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <button className="w-full max-w-sm dark:bg-blue-500 text-white py-3 rounded-lg  text-lg font-semibold md:py-4 md:text-xl transition-all shadow-lg hover:shadow-xl border-2 border-black">
          Register Now
        </button>
      </motion.div>

      <div>
        <AccountInformation />
      </div>
    </div>
  );
}
