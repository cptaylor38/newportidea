import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = ({navManager, setToggle})=> {
    

    return(
    <div id='cityscape'>
    <div onClick={()=> {setToggle(false) ;navManager('about')}} type="button" className='tower tower1'><div id='aboutNavText1'>About Me</div></div>
    <div onClick={()=>{setToggle(false) ;navManager('portfolio')}} type="button" className='tower tower2'><div id='portfolioNavText2'>Portfolio</div></div>
    <div onClick={()=>{setToggle(false) ;navManager('faq')}} type="button" className='tower tower3'><div id='faqNavText3'>F.A.Q.</div></div>
    </div>
    )
}

export default Home;