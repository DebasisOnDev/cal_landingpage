import { Plus } from "lucide-react";
import React from "react";

const ShowcaseSection = () => {
  return (
    <div className="h-auto md:h-[150px] rounded p-3 px-4 md:px-8 w-full">
      <div className="w-full relative px-2 md:px-4 border border-neutral-300 border-opacity-80">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 font-sans text-neutral-950 p-3 md:p-5 h-full">
          <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
            <span className="text-base md:text-lg font-medium">
              Trusted by fast-growing <br />
              companies around the world
            </span>
          </div>
          <div className="w-full md:w-3/4 flex flex-wrap justify-center md:justify-between items-center h-full gap-4 md:gap-0">
            {[
              "/assets/deel.svg",
              "/assets/vercel.svg",
              "/assets/mercury.svg",
              "/assets/angelist.svg",
              "/assets/lumin.svg",
            ].map((item, i) => (
              <img
                src={item}
                alt="Company Logo"
                key={i}
                className="h-8 md:h-10 p-1 w-auto max-w-[100px] md:max-w-[120px] object-contain"
              />
            ))}
          </div>
        </div>
        <span className="absolute bg-slate-100 rounded-full p-[2px] -top-2.5 -left-2.5">
          <Plus size={18} className="text-neutral-400 opacity-75" />
        </span>
        <span className="absolute bg-slate-100 rounded-full p-[2px] -top-2.5 -right-2.5">
          <Plus size={18} className="text-neutral-400 opacity-75" />
        </span>
        <span className="absolute bg-slate-100 rounded-full p-[2px] -bottom-2.5 -left-2.5">
          <Plus size={18} className="text-neutral-400 opacity-75" />
        </span>
        <span className="absolute bg-slate-100 rounded-full p-[2px] -bottom-2.5 -right-2.5">
          <Plus size={18} className="text-neutral-400 opacity-75" />
        </span>
      </div>
    </div>
  );
};

export default ShowcaseSection;
