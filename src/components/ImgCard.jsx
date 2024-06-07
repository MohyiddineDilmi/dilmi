import * as React from 'react';
import Card from '@mui/material/Card';
import { Chip, Avatar } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import faCer from '../assets/icons/circle-nodes-solid-white.svg';
import faMicro from '../assets/icons/microchip-solid.svg';
import faBrain from '../assets/icons/brain-solid.svg';

export default function ImgCard({ title, year, logo, link }) {
  return (
    <Card
      sx={{
        borderRadius: '36px',
        backgroundColor: '#050505',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        border: 'none',
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={logo}
        sx={{ width: '180px' }} // Set background color to transparent
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          color="text.primary"
          fontFamily="NCTTorin-Bold"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {year}
        </Typography>
      </CardContent>
      <div>
        <Chip
          avatar={<Avatar alt="Natacha" src={faCer} />}
          label="ML"
          variant="outlined"
          style={{ marginLeft: '10px' }}
        />
        <Chip
          avatar={<Avatar alt="Natacha" src={faMicro} />}
          label="NLP"
          variant="outlined"
          style={{ marginLeft: '10px' }}
        />
        <Chip
          avatar={<Avatar alt="Natacha" src={faBrain} />}
          label="Computer Vision"
          variant="outlined"
          style={{ marginLeft: '10px' }}
        />
      </div>

      {/* <CardActions>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <Chip
                avatar={<Avatar alt="Natacha" src={faCer} />}
                label="View Certificate"
                variant="outlined"
            />
        </a>
      </CardActions> */}
    </Card>
  );
}
