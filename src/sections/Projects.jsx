import * as React from 'react';
import styles from '../modules/styles.module.css';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IconShape from '../components/IconShape';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyIcon from '../assets/icons/share-nodes-solid.svg';
import CoodivBg from '../assets/bgs/coodiv_bg.png';
import ShoofBg from '../assets/bgs/shoof.png';
import AirBg from '../assets/bgs/air.png';
import graphiaBg from '../assets/bgs/graphia.png';

function Projects() {
  const cardData = [
    {
      id: 1,
      logo: graphiaBg,
      title: 'GraphiaX',
      subheader: '2023',
      description: 'Transforming code into graphs',
      readmore:
        'GraphiaX is a groundbreaking tool designed to enhance code understanding and streamline developer onboarding! By transforming code into graphs, developers can now visualize and comprehend complex structures with ease. You can simply enter the repository URL link, and the code is transformed into an intuitive graph representation.',
      link: 'https://graphiax.github.io/GraphiaX-Frontend/',
    },
    {
      id: 2,
      logo: AirBg,
      title: 'AirBorne',
      subheader: '2023',
      description: 'Drones Build and Operations',
      readmore:
        "Airborne is revolutionizing the world's perspective through cutting-edge technology and innovative methods. Specializing in capturing awe-inspiring aerial imagery, Airborne's mission is to inspire and inform. Utilizing AI-driven solutions, Airborne empowers clients to realize their goals, from crafting compelling marketing materials to conducting thorough surveys and inspections, while delivering actionable data insights.",
      link: 'https://airbornecanada.com/',
    },
    {
      id: 3,
      logo: ShoofBg,
      title: 'SHOOF Global',
      subheader: '2019 - 2021',
      description: 'On-Demand Services Platform',
      readmore:
        'Shoof Platform, An application created by Shoof Global that provides a collection of services, not just a platform. Built with simplicity, power, and efficiency.',
      link: 'https://play.google.com/store/apps/details?id=io.shoof&hl=en_CA&gl=US',
    },
    {
      id: 4,
      logo: CoodivBg,
      title: 'Coodiv',
      subheader: '2016',
      description: 'Digital products',
      readmore:
        'Coodiv helps you create, grow and foster connections with your customers. We not only make a website & app attractive but also interactive, without requiring a site or app owner to spend thousands of money. A beautiful template apart from a great content draws more visitors, which then results in more search engine traffic to your site.',
      link: 'https://www.coodiv.net/',
    },
  ];

  return (
    <div>
      <IconShape color="#18FF04" title="Projects" myIcon={MyIcon} />

      <div
        className="projects"
        style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '1080px',
          margin: '60px auto',
        }}
      >
        <Grid container spacing={4} style={{ justifyContent: 'center' }}>
          {cardData.map((item) => (
            <Grid
              key={item.id}
              item
              xs={12}
              sm={6}
              md={3}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <Card
                  logo={item.logo}
                  title={item.title}
                  subheader={item.subheader}
                  description={item.description}
                  readmore={item.readmore}
                  link={item.link}
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
