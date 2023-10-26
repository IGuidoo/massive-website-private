import "@/styles/modal.css"
import { XMarkIcon } from "@heroicons/react/24/outline";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    
    return (
        <div className="modal-overlay p-6">
            <div className="modal-content backdrop-filter backdrop-blur-lg">
                {children}
                <button className="modal-close-btn" onClick={onClose}><XMarkIcon className="w-6 h-6" /></button>
            </div>
        </div>
    );
}

export default Modal;