import comProgramsImg from '/community-program.png';
import { useState } from 'react';
import Modal from '../modals/Modal';
import ExploreOurProgramForm from '../forms/ExploreOurProgramForm';

export default function CommunityProgram() {
  // State for each modal
  const [isOpenForm, setIsOpenForm] = useState(false);

  // Handlers for opening/closing each modal
  const handleOpenForm = () => setIsOpenForm(true);
  const handleCloseForm = () => setIsOpenForm(false);

  return (
    <div className="px-4 relative sm:px-5 overflow-hidden py-5">
      <div className="w-[379px] h-[463px] absolute right-0 top-0 bg-sky-600/10 rounded-[100px] blur-[100px]" />
      <div className="w-[530.69px] h-[648.20px] absolute pl-[120.84px] pr-[291.48px] pt-[543.62px] pb-[86.22px] origin-top-left rotate-[-75deg] bg-sky-600/20 rounded-[100px] blur-[240px]" />
      <div className="flex flex-col md:flex-row items-center md:items-start text-white py-12 md:px-12 lg:px-24">
        <div className="w-full z-10  relative md:w-1/2 mb-8 md:mb-0">
          <div className="hidden" />
          <img src={comProgramsImg} alt="Community" className="w-full h-auto rounded-lg shadow-lg" />
          <div className="relative hidden -top-14 z-10 inset-0 flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-white font-[transformer] text-shadow text-2xl sm:text-3xl lg:text-4xl font-bold">BUILT for COMMUNITY by</h2>
            <h2 className="text-white text-[40.08px] text-shadow font-[transformer] sm:text-[50.08px] lg:text-[89.08px] lg:leading-[70px] font-bold">COMMUNITY</h2>
          </div>
        </div>
        <div className="w-full font-['QuanRounded'] md:w-1/2 md:pl-12">
          <h2 className="!text-3xl md:!text-4xl boxed_round_fonts font-bold mb-4">
            Community <span className="gradient-text">Programs</span>
          </h2>
          <p className="sub-heading mb-4 !font-bold">Ready to be a Web3 pioneer? Optimus PRO offers a suite of programs designed to empower you.</p>
          <p className="body-text mb-4">
            Optimus PRO Community Programs are crafted with you in mind. We believe collaboration in our community is essential to drive innovation, adoption, and growth in Web3.
          </p>
          <p className="body-text mb-4">
            Our programs are specifically designed with the goal of encouraging collaboration in the Optimus PRO Ecosystem and to provide opportunities for learning, growth, earning and networking.
          </p>
          <p className="text-white body-text leading-7">Join the right program for you:</p>
          <ul className="ml-3 mb-3 flex flex-col gap-3 list-disc body-text list-inside">
            <li>
              <b>Ambassador Program:</b> Represent and promote Optimus PRO, amplify our impact.
            </li>
            <li>
              <b>Builders Quest:</b> Collaborate in building community-driven projects and share the rewards.
            </li>
            <li>
              <b>Community Contests:</b> participate in friendly competitions within the community, win exciting prizes and gain recognition.
            </li>
            <li>
              <b>Forge:</b> For passionate founders who desire to transform their ideas into digital innovation.
            </li>
            <li>
              <b>The Galactics:</b> Work directly with the Optimus PRO team to shape the future.
            </li>
            <li>
              <b>Learn & Earn:</b> Get rewards for completing educational contents and developing new skills.
            </li>
          </ul>
          {/* <p className="body-text mb-4">And seize the opportunity to learn, collaborate, build, and thrive together in the ever-evolving Web3 landscape.</p> */}
          <p className="body-text mb-4">Ready to Dive in?</p>
          <button
            className={`h-[54px] max-w-max gradient-background rounded-[50px] text-[white] cursor-pointer transition-[background-color] duration-[0.3s] flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[15px] px-5 py-2.5 mt-4`}
            onClick={handleOpenForm}
          >
            <span className="text-white whitespace-nowrap !text-xl body-text">Explore our programs</span>
          </button>
        </div>
      </div>
      <div className="w-[530.69px] h-[648.20px] absolute pl-[220.84px] pr-[291.48px] pt-[543.62px] pb-[86.22px] origin-top-left rotate-[-75deg] bg-sky-600/20 rounded-[100px] blur-[240px]" />

      <Modal isOpen={isOpenForm} onClose={handleCloseForm}>
        <ExploreOurProgramForm />
      </Modal>
    </div>
  );
}
