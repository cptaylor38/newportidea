import React from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import {changeNav} from '../hooks/siteState';
const Desktop = () => {
  return (
    <>
      <Nav />
      <div>nav stuff here</div>
      <Footer />
    </>
  );
};

export default Desktop;
