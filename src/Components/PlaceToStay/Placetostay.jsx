import React from 'react'
import "./Placetostay.css"
import locationimg from "../../images/locationimg.svg"
import Places from './Placetostaydata'
const Placetostay = () => {
    return (
        <div>
            <section className="placetostay" id="placetostay">
                <div className="placenav">
                    <div className="placelinks">
                        <a href="/placetostay">Restaurant</a>
                        <a href="/placetostay">Cottage</a>
                        <a href="/placetostay">Castle</a>
                        <a href="/placetostay">fantast city</a>
                        <a href="/placetostay">beach</a>
                        <a href="/placetostay">Carbins</a>
                        <a href="/placetostay">Off-grid</a>
                        <a href="/placetostay">Farm</a>
                    </div>
                    <img className="placenavimg" src={locationimg} alt={locationimg} />
                </div>
                <div className='box'>
                    <div className="card">
                        {Places.map((card) => (
                            <div className="card-preview" key={card.id}>
                                <img src={card.place_image} alt={card.place_image} />
                                <div className="placecol">
                                    <h4 className="info-1">{card.place_name}</h4>
                                    <p className="info-2">{card.place_price}</p>
                                </div>
                                <div className="placecol">
                                    <p className="info-3">{card.place_dist}</p>
                                    <p className="info-4">{card.place_avail}</p>
                                </div>
                                <div className="star">
                                    <img src={card.place_star} alt={card.place_star} />
                                    <img src={card.place_star} alt={card.place_star} />
                                    <img src={card.place_star} alt={card.place_star} />
                                    <img src={card.place_star} alt={card.place_star} />
                                    <img src={card.place_star} alt={card.place_star} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Placetostay