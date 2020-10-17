import React from 'react';
import './Home.css';

const Home = ({navManager, hoverManager})=> {
    return(
    <div id='cityscape'>
    <div onClick={()=>navManager('about')} type="button" onMouseEnter={()=>hoverManager('About Me')} onMouseLeave={()=> hoverManager('')} className='tower tower1'>About Me</div>
    <div onClick={()=>navManager('portfolio')} type="button" onMouseEnter={()=>hoverManager('Portfolio')} onMouseLeave={()=> hoverManager('')} className='tower tower2'>Portfolio</div>
    <div onClick={()=>navManager('faq')} type="button" onMouseEnter={()=>hoverManager('F.A.Q.')} onMouseLeave={()=> hoverManager('')} className='tower tower3'>FAQ</div>
    </div>
    )
}

export default Home;