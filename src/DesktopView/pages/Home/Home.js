import React from 'react';
import './Home.css';

const Home = ({navManager})=> {
    return(
    <div id='cityscape'>
    <div className='tower tower1'></div>
    <div className='tower tower2'></div>
    <div onClick={()=>navManager('about')} className='tower tower3'>About Me</div>
    <div className='tower tower4'></div>
    <div className='tower tower5'></div>
    <div className='tower tower6'></div>
    <div onClick={()=>navManager('portfolio')} className='tower tower7'>Portfolio</div>
    <div className='tower tower8'></div>
    <div className='tower tower9'></div>
    <div onClick={()=>navManager('faq')} className='tower tower10'>FAQ</div>
    <div className='tower tower11'></div>
    <div className='tower tower12'></div>
    </div>
    )
}

export default Home;