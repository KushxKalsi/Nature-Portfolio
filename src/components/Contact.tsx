
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
    <section id="contact" className="section-padding relative overflow-hidden min-h-screen flex items-center">
      {/* Serene Forest Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900"></div>
        
        {/* Mountain Silhouettes */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 400" className="w-full h-auto">
            <path
              d="M0,400 L0,200 L150,120 L300,160 L450,100 L600,140 L750,80 L900,120 L1050,60 L1200,100 L1200,400 Z"
              fill="url(#contactMountainGradient)"
              className="opacity-60"
            />
            <path
              d="M0,400 L0,250 L200,180 L400,220 L600,160 L800,200 L1000,140 L1200,180 L1200,400 Z"
              fill="url(#contactMountainGradient2)"
              className="opacity-40"
            />
            <defs>
              <linearGradient id="contactMountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <linearGradient id="contactMountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-leaf-float opacity-30">
          <TreePine className="w-12 h-12 text-nature-forest" />
        </div>
        <div className="absolute top-40 right-20 animate-leaf-float opacity-30" style={{ animationDelay: '2s' }}>
          <Mountain className="w-16 h-16 text-nature-earth" />
        </div>
        <div className="absolute bottom-40 left-20 animate-leaf-float opacity-30" style={{ animationDelay: '4s' }}>
          <Leaf className="w-10 h-10 text-nature-leaf" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold nature-text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Like seeds that grow into mighty oaks, great collaborations start with a simple conversation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="nature-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-nature-leaf focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all duration-300"
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-nature-leaf focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all duration-300"
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
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-nature-leaf focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-nature-leaf hover:bg-nature-forest text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Leaf className="w-5 h-5 animate-gentle-sway" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="nature-card p-6 text-center">
              <div className="w-16 h-16 bg-nature-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-nature-forest" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                Growing Together
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Every great forest starts with a single seed. Let's plant the seed of our collaboration.
              </p>
            </div>

            <div className="nature-card p-6 text-center">
              <div className="w-16 h-16 bg-nature-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-nature-forest" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                Deep Roots
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                I believe in building lasting relationships based on trust, quality, and mutual growth.
              </p>
            </div>

            <div className="nature-card p-6 text-center">
              <div className="w-16 h-16 bg-nature-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-nature-forest animate-gentle-sway" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                Fresh Perspectives
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
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
