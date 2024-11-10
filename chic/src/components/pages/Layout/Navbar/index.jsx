import React from 'react'
import "./style.css"
import logo from "../../../../../public/img/logo.png"
import github from "../../../../../public/img/github.png"
import gmail from "../../../../../public/img/gmail.png"
import insta from "../../../../../public/img/insta.png"



import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="logoImg">
        <img src={logo} alt="logo" />
      </div>
      <div className="name">
        <h1>Chic Harmony</h1>
      </div>
      <div className="social-media">

        <Link to='https://github.com/Fidanmusali'><button><img src={github} alt="github" /></button></Link>
        <button onClick={() => window.location.href = "mailto:fidanmusali05@gmail.com"}>
          <img src={gmail} alt="gmail" />
        </button>
        <Link mailto='https://www.instagram.com/iamfidanmusali?igsh=MWdqeXF3MWlsMTN3bg=='><button><img src={insta} alt="insta" /></button></Link>
      </div>
    </nav>
  )
}

export default Navbar