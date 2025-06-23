
import { useState } from 'react';
import { Mountain, Leaf, TreePine } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'EcoTracker App',
      description: 'A sustainability tracking application that helps users monitor their environmental impact with beautiful data visualizations.',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop',
      icon: <Leaf className="w-8 h-8" />,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Mountain Weather App',
      description: 'Real-time weather forecasting for mountain regions with interactive maps and safety alerts for hikers.',
      tech: ['Vue.js', 'Express', 'PostgreSQL', 'Mapbox'],
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
      icon: <Mountain className="w-8 h-8" />,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Forest Conservation Dashboard',
      description: 'Data visualization platform for tracking deforestation and conservation efforts across different regions.',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop',
      icon: <TreePine className="w-8 h-8" />,
      color: 'from-emerald-400 to-emerald-600'
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-leaf-float">
          <Leaf className="w-16 h-16 text-nature-leaf" />
        </div>
        <div className="absolute top-20 right-20 animate-leaf-float" style={{ animationDelay: '2s' }}>
          <Mountain className="w-20 h-20 text-nature-earth" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold nature-text-gradient mb-4">
            Digital Ecosystems
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Each project is like a unique habitat, carefully crafted to solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="nature-card overflow-hidden h-full transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
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
                          <Leaf className="w-4 h-4 text-white/70" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-nature-leaf transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-nature-sage/20 text-nature-forest text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-nature-leaf hover:bg-nature-forest text-white py-2 px-4 rounded-lg transition-colors duration-300 font-medium">
                      View Live
                    </button>
                    <button className="flex-1 border-2 border-nature-sage text-nature-forest dark:text-nature-sage hover:bg-nature-sage hover:text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium">
                      View Code
                    </button>
                  </div>
                </div>
              </div>

              {/* Growth animation line */}
              <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 bg-nature-sage transition-all duration-1000 ${
                hoveredProject === index ? 'h-8' : 'h-0'
              }`}>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                  <Leaf className={`w-3 h-3 text-nature-sage transition-all duration-500 ${
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
