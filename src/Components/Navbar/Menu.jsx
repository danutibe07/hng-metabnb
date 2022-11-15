import React from 'react'
import {Link} from "react-router-dom"
const Menu = () => {
  return (
    <div className="menu">
        <ul>
            <li> <a href="/">Home</a></li>
            <li><Link to="/placetostay">Place to stay</Link></li>
            <li><a href="#nfts">NFTs</a></li>
            <li> <a href="#community">Community</a></li>
        </ul>
    </div>
  )
}
export default Menu