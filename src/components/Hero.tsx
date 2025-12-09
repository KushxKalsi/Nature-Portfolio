import { useEffect, useState, useRef } from 'react';
import { Leaf, Mountain, Sparkles, ArrowDown } from 'lucide-react';

// Pre-generated leaf positions
const leafPositions = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 13 + 8) % 100}%`,
  top: `${(i * 19 + 5) % 100}%`,
  delay: `${i * 0.8}s`,
  duration: `${6 + (i % 4)}s`,
  size: i % 3 === 0 ? 'w-8 h-8' : 'w-6 h-6',
}));

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900"
    >

      <div className="absolute inset-0">
        {/* Gentle wave animation */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
          <svg className="w-full h-full animate-water-flow" viewBox="0 0 1200 300" fill="none">
            <path d="M0 150L50 140L100 160L150 145L200 155L250 135L300 150L350 140L400 160L450 145L500 155L550 135L600 150L650 140L700 160L750 145L800 155L850 135L900 150L950 140L1000 160L1050 145L1100 155L1150 135L1200 150V300H0V150Z" 
                  fill="url(#wave-gradient)" />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Floating Leaves - stable positions */}
      {mounted && leafPositions.map((pos, i) => (
        <div
          key={i}
          className="absolute animate-leaf-float opacity-20 dark:opacity-10 pointer-events-none"
          style={{
            left: pos.left,
            top: pos.top,
            animationDelay: pos.delay,
            animationDuration: pos.duration,
          }}
        >
          <Leaf className={`${pos.size} text-nature-leaf transform rotate-12`} />
        </div>
      ))}

      {/* Particle dots */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/40 dark:bg-emerald-400/20 rounded-full animate-float-particle"
            style={{
              left: `${(i * 7 + 3) % 100}%`,
              top: `${(i * 11 + 5) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Mountain Silhouettes with parallax */}
      <div 
        className="absolute bottom-0 left-0 w-full transition-transform duration-300"
        style={{ transform: `translateY(${mousePosition.y * 0.5}px)` }}
      >
        <svg viewBox="0 0 1200 300" className="w-full h-auto">
          <path
            d="M0,300 L0,150 L200,80 L400,120 L600,60 L800,100 L1000,40 L1200,80 L1200,300 Z"
            fill="url(#mountainGradient)"
            className="opacity-60 dark:opacity-40"
          />
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2D5016" />
              <stop offset="100%" stopColor="#4A7C59" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
         <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-nature-leaf/20 to-nature-forest/20 border-4 border-nature-sage/30 flex items-center justify-center overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <img
                  src="/assets/images/kush-image.jpg" // Place your image in public/assets/profile.jpg
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-nature-leaf/20 animate-ping" style={{ animationDuration: '3s' }}></div>
            </div>
          </div>

          {/* Title with staggered animation */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span 
              className={`inline-block nature-text-gradient pb-4 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Growing
            </span>
            <br />
            <span 
              className={`inline-block text-slate-800 dark:text-slate-200 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Through Code
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4 mb-8 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Like nature's endless cycles of growth and renewal, I craft digital experiences that evolve, adapt, and flourish.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-32 transition-all duration-1000 delay-900 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="#education"
              className="w-full sm:w-auto group relative bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore My Journey
                <Mountain className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-2 border-nature-sage text-nature-forest dark:text-nature-sage hover:bg-nature-sage hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 text-center"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 cursor-pointer group ${mounted ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-emerald-500 transition-colors">Scroll</span>
            <div className="w-6 h-10 border-2 border-nature-sage group-hover:border-emerald-500 rounded-full flex justify-center transition-colors">
              <div className="w-1 h-3 bg-nature-sage group-hover:bg-emerald-500 rounded-full mt-2 animate-bounce transition-colors" />
            </div>
          </div>
        </button>
      </div>

      {/* Birds Animation */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none">
        <div className="animate-birds-fly">
          <svg width="60" height="20" viewBox="0 0 60 20" className="text-slate-600 dark:text-slate-400">
            <path d="M10,10 Q15,5 20,10 Q15,15 10,10 M25,8 Q30,3 35,8 Q30,13 25,8 M40,12 Q45,7 50,12 Q45,17 40,12" 
                  stroke="currentColor" 
                  fill="none" 
                  strokeWidth="1.5"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
