import { Download, FileText, Star } from 'lucide-react';
import { Button } from './ui/button';

const Resume = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf'; // You'll need to add your resume file to public/assets/
    link.download = 'Kush_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Document icons floating */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-leaf-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          >
            <FileText className="w-6 h-6 md:w-8 md:h-8 text-nature-forest transform rotate-12" />
          </div>
        ))}
        
        {/* Gentle wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 200" fill="none">
            <path d="M0 120L300 100L600 130L900 90L1200 110V200H0V120Z" fill="url(#resume-gradient)" />
            <defs>
              <linearGradient id="resume-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="nature-card p-8 md:p-12 bg-white/80 backdrop-blur-sm">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-nature-leaf/20 rounded-full">
                <FileText className="w-12 h-12 md:w-16 md:h-16 text-nature-forest" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold nature-text-gradient mb-4 animate-fade-in-up">
              Get My Resume
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in-up">
              Download my complete professional resume to learn more about my experience, skills, and accomplishments
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleDownload}
              className="w-full sm:w-auto group bg-nature-leaf hover:bg-nature-forest text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <div className="flex items-center gap-2 text-nature-forest dark:text-nature-sage">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Always up-to-date</span>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-nature-sage/20">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;