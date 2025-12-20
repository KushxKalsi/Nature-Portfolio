import { useEffect, useRef, useState } from 'react';

const PARTICLE_COUNT = 8;
const COLORS = ['#22c55e', '#86efac', '#4ade80', '#a7f3d0'];

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<{ x: number; y: number; size: number; opacity: number; color: string }[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const lastParticleTime = useRef(0);

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);
  }, []);

  // Canvas particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(p => {
        p.opacity -= 0.025;
        p.size *= 0.96;
        
        if (p.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba');
        ctx.fill();
        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Mouse/touch handlers
  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const addParticle = (x: number, y: number) => {
      const now = Date.now();
      if (now - lastParticleTime.current < 40) return; // Throttle
      lastParticleTime.current = now;

      if (particlesRef.current.length < PARTICLE_COUNT) {
        particlesRef.current.push({
          x,
          y,
          size: Math.random() * 6 + 3,
          opacity: 0.8,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const updateCursor = (x: number, y: number) => {
      mousePos.current = { x, y };
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      addParticle(x, y);
      setIsVisible(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCursor(e.clientX, e.clientY);

      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) updateCursor(touch.clientX, touch.clientY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) updateCursor(touch.clientX, touch.clientY);
      setIsClicking(true);
    };

    const handleTouchEnd = () => {
      setIsClicking(false);
      setTimeout(() => setIsVisible(false), 300);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <>
      {/* Canvas for particles - GPU accelerated */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9997]"
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full will-change-transform"
        style={{
          width: isPointer ? 50 : 36,
          height: isPointer ? 50 : 36,
          opacity: isVisible ? 1 : 0,
          border: '2px solid rgba(34, 197, 94, 0.5)',
          backgroundColor: isClicking ? 'rgba(34, 197, 94, 0.15)' : 'transparent',
          boxShadow: isPointer 
            ? '0 0 20px rgba(34, 197, 94, 0.4)' 
            : '0 0 10px rgba(34, 197, 94, 0.3)',
          transition: 'width 0.2s, height 0.2s, opacity 0.2s, box-shadow 0.2s',
        }}
      />

      {/* Inner dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full will-change-transform"
        style={{
          width: isClicking ? 5 : 7,
          height: isClicking ? 5 : 7,
          opacity: isVisible ? 1 : 0,
          backgroundColor: '#22c55e',
          boxShadow: '0 0 8px rgba(34, 197, 94, 0.8)',
          transition: 'width 0.1s, height 0.1s, opacity 0.1s',
        }}
      />

      {/* Hide default cursor on desktop only */}
      {!isTouchDevice && (
        <style>{`
          *, *::before, *::after {
            cursor: none !important;
          }
        `}</style>
      )}
    </>
  );
};

export default CustomCursor;
