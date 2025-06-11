"use client";

import { useEffect, useState } from "react";

export default function FloatingElements() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ left: string; top: string; delay: string; duration: string }>
  >([]);

  useEffect(() => {
    // Generate consistent particle positions on client side only
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      left: `${20 + Math.random() * 60}%`,
      top: `${20 + Math.random() * 60}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${6 + Math.random() * 4}s`,
    }));
    setParticles(newParticles);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-mesh rounded-full animate-mesh blur-3xl"></div>
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-cyber rounded-full animate-mesh blur-2xl"
          style={{ animationDelay: "5s" }}></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-gold rounded-full animate-mesh blur-xl"
          style={{ animationDelay: "10s" }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Hexagons */}
        <div className="absolute top-20 left-20 w-8 h-8 border-2 border-gold-500/30 rotate-45 animate-float"></div>
        <div
          className="absolute top-40 right-32 w-6 h-6 border border-gold-400/40 rotate-12 animate-float"
          style={{ animationDelay: "2s" }}></div>
        <div
          className="absolute bottom-32 left-1/3 w-10 h-10 border-2 border-gold-600/20 rotate-45 animate-float"
          style={{ animationDelay: "4s" }}></div>

        {/* Triangles */}
        <div
          className="absolute top-1/3 right-20 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-gold-500/30 animate-float"
          style={{ animationDelay: "1s" }}></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-gold-400/20 animate-float"
          style={{ animationDelay: "3s" }}></div>

        {/* Circles */}
        <div
          className="absolute top-1/2 left-20 w-4 h-4 rounded-full border-2 border-gold-500/40 animate-float"
          style={{ animationDelay: "6s" }}></div>
        <div
          className="absolute top-3/4 right-1/3 w-3 h-3 rounded-full bg-gold-400/30 animate-float"
          style={{ animationDelay: "8s" }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}></div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/60 rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}></div>
        ))}
      </div>
    </div>
  );
}

// Web3 Hero Background Component
export function Web3HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-web3"></div>

      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-cyber opacity-50 animate-gradient"></div>

      {/* Mesh pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-mesh animate-mesh"></div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-2xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}></div>
    </div>
  );
}

// Section Background Component
interface SectionBackgroundProps {
  variant?: "dark" | "darker" | "gradient";
  className?: string;
}

export function SectionBackground({
  variant = "dark",
  className = "",
}: SectionBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sectionParticles, setSectionParticles] = useState<
    Array<{ left: string; top: string; delay: string; duration: string }>
  >([]);

  useEffect(() => {
    // Generate consistent particle positions on client side only
    const newParticles = Array.from({ length: 8 }).map((_, i) => ({
      left: `${20 + Math.random() * 60}%`,
      top: `${20 + Math.random() * 60}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${8 + Math.random() * 4}s`,
    }));
    setSectionParticles(newParticles);
    setIsLoaded(true);
  }, []);

  const variants = {
    dark: "bg-black/80",
    darker: "bg-black/95",
    gradient: "bg-gradient-to-br from-black/90 to-black/70",
  };

  return (
    <div className={`absolute inset-0 ${variants[variant]} ${className}`}>
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}></div>

      {/* Floating particles */}
      {isLoaded && (
        <div className="absolute inset-0">
          {sectionParticles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-gold-400/40 rounded-full animate-float"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}></div>
          ))}
        </div>
      )}
    </div>
  );
}
