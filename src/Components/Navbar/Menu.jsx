import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"
const Menu = () => {
  return (
    <div className="menu">
        <ul>
            <li> <a href="/">Home</a></li>
            <li><NavLink to="/placetostay">Place to stay</NavLink></li>
            <li><a href="#nfts">NFTs</a></li>
            <li> <a href="#community">Community</a></li>
        </ul>
    </div>
  )
}
export default Menu