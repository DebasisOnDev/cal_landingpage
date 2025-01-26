import { Plus } from "lucide-react";
import React from "react";

const TestimonialSection = () => {
  return (
    <div className="w-full h-auto p-4 sm:p-6 md:p-8">
      <div className="relative px-2 h-24 sm:h-28 md:h-32 border border-slate-300">
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
      </div>
    </div>
  );
};

export default TestimonialSection;
