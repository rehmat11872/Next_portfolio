import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  // Initialize theme — default is dark unless user explicitly chose light
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // Default to dark mode
      document.documentElement.classList.add('dark');
      if (!saved) localStorage.setItem('theme', 'dark');
    }
  }, []);

  return <Component {...pageProps} />;
}
