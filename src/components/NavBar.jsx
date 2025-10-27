import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import Home from './Home.jsx' 
import './styles/NavBar.css'
function NavBar() {
  return (
    <>
      <nav >
        <div ><Link to='/' className="logo">🖊turbo ai</Link></div>
        <button>Start now</button>
      </nav>
   
    </>
  )
}

export default NavBar;
