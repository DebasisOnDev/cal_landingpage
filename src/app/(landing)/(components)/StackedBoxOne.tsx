"use client";

import { AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";

const timeSlots = [
  { i: 0, start: "8:30 am", end: "5:00 pm" },
  { i: 1, start: "9:00 am", end: "6:00 pm" },
  { i: 2, start: "10:00 am", end: "7:00 pm" },
];

const AnimatedStackedBox = () => {
  const [activeSlot, setActiveSlot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlot((prev) => (prev + 1) % timeSlots.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative sm:p-4 p-0 w-full max-w-md">
      {timeSlots.map((slot, i) => (
        <div
          key={slot.end + i * i}
          className={`absolute w-full h-56 shadow-sm bg-white border border-slate-200 rounded-l-lg md:p-3 p-0 transition-all ${
            i === 0 ? "shadow-sm" : ""
          }`}
          style={{
            transform: `translateY(-${i * 18}px) translateX(${i * 12}px)`,
            zIndex: timeSlots.length - i,
            scale: 1 - i * 0.05,
          }}
        >
          {i === 0 && (
            <div className="flex flex-col p-2 gap-3">
              <AnimatePresence>
                {timeSlots.map((item, x) => (
                  <div
                    key={x}
                    className="flex items-center justify-start gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-4 rounded-full transition-colors duration-300 ${
                          x === activeSlot ? "bg-neutral-900" : "bg-slate-100"
                        }`}
                      ></div>
                      <span
                        className={`text-sm transition-colors duration-300 ${
                          x === activeSlot
                            ? "text-neutral-900 font-medium"
                            : "text-slate-600"
                        }`}
                      >
                        {item.start}
                      </span>
                    </div>
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        x === activeSlot ? "text-neutral-900" : "text-slate-400"
                      }`}
                    >
                      -
                    </span>
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        x === activeSlot
                          ? "text-neutral-900 font-medium"
                          : "text-slate-600"
                      }`}
                    >
                      {item.end}
                    </span>
                  </div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnimatedStackedBox;
