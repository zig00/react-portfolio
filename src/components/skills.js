import React from "react";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function Skills() {
    const _skills = [
        {
            id: 0,
            name: "HTML",
            desc: "Creating and managing a proper website structure through HTML. First of all, creating a website starts with HTML, so it is very important to manage it correctly",
            image: require('../Icons/html.png')
        },
        {
            id: 1,
            name: "CSS",
            desc: "Creating animations, shadows and a beautiful and modern interface with CSS. A beautiful and modern style is very important for a website",
            image: require('../Icons/css.png')
        },
        {
            id: 2,
            name: "Javascript",
            desc: "Creating functions, writing scripts and also working with API. JavaScript is a programming language used in web development to create both front-end and back-end functionality.",
            image: require('../Icons/js.jpg')
        },
        {
            id: 3,
            name: "React",
            desc: "Creating functions, writing scripts and also working with API. JavaScript is a programming language used in web development to create both front-end and back-end functionality.",
            image: require('../Icons/react.png')
        },
        {
            id: 4,
            name: "Github",
            desc: "GitHub is one of the most important in development. With its help we can control the versions of our project. With its help, several developers can work on the same project in their own space and not interfere with each other",
            image: require('../Icons/github.png')
        }
    ]

  

    const listSkills = _skills.map((myListSkills) =>
        <div className='skillcol' key={myListSkills.id} >
            <img src={myListSkills.image}></img>
            <h1>{myListSkills.name}</h1>
            <p>{myListSkills.desc}</p>
        </div>
    );

    // slider dragscroll

    const ref = useRef();
    const { events } = useDraggable(ref);


    return (
        <div className='skills'>
            <div className='title'>
                <p className='title-st'>My Skills</p>
                <h1 className='title-bt'>Experience</h1>
            </div>
            <div className='skills-inner' {...events} ref={ref}>
                {listSkills}

            </div>
        </div>
    )
}

export default Skills