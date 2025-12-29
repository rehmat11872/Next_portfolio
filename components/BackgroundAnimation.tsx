'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // More particles for vibrant effect
    const particles: Array<{ x: number, y: number, vx: number, vy: number, size: number, color: string }> = [];
    const particleCount = 100;

    const colors = ['rgba(168, 85, 247, 0.8)', 'rgba(6, 182, 212, 0.8)', 'rgba(236, 72, 153, 0.8)'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      // Dark black background
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // Vibrant moving gradient waves
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.2 + Math.sin(time) * 200,
        canvas.height * 0.3 + Math.cos(time * 0.7) * 200,
        0,
        canvas.width * 0.2,
        canvas.height * 0.3,
        canvas.width * 0.4
      );
      gradient1.addColorStop(0, 'rgba(168, 85, 247, 0.15)');
      gradient1.addColorStop(0.5, 'rgba(99, 102, 241, 0.08)');
      gradient1.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.8 + Math.cos(time * 1.3) * 200,
        canvas.height * 0.7 + Math.sin(time * 0.9) * 200,
        0,
        canvas.width * 0.8,
        canvas.height * 0.7,
        canvas.width * 0.4
      );
      gradient2.addColorStop(0, 'rgba(6, 182, 212, 0.15)');
      gradient2.addColorStop(0.5, 'rgba(14, 165, 233, 0.08)');
      gradient2.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Pink accent gradient
      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 0.5) * 150,
        canvas.height * 0.5 + Math.cos(time * 1.1) * 150,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.3
      );
      gradient3.addColorStop(0, 'rgba(236, 72, 153, 0.12)');
      gradient3.addColorStop(0.5, 'rgba(219, 39, 119, 0.06)');
      gradient3.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        const opacity = 0.3 + Math.sin(time * 2 + particle.x) * 0.2;
        ctx.fillStyle = particle.color.replace('0.8', opacity.toString());
        ctx.fill();

        // Connect nearby particles
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <>
      {/* Deep black base layer */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#020617',
        zIndex: -2
      }} />

      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
          opacity: 0.8
        }}
      />

      {/* Interactive Cursor Glow */}
      <motion.div
        style={{
          position: 'fixed',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          top: -300,
          left: -300,
          pointerEvents: 'none',
          zIndex: -1,
          filter: 'blur(100px)'
        }}
        animate={{
          x: typeof window !== 'undefined' ? mouseX : 0,
          y: typeof window !== 'undefined' ? mouseY : 0
        }}
      />

      {/* Animated accent overlays */}
      <motion.div
        style={{
          position: 'fixed',
          top: '10%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        style={{
          position: 'fixed',
          bottom: '10%',
          left: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </>
  );
};

export default BackgroundAnimation;
