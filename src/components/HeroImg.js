import './HeroImgStyle.css'
import Intoimg from '../assets/R.jpeg';

import React from 'react'
import { Link } from 'react-router-dom';

function HeroImg() {
  return (
    <div className='hero'>
        <div className="mask">
            <img className='into-img' src={Intoimg} alt="intoimg" />
        </div>
        <div className="content">
            <p>hi, i am a freelancer</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/Project" className='btn'>Projects</Link>
                <Link to="/Contact" className='btn'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg