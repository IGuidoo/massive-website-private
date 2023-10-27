"use client"

import React from 'react';
import Toast from '@/features/notifications/Toasty';
import { useToast } from '@/utils/contexts/ToastContext'; 

const CallToasty = () => {
    const { showToast, setShowToast } = useToast();
    const type = 'error';

    const handleOnErrorClose = () => {
      setShowToast(false);
    };

    return (
      <div>
        <button onClick={() => setShowToast(true)}>Show Toast</button>
        {showToast && type && <Toast type={type} message="This is an error Toast!" onClose={handleOnErrorClose} />}
      </div>
    );
};

export default CallToasty;
