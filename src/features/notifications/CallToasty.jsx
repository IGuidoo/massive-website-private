"use client"

import React from 'react';
import Toast from '@/features/notifications/Toasty';
import { useToast } from '@/utils/contexts/ToastContext'; 

const CallToasty = () => {
    const { showToast, setShowToast } = useToast();

    return (
      <div>
        <button onClick={() => setShowToast(true)}>Show Toast</button>
        {showToast && <Toast onClose={() => setShowToast(false)} />}
      </div>
    );
};

export default CallToasty;
