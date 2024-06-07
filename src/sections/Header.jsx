import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; 
import ImgCard from '../components/ImgCard';
import signatureImg from '../assets/bgs/signature.png';
import CardMedia from '@mui/material/CardMedia';
import dilmi from '../assets/bgs/dilmi.png';

function Certifications() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          maxWidth: '1080px',
          margin: '140px auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          container
          spacing={2}
          columns={8}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <Grid xs={8}>
              <ImgCard
                title="Mohyiddine Dilmi"
                logo={signatureImg}
                year="Software Engineer | Interests on "
                link="text"
              />
            </Grid>
          </div>
          <div>
            <Grid xs={8} style={{ display: 'flex', justifyContent: 'center' }}>
              <CardMedia
                component="img"
                style={{ width: '50%' }}
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
