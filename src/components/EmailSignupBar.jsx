"use client"

import React from 'react'
import { useState } from 'react'


const EmailSignupBar = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // TODO: Handle the email submission to database

        // Clear the input field after submission
        setEmail('');
    };

    return (
        <form
            className='flex justify-between items-center px-8 py-4 bg-secondary-50 rounded-2xl shadow-sm'
            onSubmit={handleFormSubmit}>
            <input
                className=' bg-transparent placeholder-secondary-500 focus:outline-none'
                type="email"
                placeholder="Email..."
                value={email}
                onChange={handleEmailChange}
            />
            <button type="submit" className='text-white font-bold text-sm px-8 py-3 bg-primary-500 rounded-lg'>Verstuur</button>
        </form>
    )
}

export default EmailSignupBar