import React from "react"
import { Disclosure } from '@headlessui/react'
import { HiOutlineChevronRight } from "react-icons/hi"

const Faq = ({ faqData }) => {
    return (
        <div className="disclosure-wrapper">
            {faqData.map((data, index) => (
                <Disclosure as="div" className="item" key={index}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={`${open ? 'active ' : ''}button`}>
                                <div className="course-syllabus">
                                    <HiOutlineChevronRight className="icon" />
                                    <h5>{data.question}</h5>
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className={`${open ? 'active ' : ''}panel`}>
                                <div className="description">
                                    {data.answer}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    )
};

export default Faq
