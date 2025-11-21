import videobg from '../../assets/brain.mp4'

export default function Hero() {
  return (
    <div className="w-full px-4 md:px-14 lg:px-0 flex flex-col lg:flex-row justify-between gap-5 relative">
      <div className="main w-full h-full">
        <video className='w-full max-w-[2000px] h-full ml-0 md:min-w-[1000px] md:min-h-[600px] sm:min-h-[800px] object-cover' src={videobg} autoPlay loop muted />
        
          <div className="blur-[120px] rounded-[100px] bg-[rgba(0,109,217,0.21)] rotate-[-75deg] absolute right-0 bottom-[-90.7px] w-full md:w-full h-[837.7px] top-0 left-0 right-0 bottom-0 bg-black opacity-80 "></div>

        <div className="absolute top-0 left-0 right-0 bottom-0 min-h-[348px] pt-[60px] md:pt-[150px] pl-0 md:pl-16 flex flex-col justify-center items-center p-4 ">
        <div className="min-h-[348px] relative flex-col justify-start items-start gap-1.5 inline-flex pl-0 md:pl-16">
        <div className="self-stretch">
          <span className="gradient-text relative text-7xl sm:text-7xl font-bold font-boxed leading-[70px] md:leading-[40px] sm:leading-[90px] ">
            Building the
            <div className="bg-[#0084FE] absolute left-[3px] -bottom-1 w-[100%] h-[3px]"></div>
          </span>
          <span className="text-sky-500 text-7xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
            <br />
          </span>
          <span className="gradient-text relative text-7xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
            Future
            <div className="bg-[#0084FE] absolute left-[3px] bottom-0 w-[100%] h-[3px]"></div>
          </span>
          <span className="text-sky-500 text-7xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">&nbsp;</span>
          <span className="text-white text-7xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
            One <br />
            Block at a Time.
          </span>
        </div>
        <div className="max-w-[585px]">
          <span className="text-white sub-heading text-xl">
            Join us- the <b>Crazy Ones,</b> the <b>Optimists</b>, the <b>Misfits</b>, the <b>Underdogs</b> and the Rebels, and together let's push the <b>boundaries</b> of Web3 with{' '}
            <b>bold, groundbreaking ideas.</b>
          </span>
        </div>
      </div>
      </div>

      
        </div>
      <div className="w-[589.30px] h-[719.79px] left-[-562.31px] sm:left-[-362.31px] md:left-[-162.31px] top-[516.44px] absolute origin-top-left rotate-[-75deg] bg-slate-950 rounded-[100px] blur-[240px] mb-300px" />
      {/**  */}
      {/* <div className="min-h-[348px] left-0 lg:left-[60px] pt-[160px] md:pt-[305px] relative flex-col justify-start items-start gap-1.5 inline-flex pl-0 md:pl-16">
        <div className="self-stretch">
          <span className="gradient-text relative text-5xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
            Building the
            <div className="bg-[#0084FE] absolute left-[3px] -bottom-1 w-[100%] h-[3px]"></div>
          </span>
          <span className="text-sky-500 text-5xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
            <br />
          </span>
          <span className="gradient-text relative text-5xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
            Future,
            <div className="bg-[#0084FE] absolute left-[3px] bottom-0 w-[100%] h-[3px]"></div>
          </span>
          <span className="text-sky-500 text-5xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">&nbsp;</span>
          <span className="text-white text-5xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
            One <br />
            Block at a Time.
          </span>
        </div>
        <div className="max-w-[585px]">
          <span className="text-white sub-heading">
            Join us- the <b>Crazy Ones,</b> the <b>Optimists</b>, the <b>Misfits</b>, the <b>Underdogs</b> and the Rebels, and together let's push the <b>boundaries</b> of Web3 with{' '}
            <b>bold, groundbreaking ideas.</b>
          </span>
        </div>
      </div> */}
      {/** */}
      {/* <div className="max-w-[600px] lg:max-w-[700px] min-h-[400px] lg:min-h-[792px] left-[1442px] top-0 to-black mt-0 md:mt-20">
        <img src="/nexus.png" alt="" className="w-[100%] h-auto" />
      </div> */}
    </div>
  );
}
