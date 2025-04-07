import "./style.css";

export default function Banner() {
  return (
    <div className="w-full min-h-[350px] sm:min-h-[500px] md:min-h-[747px] research-banner relative z-10">
      <div className="mx-auto max-w-[1095px] relative z-10 text-center pt-[120px] md:pt-[280px]">
        <div className="flex-col justify-start items-center gap-[60px] flex">
          <div className="flex-col justify-start items-center gap-4 flex">
            <div className="text-center flex flex-col sm:flex-row">
              <span className="text-white text-[48px] sm:text-[58px] font-bold font-['Advent Pro'] leading-[60px] sm:leading-[70px]">
                Optimus{" "}
              </span>
              <span className="text-sky-500 text-[48px] sm:text-[58px] font-bold font-['Advent Pro'] leading-[60px] sm:leading-[70px]">
                PRO Research
              </span>
            </div>
            <div className="text-white text-base font-normal font-['Advent Pro'] leading-normal">
              Advance reports from our intensive research???
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
