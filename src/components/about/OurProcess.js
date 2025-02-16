import React from "react"
import StyledOurProcess from "./style/our-process";
import { FaRegHandshake, FaRegLightbulb } from "react-icons/fa"
import { FiCheckCircle } from "react-icons/fi"
import { BsListCheck } from "react-icons/bs"
import data from '../../content/about/our-process.json'

const OurProcess = () => {
    return (
        <StyledOurProcess>
            <div className="main-container">
                <h3>
                    Our Process
                </h3>
                <h2 dangerouslySetInnerHTML={{ __html: data.heading }} />
                <div className="process-wrapper">
                    {data.list.map((data, index) => (
                        <div className="item" key={index}>
                            <div className="top">
                                <div className="number">{index + 1} </div>
                                {index === 0 && <FaRegHandshake className="icon" />}
                                {index === 1 && <FaRegLightbulb className="icon" />}
                                {index === 2 && <BsListCheck className="icon" />}
                                {index === 3 && <FiCheckCircle className="icon" />}
                            </div>
                            <div className="content">
                                {data.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </StyledOurProcess>
    )
};

export default OurProcess
