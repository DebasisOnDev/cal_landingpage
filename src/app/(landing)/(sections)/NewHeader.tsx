"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  Users,
  User,
  Code,
  Send,
  DollarSign,
  Users2,
  GraduationCap,
  BeakerIcon,
  Phone,
  MessageSquare,
  PresentationIcon,
} from "lucide-react";
import DeveloperContainer from "../(components)/DeveloperContainer";
import ResourcesContainer from "../(components)/ResourceContainer";

const menuItems = {
  Solutions: [
    {
      title: "Scheduling",
      description: "Calendar integration and booking pages",
    },
    { title: "Marketing", description: "Grow your business with automation" },
    { title: "Sales", description: "Close more deals faster" },
  ],
  Developer: [
    { title: "API Documentation", description: "Build with our robust API" },
    { title: "SDKs", description: "Developer tools and resources" },
    { title: "Integration Guide", description: "Connect with your stack" },
  ],
  Resources: [
    { title: "Blog", description: "Latest updates and guides" },
    { title: "Help Center", description: "Get support and tutorials" },
    { title: "Community", description: "Join our developer community" },
  ],
};

const navItems = [
  { title: "Solutions", canHovered: true },
  { title: "Enterprise", canHovered: false },
  { title: "Developer", canHovered: true },
  { title: "Resources", canHovered: true },
  { title: "Pricing", canHovered: false },
];

