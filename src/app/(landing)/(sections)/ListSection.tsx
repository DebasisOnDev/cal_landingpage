import { CreditCard, Languages, Link, Plus, Shield, Video } from "lucide-react";
import React from "react";
import { BiCustomize } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { ImEmbed } from "react-icons/im";

const ListSection = () => {
  return (
    <div className=" px-8 pt-8 w-full h-auto md:block hidden">
      <div className="  h-[200px] grid items-center justify-center gap-0 grid-cols-6 grid-rows-1 w-full border-opacity-55  border-neutral-400  ">
        <div className=" relative h-[200px] p-4 w-[200px] border-t border-l border-r border-neutral-300 border-opacity-80  ">
          <div className=" absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
        </div>
        <div className=" h-[200px] p-4 relative w-[200px] border-t   border-neutral-300 border-opacity-80  ">
          <div className=" absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>{" "}
          <div className=" absolute -top-1.5 -left-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" flex flex-col items-center justify-center gap-2 w-full h-full rounded-xl p-4 border border-slate-400 bg-white border-opacity-55 shadow shadow-neutral-300">
            <div className=" h-[80px] w-[80px] flex items-center justify-center rounded-lg shadow shadow-slate-300 border border-slate-300 bg-neutral-200 bg-opacity-55 relative">
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 right-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 right-2"></div>
              <CreditCard size={28} />
            </div>
            <span className=" font-medium text-neutral-950 font-sans text-center">
              Accept payments
            </span>
          </div>
        </div>
        <div className=" h-[200px] p-4 relative w-[200px] border-t  border-l border-neutral-300 border-opacity-80  ">
          <div className=" absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" flex flex-col items-center justify-center gap-2 w-full h-full rounded-xl p-4 border border-slate-400 bg-white border-opacity-55 shadow shadow-neutral-300">
            <div className=" h-[80px] w-[80px] flex items-center justify-center rounded-lg shadow shadow-slate-300 border border-slate-300 bg-neutral-200 bg-opacity-55 relative">
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 right-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 right-2"></div>
              <Video size={28} />
            </div>
            <span className=" font-medium text-neutral-950 font-sans text-center">
              Built-in VC
            </span>
          </div>
        </div>
        <div className=" h-[200px] p-4 relative w-[200px] border-t  border-l border-neutral-300 border-opacity-80  ">
          <div className=" absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" flex flex-col items-center justify-center gap-2 w-full h-full rounded-xl p-4 border border-slate-400 bg-white border-opacity-55 shadow shadow-neutral-300">
            <div className=" h-[80px] w-[80px] flex items-center justify-center rounded-lg shadow shadow-slate-300 border border-slate-300 bg-neutral-200 bg-opacity-55 relative">
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 right-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 right-2"></div>
              <Link size={28} />
            </div>
            <span className=" font-medium text-neutral-950 font-sans text-center">
              Short links
            </span>
          </div>
        </div>
        <div className=" h-[200px] p-4 relative w-[200px] border-t  border-l border-neutral-300 border-opacity-80  ">
          <div className=" absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" flex flex-col items-center justify-center gap-2 w-full h-full rounded-xl p-4 border border-slate-400 bg-white border-opacity-55 shadow shadow-neutral-300">
            <div className=" h-[80px] w-[80px] flex items-center justify-center rounded-lg shadow shadow-slate-300 border border-slate-300 bg-neutral-200 bg-opacity-55 relative">
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 right-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 right-2"></div>
              <Shield size={28} />
            </div>
            <span className=" font-medium text-neutral-950 font-sans text-center">
              Privacy first
            </span>
          </div>
        </div>
        <div className=" h-[200px] p-4 relative w-[200px] border-l border-r border-t border-neutral-300 border-opacity-80  "></div>
      </div>
      <div className="  h-[200px] grid items-center justify-center gap-0 grid-cols-6 grid-rows-1 w-full border-opacity-55  border-neutral-400 border-b ">
        <div className=" relative h-[200px] p-4 w-[200px] border border-neutral-300 border-opacity-80  ">
          <div className=" absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
        </div>
        <div className=" h-[200px] p-4 relative w-[200px] border-t border-b  border-neutral-300 border-opacity-80  ">
          <div className=" absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" flex flex-col items-center justify-center gap-2 w-full h-full rounded-xl p-4 border border-slate-400 bg-white border-opacity-55 shadow shadow-neutral-300">
            <div className=" h-[80px] w-[80px] flex items-center justify-center rounded-lg shadow shadow-slate-300 border border-slate-300 bg-neutral-200 bg-opacity-55 relative">
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 right-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 right-2"></div>
              <Languages size={28} />
            </div>
            <span className=" font-medium text-neutral-950 font-sans text-center">
              65+ language
            </span>
          </div>
        </div>
        <div className=" h-[200px] p-4 relative w-[200px] border-t border-b border-l border-neutral-300 border-opacity-80  ">
          <div className=" absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" flex flex-col items-center justify-center gap-2 w-full h-full rounded-xl p-4 border border-slate-400 bg-white border-opacity-55 shadow shadow-neutral-300">
            <div className=" h-[80px] w-[80px] flex items-center justify-center rounded-lg shadow shadow-slate-300 border border-slate-300 bg-neutral-200 bg-opacity-55 relative">
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 right-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 right-2"></div>
              <ImEmbed size={28} />
            </div>
            <span className=" font-medium text-neutral-950 font-sans text-center">
              Easy embeds
            </span>
          </div>
        </div>
        <div className=" h-[200px] p-4 relative w-[200px] border-t border-b border-l border-neutral-300 border-opacity-80  ">
          <div className=" absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" flex flex-col items-center justify-center gap-2 w-full h-full rounded-xl p-4 border border-slate-400 bg-white border-opacity-55 shadow shadow-neutral-300">
            <div className=" h-[80px] w-[80px] flex items-center justify-center rounded-lg shadow shadow-slate-300 border border-slate-300 bg-neutral-200 bg-opacity-55 relative">
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 right-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 right-2"></div>
              <GrFavorite size={28} />
            </div>
            <span className=" font-medium text-neutral-950 font-sans text-center">
              Favorite apps
            </span>
          </div>
        </div>
        <div className=" h-[200px] p-4 relative w-[200px] border-t border-b border-l border-neutral-300 border-opacity-80  ">
          <div className=" absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 rounded-full  text-slate-500 bg-background-sec flex items-center justify-center">
            <Plus size={20} className="text-neutral-400 opacity-75" />
          </div>
          <div className=" flex flex-col items-center justify-center gap-2 w-full h-full rounded-xl p-4 border border-slate-400 bg-white border-opacity-55 shadow shadow-neutral-300">
            <div className=" h-[80px] w-[80px] flex items-center justify-center rounded-lg shadow shadow-slate-300 border border-slate-300 bg-neutral-200 bg-opacity-55 relative">
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute top-2 right-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 left-2 "></div>
              <div className=" h-[5px] w-[5px] rounded-full bg-slate-300 absolute bottom-2 right-2"></div>
              <BiCustomize size={28} />
            </div>
            <span className=" font-medium text-neutral-950 font-sans text-center">
              Customization
            </span>
          </div>
        </div>
        <div className=" h-[200px] p-4 relative w-[200px] border border-neutral-300 border-opacity-80  "></div>
      </div>
    </div>
  );
};

export default ListSection;
