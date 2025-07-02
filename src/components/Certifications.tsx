
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-ASA-2024-001",
      description: "Demonstrated expertise in designing distributed systems on AWS platform",
      verifyUrl: "#"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-2023-042",
      description: "Proficient in developing scalable applications on Google Cloud Platform",
      verifyUrl: "#"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2023",
      credentialId: "META-REACT-2023-118",
      description: "Advanced React development skills including hooks, context, and performance optimization",
      verifyUrl: "#"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MONGO-DEV-2022-287",
      description: "Expert-level knowledge of MongoDB database design and operations",
      verifyUrl: "#"
    },
    {
      name: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2022",
      credentialId: "DOCKER-CA-2022-156",
      description: "Containerization and orchestration expertise with Docker and Kubernetes",
      verifyUrl: "#"
    },
    {
      name: "Scrum Master Certification",
      issuer: "Scrum Alliance",
      date: "2021",
      credentialId: "CSM-2021-789",
      description: "Agile project management and team leadership certification",
      verifyUrl: "#"
    }
  ];

  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-gradient-to-b from-green-50/30 to-slate-50 dark:from-slate-800 dark:to-slate-900">
      {/* Floating Certification Badges */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Certificate leaves floating */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-leaf-float opacity-15"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + Math.random() * 2}s`
            }}
          >
            <Award className="w-6 h-6 text-nature-sage" />
          </div>
        ))}

        {/* Background vines */}
        <div className="absolute right-0 top-0 w-64 h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 200 800" fill="none">
            <path d="M50 0Q100 50 50 100T50 200Q100 250 50 300T50 400Q100 450 50 500T50 600Q100 650 50 700T50 800" 
                  stroke="url(#vine-gradient)" strokeWidth="8" fill="none" />
            <defs>
              <linearGradient id="vine-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(34, 197, 94)" />
                <stop offset="50%" stopColor="rgb(74, 124, 89)" />
                <stop offset="100%" stopColor="rgb(45, 80, 22)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold nature-text-gradient mb-6 animate-fade-in-up">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Professional milestones that mark growth and expertise, like badges earned on nature's trails
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="nature-card group hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-nature-sage/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-nature-forest group-hover:text-nature-leaf transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-nature-forest dark:group-hover:text-nature-sage transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-sm font-medium text-nature-forest dark:text-nature-sage mb-1">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <Calendar className="w-3 h-3 text-nature-sage" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    ID: {cert.credentialId}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-nature-sage/10 hover:border-nature-sage hover:text-nature-forest transition-colors duration-300"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Verify
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
