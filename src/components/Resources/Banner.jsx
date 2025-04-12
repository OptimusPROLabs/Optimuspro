export default function Banner() {
    return (
    <div className="w-full">
        <div className="w-[626px] h-[510px] absolute -top-[40%] right-[25%] bg-[#022951]/70 rounded-full blur-[158.60px]" />h-[51px] w-[166px] !text-xl body-text gradient-background rounded-2xl text-[white] cursor-pointer transition-[background-color] duration-[0.3s] md:flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[16px] px-5 py-2.5 mt-5 flex
        <div className="relative flex items-center justify-center w-full pt-[150px] sm:pt-[200px] pb-[80px] sm:pb-[150px]">
            <div className="w-[100px] sm:w-[338px] h-[276px] absolute -bottom-[0%] -left-[20%] bg-[#022951]/80 rounded-full blur-[158.60px]" />
            <div className="w-[426px] sm:w-[626px] h-[210px] sm:h-[510px] absolute -bottom-[50%] -right-[10%] sm:-right-[20%] bg-[#022951]/50 rounded-full blur-[158.60px]" />
            <div className="flex-col px-4 relative z-10 justify-start items-center gap-4 sm:gap-2 flex">
            <div className="text-center">
                <span className="text-white boxed_round_fonts">Optimus </span>
                <span className="gradient-text boxed_round_fonts">PRO Resources</span>
            </div>
            <div className="text-white p-1 px-2 mt-3  text-base font-normal font-['Advent Pro'] leading-normal max-w-max bg-white/5 rounded-xl">Get all you need in one place.</div>
            </div>
        </div>
    </div>
    );
}
