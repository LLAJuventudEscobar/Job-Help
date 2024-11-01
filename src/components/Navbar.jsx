import React from 'react'
import logo from '../assets/logo.png'
import '../styles/navBar.css'

const Navbar = () => {
  return (
    <div id='navContainer'>
        <div id='navBar'>
            <div>
                <img alt='logo' src={logo} id="logo"/>
                <h1 id="name">Juventud LLA Escobar</h1>
            </div>
            <div id="navLinks">
            <a className='navAnchor' href="#inicio">Inicio</a>
            <a className='navAnchor' href="#cv">Currículum</a>
            <a className='navAnchor' href="#linkedin">LinkedIn</a>
            <a className='navAnchor' href="#entrevistas">Entrevistas</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
