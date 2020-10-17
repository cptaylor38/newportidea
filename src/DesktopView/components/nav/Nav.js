import React from 'react';
import './Nav.css';

const Nav = ({navManager, hoverLink}) => {
  return (
  <div id='mobileNav'>
    <div>Corbin Taylor</div>
    <div style={{marginRight: '50%'}}>{hoverLink}</div>
    {/* <div onClick={()=>navManager('about')}>About</div>
    <div onClick={()=>navManager('home')}>Home</div> */}
  </div>)
};

export default Nav;
