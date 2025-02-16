import React from "react"
import StyledWhatOffer from "./style/what-offer"
import { AiFillCheckCircle } from "react-icons/ai"
import data from '../../content/about/what-we-offer.json'
const WhatOffer = () => {
    return (
        <StyledWhatOffer>
            <div className="main-container">
                <h3>
                    What We Offer
                </h3>
                <h2 dangerouslySetInnerHTML={{ __html: data.heading }} />
                <ul className="wrapper">
                    {data.list.map((list, index) => (
                        <li key={index}>
                            <h4>
                                {list.heading}
                            </h4>
                            <ul>
                                {list.item.map((item, index) => (
                                    <li key={index}>
                                        <AiFillCheckCircle className="icon" />
                                        <span>{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </StyledWhatOffer>
    )
};

export default WhatOffer
