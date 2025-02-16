import React from "react"
import StyledWhatOffer from "./style/what-offer"
import data from '../../content/study-abroad/what-we-offer.json'
const WhatOffer = () => {
    return (
        <StyledWhatOffer>
            <div className="main-container">
                <h2 dangerouslySetInnerHTML={{ __html: data.heading }} />
                <ul className="wrapper">
                    {data.list.map((list, index) => (
                        <li key={index}>
                            <h4>
                                {list.heading}
                            </h4>
                            <p className="desc">{list.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </StyledWhatOffer>
    )
};

export default WhatOffer
