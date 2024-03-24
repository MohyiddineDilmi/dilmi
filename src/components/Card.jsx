import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
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

export default function RecipeReviewCard({title, subheader, description, logo}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300, borderRadius: '36px' }}>
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
          <Typography paragraph fontFamily="NCTTorin-Regular">Method:</Typography>
          <Typography paragraph fontFamily="NCTTorin-Regular">
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph fontFamily="NCTTorin-Regular">
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
