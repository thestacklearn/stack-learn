import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CourseDetails from "../components/course-details/course-details"

const NonItCourseDetails = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, excerpt } = markdownRemark

  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.publicURL
    : ""
  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        image={Image}
        article={true}
      />
      <CourseDetails data={data} />
    </Layout>
  )
}

export default NonItCourseDetails

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 148)
      frontmatter {
        slug
        title
        description
        keywords
        featuredImage {
          publicURL
        }
        courseLevel
        courseName
        studentsCount
        totalTime
        totalQuizzes
        downloadBrochure {
          publicURL
        }
        shortDescription
        subHeading
        overview {
          courseDescription
        }
        curriculum {
          chapter
          chapterDetails
          details {
            detail
          }
        }
        faqs {
          question
          answer
        }
      }
    }
  }
`
