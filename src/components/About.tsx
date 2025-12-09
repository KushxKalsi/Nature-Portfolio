import { useEffect, useState } from 'react';
import { User, Heart, Target, Lightbulb, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

// Pre-generated positions for floating elements
const floatingPositions = Array.from({ length: 8 }, (_, i) => ({
  right: `${(i * 12 + 5) % 35}%`,
  top: `${20 + (i * 15) % 60}%`,
  delay: `${i * 1.2}s`,
  duration: `${5 + (i % 3)}s`,
}));

const About = () => {
  const [inView, setInView] = useState(false);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Deeply passionate about creating meaningful digital experiences that make a difference",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: Target,
      title: "Purpose",
      description: "Focused on building solutions that solve real problems and add genuine value",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative approaches to development",
      color: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50 to-green-50/20 dark:from-slate-900 dark:to-slate-800/50">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-400/10 dark:bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-400/10 dark:bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      </div>

      {/* Animated Tree Growth */}
      <div className="absolute left-10 top-20 opacity-20 dark:opacity-10">
        <svg width="120" height="200" viewBox="0 0 120 200" fill="none" className="animate-pulse" style={{ animationDuration: '4s' }}>
          <rect x="55" y="140" width="10" height="60" fill="url(#trunk-gradient)" rx="5" />
          <circle cx="60" cy="120" r="25" fill="none" stroke="url(#growth-gradient)" strokeWidth="2" opacity="0.6" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="60" cy="120" r="35" fill="none" stroke="url(#growth-gradient)" strokeWidth="1.5" opacity="0.4" />
          <circle cx="60" cy="120" r="45" fill="none" stroke="url(#growth-gradient)" strokeWidth="1" opacity="0.2" />
          <circle cx="60" cy="120" r="30" fill="url(#foliage-gradient)" opacity="0.8" />
          <defs>
            <linearGradient id="trunk-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="100%" stopColor="#654321" />
            </linearGradient>
            <linearGradient id="growth-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 197, 94)" />
              <stop offset="100%" stopColor="rgb(74, 124, 89)" />
            </linearGradient>
            <radialGradient id="foliage-gradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgb(135, 169, 107)" />
              <stop offset="100%" stopColor="rgb(74, 124, 89)" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Elements - stable positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute animate-leaf-float opacity-10 dark:opacity-5"
            style={{
              right: pos.right,
              top: pos.top,
              animationDelay: pos.delay,
              animationDuration: pos.duration,
            }}
          >
            <div className="w-3 h-5 bg-nature-leaf rounded-full transform rotate-12" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" />
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold nature-text-gradient mb-6 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Me
          </h2>
          <p className={`text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Like a tree that grows stronger with each season, I continuously evolve as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <Card className="nature-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full group-hover:scale-110 transition-transform duration-500">
                    <User className="w-6 h-6 text-nature-forest" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                      My Journey
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  <p className="leading-relaxed">
                    I'm a passionate full-stack developer who believes that great software grows from understanding 
                    both the technical landscape and human needs. Like a gardener tending to their plants, I nurture 
                    each project from conception to bloom.
                  </p>
                  <p className="leading-relaxed">
                    My journey in technology began with curiosity and has evolved into a deep commitment to creating 
                    digital experiences that are not only functional but also meaningful. I find inspiration in nature's 
                    patterns and apply those principles to build robust, scalable solutions.
                  </p>
                  <p className="leading-relaxed">
                    When I'm not coding, you'll find me exploring hiking trails, reading about sustainable technology, 
                    or experimenting with new frameworks. I believe that the best developers, like the strongest trees, 
                    have deep roots and flexible branches.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values & Principles */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <h3 className="text-2xl font-bold nature-text-gradient mb-8 text-center lg:text-left">
              Core Values
            </h3>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className={`nature-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group hover:shadow-xl transition-all duration-500 cursor-pointer ${
                    hoveredValue === index ? 'scale-[1.02] -translate-y-1' : ''
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${value.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                        <value.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-nature-forest dark:group-hover:text-nature-sage transition-colors duration-300">
                          {value.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {value.description}
                        </p>
                      </div>
                      {hoveredValue === index && (
                        <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Personal Quote */}
            <div className={`mt-8 p-6 bg-gradient-to-r from-nature-sage/10 to-nature-leaf/10 rounded-2xl border border-nature-sage/20 relative overflow-hidden transition-all duration-700 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="absolute top-2 left-2 text-6xl text-emerald-400/10 font-serif">"</div>
              <blockquote className="text-lg italic text-nature-forest dark:text-nature-sage text-center relative z-10">
                Code is like a seed - with the right environment, care, and patience, 
                it can grow into something that changes the world.
              </blockquote>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-3">
                - My Development Philosophy
              </p>
              <div className="absolute bottom-2 right-2 text-6xl text-emerald-400/10 font-serif rotate-180">"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
