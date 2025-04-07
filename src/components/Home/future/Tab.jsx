const talentLayerImg = '/features/talent-layer.jpg';
const techImg = '/features/tech.jpg';
const financialImg = '/features/financial.jpg';
const supportImg = '/features/support.jpg';

export const tabs = [
  {
    id: 0,
    title: 'Talent',
    content: (
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-[32px]">
        <div className="w-full h-full ">
          <img src={talentLayerImg} alt="" className="w-full h-full rounded-2xl" />
        </div>
        <div className="w-full h-full flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-white !font-bold body-text leading-[38px]">Talent Layer</div>
          <div className="self-stretch text-white body-text">
            <p>Connect with culture-fit talents, contributors, collaborators, promoters, and startup programs. Begin your entrepreneurial journey with a community that backs you from day one.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: 'Tech',
    content: (
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-[32px]">
        <div className="w-full h-full">
          <img src={techImg} alt="" className="w-full h-full rounded-2xl" />
        </div>
        <div className="w-full h-full flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-white !font-bold body-text leading-[38px]">Tech Infrastructures</div>
          <div className="self-stretch text-white body-text">
            <p>
              We enable seamless processes by providing access to the latest tech tools, stacks and development frameworks. This allows you to build scalable and secure solutions faster and with
              better leverage.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Financial',
    content: (
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-[32px]">
        <div className="w-full h-full">
          <img src={financialImg} alt="" className="w-full h-full rounded-2xl" />
        </div>
        <div className="w-full h-full flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-white !font-bold body-text leading-[38px]">Financial Resources</div>
          <div className="self-stretch text-white body-text">
            <p>
              Our platform facilitates fundraising for visionary entrepreneurs, offering a comprehensive suite of strategic early-stage funding options, and resources, helping turn bold ideas into
              successful ventures.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Support',
    content: (
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-[32px]">
        <div className="w-full h-full">
          <img src={supportImg} alt="" className="w-full h-full rounded-2xl" />
        </div>
        <div className="w-full h-full flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-white !font-bold body-text leading-[38px]">Operational Support</div>
          <div className="self-stretch text-white body-text">
            <p>Accelerate your growth with comprehensive guidance, expert mentorship and a strategic advisory network needed to drive sustainable success in shaping the decentralized future.</p>
          </div>
        </div>
      </div>
    )
  }
];
