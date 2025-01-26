"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsExclamationCircle } from "react-icons/bs";

const items = [
  {
    profileImage: "/assets/h1.jpg",
    name: "Nizzy Abi",
    coachingType: "YouTube Coaching",
    description: "Let's build your YouTube channel.",
    url: "cal.com/nizzy",
  },
  {
    profileImage: "/assets/h2.jpg",
    name: "Alex Johnson",
    coachingType: "Fitness Coaching",
    description: "Achieve your fitness goals.",
    url: "cal.com/alexj",
  },
  {
    profileImage: "/assets/h3.jpg",
    name: "Sarah Lee",
    coachingType: "Career Coaching",
    description: "Advance your career with tailored guidance.",
    url: "cal.com/sara",
  },
  {
    profileImage: "/assets/h4.jpg",
    name: "Michael Smith",
    coachingType: "Music Lessons",
    description: "Master the art of music.",
    url: "cal.com/mich",
  },
];

const FeatureBoxTwo = () => {
  const [item, setItem] = useState(items[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const i = items.findIndex((it) => it.name === item.name);
      setItem(items[(i + 1) % items.length]);
    }, 5000);
    return () => clearInterval(interval);
  }, [item]);

  return (
    <div className="mx-auto w-full max-w-md h-[250px] px-8 flex items-end rounded-lg">
      <div className="relative w-full h-[200px]">
        {/* URL Container - Positioned at top */}
        <div
          className="absolute w-full flex justify-center"
          style={{ top: "-32px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={item.url}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
              className=" w-36 h-12 flex items-center justify-center bg-white rounded-xl shadow border-neutral-300 border border-opacity-55 z-30"
            >
              <span className="font-semibold text-neutral-900 font-sans text-lg">
                {item.url}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-6 left-0 right-0 z-10 h-full bg-white border border-slate-300 border-opacity-50 shadow-sm rounded-lg scale-90" />

        <div className="absolute bottom-0 left-0 right-0 z-20 h-full bg-white border border-slate-300 border-opacity-50 shadow-sm rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="flex transform-gpu duration-300 flex-col gap-1.5 h-full p-6"
            >
              <img
                src={item.profileImage || "/placeholder.svg"}
                alt={item.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-lg font-medium text-neutral-900 font-sans">
                {item.name}
              </span>
              <h1 className="text-xl font-semibold text-neutral-900 font-sans">
                {item.coachingType}
              </h1>
              <div className="flex items-center gap-2 mt-auto">
                <BsExclamationCircle className="text-gray-400" />
                <span className="text-sm font-sans font-medium text-neutral-900">
                  {item.description}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FeatureBoxTwo;
