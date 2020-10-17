import React, {useState} from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import FAQ from './pages/FAQ/FAQ';

const Desktop = () => {
  const [siteState, setSiteState] = useState('home');
  const [hoverLink, setHoverLink] = useState('');

  const hoverManager = (link)=>{
    setHoverLink(link);
  }

  const navManager = (selection)=> {
    setSiteState(selection);
  }

  const displayManager = ()=> {
    switch(siteState){
      case 'home':
        return <Home navManager={navManager} hoverManager={hoverManager}/>
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
      <Nav navManager={navManager} hoverLink={hoverLink}/>
      <>{displayManager()}</>
      <Footer />
    </div>
  );
};

export default Desktop;
