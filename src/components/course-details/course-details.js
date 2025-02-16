import React from "react"
import StyledCourseDetails from "./style/course-details"
import img1 from '../../assets/images/shapes/shape2.png'
import img2 from '../../assets/images/shapes/shape3.png'
import {
    MouseParallaxChild,
    MouseParallaxContainer
} from "react-parallax-mouse"
import { BsPersonWorkspace } from "react-icons/bs"
import { BiBookAlt } from "react-icons/bi"
import { MdOutlineAccessTime } from "react-icons/md"
import CourseContent from "./course-content"
import { Parallax } from "react-parallax"

const CourseDetails = ({ data }) => {
    const details = data.markdownRemark.frontmatter;
    return (
        <>
            <StyledCourseDetails>
                <Parallax bgImage={details.featuredImage.publicURL} strength={500} className="banner">
                    <div className="container">
                        <div className="wrapper">
                            <h1>{details.courseName}</h1>
                            <h2>{details.subHeading}</h2>
                            <ul className="course-meta">
                                <li>
                                    <BiBookAlt className="icon" />
                                    <span>{details.totalQuizzes} Quizzes</span>
                                </li>
                                <li>
                                    <span className="divider"></span>
                                </li>
                                <li>
                                    <MdOutlineAccessTime className="icon" />
                                    <span>{details.totalTime}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Parallax>
            </StyledCourseDetails>
            <CourseContent details={details} />
        </>
    )
};

export default CourseDetails
