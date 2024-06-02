import * as React from 'react'; // Import React and all its exports
import styles from '../modules/styles.module.css'; // Import CSS module for styles
import Card from '../components/Card'; // Import Card component
import { useRef, useEffect } from "react"; // Import useRef and useEffect hooks from React

import Grid from '@mui/material/Unstable_Grid2'; // Import Grid component from MUI (version 2)
import IconShape from '../components/IconShape'; // Import IconShape component
import { faInstagram } from '@fortawesome/free-solid-svg-icons'; // Import Instagram icon from FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import MyIcon from '../assets/icons/circle-nodes-solid.svg'; // Import custom SVG icon
import SkillsBg from '../assets/bgs/skills.svg'; // Import background image

import { useScroll, useTransform, motion, useMotionTemplate, useMotionValue, animate } from "framer-motion"; // Import framer-motion functions and hooks

function Skills() {

    const targetRef = useRef(null); // Create a reference to the target element

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end start", "start end"],
    }); // Track scroll progress relative to the target element

    const opacity = useTransform(scrollYProgress, [1, 0.5], [0, 1]); // Transform opacity based on scroll progress

  
    return (
        <div>    
            <IconShape color="#AD00FF" title="Skills" myIcon={MyIcon} />   {/* Render IconShape component with props */}
            <motion.div
                ref={targetRef}
                style={{
                    opacity,
                }}
            >
                <img src={SkillsBg} alt="Custom Icon" style={{width: '100%', maxWidth: '960px', margin: '60px auto'}} /> {/* Render the background image */}
            </motion.div>
        </div>
    );
}

export default Skills; // Export the Skills component as default
