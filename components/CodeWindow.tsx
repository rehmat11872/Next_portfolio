import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CodeWindow = () => {
    const [text, setText] = useState('');
    const fullText = `const Developer = {
  name: "Rehmat Qadeer",
  role: "Full Stack Engineer",
  skills: [
    "Python / Django",
    "React / Next.js",
    "Node.js / Express",
    "AWS / GCP / Cloud"
  ],
  status: "Building the future...",
  hireable: true,
  
  code: () => {
    return "Let's build something amazing together!";
  }
};`;

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 30); // Typing speed

        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="code-window"
            style={{
                background: '#1a1b26', // Tokyo Night Background
                borderRadius: '24px', // Super-elliptical feel
                boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)', // Deep shadow + border
                padding: '20px',
                fontFamily: "'Fira Code', monospace", // Ensure whitespace is preserved
                fontSize: '14px',
                color: '#a9b1d6',
                maxWidth: '500px',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
            }}
        >
            {/* Noise Texture Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.05,
                pointerEvents: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />

            <style jsx global>{`
                .code-window ::selection {
                    background: rgba(122, 162, 247, 0.3); /* Tokyo Night Selection */
                    color: inherit;
                }
            `}</style>

            {/* Window Header */}
            <div className="d-flex align-items-center mb-3">
                <div className="d-flex gap-2 mr-3">
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', marginLeft: '8px' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', marginLeft: '8px' }} />
                </div>
                <div className="text-muted ml-3" style={{ fontSize: '12px', opacity: 0.6 }}>Portfolio.tsx</div>
            </div>

            {/* Code Content */}
            <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                <span style={{ color: '#bb9af7' }}>const</span> <span style={{ color: '#e0af68' }}>Developer</span> <span style={{ color: '#89ddff' }}>=</span> {'{'}
                <br />
                {text.split('\n').slice(1, -1).map((line, i) => ( // Minimal syntax highlighting simulation
                    <div key={i}>
                        <span dangerouslySetInnerHTML={{ __html: highlightSyntax(line) }} />
                    </div>
                ))}
                {text.split('\n').length > 1 && '};'}
                {text.length < fullText.length && (
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        style={{
                            display: 'inline-block',
                            width: '8px',
                            height: '15px',
                            background: '#7aa2f7',
                            marginLeft: '2px',
                            verticalAlign: 'middle'
                        }}
                    />
                )}
            </div>
        </motion.div>
    );
};

// Simple helper to simulate syntax highlighting for this specific snippet
const highlightSyntax = (line: string) => {
    let formatted = line
        .replace(/"(.*?)"/g, '<span style="color: #9ece6a">"$1"</span>') // Strings - Bright Green
        .replace(/(\w+):/g, '<span style="color: #7dcfff">$1</span>:') // Keys - Cyan
        .replace(/\/\/.*/g, '<span style="color: #565f89">$&</span>') // Comments
        .replace(/true|false/g, '<span style="color: #ff9e64">$&</span>') // Booleans - Orange
        .replace(/\[|\]/g, '<span style="color: #89ddff">$&</span>'); // Brackets

    if (line.includes("code:")) {
        formatted = formatted.replace("code", '<span style="color: #7aa2f7">code</span>');
    }
    return formatted;
};

export default CodeWindow;
