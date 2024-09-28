import React from 'react'
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function Portfolio() {
    const ref = useRef();
    const { events } = useDraggable(ref);
    const _projects = [
        {
            id:0,
            name:"Arttteo website",
            desc:"dasndasjkdhsakhdlkasdhshdklsadasdasdasdsafdskldjakl",
            image: require('../Icons/arealportfolio2.png')
        },
        {
            id:1,
            name:"Arttteo website",
            desc:"dasndasjkdhsakhdlkasdhshdklsadasdasdasdsafdskldjakl",
            image: require('../Icons/arealportfolio2.png')
        },
        {
            id:2,
            name:"Arttteo website",
            desc:"dasndasjkdhsakhdlkasdhshdklsadasdasdasdsafdskldjakl",
            image: require('../Icons/arealportfolio2.png')
        },
        {
            id:3,
            name:"Arttteo website",
            desc:"dasndasjkdhsakhdlkasdhshdklsadasdasdasdsafdskldjakl",
            image: require('../Icons/arealportfolio2.png')
        },
        {
            id:4,
            name:"Arttteo website",
            desc:"dasndasjkdhsakhdlkasdhshdklsadasdasdasdsafdskldjakl",
            image: require('../Icons/arealportfolio2.png')
        },
        {
            id:5,
            name:"Arttteo website",
            desc:"dasndasjkdhsakhdlkasdhshdklsadasdasdasdsafdskldjakl",
            image: require('../Icons/arealportfolio2.png')
        }
    ]
 
    const portfolioprojects = _projects.map((pproject) => 
        <div className='pproject-item' key={pproject.id} >
            <p>{pproject.name}</p>
            <img src={pproject.image}></img>
            <div className='pshadow'></div>
        </div>
    )
    
    return (
        <div className='portfolio-main'>
            <div className='title'>
                <p className='title-st'>Projects</p>
                <h1 className='title-bt'>My portfolio</h1>
            </div>
            <div className='portfolio-inner' {...events} ref={ref}>
                {portfolioprojects}

            </div>
        </div>
    )
}

export default Portfolio