import { useEffect, useState, useRef, useMemo } from 'react';
import { 
  Code, Database, Leaf, 
  GitBranch as GithubIcon, Server, Terminal, GitBranch, Sparkles, Zap 
} from 'lucide-react';

// Pre-generate leaf positions to avoid re-render resets
const leafPositions = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 17 + 5) % 100}%`,
  top: `${(i * 23 + 10) % 100}%`,
  delay: `${i * 0.7}s`,
  duration: `${5 + (i % 4)}s`,
}));

// Skill data with proficiency levels
const skillsData = [
  { name: 'React/Next.js', icon: Code, url: 'https://react.dev/', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: Code, url: 'https://tailwindcss.com/', level: 95, category: 'Frontend' },
  { name: 'JavaScript', icon: Code, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', level: 88, category: 'Frontend' },
  { name: 'HTML5/CSS3', icon: Code, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', level: 92, category: 'Frontend' },
  { name: 'Node.js', icon: Server, url: 'https://nodejs.org/', level: 85, category: 'Backend' },
  { name: 'Python', icon: Server, url: 'https://python.org/', level: 80, category: 'Backend' },
  { name: 'REST APIs', icon: Server, url: 'https://restfulapi.net/', level: 87, category: 'Backend' },
  { name: 'MongoDB', icon: Database, url: 'https://mongodb.com/', level: 83, category: 'Backend' },
  { name: 'Git/GitHub', icon: GithubIcon, url: 'https://github.com/', level: 90, category: 'Tools' },
  { name: 'AWS', icon: Server, url: 'https://aws.amazon.com/', level: 75, category: 'Tools' },
  { name: 'CI/CD', icon: GitBranch, url: 'https://en.wikipedia.org/wiki/CI/CD', level: 78, category: 'Tools' },
  { name: 'Linux', icon: Terminal, url: 'https://kernel.org/', level: 82, category: 'Tools' },
];

const Skills = () => {
  const [inView, setInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const categories = ['All', 'Frontend', 'Backend', 'Tools'];
  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-slate-900 dark:via-emerald-950 dark:to-slate-900"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 dark:bg-green-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Floating leaves - using pre-generated positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {leafPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute animate-leaf-float"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: pos.delay,
              animationDuration: pos.duration,
            }}
          >
            <Leaf className="w-3 h-3 text-emerald-400/30 dark:text-emerald-400/20" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 animate-bounce">
            <Sparkles className="w-6 h-6 text-emerald-400" />
            <Zap className="w-6 h-6 text-green-400" />
          </div>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
              Technical Arsenal
            </span>
          </h2>
          <p className={`text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4 transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Mastering the tools that bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-700/50 border border-emerald-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            const isHovered = hoveredSkill === skill.name;
            
            return (
              <div
                key={skill.name}
                className={`group relative transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                  {/* Icon and Name */}
                  <div className="flex items-center gap-4 mb-4">
                    <a
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 transition-all duration-300 ${
                        isHovered ? 'scale-110 rotate-12' : ''
                      }`}>
                        <IconComponent className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
                      </div>
                    </a>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{skill.name}</h3>
                      <span className="text-sm text-emerald-600 dark:text-emerald-400">{skill.category}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Proficiency</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-1000 ease-out ${
                          inView ? 'w-full' : 'w-0'
                        }`}
                        style={{ 
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 500}ms`
                        }}
                      >
                        <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                      </div>
                    </div>
                  </div>

                  {/* Sparkle effect on hover */}
                  {isHovered && (
                    <>
                      <Sparkles className="absolute top-4 right-4 w-4 h-4 text-emerald-500 dark:text-emerald-400 animate-ping" />
                      <Sparkles className="absolute bottom-4 left-4 w-3 h-3 text-green-500 dark:text-green-400 animate-ping" style={{ animationDelay: '0.2s' }} />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500 dark:to-emerald-400" />
            <Leaf className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">Always Growing</span>
            <Leaf className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500 dark:to-emerald-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
