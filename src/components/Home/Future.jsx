import { Link } from 'react-router-dom';
import { dataInTheNews } from '../Community/DataInTheNews';

export default function Future() {
  return (
    <div className="flex mt-6 flex-col gap-9 justify-center items-center rounded-3xl text-center h-[100%] mb-22 sm:mb-28 md:mb-44 bg-[#000]">
      <div className="w-[530.69px] h-[648.20px] absolute left-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute right-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="text-white flex flex-col justify-center items-center mt-14">
        <div className="boxed_round_fonts sm:leading-[60px] md:leading-[70px] text-center text-white max-md:max-w-full">
          Build the future with <span className="gradient-text">Optimus PRO</span>
        </div>
        <div className="mt-2 text-base sub-heading leading-6 text-white max-md:max-w-full">Ready to be part of our passionate and ambitious team? Apply now.</div>
        {/* Button */}
        <Link
          to=""
          className={`h-[51px] w-[166px] !text-xl body-text gradient-background rounded-2xl text-[white] cursor-pointer transition-[background-color] duration-[0.3s] md:flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[16px] px-5 py-2.5 mt-5 flex`}
        >
          <span className="text-white whitespace-nowrap">Join Our Team</span>
          <img src="/icons/ArrowRight.svg" className="w-4 h-4" alt="" />
        </Link>
      </div>
      {/* Other one */}
      <div className="relative w-[100vw] flex flex-col items-center px-0 sm:px-10 sm:mt-10">
        <img src="/blog.png" alt="" className="absolute sm:top-[-90px] w-[100%] h-full md:h-[950px] z-10" />
        <div className="text-white font-['AdventPro-Bold'] text-5xl z-[9999999] mt-[60px]">Blog</div>

        <div className="w-full px-4 sm:px-20 mt-10 md:mt-20 relative z-20">
          <div className="flex flex-col md:flex-row gap-5">
            {dataInTheNews.map((item, i) => (
              <div key={i} className="w-full md:w-[389px] border bg-sky-500/10 rounded-[16px] p-4 mb-[24px]">
                <div className="w-full rounded-[16px] h-[234px] overflow-hidden mb-[24px]">
                  <img src={item.blogImg} alt="" className="w-full h-full" />
                </div>
                <div className="flex items-center font-['AdventPro-Regular'] justify-between text-base text-white">
                  <span>{item.date}</span>
                  <span>{item.by}</span>
                </div>
                <div className="text-left text-[17px] md:text-2xl text-white mt-4 font-['AdventPro-Regular']">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
