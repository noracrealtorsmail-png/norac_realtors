"use client"

import React, { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, Sparkles } from '@react-three/drei';
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import * as THREE from 'three';

const WindowGrid = ({
    rows,
    cols,
    startX,
    startY,
    gapX,
    gapY,
    width,
    height,
    baseColor,
    activeColor,
    baseOpacity = 0.7
}: {
    rows: number,
    cols: number,
    startX: number,
    startY: number,
    gapX: number,
    gapY: number,
    width: number,
    height: number,
    baseColor?: string,
    activeColor?: string,
    baseOpacity?: number
}) => {
    const totalWindows = rows * cols;
    const [litIndices, setLitIndices] = useState<number[]>([]);

    useEffect(() => {
        // Initialize random windows
        const initialLit = [];
        for (let i = 0; i < totalWindows; i++) {
            if (Math.random() > 0.7) initialLit.push(i);
        }
        setLitIndices(initialLit);

        const interval = setInterval(() => {
            setLitIndices(prev => {
                const next = [...prev];
                // Toggle 2 random windows
                for (let k = 0; k < 2; k++) {
                    const randomIdx = Math.floor(Math.random() * totalWindows);
                    const idxInArray = next.indexOf(randomIdx);
                    if (idxInArray >= 0) {
                        next.splice(idxInArray, 1);
                    } else {
                        next.push(randomIdx);
                    }
                }
                return next;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [totalWindows]);

    const rects = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const index = r * cols + c;
            const isLit = litIndices.includes(index);
            rects.push(
                <rect
                    key={`${r}-${c}`}
                    x={startX + c * gapX}
                    y={startY + r * gapY}
                    width={width}
                    height={height}
                    fill={isLit ? (activeColor || "var(--window-lit)") : (baseColor || "var(--window-dim)")}
                    opacity={baseOpacity}
                    style={{ transition: 'fill 1s ease-in-out' }}
                />
            );
        }
    }
    return <>{rects}</>;
};

// Set decoder path for compressed models
useGLTF.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.5/');
useGLTF.preload('/assets/logo/3d/logo-compressed.glb');

function LogoModel({ scale = 1.7 }: { scale?: number }) {
    const { scene } = useGLTF('/assets/logo/3d/logo-compressed.glb');
    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.005;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <primitive object={scene} scale={scale} position={[0, 0, 0]} ref={ref} />
        </Float>
    );
}

const Typewriter = ({ words }: { words: string[] }) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100;
        const word = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(word.substring(0, text.length + 1));
                if (text.length + 1 === word.length) {
                    setTyping(false);
                    setTimeout(() => {
                        setIsDeleting(true);
                        setTyping(true);
                    }, 2000);
                }
            } else {
                setText(word.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words]);

    return (
        <span className="inline-block min-w-[200px] md:min-w-[300px] text-left">
            <span className="text-brand-primary font-bold drop-shadow-[0_0_15px_rgba(139,107,194,0.5)]">
                {text}
            </span>
            <span className={`ml-1 inline-block w-0.5 h-6 md:w-1 md:h-8 bg-foreground align-middle ${typing ? 'animate-pulse' : ''}`}></span>
        </span>
    );
};

