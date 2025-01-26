"use client";
import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

const events = [
  {
    i: 0,
    notice: "24 hours",
    beforeEvent: "30 mins",
    afterEvent: "30 mins",
  },
  {
    i: 1,
    notice: "12 hours",
    beforeEvent: "1 hour",
    afterEvent: "45 mins",
  },
  {
    i: 2,
    notice: "2 day",
    beforeEvent: "1 hour",
    afterEvent: "1 hour",
  },
];

const FeatureBoxOne = () => {
  const [event, setEvent] = useState(events[0]);
  useEffect(() => {
    const int = setInterval(() => {
      setEvent(events[(event.i + 1) % events.length]);
    }, 5000);
    return () => clearInterval(int);
  }, [event]);
  return (
    <div className="mx-auto w-full max-w-md h-auto px-8 flex rounded-lg">
      <div className="relative  w-full  h-[200px]">
        {[3, 2, 1].map((item) => (
          <div
            className="border h-full w-full p-6  absolute border-slate-300 border-opacity-50 shadow-sm rounded-lg bg-white"
            key={item}
            style={{
              transform: `translateY(${item * 15}px)`,
              zIndex: item,
              scale: 0.85 + item * 0.05,
            }}
          >
            {item === 3 && (
              <div className=" font-sans text-neutral-900 flex flex-col gap-2 w-full h-full">
                <h1 className=" font-sans font-medium text-neutral-400 text-lg">
                  Notice and buffers
                </h1>
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-sm text-neutral-950">
                    Minimum notice
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={event.notice}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between w-full px-3 py-1 text-slate-700 rounded-lg border-[0.5px] border-neutral-300 shadow-sm bg-opacity-50 font-sans"
                    >
                      <span className="font-sans font-[450]">
                        {event.notice}
                      </span>
                      <ChevronDown size={18} />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex w-full gap-4">
                  <div className="w-1/2 flex flex-col gap-1">
                    <span className="font-medium text-sm text-neutral-950">
                      Buffer before event
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={event.beforeEvent}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-between w-full px-3 py-1 text-slate-700 rounded-lg border-[0.5px] border-neutral-300 shadow-sm bg-opacity-50 font-sans"
                      >
                        <span className="font-sans font-[450]">
                          {event.beforeEvent}
                        </span>
                        <ChevronDown size={18} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="w-1/2 flex flex-col gap-1">
                    <span className="font-medium text-sm text-neutral-950">
                      Buffer after event
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={event.afterEvent}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-between w-full px-3 py-1 text-slate-700 rounded-lg border-[0.5px] border-neutral-300 shadow-sm bg-opacity-50 font-sans"
                      >
                        <span className="font-sans font-[450]">
                          {event.afterEvent}
                        </span>
                        <ChevronDown size={18} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBoxOne;
