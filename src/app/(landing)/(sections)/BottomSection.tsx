"use client";

import React from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const BottomSection = () => {
  return (
    <div className="w-full min-h-[400px] px-4 sm:px-6 md:px-8 py-2">
      <div className="px-2 sm:px-3 md:px-4 border py-2 sm:py-3 md:py-4 border-neutral-300 border-opacity-80 relative">
        <span className=" absolute bg-slate-100 rounded-full p-[2px] -top-2.5 -left-2.5">
          <Plus size={18} className=" text-neutral-400 opacity-75" />
        </span>
        <span className=" absolute bg-slate-100 rounded-full p-[2px] -top-2.5 -right-2.5">
          <Plus size={18} className=" text-neutral-400 opacity-75" />
        </span>
        <span className=" absolute bg-slate-100 rounded-full p-[2px] -bottom-2.5 -left-2.5">
          <Plus size={18} className=" text-neutral-400 opacity-75" />
        </span>
        <span className=" absolute bg-slate-100 rounded-full p-[2px] -bottom-2.5 -right-2.5">
          <Plus size={18} className=" text-neutral-400 opacity-75" />
        </span>
        <div className="w-full h-full shadow shadow-slate-300 border z-10 border-slate-400 border-opacity-55 rounded-lg mx-auto my-auto bg-white">
          <div
            style={{
              backgroundImage: `url(/assets/grid1.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="flex flex-col items-center justify-center py-6 sm:py-8 gap-4 sm:gap-6 md:gap-8 mx-auto [mask-image:radial-gradient(circle,black,transparent)] [mask-repeat:no-repeat]"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] z-10 font-bold text-center leading-tight tracking-tight">
              Smarter, simpler
              <br />
              scheduling
            </h1>

            <Button className="bg-neutral-900 z-10 group text-white rounded-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-medium hover:bg-neutral-800 transition-colors">
              Get started{" "}
              <ArrowRight className="ml-1 sm:ml-2 -translate-x-1 group-hover:translate-x-0 transition-all h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
