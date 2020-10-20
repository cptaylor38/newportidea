import React, { useEffect } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im'
import useNavToggle from '../../../hooks/useNavToggle';
import './Nav.css';

const Nav = ({navManager}) => {
  const [toggleNav, setToggle] = useNavToggle();  

  return (
  <div id='mobileNav'>
    <div onClick={()=> {setToggle(false); navManager('home')}} id='homeNavItem'>Corbin Taylor</div>
    <button id='navBtn' onClick={()=> setToggle(!toggleNav)}>{toggleNav ? <ImCross /> : <GiHamburgerMenu />}</button>
    {toggleNav ? (<ul id='navMenu'>
        <li type='button' onClick={()=> navManager('portfolio')}>Portfolio</li>
        <li type='button' onClick={()=> navManager('faq')}>F.A.Q.</li>
        <li type='button' onClick={()=> navManager('about')}>Bio</li>
      </ul>) : null}
  </div>)
};

export default Nav;
