
import { useEffect, useState } from 'react';
import { Leaf, Mountain } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-sky-gradient opacity-20"></div>
      
      {/* Floating Leaves */}
      {mounted && [...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-leaf-float opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        >
          <Leaf className="w-8 h-8 text-nature-leaf transform rotate-12" />
        </div>
      ))}

      {/* Mountain Silhouettes */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 300" className="w-full h-auto">
          <path
            d="M0,300 L0,150 L200,80 L400,120 L600,60 L800,100 L1000,40 L1200,80 L1200,300 Z"
            fill="url(#mountainGradient)"
            className="opacity-60"
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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="nature-text-gradient">Growing</span>
            <br />
            <span className="text-slate-800 dark:text-slate-200">Through Code</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Like nature's endless cycles of growth and renewal, I craft digital experiences that evolve, adapt, and flourish.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-nature-leaf hover:bg-nature-forest text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="flex items-center gap-2">
                Explore My Journey
                <Mountain className="w-5 h-5 group-hover:animate-bounce" />
              </span>
            </button>
            
            <button className="bg-transparent border-2 border-nature-sage text-nature-forest dark:text-nature-sage hover:bg-nature-sage hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
              View Projects
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-nature-sage rounded-full flex justify-center">
            <div className="w-1 h-3 bg-nature-sage rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Birds Animation */}
      <div className="absolute top-20 left-0 w-full overflow-hidden">
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
