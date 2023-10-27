'use client'

import { ThemeProvider } from 'next-themes'
import { ToastProvider } from '@/utils/contexts/ToastContext';

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <ToastProvider>
        {children}
      </ToastProvider>
    </ThemeProvider>
  )
}
