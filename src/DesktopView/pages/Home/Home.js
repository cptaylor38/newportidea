import React, {useState, useEffect} from 'react';
import './Home.css';

const Home = ({navManager, hoverManager})=> {
    const [style, setStyle] = useState({position: '-200%'})

    useEffect(()=> {
        let translateX = -200;
        setInterval(()=> {
            if(translateX <= 0){
                setStyle({position: `${translateX}%`})
                translateX += 20;
            }
            else return;
        }, 35)

        return ()=> {
            setInterval(()=> {
                if(translateX >= -200){
                    setStyle({position: `${translateX}%`})
                    translateX -= 20;
                }
                else return;
            }, 35)
        }
    }, [])

    const animationNavHandler = (navSelection)=> {
        // let translateX = 90;
        // setInterval(() => {
        //     if(height > 0){
        //         setStyle({height: height + 'vh'})
        //         height -= 10;
        //     }
        //     else return;
        // }, 35);
        setTimeout(() => {
            navManager(navSelection)
        }, 500);
    }

    return(
    <div id='cityscape'>
    <div onClick={()=> animationNavHandler('about')} type="button" onMouseEnter={()=>hoverManager('About Me')} onMouseLeave={()=> hoverManager('')} style={{transform: `translateX(${style.position})`}} className='tower tower1'><div id='aboutNavText1'>About Me</div></div>
    <div onClick={()=>animationNavHandler('portfolio')} type="button" onMouseEnter={()=>hoverManager('Portfolio')} onMouseLeave={()=> hoverManager('')} style={{transform: `translateX(${style.position})`}} className='tower tower2'><div id='portfolioNavText2'>Portfolio</div></div>
    <div onClick={()=>animationNavHandler('faq')} type="button" onMouseEnter={()=>hoverManager('F.A.Q.')} onMouseLeave={()=> hoverManager('')}style={{transform: `translateX(${style.position})`}} className='tower tower3'><div id='faqNavText3'>F.A.Q.</div></div>
    </div>
    )
}

export default Home;