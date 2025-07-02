
import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

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
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'JavaScript', level: 92 }
      ],
      icon: '🌱'
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'REST APIs', level: 85 }
      ],
      icon: '🌳'
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'CI/CD', level: 72 }
      ],
      icon: '🍃'
    }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      {/* Animated forest background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
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
            <div className="w-2 h-3 bg-nature-leaf rounded-full"></div>
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
            Like rings in a tree, each skill represents years of growth and learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="nature-card p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="text-3xl md:text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4 md:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm md:text-base text-nature-leaf font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-2 md:h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="relative h-full">
                        <div 
                          className={`h-full bg-gradient-to-r from-nature-sage to-nature-leaf rounded-full transition-all duration-1000 ease-out ${
                            inView ? 'animate-vine-grow' : 'w-0'
                          }`}
                          style={{ 
                            width: inView ? `${skill.level}%` : '0%',
                            animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                          }}
                        />
                        
                        <div 
                          className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out ${
                            inView ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{ 
                            left: inView ? `calc(${skill.level}% - 8px)` : '0%',
                            animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1 + 0.5}s`
                          }}
                        >
                          <Leaf className="w-3 h-3 md:w-4 md:h-4 text-nature-forest animate-gentle-sway" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
