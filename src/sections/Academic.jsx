import * as React from 'react';
import styles from '../modules/styles.module.css';
import Card from '../components/Card';
import { motion } from "framer-motion";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IconShape from '../components/IconShape';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyIcon from '../assets/icons/book-open-reader-solid.svg';
import AlignItemsList from '../components/AlignItemsList';
import MyLogo from '../assets/logos/universite-abdelhamid-mehri-constantine-2-logo-3923299C66-seeklogo.com.png'

function Academic() {
  
  const itemData = [
    { id: 1, title: "Master of Networks and Distributed Systems", year: "2019 @ Constantine 2 University", description: " — Constantine - Algeria"},
    { id: 1, title: "Bachelor of Computer Science", year: "2017 @ Constantine 2 University", description: " — Constantine - Algeria"},
  ];

  return (

    <div >    
        <IconShape color="#00FFD1" title="Academic" myIcon={MyIcon} /> 
        <div style={{ maxWidth: '1080px', margin: '60px auto' }}>
            {itemData.map((item) => (
                <AlignItemsList
                  logo={MyLogo}
                  title={item.title}
                  year={item.year}
                  description={item.description}
                />
            ))}
        </div> 
    </div>
    
  );
}

export default Academic;
