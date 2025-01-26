import { BaggageClaim, Plus } from "lucide-react";
import React from "react";
import FeatureBoxOne from "../(components)/FeatureBoxOne";
import FeatureBoxTwo from "../(components)/FeatureBoxTwo";
import FeatureBoxThree from "../(components)/FeatureBoxThree";
import FeatureBoxFour from "../(components)/FeatureBoxFour";

const FeatureSection = () => {
  const features = [
    {
      title: "Avoid meeting overload",
      description:
        "Only get booked when you want to. Set daily, weekly or monthly limits and add buffers around your events to allow you to focus or take a break.",
      Component: FeatureBoxOne,
    },
    {
      title: "Stand out with a custom booking link",
      description:
        "Customize your booking link so it's short and easy to remember for your bookers. No more long, complicated links one can easily forget.",
      Component: FeatureBoxTwo,
    },
    {
      title: "Streamline your bookers' experience",
      description:
        "Let your bookers overlay their calendar, receive booking confirmations via text or email, get events added to their calendar, and allow them to reschedule with ease.",
      Component: FeatureBoxThree,
    },
    {
      title: "Reduce no-shows with automated reminders",
      description:
        "Easily send sms or email reminders about bookings, and send automated follow-ups to gather any relevant information before the meeting.",
      Component: FeatureBoxFour,
    },
  ];

  return (
    <div className="min-h-screen px-4 md:px-8 font-sans w-full">
      <div className="px-2 md:px-4 relative border py-4 border-neutral-300 border-opacity-80 w-full h-full">
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
        <div className="flex flex-col gap-12 mx-auto my-auto py-16 w-full h-full">
          <div className="flex items-center justify-between flex-col gap-6">
            <button className="flex w-fit gap-1 bg-white border-slate-300 border border-opacity-50 rounded-full py-1 px-3.5 justify-center transition-all items-center shadow-gray-300 text-xs shadow font-sans font-medium">
              <span>Benefits</span>
              <span>
                <BaggageClaim size={12} className="text-neutral-950" />
              </span>
            </button>
            <h1 className="text-center font-sans font-[650] text-3xl md:text-5xl">
              Your all-purpose scheduling app
            </h1>
            <h3 className="text-center font-normal text-base md:text-lg text-neutral-400">
              Discover a variety of our advanced features. Unlimited and free
              for individuals.
            </h3>
            <button className="text-sm bg-neutral-900 text-white px-3 py-1.5 rounded-lg font-medium shadow-sm shadow-neutral-800">
              Sign up
            </button>
          </div>
          <div className="flex w-full h-full flex-col gap-8">
            {[0, 1].map((rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-col md:flex-row items-center w-full h-full justify-between gap-4 md:gap-8"
              >
                {features
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((feature, index) => (
                    <div
                      key={index}
                      className="w-full md:w-1/2 h-[300px] md:h-[400px] bg-white rounded-lg shadow-sm shadow-neutral-400 border border-slate-300 border-opacity-40 mb-4 md:mb-0"
                    >
                      <div className="w-full h-2/5 p-6 flex flex-col gap-4">
                        <h1 className="text-xl font-sans font-[580] text-neutral-950">
                          {feature.title}
                        </h1>
                        <span className="text-neutral-500 md:block hidden opacity-85 text-left font-[480] font-sans">
                          {feature.description}
                        </span>
                      </div>
                      <div className="overflow-hidden w-full mx-auto h-3/5">
                        <feature.Component />
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
          <div className="text-center font-sans font-[650] text-3xl md:text-5xl">
            ...and so much more!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
