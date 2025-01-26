import { FileText, Code, Layers, Book } from "lucide-react";

export default function DeveloperContainer() {
  const developerItems = [
    {
      icon: FileText,
      title: "Developer Documentation",
      description: "Documentation for the Cal.com platform",
    },
    {
      icon: Code,
      title: "API",
      description: "Build your own integrations with our public API",
    },
    {
      icon: Layers,
      title: "Platform",
      description:
        "Build your pixel-perfect booking experience with our Cal Atoms API",
    },
    {
      icon: Book,
      title: "Starter Kit",
      description: "Build your own scheduling app with our starter kit",
    },
  ];

  return (
    <div className=" max-w-xl p-4 shadow rounded-lg shadow-slate-200">
      <div className="space-y-4">
        {developerItems.map((item, index) => (
          <div
            key={index}
            className="flex font-sans items-start gap-4 group cursor-pointer hover:bg-[#f5f5f5] rounded-xl p-2 transition-colors duration-200"
          >
            <div className="p-3 relative bg-[#f5f5f5] rounded-xl group-hover:bg-gray-200 transition-colors">
              <item.icon className="w-7 h-7 shadow-sm shadow-slate-200 text-[#374151]" />
              <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 top-1.5 left-1.5 group-hover:top-2 group-hover:left-2"></div>
              <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 top-1.5 right-1.5 group-hover:top-2 group-hover:right-2"></div>
              <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 bottom-1.5 left-1.5 group-hover:bottom-2 group-hover:left-2"></div>
              <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 bottom-1.5 right-1.5 group-hover:bottom-2 group-hover:right-2"></div>
            </div>
            <div className="space-y-1 flex flex-col items-start justify-center ">
              <h3 className="font-semibold text-base text-gray-900 group-hover:text-gray-950">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
