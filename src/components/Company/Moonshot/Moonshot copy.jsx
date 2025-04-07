import { leftRoadmapItems, rightRoadmapItems } from './data';

export default function Moonshot() {
  // Split the roadmap items into two halves
  // const firstHalf = roadmapItems.slice(0, Math.ceil(roadmapItems.length / 2));
  // const secondHalf = roadmapItems.slice(Math.ceil(roadmapItems.length / 2));

  return (
    <div className="w-full relative overflow-hidden px-4 min-h-[811px] py-[50px] md:py-[30px]">
      <div className="w-[530.69px] h-[648.20px] absolute top-0 -left-[50%] sm:left-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute top-0 -right-[120%] sm:-right-[20%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -bottom-[30%] -left-[50%] sm:left-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -bottom-[30%] -right-[120%] sm:-right-[20%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />

      <div className="custom-container relative z-10">
        <div className="">
          <h3 className="gradient-text boxed_round_fonts text-center mb-6">Moonshot</h3>
          <p className="text-white text-center sub-heading">Unveiling our ambitious roadmap towards groundbreaking solutions that will revolutionize the Web3 ecosystem.</p>
        </div>
        <div className="w-full overflow-auto mt-[65px] flex flex-col items-center">
          {/* Render the roadmap items and the rocket image */}
          <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full flex flex-row lg:flex-col gap-[39px]">
              {leftRoadmapItems.map((item, index) => (
                <div key={index} className="flex flex-col lg:flex-row w-full !text-xl body-text gap-4 items-center justify-between">
                  <div
                    className={`w-[353px] h-full rounded-2xl border border-white/30 px-2.5 pt-2 pb-1.5 
                    ${item.isBlur ? 'blur-sm bg-[#006dd9]/30' : 'bg-[#006dd9]/30'}`}
                  >
                    <h4 className="text-white uppercase font-bold">{item.title}</h4>
                    <ul className="list-disc leading-6 pl-5 text-white">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="text-white whitespace-nowrap">{item.year}</span>
                </div>
              ))}
            </div>

            {/* Render the rocket image in the middle */}
            <div className="flex w-[2315px] lg:w-[400px] flex-col items-center justify-center">
              <img src="/moonshot/singularrocket.png" alt="Rocket" className="w-full h-full hidden lg:block" />
              <img src="/moonshot/horizontalrocket.png" alt="Rocket" className="w-full h-[150px] block lg:hidden" />
            </div>

            <div className="w-full flex flex-row lg:flex-col gap-[39px] lg:pt-[80px]">
              {rightRoadmapItems.map((item, index) => (
                <div key={index} className="flex flex-col-reverse lg:flex-row-reverse !text-xl body-text w-full gap-4 items-center justify-between">
                  <div
                    className={`w-[353px] h-full rounded-2xl border border-white/30 px-2.5 pt-2 pb-1.5 
                    ${item.isBlur ? 'blur-sm bg-[#006dd9]/30' : 'bg-[#006dd9]/30'}`}
                  >
                    <h4 className="text-white uppercase font-bold">{item.title}</h4>
                    <ul className="list-disc pl-5 text-white">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="text-white whitespace-nowrap">{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
