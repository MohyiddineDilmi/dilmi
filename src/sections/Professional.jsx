import * as React from 'react';
import IconShape from '../components/IconShape';
import MyIcon from '../assets/icons/user-tie-solid.svg';
import AlignItemsList from '../components/AlignItemsList';
import InfoLogo from '../assets/logos/info.png';
import NbcLogo from '../assets/logos/nbc.png';
import CoodivLogo from '../assets/logos/coodiv.png';
import AiesecLogo from '../assets/logos/aisec.png';
import shLogo from '../assets/logos/shoof.png';
import gaLogo from '../assets/logos/gameaddik_logo.jpg';

function Professional() {
  const experience = [
    {
      id: 0,
      companyLogo: gaLogo,
      jobTitle: 'Backend Developer',
      workPeriod: '2024 - Present @ GameAddik',
      location: 'Montreal, Canada',
    },
    {
      id: 1,
      companyLogo: InfoLogo,
      jobTitle: 'Networks Engineer',
      workPeriod: '2023 - 2024 @ InfoSignal',
      location: 'Alberta, Canada',
    },
    {
      id: 2,
      companyLogo: NbcLogo,
      jobTitle: 'DevOps Engineer',
      workPeriod: '2022 - 2023 @ National Bank of Canada',
      location: 'Montreal, Canada',
    },
    {
      id: 3,
      companyLogo: shLogo,
      jobTitle: 'Project Lead & Solution Architect',
      workPeriod: '2019 - 2022 @ SHOOF Global',
      location: 'Ontario, Canada',
    },
    {
      id: 4,
      companyLogo: CoodivLogo,
      jobTitle: 'Full Stack Developer',
      workPeriod: '2016 - 2019 @ Coodiv',
      location: 'Setif, Algeria',
    },
    {
      id: 5,
      companyLogo: AiesecLogo,
      jobTitle: 'Mobile Developer',
      workPeriod: '2018 @ AIESEC',
      location: 'Palembang, Indonesia',
    },
  ];

  return (
    <div>
      <IconShape color="#00D1FF" title="Professional" myIcon={MyIcon} />
      <div style={{ maxWidth: '1080px', margin: '60px auto' }}>
        {experience.map(
          ({ id, companyLogo, jobTitle, workPeriod, location }) => (
            <AlignItemsList
              logo={companyLogo}
              title={jobTitle}
              year={workPeriod}
              description={location}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Professional;
