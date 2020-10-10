import React from 'react';
import './Home.css';

const Home = ({navManager})=> {
    return(
    <>
    <div onClick={()=>navManager('about')}>About Me</div>
    <div onClick={()=>navManager('portfolio')}>Portfolio</div>
    <div onClick={()=>navManager('faq')}>FAQ</div>
    </>
    )
}

export default Home;