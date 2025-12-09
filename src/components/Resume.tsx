import { useEffect, useState } from 'react';
import { Download, FileText, Star, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

// Pre-generated positions for floating documents
const docPositions = Array.from({ length: 6 }, (_, i) => ({
  left: `${(i * 18 + 5) % 100}%`,
  top: `${(i * 20 + 10) % 100}%`,
  delay: `${i * 0.7}s`,
  duration: `${5 + (i % 3)}s`,
}));

const Resume = () => {
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('resume');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Kush_Resume_Copy_A.pdf';
    link.download = 'Kush_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    'Complete work history',
    'Technical skills overview',
    'Project highlights',
    'Education details',
  ];

  return (
    <section id="resume" className="section-padding relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-400/10 dark:bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 dark:bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      </div>

      {/* Floating Documents - stable positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {docPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute animate-leaf-float opacity-10 dark:opacity-5"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: pos.delay,
              animationDuration: pos.duration,
            }}
          >
            <FileText className="w-6 h-6 md:w-8 md:h-8 text-nature-forest transform rotate-12" />
          </div>
        ))}
      </div>
      
      {/* Gentle wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20 dark:opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 200" fill="none" preserveAspectRatio="none">
          <path className="animate-wave" d="M0 120L300 100L600 130L900 90L1200 110V200H0V120Z" fill="url(#resume-gradient)" />
          <defs>
            <linearGradient id="resume-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <div 
          className={`nature-card p-8 md:p-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-emerald-500/10 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          } ${isHovered ? 'border-emerald-500/30 shadow-2xl shadow-emerald-500/10' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="mb-8">
            {/* Icon with animation */}
            <div className={`flex justify-center mb-6 transition-all duration-500 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <div className="relative">
                <div className={`p-4 md:p-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl transition-all duration-500 ${
                  isHovered ? 'scale-110 rotate-6' : ''
                }`}>
                  <FileText className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
                {/* Orbiting sparkle */}
                <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '6s' }}>
                  <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-amber-400" />
                </div>
              </div>
            </div>
            
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold nature-text-gradient mb-4 transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Get My Resume
            </h2>
            
            <p className={`text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Download my complete professional resume to learn more about my experience, skills, and accomplishments
            </p>

            {/* Features list */}
            <div className={`grid grid-cols-2 gap-3 max-w-md mx-auto mb-8 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button
              onClick={handleDownload}
              className="w-full sm:w-auto group bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 rounded-xl"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <Star className="w-4 h-4 fill-current animate-pulse" />
              <span className="text-sm font-medium">Always up-to-date</span>
            </div>
          </div>

          <div className={`mt-8 pt-8 border-t border-emerald-500/20 transition-all duration-700 delay-500 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Last updated: 24-07-2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;