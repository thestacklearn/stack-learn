import React, { useState } from "react"
import StyledBanner from "./style/banner"
import StyledCourseContent from "./style/course-content"
import { Controller, useForm } from "react-hook-form"
import data from '../../content/study-abroad/banner.json'
import bannerImg from "../../assets/images/about-bg.jpeg"
import 'react-responsive-modal/styles.css'
import thankyouImg from "../../assets/images/thankyou-mail.png"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { userContactForm } from "../../services/api"
import { MdClose } from "react-icons/md"

const StudyAbroadBanner = () => {
    const {
        register,
        handleSubmit,
        trigger,
        control,
        watch,
        reset,
        formState: { errors }
    } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formModalOpen, setFormModalOpen] = useState(false);
    const [enabled, setEnabled] = useState(true);
    const [isDownload, setIsDownload] = useState(false);
    const [phoneValidation, setPhoneValidation] = useState(false);
    const [country, setCountry] = useState(null);

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

    const handleDownload = (a) => {
        const link = document.createElement('a');

        link.href = a;

        link.click();
    };

    const onSubmit = (data) => {
        data.createdDate = new Date().toLocaleString() + '';
        data.courseName = 'Study Abroad';
        data.country = country;
        setIsLoading(true)
        userContactForm(data)
            .then(res => {
                if (res.status === 201) {
                    if (!isDownload) {
                        setSubmitted(true);
                    } else {
                        //handleDownload(details.downloadBrochure.publicURL)
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

    return (
        <>
            <StyledBanner style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="banner">
                    <div className="container">
                        <h1>{data.title}</h1>
                        <p className="desc">{data.description}</p>
                        <div className='course-cta'>
                            <button onClick={() => handleModel()}>Let's Get Started</button>
                        </div>
                    </div>
                </div>
            </StyledBanner>
            {formModalOpen && (<StyledCourseContent>

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
                                        Kindly share your details
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
                </StyledCourseContent>
            )}
        </>
    )
};

export default StudyAbroadBanner