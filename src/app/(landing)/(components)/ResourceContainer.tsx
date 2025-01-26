import {
  Code,
  Terminal,
  Newspaper,
  Smartphone,
  Moon,
  Users,
  CreditCard,
  Calendar,
  Maximize2,
} from "lucide-react";

export default function ResourcesContainer() {
  const resourceItems = [
    {
      icon: Code,
      title: "API",
      description: "Build your own integrations with our public API",
    },
    {
      icon: Terminal,
      title: "Embed",
      description: "Embed Cal.com into your website",
    },
    {
      icon: Newspaper,
      title: "Blog",
      description: "Stay up to date with the latest news and updates",
    },
    {
      icon: Smartphone,
      title: "App Store",
      description: "Integrate with your favorite apps",
    },
    {
      icon: Moon,
      title: "Out Of Office",
      description: "Schedule time off with ease",
    },
    {
      icon: Users,
      title: "Dynamic Group Links",
      description: "Seamlessly book meetings with multiple people",
    },
    {
      icon: CreditCard,
      title: "Payments",
      description: "Accept payments for bookings",
    },
    {
      icon: Calendar,
      title: "Recurring events",
      description: "Schedule recurring events",
    },
    {
      icon: Maximize2,
      title: "Webhooks",
      description: "Get notified when something happens",
    },
  ];

  return (
    <div className="max-w-5xl shadow shadow-slate-200 rounded-lg p-4">
      <div className="flex flex-wrap gap-3">
        {resourceItems.map((item, index) => (
          <div
            key={index}
            className="flex font-sans items-start gap-4 group cursor-pointer hover:bg-[#f5f5f5] rounded-xl p-2 transition-colors duration-200 flex-1 min-w-[calc(33.333%-1rem)] max-w-[calc(33.333%-1rem)]"
          >
            <div className="p-3 my-auto relative bg-[#f5f5f5] rounded-xl group-hover:bg-gray-200 transition-colors">
              <item.icon className="w-7 h-7 shadow-sm shadow-slate-200 text-[#374151]" />

              <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 top-1.5 left-1.5 group-hover:top-2 group-hover:left-2"></div>
              <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 top-1.5 right-1.5 group-hover:top-2 group-hover:right-2"></div>
              <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 bottom-1.5 left-1.5 group-hover:bottom-2 group-hover:left-2"></div>
              <div className="w-1 h-1 rounded-full absolute transition-all duration-300 bg-gray-400/50 bottom-1.5 right-1.5 group-hover:bottom-2 group-hover:right-2"></div>
            </div>
            <div className="space-y-1 flex flex-col items-start my-auto justify-center">
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
