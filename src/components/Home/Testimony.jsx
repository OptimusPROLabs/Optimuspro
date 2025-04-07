import JoinOurTeamBtn from '../JoinOurTeamBtn';

export default function Testimony() {
  return (
    <div className="flex flex-col items-center relative text-center">
      <div className="flex flex-col relative z-10 items-center px-20 md:py-0 w-full max-md:px-5 max-md:max-w-full">
        <div className="mt-6 boxed_round_fonts text-center text-white leading-[48px] sm:leading-[60px] md:leading-[70.08px] max-md:max-w-full">Don't Take Our Word for it</div>
        <div className="mt-4 sub-heading leading-normal text-center text-white max-md:mt-10 max-w-[1031px]">Here's what industry leaders are saying about us</div>
        <div className="mt-16 w-full max-w-[1186px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-4">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-xl leading-6 text-white max-md:mt-7 relative">
                <img
                  loading="lazy"
                  srcSet="https://i.imgur.com/WEecrbR.png"
                  className="self-center aspect-square w-[50px] rounded-full absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[-3]"
                />
                <div className="justify-center px-8 py-10 rounded-2xl bg-[#0080FF] bg-opacity-[25%] max-md:px-5 font-light text-xl text-start leading-6 body-text">
                  Optimus PRO has been an amazing project all through its journey from ideation to product launch and I so much believe in their vision to on board the next Billion users into the Web3
                  space.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl leading-6 text-white max-md:mt-7 relative">
                <img
                  loading="lazy"
                  srcSet="
              https://cdn.builder.io/api/v1/image/assets/TEMP/522107811ed889082974e5c890de7258b990fb12cda8653120a4dffa0fcbf30d?apiKey=cad8efe434314a3791073499160712c6&width=100   100w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/522107811ed889082974e5c890de7258b990fb12cda8653120a4dffa0fcbf30d?apiKey=cad8efe434314a3791073499160712c6&width=200   200w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/522107811ed889082974e5c890de7258b990fb12cda8653120a4dffa0fcbf30d?apiKey=cad8efe434314a3791073499160712c6&width=400   400w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/522107811ed889082974e5c890de7258b990fb12cda8653120a4dffa0fcbf30d?apiKey=cad8efe434314a3791073499160712c6&width=800   800w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/522107811ed889082974e5c890de7258b990fb12cda8653120a4dffa0fcbf30d?apiKey=cad8efe434314a3791073499160712c6&width=1200 1200w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/522107811ed889082974e5c890de7258b990fb12cda8653120a4dffa0fcbf30d?apiKey=cad8efe434314a3791073499160712c6&width=1600 1600w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/522107811ed889082974e5c890de7258b990fb12cda8653120a4dffa0fcbf30d?apiKey=cad8efe434314a3791073499160712c6&width=2000 2000w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/522107811ed889082974e5c890de7258b990fb12cda8653120a4dffa0fcbf30d?apiKey=cad8efe434314a3791073499160712c6&
            "
                  className="self-center aspect-square w-[50px] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[-3]"
                />
                <div className="justify-center px-8 py-10 rounded-2xl bg-[#0080FF] bg-opacity-[25%] max-md:px-5 font-light text-xl text-start leading-6 body-text">
                  I've witnessed Optimus PRO's remarkable growth and innovation in Web3 solutions. Their team's dedication to addressing real-world problems with groundbreaking applications is
                  inspiring, and their commitment to making a meaningful impact shines through in everything they do.”
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-xl leading-6 text-white max-md:mt-7 relative">
                <img
                  loading="lazy"
                  srcSet="https://i.imgur.com/iuittMi.png"
                  className="self-center aspect-square rounded-full w-[50px] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[-3]"
                />
                <div className="justify-center px-8 py-10 rounded-2xl bg-[#0080FF] bg-opacity-[25%] max-md:px-5 font-light text-xl text-start leading-6 body-text">
                  Never doubt a group of people who believe they can change the world and are collectively building towards that. Optimus PRO is that team, watch out for them in this space.
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col justify-center items-center mt-14">
        <div className="boxed_round_fonts px-5 sm:leading-[60px] md:leading-[70px] text-center text-white max-md:max-w-full">
          Build the Future with <span className="gradient-text">Optimus PRO</span>
        </div>
        <div className="mt-2 text-base sub-heading leading-6 text-white max-md:max-w-full">Ready to be part of our passionate and ambitious team? Apply now.</div>
        {/* Button */}
        <JoinOurTeamBtn title="Join Our Team" />
      </div>
      <div className="w-[530.69px] h-[648.20px] absolute left-[60%] -bottom-[60%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -right-[80%] -bottom-[80%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
    </div>
  );
}
