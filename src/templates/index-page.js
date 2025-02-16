/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/home/Banner"
import Strategy from "../components/home/Strategy"
import ContactSection from "../components/common/ContactSection"
import HomeCourses from "../components/home/HomeCourses"
import Testimonial from "../components/common/Testimonial"
import LearnerBenefits from "../components/home/LearnerBenefits"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 585, height: 439)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    courses: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___studentsCount] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 3
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
    itCourses: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___title] }
      filter: { frontmatter: { template: { eq: "it-course-details" } } }
      limit: 3
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
    nonItCourses: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___title] }
      filter: { frontmatter: { template: { eq: "non-it-course-details" } } }
      limit: 3
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

const HomePage = ({ data }) => {
  const { courses, itCourses, nonItCourses } = data // data.markdownRemark holds your post data
  return (
    <Layout>
      <Seo title="Online Professional Traning Cources and Certifications" description="The Stack Learn is the world's leading providers of online Professional Traning Cources and Certifications." />
      <Banner />
      <HomeCourses itCourses={itCourses} nonItCourses={nonItCourses} list={true} />
      <Strategy />
      <LearnerBenefits />
      <Testimonial />
    </Layout>
  )
}

export default HomePage
