import React from 'react'
import myimg from "../Icons/my.png"
function welcome() {
  return (
    <div className='welcomesection'>
        <span className='topshadow'></span>
        <div className='welcomesection-inner'>
            <div className='left'>
                <p>Hey, I am Giorgi</p>
                <h1>I develop <span>Front-end</span> web applications </h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</h4>
            </div>
            <div className='right'>
              <img src={myimg} alt=""></img>
            </div>
        </div>
    </div>
  )
}

export default welcome
