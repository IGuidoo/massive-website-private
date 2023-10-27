"use client"

import React, { useEffect, useState, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useToast } from '@/utils/contexts/ToastContext';

const Toast = ({ onClose, message, type = "success" }) => {
  const { toastType, setToastType, toastMessage, setToastMessage } = useToast(); 
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  const resetToast = () => {
    setToastType(null);
    setToastMessage(null);
    // console.log('Toast reset');
  }

  useEffect(() => {
    // console.log('Toast mounted with type:', type);
    timerRef.current = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500);
    }, 3000);

    return () => {
      // console.log('Toast unmounting with type:', type);
      resetToast();
      clearTimeout(timerRef.current);
    }
  }, [onClose]);

  const handleButtonClick = () => {
    clearTimeout(timerRef.current);
    setVisible(false);
    resetToast();
    console.log(toastType)
    setTimeout(() => {
        onClose();
    }, 500);
};

  // Define styles for each toast type
  const toastStyles = {
    success: {
      text: "text-green-700",
      bg: "bg-white",
      bar: "bg-green-700"
    },
    alert: {
      text: "text-yellow-700",
      bg: "bg-yellow-100",
      bar: "bg-yellow-700"
    },
    error: {
      text: "text-red-700",
      bg: "bg-red-100",
      bar: "bg-red-700"
    },
    info: {
      text: "text-blue-700",
      bg: "bg-blue-100",
      bar: "bg-blue-700"
    }
  };

  // Get styles based on the provided type prop
  const currentStyle = toastStyles[type] || toastStyles.success;

  return (
    <div className={`flex gap-4  fixed top-[-100%] left-1/2 -translate-x-1/2 ${currentStyle.bg} ${currentStyle.text} rounded-lg p-6 shadow-md z-50  ${visible ? 'animate-toastSlideIn' : 'animate-toastSlideOut'}`}>
      <p>
        {message}
      </p>
      <button onClick={handleButtonClick}>
        <XMarkIcon className="w-6 h-6" />
      </button>
      <div className={`h-1 w-full ${currentStyle.bar} absolute bottom-0 left-0 animate-toastTimebar `}></div>
    </div>
  );
};

export default Toast;
