import { Link } from 'react-router-dom';
import { resourceData } from './data';


export default function Resource() {
    return(
        <div className="px-4">
        <div className="w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -left-[60%] sm:left-[40%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
        <div className="w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -left-[60%] sm:-left-[10%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
        <div className="w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -right-[50%] sm:-right-[10%] top-[15%] sm:top-[40%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
        <div className="w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -left-[50%] sm:-left-[10%] top-[15%] sm:top-[60%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
        <div className="w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -right-[50%] sm:-right-[10%] top-[15%] sm:top-[60%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
        {resourceData.map(resource => (
        <div className="mx-auto relative z-10 p-[16px] sm:p-[30px] max-w-[1100px] min-h-[418.10px] flex flex-col md:flex-row gap-[45px]rounded-[13.86px] border border-white/10 mt-16 justify-center items-center md:items-start self-stretch p-10 mx-auto w-full text-white rounded-2xl border border-solid bg-[#0080FF] bg-opacity-20 border-white border-opacity-20 max-md:px-5 max-md:mt-6" key={resource.id}>
          <div className="w-full flex max-md:block">
          <div className="w-full mr-16 ml-8 max-md:mr-5 max-md:ml-5">
              <div className="w-full mt-[9px]">
                <h2 className="text-white line-clamp-3 text-[25px] sm:text-[30px] font-medium font-['Inter-Medium'] mt-10">{resource.title}</h2>
              </div>
              <div className="w-full my-[18px] justify-start items-center flex">
                <h5 className="max-w-[494px] line-clamp-3 text-white/80 text-lg font-normal font-['Inter-Normal'] mt-5">{resource.description}</h5>
              </div>
            </div>
            <div className='mr-32 max-md:mr-2'>
            <Link to={resource.viewLink}>
            <button className="h-[51px] w-[166px] !text-xl body-text gradient-background text-[white] cursor-pointer transition-[background-color] duration-[0.3s] md:flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[16px] px-5 py-2.5 mt-10 flex rounded-[48px]">View</button>
            </Link>
            <Link to={resource.readLink}>
            <button className="h-[51px] w-[166px] !text-xl body-text gradient-background text-[white] cursor-pointer transition-[background-color] duration-[0.3s] md:flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[16px] px-5 py-2.5 mt-10 flex rounded-[48px]">Read Online</button>
            </Link>
            <Link to={resource.downloadLink}>
            <button className="h-[51px] w-[166px] !text-xl body-text gradient-background text-[white] cursor-pointer transition-[background-color] duration-[0.3s] md:flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[16px] px-5 py-2.5 mt-10 flex rounded-[48px]">Download</button>
            </Link>
            </div>
          </div>
        </div>
          ))}
      </div>
    );
}