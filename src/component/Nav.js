import React from "react";
import { Link } from "react-router-dom";
import './Style.css'


const Nav = () => {
  return (

    < div className="navbar">
      <nav>
        <ul className="nav-links">


          <Link to="/"><span className="home"> Home</span> </Link>


          <Link to="/about">About</Link>


          <Link to="/headtail"><span className="head-tails">   Head&Tail </span></Link>
        </ul>
      </nav>


    </div>
  )
}
export default Nav;