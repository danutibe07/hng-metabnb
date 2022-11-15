import React from 'react'
import Frame123 from "../../images/Frame123.svg"
// import image11 from "../../images/learn2.svg"
// import image12 from "../../images/learn3.svg"
import "../Home/Home.css"
const Learnmore = () => {
    return (
        <section className="learnmore">
            <div className="learnmore_row">
                <div className="col moveitem">
                    <h1>Metabnb NFTs</h1>
                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button className="learnmore_btn">Learn More</button>
                    <img className=' displaynone' src={Frame123} alt={Frame123} />
                </div>
                <div className="col learn_cards displayblock">
                    <img className='learning1' src={Frame123} alt={Frame123} />
                </div>
            </div>
        </section>
    )
}

export default Learnmore