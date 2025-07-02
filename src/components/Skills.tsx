
import { useEffect, useState } from 'react';
import { Code, Database, Settings, Leaf } from 'lucide-react';

const Skills = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'React/Next.js',
        'TypeScript', 
        'Tailwind CSS',
        'JavaScript',
        'HTML5/CSS3',
        'Vue.js'
      ],
      icon: Code,
      color: 'from-green-400 to-emerald-600'
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js',
        'Python',
        'PostgreSQL',
        'REST APIs',
        'MongoDB',
        'Express.js'
      ],
      icon: Database,
      color: 'from-teal-400 to-green-600'
    },
    {
      title: 'Tools & DevOps',
      skills: [
        'Git/GitHub',
        'Docker',
        'AWS',
        'CI/CD',
        'Linux',
        'Kubernetes'
      ],
      icon: Settings,
      color: 'from-emerald-400 to-teal-600'
    }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      {/* Animated forest background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-leaf-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <Leaf className="w-4 h-4 text-nature-leaf" />
          </div>
        ))}

        {/* Background trees */}
        <div className="absolute right-0 bottom-0 w-64 h-64 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="80" r="40" fill="rgb(34, 197, 94)" />
            <rect x="95" y="120" width="10" height="80" fill="rgb(101, 67, 33)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold nature-text-gradient mb-4">
            Growing Skills
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
            Like a diverse forest ecosystem, each skill contributes to the whole
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="nature-card p-6 md:p-8 group hover:shadow-2xl transition-all duration-500">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className={`bg-white/50 dark:bg-slate-700/50 rounded-lg p-3 text-center border border-nature-sage/20 hover:border-nature-leaf/40 transition-all duration-300 hover:scale-105 hover:shadow-md ${
                        inView ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                      style={{ 
                        animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                      }}
                    >
                      <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">
                        {skill}
                      </span>
                      <div className="mt-2 flex justify-center">
                        <Leaf className="w-3 h-3 md:w-4 md:h-4 text-nature-leaf animate-gentle-sway" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
