import { useState } from 'react';
import { Mountain, Leaf, TreePine } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'AI Learning Assistant',
      description: 'An interactive AI-powered learning platform that helps users explore topics, generate learning roadmaps, get detailed explanations, and test their knowledge through quizzes.',
      tech: ['Python', 'Flask', 'Cursor AI', 'Html & CSS', 'JavaScript'],
      image: 'assets/images/ai-learning-assitstant.png',
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-green-400 to-green-600',
      liveUrl: 'https://ai-learning-assistant-b4er.onrender.com/',
      codeUrl: 'https://github.com/KushxKalsi/Ai-Learning-Assistant'
    },
    {
      title: 'Birds Image Classification Model',
      description: 'Image Classification Model using CNN to classify different birds species. This model is trained on a dataset of bird images and can accurately identify various species based on their visual features.',
      tech: ['Python', 'Deep Learning', 'CNN', 'TensorFlow'],
      image: 'assets/images/Bird Image Classification using CNN.png',
      icon: <Mountain className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-blue-400 to-blue-600',
      liveUrl: 'https://birds-image-classification-model-3gtmbjda9chcmmhphcb3nk.streamlit.app/',
      codeUrl: 'https://github.com/KushxKalsi/Birds-Image-Classification-Model'
    },
    {
      title: 'IFit - Step Counter App',
      description: 'A step counter app, which helps its users stay healthy and fight the climate change. It tracks the steps taken by the user and tree grows in app as a reward. The points can be used to plant trees in real life.',
      tech: ['Kotlin', 'Android', 'Sqlite', 'Java', 'XML', 'Material Design'],
      image: 'assets/images/IFit.jpg',
      icon: <Mountain className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-blue-400 to-blue-600',
      liveUrl: 'https://github.com/KushxKalsi/IFit',
      codeUrl: 'https://github.com/KushxKalsi/IFit'
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50 via-green-50/30 to-emerald-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-4 md:left-10 animate-leaf-float">
          <Leaf className="w-12 h-12 md:w-16 md:h-16 text-nature-leaf" />
        </div>
        <div className="absolute top-20 right-4 md:right-20 animate-leaf-float" style={{ animationDelay: '2s' }}>
          <Mountain className="w-16 h-16 md:w-20 md:h-20 text-nature-earth" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold nature-text-gradient mb-4">
            Digital Ecosystems
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
            Each project is like a unique habitat, carefully crafted to solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="nature-card overflow-hidden h-full transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative overflow-hidden h-40 md:h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay with icon */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center`}>
                    <div className="text-white transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      {project.icon}
                    </div>
                  </div>

                  {/* Floating leaves on hover */}
                  {hoveredProject === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute animate-leaf-float"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${10 + i * 20}%`,
                            animationDelay: `${i * 0.2}s`
                          }}
                        >
                          <Leaf className="w-3 h-3 md:w-4 md:h-4 text-white/70" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-nature-leaf transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 md:px-3 md:py-1 bg-nature-sage/20 text-nature-forest text-xs md:text-sm rounded-full font-medium"
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
                      className="flex-1 bg-nature-leaf hover:bg-nature-forest text-white py-2 px-3 md:px-4 rounded-lg transition-colors duration-300 font-medium text-sm md:text-base text-center"
                    >
                      View Live
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-nature-sage text-nature-forest dark:text-nature-sage hover:bg-nature-sage hover:text-white py-2 px-3 md:px-4 rounded-lg transition-all duration-300 font-medium text-sm md:text-base text-center"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Growth animation line */}
              <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 bg-nature-sage transition-all duration-1000 ${
                hoveredProject === index ? 'h-6 md:h-8' : 'h-0'
              }`}>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                  <Leaf className={`w-2 h-2 md:w-3 md:h-3 text-nature-sage transition-all duration-500 ${
                    hoveredProject === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
