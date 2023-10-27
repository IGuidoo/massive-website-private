"use client"

import React, { useEffect, useState, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'; 

const Toast = ({ onClose }) => {
    const [visible, setVisible] = useState(true);
    const timerRef = useRef(null);

    useEffect(() => {
      timerRef.current = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 500); 
      }, 3000);  

      return () => clearTimeout(timerRef.current);
    }, [onClose]);

    const handleButtonClick = () => {
      clearTimeout(timerRef.current); 
      setVisible(false);
      setTimeout(onClose, 500); 
    };

    return (
      <div className={`fixed top-[-100%] left-1/2 -translate-x-1/2 bg-white text-green-700  rounded-lg p-6 shadow-md z-50  ${visible ? 'animate-toastSlideIn' : 'animate-toastSlideOut'}`}>
        Toast Message
        <button className="absolute top-8 right-8" onClick={handleButtonClick}>
          <XMarkIcon className="w-6 h-6" />
        </button>
        <div className="h-1 w-full bg-green-700 absolute bottom-0 left-0 animate-toastTimebar "></div>
      </div>
    );
};

export default Toast;
