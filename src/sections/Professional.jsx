import * as React from 'react';
import styles from '../modules/styles.module.css';
import Card from '../components/Card';
import { motion } from "framer-motion";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IconShape from '../components/IconShape';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyIcon from '../assets/icons/user-tie-solid.svg';
import AlignItemsList from '../components/AlignItemsList';
import InfoLogo from '../assets/logos/info.png'
import NbcLogo from '../assets/logos/nbc.png';
import CoodivLogo from '../assets/logos/coodiv.png';
import AiesecLogo from '../assets/logos/aisec.png';


function Professional() {

  const itemData = [
    { id: 0, logo: InfoLogo, title: "Networks Engineer", year: "2023 - Present @ InfoSignal", description: " — Alberta, Canada"},
    { id: 1, logo: NbcLogo, title: "DevOps Engineer", year: "2022 - 2023 @ National Bank of Canada", description: " — Montreal, Canada"},
    { id: 2, logo: CoodivLogo, title: "Full Stack Developer", year: "2016 - 2019 @ Coodiv", description: " — Setif, Algeria"},
    { id: 3, logo: AiesecLogo, title: "Mobile Developer ", year: "2018 @ AIESEC", description: " — Palembang, Indonesia"},
  ];

  console.log("item.logo value:", itemData[0].logo);

  return (

    <div>    
        <IconShape color="#00D1FF" title="Professional" myIcon={MyIcon} /> 
        <div style={{ maxWidth: '1080px', margin: '60px auto' }}>


          
            {itemData.map((item) => (
                 

                <AlignItemsList
                  logo={item.logo}
                  title={item.title}
                  year={item.year}
                  description={item.description}
                />
                
            ))}
        </div>   
    </div>
    
  );
}

export default Professional;
