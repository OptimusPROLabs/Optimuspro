import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[50]">
      {/* Backdrop for the modal with transitions */}
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/45 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      {/* Centering the Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4 px-8">
        {/* Modal Panel */}
        <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-[20px] gradient-background2 shadow-xl transition-all data-[enter]:scale-100 data-[leave]:scale-95">
          {/* Make the panel scrollable if content is long */}
          <div className="max-h-[90vh] custom-scrollbar overflow-y-auto p-6">
            <div className="flex items-center justify-end">
              <DialogTitle as="h3" className="text-lg hidden font-medium leading-6 text-gray-900">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 inline-block mr-2" />
                Important Information
              </DialogTitle>
              <button onClick={onClose} className="text-white fixed z-10 top-[30px] gradient-background w-[35px] h-[35px] rounded-full">
                &#x2715;
              </button>
            </div>

            <div className="mt-4">{children}</div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
