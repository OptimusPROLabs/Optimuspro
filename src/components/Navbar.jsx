import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const goto = url => {
    navigate(url);
    setNav(false);
  };

  return (
    <div
      className="fixed top-[50px] md:top-14 left-[50%] translate-x-[-50%] translate-y-[-50%] w-full md:max-w-[58.75rem] xl:max-w-[68.75rem] md:h-[82px]  rounded-[65px] backdrop-blur-md bg-white backdrop-filter bg-opacity-[4%] border-g text-sm md:text-base flex justify-between items-center gap-4 py-2 px-7 z-50 text-[#FFFFFF]"
    >
      {/* First side */}
      <Link to="/" className="text-[1.5em] font-bold flex gap-x-1 items-center">
        <img src="/OPTI.png" alt="" className="w-[35px] sm:w-[35px] mr-1" />
        <h1 className='text-cyan-500'> Optimus PRO</h1>
      </Link>
      {/* Second cover */}
      <div className="flex items-center gap-x-10">
        {/* Second inside */}
        <div
          className={` ${
            !nav ? 'hidden' : 'flex'
          } absolute custom-gradient-background md:bg-transparent h-auto rounded-xl flex-col items-start p-3 w-[97%] top-24 left-[50%] gap-4 text-base translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0 md:top-0 md:left-0 md:w-auto md:p-0 md:block md:flex-none  md:rounded-none md:h-auto md:bg-none md:relative  md:justify-center md:gap-6`}
        >
          <ul className="flex-none font-['BoxedRound'] md:flex md:gap-14 text-[18px]">
            <li className="hover:text-[#ddd] mb-3 cursor-pointer" onClick={() => goto('/')}>
              <span className="text-black md:text-white">Home</span>
            </li>
            <li className="hover:text-[#ddd] mb-3 cursor-pointer" onClick={() => goto('/community')}>
              <span className="text-black md:text-white">Community</span>
            </li>
            <li className="hover:text-[#ddd] mb-3 cursor-pointer" onClick={() => goto('/blog')}>
              <span className="text-black md:text-white">Blog</span>
            </li>
            <li className="hover:text-[#ddd] mb-3 cursor-pointer" onClick={() => goto('/company')}>
              <div className="text-black md:text-white">Company</div>
            </li>
            <li className="hover:text-[#ddd] mb-3 cursor-pointer" onClick={() => goto('/contact')}>
              <span className="text-black md:text-white">Contact</span>
            </li>
            <li className="hover:text-[#ddd] mb-3 cursor-pointer" onClick={() => goto('/resources')}>
              <span className="text-black md:text-white">Resorces</span>
            </li>
          </ul>
          {/* close */}
          <div className="absolute md:hidden flex top-6 right-8 z-[99999999999999999] cursor-pointer" onClick={() => setNav(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="#329447" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></path>
            </svg>
          </div>

          {/* close */}

          {/* <div className="md:hidden h-10 w-[100%] border bg-[#0084FE] rounded-[10px] text-[white] cursor-pointer transition-background-color duration-[0.3s] flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[14px] px-5 py-2.5 border-solid border-[#77b980]">
            <div className="text-white text-center">Get Started</div>
            <div className="Icon">
              <img src="/icons/ArrowRight.svg" alt="" />
            </div>
          </div> */}
        </div>

        <div className="block md:hidden cursor-pointer rounded-full py-3 px-3" onClick={() => setNav(!nav)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
            <path fill="none" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"></path>
          </svg>
        </div>

        {/* Button */}
        {/* <div
          className={` hidden h-12 w-[166px] rounded-[80px] text-[white] cursor-pointer transition-[background-color] duration-[0.3s] md:flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[15px] px-5 py-2.5`}
          style={{
            backgroundImage:
              "linear-gradient(130.23538645559722deg, rgba(0, 128, 255, 1) 55.42494628353543%, rgba(0, 217, 217, 1) 73.15761965385957%)",
          }}
        >
          <div className="text-white">Get Started</div>
          <div className="Icon">
            <img src="/icons/ArrowRight.svg" alt="" />
          </div>
        </div> */}
      </div>
      {/* end of second cover */}
    </div>
  );
}

{
  /*
  
          <div className="flex gap-0 justify-between self-stretch p-4 text-base text-white border border-solid backdrop-blur-[27px] bg-[linear-gradient(90deg,rgba(0,0,0,0.20_10.5%,rgba(255,255,255,0.20)_26%,rgba(0,0,0,0.20)_41.5%,rgba(0,0,0,0.18)_55%,rgba(255,255,255,0.11)_69.5%,rgba(0,0,0,0.20)_85%,rgba(74,74,74,0.20)_100%),rgba(255,255,255,0.04))] border-stone-300 rounded-[56px] max-md:flex-wrap">
          <div className="flex gap-2 justify-center px-11 py-2.5 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/db7bfec576be9be19009c2f17127923c5eff44f08c3959f5412c8ab04c76518d?apiKey=cad8efe434314a3791073499160712c6&"
              className="shrink-0 aspect-[0.91] w-[30px]"
            />
            <div className="my-auto">Optimus PRO</div>
          </div>
          <div className="flex flex-1 gap-5 pl-20 max-md:flex-wrap">
            <div className="flex gap-5 justify-center py-1.5 my-auto whitespace-nowrap max-md:flex-wrap">
              <div>Products</div>
              <div>Community</div>
              <div>Resources</div>
              <div>Company</div>
              <div>Media</div>
            </div>
            <div className="flex gap-2 justify-center p-4 bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] rounded-[30px] max-md:px-5">
              <div>Join Us</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f00a16011f5765564960685ef1f106c3564b9203df084e90c50f033d546269c7?apiKey=cad8efe434314a3791073499160712c6&"
                className="shrink-0 my-auto w-4 aspect-square"
              />
            </div>
          </div>
        </div>
  
  */
}
