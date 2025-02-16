import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutBanner from "../components/about/AboutBanner"
import About from "../components/about/About"
import OurProcess from "../components/about/OurProcess"
import WhatOffer from "../components/about/WhatOffer"
import ContactSection from "../components/common/ContactSection"
import Testimonial from "../components/common/Testimonial"
const AboutPage = () => {
  return (
    <Layout>
      <Seo title="The Stack Learn - world's leading online bootcamp" description="The Stack Learn is the world's leading online bootcamp and one of the world's leading providers of training." keywords="RPA Training,software testing course,data science training,rpa classes,qa automation training" />
      <AboutBanner />
      <About />
      <OurProcess />
      <WhatOffer />
      {/* <ContactSection /> */}
      <Testimonial />
    </Layout>
  )
}

export default AboutPage
