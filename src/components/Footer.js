import './FooterStyle.css'
import React from 'react'
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>123 giridih jharkhand</p>
                        <p>India.</p>

                    </div>
                </div>
                <div className="phone">
                <h4> 
                    <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                      9113346428
                </h4>
                </div>
                <div className="email">
                <h4> 
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                     welcome@gmail.com
                </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo repudiandae itaque.josm someo jano.</p>
                <div className="social">
                <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaTwitter size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaInstagram size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer