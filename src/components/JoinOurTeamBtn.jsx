import { useState } from 'react';
import Modal from './modals/Modal';
import JoinOurTeamForm from './forms/JoinOurTeamForm';

export default function JoinOurTeamBtn({title}) {
  const [isJoinOurTeamFormOpen, setIsJoinOurTeamFormOpen] = useState(false);

  // Handlers for opening/closing each modal
  const handleOpenJoinOurTeamForm = () => setIsJoinOurTeamFormOpen(true);
  const handleCloseJoinOurTeamForm = () => setIsJoinOurTeamFormOpen(false);

  return (
    <>
      <button
        className={`h-[51px] w-[166px] !text-xl body-text gradient-background rounded-2xl text-[white] cursor-pointer transition-[background-color] duration-[0.3s] md:flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[16px] px-5 py-2.5 mt-5 flex`}
        onClick={handleOpenJoinOurTeamForm}
      >
        <span className="text-white whitespace-nowrap">{title}</span>
        <img src="/icons/ArrowRight.svg" className="w-4 h-4" alt="" />
      </button>
      <Modal isOpen={isJoinOurTeamFormOpen} onClose={handleCloseJoinOurTeamForm}>
        <JoinOurTeamForm />
      </Modal>
    </>
  );
}
