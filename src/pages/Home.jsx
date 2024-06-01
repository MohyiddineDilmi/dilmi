import * as React from 'react';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Certifications from '../sections/Certifications';
import Academic from '../sections/Academic';
import Professional from '../sections/Professional';
import Header from '../sections/Header'
import Footer from '../sections/Footer'



function Home() {
  return (
    <div className="home">
      <Header/>
      <Academic/>
      <Professional/>
      <Certifications/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default Home;
