import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import SmoothScrollProvider from '../components/SmoothScrollProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Default to clean, modern, crisp light theme
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      if (!saved) localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <SmoothScrollProvider>
      <Component {...pageProps} />
    </SmoothScrollProvider>
  );
}
