import { useEffect, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { Card, CardContent } from './ui/card';

// Pre-generated leaf positions
const leafPositions = Array.from({ length: 10 }, (_, i) => ({
  left: `${(i * 13 + 5) % 100}%`,
  top: `${(i * 17 + 10) % 100}%`,
  delay: `${i * 0.5}s`,
  duration: `${4 + (i % 3)}s`,
}));

const Education = () => {
  const [inView, setInView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('education');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Chandigarh University",
      year: "2023 - 2025",
      location: "India, Punjab, Mohali",
      description: "Pursuing with a focus on Advanced Software Development, Artificial Intelligence and Robotics. Graduated with a CGPA of 8.1/10.",
      color: "from-emerald-400 to-green-500"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Sri Guru Gobind Singh College Chandigarh",
      year: "2020 - 2023",
      location: "India, Chandigarh",
      description: "Completed with a focus on Web Development and Database Management. Graduated with First Class Honors, with 77.54% aggregate.",
      color: "from-teal-400 to-emerald-500"
    },
    {
      degree: "10 + 2 Non Medical (Science)",
      school: "Stepping Stones Senior Secondary School",
      year: "2019 - 2020",
      location: "India, Chandigarh",
      description: "Completed with a focus on Physics, Chemistry, and Mathematics. Achieved 65% in board examinations.",
      color: "from-green-400 to-teal-500"
    },
    {
      degree: "10th Class",
      school: "Kendriya Vidyalaya Air Force Station High Grounds Chandigarh",
      year: "2016 - 2017",
      location: "India, Chandigarh",
      description: "Completed with a focus on Science, and Mathematics. Achieved 87.4% in examinations.",
      color: "from-cyan-400 to-green-500"
    }
  ];

  return (
    <section id="education" className="section-padding relative overflow-hidden bg-white dark:bg-slate-900">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-emerald-400/5 dark:bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-400/5 dark:bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      {/* Floating Leaves - stable positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {leafPositions.map((pos, i) => (
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
            <div className="w-3 h-5 bg-nature-leaf rounded-full transform rotate-45" />
          </div>
        ))}
      </div>
      
      {/* Gentle hills background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10 dark:opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 300" fill="none" preserveAspectRatio="none">
          <path d="M0 200L300 150L600 180L900 120L1200 160V300H0V200Z" fill="url(#hill-gradient)" />
          <defs>
            <linearGradient id="hill-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <BookOpen className="w-5 h-5 text-emerald-500 animate-pulse" />
            <Sparkles className="w-5 h-5 text-green-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold nature-text-gradient pb-5 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Educational Journey
          </h2>
          <p className={`text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Growing through knowledge, like rings in a tree, each experience adding depth and strength
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-green-400 to-teal-400 opacity-30" />

          <div className="space-y-6 md:space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative pl-12 md:pl-20 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline dot */}
                <div className={`absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-r ${edu.color} transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-150 shadow-lg' : ''
                }`}>
                  <div className="absolute inset-0 rounded-full bg-white dark:bg-slate-900 scale-50" />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${edu.color} scale-[0.3]`} />
                </div>

                <Card className={`nature-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 group transition-all duration-500 ${
                  hoveredIndex === index ? 'border-emerald-500/40 shadow-xl shadow-emerald-500/10 -translate-y-1' : ''
                }`}>
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${edu.color} transition-all duration-500 flex-shrink-0 ${
                        hoveredIndex === index ? 'scale-110 rotate-6' : ''
                      }`}>
                        <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1 w-full">
                        <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 text-sm text-slate-600 dark:text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span>{edu.year}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2 text-sm md:text-base">
                          {edu.school}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                      {hoveredIndex === index && (
                        <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse hidden sm:block" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
