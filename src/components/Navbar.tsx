import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold nature-text-gradient">
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 dark:text-slate-300 hover:text-nature-leaf dark:hover:text-nature-sage transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-nature-sage/20 hover:bg-nature-sage/30 transition-colors duration-300"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-nature-dawn" />
            ) : (
              <Moon className="w-5 h-5 text-nature-forest" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
