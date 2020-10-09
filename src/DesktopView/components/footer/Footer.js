import React from 'react';
import {FaLinkedin, FaFacebookSquare, FaRegFileAlt} from 'react-icons/fa';
import {GrGithub, GrMail, GrInstagram} from 'react-icons/gr';
import './Footer.css';

const Footer = ()=> {
    return(
        <div id='footerBar'>
            <a href='https://www.linkedin.com/in/corbin-taylor-419a8a188/' target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/cptaylor38" target='_blank' rel="noopener noreferrer"><GrGithub /> </a>
            <a href="https://www.facebook.com/cptaylor38/" target='_blank' rel="noopener noreferrer"><FaFacebookSquare /></a>
            <a href='mailto:cylor.dev@gmail.com'><GrMail /></a>
            <a href="https://www.instagram.com/cptaylo2/" target='_blank' rel="noopener noreferrer"><GrInstagram /></a>
            <a href='https://docs.google.com/document/d/1UOuxGoNjLUHSjYOkmir_tw11SvuzsKHQh7L5NMc6yGw/export?format=pdf' target='_blank' rel="noopener noreferrer"><FaRegFileAlt /></a>
        </div>
    )
}

export default Footer;