const SolutionsContainer = () => {
  const teamSizeItems = [
    {
      icon: User,
      title: "For Individuals",
      description: "Personal scheduling made simple",
    },
    {
      icon: Users,
      title: "For Teams",
      description: "Collaborative scheduling for groups",
    },
    {
      icon: Users2,
      title: "For Enterprises",
      description: "Enterprise-level scheduling solutions",
    },
    {
      icon: Code,
      title: "For Developers",
      description: "Powerful features and integrations",
    },
  ];

  const useCaseItems = [
    {
      icon: Send,
      title: "Recruiting",
      description: "Streamline your hiring process",
    },
    {
      icon: DollarSign,
      title: "Sales",
      description: "Close more deals faster",
    },
    {
      icon: Users2,
      title: "HR",
      description: "Simplify team management",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Better academic scheduling",
    },
    {
      icon: Phone,
      title: "Support",
      description: "Efficient customer service",
    },
    {
      icon: BeakerIcon,
      title: "Healthcare",
      description: "Optimize patient scheduling",
    },
    {
      icon: MessageSquare,
      title: "Telehealth",
      description: "Virtual care made easy",
    },
    {
      icon: PresentationIcon,
      title: "Marketing",
      description: "Enhance campaign coordination",
    },
  ];

  return (
    <div className="w-full shadow rounded-lg p-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="font-semibold text-neutral-600 font-sans px-2.5">
            By team size
          </h2>
          <div className="grid gap-4">
            {teamSizeItems.map((item, index) => (
              <div
                key={index}
                className="flex font-sans items-start gap-4 group cursor-pointer hover:bg-[#f5f5f5] rounded-xl p-2 transition-colors duration-200"
              >
                <div className="p-3 relative bg-[#f5f5f5] rounded-xl group-hover:bg-gray-200 transition-colors">
                  <item.icon className="w-7 h-7 shadow-sm shadow-slate-200 text-[#374151]" />
                  <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 top-1.5 left-1.5 group-hover:top-2 group-hover:left-2"></div>
                  <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 top-1.5 right-1.5 group-hover:top-2 group-hover:right-2"></div>
                  <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 bottom-1.5 left-1.5 group-hover:bottom-2 group-hover:left-2"></div>
                  <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 bottom-1.5 right-1.5 group-hover:bottom-2 group-hover:right-2"></div>
                </div>
                <div className="space-y-1 flex flex-col items-start justify-center">
                  <h3 className="font-semibold text-base text-gray-900 group-hover:text-gray-950">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm group-hover:text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-semibold px-2.5 text-neutral-600 font-sans">
            By use case
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {useCaseItems.map((item, index) => (
              <div
                key={index}
                className="flex font-sans items-start text-center gap-2 group cursor-pointer hover:bg-[#f5f5f5] rounded-xl p-2 transition-colors duration-200"
              >
                <div className="p-3 relative bg-[#f5f5f5] rounded-xl group-hover:bg-gray-200 transition-colors">
                  <item.icon className="w-7 h-7 shadow-sm shadow-slate-200 text-[#374151]" />
                  <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 top-1.5 left-1.5 group-hover:top-2 group-hover:left-2"></div>
                  <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 top-1.5 right-1.5 group-hover:top-2 group-hover:right-2"></div>
                  <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 bottom-1.5 left-1.5 group-hover:bottom-2 group-hover:left-2"></div>
                  <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 bottom-1.5 right-1.5 group-hover:bottom-2 group-hover:right-2"></div>
                </div>
                <div className="space-y-1 my-auto">
                  <h3 className="font-semibold text-center text-base text-gray-900 group-hover:text-gray-950">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const NewHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<{
    title: string;
    canHovered: boolean;
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollPosition > 45;

  return (
    <>
      <header className="sticky mb-[50px]  top-0 left-0 right-0 z-[60] w-full">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-10 pt-3">
          <div className="relative w-full px-6 ">
            <div
              className={`
                flex ${
                  open
                    ? " h-[420px]  flex-col p-5"
                    : "h-[60px] items-center justify-between "
                }   rounded-xl px-6   transition-all duration-300
                ${
                  isScrolled
                    ? "bg-white  ring-[1px] shadow-[4px_4px_0px_4px] ring-slate-400 z-40 ring-opacity-25 shadow-slate-300"
                    : "  bg-transparent"
                }
              `}
            >
              <AnimatePresence mode="popLayout">
                <div
                  className={`${
                    open ? " " : ""
                  } md:w-auto w-full flex items-center justify-between`}
                >
                  <Link href="#" className="text-xl font-bold">
                    <img src="/logo.svg" width={150} height={180} alt="Logo" />
                  </Link>
                  <button
                    className=" md:hidden flex"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                {open && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, translateX: 20 }}
                    animate={{ opacity: 1, scale: 1, translateX: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "linear",
                    }}
                    className=" flex flex-col items-center justify-between gap-4 py-4"
                  >
                    <span className=" p-2 rounded-xl shadow-sm  transition-all bg-background-sec text-neutral-950 px-4 font-sans font-medium border border-opacity-55 border-slate-300 w-full">
                      Solutions
                    </span>
                    <span className=" p-2 rounded-xl shadow-sm  transition-all bg-background-sec text-neutral-950 px-4 font-sans font-medium border border-opacity-55 border-slate-300 w-full">
                      Enterprise
                    </span>
                    <span className=" p-2 rounded-xl shadow-sm  transition-all bg-background-sec text-neutral-950 px-4 font-sans font-medium border border-opacity-55 border-slate-300 w-full">
                      Developer
                    </span>
                    <span className=" p-2 rounded-xl shadow-sm  transition-all bg-background-sec text-neutral-950 px-4 font-sans font-medium border border-opacity-55 border-slate-300 w-full">
                      Resources
                    </span>
                    <span className=" p-2 rounded-xl shadow-sm  transition-all bg-background-sec text-neutral-950 px-4 font-sans font-medium border border-opacity-55 border-slate-300 w-full">
                      Pricing
                    </span>
                    <span className=" p-2 rounded-xl shadow-sm  transition-all shadow-neutral-50 text-background-sec bg-neutral-950 px-4 font-sans font-medium border border-opacity-55 border-slate-300 w-full">
                      Sign in
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    onHoverStart={() => setHover(item)}
                    onHoverEnd={() => setHover(null)}
                  >
                    <a
                      href="#"
                      className="flex items-center gap-2 font-sans font-medium text-neutral-700 transition hover:text-neutral-950"
                    >
                      <span>{item.title}</span>
                      {item.canHovered && (
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            item.title === hover?.title ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </a>
                  </motion.div>
                ))}
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <button className="font-sans font-medium text-neutral-700 hover:text-neutral-950">
                  Sign in
                </button>
                <button className="rounded-xl bg-black px-3.5 py-1.5 font-sans font-medium text-white shadow shadow-gray-700 hover:bg-gray-800">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {hover?.canHovered &&
            menuItems[hover.title as keyof typeof menuItems] && (
              <div className="absolute left-0 right-0 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95, rotateX: 15 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95, rotateX: 15 }}
                  transition={{
                    duration: 0.15,
                    ease: "easeInOut",
                  }}
                  className="relative mx-auto  px-6 sm:px-12"
                  onMouseEnter={() => setHover(hover)}
                  onMouseLeave={() => setHover(null)}
                >
                  <div className="mx-auto flex items-center pt-2 justify-center w-full">
                    <div className="rounded-xl bg-white w-fit  shadow-lg">
                      {hover.title === "Solutions" && <SolutionsContainer />}
                      {hover.title === "Developer" && <DeveloperContainer />}
                      {hover.title === "Resources" && <ResourcesContainer />}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default NewHeader;
