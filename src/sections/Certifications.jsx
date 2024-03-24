import * as React from 'react';
import styles from '../modules/styles.module.css';
import Card from '../components/Card';
import { motion } from "framer-motion";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IconShape from '../components/IconShape';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyIcon from '../assets/icons/certificate-solid.svg';
import ImgMediaCard from '../components/ImgMediaCard';
import tfImg from '../assets/logos/tf.png'
import tcImg from '../assets/logos/tc.png'



function Certifications() {

  const itemData = [
    { id: 0, logo: tfImg, title: "Tensorflow Developer Certificate", year: "2024", link: "https://raw.githubusercontent.com/MohyiddineDilmi/data/main/ci3f5ezs_1710992561725.pdf"},
    { id: 1, logo: tcImg, title: "RPAS Advanced Operations Pilot", year: "2023", link: "https://raw.githubusercontent.com/MohyiddineDilmi/data/main/PC2307821942.pdf"},
  ];


  return (

    <div>
        
        <IconShape  color="#FF6F07" title="Certifications" myIcon={MyIcon} /> 
         
        <div style={{ display: 'flex', maxWidth: '1080px', margin: '60px auto'}}>
          <Grid container spacing={3} >
            {itemData.map((item) => (
                <Grid key={item.id} item xs={12} sm={6} md={6} style={{ display: 'flex', justifyContent: 'center'}}>   
                  <ImgMediaCard
                      title={item.title}
                      logo={item.logo}
                      year={item.year}
                      link={item.link}
                    />
                </Grid>
                ))}
          </Grid>
        </div>
    </div>
    
  );
}

export default Certifications;
