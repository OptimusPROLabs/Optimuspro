import React from "react";

export default function Solution() {
  return (
    <div className="flex flex-col mt-20">
      {/* Top */}
      <div className="flex flex-col justify-center items-center gap-7">
        <div className="text-[#000] text-5xl md:text-4xl font-bold w-[100%] text-center">
          Your{" "}
          <span className="text-[#5FC04A] whitespace-nowrap">AI-Powered </span>{" "}
          Solution in <br />{" "}
          <span className="text-[#9CA3AF]">the Fight Against Shoplifting</span>
        </div>
        <div className="text-sm text-[#374151] font-medium max-w-[580px] text-center md:text-[17px] leading-[25.2px] shrink-0">
          Argus transforms your security system from passive surveillance into
          proactive protection, using AI to continously analyse CCTV footage and
          identify suspecious behaviour patterns in real time
        </div>
      </div>

      {/* Bootom */}
      <div className="flex flex-col md:flex-row justify-center gap-7 md:gap-[10px] lg:gap-28 items-center mt-32 w-[100%] pl-14 md:pl-0">
        {/* one */}
        <div className="text-start">
          <div className="flex flex-col gap-5 items-start">
            <img src="/icons/connect.svg" alt="" className="h-10" />
            <div className="text-[#000] font-bold">Connect</div>
          </div>
          <div className="text-sm text-[#374151] leading-5 mt-3">
            Easily link Argus to your existing CCTV cameras – no complex
            hardware installations are required.
          </div>
        </div>
        {/* one */}
        <div className="text-start">
          <div className="flex flex-col gap-5 items-start">
            <img src="/icons/monitor.svg" alt="" className="h-10" />
            <div className="text-[#000] font-bold">Monitor</div>
          </div>
          <div className="text-sm text-[#374151] leading-5 mt-3">
            Our sophisticated AI continuously scans your CCTV footage,
            identifying patterns and activities indicative of shoplifting
            attempts.{" "}
          </div>
        </div>
        {/* one */}
        <div className="text-start">
          <div className="flex flex-col gap-5 items-start">
            <img src="/icons/alert.svg" alt="" className="h-10" />
            <div className="text-[#000] font-bold">Alert</div>
          </div>
          <div className="text-sm text-[#374151] leading-5 mt-3">
            Receive instant WhatsApp notifications the moment potential
            suspicious activity is detected, complete with images for quick
            assessment.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
