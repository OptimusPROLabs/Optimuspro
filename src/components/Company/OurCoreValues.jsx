const data = [
  {
    alphabet: 'E',
    title: 'Excellence',
    content: 'we are obsessed with excellence and we push ourselves beyond boundaries to set new industry standards through daring innovation.'
  },
  {
    alphabet: 'P',
    title: 'Passion',
    content: 'passion drives us, fueling our enthusiasm and dedication to our work and mission'
  },
  {
    alphabet: 'I',
    title: 'Innovation',
    content: "we foster innovation by constantly seeking new and creative solutions to challenges, pushing the boundaries of what's possible."
  },
  {
    alphabet: 'C',
    title: 'Collaboration',
    content: 'we cultivate a culture of collaboration, where diverse perspectives are valued and teamwork is celebrated.'
  },
  {
    alphabet: 'A',
    title: 'Adaptability',
    content: 'We embrace adaptability and resilience, embracing change and navigating challenges.'
  },
  {
    alphabet: 'C',
    title: 'Community',
    content: 'we prioritize community, fostering inclusivity, connections, collaboration, and support among our team members and stakeholders.'
  },
  {
    alphabet: 'T',
    title: 'Transparacy',
    content: 'we promote transparency and honesty, fostering trust and integrity in all interactions'
  },
  {
    alphabet: 'S',
    title: 'Service',
    content: 'we serve humanity, leveraging our skills and resources to make a positive impact and contribute to the greater good'
  }
];

export default function OurCoreValues() {
  return (
    <div className="w-full relative overflow-hidden px-4 min-h-[811px] py-[50px] md:py-[30px]">
      <div className="w-[530.69px] h-[648.20px] absolute top-0 -left-[120%] sm:-left-[30%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute top-0 -right-[90%] sm:-right-[30%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute bottom-[10%] -right-[70%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -bottom-[30%] -right-[70%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />

      <div className="custom-container relative z-10">
        <div className="">
          <h3 className="gradient-text boxed_round_fonts text-center mb-6">Our Core Values</h3>
          <p className="text-white text-center sub-heading">
            Our values drive innovation, community, and collaboration, shaping an extraordinary journey with
            <br />
            <span className="gradient-text">EPIC ACT</span>{' '}
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3 text-white">
          {data.map((item, i) => (
            <div key={i} className="flex justify-start items-center gap-3 bg-[#212121] bg-opacity-[50%] p-1 rounded-full">
              {/** the rounded shit */}
              <div className="max-w-max">
                <div className="gradient-background text-white font-bold rounded-full w-[70px] sm:w-[114px] h-[70px] sm:h-[114px] relative">
                  <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[transformer] text-[25px] sm:text-[35px] md:text-[58px]">{item.alphabet}</span>
                </div>
              </div>
              {/** right hand information */}
              <div className="text-white">
                <h4 className="boxed_round_fonts !text-lg md:!text-[32px] !leading-normal">{item.title}:</h4>
                <div className="boxed_round_fonts !text-base md:!text-xl !font-normal !leading-normal">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
