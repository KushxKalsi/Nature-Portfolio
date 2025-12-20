import { useEffect, useState, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const colors = ['#22c55e', '#86efac', '#4ade80', '#a7f3d0', '#6ee7b7'];

  const createParticle = useCallback((x: number, y: number) => {
    const newParticle: Particle = {
      id: Date.now() + Math.random(),
      x,
      y,
      size: Math.random() * 8 + 4,
      opacity: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    return newParticle;
  }, []);

  useEffect(() => {
    let animationId: number;
    let lastParticleTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);

      // Create trail particles (throttled)
      const now = Date.now();
      if (now - lastParticleTime > 50) {
        lastParticleTime = now;
        setParticles(prev => {
          const newParticles = [...prev, createParticle(e.clientX, e.clientY)];
          return newParticles.slice(-15); // Keep only last 15 particles
        });
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Animate particles
    const animateParticles = () => {
      setParticles(prev => 
        prev
          .map(p => ({ ...p, opacity: p.opacity - 0.03, size: p.size * 0.95 }))
          .filter(p => p.opacity > 0)
      );
      animationId = requestAnimationFrame(animateParticles);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    animationId = requestAnimationFrame(animateParticles);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, [createParticle]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Trail particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9998] rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(1px)',
          }}
        />
      ))}

      {/* Outer glow ring */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: isPointer ? 50 : 40,
          height: isPointer ? 50 : 40,
          transform: 'translate(-50%, -50%)',
          border: '2px solid rgba(34, 197, 94, 0.4)',
          backgroundColor: isClicking ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
          boxShadow: isPointer 
            ? '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2)' 
            : '0 0 15px rgba(34, 197, 94, 0.3)',
        }}
      />

      {/* Inner cursor dot */}
      <div
        className={`fixed pointer-events-none z-[10000] rounded-full transition-all duration-150 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: isClicking ? 6 : 8,
          height: isClicking ? 6 : 8,
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#22c55e',
          boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)',
        }}
      />

      {/* Global style to hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
