import React from 'react'
import StyledLearnerBenefits from './style/learner-benefits'
import img1 from "../../assets/images/a.webp"
import img2 from "../../assets/images/b.webp"
import img3 from "../../assets/images/c.webp"
import { TiTick, TiStar } from "react-icons/ti"
import { RiUserSearchLine } from "react-icons/ri"
import { MdOutlineSupport } from "react-icons/md"

const LearnerBenefits = () => {
    return (
        <StyledLearnerBenefits>
            <div className="main-container">
                <h3>Learner Benefits</h3>
                <h2>Advantages of TheStackLearn</h2>
                <div className='benefits-list'>
                    <div className='benefits-item'>
                        <div className='left'>
                            <img src={img1} />
                        </div>
                        <div className='right'>
                            <h3>
                                Access Tailored Guidance
                            </h3>
                            <p>
                                Take advantage of weekly mentorship sessions conducted by industry experts, designed to provide you with personalized attention in intimate groups of 5-15 learners. Immerse yourself in practical learning by participating in industry-relevant projects.
                            </p>
                            <ul>
                                <li>
                                    <div className='icon'>
                                        <TiTick />
                                    </div>
                                    <div className='title'>
                                        1000+
                                    </div>
                                    <div className='sub-title'>
                                        Mentorship Sessions Completed
                                    </div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <TiStar />
                                    </div>
                                    <div className='title'>
                                        4.7/5
                                    </div>
                                    <div className='sub-title'>
                                        Average Mentor Rating
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='benefits-item'>
                        <div className='left'>
                            <img src={img2} />
                        </div>
                        <div className='right'>
                            <h3>
                                Committed Guidance for Your Career
                            </h3>
                            <p>
                                Take advantage of our mock interview services to ensure you are fully prepared for your dream job. Our tailored sessions will help you refine your interview skills and boost your confidence. Additionally, stay ahead of others by actively participating in hackathons and career fairs, where you can showcase your abilities, make valuable connections, and increase your chances of securing your desired career opportunity.
                            </p>
                            <ul>
                                <li>
                                    <div className='icon'>
                                        <RiUserSearchLine />
                                    </div>
                                    <div className='title'>
                                        100+
                                    </div>
                                    <div className='sub-title'>
                                        Hiring Companies
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='benefits-item'>
                        <div className='left'>
                            <img src={img3} />
                        </div>
                        <div className='right'>
                            <h3>
                                Networking and Program Support
                            </h3>
                            <p>
                                Enhance your professional network by engaging in peer interactions, attending sessions led by industry leaders, and benefit from the support of a dedicated program manager who will assist you in resolving any queries you may have.
                            </p>
                            <ul>
                                <li>
                                    <div className='icon'>
                                        <MdOutlineSupport />
                                    </div>
                                    <div className='title'>
                                        1:1
                                    </div>
                                    <div className='sub-title'>
                                        Program Support
                                    </div>
                                </li>
                                <li>
                                    <div className='icon'>
                                        <TiStar />
                                    </div>
                                    <div className='title'>
                                        4.5/5
                                    </div>
                                    <div className='sub-title'>
                                        Average Support Rating
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </StyledLearnerBenefits>
    )
}

export default LearnerBenefits