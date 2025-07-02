
import { User, Heart, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Deeply passionate about creating meaningful digital experiences that make a difference"
    },
    {
      icon: Target,
      title: "Purpose",
      description: "Focused on building solutions that solve real problems and add genuine value"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative approaches to development"
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50 to-green-50/20 dark:from-slate-900 dark:to-slate-800/50">
      {/* Animated Tree Growth */}
      <div className="absolute left-10 top-20 opacity-20 animate-tree-grow">
        <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
          {/* Tree trunk */}
          <rect x="55" y="140" width="10" height="60" fill="url(#trunk-gradient)" rx="5" />
          
          {/* Tree rings/growth circles */}
          <circle cx="60" cy="120" r="25" fill="none" stroke="url(#growth-gradient)" strokeWidth="2" opacity="0.6" />
          <circle cx="60" cy="120" r="35" fill="none" stroke="url(#growth-gradient)" strokeWidth="1.5" opacity="0.4" />
          <circle cx="60" cy="120" r="45" fill="none" stroke="url(#growth-gradient)" strokeWidth="1" opacity="0.2" />
          
          {/* Foliage */}
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

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-leaf-float opacity-10"
            style={{
              right: `${Math.random() * 30}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          >
            <div className="w-3 h-5 bg-nature-leaf rounded-full transform rotate-12"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold nature-text-gradient mb-6 animate-fade-in-up">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Like a tree that grows stronger with each season, I continuously evolve as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6 animate-fade-in-up animation-delay-300">
            <Card className="nature-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-nature-sage/20 rounded-full">
                    <User className="w-6 h-6 text-nature-forest" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                      My Journey
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  <p>
                    I'm a passionate full-stack developer who believes that great software grows from understanding 
                    both the technical landscape and human needs. Like a gardener tending to their plants, I nurture 
                    each project from conception to bloom.
                  </p>
                  <p>
                    My journey in technology began with curiosity and has evolved into a deep commitment to creating 
                    digital experiences that are not only functional but also meaningful. I find inspiration in nature's 
                    patterns and apply those principles to build robust, scalable solutions.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring hiking trails, reading about sustainable technology, 
                    or experimenting with new frameworks. I believe that the best developers, like the strongest trees, 
                    have deep roots and flexible branches.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values & Principles */}
          <div className="space-y-6 animate-fade-in-up animation-delay-500">
            <h3 className="text-2xl font-bold nature-text-gradient mb-8 text-center lg:text-left">
              Core Values
            </h3>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="nature-card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${600 + index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-nature-leaf/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-5 h-5 text-nature-forest" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-nature-forest dark:group-hover:text-nature-sage transition-colors duration-300">
                          {value.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Personal Quote */}
            <div className="mt-8 p-6 bg-gradient-to-r from-nature-sage/10 to-nature-leaf/10 rounded-2xl border border-nature-sage/20">
              <blockquote className="text-lg italic text-nature-forest dark:text-nature-sage text-center">
                "Code is like a seed - with the right environment, care, and patience, 
                it can grow into something that changes the world."
              </blockquote>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-3">
                - My Development Philosophy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
