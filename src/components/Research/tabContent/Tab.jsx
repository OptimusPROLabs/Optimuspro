import buildImg from "../assets/recent-research.png";

export const tabs = [
  {
    id: 0,
    title: "All",
  },
  {
    id: 1,
    title: "News Blogs & Articles",
    content: (
      <div className="flex space-x-4">
        <div className="bg-blue-200 p-4 flex-1">
          Content News Blogs & Articles
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Podcasts",
    content: (
      <div className="flex space-x-4">
        <div className="bg-blue-200 p-4 flex-1">Content Podcasts</div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Videos",
    content: (
      <div className="flex space-x-4">
        <div className="bg-blue-200 p-4 flex-1">Content videos</div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Research",
    content: (
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-[70px]">
        <div className="w-full h-[300px] sm:h-[370px] ">
          <img src={buildImg} alt="" className="w-full h-full" />
        </div>
        <div className="w-full min-h-[152px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-white text-base font-medium font-['Advent Pro']">
            Join Optimus PRO Trons and connect with members in your city for
            exciting in-person gatherings and activities. <br />
            <br />
            Experience the ecstasy of face-to-face interactions, explore your
            city, make new friends and create lasting memories together.
            <br />
            <br />
            Stay updated on upcoming meetups and be part of our vibrant
            community!
            <br />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Case Studies",
    content: (
      <div className="flex space-x-4">
        <div className="bg-red-200 p-4 flex-1">Content Case Studies</div>
      </div>
    ),
  },
];
