import { Link } from 'react-router-dom';

export default function JoinOurTeam() {
  return (
    <div className="py-[40px] sm:py-[0px] relative overflow-hidden">
      <div className="w-full min-h-[270px] sm:min-h-[434px] flex flex-col items-center justify-center px-4 sm:px-5 relative overflow-hidden">
        <div className="w-[604.93px] h-[729.03px] absolute left-[20%] top-0 origin-top-left rotate-[-75deg] bg-gradient-to-br from-sky-500 to-cyan-500 rounded-[100px] blur-[240px]" />
        <div className="w-[681.47px] h-[832.37px] absolute right-0 top-0 origin-top-left rotate-[-75deg] bg-sky-600/25 rounded-[100px] blur-[240px]" />
        <div className="mx-auto flex relative z-10 flex-col items-center max-w-[500px] min-h-[189px]">
          <div className="mt-6 boxed_round_fonts text-center text-white leading-[70.08px] max-md:max-w-full">
            Let's
            <span className="gradient-text"> Connect</span>
          </div>
          <div className="mt-2 sub-heading text-center leading-6 text-white max-md:max-w-full">Reach out to us for inquiries, collaborations, partnerships, or just say hello!</div>
          {/* Button */}
          <Link
            to=""
            className={`h-[51px] w-[166px] body-text !text-xl gradient-background rounded-2xl text-[white] cursor-pointer transition-[background-color] duration-[0.3s] md:flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium px-5 py-2.5 mt-5 flex`}
            // style={{
            //   backgroundImage:
            //     "linear-gradient(130.23538645559722deg, rgba(0, 128, 255, 1) 55.42494628353543%, rgba(0, 217, 217, 1) 73.15761965385957%)",
            // }}
          >
            <span className="text-white whitespace-nowrap">Let Connect</span>
            <img src="/icons/ArrowRight.svg" className="w-4 h-4" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
