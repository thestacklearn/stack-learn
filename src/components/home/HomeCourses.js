import React from "react"
import StyledHomeCourses from "./style/home-courses"
import { GatsbyImage } from 'gatsby-plugin-image'
import { BiTimeFive } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "gatsby";

const HomeCourses = ({ itCourses, nonItCourses, list }) => {
    const courseList = [];
    const nonITCourseList = [];
    itCourses && itCourses.edges.forEach(edge => {
        courseList.push({
            courseLevel: edge.node.frontmatter.courseLevel,
            courseName: edge.node.frontmatter.courseName,
            featuredImage: edge.node.frontmatter.featuredImage.publicURL,
            shortDescription: edge.node.frontmatter.shortDescription,
            slug: edge.node.frontmatter.slug,
            studentsCount: edge.node.frontmatter.studentsCount,
            totalQuizzes: edge.node.frontmatter.totalQuizzes,
            totalTime: edge.node.frontmatter.totalTime
        })
    });
    nonItCourses && nonItCourses.edges.forEach(edge => {
        nonITCourseList.push({
            courseLevel: edge.node.frontmatter.courseLevel,
            courseName: edge.node.frontmatter.courseName,
            featuredImage: edge.node.frontmatter.featuredImage.publicURL,
            shortDescription: edge.node.frontmatter.shortDescription,
            slug: edge.node.frontmatter.slug,
            studentsCount: edge.node.frontmatter.studentsCount,
            totalQuizzes: edge.node.frontmatter.totalQuizzes,
            totalTime: edge.node.frontmatter.totalTime
        })
    });
    return (
        <StyledHomeCourses>
            <div className="main-container">
                {list &&
                    <>
                        <h3>Courses</h3>
                    </>
                }
                {itCourses &&
                    <>
                        <h2>Our Most Popular IT Courses</h2>
                        <div className="courses-list">
                            {courseList.map((course, index) => (
                                <div className="card" key={index}>
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img src={course.featuredImage} className="img" alt={course.courseName} />
                                            <div className="course-duration">
                                                <BiTimeFive />
                                                <span>
                                                    {course.totalTime}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="content">
                                            {/* <div className="course-level">
                                        {course.courseLevel}
                                    </div> */}
                                            <h6>
                                                {course.courseName}
                                            </h6>
                                            <div className="desc">
                                                {course.shortDescription}
                                            </div>
                                            <div className="meta-wrapper">
                                                <hr className="divider" />
                                                <ul className="course-meta">
                                                    <li className="item">
                                                        <FiUsers />
                                                        <span>{course.studentsCount} Students</span>
                                                    </li>
                                                    <li className="item">
                                                        <HiOutlineDocumentText />
                                                        <span>{course.totalTime}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hover-content">
                                        <div className="content">
                                            <div className="top">
                                                {/* <div className="course-level">
                                            {course.courseLevel}
                                        </div> */}
                                                <h6>
                                                    {course.courseName}
                                                </h6>
                                                <p>{course.shortDescription}</p>
                                            </div>
                                            <div className="bottom">
                                                <ul className="course-meta">
                                                    <li className="item">
                                                        <FiUsers />
                                                        <span>{course.studentsCount} Students</span>
                                                    </li>
                                                    <li className="item">
                                                        <BiTimeFive />
                                                        <span>{course.totalTime}</span>
                                                    </li>
                                                </ul>
                                                <hr className="divider" />
                                                <Link
                                                    className="cta"
                                                    to={course.slug}
                                                >
                                                    View Course <BsArrowRight />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                }
                {nonItCourses &&
                    <>
                        <h2 className="mt-4">Our Most Popular Non IT Courses</h2>
                        <div className="courses-list">
                            {nonITCourseList.map((course, index) => (
                                <div className="card" key={index}>
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img src={course.featuredImage} className="img" alt={course.courseName} />
                                            <div className="course-duration">
                                                <BiTimeFive />
                                                <span>
                                                    {course.totalTime}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="content">
                                            {/* <div className="course-level">
                                        {course.courseLevel}
                                    </div> */}
                                            <h6>
                                                {course.courseName}
                                            </h6>
                                            <div className="desc">
                                                {course.shortDescription}
                                            </div>
                                            <div className="meta-wrapper">
                                                <hr className="divider" />
                                                <ul className="course-meta">
                                                    <li className="item">
                                                        <FiUsers />
                                                        <span>{course.studentsCount} Students</span>
                                                    </li>
                                                    <li className="item">
                                                        <HiOutlineDocumentText />
                                                        <span>{course.totalTime}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hover-content">
                                        <div className="content">
                                            <div className="top">
                                                {/* <div className="course-level">
                                            {course.courseLevel}
                                        </div> */}
                                                <h6>
                                                    {course.courseName}
                                                </h6>
                                                <p>{course.shortDescription}</p>
                                            </div>
                                            <div className="bottom">
                                                <ul className="course-meta">
                                                    <li className="item">
                                                        <FiUsers />
                                                        <span>{course.studentsCount} Students</span>
                                                    </li>
                                                    <li className="item">
                                                        <BiTimeFive />
                                                        <span>{course.totalTime}</span>
                                                    </li>
                                                </ul>
                                                <hr className="divider" />
                                                <Link
                                                    className="cta"
                                                    to={course.slug}
                                                >
                                                    View Course <BsArrowRight />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                }
            </div>
        </StyledHomeCourses>
    )
};

export default HomeCourses
