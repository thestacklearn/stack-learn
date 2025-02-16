import React, { useState } from "react"
import StyledCourseContent from "./style/course-content"
import { Tab, Disclosure } from '@headlessui/react'
import { AiOutlineCheckCircle } from "react-icons/ai"
import { MdOutlineQuiz, MdOutlineAccessTime } from "react-icons/md"
import { BsPeople } from "react-icons/bs"
import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im"
import { FiBarChart2 } from "react-icons/fi"
import { BiBookAlt } from "react-icons/bi"
import { HiOutlineChevronRight, HiOutlineDocumentText } from "react-icons/hi"
import { IoIosPlay } from "react-icons/io"
import { MdClose } from "react-icons/md"
import Faq from "./faq"
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'
import Modal from "react-responsive-modal"
import YouTube from "react-youtube"
import 'react-responsive-modal/styles.css'
import { Controller, useForm } from "react-hook-form"
import { userContactForm } from "../../services/api"
import thankyouImg from "../../assets/images/thankyou-mail.png"
import { FiArrowDownCircle } from "react-icons/fi"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const url = typeof window !== 'undefined' ? window.location.href : '';
const CourseContent = ({ details }) => {
    const handleDisclosureButtonClick = (event) => {
        const disclosureButtons =
            document.getElementsByClassName("disclosure-button");
        for (let i = 0; i < disclosureButtons.length; i++) {
            const disclosureButton = disclosureButtons.item(i);
            if (
                disclosureButton !== event.target &&
                disclosureButton.getAttribute("data-headlessui-state") === "open"
            ) {
                disclosureButton.click();
            }
        }
    };
    const [open, setOpen] = useState(false);
    const [phoneValidation, setPhoneValidation] = useState(false);
    const [country, setCountry] = useState(null);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const opts = {
        height: width > 640 ? "400px" : "300px",
        width: width > 640 ? "720px" : `${width - 100}px`,
    };
    function onReady(event) {
        event.target.playVideo();
    };
    const [formModalOpen, setFormModalOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [enabled, setEnabled] = useState(true);
    const [isDownload, setIsDownload] = useState(false);
    const handleCheckbox = () => {
        setEnabled(!enabled);
    };
    const handleModel = (isDownload) => {
        setFormModalOpen(!formModalOpen)
        if (isDownload && !formModalOpen) {
            setIsDownload(true)
        } else {
            setIsDownload(false)
        }
        reset();
    }
    const {
        register,
        handleSubmit,
        trigger,
        control,
        watch,
        reset,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        data.createdDate = new Date().toLocaleString() + '';
        data.courseName = details.courseName;
        data.country = country;
        setIsLoading(true)
        userContactForm(data)
            .then(res => {
                if (res.status === 201) {
                    if (!isDownload) {
                        setSubmitted(true);
                    } else {
                        handleDownload(details.downloadBrochure.publicURL)
                        setFormModalOpen(false)
                    }
                    setIsLoading(false)
                }
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
            })
    };
    const handleDownload = (a) => {
        const link = document.createElement('a');

        link.href = a;

        link.click();
    };

    return (
        <StyledCourseContent>
            <div className="main-container">
                <div className="left">
                    <Tab.Group>
                        <Tab.List className="tabs-list">
                            <Tab>
                                {({ selected }) => (
                                    <div className={`${selected ? 'selected ' : ''}button`}>Overview</div>
                                )}
                            </Tab>
                            <Tab>
                                {({ selected }) => (
                                    <div className={`${selected ? 'selected ' : ''}button`}>Curriculum</div>
                                )}
                            </Tab>
                            <Tab>
                                {({ selected }) => (
                                    <div className={`${selected ? 'selected ' : ''}button`}>Faqs</div>
                                )}
                            </Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="tab-panel">
                                    <h4>About Course</h4>
                                    <div className="description" dangerouslySetInnerHTML={{ __html: details.overview.courseDescription }} />
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="tab-panel">
                                    <div className="disclosure-wrapper">
                                        {details.curriculum.map((data, index) => (
                                            <Disclosure as="div" defaultOpen={index === 0} className="item" key={index}>
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button id={index} className={`${open ? 'active ' : ''}button disclosure-button`} onClick={handleDisclosureButtonClick}>
                                                            <div className="course-syllabus">
                                                                <HiOutlineChevronRight className="icon" />
                                                                <h5>{data.chapter}</h5>
                                                            </div>
                                                            {data.chapterDetails &&
                                                                <div className="details">
                                                                    {data.chapterDetails}
                                                                </div>
                                                            }
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel className={`${open ? 'active ' : ''}panel`}>
                                                            <div className="description">
                                                                {data.description}
                                                            </div>
                                                            <ul className="list">
                                                                {data.details.map((subData, index) => (
                                                                    <li key={`subData-${index}`}>
                                                                        <div className="sub-course">
                                                                            <HiOutlineDocumentText className="icon" />
                                                                            <div>{subData.detail}</div>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="tab-panel">
                                    <Faq faqData={details.faqs} />
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
                <div className="right">
                    <div className="course-sidebar">
                        {/* {details.youtubeId &&
                            <div className="course-video">
                                <div className="video-thumb">
                                    <img src={`http://img.youtube.com/vi/${details.youtubeId}/maxresdefault.jpg`} />
                                    <div className="video-play" onClick={onOpenModal}>
                                        <div className="wrapper">
                                            <IoIosPlay className="icon" />
                                        </div>
                                    </div>
                                </div>
                                <Modal
                                    open={open}
                                    onClose={onCloseModal}
                                    closeIcon={<MdClose />}
                                    center
                                    classNames={{
                                        modal: 'customModal',
                                    }}>
                                    <YouTube videoId={details.youtubeId} opts={opts} onReady={onReady} />
                                </Modal>
                            </div>
                        } */}
                        <ul className="details">
                            <li>
                                <div className="label">
                                    <MdOutlineAccessTime className="icon" />
                                    <span>Duration</span>
                                </div>
                                <div className="details">
                                    {details.totalTime}
                                </div>
                            </li>
                            <li>
                                <div className="label">
                                    <MdOutlineQuiz className="icon" />
                                    <span>Quizzes</span>
                                </div>
                                <div className="details">
                                    {details.totalQuizzes}
                                </div>
                            </li>
                            <li>
                                <div className="label">
                                    <BsPeople className="icon" />
                                    <span>Max Students</span>
                                </div>
                                <div className="details">
                                    {details.studentsCount}
                                </div>
                            </li>
                        </ul>
                        <div className='course-cta'>
                            <button onClick={() => handleModel()}>Apply Now</button>
                        </div>
                        {details.downloadBrochure &&
                            <button className="download-btn" onClick={() => handleModel(true)}>
                                Download Brochure
                                <FiArrowDownCircle className="icon" />
                            </button>
                        }
                        <ul className="share">
                            <li className="label">
                                Share:
                            </li>
                            <li className="icon">
                                <FacebookShareButton
                                    url={url}
                                >
                                    <ImFacebook />
                                </FacebookShareButton>
                            </li>
                            <li className="icon">
                                <LinkedinShareButton
                                    url={url}
                                >
                                    <ImLinkedin2 />
                                </LinkedinShareButton>
                            </li>
                            <li className="icon">
                                <TwitterShareButton
                                    url={url}
                                >
                                    <ImTwitter />
                                </TwitterShareButton>
                            </li>
                        </ul>
                    </div>
                </div>
                {formModalOpen && (
                    <div
                        className="custom-modal-wrapper"
                    >
                        <div className="overlay"
                            onClick={() => handleModel()}
                        >
                        </div>
                        <div className="modal-main-container">
                            {/*content*/}
                            <div className="content">
                                {/*header*/}
                                <div className="header-wrapper">
                                    <h1>
                                        Apply Now
                                    </h1>
                                    <button onClick={() => handleModel()} >
                                        <MdClose className="icon" />
                                    </button>
                                </div>
                                {/*body*/}
                                {submitted && !isLoading ?
                                    <div className="body">
                                        <div className="submission-success">
                                            <img src={thankyouImg} alt="" />
                                            <h3>Thank You</h3>
                                            <p>Your message has been recieved.</p>
                                            <p>We will be in touch and contact you soon!</p>
                                            <button
                                                onClick={() => {
                                                    setFormModalOpen(!formModalOpen);
                                                }}
                                            >
                                                Back to site
                                            </button>
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <div className="body">
                                            <h3>
                                                Will get in touch with you as soon as you fill this form.
                                            </h3>
                                            <form onSubmit={handleSubmit(data => onSubmit(data))}>
                                                {/* Name input */}
                                                <div className="wrapper">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder=" "
                                                        className={`${errors.name && 'error'}`}
                                                        {...register("name", {
                                                            required: "Name is required",
                                                            pattern: {
                                                                value: /^[a-zA-Z ]+$/,
                                                                message: "Please enter valid name",
                                                            },
                                                        })}
                                                        onKeyUp={() => {
                                                            trigger("name")
                                                        }}
                                                    />
                                                    <label htmlFor="name">Full Name</label>
                                                    {errors.name && (
                                                        <small className="text-red" id="Name_error">
                                                            {errors.name.message}
                                                        </small>
                                                    )}
                                                </div>

                                                {/* Email input */}
                                                <div className="wrapper">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder=" "
                                                        className={`${errors.email && 'error'}`}
                                                        {...register("email", {
                                                            required: "Email is required",
                                                            pattern: {
                                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                message: "Please enter valid email address",
                                                            },
                                                        })}
                                                        onKeyUp={() => {
                                                            trigger("email")
                                                        }}
                                                    />
                                                    <label htmlFor="email">Email Address</label>
                                                    {errors.email && (
                                                        <small className="text-red" id="Email_error">
                                                            {errors.email.message}
                                                        </small>
                                                    )}
                                                </div>

                                                {/* Mobile input */}
                                                {/* <div className="wrapper">
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        placeholder=" "
                                                        className={`${errors.phone && 'error'}`}
                                                        {...register("phone", {
                                                            required: "Phone Number is required",
                                                            pattern: {
                                                                value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                                                message: "Please enter valid Phone Number",
                                                            },
                                                        })}
                                                        onKeyUp={() => {
                                                            trigger("phone")
                                                        }}
                                                    />
                                                    <label htmlFor="phone">Mobille Number</label>
                                                    {errors.phone && (
                                                        <small className="text-red" id="Phone_error">
                                                            {errors.phone.message}
                                                        </small>
                                                    )}
                                                </div> */}
                                                <div className="wrapper !z-[1]">
                                                    <Controller
                                                        control={control}
                                                        name="phone"
                                                        rules={{ required: true }}
                                                        render={({ field: { ref, ...field } }) => (
                                                            <PhoneInput
                                                                {...field}
                                                                inputExtraProps={{
                                                                    ref,
                                                                    required: true,
                                                                    autoFocus: true
                                                                }}
                                                                isValid={(value, country) => {
                                                                    // console.log(country)
                                                                    // console.log(country.format.replace(/[^.]/g, '').length, value.length)
                                                                    if (value.length >= country.format.replace(/[^.]/g, '').length - 3) {
                                                                        setPhoneValidation(true);
                                                                        setCountry(country.name)
                                                                        return true;
                                                                    } else {
                                                                        setPhoneValidation(false)
                                                                        return false;
                                                                    }
                                                                }}
                                                                country={"in"}
                                                                countryCodeEditable={false}
                                                                specialLabel={"Mobile Number"}
                                                            />
                                                        )}
                                                    />
                                                    {!phoneValidation && (
                                                        <small className="text-red" id="Phone_error">
                                                            Please Enter Phone Number
                                                        </small>
                                                    )}
                                                </div>
                                                <div className="wrapper about">
                                                    <textarea name="about"
                                                        placeholder=" "
                                                        rows="4"
                                                        {...register("about", {
                                                            required: false,
                                                        })}>
                                                    </textarea>
                                                    <label htmlFor="about">Tell Us About Your Objective</label>
                                                </div>
                                                {/* CTA */}
                                                <div className="submit">
                                                    <button type="submit" disabled={isLoading || !enabled || !phoneValidation}>
                                                        Send Message
                                                    </button>
                                                </div>
                                                <div className="agree-terms-checkbox" onClick={handleCheckbox}>
                                                    <input type="checkbox" onChange={handleCheckbox} checked={enabled} />
                                                    <span>
                                                        By providing your contact details, you agree to our <a href="/terms-of-use" target="_blank">Terms of Use</a> & <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        {
                                            isLoading &&
                                            <div className="tsl-preloader" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
                                                <div className='loading-spinner'>
                                                    <div className="preloader-spin-1"></div>
                                                    <div className="preloader-spin-2"></div>
                                                </div>
                                            </div>
                                        }
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </StyledCourseContent >
    )
};

export default CourseContent
