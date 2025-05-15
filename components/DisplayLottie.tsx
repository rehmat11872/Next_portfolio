// import React from 'react';
// import Lottie from 'react-lottie';

// type Props = {
//   animationPath: string;
// };

// const GreetingLottie = ({ animationPath }: Props) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     path: animationPath,
//   };

//   return (
//     <div onClick={() => null}>
//       {/* @ts-ignore */}
//       <Lottie options={defaultOptions} />
//     </div>
//   );
// };

// export default GreetingLottie;


// components/DisplayLottie.tsx
'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import animationData from '../public/lottie/coding.json'  // <-- static import

// Only import react-lottie on the client
const Lottie = dynamic(() => import('react-lottie'), { ssr: false })

export default function DisplayLottie() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData,                              // <-- use animationData
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
      }}
      height={400}
      width={400}
    />
  )
}