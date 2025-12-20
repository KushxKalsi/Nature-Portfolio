import { useEffect, useRef, useState } from 'react';

const PARTICLE_COUNT = 12;
const COLORS = ['#22c55e', '#86efac', '#4ade80', '#a7f3d0'];

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<
    { x: number; y: number; size: number; opacity: number; color: string }[]
  >([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const isActive = useRef(false);

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!canvas || !cursor || !ring) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const addParticle = (x: number, y: number) => {
      if (particlesRef.current.length < PARTICLE_COUNT) {
        particlesRef.current.push({
          x,
          y,
          size: Math.random() * 5 + 3,
          opacity: 0.75,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    // Add particles along a line between two points
    const addParticlesAlongPath = (x1: number, y1: number, x2: number, y2: number) => {
      const dist = Math.hypot(x2 - x1, y2 - y1);
      const steps = Math.max(1, Math.floor(dist / 12)); // One particle every ~12px
      
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const x = x1 + (x2 - x1) * t;
        const y = y1 + (y2 - y1) * t;
        addParticle(x, y);
      }
    };

    const animate = () => {
      // Smooth cursor follow
      const lerp = 0.4;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerp;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerp;

      const x = currentPos.current.x;
      const y = currentPos.current.y;
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

      // Clear and draw particles
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current = particlesRef.current.filter((p) => {
        p.opacity -= 0.035;
        p.size *= 0.94;

        if (p.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${p.opacity})`;
        ctx.fill();
        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Event handlers
    const updatePosition = (x: number, y: number, interpolate: boolean) => {
      if (interpolate && isActive.current) {
        addParticlesAlongPath(lastPos.current.x, lastPos.current.y, x, y);
      } else {
        addParticle(x, y);
      }
      
      lastPos.current = { x, y };
      targetPos.current = { x, y };
      isActive.current = true;
      setIsVisible(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY, true);

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
      if (touch) {
        updatePosition(touch.clientX, touch.clientY, true);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        // Reset positions on new touch
        lastPos.current = { x: touch.clientX, y: touch.clientY };
        currentPos.current = { x: touch.clientX, y: touch.clientY };
        targetPos.current = { x: touch.clientX, y: touch.clientY };
        addParticle(touch.clientX, touch.clientY);
      }
      isActive.current = true;
      setIsClicking(true);
      setIsVisible(true);
    };

    const handleTouchEnd = () => {
      isActive.current = false;
      setIsClicking(false);
      setTimeout(() => setIsVisible(false), 400);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => {
      isActive.current = false;
      setIsVisible(false);
    };
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
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
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
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9997]"
      />

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
