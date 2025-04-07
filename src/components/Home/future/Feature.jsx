import { useState } from 'react';
import { tabs } from './Tab';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Feature() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="px-4 py-20 relative overflow-hidden sm:px-32 mt-7 flex flex-col items-center gap-10 sm:gap-20">
      <div className="flex z-20 flex-col items-center px-0 sm:px-5 mt-0 w-full max-md:max-w-full">
        <div className="text-center">
          <div className="text-center relative z-20">
            <span className="text-white boxed_round_fonts leading-[48px] sm:leading-[60px] md:leading-[70px]">Driving Innovation and Collaboration in </span>
            <span className="gradient-text relative font-bold boxed_round_fonts leading-[48px] sm:leading-[60px] md:leading-[70px]">
              Web3
              <div className="gradient-background absolute left-[3px] bottom-0 w-full h-[3px]"></div>
            </span>
          </div>
          <div className="mt-4 mx-auto sub-heading relative z-20 max-w-[770px] text-center text-white max-md:mt-10">
            Empowering <b>misfits</b>, <b>underdogs</b>, <b>bold innovators</b> and <b>disruptors</b> from <b>ideation</b> with the infrastructure, support, resources and community they need to build
            and shape the future.
          </div>
        </div>
        
        <div className="max-w-[300px] sm:max-w-max mt-8 z-20 overflow-hidden relative h-12 px-1 py-1 bg-gradient-to-r from-black via-white/20 to-neutral-600 rounded-full border border-stone-300/30 backdrop-blur-3xl">
          <Swiper
            spaceBetween={2}
            slidesPerView="auto"
            grabCursor={true}
            freeMode={true}
            className="h-full w-full"
            wrapperClass="!flex"
          >
            {tabs.map(tab => (
              <SwiperSlide key={tab.id} className="!w-auto">
                <button
                  className={`h-10 px-4 rounded-full flex items-center justify-center whitespace-nowrap min-w-[100px] ${
                    activeTab === tab.id 
                      ? 'text-white gradient-background' 
                      : "text-white text-sm font-normal font-['Calibri'] leading-tight tracking-tight"
                  } focus:outline-none`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {tabs.map(
          tab =>
            activeTab === tab.id && (
              <div className="w-full relative z-10 mt-[50px] md:mt-[100px]" key={tab.id}>
                <div className="w-[379px] h-[463px] absolute right-5 -top-[100%] bg-[#050526] rounded-[100px] blur-[100px]" />
                <div className="relative z-10">{tab.content}</div>
              </div>
            )
        )}
      </div>
      <div className="w-[379px] h-[463px] absolute right-0 -bottom-[40%] bg-[#050526] rounded-[100px] blur-[100px]" />
    </div>
  );
}