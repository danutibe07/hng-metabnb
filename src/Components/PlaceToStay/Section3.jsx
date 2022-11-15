import React from 'react'
import Place from "./PlaceData"
import "./Placetostay.css"
const Section3 = () => {
  return (
    <div>
        <section className="placetostay" id="placetostay">
                <h1>Inspiration for your next adventure</h1>
                <div className='box'>
                    <div className="card">
                        {Place.map((card) => (
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

export default Section3