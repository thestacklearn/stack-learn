import React from "react"
import StyledAbout from "./style/about";
import data from '../../content/study-abroad/about.json'

const About = () => {
    return (
        <StyledAbout>
            <div className="wrapper">
                <div className="left">
                    <img src={data.image} className="image" alt="" />
                </div>
                <div className="right">
                    <h3>{data.heading}</h3>
                    <p>
                        {data.description}
                    </p>
                </div>
            </div>
        </StyledAbout>
    )
};

export default About
