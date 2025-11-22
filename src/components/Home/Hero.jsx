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

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pt-32 md:pt-48 pb-20 flex flex-col justify-start md:justify-center h-full">
        <div className="flex flex-col items-start md:items-center justify-start gap-2 md:gap-4 w-full">
          <div className="relative flex flex-col items-start md:items-center">
            {/* Merged "Building the" and "Future" into a single line with one container */}
            <div className="flex flex-wrap items-baseline justify-start md:justify-center gap-x-2 md:gap-x-4">
              <span className="gradient-text relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-boxed leading-tight">
                Building the Future
                <div className="bg-[#0084FE] absolute left-1 -bottom-1 w-full h-[3px] md:h-[4px]"></div>
              </span>
            </div>

            {/* Merged "One Block at a Time" into a single line and removed the break tag */}
            <div className="flex flex-wrap items-baseline justify-start md:justify-center gap-x-2 md:gap-x-4 mt-2 md:mt-4">
              <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-boxed leading-tight text-left md:text-center">
                One Block at a Time.
              </span>
            </div>
          </div>

          <div className="max-w-full md:max-w-[800px] mt-6 md:mt-8 md:text-center md:mx-auto">
            <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              Join us— the <b className="text-white font-semibold">Crazy Ones,</b> the{" "}
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
