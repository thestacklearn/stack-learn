import React from "react"
import Layout from "../components/layout"
import tw, { styled } from 'twin.macro'
import { Link } from "gatsby";
const StyledSection = styled.section`
    ${tw`grid items-center relative pt-24`};
    .main-container {
      ${tw`flex flex-col justify-center container mx-auto md:(px-8 py-12) py-8 px-5 text-lg`};
      p {
        ${tw`text-dark pb-4`}
      }
      .wrapper {
          h3 {
            ${tw`text-2xl font-bold pt-4`}
          }
          p {
            ${tw`py-4`}
          }
          ul {
            ${tw`flex flex-col gap-4 list-disc pl-4`}
          }
      }
    }
`;
const PrivacyPolicy = () => {
    return (
        <Layout bgWhite={true}>
            <StyledSection>
                <div className="main-container">
                    <div className="wrapper">
                        <h3>Privacy Policy</h3>
                        <p>we are committed to protecting your privacy and personal information. This privacy policy outlines how we collect, use, and protect your data.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Information We Collect</h3>
                        <p>We collect personal information such as your name, email address and phone number when you register for a course. We may also collect non-personal information such as your IP address and browsing history.</p>
                    </div>
                    <div className="wrapper">
                        <h3>How We Use Your Information</h3>
                        <p>We use your personal information to process your course registration, provide customer support, and send you related communications. We may also use your information to improve our services, conduct research, and send you marketing communications if you have given us your consent.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Information Sharing</h3>
                        <p>We do not sell your information to third parties for their own marketing purposes.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Data Security</h3>
                        <p>We take appropriate measures to protect your personal information from unauthorized access, disclosure, or loss. We use industry-standard encryption and security protocols to safeguard your data.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Your Rights</h3>
                        <p>
                            You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time. You may also have the right to request that we transfer your information to another service provider.
                        </p>
                    </div>
                    <div className="wrapper">
                        <h3>Cookies and Tracking Technologies</h3>
                        <p>
                            We use cookies and other tracking technologies to improve your experience on our website. You can choose to disable cookies in your browser settings.
                        </p>
                    </div>
                    <div className="wrapper">
                        <h3>Changes to This Policy</h3>
                        <p>
                            We may update this privacy policy from time to time. We will notify you of any material changes and obtain your consent if required by law
                        </p>
                    </div>
                    <div className="wrapper">
                        <h3>Contact Us</h3>
                        <p>
                            If you have any questions or concerns about this privacy policy, please contact us.
                        </p>
                        <h4><b>Company  Name: </b>The Stack Learn</h4>
                        <h4><b>Contact No: </b><a href="tel:+91-9606220714" >+91-9606220714</a></h4>
                        <h4><b>Mail ID: </b><a href="mailto:sales@stack-learn.com"></a>sales@stack-learn.com</h4>
                        <h4><b>Website: </b><Link to="https://stack-learn.com">https://stack-learn.com</Link></h4>

                    </div>
                </div>
            </StyledSection>
        </Layout>
    )
};

export default PrivacyPolicy
