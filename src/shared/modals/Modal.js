import { XMarkIcon } from "@heroicons/react/24/outline";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    const glassmorphism = {
      background: 'rgba(255, 255, 255, 0.15)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      backdropFilter: 'blur(9px)',
      WebkitBackdropFilter: 'blur(9px)',
      borderRadius: '10px',

      display: "flex",
      flexDirection: "column",
    };
  
    return (
      <div className="modal fixed flex justify-center items-center z-40 inset-0 p-6">
        <div
          className={`p-8 max-w-[1000px] w-[90%] max-h-[900px] h-[90%] relative z-50 rounded-xl animate-modalOpacityIn`}
          style={glassmorphism}
        >
          {children}
          <button className="absolute top-8 right-8" onClick={onClose}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }
  
  export default Modal;
  