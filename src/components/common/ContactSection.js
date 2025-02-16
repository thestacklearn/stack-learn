import React from "react"
import StyledContactSection from "./style/contact-section";
import data from '../../content/common/contact.json'

const ContactSection = () => {
  return (
    <StyledContactSection>
      <div className="main-container">
        <div className="contact-wrapper">
          <div className="list">
            <div className="content end">
              <span>Get In Touch:</span>
              <h3>
                <a href={`mailto:${data.email}`}>
                  {data.email}
                </a>
              </h3>
            </div>
            <div className="separator">
              <span>or</span>
            </div>
            <div className="content">
              <span>Call Us Via:</span>
              <h3>
                <a href={`tel:${data.mobileNo}`}>
                  {data.mobileNo}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </StyledContactSection>
  )
};

export default ContactSection
