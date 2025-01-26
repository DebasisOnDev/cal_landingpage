"use client";
import { ChevronRight, Clock8, Globe, Video } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { motion, AnimatePresence } from "framer-motion";

const heroitems = [
  {
    img: "/assets/asset 25.png",
    name: "Oliver Wilson",
    heading: "Innovative Solutions",
    subheading:
      "Driving future technologies with a focus on AI and innovative solutions for modern challenges.",
    p1: "30 mins",
    p2: "Cal Video",
    p3: "Europe/Paris",
    n1: "4",
    n2: "6",
    n3: "13",
    n4: "16",
    n5: "29",
    gridValues: [4, 6, 13, 16, 29],
  },
  {
    img: "/assets/h1.jpg",
    name: "Sophia Davis",
    heading: "Creative Visionary",
    subheading:
      "Bringing creative ideas to life by merging design, technology, and storytelling for impactful projects.",
    p1: "45 mins",
    p2: "Cal Video",
    p3: "America/LA",
    n1: "9",
    n2: "13",
    n3: "17",
    n4: "24",
    n5: "31",
    gridValues: [9, 13, 17, 24, 31],
  },
  {
    img: "/assets/h2.jpg",
    name: "Ethan Brown",
    heading: "Tech Guru",
    subheading:
      "Leading the way in innovations with expertise in software development and cloud technologies.",
    p1: "60 mins",
    p2: "Google Meet",
    p3: "America/New York",
    n1: "22",
    n2: "24",
    n3: "9",
    n4: "5",
    n5: "1",
    gridValues: [22, 24, 9, 5, 1],
  },
  {
    img: "/assets/h3.jpg",
    name: "Emma Johnson",
    heading: "Marketing Specialist",
    subheading:
      "Connecting brands with people through strategic marketing initiatives that drive engagement and growth.",
    p1: "45 mins",
    p2: "Zoom",
    p3: "Asia/Japan",
    n1: "31",
    n2: "6",
    n3: "22",
    n4: "25",
    n5: "28",
    gridValues: [31, 6, 22, 25, 28],
  },
  {
    img: "/assets/h1.jpg",
    name: "Liam Martinez",
    heading: "Financial Analyst",
    subheading:
      "Planning strategic financial growth with a deep understanding of market trends and business strategies.",
    p1: "120 mins",
    p2: "Teams",
    p3: "Europe/London",
    n1: "9",
    n2: "15",
    n3: "19",
    n4: "11",
    n5: "29",
    gridValues: [9, 15, 19, 11, 29],
  },
];

type ItemType = {
  img: string;
  name: string;
  heading: string;
  subheading: string;
  p1: string;
  p2: string;
  p3: string;
  n1: string;
  n2: string;
  n3: string;
  n4: string;
  n5: string;
  [key: `n${number}`]: string;
  gridValues: number[];
};

const generateUniquePattern = (name: string) => {
  const hash = name
    .split("")
    .reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  return [
    `col-span-${(hash % 2) + 1} row-span-${(hash % 2) + 1}`,
    `col-span-${((hash + 1) % 2) + 1} row-span-${((hash + 2) % 2) + 1}`,
    `col-span-${((hash + 2) % 2) + 1} row-span-${((hash + 1) % 2) + 1}`,
    `col-span-${((hash + 3) % 2) + 1} row-span-${((hash + 3) % 2) + 1}`,
    `col-span-${((hash + 4) % 3) + 1} row-span-1`,
  ];
};

