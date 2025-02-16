import React from "react"
import StyledStrategy from "./style/strategy";
import data from '../../content/home/why-choose-us.json'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { HiOutlineUsers } from 'react-icons/hi'
import { MdOutlineJoinRight } from 'react-icons/md'
import { FaFly } from 'react-icons/fa'
import bgImg from "../../assets/images/why-choose-us.jpeg"

const Strategy = () => {
    return (
        <StyledStrategy>
            <div className="main-container">
                <h3>{data.heading}</h3>
                <h2
                    dangerouslySetInnerHTML={{ __html: data.subHeading }}
                />
                <div className="main-wrapper">
                    <div className="strategy-list">
                        {data.list.map((data, index) => (
                            <div className="strategy-wrapper" key={index}>
                                <div className="top-inner">
                                    {index === 0 && < FaChalkboardTeacher className="icon" />}
                                    {index === 1 && < HiOutlineUsers className="icon" />}
                                    {index === 2 && < MdOutlineJoinRight className="icon" />}
                                    {index === 3 && < FaFly className="icon" />}
                                </div>
                                <div className="box">
                                    <h3>{data.title}</h3>
                                    <span>{data.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="img-wrapper">
                        <img src={bgImg} />
                    </div>
                </div>
            </div>
        </StyledStrategy>
    )
};

export default Strategy
