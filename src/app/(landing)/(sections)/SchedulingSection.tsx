import React from "react";
import { FaFire } from "react-icons/fa";
import Circles from "../(components)/Circles";
import StackedBoxOne from "../(components)/StackedBoxOne";
import BoxTwo from "../(components)/BoxTwo";
import { Plus } from "lucide-react";

const SchedulingSection = () => {
  return (
    <div className="min-h-screen mx-auto w-full px-4 md:px-8">
      <div className="h-full relative flex flex-col gap-6 mx-auto font-sans border py-4 border-neutral-300 border-opacity-80 text-neutral-950 items-center justify-between w-full px-2 md:px-4">
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
        <div className="max-w-4xl flex flex-col gap-5 items-center">
          <button className="flex w-fit gap-1 bg-white border-slate-300 border border-opacity-50 rounded-full py-1 px-3.5 justify-center transition-all items-center shadow-gray-300 text-xs shadow font-sans font-medium">
            <span>How it works</span>
            <span>
              <FaFire size={12} className="text-neutral-950" />
            </span>
          </button>
          <h1 className="text-center font-sans font-[650] text-3xl md:text-5xl">
            With us, scheduling is easy
          </h1>
          <h3 className="text-center font-normal text-base md:text-lg text-neutral-400">
            Effortless scheduling for individuals, powerful solutions for
            fast-growing modern companies.
          </h3>
        </div>
        <div className="p-1 flex flex-col md:flex-row gap-5 items-center justify-between w-full h-full">
          {[
            {
              number: "01",
              title: "Connect your calendar",
              description:
                "We'll handle all the cross-referencing, so you don't have to worry about double bookings.",
              Component: Circles,
            },
            {
              number: "02",
              title: "Set your availability",
              description:
                "Want to block off weekends? Set up any buffers? We make that easy.",
              Component: StackedBoxOne,
            },
            {
              number: "03",
              title: "Choose how to meet",
              description:
                "It could be a video chat, phone call, or a walk in the park!",
              Component: BoxTwo,
            },
          ].map((item) => (
            <div
              key={item.number}
              className="w-full md:w-1/3 h-[300px] md:h-[400px] flex flex-col gap-2 rounded-xl bg-white shadow-sm border border-neutral-500 border-opacity-30 shadow-neutral-300 mb-4 md:mb-0"
            >
              <div className="flex flex-col p-5 gap-2 items-start justify-center font-sans text-neutral-950">
                <span className="h-7 w-7 rounded-lg bg-gray-300 text-center font-medium flex items-center justify-center text-sm tracking-wide p-1">
                  {item.number}
                </span>
                <h1 className="text-xl font-sans font-[550]">{item.title}</h1>
                <h3 className="text-neutral-400 text-left font-[480] font-sans">
                  {item.description}
                </h3>
              </div>
              <div className="flex items-center overflow-hidden p-1 justify-center h-full">
                <item.Component />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchedulingSection;
