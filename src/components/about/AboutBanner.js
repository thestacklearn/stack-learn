import React from "react"
import img1 from '../../assets/images/shapes/shape2.png'
import img2 from '../../assets/images/shapes/shape3.png'
import {
    MouseParallaxChild,
    MouseParallaxContainer
} from "react-parallax-mouse"
import StyledBanner from "./style/banner"
import data from '../../content/about/banner.json'
import bannerImg from "../../assets/images/about-bg.jpeg"

const AboutBanner = () => {
    return (
        <StyledBanner style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="banner">
                <div className="container">
                    <h1>About Us</h1>
                    <p className="desc">{data.description}</p>
                </div>
            </div>
        </StyledBanner>
    )
};

export default AboutBanner