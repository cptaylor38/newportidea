import React, {useState} from 'react';
import './About.css';
const bioImage = require('../../../assets/images/selfieLinkedIn.png')

const About = () => {
    const [puzzleOrientation, setPuzzleOrientation] = useState({
        p1: {
            rotation: 270,
            left: '5%',
            top: '5%' 
        },
        p2: {
            rotation: 180,
            left: '5%',
            top: '5%'
        },
        p3: {
            rotation: 0,
            left: '5%',
            top: '5%'
        },
        p4: {
            rotation: 90,
            left: '5%',
            top: '5%'
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

    const dragListener = (e, div) => {
        let x = puzzleOrientation[div]
        console.log(e.pageX, e.pageY, div)
        switch(div){
            case 'p1':
                setPuzzleOrientation({...puzzleOrientation, p1: {...puzzleOrientation.p1, top: e.pageY, left: e.pageX}})
            case 'p2':
                setPuzzleOrientation({...puzzleOrientation, p2: {...puzzleOrientation.p2, top: e.pageY, left: e.pageX}})
            case 'p3':
                setPuzzleOrientation({...puzzleOrientation, p3: {...puzzleOrientation.p3, top: e.pageY, left: e.pageX}})
            case 'p4':
                setPuzzleOrientation({...puzzleOrientation, p4: {...puzzleOrientation.p4, top: e.pageY, left: e.pageX}})
            default:
                return;
        }
    }

    return(
    <div id='aboutCont'>
    {/* <img src={bioImage} id='selfie'/> */}
    <div id='pContainer'>
    <div id='puzzleP1' className='puzzlePiece' onDrag={e => dragListener(e, 'p1')} onClick={()=> rotatePiece('p1', puzzleOrientation.p1.rotation)} style={{transform: `rotate(${puzzleOrientation.p1.rotation}deg)`, top: `${puzzleOrientation.p1.top}%`, left: `${puzzleOrientation.p1.left}%`}}>a</div>
    <div id='puzzleP2' className='puzzlePiece' onDrag={e => dragListener(e, 'p2')} onClick={()=> rotatePiece('p2', puzzleOrientation.p2.rotation)} style={{transform: `rotate(${puzzleOrientation.p2.rotation}deg)`, top: `${puzzleOrientation.p2.top}%`, left: `${puzzleOrientation.p2.left}%`}}>a</div>
    <div id='puzzleP3' className='puzzlePiece' onDrag={e => dragListener(e, 'p3')} onClick={()=> rotatePiece('p3', puzzleOrientation.p3.rotation)} style={{transform: `rotate(${puzzleOrientation.p3.rotation}deg)`, top: `${puzzleOrientation.p3.top}%`, left: `${puzzleOrientation.p3.left}%`}}>a</div>
    <div id='puzzleP4' className='puzzlePiece' onDrag={e=> dragListener(e, 'p4')} onClick={()=> rotatePiece('p4', puzzleOrientation.p4.rotation)} style={{transform: `rotate(${puzzleOrientation.p4.rotation}deg)`, top: `${puzzleOrientation.p4.top}%`, left: `${puzzleOrientation.p4.left}%`}}>a</div>
    </div>
    <div id='pPlacementCont'></div>
    </div>
    )
}

export default About;

//<div className='bioTxt'>Hello, my name is Corbin. From an early age, creating has always been a passion and outlet. Whether it was creating clay replicas of video game characters, painting and building props as promotional material at my local movie theater, or sketching a passing thought, creativity has always helped bring out the best in me.</div>
//<div className='bioTxt'>I obtained an Associates in Simulation and Game Design that inspired interest in a new kind of medium, programming and software development. I decied to pursue my curiousity further and found a program at a local university focusing on full stack development that showed me a new way to be creative. A creative outlet that can be practical and impactful.</div>