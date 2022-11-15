import React from 'react'
import "./Navbar.css"
import { useState } from 'react'
import image3 from "../../images/Vector3.svg"
import image4 from "../../images/Vector4.svg"
import image20 from "../../images/connect1.svg"
import image21 from "../../images/connect2.svg"
import { NavLink} from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [toggleState, setTogglestate] = useState(0);
  const toggleTab = (index) => {
    setTogglestate(index);
  }
  return (
    <div >
      <section className="navcontainer">
        <div>
          <img src={image3} alt="image3" />
          <img src={image4} alt="image4" />
        </div>
        <div className="links">
          <ul className='desklinks'>
            <li> <NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/placetostay">Place to stay</NavLink></li>
            <li><a href="#nfts">NFTs</a></li>
            <li> <a href="#community">Community</a></li>
          </ul>
        </div>
        <div className="connect__content">
          <button className="connect__button connect_btn" onClick={() => toggleTab(1)}>Connect wallet</button>

          <div className={toggleState === 1 ? "connect__modal active-modal" : "connect__modal"}>
            <div className="connect__modal-content">
              <i className="uil uil-times connect__modal-close" onClick={() => toggleTab(0)}></i>
              <h1 className="connect__modal-title">Connect Wallet</h1>
              <div className="line"></div>
              <p className="connect__modal-description">Choose your prefered wallet</p>
              <ul className="connect__modal-connect grid">
                <li className="connect__modal-connect">
                  <button className='connect_btns'>
                    <div>
                      <img src={image21} alt={image21} />
                      <h2>Metamask</h2>
                    </div>
                    <i class="uil uil-angle-right-b connect__modal-icon"></i>
                  </button>

                </li>
                <li className="connect__modal-connect">
                  <button className='connect_btns'>
                    <div>
                      <img src={image20} alt={image20} />
                      <h2>Wallet Connect</h2>
                    </div>
                    <i class="uil uil-angle-right-b connect__modal-icon"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          onClick={() => setNavbar(!navbar)}
          className="tog_nav"
        >
          {navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {navbar && (
          <>
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-500 ease-in-out-500 z-10">
              <div className="mobilelinkscontain">
          <ul className='mobilelinks'>
            <li> <a href="/">Home</a></li>
            <li><NavLink to="/placetostay">Place to stay</NavLink></li>
            <li><a href="#nfts">NFTs</a></li>
            <li> <a href="#community">Community</a></li>
            <li>    <button onClick={() => toggleTab(1)}>Connect wallet</button></li>
          </ul>
       
        </div>
               
            </ul>
          </>
        )}
      </section> 
    </div>
  )
}

export default Navbar