const NoracParallax = () => {
    const { theme } = useTheme();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePos({ x, y });
    };

    const layers = [
        {
            id: 'bg-stars',
            depth: 0.05,
            content: (
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-[var(--star-color)] rounded-full"
                            style={{
                                width: Math.random() * 3 + 'px',
                                height: Math.random() * 3 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                                boxShadow: '0 0 10px var(--star-color)'
                            }}
                        />
                    ))}
                </div>
            )
        },
        {
            id: 'far-mountains',
            depth: 0.15,
            content: (
                <svg viewBox="0 0 1000 400" className="absolute bottom-0 w-full h-[25%] md:h-[40%] opacity-30 pointer-events-none">
                    <path d="M0 400 L200 150 L400 300 L600 100 L800 250 L1000 150 L1000 400 Z" fill="var(--mountain-fill)" />
                </svg>
            )
        },
        {
            id: 'mid-city',
            depth: 0.3,
            content: (
                <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" className="absolute bottom-0 w-full h-[40%] md:h-[60%] opacity-50 pointer-events-none">
                    {/* Distant Skyscrapers - More density */}
                    <rect x="50" y="220" width="30" height="280" fill="var(--building-back)" />
                    <rect x="100" y="200" width="40" height="300" fill="var(--building-back)" />
                    <rect x="180" y="150" width="60" height="350" fill="var(--building-back)" />
                    <rect x="260" y="280" width="30" height="220" fill="var(--building-back)" />
                    <rect x="300" y="250" width="50" height="250" fill="var(--building-back)" />
                    <rect x="380" y="180" width="40" height="320" fill="var(--building-back)" />
                    <rect x="450" y="100" width="70" height="400" fill="var(--building-back)" />
                    <rect x="540" y="220" width="35" height="280" fill="var(--building-back)" />
                    <rect x="600" y="180" width="50" height="320" fill="var(--building-back)" />
                    <rect x="680" y="250" width="45" height="250" fill="var(--building-back)" />
                    <rect x="750" y="220" width="40" height="280" fill="var(--building-back)" />
                    <rect x="850" y="120" width="60" height="380" fill="var(--building-back)" />
                    <rect x="930" y="200" width="40" height="300" fill="var(--building-back)" />
                </svg>
            )
        },
        {
            id: '3d-logo',
            depth: 0.4,
            content: (
                <div className="absolute inset-0 flex items-center justify-center z-[55]">
                    <div className="w-full h-[40vh] md:w-[800px] md:h-[800px] opacity-80 md:opacity-100">
                        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                            <ambientLight intensity={theme === 'dark' ? 1.5 : 2} />
                            <hemisphereLight
                                intensity={1}
                                color={theme === 'dark' ? "#ffffff" : "#f5fdfa"}
                                groundColor={theme === 'dark' ? "#8B6BC2" : "#cdd3ff"}
                            />
                            <directionalLight position={[5, 5, 5]} intensity={theme === 'dark' ? 2 : 1.2} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                            <pointLight
                                position={[-10, -10, -10]}
                                intensity={theme === 'dark' ? 1.5 : 1}
                                color={theme === 'dark' ? "#8B6BC2" : "#8B6BC2"}
                            />
                            <pointLight position={[0, 5, 0]} intensity={1} color="#ffffff" />
                            <Suspense fallback={null}>
                                <LogoModel scale={isMobile ? 2.5 : 1.7} />
                                <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="var(--sparkle-color)" />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
            )
        },
        {
            id: 'foreground-back',
            depth: 0.5,
            content: (
                <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" className="absolute bottom-0 w-full h-[45%] md:h-[85%] pointer-events-none">
                    <defs>
                        <linearGradient id="grad1-back" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.9 }} />
                            <stop offset="100%" style={{ stopColor: 'var(--building-stroke)', stopOpacity: 0.8 }} />
                        </linearGradient>
                        <linearGradient id="gradTree-back" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.8 }} />
                            <stop offset="100%" style={{ stopColor: 'var(--building-front)', stopOpacity: 0.2 }} />
                        </linearGradient>
                        <filter id="glow-back">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* --- BACK LAYER BUILDINGS (Behind Content) --- */}
                    {/* Left Large */}
                    <path d="M20 600 L20 250 L120 180 L180 250 L180 600 Z" fill="var(--building-back)" stroke="var(--building-stroke)" strokeWidth="2" filter="url(#glow-back)" />

                    {/* Left Building Windows */}
                    <WindowGrid rows={6} cols={3} startX={40} startY={280} gapX={35} gapY={50} width={20} height={30} baseColor="var(--window-dim)" activeColor="var(--window-lit)" baseOpacity={0.8} />

                    {/* Left Cluster Trees */}
                    <path d="M10 600 L30 520 L50 600 Z" fill="url(#gradTree-back)" />
                    <path d="M150 600 L170 540 L190 600 Z" fill="url(#gradTree-back)" />
                    <circle cx="100" cy="580" r="15" fill="var(--building-stroke)" opacity="0.5" filter="url(#glow-back)" />
                </svg>
            )
        },
        {
            id: 'foreground-front',
            depth: 0.7,
            content: (
                <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" className="absolute bottom-0 w-full h-[45%] md:h-[85%] pointer-events-none">
                    <defs>
                        <linearGradient id="grad1-front" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.9 }} />
                            <stop offset="100%" style={{ stopColor: 'var(--building-stroke)', stopOpacity: 0.8 }} />
                        </linearGradient>
                        <linearGradient id="gradTree-front" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.8 }} />
                            <stop offset="100%" style={{ stopColor: 'var(--building-front)', stopOpacity: 0.2 }} />
                        </linearGradient>
                        <filter id="glow-front">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* --- FRONT LAYER BUILDINGS (In Front of Content) --- */}
                    {/* Mid-Left - Adjusted Height */}
                    <path d="M200 600 L200 490 L280 450 L340 490 L340 600 Z" fill="var(--building-front)" stroke="var(--building-stroke)" strokeWidth="1" opacity="0.9" />
                    {/* Center Tower Base */}
                    <path d="M400 600 L420 500 L580 500 L600 600 Z" fill="var(--building-front)" stroke="var(--building-stroke)" strokeWidth="1" opacity="0.8" />
                    {/* Mid-Right */}
                    <path d="M650 600 L650 320 L720 280 L780 320 L780 600 Z" fill="var(--building-front)" stroke="var(--building-stroke)" strokeWidth="1" opacity="0.9" />
                    {/* Right Large */}
                    <path d="M820 600 L820 200 L900 100 L980 200 L980 600 Z" fill="var(--building-front)" stroke="var(--building-stroke)" strokeWidth="2" filter="url(#glow-front)" />

                    {/* Mid-Left Windows */}
                    <WindowGrid rows={3} cols={1} startX={240} startY={510} gapX={0} gapY={30} width={60} height={10} baseColor="var(--window-dim)" activeColor="var(--window-lit)" />

                    {/* Mid-Right Windows */}
                    <rect x="680" y="350" width="5" height="200" fill="var(--building-stroke)" className="animate-pulse" />
                    <rect x="740" y="350" width="5" height="200" fill="var(--building-stroke)" className="animate-pulse" />

                    {/* Right Building Windows */}
                    <WindowGrid rows={8} cols={4} startX={840} startY={220} gapX={30} gapY={45} width={15} height={25} baseColor="var(--building-back)" activeColor="var(--window-lit)" baseOpacity={0.7} />

                    {/* Right Cluster Trees */}
                    <path d="M790 600 L810 530 L830 600 Z" fill="url(#gradTree-front)" />
                    <circle cx="950" cy="590" r="10" fill="var(--primary)" opacity="0.6" filter="url(#glow-front)" />
                </svg>
            )
        },
        {
            id: 'floating-particles',
            depth: 1.2,
            content: (
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/10 blur-3xl rounded-full animate-pulse"></div>
                </div>
            )
        }
    ];

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen overflow-hidden bg-background flex items-center justify-center cursor-default"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--parallax-bg-start)] via-[var(--parallax-bg-mid)] to-[var(--parallax-bg-end)]"></div>

            {layers.map((layer) => (
                <div
                    key={layer.id}
                    className="absolute inset-0 transition-transform duration-75 ease-out will-change-transform pointer-events-none"
                    style={{
                        transform: `translate(${mousePos.x * layer.depth * 100}px, ${mousePos.y * layer.depth * 100}px)`,
                        zIndex: Math.round(layer.depth * 100),
                    }}
                >
                    {layer.content}
                </div>
            ))}

            {/* HERO CONTENT OVERLAY - Main Content (z-60) sits between Back and Front buildings */}
            <div className="absolute inset-0 z-[60] pointer-events-none select-none flex items-center justify-center">
                <div className="relative w-full h-fit max-w-[1400px] mx-auto px-6 md:px-12 mt[-10vh] md:mt-0">
                    {/* Main Content (Left) */}
                    <div className="w-full md:max-w-[550px] flex justify-center md:block">
                        <div className="backdrop-blur-lg p-6 md:p-10 rounded-3xl bg-background/40 md:bg-background/20 border border-border/20 shadow-[0_0_50px_rgba(0,0,0,0.1)] min-h-[250px] md:min-h-[400px] flex flex-col justify-center text-center md:text-left w-full h-full">
                            <h1 className="text-3xl md:text-6xl font-bold text-foreground mb-4 md:mb-6 tracking-tight drop-shadow-lg leading-tight">
                                Find Your <span className="text-brand-primary">Dream Home</span> in Kenya
                            </h1>
                            <div className="text-base md:text-3xl font-light text-muted-foreground flex flex-col gap-1 md:gap-2">
                                <span className="opacity-80">Discover premium</span>
                                <div className="h-8 md:h-12 flex justify-center md:justify-start overflow-hidden">
                                    <Typewriter
                                        words={[
                                            "Luxury Apartments",
                                            "Modern Townhouses",
                                            "Beachfront Villas",
                                            "Investment Properties"
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FRONT CARDS OVERLAY - z-80 to sit in front of all buildings */}
            <div className="absolute inset-0 z-[80] pointer-events-none select-none">
                <div className="relative w-full h-full max-w-[1400px] mx-auto px-6 md:px-12">
                    {/* Top Right Card - Stats/Excellence */}
                    <div className="absolute right-6 md:right-12 top-[15%] md:top-[25%] w-48 md:w-72">
                        <div className="backdrop-blur-md p-4 md:p-6 rounded-2xl bg-background/20 border border-border/20 shadow-xl scale-75 md:scale-100 origin-right">
                            <div className="text-brand-primary text-2xl md:text-4xl font-bold mb-1">1,200+</div>
                            <div className="text-foreground text-[10px] md:text-sm font-bold uppercase tracking-widest mb-2">Verified Listings</div>
                            <div className="h-px w-8 md:w-12 bg-brand-primary/50 mb-3"></div>
                            <p className="text-muted-foreground text-[9px] md:text-xs leading-relaxed">
                                Our curated portfolio features the most exclusive properties in Kenya.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Right Card - Location/Contact */}
                    <div className="absolute left-6 md:left-auto md:right-24 bottom-[15%] md:bottom-[20%] w-56 md:w-80">
                        <div className="backdrop-blur-md p-4 md:p-6 rounded-2xl bg-background/20 border border-border/20 shadow-xl scale-75 md:scale-100 origin-left md:origin-right">
                            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                                <div className="relative">
                                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-primary animate-ping absolute"></div>
                                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-primary relative"></div>
                                </div>
                                <div className="text-foreground text-xs md:text-base font-bold tracking-wide">Nairobi Headquarters</div>
                            </div>
                            <div className="space-y-0.5 md:space-y-1">
                                <div className="text-muted-foreground text-[10px] md:text-sm">Westlands, Nairobi, Kenya</div>
                                <div className="text-muted-foreground text-[8px] md:text-xs">Serving clients nationwide with excellence.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid Floor */}
            <div className="absolute bottom-0 w-full h-[20%] opacity-20 perspective-1000 pointer-events-none">
                <div
                    className="w-full h-full bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:40px_40px]"
                    style={{
                        transform: `rotateX(60deg) translateY(${mousePos.y * 20}px)`,
                        transformOrigin: 'bottom'
                    }}
                ></div>
            </div>

            {/* --- LUXURIOUS WORD CAROUSEL --- */}
            <div className="absolute bottom-0 left-0 w-full h-12 md:h-24 z-50 flex items-center overflow-hidden bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none backdrop-blur-[1px]">
                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="w-fit flex whitespace-nowrap"
                        animate={{
                            x: ["0%", "-50%"]
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30, // Faster than before for visibility
                                ease: "linear",
                            },
                        }}
                    >
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="flex items-center gap-6 md:gap-16 px-4 md:px-8">
                                <span className="text-[10px] md:text-base font-normal tracking-[0.1em] md:tracking-[0.4em] text-primary uppercase drop-shadow-[0_0_8px_rgba(139,107,194,0.3)]">Luxury</span>
                                <div className="w-0.5 h-0.5 md:w-1.5 md:h-1.5 rotate-45 bg-primary shadow-[0_0_10px_rgba(139,107,194,0.5)]"></div>
                                <span className="text-[10px] md:text-base font-medium tracking-[0.1em] md:tracking-[0.4em] text-foreground uppercase drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">Norac Realtors</span>
                                <div className="w-0.5 h-0.5 md:w-1.5 md:h-1.5 rotate-45 bg-primary shadow-[0_0_10px_rgba(139,107,194,0.5)]"></div>
                                <span className="text-[10px] md:text-base font-normal tracking-[0.1em] md:tracking-[0.4em] text-primary uppercase drop-shadow-[0_0_8px_rgba(139,107,194,0.3)]">Investment</span>
                                <div className="w-0.5 h-0.5 md:w-1.5 md:h-1.5 rotate-45 bg-primary shadow-[0_0_10px_rgba(139,107,194,0.5)]"></div>
                                <span className="text-[10px] md:text-base font-normal tracking-[0.1em] md:tracking-[0.4em] text-primary uppercase drop-shadow-[0_0_8px_rgba(139,107,194,0.3)]">Real Estate</span>
                                <div className="w-0.5 h-0.5 md:w-1.5 md:h-1.5 rotate-45 bg-primary shadow-[0_0_10px_rgba(139,107,194,0.5)]"></div>
                                <span className="text-[10px] md:text-base font-normal tracking-[0.1em] md:tracking-[0.4em] text-primary uppercase drop-shadow-[0_0_8px_rgba(139,107,194,0.3)]">Excellence</span>
                                <div className="w-0.5 h-0.5 md:w-1.5 md:h-1.5 rotate-45 bg-primary shadow-[0_0_10px_rgba(139,107,194,0.5)]"></div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default NoracParallax;
