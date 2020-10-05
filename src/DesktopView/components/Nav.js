import React from 'react';
import useTypewriter from '../../hooks/useTypewriter';
import './Nav.css';

const Nav = () => {
  const name = 'Corbin Taylor';
  const [text] = useTypewriter(name);
  return <div id='mobileNav'>{text}</div>;
};

export default Nav;
