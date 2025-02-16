/** @jsx jsx */
import { useState } from 'react'
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"

import "../assets/scss/style.scss"
import Footer from "./footer"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
    itCourses: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___courseName] }
      filter: { frontmatter: { template: { eq: "it-course-details" } } }
    ) {
      group(field: frontmatter___courseName) {
        fieldValue
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
    nonItCourses: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___courseName] }
      filter: { frontmatter: { template: { eq: "non-it-course-details" } } }
    ) {
      group(field: frontmatter___courseName) {
        fieldValue
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
    siteSearchIndex {
      index
    }
  }
`

const Layout = ({ children }) => {
  const { site, itCourses, nonItCourses } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 300)

  const Preloader = () => {
    return (
      <div className="tsl-preloader">
        <div className='loading-spinner'>
          <div className="preloader-spin-1"></div>
          <div className="preloader-spin-2"></div>
        </div>
      </div>
    )
  }

  return (
    loading ?
      <Preloader />
      :
      <div className="primary-container">
        <Header>
          <div className='md:(grid grid-cols-2) flex flex-row gap-x-3 text-center place-items-center xl:container mx-auto md:px-8 px-5 justify-between w-full'>
            <Logo title={siteTitle} />
            <div sx={layoutStyle.nav}>
              <Navigation footer={false} />
            </div>
          </div>
        </Header>
        <main>{children}</main>
        <Footer itCourses={itCourses} nonItCourses={nonItCourses} />
      </div>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}
