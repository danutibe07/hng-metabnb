import React from 'react'
import "./Home.css"
import image5 from "../../images/homeimage1.svg"
import image6 from "../../images/homeimage2.svg"
import image7 from "../../images/homeimage3.svg"
import image8 from "../../images/homeimage4.svg"
import Group1 from "../../images/Group1.svg"
import Group3 from "../../images/Group3.svg"
import Group2 from "../../images/Group2.svg"
import Learnmore from '../Learnmore/Learnmore'
import Section3 from '../PlaceToStay/Section3'

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <div className="row">
                    <div className="col">
                        <div className='home__title'>
                            Rent a <span>Place</span>  away from <span>Home</span>  in the <span>Metaverse</span>
                        </div>
                        <div className='home__subtitle'>
                            we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                        </div>
                        <div className="searchbar">
                            <input className='searchbar1' type="search" name="search" placeholder=' Search for location' />
                           <button className="searchbar2">Search</button>
                        </div>
                    </div>
                    <div className="colimages">
                        <div className="colimg1">
                            <img src={image5} alt="image5" />
                            <img src={image6} alt="image6" />
                        </div>
                        <div className="colimg2">
                            <img src={image7} alt="image7" />
                            <img src={image8} alt="image8" />
                        </div>
                    </div>
                </div>
            </div>
            <section className="section2">
            <img src={Group1} alt="Group1" />
            <img src={Group2} alt="Group2" />
            <img src={Group3} alt="Group3" />
            </section>
            <Section3 />
            <Learnmore />
        </>
    )
}

export default Home