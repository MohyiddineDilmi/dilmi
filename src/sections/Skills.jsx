import * as React from 'react'; // Import React and all its exports
import { useRef } from 'react'; // Import useRef and useEffect hooks from React
import IconShape from '../components/IconShape'; // Import IconShape component
import MyIcon from '../assets/icons/circle-nodes-solid.svg'; // Import custom SVG icon
import SkillsBg from '../assets/bgs/skills.svg'; // Import background image

import {
  useScroll,
  useTransform,
  motion,
} from 'framer-motion'; // Import framer-motion functions and hooks

function Skills() {
  const targetRef = useRef(null); // Create a reference to the target element

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end start', 'start end'],
  }); // Track scroll progress relative to the target element

  const opacity = useTransform(scrollYProgress, [1, 0.5], [0, 1]); // Transform opacity based on scroll progress

  return (
    <div>
      <IconShape color="#AD00FF" title="Skills" myIcon={MyIcon} />{' '}
      {/* Render IconShape component with props */}
      <motion.div
        ref={targetRef}
        style={{
          opacity,
        }}
      >
        <img
          src={SkillsBg}
          alt="Custom Icon"
          style={{ width: '100%', maxWidth: '960px', margin: '60px auto' }}
        />{' '}
        {/* Render the background image */}
      </motion.div>
    </div>
  );
}

export default Skills; // Export the Skills component as default
