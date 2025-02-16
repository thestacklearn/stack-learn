import React from "react"
import StyledTestimonial from "./style/testimonial";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import data from '../../content/common/testmonials.json'

const Testimonial = () => {
    return (
        <StyledTestimonial>
            <div className="main-container">
                <div className="left">
                    <Carousel
                        axis="horizontal"
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        renderIndicator={false}
                        showStatus={false}
                        interval={5000}
                        className="custom-carousel"
                        renderArrowPrev={(clickHandler, hasPrev) => {
                            return (
                                <div
                                    className="custom-arrow prev"
                                    onClick={clickHandler}
                                >
                                    <BsArrowLeft className="icon" />
                                </div>
                            );
                        }}
                        renderArrowNext={(clickHandler, hasNext) => {
                            return (
                                <div
                                    className="custom-arrow next"
                                    onClick={clickHandler}
                                >
                                    <BsArrowRight className="icon" />
                                </div>
                            );
                        }}
                    >
                        {data.testmonial.map((data, index) => (
                            <div className="carousel-container" key={index}>
                                <div className="rating">
                                    {data.rating === '5' ?
                                        <>

                                            <IoIosStar className="star" />
                                            <IoIosStar className="star" />
                                            <IoIosStar className="star" />
                                            <IoIosStar className="star" />
                                            <IoIosStar className="star" />
                                        </>
                                        :
                                        <>
                                            <IoIosStar className="star" />
                                            <IoIosStar className="star" />
                                            <IoIosStar className="star" />
                                            <IoIosStar className="star" />
                                            <IoIosStarHalf className="star" />
                                        </>

                                    }
                                </div>
                                <p>
                                    {data.description}
                                </p>
                                <div className="student-details">
                                    <div className="student">
                                        <img src={data.studentImage} className="thumb" />
                                        <div className="meta">
                                            <span className="name">{data.studentName}</span>
                                            <span className="course">{data.courseName}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="right">
                    <h3>{data.heading}</h3>
                    <h2>{data.subHeading}</h2>
                    <p>
                        {data.description}
                    </p>
                    <h6>{data.aboutHeadng}</h6>
                    <div className="features">
                        <div className="list">
                            <h6>{data.leftPercentage}</h6>
                            <span dangerouslySetInnerHTML={{ __html: data.leftDescription }} />
                        </div>
                        <div className="list">
                            <h6>{data.rightPercentage}</h6>
                            <span dangerouslySetInnerHTML={{ __html: data.rightDescription }} />
                        </div>
                    </div>
                </div>
            </div>
        </StyledTestimonial>
    )
};

export default Testimonial
