import * as React from 'react';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Certifications from '../sections/Certifications';
import Academic from '../sections/Academic';
import Professional from '../sections/Professional';
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { useScroll, useTransform, motion, useMotionTemplate, useMotionValue, animate } from "framer-motion"; // Import framer-motion functions and hooks
import { useRef, useEffect } from "react"; // Import useRef and useEffect hooks from React


function Home() {

  const COLORS = ['#18FF04', '#AD00FF', '#00FFD1', '#00D1FF', '#FF6F07','#121212']; // Define an array of colors
  const color = useMotionValue(COLORS[0]); // Initialize motion value with the first color
  const backgroundImage = useMotionTemplate`radial-gradient(200% 150% at 0% 10%, #121212 50%, ${color})`; // Create a radial gradient template for background

  useEffect(() => {
      animate(color, COLORS, {
          ease: 'easeInOut',
          duration: 10,
          repeat: Infinity,
          repeatType: 'mirror'
      }); // Animate the color motion value through the COLORS array
  }, []);


  return (
    <motion.div
     className="home"
     style={{
      backgroundImage,
  }}
     >
      <Header/>
      <Academic/>
      <Professional/>
      <Certifications/>
      <Projects/>
      <Skills/>
      <Footer/>
    </motion.div>
  );
}

export default Home;
