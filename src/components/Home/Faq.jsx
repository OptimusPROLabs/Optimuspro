import React from "react";

export default function Faq() {
  const eachAsk = [
    {
      desc: "What is Argus and how does it work?",
    },
    {
      desc: "Do I need to install any additional hardware to use Argus?",
    },
    {
      desc: "How do real-time WhatsApp alerts work?",
    },
    {
      desc: "Is Argus suitable for small stores?",
    },
    {
      desc: "How does Argus help in reducing inventory loss?",
    },
    {
      desc: "What kind of support is available if I encounter issues with Argus?",
    },
    {
      desc: "How quickly can I get Argus set up in my store?",
    },
    {
      desc: "What happens if a shoplifting attempt is detected?",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-5 relative bg-[rgba(0,109,217,0.21)] bg-opacity-[5%] rounded-2xl px-14 py-10 w-[100%] mt-32 md:mt-20">
      <div className="absolute top-[10.6px] right-[-38px] w-[823px] h-[472.3px] inset-0"></div>
      <div className="blur-[120px] rounded-[100px] bg-[rgba(0,109,217,0.21)] rotate-[-75deg] absolute left-[-171px] bottom-[1995.6px] w-[763.5px] h-[180.4px] inset-0"></div>
      <div className="blur-[120px] rounded-[100px] bg-[rgba(30,26,203,0.2)] rotate-[-75deg] absolute right-[-230.5px] bottom-[1854.6px] w-[763.5px] h-[180.4px] inset-0"></div>
      <div className="blur-[120px] rounded-[100px] bg-[linear-gradient(120.36deg,rgba(0,128,255,0.15)_10.8%,rgba(0,217,217,0.15)_86%)] rotate-[-75deg] absolute right-[177.6px] bottom-[558.3px] w-[980.4px] h-[173.7px] inset-0"></div>
      <div className="blur-[120px] rounded-[100px] bg-[rgba(0,109,217,0.18)] rotate-[-75deg] absolute left-[-259px] bottom-[715.3px] w-[980.4px] h-[173.7px] inset-0"></div>
      <div className="text-white relative z-20 flex flex-col justify-center items-center mt-14">
        <div className="mt-6 text-5xl font-bold text-center text-white leading-[70.08px] max-md:max-w-full max-md:text-4xl font-boxed">
          Build the future with{" "}
          <span className="text-[#0084FE]">Optimus PRO</span>
        </div>
        <div className="mt-2 text-base leading-6 text-white max-md:max-w-full font-calibri">
          Ready to be part of our passionate and ambitious team? Apply now.
        </div>
        {/* Button */}
        <div
          className={`h-12 w-[166px] rounded-2xl text-[white] cursor-pointer transition-[background-color] duration-[0.3s] md:flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[15px] px-5 py-2.5 mt-5 flex`}
          style={{
            backgroundImage:
              "linear-gradient(130.23538645559722deg, rgba(0, 128, 255, 1) 55.42494628353543%, rgba(0, 217, 217, 1) 73.15761965385957%)",
          }}
        >
          <div className="text-white whitespace-nowrap">Join Our Team</div>
          <div className="Icon">
            <img src="/icons/ArrowRight.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
