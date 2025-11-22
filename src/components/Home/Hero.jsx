// import videobg from '../../assets/brain.mp4'

// export default function Hero() {
//   return (
//     <div className="w-full px-4 md:px-14 lg:px-0 flex flex-col lg:flex-row justify-between gap-5 relative">
//       <div className="main w-full h-full">
//         <video className='w-full max-w-[2000px] h-full ml-0 md:min-w-[1000px] md:min-h-[600px] sm:min-h-[800px] object-cover' src={videobg} autoPlay loop muted />
        
//           <div className="blur-[120px] rounded-[100px] bg-[rgba(0,109,217,0.21)] rotate-[-75deg] absolute right-0 bottom-[-90.7px] w-full md:w-full h-[837.7px] top-0 left-0 bg-black opacity-80 "></div>

//         <div className="absolute top-0 left-0 right-0 bottom-0 min-h-[348px] pt-[60px] md:pt-[150px] pl-0 md:pl-16 flex flex-col justify-center items-center p-4 ">
//         <div className="min-h-[348px] relative flex-col justify-start items-start gap-1.5 inline-flex pl-0 md:pl-16">
//         <div className="self-stretch sm:w-[10px] sm:w-[10px]">
//           <span className="gradient-text relative text-7xl max-md:text-[10px] font-bold font-boxed leading-[70px] md:leading-[40px] sm:leading-[20px] ">
//             Building the
//             <div className="bg-[#0084FE] absolute left-[3px] -bottom-1 w-[100%] h-[3px]"></div>
//           </span>
//           <span className="text-sky-500 text-7xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
//             <br />
//           </span>
//           <span className="gradient-text relative text-7xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
//             Future
//             <div className="bg-[#0084FE] absolute left-[3px] bottom-0 w-[100%] h-[3px]"></div>
//           </span>
//           <span className="text-sky-500 text-7xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">&nbsp;</span>
//           <span className="text-white text-7xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
//             One <br />
//             Block at a Time.
//           </span>
//         </div>
//         <div className="max-w-[585px]">
//           <span className="text-white sub-heading text-xl">
//             Join us- the <b>Crazy Ones,</b> the <b>Optimists</b>, the <b>Misfits</b>, the <b>Underdogs</b> and the Rebels, and together let's push the <b>boundaries</b> of Web3 with{' '}
//             <b>bold, groundbreaking ideas.</b>
//           </span>
//         </div>
//       </div>
//       </div>

      
//         </div>
//       <div className="w-[589.30px] h-[719.79px] left-[-562.31px] sm:left-[-362.31px] md:left-[-162.31px] top-[516.44px] absolute origin-top-left rotate-[-75deg] bg-slate-950 rounded-[100px] blur-[240px] mb-300px" />
//       {/**  */}
//       {/* <div className="min-h-[348px] left-0 lg:left-[60px] pt-[160px] md:pt-[305px] relative flex-col justify-start items-start gap-1.5 inline-flex pl-0 md:pl-16">
//         <div className="self-stretch">
//           <span className="gradient-text relative text-5xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
//             Building the
//             <div className="bg-[#0084FE] absolute left-[3px] -bottom-1 w-[100%] h-[3px]"></div>
//           </span>
//           <span className="text-sky-500 text-5xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
//             <br />
//           </span>
//           <span className="gradient-text relative text-5xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
//             Future,
//             <div className="bg-[#0084FE] absolute left-[3px] bottom-0 w-[100%] h-[3px]"></div>
//           </span>
//           <span className="text-sky-500 text-5xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">&nbsp;</span>
//           <span className="text-white text-5xl sm:text-7xl font-bold font-boxed leading-[70px] sm:leading-[90px]">
//             One <br />
//             Block at a Time.
//           </span>
//         </div>
//         <div className="max-w-[585px]">
//           <span className="text-white sub-heading">
//             Join us- the <b>Crazy Ones,</b> the <b>Optimists</b>, the <b>Misfits</b>, the <b>Underdogs</b> and the Rebels, and together let's push the <b>boundaries</b> of Web3 with{' '}
//             <b>bold, groundbreaking ideas.</b>
//           </span>
//         </div>
//       </div> */}
//       {/** */}
//       {/* <div className="max-w-[600px] lg:max-w-[700px] min-h-[400px] lg:min-h-[792px] left-[1442px] top-0 to-black mt-0 md:mt-20">
//         <img src="/nexus.png" alt="" className="w-[100%] h-auto" />
//       </div> */}
//     </div>
//   );
// }

import videobg from '../../assets/brain.mp4'

export default function Hero() {
  return (
    <div className="relative w-full min-h-[100vh] bg-black overflow-hidden flex items-center">
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover opacity-60"
          src={videobg}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute right-0 bottom-[-10%] w-full md:w-1/2 h-[50%] bg-[#006dd9] blur-[120px] rounded-[100px] opacity-20 rotate-[-75deg] z-0 pointer-events-none" />
      <div className="absolute left-[-20%] top-[40%] w-[500px] h-[500px] bg-slate-950 blur-[240px] rounded-[100px] rotate-[-75deg] z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-20 flex flex-col justify-center h-full">
        <div className="flex flex-col items-start justify-start gap-2 md:gap-4">
          <div className="relative">
            {/* Line 1 */}
            <div className="flex flex-wrap items-baseline gap-x-2 md:gap-x-4">
              <span className="gradient-text relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-boxed leading-tight">
                Building the
                <div className="bg-[#0084FE] absolute left-1 -bottom-1 w-full h-[3px] md:h-[4px]"></div>
              </span>
            </div>

            {/* Line 2 */}
            <div className="flex flex-wrap items-baseline gap-x-2 md:gap-x-4 mt-2 md:mt-4">
              <span className="gradient-text relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-boxed leading-tight">
                Future
                <div className="bg-[#0084FE] absolute left-1 bottom-0 w-full h-[3px] md:h-[4px]"></div>
              </span>
            </div>

            {/* Line 3 */}
            <div className="flex flex-wrap items-baseline gap-x-2 md:gap-x-4 mt-2 md:mt-4">
              <span className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-boxed leading-tight">
                One Block <br className="hidden md:block" /> at a Time.
              </span>
            </div>
          </div>

          <div className="max-w-full md:max-w-[600px] mt-6 md:mt-8">
            <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              Join us- the <b className="text-white font-semibold">Crazy Ones,</b> the{" "}
              <b className="text-white font-semibold">Optimists</b>, the{" "}
              <b className="text-white font-semibold">Misfits</b>, the{" "}
              <b className="text-white font-semibold">Underdogs</b> and the Rebels, and together let's push the{" "}
              <b className="text-white font-semibold">boundaries</b> of Web3 with{" "}
              <b className="text-white font-semibold">bold, groundbreaking ideas.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
