"use client";

import { ChevronRight, Plus } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { i: 0, img: "/assets/l1.jpeg" },
  { i: 1, img: "/assets/l2.jpeg" },
  { i: 2, img: "/assets/l3.jpeg" },
  { i: 3, img: "/assets/linear.avif" },
  { i: 4, img: "/assets/l5.jpeg" },
  { i: 5, img: "/assets/l6.jpeg" },
  { i: 6, img: "/assets/l7.png" },
  { i: 7, img: "/assets/l8.png" },
];

const ConnectionSection = () => {
  const [logos, setLogos] = useState(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogos((prev) => {
        const newLogos = [...prev];
        const last = newLogos.pop();
        if (last) newLogos.unshift(last);
        return newLogos;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-8 w-full pb-4 sm:pb-6 md:pb-8 h-auto md:h-[450px]">
      <div className="relative border border-slate-400 border-opacity-55 h-full p-2 sm:p-3 md:p-4">
        {[1, 2, 3, 4].map((pos) => (
          <span
            key={pos}
            className="absolute bg-slate-100 rounded-full p-[1px] text-slate-500"
            style={{
              top: pos === 1 || pos === 2 ? "-0.375rem" : "auto",
              bottom: pos === 3 || pos === 4 ? "-0.375rem" : "auto",
              left: pos === 1 || pos === 3 ? "-0.375rem" : "auto",
              right: pos === 2 || pos === 4 ? "-0.375rem" : "auto",
            }}
          >
            <Plus size={18} className="text-neutral-400 opacity-75" />
          </span>
        ))}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 h-full rounded-xl shadow shadow-slate-300 border border-neutral-300 border-opacity-55 bg-white">
          <div className="flex justify-center items-start p-4 flex-col gap-4 md:gap-6 w-full md:w-3/5 h-full text-center md:text-left">
            <button className="mx-auto md:mx-0 flex w-fit gap-1 bg-white border-slate-300 border border-opacity-50 rounded-full py-1 px-3.5 justify-center transition-all items-center shadow-gray-300 text-xs shadow font-sans font-medium">
              <span>App store</span>
            </button>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-[650]">
              Connect your favorite apps
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg text-neutral-400">
              Cal.com has built-in integrations for all the apps you already
              know and love.
            </h3>
            <button className="mx-auto md:mx-0 flex bg-neutral-100 w-fit gap-1 rounded-full py-1 px-4 justify-center transition-all items-center shadow-gray-300 group hover:gap-3 text-sm shadow font-sans font-medium">
              <span className="text-xs sm:text-sm">Explore our apps</span>
              <span className="group-hover:translate-x-1 -translate-x-1 transition duration-300">
                <ChevronRight size={12} className="text-neutral-950" />
              </span>
            </button>
          </div>
          <div className="w-full md:w-2/5 h-full flex items-center justify-center p-4">
            <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-2 gap-4 sm:gap-6 md:gap-8 items-center justify-center">
              <AnimatePresence mode="popLayout" custom={{ direction: 1 }}>
                {logos.map((item) => (
                  <motion.div
                    key={item.i}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      layout: { duration: 0.3 },
                      scale: { duration: 0.3 },
                    }}
                    className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"
                  >
                    <img
                      src={item.img || "/placeholder.svg"}
                      alt={`Logo ${item.i}`}
                      className="h-full w-full object-cover p-1.5 sm:p-2 md:p-2.5"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionSection;
