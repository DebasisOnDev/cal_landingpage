"use client";
import { Camera, MessageCircle, Monitor, PhoneOff, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";

export default function VideoCall() {
  const pulseAnimation = {
    initial: { scale: 0.95, opacity: 0 },
    animate: {
      scale: 1.1,
      opacity: [0, 0.5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto h-auto bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      <div className="h-8 border-b border-slate-200 flex items-center px-4">
        <div className="flex gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 h-[200px] relative">
        <div className="border-r border-slate-200 p-4 flex items-center justify-center relative">
          <AnimatePresence>
            <motion.div
              {...pulseAnimation}
              className="absolute inset-0 m-auto w-32 h-32 bg-neutral-300 rounded-full"
            />
            <motion.div
              {...pulseAnimation}
              transition={{
                ...pulseAnimation.animate.transition,
                delay: 0.5,
              }}
              className="absolute inset-0 m-auto w-32 h-32 bg-neutral-300 rounded-full"
            />
          </AnimatePresence>
          <img
            src="/assets/user.svg"
            alt="user 1"
            className="w-20 h-20 object-contain relative z-10"
          />
        </div>

        <div className="p-4 relative flex items-center justify-center">
          <AnimatePresence>
            <motion.div
              {...pulseAnimation}
              className="absolute inset-0 m-auto w-32 h-32 bg-neutral-300 rounded-full"
            />
            <motion.div
              {...pulseAnimation}
              transition={{
                ...pulseAnimation.animate.transition,
                delay: 0.5,
              }}
              className="absolute inset-0 m-auto w-32 h-32 bg-neutral-300 rounded-full"
            />
          </AnimatePresence>
          <img
            src="/assets/user.svg"
            alt="user 2"
            className="w-20 h-20 object-contain relative z-10"
          />
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white rounded-xl border border-slate-200 p-2 shadow-lg z-20">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-slate-100"
          >
            <Camera className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-slate-100"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-slate-100"
          >
            <Monitor className="h-5 w-5" />
          </Button>
          <Button variant="destructive" size="icon" className="rounded-full">
            <PhoneOff className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
