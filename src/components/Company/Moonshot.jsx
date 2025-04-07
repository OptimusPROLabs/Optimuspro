import { useEffect, useState } from 'react';

export default function Moonshot() {
  const dateLeft = ['2031 & Beyond', '2029', '2027', '2025', '2023', '2021'];
  const dateRight = ['2030', '2028', '2026', '2024', '2022', '2017 - 2020'];

  const dataLoopLeft = [
    {
      header: '🚀BRAND LAUNCH',
      point_one: ' Launch and incorporate Optimus PRO brand',
      point_two: 'Launch brand awareness campaigns',
      point_three: 'Establish strategic partnerships and collaboration',
      isBlur: true
    },
    {
      header: '🚀BRAND LAUNCH',
      point_one: ' Launch and incorporate Optimus PRO brand',
      point_two: 'Launch brand awareness campaigns',
      point_three: 'Establish strategic partnerships and collaboration',
      isBlur: true
    },
    {
      header: '🚀BRAND LAUNCH',
      point_one: ' Launch and incorporate Optimus PRO brand',
      point_two: 'Launch brand awareness campaigns',
      point_three: 'Establish strategic partnerships and collaboration',
      isBlur: true
    },
    {
      header: '🚀BRAND LAUNCH',
      point_one: ' Launch and incorporate Optimus PRO brand',
      point_two: 'Launch brand awareness campaigns',
      point_three: 'Establish strategic partnerships and collaboration',
      isBlur: true
    },
    {
      header: '🚀BRAND LAUNCH',
      point_one: ' Launch and incorporate Optimus PRO brand',
      point_two: 'Launch brand awareness campaigns',
      point_three: 'Establish strategic partnerships and collaboration',
      isBlur: false
    },
    {
      header: '💡 IDEATION',
      point_one: 'Defined project purpose and goals',
      point_two: 'Brainstorm, research and document solutions ',
      point_three: 'Launch a platform to educate people',
      isBlur: false
    }
  ];

  const dataLoopRight = [
    {
      header: '👷‍♂️ HUMAN INFRASTRUCTURES LAUNCH',
      point_one: 'Launch Optimus PRO Academy',
      point_two: 'Launch PROteam',
      point_three: 'Onboard talents to build Optimus PRO',
      isBlur: true
    },
    {
      header: '👷‍♂️ HUMAN INFRASTRUCTURES LAUNCH',
      point_one: 'Launch Optimus PRO Academy',
      point_two: 'Launch PROteam',
      point_three: 'Onboard talents to build Optimus PRO',
      isBlur: true
    },
    {
      header: '👷‍♂️ HUMAN INFRASTRUCTURES LAUNCH',
      point_one: 'Launch Optimus PRO Academy',
      point_two: 'Launch PROteam',
      point_three: 'Onboard talents to build Optimus PRO',
      isBlur: true
    },
    {
      header: '👷‍♂️ HUMAN INFRASTRUCTURES LAUNCH',
      point_one: 'Launch Optimus PRO Academy',
      point_two: 'Launch PROteam',
      point_three: 'Onboard talents to build Optimus PRO',
      isBlur: false
    },
    {
      header: '👥 TEAM & COMMUNITY BUILDING',
      point_one: 'Build a small team to kickstart our project',
      point_two: 'Launch our MVC (Minimum Viable Community)',
      point_three: 'Start training and upskilling our team',
      isBlur: false
    },
    {
      header: '❗EXPERIENCE PAIN POINTS',
      point_one: 'Lost significant funds due to pain points',
      point_two: 'Talked with people with similar experience',
      point_three: 'Conceptualization of solution',
      isBlur: false
    }
  ];

  const [imageSrc, setImageSrc] = useState('./singularrocket.png');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        console.log(window.innerWidth, 'hi there running ooo');
        setImageSrc('./singularrocketmobile.png');
      } else {
        console.log(window.innerWidth, 'hi there ran ooo');
        setImageSrc('./singularrocket.png');
      }
    };

    // Initial check
    handleResize();

    // Add listener for subsequent changes
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="mt-20">
      <div className="w-[100%] flex flex-col items-center justify-center">
        <div className="mt-6 text-5xl font-bold text-center leading-[70.08px] max-md:max-w-full max-md:text-4xl font-boxed text-[#0084FE]"> MoonShot</div>
        <div className="text-sm text-center text-white w-[100%] md:w-[50%] px-5 md:px-0">Unveiling our ambitious roadmap towards groundbreaking solutions that will revolutionize the Web3 ecosystem.</div>
      </div>

      <div className="mt-24 grid grid-rows-3 grid-cols-none md:grid-rows-none md:grid-cols-3 gap-2 px-5 md:px-20 overflow-x-auto md:overflow-x-visible whitespace-nowrap md:whitespace-normal h-[597px] md:h-[100%]">
        {/** first one */}
        <div className="row-span-1 md:col-span-1 flex flex-row-reverse justify-end md:justify-center md:flex-col gap-9">
          {dataLoopLeft.map((data, index) => (
            <div key={index} className={`${data.isBlur ? 'bg-[#FFFFFF] bg-opacity-[7%]' : 'bg-[#006DD9] bg-opacity-[32%]'} rounded-3xl p-5 flex flex-col items-start text-white relative`}>
              {data.isBlur && <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-3xl"></div>}
              <h4>{data.header}</h4>
              <div className="flex items-center gap-1">
                <span>.</span>
                <span>{data.point_one}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="pb-2">.</span>
                <span>{data.point_two}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="pb-2">.</span>
                <span>{data.point_three}</span>
              </div>
            </div>
          ))}
        </div>

        {/** second image */}
        <div className="row-span-1 md:col-span-1 flex flex-col md:flex-row justify-center relative">
          <div className="absolute top-[0px] md:top-0 md:relative flex flex-row-reverse justify-end md:justify-center md:items-end  md:flex-col gap-52 md:gap-40 md:pb-10 pl-32 md:pl-14 ">
            {dateLeft.map((data, index) => (
              <div key={index} className="text-white whitespace-nowrap text-end">
                {data}
              </div>
            ))}
          </div>
          <img src={imageSrc} alt="" className="w-[100%] h-auto" />
          <div className="absolute bottom-[-10px] md:bottom-0 md:relative flex flex-row-reverse justify-end md:justify-center md:items-start md:flex-col gap-[190px] md:gap-[155px] pl-32 md:pl-0 md:pr-14 md:pt-32">
            {dateRight.map((data, index) => (
              <div key={index} className="text-white whitespace-nowrap text-start">
                {data}
              </div>
            ))}
          </div>
        </div>
        {/** thid and last ine */}
        <div className="row-span-1 md:col-span-1 flex flex-row-reverse justify-end md:justify-center md:flex-col gap-9 pt-0 md:pt-24">
          {dataLoopRight.map((data, index) => (
            <div key={index} className={`${data.isBlur ? 'bg-[#FFFFFF] bg-opacity-[7%]' : 'bg-[#006DD9] bg-opacity-[32%]'} rounded-3xl p-5 flex flex-col items-start text-white relative`}>
              {data.isBlur && <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-3xl"></div>}
              <h4>{data.header}</h4>
              <div className="flex items-center gap-1">
                <span>.</span>
                <span>{data.point_one}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="pb-2">.</span>
                <span>{data.point_two}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="pb-2">.</span>
                <span>{data.point_three}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
