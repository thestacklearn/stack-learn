import React from "react"
import tw, { styled } from 'twin.macro';
import Navigation from "./navigation";
import { Link } from "gatsby"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaChevronRight } from 'react-icons/fa';
import { FiPhone, FiMail } from "react-icons/fi";
import Logo from "./logo";

const StyledFooter = styled.footer`
    ${tw`bg-tsl-footer-bg`};
    .main-container {
      ${tw`md:py-12 py-6 flex flex-col items-center justify-center container mx-auto md:px-8 px-5`};
      .main {
        ${tw`flex md:flex-row flex-col-reverse justify-between w-full text-white gap-8`}
        .left {
          ${tw`flex flex-col gap-y-6 md:w-1/3 w-full`}
          p {
            ${tw`text-white pr-4`}
          }
        }
        .middle {
          ${tw`text-white md:w-1/3 w-full`}
          h2 {
            ${tw`text-2xl text-white font-medium relative inline-flex pb-2 mr-auto`}
            &:after {
              ${tw`absolute h-0.5 w-full [content: ''] left-0 bottom-0 bg-tsl-dark-orange`}
            }
          }
          .courses {
            ${tw`grid grid-cols-1 gap-4 mt-6`}
            li {
              ${tw`flex flex-row gap-1 items-center`}

              .right-icon {
                ${tw`text-tsl-dark-orange`}
              }
            }
          }
        }
        .right {
          ${tw`text-white md:w-1/3 w-full`}
          h2 {
            ${tw`text-2xl text-white font-medium relative inline-flex pb-2 mr-auto`}
            &:after {
              ${tw`absolute h-0.5 w-full [content: ''] left-0 bottom-0 bg-tsl-dark-orange`}
            }
          }
          .contact {
            ${tw`grid grid-cols-1 gap-4 mt-6`}
            li {
              ${tw`flex flex-row gap-1 items-center`}

              .right-icon {
                ${tw`text-tsl-dark-orange mr-1`}
              }
            }
          }

          .social {
            ${tw`flex flex-row gap-4 text-white text-lg pt-4`}
            
            li {
              .icon-wrapper {
                ${tw`flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-tsl-dark-orange text-tsl-dark-orange border-dotted hover:bg-tsl-dark-orange hover:text-white`}
              }
            }
          }
        }
      }
    }
    
    .copyright {
      ${tw`bg-[rgba(33, 35, 49, 0.5)] text-white p-4`}

      .wrapper {
        ${tw`flex md:flex-row flex-col justify-between gap-4 container mx-auto md:px-8 px-2 uppercase`};
        .privacy{
          ${tw`flex flex-row md:gap-4 gap-2 text-sm whitespace-nowrap`}
        }        
      }
    }
`;
const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
};
const today = new Date();
const year = today.getFullYear();
const Footer = ({ itCourses, nonItCourses }) => {
  return (
    <StyledFooter>
      <div className="main-container">
        <div className="main">
          <div className="left">
            <Logo title="Stack Learn is an online transformative upskilling platform for freshers and working tech professionals. Our approach towards teaching & training young professionals not only helps them upskill but also create Impact in the real world. We are devoted to creating an ecosystem that nurtures our learners and assists them in unlocking talent, skills & opportunities at every stage of their careers. Learners enrolled with us are taught, guided, and mentored by industry veterans and experts from leading tech organizations." />
            <p>The Stack Learn is the world's leading online bootcamp and one of the world's leading providers of training and helped hundreds of people worldwide to unlock technical skills</p>
          </div>
          <div className="middle">
            <h2 className="heading">IT Courses</h2>
            <ul className="courses">
              {itCourses.group.map((d, i) =>
                <li key={i}>
                  <FaChevronRight className="right-icon" />
                  <Link to={d.edges[0].node.frontmatter.slug}>{d.fieldValue}</Link>
                </li>
              )}
            </ul>
            <h2 className="heading pt-4">Non IT Courses</h2>
            <ul className="courses">
              {nonItCourses.group.map((d, i) =>
                <li key={i}>
                  <FaChevronRight className="right-icon" />
                  <Link to={d.edges[0].node.frontmatter.slug}>{d.fieldValue}</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="right">
            <div className="heading-container" style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className="heading"><Link to="/study-abroad">Study Abroad</Link></h2>
              <h2 className="heading" style={{ marginTop: '20px' }}>Contact</h2>
            </div>
            <ul className="contact">
              <li>
                <FiPhone className="right-icon" />
                <a href="tel:+919606031842">+91 96060 31842</a>
              </li>
              <li>
                <FiMail className="right-icon" />
                <a href="mailto:sales@stack-learn.com">sales@stack-learn.com</a>
              </li>
            </ul>
            <h2 className="heading pt-4">Follow Us</h2>
            <ul className="social">
              <li><Link to='https://www.facebook.com/thestacklearn' target="_blank" className='icon-wrapper'><FaFacebookF /></Link></li>
              <li><Link to='https://twitter.com/thestacklearn' target="_blank" className='icon-wrapper'><FaTwitter /></Link></li>
              <li><Link to='https://www.instagram.com/thestacklearning/' target="_blank" className='icon-wrapper'><FaInstagram /></Link></li>
              <li><Link to='https://www.linkedin.com/company/the-stack-learning/' target="_blank" className='icon-wrapper'><FaLinkedinIn /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="wrapper">
          <small>
           Copyright © {year} The Stack Learn. All Right Reserved.
          </small>
          <ul className="privacy">
            <li>
              <Link to="/terms-of-use">
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/refund-policy">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
