import { useEffect, useState } from 'react';
import { Award, ExternalLink, Calendar, Sparkles, Trophy } from 'lucide-react';
import { Card, CardContent } from './ui/card';

// Pre-generated positions for floating awards
const awardPositions = Array.from({ length: 8 }, (_, i) => ({
  left: `${10 + (i * 12) % 80}%`,
  top: `${10 + (i * 15) % 80}%`,
  delay: `${i * 0.8}s`,
  duration: `${6 + (i % 3)}s`,
}));

const Certifications = () => {
  const [inView, setInView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('certifications');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      name: "Google Cloud Gen AI Developer",
      issuer: "Google Cloud",
      date: "2024",
      description: "Expertise in building and deploying generative AI applications on Google Cloud with streamlit",
      verifyUrl: "/assets/Google Cloud Gen AI.pdf",
      color: "from-blue-400 to-cyan-500",
      bgGlow: "bg-blue-500/20"
    },
    {
      name: "Infosys Learning React js",
      issuer: "Infosys",
      date: "2023",
      description: "React.js fundamentals and advanced concepts including state management and component lifecycle",
      verifyUrl: "/assets/Kush React JS Certificate.pdf",
      color: "from-emerald-400 to-green-500",
      bgGlow: "bg-emerald-500/20"
    },
    {
      name: "Codsoft Data Science",
      issuer: "Codsoft",
      date: "2024",
      description: "Advanced React development skills including hooks, context, and performance optimization",
      verifyUrl: "/assets/Codsoft.pdf",
      color: "from-purple-400 to-pink-500",
      bgGlow: "bg-purple-500/20"
    }
  ];

  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-gradient-to-b from-green-50/30 to-slate-50 dark:from-slate-800 dark:to-slate-900">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-400/5 dark:bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/5 dark:bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      {/* Floating Certification Badges - stable positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {awardPositions.map((pos, i) => (
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
            <Award className="w-6 h-6 text-nature-sage" />
          </div>
        ))}
      </div>

      {/* Background vines */}
      <div className="absolute right-0 top-0 w-64 h-full opacity-10 dark:opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 200 800" fill="none">
          <path d="M50 0Q100 50 50 100T50 200Q100 250 50 300T50 400Q100 450 50 500T50 600Q100 650 50 700T50 800" 
                stroke="url(#vine-gradient)" strokeWidth="8" fill="none" className="animate-pulse" style={{ animationDuration: '4s' }} />
          <defs>
            <linearGradient id="vine-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 197, 94)" />
              <stop offset="50%" stopColor="rgb(74, 124, 89)" />
              <stop offset="100%" stopColor="rgb(45, 80, 22)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Trophy className="w-5 h-5 text-amber-500 animate-pulse" />
            <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold nature-text-gradient mb-6 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Certifications & Achievements
          </h2>
          <p className={`text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Professional milestones that mark growth and expertise, like badges earned on nature's trails
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 ${cert.bgGlow} rounded-2xl blur-xl opacity-0 transition-opacity duration-500 -z-10 ${
                hoveredIndex === index ? 'opacity-100' : ''
              }`} />

              <Card className={`nature-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 group transition-all duration-500 h-full ${
                hoveredIndex === index ? 'border-emerald-500/40 shadow-2xl shadow-emerald-500/10 -translate-y-2' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} transition-all duration-500 ${
                      hoveredIndex === index ? 'scale-110 rotate-6' : ''
                    }`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                        {cert.name}
                      </h3>
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-1">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400 mb-3">
                        <Calendar className="w-3 h-3 text-emerald-500" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    {hoveredIndex === index && (
                      <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                    )}
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-end">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-lg text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Show Certificate
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
