export default function Hero() {
  return (
    <div className="relative w-full min-h-[647px] md:min-h-[747px] flex items-center justify-center">
      <div className="absolute bg-black/50 z-10 top-0 left-0 w-full h-full" />
      <img src="/company/hero.png" alt="" className="w-full h-full object-cover absolute top-0 left-0 z-0" />
      <div className="relative px-4 mt-[50px] w-full z-10 text-center text-white">
        <div className="custom-container flex flex-col items-start justify-start">
          <div className="">
            <div className="text-white !text-3xl md:!text-5xl !leading-[40px] md:!leading-[58px] text-left max-w-[500px] boxed_round_fonts">
              Forget the status quo. <br />
              We are <span className="gradient-text">Optimus PRO</span>; <br />
              here to <span className="gradient-text">Revolutionize </span>
              <br />
              the <span className="gradient-text">Web3 Ecosystem</span>
            </div>
            <div className="text-left sub-heading max-w-[550px] mt-4">
              Beyond dreamers; we're a collective of passionate and relentless visionaries, innovators, creators, builders, and from diverse backgrounds motivated by a shared vision and collective
              ambition of a fair, secure and transparent ecosystem.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
