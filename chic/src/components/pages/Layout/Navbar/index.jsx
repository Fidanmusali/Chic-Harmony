import React from 'react'
import "./style.css"
import logo from "../../../../../public/img/logo.png"

const Navbar = () => {
  return (
    <nav>
        <div className="logoImg">
            <img src={logo} alt="" />
        </div>
        <div className="name">
          <h1>Chic Harmony</h1>
        </div>
        <div className="social-media">
          
          <button>sm</button>
          <button>sm</button>
          <button>sm</button>
        </div>
    </nav>
  )
}

export default Navbar