import * as React from 'react';
import styles from '../modules/styles.module.css';
import Card from '../components/Card';
import { useRef } from "react";

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IconShape from '../components/IconShape';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyIcon from '../assets/icons/circle-nodes-solid.svg';
import SkillsBg from '../assets/bgs/skills.svg'

import { useScroll, useTransform,  motion } from "framer-motion";




function Skills() {

    
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end start", "start end"],
    })

    const opacity = useTransform(scrollYProgress, [1, 0.5] , [0, 1]);
  
    return (

    <div>    
        <IconShape color="#AD00FF" title="Skills" myIcon={MyIcon} />   
        <motion.div
            ref={targetRef}
            style={{opacity}}
        >
            <img src={SkillsBg} alt="Custom Icon" style={{width: '100%', maxWidth: '960px', margin: '60px auto'}} />
        </motion.div>
    </div>
    
  );
}

export default Skills;
