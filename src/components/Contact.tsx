import { useState, useEffect } from 'react';
import { Mountain, TreePine, Leaf, Send, Sparkles, Mail, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [inView, setInView] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const contactCards = [
    {
      icon: Mountain,
      title: 'Growing Together',
      description: 'Every great forest starts with a single seed. Let\'s plant the seed of our collaboration.',
      color: 'from-emerald-400 to-green-500',
    },
    {
      icon: TreePine,
      title: 'Deep Roots',
      description: 'I believe in building lasting relationships based on trust, quality, and mutual growth.',
      color: 'from-teal-400 to-emerald-500',
    },
    {
      icon: Leaf,
      title: 'Fresh Perspectives',
      description: 'Like nature\'s constant renewal, I bring fresh ideas and innovative solutions to every project.',
      color: 'from-green-400 to-teal-500',
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 dark:from-slate-900 dark:via-emerald-900 dark:to-slate-800">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/10 dark:bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-400/10 dark:bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      {/* Animated flowing river */}
      <div className="absolute bottom-0 left-0 w-full h-24 opacity-20 dark:opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 200" fill="none">
          <path 
            className="animate-wave"
            d="M0 100Q300 50 600 100T1200 100Q900 150 600 100T0 100Z" 
            fill="url(#river-gradient)" 
          />
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
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1200 400" className="w-full h-auto">
          <path
            d="M0,400 L0,200 L150,120 L300,160 L450,100 L600,140 L750,80 L900,120 L1050,60 L1200,100 L1200,400 Z"
            fill="url(#contactMountainGradient)"
            className="opacity-40 dark:opacity-20"
          />
          <path
            d="M0,400 L0,250 L200,180 L400,220 L600,160 L800,200 L1000,140 L1200,180 L1200,400 Z"
            fill="url(#contactMountainGradient2)"
            className="opacity-20 dark:opacity-10"
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

      {/* Floating Elements - stable positions */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 md:top-20 left-4 md:left-10 animate-leaf-float opacity-20 dark:opacity-10" style={{ animationDelay: '0s' }}>
          <TreePine className="w-8 h-8 md:w-12 md:h-12 text-nature-forest" />
        </div>
        <div className="absolute top-20 md:top-40 right-4 md:right-20 animate-leaf-float opacity-20 dark:opacity-10" style={{ animationDelay: '2s' }}>
          <Mountain className="w-10 h-10 md:w-16 md:h-16 text-nature-earth" />
        </div>
        <div className="absolute bottom-40 md:bottom-60 left-4 md:left-20 animate-leaf-float opacity-20 dark:opacity-10" style={{ animationDelay: '4s' }}>
          <Leaf className="w-6 h-6 md:w-10 md:h-10 text-nature-leaf" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className={`inline-flex items-center gap-2 mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" />
            <Mail className="w-5 h-5 text-green-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold nature-text-gradient mb-4 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Let's Connect
          </h2>
          <p className={`text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Like seeds that grow into mighty oaks, great collaborations start with a simple conversation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="nature-card p-6 md:p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10">
              <form action="https://getform.io/f/aejlwzdb" method="POST" className="space-y-4 md:space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'name' ? 'text-emerald-500' : 'text-slate-400'}`} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 md:py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all duration-300 text-sm md:text-base hover:border-emerald-400"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-emerald-500' : 'text-slate-400'}`} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 md:py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all duration-300 text-sm md:text-base hover:border-emerald-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${focusedField === 'message' ? 'text-emerald-500' : 'text-slate-400'}`} />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 md:py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all duration-300 resize-none text-sm md:text-base hover:border-emerald-400"
                      placeholder="Tell me about your project or just say hello..."
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white py-3 md:py-4 px-4 md:px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 flex items-center justify-center gap-2 text-sm md:text-base group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className={`space-y-4 md:space-y-6 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {contactCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className={`nature-card p-4 md:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-emerald-500/10 transition-all duration-500 cursor-pointer ${
                    hoveredCard === index ? 'border-emerald-500/40 shadow-xl shadow-emerald-500/10 -translate-y-1' : ''
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-br ${card.color} transition-all duration-500 ${
                      hoveredCard === index ? 'scale-110 rotate-6' : ''
                    }`}>
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                        {card.description}
                      </p>
                    </div>
                    {hoveredCard === index && (
                      <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
