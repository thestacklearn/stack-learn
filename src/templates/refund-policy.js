import React from "react"
import Layout from "../components/layout";
import tw, { styled } from 'twin.macro';
const StyledSection = styled.section`
    ${tw`grid items-center relative pt-24`};
    .main-container {
      ${tw`flex flex-col justify-center container mx-auto md:(px-8 py-12) py-8 px-5 text-lg`};
      > p {
        ${tw`text-dark py-4`}
      }
      h3 {
        ${tw`text-2xl font-bold`}
      }
      ul {
        ${tw`flex flex-col gap-4 list-disc pl-4 pb-2`}
      }
      a {
        ${tw`text-tsl-dark-blue underline`}
      }
      .wrapper {
          h3 {
            ${tw`text-2xl font-bold pt-4 pb-2`}
          }
          p {
            ${tw`pb-2`}
          }
          ul {
            ${tw`flex flex-col gap-4 list-disc pl-4`}
          }
          a {
            ${tw`text-tsl-dark-blue underline`}
          }
      }
    }
`;
const RefundPolicy = () => {
    return (
        <Layout bgWhite={true}>
            <StyledSection>
                <div className="main-container">
                    <h3>Online Career Course Refund Policy</h3>
                    <p>
                        Students who enroll in a training course may sometimes alter their decision due to various factors. Irrespective of the rationale behind their change of mind, we firmly advocate for the existence of a clear-cut refund policy for those students who opt not to pursue the course. Refunds for online courses are solely granted in specific situations:
                    </p>
                    <ul>
                        <li>
                            The student/user must submit a written refund request via email within three business days of registering for the online course, provided that no portion of the course has been accessed. Once a course has been accessed, no refunds will be granted.
                        </li>
                        <li>
                            However, if the refund request meets the criteria, a full refund will be issued, with an administrative fee deducted.
                        </li>
                        <li>
                            If any course materials were shipped, they must be returned unopened and unused at the student/user's expense. Refunds for videos or e-books are not available.
                        </li>
                    </ul>
                    <p>We kindly request your understanding regarding the enrollment and access to your online course, as it necessitates your acknowledgment and agreement to the refund policy mentioned previously. It is crucial to note that there will be no extensions granted for your course. Should you be unable to finish your course by the designated end-date indicated in your welcome letter, supplementary fees will be applicable for extended access.</p>
                    <div className="wrapper">
                        <h3>Online Professional Development Refund Policy</h3>
                        <ul>
                            <li>If the student/user has not accessed any section of the online course and wishes to request a refund, they must do so in writing via email within 72 hours of enrolling.</li>
                            <li>However, please be aware that refunds will not be provided once the course has been started.</li>
                        </ul>
                    </div>
                    <div className="wrapper">
                        <h3>Online Enrichment Course Refund Policy</h3>
                        <ul>
                            <li>The student/user has not accessed any section of the online course and has formally requested a refund via email within 72 hours of enrolling in the course.</li>
                            <li>Please note that refunds will not be granted after the course has been started.</li>
                            <li>The refund amount will be reduced by the materials fee associated with the course.</li>
                        </ul>
                    </div>
                    <div className="wrapper pt-4">
                        <p>If you have any questions about this policy please contact us at <a href="mailto:sales@stack-learn.com">sales@stack-learn.com</a> or call <a href="tel:+919606031842">+91 96060 31842</a>.</p>
                    </div>
                </div>
            </StyledSection>
        </Layout >
    )
};

export default RefundPolicy