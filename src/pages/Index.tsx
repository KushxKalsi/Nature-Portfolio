
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
