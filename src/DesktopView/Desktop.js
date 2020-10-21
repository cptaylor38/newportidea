import React, {useEffect, useState} from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import FAQ from './pages/FAQ/FAQ';
import './Desktop.css';

const Desktop = () => {
  const [siteState, setSiteState] = useState('home');
  const [toggleNav, setToggle] = useState(false);
  const navManager = (selection)=> {
    setSiteState(selection);
  }

  const displayManager = ()=> {
    switch(siteState){
      case 'home':
        return <Home navManager={navManager} toggleNav={toggleNav} setToggle={setToggle}/>
      case 'about':
        return <About />
      case 'portfolio':
        return <Portfolio />
      case 'faq':
        return <FAQ />
      default:
        return <Home />
    }
  }

  return (
    <div style={{maxWidth: '100vw', maxHeight: '100vh'}}>
      <Nav navManager={navManager} toggleNav={toggleNav} setToggle={setToggle}/>
      <>{displayManager()}</>
      <Footer />
    </div>
  );
};

export default Desktop;
