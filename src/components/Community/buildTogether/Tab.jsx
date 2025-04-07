import heckathonsImg from '../assets/build-together.png';
import tronsImg from '../assets/Trons.png';
import eventsImg from '../assets/events.png';

// Define the `tabs` data structure, now accepting modal opening functions
export const tabs = [
  {
    id: 0,
    title: 'Trons',
    openModal: 'handleOpenJoinTheTronForm', // Reference to the modal opening function
    content: openModal => (
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-[32px]">
        <div className="w-full h-[300px] sm:h-[370px] ">
          <img src={tronsImg} alt="" className="w-full h-full" />
        </div>
        <div className="w-full min-h-[278px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-white text-2xl font-bold font-['Transformer'] leading-[38px]">Trons</div>
          <div className="self-stretch flex flex-col gap-3 text-white body-text">
            <p>Join Optimus PRO Trons and connect with members in your city for exciting in-person gatherings and activities.</p>
            <p>Experience the ecstasy of face-to-face interactions, explore your city, make new friends and create lasting memories together.</p>
            <p>Stay updated on upcoming meetups and be part of our vibrant community!</p>
          </div>
          <button
            onClick={openModal}
            className={`h-[54px] w-[141px] gradient-background rounded-[50px] text-[white] cursor-pointer transition-[background-color] duration-[0.3s] flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[15px] px-5 py-2.5 mt-4`}
          >
            <span className="text-white whitespace-nowrap !text-xl body-text">Join Now</span>
            <img src="/icons/ArrowRight.svg" className="w-4 h-4" alt="" />
          </button>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: 'Hackathons',
    openModal: 'handleOpenHeckathonForm', // Reference to the modal opening function
    content: openModal => (
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-[32px]">
        <div className="w-full h-[300px] sm:h-[370px] ">
          <img src={heckathonsImg} alt="" className="w-full h-full" />
        </div>
        <div className="w-full min-h-[278px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-white text-2xl font-bold font-['Transformer'] leading-[38px]">Hackathons</div>
          <div className="self-stretch flex flex-col gap-3 text-white body-text">
            <p>Take part in our Hackathons for a chance to innovate, collaborate, and tackle real-world challenges with a diverse community of talents.</p>
            <p>Whether you're an experienced developer, a creative designer, or simply passionate about Web3.</p>
            <p>Get an opportunity to showcase your skills, learn from experts, and make a global impact!</p>
          </div>
          <button
            onClick={openModal}
            className={`h-[54px] w-[141px] gradient-background rounded-[50px] text-[white] cursor-pointer transition-[background-color] duration-[0.3s] flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[15px] px-5 py-2.5 mt-4`}
          >
            <span className="text-white whitespace-nowrap !text-xl body-text">Coming Soon</span>
          </button>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Events',
    openModal: 'handleOpenEventFrom', // Reference to the modal opening function
    content: openModal => (
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-[32px]">
        <div className="w-full h-[300px] sm:h-[370px] ">
          <img src={eventsImg} alt="" className="w-full h-full" />
        </div>
        <div className="w-full min-h-[278px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-white text-2xl font-bold font-['Transformer'] leading-[38px]">Events</div>
          <div className="self-stretch flex flex-col gap-3 text-white body-text">
            <p>Participate in our upcoming events for an unforgettable experience filled with insightful talks, engaging workshops, and networking opportunities.</p>
            <p>Don't miss out on the chance to connect with industry leaders, expand your knowledge, and be part of something truly extraordinary.</p>
          </div>
          <button
            onClick={openModal}
            className={`h-[54px] w-[141px] gradient-background rounded-[50px] text-[white] cursor-pointer transition-[background-color] duration-[0.3s] flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[15px] px-5 py-2.5 mt-4`}
          >
            <span className="text-white whitespace-nowrap !text-xl body-text">Join Now</span>
            <img src="/icons/ArrowRight.svg" className="w-4 h-4" alt="" />
          </button>
        </div>
      </div>
    )
  }
];
