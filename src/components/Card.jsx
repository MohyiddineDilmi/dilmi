import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Chip, Avatar } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Bg from '../assets/graphiax.png';
import styles from '../modules/styles.module.css';
import  faLink  from '../assets/icons/link-solid.svg';

import LinkIcon from '@mui/icons-material/Link';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    }));

export default function RecipeReviewCard({title, subheader, description, logo, link, readmore}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300, borderRadius: '28px' }}>
      <CardHeader
        
        title={
          <Typography variant="h5" fontFamily="NCTTorin-Bold">
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="body2" fontFamily="NCTTorin-Regular">
            {subheader}
          </Typography>
        }
      />
      {/* <video
        height="200"
        src="https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/GraphiaX.mp4" // Use the video source instead of the image
        alt="Founder"
        autoPlay
        loop
        muted
      /> */}
      <CardMedia
        component="img"
        height="100%"
        image={logo}
        alt="Founder"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" fontFamily="NCTTorin-Regular">
          
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      
          <a href={link} target="_blank">
            <IconButton aria-label="share">
              <LinkIcon/>
            </IconButton>
            </a>
      
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary" paragraph fontFamily="NCTTorin-Regular">
            {readmore}
          </Typography>
        
        </CardContent>
      </Collapse>
    </Card>
  );
}
