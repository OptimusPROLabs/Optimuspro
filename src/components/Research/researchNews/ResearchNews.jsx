import { researchData } from "./researchdata";

export default function ResearchNews() {
  return (
    <div className="relative overflow-hidden px-4 sm:px-20 py-[40px]">
      <div className="w-[379px] h-[463px] absolute -left-[10%] bg-sky-600/30 rounded-[100px] blur-[100px]" />
      <div className="w-[379px] h-[463px] absolute -right-[10%] -bottom-[20%] bg-sky-600/30 rounded-[100px] blur-[100px]" />
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {researchData.map((item, i) => (
            <div
              key={i}
              className="w-full md:w-full border rounded-[16px] bg-sky-500/10 p-4 mb-[24px]"
            >
              <div className="w-full rounded-[16px] h-[234px] overflow-hidden mb-[24px]">
                <img src={item.blogImg} alt="" className="w-full h-full" />
              </div>
              <div className="flex items-center justify-between text-base text-white">
                <span>{item.date}</span>
                <span>{item.by}</span>
              </div>
              <div className="text-left text-[17px] md:text-2xl text-white mt-4 font-['Advent_Pro']">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
