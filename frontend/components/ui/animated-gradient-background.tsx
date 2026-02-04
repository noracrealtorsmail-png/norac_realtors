"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function AnimatedGradientBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme, resolvedTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        resize();
        window.addEventListener("resize", resize);

        const currentTheme = resolvedTheme || theme;
        // User's soft palette for light theme, brand colors for dark theme
        const colors = currentTheme === "dark"
            ? ["#8B6BC2", "#3b82f6", "#4c1d95"]
            : ["#e4fff6", "#e3ffd7", "#ddc2ff", "#cdd3ff", "#ffdcf1"];

        const particles: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = [];

        for (let i = 0; i < 6; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 300 + 200,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }

        let animationId: number;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and draw particles
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around for smoothness
                if (p.x < -p.radius) p.x = width + p.radius;
                if (p.x > width + p.radius) p.x = -p.radius;
                if (p.y < -p.radius) p.y = height + p.radius;
                if (p.y > height + p.radius) p.y = -p.radius;

                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
                gradient.addColorStop(0, p.color + "33"); // ~20% opacity hex
                gradient.addColorStop(1, "transparent");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, [theme, resolvedTheme]);

    return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />;
}
