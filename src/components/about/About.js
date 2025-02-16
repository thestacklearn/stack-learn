import React from "react"
import StyledAbout from "./style/about";
import { StaticImage } from 'gatsby-plugin-image'
import { MdOutlineRecordVoiceOver } from "react-icons/md"
import { RiProjectorLine, RiBookletLine, RiCodeBoxLine } from "react-icons/ri"
import { FaPodcast } from "react-icons/fa"
import { TbCertificate } from "react-icons/tb"
import data from '../../content/about/about.json'

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
                    <ul>
                        {data.list.map((data, index) => (
                            <li key={index}>
                                {index === 0 && <MdOutlineRecordVoiceOver className="icon" />}
                                {index === 1 && <RiCodeBoxLine className="icon" />}
                                {index === 2 && <RiProjectorLine className="icon" />}
                                {index === 3 && <FaPodcast className="icon" />}
                                {index === 4 && <RiBookletLine className="icon" />}
                                {index === 5 && <TbCertificate className="icon" />}
                                <span>
                                    {data.title}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </StyledAbout>
    )
};

export default About
