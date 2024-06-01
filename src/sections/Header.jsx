import * as React from 'react';
import styles from '../modules/styles.module.css';
import Card from '../components/Card';
import { motion } from "framer-motion";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IconShape from '../components/IconShape';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyIcon from '../assets/icons/certificate-solid.svg';
import ImgCard from '../components/ImgCard';
import tfImg from '../assets/logos/tf.png'
import signatureImg from '../assets/bgs/signature.png'
import CardMedia from '@mui/material/CardMedia';
import dilmi from '../assets/bgs/dilmi.png'





function Certifications() {




  return (

    <div>    
        <div style={{ display: 'flex', maxWidth: '1080px', margin: '140px auto', justifyContent: 'center', alignItems: 'center'}}>

            <Grid container spacing={2} columns={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div >
                    <Grid xs={8} >   
                        <ImgCard
                            title="Mohyiddine Dilmi"
                            logo={signatureImg}
                            year="Software Engineer | Interests on "
                            link="text"
                        />
                    </Grid>
                </div>
                <div >
                    <Grid xs={8} style={{ display: 'flex', justifyContent: 'center'}} > 
                    <CardMedia
                            component="img"
                            style={{ width: '50%'}}
                            image={dilmi}
                            alt="Founder"
                        />
                    </Grid>
                </div>          
            </Grid>    
        </div>
    </div>
    
  );
}

export default Certifications;
