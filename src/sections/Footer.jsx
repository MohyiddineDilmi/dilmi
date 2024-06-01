import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  const handleInstagramClick = () => {
    // Redirect the user to the Discord URL
    window.open('https://www.instagram.com/dilmixplorer?igsh=MW5sbHhqNjQ3eDc4eQ==', '_blank');
  };

  const handleDiscordClick = () => {
    // Redirect the user to the Discord URL
    window.open('https://discordapp.com/users/610957742299021331', '_blank');
  };

  const handleLinkedinClick = () => {
    // Redirect the user to the Discord URL
    window.open('https://www.linkedin.com/in/mohyiddine-dilmi-55b549196/', '_blank');
  };

  const buttonStyle = {
    margin: 5,
    width: 50, // Adjust the width to make the buttons wider
    height: 50,
    borderRadius: 25, // Rounded with 50px
    // padding: '10px 10px', // Add padding to make the buttons look better
    paddingLeft: 10,
    background: '#151515',
    color: '#a1a1a1',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    justifyContent: 'center', // Center the icon and text horizontally
    border: 'none'
  };

  return (
    <div style={{margin: '60px auto'}}>
      <div>
        <button onClick={handleLinkedinClick} style={buttonStyle}>
          <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '5px' }} />
        </button>
        <button onClick={handleDiscordClick} style={buttonStyle}>
          <FontAwesomeIcon icon={faDiscord} style={{ marginRight: '5px' }} />
        </button>
        <button onClick={handleInstagramClick} style={buttonStyle}>
          <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '5px' }} />
        </button>
      </div>
    </div>
  );
};

export default Footer;