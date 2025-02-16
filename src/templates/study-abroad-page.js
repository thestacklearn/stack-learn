import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import StudyAbroadBanner from "../components/study-abroad/StudyAbroadBanner"
import WhatOffer from "../components/study-abroad/WhatOffer"
import About from "../components/study-abroad/About"

const StudyAbroadPage = () => {
  return (
    <Layout>
      <Seo title="The Stack Learn - world's leading online bootcamp" description="The Stack Learn is the world's leading online bootcamp and one of the world's leading providers of training." keywords="RPA Training,software testing course,data science training,rpa classes,qa automation training" />
      <StudyAbroadBanner />
      <About />
      <WhatOffer />
    </Layout>
  )
}

export default StudyAbroadPage
