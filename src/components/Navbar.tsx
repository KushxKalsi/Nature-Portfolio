import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Instagram, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    // Always use system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileImage, setShowProfileImage] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Apply theme on mount and when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Listen for system theme changes and always follow them
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      // Show profile image in navbar when scrolled past hero image
      setShowProfileImage(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    // { name: 'Resume', href: '#resume' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            {/* Profile image that appears on scroll */}
            <div 
              className={`transition-all duration-500 ease-out ${
                showProfileImage 
                  ? 'w-10 h-10 opacity-100 scale-100' 
                  : 'w-0 h-0 opacity-0 scale-0'
              }`}
            >
              <img
                src="/assets/images/kush-image.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-nature-sage/50 shadow-md"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold nature-text-gradient">
              Kush Kalsi
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-slate-700 dark:text-slate-300 hover:text-nature-leaf dark:hover:text-nature-sage transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Social Media Links */}
            <a
              href="https://github.com/KushxKalsi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-nature-sage/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-nature-forest dark:text-nature-sage" />
            </a>
            <a
              href="https://www.instagram.com/kush_kalsi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-nature-sage/20 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-nature-forest dark:text-nature-sage" />
            </a>
            <a
              href="https://www.linkedin.com/in/kush-kalsi-32928328a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-nature-sage/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-nature-forest dark:text-nature-sage" />
            </a>

            {/* Dark mode button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-nature-sage/20 hover:bg-nature-sage/30 transition-all duration-300 hover:scale-110"
            >
              {isDark ? (
                <Sun className="w-4 h-4 md:w-5 md:h-5 text-nature-dawn transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 md:w-5 md:h-5 text-nature-forest transition-transform duration-300" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full bg-nature-sage/20 hover:bg-nature-sage/30 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-5 h-5">
                <Menu 
                  className={`w-5 h-5 text-nature-forest dark:text-nature-sage absolute transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <X 
                  className={`w-5 h-5 text-nature-forest dark:text-nature-sage absolute transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-nature-sage/20">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-slate-700 dark:text-slate-300 hover:text-nature-leaf dark:hover:text-nature-sage transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-nature-sage/10 text-left transform transition-transform ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' 
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
