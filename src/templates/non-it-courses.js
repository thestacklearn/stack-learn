/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeCourses from "../components/home/HomeCourses"
import tw, { styled } from 'twin.macro';
import bannerImg from "../assets/images/courses-bg.jpeg"

export const pageQuery = graphql`
  query HomeQuery {
    itCourses: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___title] }
      filter: { frontmatter: { template: { eq: "non-it-course-details" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            title
            featuredImage {
              publicURL
            }
            courseLevel
            courseName
            studentsCount
            totalQuizzes
            totalTime
            shortDescription
          }
        }
      }
    }
  }
`
const StyledCourseList = styled.section`
    .main-container {
      > h3, > h2 {
        ${tw`hidden`}
      }
    }

    .banner {
      &:before {
        ${tw`absolute content-[''] top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80`}
      }
      ${tw`bg-cover bg-center relative`}

    }

    .hero {
      ${tw`grid justify-center items-center container text-center mx-auto md:px-8 px-5 md:py-24 pt-32 pb-12 gap-y-10 relative`};
    
      .wrapper {
          ${tw`md:pr-6 pr-0 flex items-center flex-col`};
          .content {
            ${tw`flex flex-col items-center`}
            h1 {
              ${tw`text-black md:text-4xl text-xl font-semibold bg-secondary px-2 py-2 rounded`};
            }
            p {
              ${tw`font-medium md:text-xl text-lg px-4 py-2 rounded text-white`}
            }
          }
      }
    }
`;

const NonItCourses = ({ data }) => {
  const { itCourses } = data // data.markdownRemark holds your post data
  return (
    <Layout>
      <Seo title="Best Online Professional Courses | The Stack Learn" description="The Stack Learn is an Best online professional courses upskilling platform for freshers and working tech professionals." keywords="RPA Training,software testing course,data science training,rpa classes,qa automation training" />
      <StyledCourseList>
        <div className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
          <div className="hero">
            <div className="wrapper">
              <div className="content">
                <h1>Non IT Courses</h1>
                <p>Stack Learn is an online transformative upskilling platform for freshers and working tech
                  professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </StyledCourseList>
      <HomeCourses nonItCourses={itCourses} list={false} />
    </Layout>
  )
}

export default NonItCourses
