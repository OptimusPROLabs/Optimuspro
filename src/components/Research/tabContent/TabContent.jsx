import { useState } from "react";
import { tabs } from "./Tab";

export default function TabContent() {
  const [activeTab, setActiveTab] = useState(4);

  return (
    <div className="px-4 relative sm:px-20 py-[20px] flex flex-col items-center gap-10 sm:gap-20">
      <div className="w-[379px] h-[463px] absolute -left-[20px] -top-[200px] bg-sky-600/25 rounded-[100px] blur-[100px]" />
      <div className="w-[530.69px] h-[648.20px] absolute right-0 top-[120%] origin-top-left rotate-[-75deg] bg-sky-600/30 rounded-[100px] blur-[240px]" />
      <div className="h-14 w-full md:w-[700px] lg:w-[1000px] relative z-10 overflow-x-auto overflow-y-hidden gap-5 sm:gap-0 flex justify-between items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`max-w-full sm:max-w-max h-[42px] whitespace-nowrap grow shrink basis-0 text-white text-xs font-medium leading-tight tracking-tight p-3 bg-[#234553] rounded-full justify-center items-center gap-2 flex ${
              activeTab === tab.id ? "text-white" : ""
            } focus:outline-none`}
            style={
              activeTab === tab.id
                ? {
                    backgroundImage:
                      "linear-gradient(130.23538645559722deg, rgba(0, 128, 255, 1) 55.42494628353543%, rgba(0, 217, 217, 1) 73.15761965385957%)",
                    color: "white", // Add text color here
                  }
                : {}
            }
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="">{tab.title}</span>
          </button>
        ))}
      </div>

      {tabs.map(
        (tab) =>
          (activeTab === tab.id || activeTab === 0) && ( // Show all contents if "All" is active
            <div key={tab.id} className="mb-4 relative z-10">
              {tab.content}
            </div>
          )
      )}
    </div>
  );
}
