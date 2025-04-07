import { dataInTheNews } from '../Community/DataInTheNews';

export default function TheNews() {
  return (
    <div className="py-[100px]">
      <div className="relative w-[100vw] flex flex-col items-center px-0 sm:px-10">
        <img src="/blog.png" alt="" className="absolute sm:top-[-90px] w-[100%] h-full md:h-[950px] z-10" />
        <div className="text-white font-['AdventPro-Bold'] text-5xl z-[9999999] mt-[60px]">Blog</div>

        <div className="w-full px-4 sm:px-20 mt-10 md:mt-20 relative z-20">
          <div className="flex flex-col md:flex-row gap-5">
            {dataInTheNews.map((item, i) => (
              <div key={i} className="w-full md:w-[389px] border bg-sky-500/10 rounded-[16px] p-4 mb-[24px]">
                <div className="w-full rounded-[16px] h-[234px] overflow-hidden mb-[24px]">
                  <img src={item.blogImg} alt="" className="w-full h-full" />
                </div>
                <div className="flex items-center font-['AdventPro-Regular'] justify-between text-base text-white">
                  <span>{item.date}</span>
                  <span>{item.by}</span>
                </div>
                <div className="text-left text-[17px] md:text-2xl text-white mt-4 font-['AdventPro-Regular']">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
