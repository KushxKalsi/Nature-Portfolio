
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
    <section id="skills" className="section-padding bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold nature-text-gradient mb-4">
            Growing Skills
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Like rings in a tree, each skill represents years of growth and learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="nature-card p-8">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-nature-leaf font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      {/* Vine growth container */}
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
                        
                        {/* Leaf at the end of vine */}
                        <div 
                          className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out ${
                            inView ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{ 
                            left: inView ? `calc(${skill.level}% - 8px)` : '0%',
                            animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1 + 0.5}s`
                          }}
                        >
                          <Leaf className="w-4 h-4 text-nature-forest animate-gentle-sway" />
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
