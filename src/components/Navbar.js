import React, { useState } from 'react'
import './NavbarStyle.css'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'


function Navbar() {
    const[click,setClick]=useState(false)
    const handleOnClick=()=>{
        setClick(!click)
    }
    const[color,setColor]=useState(false)
    const changeColor=()=>{
        if(window.scrollY >=100){
            setColor(true)

        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll",changeColor);


  return (
    <div className={color ? "header header-bg":"header"}> 
     <Link to="/"> <h1>Portfolio</h1></Link>
    <ul className={click ? "nav-menu active":"nav-menu"}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/project">Project</Link>
    </li>
  </ul>
  <div className="hamburger" onClick={handleOnClick}>
   {click? <FaTimes size={30} style={{color:"#fff"}}/> :<FaBars size={30} style={{color:"#fff"}}/> } 
    
    
  </div>
  </div>
  )
}

export default Navbar