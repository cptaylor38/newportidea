import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im'
import './Nav.css';

const Nav = ({navManager, setToggle, toggleNav}) => {

  return (
  <div id='mobileNav'>
    <div onClick={()=> {setToggle(false); navManager('home')}} id='homeNavItem'>Corbin Taylor</div>
    <button id='navBtn' onClick={()=> setToggle(!toggleNav)}>{toggleNav ? <ImCross /> : <GiHamburgerMenu />}</button>
    {toggleNav ? (<ul id='navMenu'>
        <li type='button' onClick={()=> {setToggle(false); navManager('portfolio')}}>Portfolio</li>
        <li type='button' onClick={()=> {setToggle(false); navManager('faq')}}>F.A.Q.</li>
        <li type='button' onClick={()=> {setToggle(false); navManager('about')}}>Bio</li>
      </ul>) : null}
  </div>)
};

export default Nav;
