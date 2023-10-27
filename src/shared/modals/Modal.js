import { XMarkIcon } from "@heroicons/react/24/outline";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    
    return (
        <div className="fixed flex justify-center items-center z-40  inset-0 bg-black/[0.5] p-6 transition-opacity duration-1000 ease-in-out">
            <div className="p-8  max-w-[1000px] w-[90%] relative z-50 rounded-xl bg-gray-200/[0.5] backdrop-filter backdrop-blur-lg transition-transform duration-1000 ease-in-out transform translate-y-4">
                {children}
                <button className="absolute top-8 right-8" onClick={onClose}><XMarkIcon className="w-6 h-6" /></button>
            </div>
        </div>
    );
}

export default Modal;
