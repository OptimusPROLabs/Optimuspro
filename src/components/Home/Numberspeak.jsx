export default function Numberspeak() {
  return (
    <div className="flex flex-col min-h-[858px] sm:min-h-[1050px] md:min-h-min items-center relative text-center">
      {/* <div className="flex flex-col absolute right-20 w-[26%] max-md:ml-0 max-md:w-full">
      </div> */}
      <div className="shrink-0 absolute top-0 mx-auto max-w-full bg-slate-950 blur-[50px] h-[289px] rounded-[100px] w-[455px]" />

      <div className="flex flex-col w-[100vw] pt-[30px] lg:pt-10 min-h-[929px] bg-black numberspeak-bg">
        <div className="flex z-10 flex-col self-center px-5 max-w-full text-white w-[869px]">
          <div className="boxed_round_fonts text-4xl md:text-5xl font-bold sm:leading-[60px] md:leading-[70px] text-center text-white max-md:max-w-full">
            <span className="relative whitespace-normal leading-[38px] sm:leading-[70px] md:whitespace-nowrap z-[999999]">Our Story In</span>{' '}
            <span className="relative gradient-text leading-[38px] sm:leading-[70px]">
              Numbers
              <div className="gradient-background absolute left-[3px] bottom-0 w-[100%] h-[3px]"></div>
            </span>
          </div>
          <div className="mt-4 sub-heading leading-normal text-center text-white max-md:mt-10 max-w-[1031px]">Let's Stats speak about our passion for building the future.</div>
          {/* <div className="shrink-0 mt-24 ml-52 rounded-full bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] h-[15px] w-[15px] max-md:mt-10 max-md:ml-2.5" />
          <div className="shrink-0 mt-8 rounded-full bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] h-[15px] w-[15px]" />
          <div className="shrink-0 self-center mt-36 rounded-full bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] h-[15px] w-[15px] max-md:mt-10" /> */}
        </div>
        <div className="px-5 mt-5 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col z-20 ml-5 w-[54%] max-md:ml-0 max-md:w-full">
              <div
                className="rounded-[16px] border-[1px_solid_rgba(191,188,188,0.34)]  bg-[var(--glass-bg-background-position-x,)_var(--glass-bg-background-position-y,)] bg-[length:var(--glass-bg-background-size,)] bg-var(--glass-bg-background-repeat, ) bg-var( bg-var( absolute left-[50%] bottom-[70px] md:bottom-[250px] translate-x-[-50%] flex flex-col md:flex-row p-[31px_26.3px_31px_15.4px] box-sizing-border"
                style={{
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.2), rgba(255,255,255,0.2), rgba(0,0,0,0.2), rgba(0,0,0,0.2), rgba(255,255,255,0.2), rgba(0,0,0,0.2), rgba(74,74,74,0.2))'
                }}
              >
                {/* one */}
                <div className="flex flex-col items-center box-sizing-border mr-2">
                  <div className="border-[1px_solid_#FFFFFF] m-[0_0_16px_0] inline-block break-words boxed_round_fonts font-normal !text-[36px] leading-[1.111] text-[#FFFFFF]">125+</div>
                  <span className="break-words body-text font-normal leading-[0.75] text-[#FFFFFF] whitespace-nowrap text-center">Co-builders</span>
                </div>
                {/* two */}
                <div className="rounded-[4px] bg-[rgba(0,109,217,0.9)] m-[0_10.2px_0_0] w-[4px] h-[93px]"></div>
                <div className="flex flex-col items-center box-sizing-border mr-2">
                  <div className="border-[1px_solid_#FFFFFF] m-[0_0_16px_0] inline-block break-words boxed_round_fonts font-normal !text-[36px] leading-[1.111] text-[#FFFFFF]">4</div>
                  <span className="break-words body-text font-normal leading-[0.75] text-[#FFFFFF] whitespace-nowrap text-center">Products in development</span>
                </div>

                {/* Three */}
                <div className="rounded-[4px] bg-[rgba(0,109,217,0.9)] m-[0_58px_0_0] w-[4px] h-[93px]"></div>
                <div className="flex flex-col items-center box-sizing-border">
                  <div className="border-[1px_solid_#FFFFFF] m-[0_0_16px_0] inline-block break-words boxed_round_fonts font-normal !text-[36px] leading-[1.111] text-[#FFFFFF]">15k</div>
                  <span className="break-words body-text font-normal leading-[0.75] text-[#FFFFFF] whitespace-nowrap text-center">Wait-listed users</span>
                </div>

                {/* Four */}
                {/* <div className="rounded-[4px] bg-[rgba(0,109,217,0.9)] m-[0_67.3px_0_0] w-[4px] h-[93px]"></div>
                <div className="m-[6.5px_0px_6.5px_0] flex flex-col items-center box-sizing-border">
                  <div className="border-[1px_solid_#FFFFFF] m-[0_0_16px_0] inline-block break-words font-['Boxed_Round','Roboto_Condensed'] font-normal !text-[36px] leading-[1.111] text-[#FFFFFF]">
                    7
                  </div>
                  <span className="break-words font-['Quan_Rounded','Roboto_Condensed'] font-normal leading-[0.75] text-[#FFFFFF] whitespace-nowrap text-center">
                    Countries
                  </span>
                </div> */}
              </div>
            </div>
            {/* ended stress */}
          </div>
        </div>
      </div>
    </div>
  );
}
