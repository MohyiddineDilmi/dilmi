import * as React from 'react';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Certifications from '../sections/Certifications';
import Academic from '../sections/Academic';
import Professional from '../sections/Professional';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'framer-motion';
import { useEffect } from 'react';

function Home() {
  const COLORS = [
    '#121212',
    '#AD00FF',
    '#00FFD1',
    '#00D1FF',
    '#FF6F07',
  ];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(200% 150% at 0% 10%, #121212 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  return (
    <motion.div
      className="home"
      style={{
        background: backgroundImage,
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}
    >
      <Header />
      <Academic />
      <Professional />
      <Certifications />
      <Projects />
      <Skills />
      <Footer />
    </motion.div>
  );
}

export default Home;