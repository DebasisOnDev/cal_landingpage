"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const paymentNotifications = [
  {
    id: 1,
    title: "Payment received",
    amount: "$50.00",
    description: "$50.00 received for Consultation call with James",
    timeAgo: "30m ago",
    logo: "Cal",
  },
  {
    id: 2,
    title: "Payment received",
    amount: "$75.00",
    description: " $75.00 received for Design review session with Emily",
    timeAgo: "1h ago",
    logo: "Cal",
  },
  {
    id: 3,
    title: "Payment received",
    amount: "$100.00",
    description: "$100.00 received for Coaching session with Alex",
    timeAgo: "2h ago",
    logo: "Cal",
  },
];

const FeatureBoxFour = () => {
  const [items, setItems] = useState(paymentNotifications);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) => {
        const [first, ...rest] = prevItems;
        return [...rest, first];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[250px] p-4 w-full overflow-hidden">
      <div className="w-full h-full flex items-center justify-center relative">
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{
                opacity: index === 0 ? 1 : 0.5,
                y: index * -30,
                scale: 1 - index * 0.05,
                zIndex: items.length - index,
              }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="w-full flex mx-auto gap-4 h-20 p-1.5 rounded-xl bg-neutral-100 shadow-sm shadow-neutral-300 border border-neutral-400 border-opacity-55 absolute"
            >
              <div className="shadow h-fit w-fit flex items-center justify-center px-1.5 py-1 my-auto rounded-lg text-white bg-neutral-950 font-sans font-semibold text-lg">
                {item.logo}
              </div>
              <div className="flex font-sans flex-col gap-2.5 flex-grow">
                <span className="font-semibold text-neutral-900">
                  {item.title}
                </span>
                <span className="text-neutral-400 text-sm font-medium">
                  {item.description}
                </span>
              </div>
              <div className="font-sans text-sm font-medium text-neutral-700 self-start mt-1">
                {item.timeAgo}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FeatureBoxFour;
