import { Link } from 'react-router-dom';
import './AboutContentStyle.css';
import prjct1 from '../assets/project1.png'


import React from 'react'

function AboutContent() {
   
  return (
    
    <div className='about'>
        <div className="left">
            <h1> Who Am I</h1>
            <p>I am a ract front-end developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact"><button className='btn'>Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={prjct1} alt="Not Found" className='img'/>
                </div>

                <div className="img-stack bottom">
                    <img src={prjct1} alt="Not Found" className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent