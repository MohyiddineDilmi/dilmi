import * as React from 'react';
import Card from '@mui/material/Card';
import { Chip, Avatar } from '@mui/material';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import faCer from '../assets/icons/certificate-solid.svg';

export default function ImgMediaCard({ title, year, logo, link }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
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
        height="80"
        image={logo}
        sx={{ width: '120px' }} // Set background color to transparent
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
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
      <CardActions>
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
      </CardActions>
    </Card>
  );
}
