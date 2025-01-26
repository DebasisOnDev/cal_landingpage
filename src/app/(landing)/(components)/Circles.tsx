"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Phone } from "lucide-react";

const CirclesWithIcons = () => {
  const circles = [
    { size: 80, icon: Phone, color: "text-blue-500" },
    { size: 160, icon: Mail, color: "text-green-500" },
    { size: 240, icon: Calendar, color: "text-red-500" },
  ];

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {circles.map(({ size, color }, index) => (
        <motion.div
          key={index + size}
          className="absolute border border-gray-300  rounded-full shadow-lg flex items-center justify-center"
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
          animate={{ rotate: index == 1 ? 360 : -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-full h-full">
            {index === 1 && (
              <img
                src="/assets/meet.jpeg"
                alt="date"
                className={` w-8 h-8 rounded-full shadow object-cover absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${color}`}
              />
            )}
            {index === 2 && (
              <img
                src="/assets/date.jpeg"
                alt="date"
                className={` w-8 h-8 rounded-full shadow object-cover absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${color}`}
              />
            )}
          </div>
        </motion.div>
      ))}
      <button className="px-5 py-2 bg-white shadow-md border border-slate-200 text-slate-900 rounded-full text-sm font-medium hover:shadow-lg transition-shadow z-10">
        Cal.com
      </button>
    </div>
  );
};

export default CirclesWithIcons;
