import * as React from 'react';
import styles from '../modules/styles.module.css';
import Card from '../components/Card';
import { motion } from "framer-motion";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IconShape from '../components/IconShape';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyIcon from '../assets/icons/share-nodes-solid.svg';
import CoodivBg from '../assets/bgs/coodiv_bg.png'
import ShoofBg from '../assets/bgs/shoof.png'
import AirBg from '../assets/bgs/air.png'
import graphiaBg from '../assets/bgs/graphia.png'



function Projects() {

    const cardData = [
        { id: 1, logo: graphiaBg, title: "GraphiaX", subheader: "2023 - Creator", description: "Transforming code into graphs.", readmore: "" },
        { id: 2, logo: AirBg, title: "AirBorne", subheader: "2023 - Founder and CEO", description: "Drones Build and Operations.", readmore: "" },
        { id: 3, logo: ShoofBg, title: "SHOOF Global", subheader: "2019 - 2021 - Solution Architect", description: "Multi On-Demand Services Platform.", readmore: "" },
        { id: 4, logo: CoodivBg, title: "Coodiv", subheader: "2016 - Co-Founder", description: "We Create a digital products", readmore: "" }
      ];

  return (

    <div>
        
        <IconShape color="#18FF04" title="Ptojects" myIcon={MyIcon} />      

        
        <div className="projects" style={{ display: 'flex', justifyContent: 'center', maxWidth: '1080px', margin: '60px auto'}}>
        <Grid container spacing={4} style={{ justifyContent: 'center' }}>
          {cardData.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center'}}>
                  <motion.div
                  whileHover={{ scale: 1.1 }}
                  >
                  <Card 
                    logo={item.logo}
                    title={item.title} 
                    subheader={item.subheader} 
                    description={item.description} 
                    readmore={item.readmore} 
                  />
                  </motion.div>
              </Grid>
              ))}
        </Grid>
      </div>
      
    </div>
    
  );
}

export default Projects;
