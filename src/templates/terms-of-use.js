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
const TermsOfUse = () => {
    return (
        <Layout bgWhite={true}>
            <StyledSection>
                <div className="main-container">
                    <h3>PLEASE READ THE FOLLOWING CAREFULLY</h3>
                    <p>
                        These terms and conditions apply to the use of this website. By using Stack Learn platform, you accept these terms and conditions and
                        you agree to be bound by these terms and conditions and The Stack Learn’ <a href="/privacy-policy" target="_blank">Privacy Policy</a>. If you do not accept these
                        terms and conditions and The Stack Learn’ <a href="/privacy-policy" target="_blank">Privacy Policy</a>, do not continue to use the Stack Learn website.
                    </p>
                    <ul>
                        <li>
                            It is imperative that you refrain from utilizing this website in an illegal manner. It is essential that you adhere to the terms and conditions of the website and comply with the <a href="/privacy-policy" target="_blank">privacy policy</a>.
                        </li>
                        <li>
                            Under no circumstances will the company be held accountable for any modifications made to the content provided on the website through its products and services. This includes, but is not limited to, any errors, omissions, losses, or damages experienced in connection with the use or exposure to any content made available through our products, services, or various resources such as email or blog.
                        </li>
                        <li>
                            Our services are available free of charge to any user with internet access. However, we cannot be held responsible for any charges incurred for the usage of hardware, software, or internet services provider fees. Additionally, it is the user's sole responsibility to ensure the proper functioning of their computer hardware and internet access.
                        </li>
                        <li>
                            Certain sections of the site may require the use of login credentials, and the company reserves the right to block access to our services for any user who fails to comply with these conditions.
                        </li>
                        <li>
                            While we strive to provide uninterrupted access to our services, we are not obligated to do so.
                        </li>
                        <li>
                            The Stack Learn is not liable for any issues that may arise in your network or server beyond certain limits, and we are not obligated to address or resolve such issues.
                        </li>
                    </ul>
                    <div className="wrapper">
                        <h3>Guidelines for Website Usage</h3>
                        <ul>
                            <li>Avoid engaging in any form of insulting, abusing, harassing, stalking, threatening, or violating the rights of others.</li>
                            <li>Refrain from publishing, posting, distributing, or disseminating any material or information that is defamatory, infringing, indecent, offensive, or unlawful.</li>
                            <li>Do not upload, install, or transfer files that are protected by Intellectual Property laws or software that may harm other computers.</li>
                            <li>It is strictly prohibited to edit HTML source code, attempt to reverse engineer, or engage in hacking activities.</li>
                            <li>Do not engage in running spam services or scripts that could potentially disrupt the infrastructure and impact users.</li>
                            <li>Avoid communicating spam, advertising, or selling services such as digital downloads, eBooks, or phishing links.</li>
                            <li>Copying, distributing, or engaging in plagiarism with website content or user-submitted content is strictly prohibited.</li>
                        </ul>
                    </div>
                    <div className="wrapper">
                        <h3>The Content</h3>
                        <p>
                            All the content or information available on the website, whether it can be seen, heard, or experienced in any other way, is protected by copyright and is the property of The Stack Learn or its partners, affiliates, or third parties. You are allowed to use the website, the service, and the content solely for your own personal, non-commercial use.
                        </p>
                        <p>
                            However, you are prohibited from transferring any information from the website or creating derivative works that you can display, distribute, or transmit.
                        </p>
                    </div>
                    <div className="wrapper">
                        <h3>Terms Related To Links And Hyperlinks</h3>
                        <p>This website may contain hyperlinks to other websites. We do not exercise any authority over the content of these websites, nor do we assume any responsibility for their website content. The inclusion of these links is solely intended to offer users information. Therefore, The Stack Learn cannot be held accountable.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Hyperlinks</h3>
                        <ul>
                            <li>It is prohibited to replicate or enclose the main page or any other pages of this website within another website or webpage.</li>
                            <li>Avoid incorporating spam links or anchor text that may mislead users and create confusion.</li>
                            <li>Refrain from using copyrighted or registered trademarks, as well as intellectual property images, designs, or content as links to the stack learn website.</li>
                            <li>Additionally, do not direct links to pages that endorse racism, terrorism, or contain pornographic content that violates human rights.</li>
                        </ul>
                    </div>
                    <div className="wrapper">
                        <h3>Intellectual Property and Copyright</h3>
                        <ul>
                            <li>We highly value and show utmost respect for the intellectual property of others, and we expect our users to do the same.</li>
                            <li>The entire content of our website is safeguarded by copyright and trademark laws. The copyrights and trademarks belong to stack-learn.com, its affiliates, or other third-party licensors. The material on our site, including text, graphics, code, and/or software, is copyrighted and is the property of The Stack Learn. Therefore, you are prohibited from duplicating, modifying, publishing, or reproducing the content in any way.</li>
                            <li>Please note that The Stack Learn cannot be held responsible for the content found on other websites (excluding our partners and affiliates) that you may come across while searching or accessing The Stack Learn products or services. The <a href="/privacy-policy" target="_blank">privacy policy</a> and terms of use of those sites will govern the material presented.</li>
                            <li>The Stack Learn reserves all rights to disable or restrict access to users who fail to respect and engage in the infringement of our intellectual property.</li>
                            <li>Using any digital images or logos from our website is strictly prohibited. In the event of copyright issues, written consent from the trademark owner must be obtained.</li>
                        </ul>
                    </div>
                    <div className="wrapper">
                        <h3>Claims Of Intellectual Property Violations</h3>
                        <p>If you suspect that your work has been utilized without your consent in a manner that prompts copyright infringement, kindly furnish us with the following details so that we can take appropriate action.</p>
                        <ul>
                            <li>The designated individual, acting on behalf of the copyright owner, must provide a digital or physical signature.</li>
                            <li>Include a description of the copyrighted work that you believe is being infringed upon.</li>
                            <li>Provide a detailed description of where and how the material that you claim is infringing can be found on the Stack Learn website.</li>
                            <li>Please provide your contact details, including your address, telephone number, and email address.</li>
                            <li>Include a statement from you affirming the accuracy of the information provided and that you are making the copyright claim on behalf of the rightful owner.</li>
                            <li>To notify The Stack Learn of your copyright claims, please send an email to <a href="mailto:sales@stack-learn.com">sales@stack-learn.com</a>.</li>
                        </ul>
                    </div>
                    <div className="wrapper">
                        <h3>Transaction Terms</h3>
                        <p>By engaging in transactions on the The Stack Learn website, you are acknowledging and accepting the following terms and conditions.</p>
                        <ul>
                            <li>When conducting a transaction on the The Stack Learn website, it is mandatory to make the necessary payment for the transaction.</li>
                            <li>We kindly request that you carefully review your payment details, including the total bill, taxes, shipping costs, and any applicable discounts.</li>
                            <li>Certain products may have additional terms and conditions that must be agreed upon before making a purchase.</li>
                        </ul>
                        <p>Please be aware that The Stack Learn does not provide any warranties, whether expressed or implied, regarding any products or services sold on or through our platform.</p>
                        <p>Any additional or different terms stated in a purchase order, document, transmission, or other form of communication will not be considered binding unless explicitly agreed upon in writing by The Stack Learn.</p>
                        <p>The Stack Learn reserves the right to modify or change the terms and conditions without prior notice and at its sole discretion. This includes the ability to limit the quantity of items ordered and to refuse service to any individual.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Pricing Disclaimer</h3>
                        <p>Please be aware that the prices, products, and offers listed on the The Stack Learn website are subject to change without prior notice.</p>
                        <p>While we strive to provide accurate and up-to-date information, there may be instances where one or more items on our website are priced incorrectly. This could be due to human errors, digital images, technical glitches, or discrepancies in pricing information received from our suppliers.</p>
                        <p>The Stack Learn reserves the right to modify prices for all our products, offers, or deals. These changes may be made in response to market conditions, course termination, provider adjustments, price fluctuations, errors in advertisements, or other unforeseen circumstances. However, the price you paid at the time of purchase will remain valid for you.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Proprietary Use Of The Stack Learn Study Material</h3>
                        <p>The Stack Learn holds the intellectual property rights to all study materials provided to delegates, partners, and affiliates. Therefore, it is strictly prohibited to duplicate, digitally transmit, mechanically reproduce, photocopy, record, or translate any part of the course materials without written permission.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Usage Of Personal Information Of Participants</h3>
                        <p>We reserve the right to feature your image in any photos, videos, or promotional materials used by us. Additionally, we may use your personal information to inform you about other training courses offered by The Stack Learn. However, we assure you that we will not distribute or share your personal information with any third-party marketing databases or disclose it to any third party, except on a case-by-case basis after proper verification or if required by applicable law.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Limitation Of Liability</h3>
                        <p>By using the Website, the Services, and the Content and Courseware, you explicitly agree that you are assuming all risks involved. We cannot guarantee uninterrupted or error-free access to the Website, the Services, or the Content and Courseware. Furthermore, we do not provide any warranty regarding the accuracy or reliability of the information provided through the Website, the Services, or the Content and Courseware, nor do we guarantee any specific results from using them.

                            Under no circumstances will We, or any individuals or entities involved in the creation, production, or distribution of the Website, the Services, or the Content and Courseware, be held liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Website, the Services, or the Content and Courseware. This disclaimer of liability applies to any and all damages or injuries caused by performance failures, errors, omissions, interruptions, deletions, defects, delays in operation or transmission, computer viruses, communication line failures, theft, destruction, unauthorized access, alteration of records, or any other material, whether due to breach of contract, negligence, or any other cause of action.

                            You acknowledge that We are not responsible for any defamatory, offensive, wrongful, or illegal conduct by third parties or other users of the Website, the Services, or the Content and Courseware. The risk of damage or injury resulting from such conduct rests solely with each user. You agree that Our liability, as well as the liability of Our affiliates, directors, officers, employees, agents, and licensors, if any, arising from any legal claim related to the Services or the Content and Courseware (whether in contract, tort, or otherwise), shall not exceed the fee you paid to Us for the specific training course.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Term And Termination</h3>
                        <p>We retain the authority to immediately restrict your access to the Content and Courseware if you engage in misrepresentation, default, misconduct, or breach any of your obligations stated in this Agreement (referred to as an "Event of Default"). In the event of an Event of Default, we are entitled to exercise all the rights and remedies provided in this Agreement, as well as those available under applicable laws or equity, in order to seek compensation for any losses or claims arising from such Event of Default.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Indemnity</h3>
                        <p>You are responsible for compensating and protecting Us, along with our subsidiaries, affiliates, contractors, licensors, directors, officers, employees, and agents, from any and all claims, losses, damages, liabilities, and expenses, including attorneys' fees. This compensation is applicable in cases of your unauthorized use of the Website, the Services, and the Content and Courseware, as well as any violation or breach of this Agreement or its provisions.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Waiver</h3>
                        <p>Failure or delay on our part to exercise any right, remedy, power, or privilege hereunder shall not result in a waiver of such rights or the exercise of any other rights. Any term of this Agreement shall not be considered waived, and no breach shall be consented to, unless there is a written and signed waiver or consent from the party claiming to have waived or consented. Waiving any rights or consenting to any breaches shall not imply a waiver of any other rights or consent to any other breach.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Severability</h3>
                        <p>If any provision of this Agreement is deemed invalid or unenforceable under the applicable laws as stated in the Governing Law and Jurisdiction section, the remaining provisions will remain in full force and effect. The Agreement will be considered reformed by substituting the invalidated or unenforceable provision with a valid and enforceable provision that closely reflects the intentions of the parties as expressed by the invalidated or unenforceable provision.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Governing Law And Jurisdiction</h3>
                        <p>The Laws of India shall govern and interpret this Agreement, and the courts in Bangalore, India shall possess sole jurisdiction over any matter pertaining to, associated with, or arising from this Agreement.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Amendment And Assignment</h3>
                        <p>We retain the right to unilaterally alter or adjust this Agreement without providing any prior notification to you. Nevertheless, we will publish the updated agreement on the Website to ensure that you are informed about the revisions, modifications, and amendments made by us to this Agreement. Your continued use of or access to the Website, the Services, and the Content and Courseware after the publication of any changes to this Agreement will signify your acceptance of those changes. You are not authorized to transfer this Agreement or the rights and responsibilities under this Agreement to any third party, and you alone will be held accountable for any violation of this Agreement or any terms and conditions stated herein.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Entire Agreement</h3>
                        <p>This Agreement, in conjunction with the <a href="/privacy-policy" target="_blank">Privacy Policy</a>, Refund Policy, and any other guidelines, rules, and/or disclaimers published on the Website, forms the complete agreement that governs your utilization of our website and overrides any previous agreements, if applicable, pertaining to any subject matter addressed in this Agreement.</p>
                    </div>
                    <div className="wrapper">
                        <h3>Grievance Redressal</h3>
                        <p>If you have any concerns or questions, please don't hesitate to contact our Grievance Officer. Our Grievance Officer will make every effort to address your grievances as quickly as possible. You can reach us at the following contact information:</p>
                        <ul>
                            <li>Grievance Officer: Teja</li>
                            <li>Email: <a href="mailto:sales@stack-learn.com">sales@stack-learn.com</a></li>
                        </ul>
                        <p>Or:</p>
                        <p>Contact us at For Learners - <a href="tel:+91-9606220714">+91-9606220714</a></p>
                        <p>The Stack Learn should be notified of any necessary communication or notice under these Terms or any other shared terms by sending a written letter or email to the provided addresses:</p>
                        <p>
                            <b>The Stack Learn,</b><br />
                            <span>Anugraha Meadows,</span><br />
                            <span>4th cross, Bhuvaneswari Nagar,</span><br />
                            <span>Hebbal, Kempapura,</span><br />
                            <span>Bangalore-560024</span><br />
                        </p>
                    </div>
                </div>
            </StyledSection>
        </Layout >
    )
};

export default TermsOfUse
