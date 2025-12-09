import { useState, useEffect } from 'react';
import { Mountain, Leaf, ExternalLink, Github, Sparkles, Code2 } from 'lucide-react';

// Pre-generated positions for background elements
const bgElementPositions = [
  { left: '5%', top: '10%', delay: '0s' },
  { right: '10%', top: '15%', delay: '2s' },
  { left: '15%', bottom: '20%', delay: '4s' },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'AI Learning Assistant',
      description: 'An interactive AI-powered learning platform that helps users explore topics, generate learning roadmaps, get detailed explanations, and test their knowledge through quizzes.',
      tech: ['Python', 'Flask', 'Cursor AI', 'Html & CSS', 'JavaScript'],
      image: 'assets/images/ai-learning-assitstant.png',
      icon: <Code2 className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-emerald-400 to-green-600',
      bgGlow: 'bg-emerald-500/20',
      liveUrl: 'https://ai-learning-assistant-b4er.onrender.com/',
      codeUrl: 'https://github.com/KushxKalsi/Ai-Learning-Assistant'
    },
    {
      title: 'Birds Image Classification Model',
      description: 'Image Classification Model using CNN to classify different birds species. This model is trained on a dataset of bird images and can accurately identify various species based on their visual features.',
      tech: ['Python', 'Deep Learning', 'CNN', 'TensorFlow'],
      image: 'assets/images/Bird Image Classification using CNN.png',
      icon: <Mountain className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-blue-400 to-cyan-600',
      bgGlow: 'bg-blue-500/20',
      liveUrl: 'https://birds-image-classification-model-3gtmbjda9chcmmhphcb3nk.streamlit.app/',
      codeUrl: 'https://github.com/KushxKalsi/Birds-Image-Classification-Model'
    },
    {
      title: 'IFit - Step Counter App',
      description: 'A step counter app, which helps its users stay healthy and fight the climate change. It tracks the steps taken by the user and tree grows in app as a reward. The points can be used to plant trees in real life.',
      tech: ['Kotlin', 'Android', 'Sqlite', 'Java', 'XML', 'Material Design'],
      image: 'assets/images/IFit.jpg',
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-teal-400 to-emerald-600',
      bgGlow: 'bg-teal-500/20',
      liveUrl: 'https://github.com/KushxKalsi/IFit',
      codeUrl: 'https://github.com/KushxKalsi/IFit'
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50 via-green-50/30 to-emerald-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-400/10 dark:bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 dark:bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      {/* Animated background elements - stable positions */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
        <div className="absolute top-10 left-4 md:left-10 animate-leaf-float" style={{ animationDelay: '0s' }}>
          <Leaf className="w-12 h-12 md:w-16 md:h-16 text-nature-leaf" />
        </div>
        <div className="absolute top-20 right-4 md:right-20 animate-leaf-float" style={{ animationDelay: '2s' }}>
          <Mountain className="w-16 h-16 md:w-20 md:h-20 text-nature-earth" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-leaf-float" style={{ animationDelay: '4s' }}>
          <Sparkles className="w-10 h-10 text-emerald-400" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className={`inline-flex items-center gap-2 mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" />
            <Code2 className="w-5 h-5 text-green-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold nature-text-gradient pb-5 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Digital Ecosystems
          </h2>
          <p className={`text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Each project is like a unique habitat, carefully crafted to solve real-world problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 ${project.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              
              <div className="nature-card overflow-hidden h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 group-hover:border-emerald-500/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-emerald-500/10 group-hover:-translate-y-3">
                {/* Project Image */}
                <div className="relative overflow-hidden h-40 md:h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                  />
                  
                  {/* Overlay with icon */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center`}>
                    <div className="text-white transform scale-0 group-hover:scale-100 group-hover:rotate-12 transition-all duration-500">
                      {project.icon}
                    </div>
                  </div>

                  {/* Floating particles on hover */}
                  {hoveredProject === index && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {Array.from({ length: 6 }, (_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-white/60 rounded-full animate-float-particle"
                          style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                            animationDelay: `${i * 0.15}s`,
                            animationDuration: '2s',
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Corner badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-xs font-medium text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Featured
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 md:px-3 md:py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs md:text-sm rounded-full font-medium transition-all duration-300 ${
                          hoveredProject === index ? 'scale-105' : ''
                        }`}
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white py-2 px-3 md:px-4 rounded-lg transition-all duration-300 font-medium text-sm md:text-base text-center flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/30"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-emerald-500/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white py-2 px-3 md:px-4 rounded-lg transition-all duration-300 font-medium text-sm md:text-base text-center flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.color} transition-all duration-500 ${
                  hoveredProject === index ? 'w-full' : 'w-0'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
