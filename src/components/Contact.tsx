
import { useState } from 'react';
import { Mountain, TreePine, Leaf } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 dark:from-slate-900 dark:via-emerald-900 dark:to-slate-800">
      {/* Serene Forest Background */}
      <div className="absolute inset-0">
        {/* Animated flowing river */}
        <div className="absolute bottom-0 left-0 w-full h-24 opacity-20">
          <svg className="w-full h-full animate-water-flow" viewBox="0 0 1200 200" fill="none">
            <path d="M0 100Q300 50 600 100T1200 100Q900 150 600 100T0 100Z" 
                  fill="url(#river-gradient)" />
            <defs>
              <linearGradient id="river-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
                <stop offset="50%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Mountain Silhouettes */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 400" className="w-full h-auto">
            <path
              d="M0,400 L0,200 L150,120 L300,160 L450,100 L600,140 L750,80 L900,120 L1050,60 L1200,100 L1200,400 Z"
              fill="url(#contactMountainGradient)"
              className="opacity-40"
            />
            <path
              d="M0,400 L0,250 L200,180 L400,220 L600,160 L800,200 L1000,140 L1200,180 L1200,400 Z"
              fill="url(#contactMountainGradient2)"
              className="opacity-20"
            />
            <defs>
              <linearGradient id="contactMountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2D5016" />
                <stop offset="100%" stopColor="#4A7C59" />
              </linearGradient>
              <linearGradient id="contactMountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#87A96B" />
                <stop offset="100%" stopColor="#4A7C59" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 md:top-20 left-4 md:left-10 animate-leaf-float opacity-20">
          <TreePine className="w-8 h-8 md:w-12 md:h-12 text-nature-forest" />
        </div>
        <div className="absolute top-20 md:top-40 right-4 md:right-20 animate-leaf-float opacity-20" style={{ animationDelay: '2s' }}>
          <Mountain className="w-10 h-10 md:w-16 md:h-16 text-nature-earth" />
        </div>
        <div className="absolute bottom-20 md:bottom-40 left-4 md:left-20 animate-leaf-float opacity-20" style={{ animationDelay: '4s' }}>
          <Leaf className="w-6 h-6 md:w-10 md:h-10 text-nature-leaf" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold nature-text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
            Like seeds that grow into mighty oaks, great collaborations start with a simple conversation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Form */}
          <div className="nature-card p-6 md:p-8">
            <form action="https://getform.io/f/aejlwzdb" method="POST" className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-nature-leaf focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all duration-300 text-sm md:text-base"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-nature-leaf focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all duration-300 text-sm md:text-base"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-nature-leaf focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all duration-300 resize-none text-sm md:text-base"
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-nature-leaf hover:bg-nature-forest text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <span>Send Message</span>
                <Leaf className="w-4 h-4 md:w-5 md:h-5 animate-gentle-sway" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="nature-card p-4 md:p-6 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-nature-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-6 h-6 md:w-8 md:h-8 text-nature-forest" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                Growing Together
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                Every great forest starts with a single seed. Let's plant the seed of our collaboration.
              </p>
            </div>

            <div className="nature-card p-4 md:p-6 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-nature-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-6 h-6 md:w-8 md:h-8 text-nature-forest" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                Deep Roots
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                I believe in building lasting relationships based on trust, quality, and mutual growth.
              </p>
            </div>

            <div className="nature-card p-4 md:p-6 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-nature-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 md:w-8 md:h-8 text-nature-forest animate-gentle-sway" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                Fresh Perspectives
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                Like nature's constant renewal, I bring fresh ideas and innovative solutions to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
