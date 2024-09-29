import React from 'react'
import Headerlogo from "../Icons/Headerlogo.png"
import { useEffect } from "react";
import GBCV from '../Files/MYNEWCV.pdf'
function Header() {

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 100 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
    return (
        <header className='header-section'>
            <div className='header-inner'>
                <div className='Headerlogo'>
                    <img src={Headerlogo} alt=""></img>
                    <p>Giorgi</p>
                </div>
                <nav>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>About me</li>
                    <li>Contact</li>
                </nav>
                <a href={GBCV} download="GBCV" >
                    <button className='btnslide'>Download my CV</button>
                </a>

            </div>
        </header>
    )
}

export default Header
