
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
    <section id="certifications" className="section-padding relative overflow-hidden bg-gradient-to-b from-green-50/30 to-blue-50/30 dark:from-slate-800/30 dark:to-slate-900/30">
      {/* Animated Tree */}
      <div className="absolute right-10 top-20 opacity-20 animate-gentle-sway">
        <svg width="200" height="300" viewBox="0 0 200 300" fill="none">
          {/* Tree trunk */}
          <rect x="90" y="200" width="20" height="100" fill="url(#trunk-gradient)" rx="10" />
          
          {/* Tree foliage */}
          <circle cx="100" cy="180" r="50" fill="url(#foliage-gradient)" />
          <circle cx="80" cy="160" r="35" fill="url(#foliage-gradient-2)" />
          <circle cx="120" cy="160" r="35" fill="url(#foliage-gradient-2)" />
          <circle cx="100" cy="140" r="30" fill="url(#foliage-gradient-3)" />
          
          {/* Certificate leaves */}
          {certifications.slice(0, 6).map((_, index) => {
            const angle = (index * 60) * Math.PI / 180;
            const radius = 60 + (index % 2) * 15;
            const x = 100 + Math.cos(angle) * radius;
            const y = 170 + Math.sin(angle) * radius;
            
            return (
              <g key={index}>
                <ellipse 
                  cx={x} 
                  cy={y} 
                  rx="8" 
                  ry="12" 
                  fill="url(#leaf-gradient)"
                  className="animate-leaf-float cursor-pointer hover:scale-125 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
                <circle 
                  cx={x} 
                  cy={y} 
                  r="3" 
                  fill="rgba(255,215,0,0.8)"
                  className="animate-pulse"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
              </g>
            );
          })}
          
          <defs>
            <linearGradient id="trunk-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="100%" stopColor="#654321" />
            </linearGradient>
            <radialGradient id="foliage-gradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#87A96B" />
              <stop offset="100%" stopColor="#4A7C59" />
            </radialGradient>
            <radialGradient id="foliage-gradient-2" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#4A7C59" />
              <stop offset="100%" stopColor="#2D5016" />
            </radialGradient>
            <radialGradient id="foliage-gradient-3" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#87A96B" />
              <stop offset="100%" stopColor="#4A7C59" />
            </radialGradient>
            <linearGradient id="leaf-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#87A96B" />
              <stop offset="50%" stopColor="#4A7C59" />
              <stop offset="100%" stopColor="#2D5016" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold nature-text-gradient mb-6 animate-fade-in-up">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Like leaves on a tree, each certification represents growth and mastery in different areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="nature-card group hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-nature-forest dark:group-hover:text-nature-sage transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-sm font-medium text-nature-forest dark:text-nature-sage mb-1">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <Calendar className="w-3 h-3" />
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
                    className="hover:bg-nature-sage/10 hover:border-nature-sage transition-colors duration-300"
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
