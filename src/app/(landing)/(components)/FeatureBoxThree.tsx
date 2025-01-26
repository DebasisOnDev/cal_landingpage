"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";

const FeatureBoxThree = () => {
  const [is24Hour, setIs24Hour] = useState(false);
  const [isOverlay, setIsOverlay] = useState(false);

  const days = [
    { day: "Mon", date: "06" },
    { day: "Tue", date: "07" },
    { day: "Wed", date: "08", isActive: true },
    { day: "Thu", date: "09" },
    { day: "Fri", date: "10" },
  ];

  const events = [
    {
      title: "Making coffee",
      startTime: "09:00 AM",
      endTime: "4PM",
      date: "06",
      color: "bg-blue-50",
    },
    {
      title: "Breakfast",
      startTime: "11:30 AM",
      endTime: "2PM",
      date: "07",
      color: "bg-purple-50",
    },
    {
      title: "Breakfast",
      startTime: "11:30 AM",
      endTime: "2 PM",
      date: "08",
      color: "bg-purple-50",
    },
    {
      title: "Design conference",
      startTime: "6 PM",
      endTime: "8:30 PM",
      date: "08",
      color: "bg-gray-100",
    },
    {
      title: "Hiring call",
      startTime: "7:30 PM",
      endTime: "8:30 PM",
      date: "09",
      color: "bg-red-50",
    },
    {
      title: "Full company meeting",
      startTime: "8:30 PM",
      endTime: "9:30 PM",
      date: "10",
      color: "bg-blue-50",
    },
  ];

  return (
    <div className="w-full h-[250px] rounded-r-lg border-t border-r border-slate-300 border-opacity-55 shadow-sm shadow-neutral-300 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Switch
            checked={isOverlay}
            onCheckedChange={setIsOverlay}
            className="data-[state=checked]:bg-black"
          />
          <span className="text-sm font-medium text-neutral-900">
            Overlay my calendar
          </span>
        </div>
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-0.5">
          <button
            onClick={() => setIs24Hour(false)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              !is24Hour
                ? "bg-white text-black shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            12h
          </button>
          <button
            onClick={() => setIs24Hour(true)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              is24Hour
                ? "bg-white text-black shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            24h
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {days.map((day) => (
          <div
            key={day.date}
            className={`text-center flex gap-1 items-center justify-center ${
              day.isActive
                ? "text-black font-semibold"
                : "text-neutral-600 font-medium"
            }`}
          >
            <div className="text-xs">{day.day}</div>
            <div
              className={`text-xs ${
                day.isActive &&
                "inline-flex items-center justify-center w-6 h-6 rounded-full bg-black text-white"
              }`}
            >
              {day.date}
            </div>
          </div>
        ))}

        <div className="col-span-5 grid grid-cols-5 gap-2 mt-2 relative">
          {days.map((day) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative h-[150px]"
            >
              <AnimatePresence mode="wait">
                {events
                  .filter((event) => event.date === day.date)
                  .map((event, index) => (
                    <motion.div
                      key={`${day.date}-${event.title}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        y: [10, 0, 0, -10],
                      }}
                      transition={{
                        duration: 4,
                        ease: "easeInOut",
                        times: [0, 0.1, 0.9, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: index * 0.2,
                      }}
                      className={`absolute inset-x-0 p-2 rounded-lg ${event.color}`}
                      style={{
                        top: `${index * 65}px`,
                      }}
                    >
                      <div className="text-xs font-medium text-neutral-900">
                        {event.title}
                      </div>
                      <div className="text-[10px] text-neutral-400">
                        {event.startTime} - {event.endTime}
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBoxThree;
