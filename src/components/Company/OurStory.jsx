export default function OurStory() {
  return (
    <div className="w-full relative overflow-hidden px-4 min-h-[811px] py-[50px] md:py-[100px]">
      <div className="w-[379px] h-[463px] absolute top-[5%] md:top-[20%] -left-[50%] sm:left-0 bg-[#006dd9]/20 rounded-[100px] blur-[100px]" />
      <div className="w-[379px] h-[463px] absolute -bottom-[25%] right-0 bg-[#006dd9]/10 rounded-[100px] blur-[100px]" />
      <div className="w-[379px] h-[463px] absolute -bottom-[35%] left-0 bg-[#006dd9]/10 rounded-[100px] blur-[100px]" />
      <div className="custom-container relative z-10">
        <div className="">
          <h3 className="gradient-text boxed_round_fonts text-center mb-6">Our Story</h3>
          <p className="text-white text-center sub-heading">A group of ambitious individuals pushing beyond boundaries through groundbreaking innovations.</p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center md:items-start text-white">
          <div className="w-full z-10 relative md:w-1/2 mb-8 md:mb-0">
            <img src="/company/our-story.png" alt="our-story" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full flex flex-col gap-5 body-text md:w-1/2 md:pl-4">
            <p className="body-text">
              Founded in <span className="gradient-text">2020</span>, our journey began with an unwavering passion for Web3 technologies and a relentless drive to solve the challenges we faced
              firsthand: <span className="gradient-text">exit-scams, rug pulls, pump-&-dump schemes, unfair token distributions, security vulnerabilities</span> and{' '}
              <span className="gradient-text">market manipulations</span> which have cost users <span className="gradient-text">billions</span> of dollars.
            </p>

            <p className="body-text">
              These problems still persist, indicating the need for urgent solutions and this has fueled <span className="gradient-text">our mission</span> to empower the{' '}
              <span className="gradient-text">next generation</span> of Web3 <span className="gradient-text">innovators, creators</span> and <span className="gradient-text">builders</span> to shape
              the future of the internet through <span className="gradient-text">bold, groundbreaking ideas</span> that redefine what's possible.
            </p>

            <p className="body-text">
              At Optimus PRO, <span className="gradient-text">we envision </span>an <span className="gradient-text">inclusive</span>, <span className="gradient-text">community-driven</span> and <span className="gradient-text">secure</span> ecosystem where <span className="gradient-text">everyone</span> can <span className="gradient-text">collaborate, build</span>, and <span className="gradient-text">thrive</span> together, actualizing a <span className="gradient-text">decentralized</span> future that's
              <span className="gradient-text">fair, open,</span> and <span className="gradient-text">empowering</span> for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
