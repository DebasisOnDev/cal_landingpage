import Link from "next/link";

import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full px-6  md:py-12 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl ">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 items-start justify-between">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-2xl font-bold">
                Cal.com
              </Link>
              <span className="rounded bg-[#E8FFF3] px-2 py-0.5 text-xs font-medium text-black">
                HIRING
              </span>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-gray-600">
              Cal.com® and Cal® are a registered trademark by Cal.com, Inc. All
              rights reserved.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544A8.127 8.127 0 0 1 5.5 16.898a5.778 5.778 0 0 0 4.252-1.189 2.879 2.879 0 0 1-2.684-1.995 2.88 2.88 0 0 0 1.298-.049c-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359a2.877 2.877 0 0 1-.889-3.835 8.153 8.153 0 0 0 5.92 3.001 2.876 2.876 0 0 1 4.895-2.62 5.73 5.73 0 0 0 1.824-.697 2.884 2.884 0 0 1-1.263 1.589 5.73 5.73 0 0 0 1.649-.453 5.765 5.765 0 0 1-1.433 1.489z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018s7 3.14 7 7.018c0 3.878-3.132 7.018-7 7.018zm6.258-11.636c-.043-.117-.245-.175-.505-.175-.26 0-.478.064-.635.175-.157.11-.157.259-.157.369v8.175c0 .11 0 .26.157.369.157.11.375.175.635.175.26 0 .462-.064.505-.175.043-.11.043-.259.043-.369V7.382c0-.11 0-.259-.043-.369zm-8.375 1.87c-.144-.137-.375-.205-.678-.205-.303 0-.534.068-.678.205-.144.137-.144.342-.144.478v4.886c0 .137 0 .341.144.478.144.137.375.205.678.205.303 0 .534-.068.678-.205.144-.137.144-.341.144-.478V8.73c0-.136 0-.341-.144-.478zm4.188-.205c-.303 0-.534.068-.678.205-.144.137-.144.342-.144.478v4.886c0 .137 0 .341.144.478.144.137.375.205.678.205.303 0 .534-.068.678-.205.144-.137.144-.341.144-.478V8.73c0-.136 0-.341-.144-.478-.144-.137-.375-.205-.678-.205z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.622.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.622-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.93 19.012v-6.467l5.555.723v1.482l-3.838-.505v1.766l3.838.505v1.482l-5.555-.723zm-7.358-1.939V15.58l3.838.505v-1.766l-3.838-.505v-1.482l5.555.723v6.467l-5.555-.723v-1.482l3.838.505v-1.766l-3.838-.505z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M7.168 0c-3.2 0-5.797 2.579-5.797 5.758v12.484C1.371 21.421 3.968 24 7.168 24c1.981 0 3.716-.978 4.768-2.479l.794.421c2.566 1.356 5.138 1.631 7.43.531 1.372-.66 2.388-1.752 2.388-3.221V3.24c0-.588-.413-1.096-.998-1.21L20.37 1.79c-2.2-.43-4.246-.088-6.31 1.058l-1.033.573C12.279.931 10.875 0 9.168 0H7.168zm0 2h2c1.089 0 1.997.744 2.255 1.725l-4.255.575v-.3C7.168 3.145 7.823 2 9.168 2h-2zm4.292 2.62l1.562-.867c1.445-.802 3.015-1.077 4.708-.761l.894.175v2.237l-.894-.175c-1.694-.315-3.263-.041-4.708.761l-1.562.867v-2.237zm0 4.62l1.562-.867c1.445-.802 3.015-1.077 4.708-.761l.894.175v2.237l-.894-.175c-1.694-.315-3.263-.041-4.708.761l-1.562.867v-2.237zm0 4.62l1.562-.867c1.445-.802 3.015-1.077 4.708-.761l.894.175v2.237l-.894-.175c-1.694-.315-3.263-.041-4.708.761l-1.562.867v-2.237z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-sans text-[17px] font-semibold text-gray-900">
              Solutions
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Self-hosted",
                "SaaS Hosting",
                "Docs",
                "Cal.ai - AI Phone Agent",
                "Enterprise",
                "Platform",
                "Cybersecurity",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[15px] text-gray-600 hover:text-gray-900"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-sans text-[17px] font-semibold text-gray-900">
              Use Cases
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Sales",
                "Marketing",
                "Talent Acquisition",
                "Customer Support",
                "Higher Education",
                "Telehealth",
                "Professional Services",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[15px] text-gray-600 hover:text-gray-900"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-sans text-[17px] font-semibold text-gray-900">
              Resources
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Blog",
                "Teams",
                "Embed",
                "Recurring events",
                "Developers",
                "OOO",
                "Workflow",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[15px] text-gray-600 hover:text-gray-900"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-sans text-[17px] font-semibold text-gray-900">
              Company
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Jobs",
                "About",
                "Open Startup",
                "Support",
                "Privacy",
                "Terms",
                "Home",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[15px] text-gray-600 hover:text-gray-900"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-[15px] text-gray-600">
            Our mission is to connect a billion people by 2031 through calendar
            scheduling.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
