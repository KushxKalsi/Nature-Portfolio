
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      year: "2020 - 2024",
      location: "San Francisco, CA",
      description: "Specialized in Software Engineering and Data Structures. Graduated Magna Cum Laude with GPA 3.8/4.0"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Tech Academy",
      year: "2023",
      location: "Online",
      description: "Intensive 6-month program covering React, Node.js, MongoDB, and modern web development practices"
    },
    {
      degree: "High School Diploma",
      school: "Mountain View High School",
      year: "2016 - 2020",
      location: "Mountain View, CA",
      description: "Valedictorian with focus on STEM subjects and computer programming"
    }
  ];

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Mountain Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path d="M0 400L200 300L400 350L600 250L800 300L1000 200L1200 250V600H0V400Z" fill="url(#mountain-gradient)" />
          <path d="M0 450L150 380L300 420L450 350L600 400L750 320L900 360L1050 290L1200 320V600H0V450Z" fill="url(#mountain-gradient-2)" />
          <defs>
            <linearGradient id="mountain-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="mountain-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(74, 124, 89)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(74, 124, 89)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Forest Path */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-64 opacity-20">
        <div className="w-full h-full bg-gradient-to-t from-nature-earth to-transparent rounded-t-full transform perspective-1000 rotateX-60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold nature-text-gradient mb-6 animate-fade-in-up">
            Educational Journey
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Following the path of continuous learning and growth, like a tree reaching toward the sun
          </p>
        </div>

        <div className="relative">
          {/* Path Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-nature-leaf via-nature-sage to-nature-forest rounded-full opacity-30"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-1 md:pr-8 md:pl-8">
                  <Card className="nature-card group hover:shadow-xl transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-nature-sage/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="w-6 h-6 text-nature-forest" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                            {edu.degree}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.year}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                          <h4 className="font-semibold text-nature-forest dark:text-nature-sage mb-2">
                            {edu.school}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Path Node */}
                <div className="relative flex-shrink-0 w-8 h-8 bg-nature-leaf rounded-full border-4 border-white dark:border-slate-800 shadow-lg z-10 animate-scale-in" style={{ animationDelay: `${index * 200 + 100}ms` }}>
                  <div className="absolute inset-1 bg-nature-forest rounded-full animate-pulse"></div>
                </div>

                <div className="flex-1 md:pr-8 md:pl-8">
                  {/* Empty space for alternating layout */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