const Hero = () => {
  const [item, setItem] = useState<ItemType>({
    ...heroitems[0],
    gridValues: [4, 6, 13, 16, 29],
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setItem((current) => {
        const currentIndex = heroitems.findIndex(
          (item) => item.name === current.name
        );
        const nextIndex = (currentIndex + 1) % heroitems.length;
        const nextItem = heroitems[nextIndex];
        return {
          ...nextItem,
          gridValues: [
            Math.floor(Math.random() * 28) + 1,
            Math.floor(Math.random() * 28) + 1,
            Math.floor(Math.random() * 28) + 1,
            Math.floor(Math.random() * 28) + 1,
            Math.floor(Math.random() * 28) + 1,
          ],
        };
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen text-black px-4 md:px-8 bg-background-sec">
      <div className="px-2 md:px-4 border-x border-neutral-300 border-opacity-80">
        <div
          style={{
            backgroundImage: `
      linear-gradient(to right, white 50%, rgba(255, 255, 255, 0) 100%),
      url('/assets/grid.jpeg')
    `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="bg-opacity-20 rounded-xl flex flex-col md:flex-row items-center gap-4 justify-center ring-[1px] ring-neutral-300 ring-opacity-45 shadow shadow-neutral-300 min-h-screen w-full"
        >
          <div className="w-full md:w-1/2 p-4 md:p-3 flex gap-3 flex-col items-center justify-start h-auto px-4 md:px-6 rounded-lg">
            <div className="flex flex-col gap-5 text-center md:text-left">
              <button className="mx-auto md:mx-0 flex w-fit gap-1 rounded-full py-1 px-3.5 justify-center transition-all items-center shadow-gray-300 group group-hover:gap-3 text-xs shadow font-sans font-medium">
                <span>Cal.com launches v4.8</span>
                <span className="group-hover:translate-x-1 -translate-x-1 transition duration-300">
                  <ChevronRight size={12} className="text-neutral-950" />
                </span>
              </button>
              <h1
                style={{ lineHeight: "1.2" }}
                className="text-4xl md:text-[70px] font-bold text-neutral-950 text-center md:text-left font-sans"
              >
                The better way
                <br /> to schedule
                <br /> your meetings
              </h1>
              <h3 className="font-sans text-sm md:text-lg font-[450] text-neutral-500 text-opacity-70 text-center md:text-left">
                A fully customizable scheduling experience for individuals,
                businesses taking calls and developers building scheduling
                platforms where users meet users.
              </h3>
            </div>
            <div className="flex px-3.5 py-1 flex-col w-full items-center md:items-start justify-center gap-3.5">
              <button className="flex items-center rounded-xl shadow bg-opacity-95 text-sm text-white hover:bg-opacity-100 bg-neutral-900 py-2 px-6 font-sans font-medium justify-center gap-3 w-3/4">
                <FcGoogle size={16} />
                <span>Sign up with Google</span>
              </button>
              <button className="text-center w-3/4 rounded-xl shadow bg-opacity-95 text-sm hover:bg-opacity-100 bg-background-sec border border-opacity-50 border-slate-300 text-neutral-950 font-sans font-medium py-2 px-6">
                Sign up with email
              </button>
              <span className="text-center w-3/4 text-sm font-medium font-sans text-slate-400">
                No credit card required
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-auto md:h-2/3 flex items-center justify-center p-4 md:pl-6 rounded-l-lg">
            <div className="bg-background-sec h-full md:h-4/5 w-full rounded-l-lg p-1 ring-[1px] ring-opacity-50 ring-slate-300">
              <div className="w-full h-full flex flex-col md:flex-row rounded-l-lg ring-[1px] ring-opacity-50 shadow bg-white ring-slate-300">
                <div className="h-auto md:h-full flex flex-col gap-3 w-full md:w-1/2 p-4 border-b md:border-b-0 md:border-r border-r-slate-300 border-opacity-65">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={item.name}
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="flex flex-col gap-1 text-center md:text-left"
                    >
                      <motion.img
                        variants={itemVariants}
                        src={item.img}
                        alt="Profile"
                        className="mx-auto md:mx-0 h-8 w-8 object-cover rounded-full ring-[1px] ring-slate-300 ring-opacity-40"
                      />
                      <motion.span
                        variants={itemVariants}
                        className="font-sans font-normal text-sm text-slate-500"
                      >
                        {item.name}
                      </motion.span>
                      <motion.h1
                        variants={itemVariants}
                        className="text-neutral-950 text-lg font-semibold font-sans"
                      >
                        {item.heading}
                      </motion.h1>
                      <motion.span
                        variants={itemVariants}
                        className="text-center md:text-left font-sans font-medium text-sm text-slate-600"
                      >
                        {item.subheading}
                      </motion.span>
                    </motion.div>
                  </AnimatePresence>
                  <AnimatePresence>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-col gap-2 items-center md:items-start"
                    >
                      <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-2.5 justify-center md:justify-start"
                      >
                        <Clock8 size={18} />
                        <span className="font-sans font-medium text-slate-600 text-sm">
                          {item.p1}
                        </span>
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-2.5 justify-center md:justify-start"
                      >
                        <Video size={18} />
                        <span className="font-sans font-medium text-slate-600 text-sm">
                          {item.p2}
                        </span>
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-2.5 justify-center md:justify-start"
                      >
                        <Globe size={18} />
                        <span className="font-sans font-medium text-slate-600 text-sm">
                          {item.p3}
                        </span>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="h-auto md:h-full w-full md:w-1/2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={item.name}
                      variants={gridVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="h-full w-full p-4 grid grid-cols-3 grid-rows-3 gap-2"
                    >
                      {generateUniquePattern(item.name).map(
                        (pattern, index) => (
                          <motion.div
                            key={index}
                            variants={gridItemVariants}
                            className={` bg-background-sec rounded-lg p-3 shadow-sm flex flex-col justify-between ${pattern}`}
                          >
                            <div className="flex justify-between p-2 overflow-hidden gap-4 flex-wrap items-center ">
                              <span className="text-3xl font-bold text-gray-800">
                                {item.gridValues[index]}
                              </span>
                              <span className="text-xs font-medium text-gray-500">
                                {["JAN", "FEB", "MAR", "APR", "MAY"][index]}
                              </span>
                            </div>
                          </motion.div>
                        )
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
