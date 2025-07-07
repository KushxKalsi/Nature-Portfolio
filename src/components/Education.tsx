import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Chandigarh University",
      year: "2023 - 2025",
      location: "India, Punjab, Mohali",
      description: "Pursuing with a focus on Advanced Software Development, Artificial Intelligence and Robotics. Graduated with a CGPA of 8.1/10."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Sri Guru Gobind Singh College Chandigarh",
      year: "2020 - 2023",
      location: "India, Chandigarh",
      description: "Completed with a focus on Web Development and Database Management. Graduated with First Class Honors, with 77.54% aggregate."
    },
    {
      degree: "10 + 2 Non Medical (Science)",
      school: "Stepping Stones Senior Secondary School",
      year: "2019 - 2020",
      location: "India, Chandigarh",
      description: "Completed with a focus on Physics, Chemistry, and Mathematics. Achieved 65% in board examinations."
    },
    {
      degree: "10th Class",
      school: "Kendriya Vidyalaya Air Force Station High Grounds Chandigarh",
      year: "2016 - 2017",
      location: "India, Chandigarh",
      description: "Completed with a focus on Science, and Mathematics. Achieved 87.4% in examinations."
    }
  ];

  return (
    <section id="education" className="section-padding relative overflow-hidden bg-white dark:bg-slate-900">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Leaves */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-leaf-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <div className="w-3 h-5 bg-nature-leaf rounded-full transform rotate-45"></div>
          </div>
        ))}
        
        {/* Gentle hills background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 300" fill="none">
            <path d="M0 200L300 150L600 180L900 120L1200 160V300H0V200Z" fill="url(#hill-gradient)" />
            <defs>
              <linearGradient id="hill-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold nature-text-gradient mb-6 animate-fade-in-up">
            Educational Journey
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-fade-in-up px-4">
            Growing through knowledge, like rings in a tree, each experience adding depth and strength
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="w-full animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="nature-card bg-white group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 mx-4 md:mx-0">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="p-3 bg-nature-leaf/20 rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-nature-forest" />
                    </div>
                    <div className="flex-1 w-full">
                      <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-nature-forest dark:group-hover:text-nature-sage transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-nature-sage flex-shrink-0" />
                          <span>{edu.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4 text-nature-sage flex-shrink-0" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-nature-forest dark:text-nature-sage mb-2 text-sm md:text-base">
                        {edu.school}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
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

export default Education;
