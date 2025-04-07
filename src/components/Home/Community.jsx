import { useState } from 'react';
import Modal from '../modals/Modal';
import LetBuildForm from '../forms/LetBuildForm';
import BecomeMentorForm from '../forms/BecomeMentorForm';
import IwantInForm from '../forms/IwantInForm';

export default function Community() {
  // State for each modal
  const [isLetBuildFormOpen, setIsLetBuildFormOpen] = useState(false);
  const [isBecomeMentorFormOpen, setIsBecomeMentorFormOpen] = useState(false);
  const [isIwantInFormOpen, setIsIwantInFormOpen] = useState(false);
 
  // Handlers for opening/closing each modal
  const handleOpenLetBuildForm = () => setIsLetBuildFormOpen(true);
  const handleCloseLetBuildForm = () => setIsLetBuildFormOpen(false);
  const handleOpenBecomeMentorForm = () => setIsBecomeMentorFormOpen(true);
  const handleCloseBecomeMentorForm = () => setIsBecomeMentorFormOpen(false);
  const handleOpenIwantInForm = () => setIsIwantInFormOpen(true);
  const handleCloseIwantInForm = () => setIsIwantInFormOpen(false);

  return (
    <div className="px-4 lg:px-10 py-20 lg:py-0 flex flex-col justify-center items-center relative rounded-3xl">
      {/* Blur*/}
      <div className="blur-[120px] rounded-[100px] bg-[rgba(0,109,217,0.21)] rotate-[-75deg] absolute right-[196.5px] bottom-[-90.7px] w-[980.4px] h-[837.7px]"></div>
      <div className="flex justify-center relative z-10 items-center w-full md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-w-[1188px] max-md:max-w-full">
          <div className="text-xl uppercase md:text-5xl leading-[48px] font-bold text-white bg-clip-text bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] max-md:max-w-full max-md:text-4xl font-boxed text-center">
            A Startup by{' '}
            <span className="gradient-text relative leading-[58px]">
              Community,
              <div className="gradient-background absolute left-[3px] leading-[58px] -bottom-1 sm:-bottom-2 w-[100%] h-[4px]"></div>
            </span>{' '}
            for Community
          </div>
          <div className="mt-12 sub-heading text-center text-white max-md:mt-10 max-w-[1031px]">
            {/* Optimus PRO is building a community-driven Web3 ecosystem that prioritizes trust, security,
            <br /> and transparency. It’s a decentralized space co-built by stake<span className="circle-text">holders</span> like you, where everyone has a voice. */}
            <b>Optimus PRO</b> is more than a startup - we're a <b>community-driven</b> collective of passionate individuals bound by a shared vision of a <b>fair</b>, <b>secure</b> and{' '}
            <b>transparent</b> Web3 ecosystem.
          </div>
          <div className="self-stretch mt-9 max-md:max-w-full">
            <div className="flex gap-5 px-0 sm:px-7 md:px-0 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-full max-md:ml-0">
                <div className="flex flex-col grow justify-center items-center md:items-start self-stretch p-10 mx-auto w-full text-white rounded-2xl border border-solid bg-[#0080FF] bg-opacity-20 border-white border-opacity-20 max-md:px-5 max-md:mt-6">
                  <img
                    loading="lazy"
                    srcSet="
                https://cdn.builder.io/api/v1/image/assets/TEMP/763c176e2c447e5dcd73afdd0b67a4e578fc6f06758758ac135f7e8b9159b0f6?apiKey=cad8efe434314a3791073499160712c6&width=100   100w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/763c176e2c447e5dcd73afdd0b67a4e578fc6f06758758ac135f7e8b9159b0f6?apiKey=cad8efe434314a3791073499160712c6&width=200   200w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/763c176e2c447e5dcd73afdd0b67a4e578fc6f06758758ac135f7e8b9159b0f6?apiKey=cad8efe434314a3791073499160712c6&width=400   400w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/763c176e2c447e5dcd73afdd0b67a4e578fc6f06758758ac135f7e8b9159b0f6?apiKey=cad8efe434314a3791073499160712c6&width=800   800w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/763c176e2c447e5dcd73afdd0b67a4e578fc6f06758758ac135f7e8b9159b0f6?apiKey=cad8efe434314a3791073499160712c6&width=1200 1200w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/763c176e2c447e5dcd73afdd0b67a4e578fc6f06758758ac135f7e8b9159b0f6?apiKey=cad8efe434314a3791073499160712c6&width=1600 1600w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/763c176e2c447e5dcd73afdd0b67a4e578fc6f06758758ac135f7e8b9159b0f6?apiKey=cad8efe434314a3791073499160712c6&width=2000 2000w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/763c176e2c447e5dcd73afdd0b67a4e578fc6f06758758ac135f7e8b9159b0f6?apiKey=cad8efe434314a3791073499160712c6&
              "
                    className="aspect-[3.03] w-[90px]"
                  />
                  <div className="mt-4 font-bold body-text tracking-tighter leading-loose">Founders</div>
                  <div className="mt-4 body-text tracking-tight text-center md:text-left text-violet-100">
                    Execute your ideas with different stacks of infrastructures, expert mentorship, funding and a collaborative community
                  </div>
                  <button
                    className="flex items-center !text-xl body-text justify-center md:justify-start gap-2.5 mt-8 border border-sky-500 border-solid rounded-[48px] max-md:px-5 h-[50px] p-4 md:max-w-max"
                    onClick={handleOpenLetBuildForm}
                  >
                    <span>Let’s Build</span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0442ab98e742ebbc3c30ebf7fbc692a872603fbae4cb4d51b2f74d36e5964f69?apiKey=cad8efe434314a3791073499160712c6&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-full max-md:ml-0">
                <div className="flex flex-col grow justify-center items-center md:items-start self-stretch p-10 mx-auto w-full text-white rounded-2xl border border-solid bg-[#0080FF] bg-opacity-20 border-white border-opacity-20 max-md:px-5 max-md:mt-6">
                  <img loading="lazy" srcSet="https://i.imgur.com/t2LKURb.png" className="aspect-[3.03] hid w-[90px]" />
                  <div className="mt-4 font-bold body-text tracking-tighter leading-loose text-zinc-300">Mentors</div>
                  <div className="mt-4 body-text tracking-tight text-center md:text-left text-violet-100">
                    Make a transformative impact with your expertise by guiding ambitious founders to achieve the impossible, and contribute to shaping the future of Web3.
                  </div>
                  <button
                    className="flex items-center body-text !text-xl justify-center md:justify-start gap-2.5 mt-8 border border-sky-500 border-solid rounded-[48px] max-md:px-5 h-[50px] p-4 md:max-w-max"
                    onClick={handleOpenBecomeMentorForm}
                  >
                    <span>Become a Mentor</span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0442ab98e742ebbc3c30ebf7fbc692a872603fbae4cb4d51b2f74d36e5964f69?apiKey=cad8efe434314a3791073499160712c6&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-full max-md:ml-0">
                <div className="flex flex-col grow justify-center items-center md:items-start self-stretch p-10 mx-auto w-full text-white rounded-2xl border border-solid bg-[#0080FF] bg-opacity-20 border-white border-opacity-20 max-md:px-5 max-md:mt-6">
                  <img
                    loading="lazy"
                    srcSet="
                https://cdn.builder.io/api/v1/image/assets/TEMP/2dd9a67ac11b1e16920a5b4e4d1ae67626c85df8dad425cdc6a9881d639392fa?apiKey=cad8efe434314a3791073499160712c6&width=100   100w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/2dd9a67ac11b1e16920a5b4e4d1ae67626c85df8dad425cdc6a9881d639392fa?apiKey=cad8efe434314a3791073499160712c6&width=200   200w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/2dd9a67ac11b1e16920a5b4e4d1ae67626c85df8dad425cdc6a9881d639392fa?apiKey=cad8efe434314a3791073499160712c6&width=400   400w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/2dd9a67ac11b1e16920a5b4e4d1ae67626c85df8dad425cdc6a9881d639392fa?apiKey=cad8efe434314a3791073499160712c6&width=800   800w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/2dd9a67ac11b1e16920a5b4e4d1ae67626c85df8dad425cdc6a9881d639392fa?apiKey=cad8efe434314a3791073499160712c6&width=1200 1200w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/2dd9a67ac11b1e16920a5b4e4d1ae67626c85df8dad425cdc6a9881d639392fa?apiKey=cad8efe434314a3791073499160712c6&width=1600 1600w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/2dd9a67ac11b1e16920a5b4e4d1ae67626c85df8dad425cdc6a9881d639392fa?apiKey=cad8efe434314a3791073499160712c6&width=2000 2000w,
                https://cdn.builder.io/api/v1/image/assets/TEMP/2dd9a67ac11b1e16920a5b4e4d1ae67626c85df8dad425cdc6a9881d639392fa?apiKey=cad8efe434314a3791073499160712c6&
              "
                    className="aspect-[3.03] w-[90px]"
                  />
                  <div className="mt-4 font-bold body-text tracking-tighter leading-loose">Funders</div>
                  <div className="mt-4 body-text tracking-tight text-center md:text-left text-violet-100">
                    Access exclusive early investment opportunities in Web3, discover and connect with high-potential 100X startups before everyone else.
                  </div>
                  <button
                    className="flex items-center body-text !text-xl justify-center md:justify-start gap-2.5 mt-8 border border-sky-500 border-solid rounded-[48px] max-md:px-5 h-[50px] p-4 md:max-w-max"
                    onClick={handleOpenIwantInForm}
                  >
                    <span>I want in</span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0442ab98e742ebbc3c30ebf7fbc692a872603fbae4cb4d51b2f74d36e5964f69?apiKey=cad8efe434314a3791073499160712c6&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isLetBuildFormOpen} onClose={handleCloseLetBuildForm}>
        <LetBuildForm />
      </Modal>
      <Modal isOpen={isBecomeMentorFormOpen} onClose={handleCloseBecomeMentorForm}>
        <BecomeMentorForm />
      </Modal>
      <Modal isOpen={isIwantInFormOpen} onClose={handleCloseIwantInForm}>
        <IwantInForm />
      </Modal>
    </div>
  );
}
