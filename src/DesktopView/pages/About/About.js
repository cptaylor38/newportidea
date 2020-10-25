import React, {useState} from 'react';
import './About.css';
const bioImage = require('../../../assets/images/selfieLinkedIn.png')
//p1 270, p2 180, p3 0, p4 90
const About = () => {
    const [puzzleOrientation, setPuzzleOrientation] = useState({
        p1: {
            rotation: 270,
            translateX: 20,
            translateY: 20 
        },
        p2: {
            rotation: 180,
            translateX: 40,
            translateY: 80
        },
        p3: {
            rotation: 0,
            translateX: 40,
            translateY: 60
        },
        p4: {
            rotation: 90,
            translateX: 20,
            translateY: 80
        }
    })

    const rotatePiece = (piece, currentOrientation) => {
        let orientation = currentOrientation + 90;
        switch(piece){
            case 'p1':
                setPuzzleOrientation({...puzzleOrientation, p1: {...puzzleOrientation.p1, rotation: orientation}})
                break;
            case 'p2':
                setPuzzleOrientation({...puzzleOrientation, p2: {...puzzleOrientation.p2, rotation: orientation}} )
                break;
            case 'p3':
                setPuzzleOrientation({...puzzleOrientation, p3: {...puzzleOrientation.p3, rotation: orientation}})
                break;
            case 'p4':
                setPuzzleOrientation({...puzzleOrientation, p4: {...puzzleOrientation.p4, rotation: orientation}})
                break;
            default:
                return;
        }
    }


    return(
    <div id='aboutCont'>
    {/* <img src={bioImage} id='selfie'/> */}
    <div id='pContainer'>
    <div id='puzzleP1' className='puzzlePiece' onClick={()=> rotatePiece('p1', puzzleOrientation.p1.rotation)} style={{transform: `rotate(${puzzleOrientation.p1.rotation}deg) translate(${puzzleOrientation.p1.translateX}px, ${puzzleOrientation.p1.translateY}px)`}}>a</div>
    <div id='puzzleP2' className='puzzlePiece' onClick={()=> rotatePiece('p2', puzzleOrientation.p2.rotation)} style={{transform: `rotate(${puzzleOrientation.p2.rotation}deg) translate(${puzzleOrientation.p2.translateX}px, ${puzzleOrientation.p2.translateY}px)`}}>a</div>
    <div id='puzzleP3' className='puzzlePiece' onClick={()=> rotatePiece('p3', puzzleOrientation.p3.rotation)} style={{transform: `rotate(${puzzleOrientation.p3.rotation}deg) translate(${puzzleOrientation.p3.translateX}px, ${puzzleOrientation.p3.translateY}px)`}}>a</div>
    <div id='puzzleP4' className='puzzlePiece' onClick={()=> rotatePiece('p4', puzzleOrientation.p4.rotation)} style={{transform: `rotate(${puzzleOrientation.p4.rotation}deg) translate(${puzzleOrientation.p4.translateX}px, ${puzzleOrientation.p4.translateY}px)`}}>a</div>
    </div>
    <div id='pPlacementCont'></div>
    </div>
    )
}

export default About;

//<div className='bioTxt'>Hello, my name is Corbin. From an early age, creating has always been a passion and outlet. Whether it was creating clay replicas of video game characters, painting and building props as promotional material at my local movie theater, or sketching a passing thought, creativity has always helped bring out the best in me.</div>
//<div className='bioTxt'>I obtained an Associates in Simulation and Game Design that inspired interest in a new kind of medium, programming and software development. I decied to pursue my curiousity further and found a program at a local university focusing on full stack development that showed me a new way to be creative. A creative outlet that can be practical and impactful.</div>