import { Link } from 'react-router-dom';
import { socialData } from '../data/social';

export default function JoinCommunity() {
  return (
    <div className="relative px-4 sm:px-5 py-[80px]">
      <div className="w-[379px] h-[463px] absolute left-0 top-[60px] pr-[21.87px] bg-sky-600/10 rounded-[100px] blur-[100px] flex-col justify-start items-center inline-flex" />
      <div className="w-[379px] h-[463px] absolute right-0 bottom-0 sm:top-[60px] bg-sky-600/10 rounded-[100px] blur-[100px]" />
      <div className="mx-auto relative z-10 max-w-[1031px] flex flex-col">
        <div className="mx-auto max-w-[524.66px] min-h-[45.94px] relative mb-4">
          <div className="boxed_round_fonts text-center bg-clip-text bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] leading-[70px] max-md:text-4xl max-md:leading-[50px]">
            <span className="relative text-white whitespace-normal md:whitespace-nowrap z-[999999]">Join Our</span> <span className="relative gradient-text">Community</span>
          </div>
        </div>
        <p className="text-center sub-heading text-white mb-4">Our story isn't complete without you. Join us in building the future.</p>
        <p className="text-center body-text sm:!text-[22px] !font-normal text-white">
          Become a part of the fastest-growing Web3 community, uniting Researchers, Builders, Mentors, Entrepreneurs, Innovators, and Investors.
        </p>
        <p className="text-center body-text sm:!text-[22px] text-white mt-2">Together, we're at the forefront of developing groundbreaking solutions that redefine possibilities.</p>

        <div className="w-full min-h-[249.63px] mt-10 px-5 py-8 rounded-[32px] border border-stone-300/30">
          <div className="mx-auto max-w-[721px] min-h-[185.63px] flex flex-col justify-between">
            <div className="min-h-[79.63px] flex items-center justify-between w-full">
              <div className="flex flex-col text-5xl font-bold text-center bg-clip-text bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] boxed_round_fonts">
                <span className="relative gradient-text">10K+</span>
                <span className="text-base text-white body-text">Active members</span>
              </div>
              <div className="flex flex-col text-5xl font-bold text-center bg-clip-text bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] boxed_round_fonts">
                <span className="relative gradient-text">4</span>
                <span className="text-base text-white body-text">Projects</span>
              </div>
              <div className="flex flex-col text-5xl font-bold text-center bg-clip-text bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] boxed_round_fonts">
                <span className="relative gradient-text">7</span>
                <span className="text-base text-white body-text">Countries</span>
              </div>
            </div>
            <div className="min-h-[76px] mx-auto max-w-[400px] mt-10 w-full">
              <div className="w-full flex flex-wrap items-center justify-center gap-5">
                {socialData.map((social, index) => (
                  <Link to={social.link} key={index} target="_blank" className="flex-1 basis-[20%] max-w-[20%]">
                    <social.icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
