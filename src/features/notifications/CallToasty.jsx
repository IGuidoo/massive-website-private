"use client"

import React from 'react';
import Toast from '@/features/notifications/Toasty';
import { useToast } from '@/utils/contexts/ToastContext'; 

const CallToasty = () => {
    const { showToast, setShowToast } = useToast();
    const type = 'error';

    const handleOnErrorClose = () => {
      setShowToast(false); // add this line to reset the showToast state when the error toast is closed
    };

    return (
      <div>
        <button onClick={() => setShowToast(true)}>Show Toast</button>
        {showToast && <Toast key={`toast-${type}`} type='error' message="This is an error Toast!" onClose={() => handleOnErrorClose()} />}
      </div>
    );
};

export default CallToasty;

// Q: are you here ?
// A: yes
// q: when i click the button, it opens the error toast. But undernear the error toast also a success toast is shown. How can i prevent this?
// a: you can add a state to the toast component to control the visibility of the toast
// a: and then you can set the state to false when the toast is closed
// a: so that it will not be rendered again
// a: i will show you an example
// q: please show me where to make changes in the code
// a: ok
// a: let me create a repo for you
// q: where is the repo?


