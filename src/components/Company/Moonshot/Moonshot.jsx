import { useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaCheck } from 'react-icons/fa';
// import { FaCircleCheck } from 'react-icons/fa6';
import { roadmapData } from './moonshotData';

export default function Moonshot() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    currentRef.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => currentRef.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = direction => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400; // Increased scroll amount for faster scrolling
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => scroll('right'),
    onSwipedRight: () => scroll('left'),
    delta: 100, // Adjust the swipe threshold for faster response
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="w-full relative overflow-hidden px-4 min-h-[811px] py-[50px] md:py-[30px]">
      {/* Background Elements */}
      <div className="w-[530.69px] h-[648.20px] absolute top-0 -left-[50%] sm:left-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute top-0 -right-[120%] sm:-right-[20%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -bottom-[30%] -left-[50%] sm:left-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -bottom-[30%] -right-[120%] sm:-right-[20%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />

      <div className="custom-container relative z-10 pt-[40px] md:pt-[100px]">
        <div>
          <h3 className="gradient-text boxed_round_fonts text-center mb-6">Moonshot</h3>
          <p className="text-white text-center sub-heading">Unveiling our ambitious roadmap towards groundbreaking solutions that will revolutionize the Web3 ecosystem.</p>
        </div>
        <div className="relative mt-7 border-t-2 border-b-2 py-10">
          <div className="absolute top-[90px] left-0 right-0 h-0.5 gradient-background" />
          <div className="relative overflow-x-hidden">
            {showLeftArrow && (
              <button onClick={() => scroll('left')} className="absolute left-0 top-[15%] md:top-[25%] flex items-center justify-center z-10 gradient-background text-white rounded-full p-2 px-[13px]">
                &#9664;
              </button>
            )}
            {showRightArrow && (
              <button onClick={() => scroll('right')} className="absolute right-0 top-[15%] md:top-[25%] flex items-end justify-center z-10 gradient-background text-white rounded-full p-2 px-[13px]">
                &#9654;
              </button>
            )}
            <div {...handlers} ref={scrollRef} className="flex overflow-x-auto scrollbar-hide touch-pan-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {roadmapData.map((phase, index) => (
                <div key={index} className="flex-shrink-0 relative w-64 md:w-80 mr-8 last:mr-0">
                  <div className="relative flex flex-col items-center justify-center">
                    {phase.phase === 'Done' && <div className="absolute top-[50px] gradient-background w-full h-1 rounded" />}
                    <h3 className="gradient-text !text-2xl boxed_round_fonts text-center mb-8">{phase.phase}</h3>
                    <div className={`relative top-[-20px] flex items-center justify-center text-lg gradient-background rounded-full ${phase.phase === 'Done' ? 'w-5 h-5 top-[-22px]' : 'w-4 h-4'}`}>
                      {phase.phase === 'Done' ? <FaCheck className="text-xs text-white" /> : ''}
                    </div>
                    {/* <div className='border p-2 rounded-[8px] bg-red-500'> */}
                      <h4 className="font-bold text-center !text-lg boxed_round_fonts text-white mb-2">{phase.title}</h4>
                      <div className="flex items-center justify-center">
                        <ul className="list-disc pl-5 text-white flex flex-col gap-1 mt-2">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-300 mb-2 !leading-[24px] !text-[15px] boxed_round_fonts">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    {/* </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
