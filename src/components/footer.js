import React from 'react'
import Headerlogo from "../Icons/Headerlogo.png"
import '@fortawesome/fontawesome-free/css/all.min.css';
function footer() {
    return (
        <div className='footer'>
            <div className='footer-inner'>
                <div className='footer-top'>
                    <div className='Headerlogo'>
                        <img src={Headerlogo}></img>
                        <p>Giorgi</p>
                    </div>
                    <nav>
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>About me</li>
                        <li>Contact</li>
                    </nav>
                    <div className='social-links'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default footer