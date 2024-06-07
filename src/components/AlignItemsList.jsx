import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList({ logo, title, year, description }) {
  return (
    <List sx={{ width: '100%', maxWidth: 680, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={logo} style={{ marginRight: '20px' }} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="h6"
              color="text.primary"
              fontFamily="NCTTorin-Bold"
            >
              {title}
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.secondary"
                fontFamily="NCTTorin-Bold"
              >
                {year}
              </Typography>
              {description}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
