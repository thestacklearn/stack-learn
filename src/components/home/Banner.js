import React from "react"
import StyledBanner, { StyledFeature } from "./style/banner"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import data from '../../content/home/banner.json'
import features from '../../content/home/banner-features.json'
import { FiBook } from "react-icons/fi"
import { BsPeople } from "react-icons/bs"
import { VscRemoteExplorer } from "react-icons/vsc"
import { RiUserVoiceLine } from "react-icons/ri"
import bannerImg from "../../assets/images/banner-bg.webp"
import { Parallax } from "react-parallax"
import { TypeAnimation } from 'react-type-animation'

const Banner = () => {
    return (
        <>
            <section style={{ backgroundImage: `url(${bannerImg})` }} className="parallax">
                <StyledBanner>
                    <div className="hero">
                        <div className="left">
                            <div className="content">
                                <h1>{data.heading}</h1>
                                <TypeAnimation
                                    sequence={[
                                        'Data Science',
                                        1800,
                                        'Data Engineering',
                                        1800,
                                        'SDET(QA Automation)',
                                        1800,
                                        'RPA UiPath',
                                        1800,
                                        'Data Analytics',
                                        1800,
                                        'Azure',
                                        1800,
                                        'Microsoft Power BI',
                                        1800,
                                        'VLSI Design Verification',
                                        1800,
                                    ]}
                                    speed={50}
                                    className="labels"
                                    repeat={Infinity}
                                />
                                <p>{data.subHeading}</p>
                                <Link
                                    className="cta"
                                    to={data.cta}
                                >
                                    Find Courses <HiArrowNarrowRight />
                                </Link>
                            </div>
                        </div>
                        {/* <div className="right">
                    <img src={data.image} alt={data.alt} title={data.imageTitle} />
                    <div className="banner-shape-1">
                        <StaticImage
                            src="../../assets/images/home/banner-shapes/shape1.png"
                            formats={['auto', 'webp', 'avif']}
                            alt="Career Development"
                            title="Career Development"
                            quality={100}
                            placeholder="none"
                        />
                    </div>
                    <div className="banner-shape-2">
                        <StaticImage
                            src="../../assets/images/home/banner-shapes/shape2.png"
                            formats={['auto', 'webp', 'avif']}
                            alt="Career Development"
                            title="Career Development"
                            quality={100}
                            placeholder="none"
                        />
                    </div>
                    <div className="banner-shape-3">
                        <StaticImage
                            src="../../assets/images/home/banner-shapes/shape3.png"
                            formats={['auto', 'webp', 'avif']}
                            alt="Career Development"
                            title="Career Development"
                            quality={100}
                            placeholder="blurred"
                            layout="constrained"
                            loading="eager"
                        />
                    </div>
                </div> */}
                    </div>
                </StyledBanner >
            </section>
            <StyledFeature>
                <div className="feature-area">
                    <div className="wrapper">
                        <div className="main-grid">
                            {features.bannerFeatures.map((data, index) => (
                                <div className="feature-box" key={index}>
                                    <div className="icon">
                                        {index === 0 && <FiBook />}
                                        {index === 1 && <BsPeople />}
                                        {index === 2 && <VscRemoteExplorer />}
                                        {index === 3 && <RiUserVoiceLine />}
                                    </div>
                                    <div className="content">
                                        <h5>
                                            <span
                                                dangerouslySetInnerHTML={{ __html: data.title }}
                                            />
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </StyledFeature>
        </>
    )
};

export default Banner

