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

// dynamically pull in react-lottie (and thus lottie-web) only on the client
const Lottie = dynamic(() => import('react-lottie'), { ssr: false })

interface Props { animationPath: string }

export default function DisplayLottie({ animationPath }: Props) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  // server & first-hydration: return null (matches server HTML)
  if (!mounted) return null

  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        // either `animationData` or `path`:
        path: animationPath,
      }}
      height={400}
      width={400}
    />
  )
}
