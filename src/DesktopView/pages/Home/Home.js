import React, { useEffect } from 'react';
import './Home.css';
import useNavToggle from '../../../hooks/useNavToggle';

const Home = ({navManager})=> {
    const [toggleNav, setToggle] = useNavToggle(); 
    const navHandler = ()=> {
        console.log(toggleNav);
        setToggle(false);
    }

    useEffect(()=> {
        navHandler();
    }, [])

    return(
    <div id='cityscape'>
    <div onClick={()=> navManager('about')} type="button" className='tower tower1'><div id='aboutNavText1'>About Me</div></div>
    <div onClick={()=>navManager('portfolio')} type="button" className='tower tower2'><div id='portfolioNavText2'>Portfolio</div></div>
    <div onClick={()=>navManager('faq')} type="button" className='tower tower3'><div id='faqNavText3'>F.A.Q.</div></div>
    </div>
    )
}

export default Home;