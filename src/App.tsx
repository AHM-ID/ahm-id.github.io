import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<'en' | 'fa'>('en');

    useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Update document direction and font based on language
  useEffect(() => {
    if (language === 'fa') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'fa');
      document.body.style.fontFamily = 'Vazirmatn, Inter, sans-serif';
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
      document.body.style.fontFamily = 'Inter, sans-serif';
    }
  }, [language]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold gradient-text">Loading Portfolio...</h2>
          <p className="text-gray-600 mt-2">Amirhossein Maleki</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Header language={language} setLanguage={setLanguage} />
      
            <main>
        <Hero language={language} />
        <About language={language} />
        <Education language={language} />
        <Experience language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
}

export default App;