"use client"

import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(() => false);
  const [toastType, setToastType] = useState();  // Add this state
  const [toastMessage, setToastMessage] = useState();  // And this one

  return (
    <ToastContext.Provider value={{ 
      showToast, 
      setShowToast, 
      toastType, 
      setToastType, 
      toastMessage, 
      setToastMessage,
    }}>
      {children}
    </ToastContext.Provider>
  );
};
