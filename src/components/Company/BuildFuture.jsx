import JoinOurTeamBtn from '../JoinOurTeamBtn';

export default function BuildFuture() {
  return (
    <div className="py-[40px] sm:py-[0px] relative overflow-hidden">
      <div className="w-full min-h-[270px] sm:min-h-[434px] flex flex-col items-center justify-center px-4 sm:px-5 relative overflow-hidden">
        <div className="w-[604.93px] h-[729.03px] absolute left-[20%] top-0 origin-top-left rotate-[-75deg] bg-gradient-to-br from-[#006DD9] to-[#006DD9]-[23%] rounded-[100px] blur-[240px]" />
        <div className="w-[681.47px] h-[832.37px] absolute right-0 top-0 origin-top-left rotate-[-75deg] bg-sky-600/25 rounded-[100px] blur-[240px]" />
        <div className="mx-auto flex mt-16 sm:mt-0 relative z-10 flex-col items-center min-h-[189px] bg-[#0080FF] bg-opacity-[23%] rounded-2xl p-8 px-5 sm:px-20">
          <div className="sm:mt-4 text-3xl sm:text-4xl font-bold text-center text-white leading-[70.08px] max-md:max-w-full max-md:text-4xl font-boxed">Build the future with Optimus PRO</div>
          <div className="mt-2 text-base text-center leading-6 text-white max-md:max-w-full font-calibri">Ready to be part of our passionate and ambitious team ?</div>
          {/* Button */}
          <JoinOurTeamBtn title="Apply Now" />
        </div>
      </div>
    </div>
  );
}
