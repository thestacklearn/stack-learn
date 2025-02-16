import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, keywords, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    defaultKeywords,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }


  const schemaHomepage = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Stack Learn",
    "alternateName": "Stack Learn",
    "url": "https://stack-learn.com/",
    "logo": "https://stack-learn.com/static/e1028c394fb7a144c25056f9a4513076/46351/logo.avif",
    "sameAs": [
      "https://www.facebook.com/thestacklearn",
      "https://twitter.com/thestacklearn",
      "https://www.instagram.com/thestacklearning/",
      "https://www.youtube.com/channel/UClsHvhTBN4ZEwUJbDQS8tAg",
      "https://www.linkedin.com/company/the-stack-learning/"
    ]
  }

  const RpaCourse = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is RPA UiPath?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UiPath is a Robotic Process Automation tool that is used for automating different kind of target applications like Web applications, Desktop applications, Citrix applications, Excel , Word , PDF , API Automation. It is used to automate repetitive tasks with the help of drag and drop functionality and eliminates human intervention."
      }
    }, {
      "@type": "Question",
      "name": "Who is this course designed for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This course is designed for individuals aspiring to enhance their skills in Robotic Process automation with UiPath tool. It is suitable for beginners as well as those with some Robotic Process automation experience."
      }
    }, {
      "@type": "Question",
      "name": "What are the prerequisites for this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While there are no strict prerequisites, a basic understanding of SQL and some programming knowledge (preferably in languages like C#.Net, VB.Net) would be beneficial."
      }
    }, {
      "@type": "Question",
      "name": "What RPA automation tools will be covered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The course will cover RPA UiPath Tool along with SQL knowledge."
      }
    }, {
      "@type": "Question",
      "name": "Are there any practical exercises or projects in the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! The course will include hands-on practical exercises, real-world projects, and case studies to provide participants with practical experience and ensure they can apply the concepts learned in real time projects."
      }
    }, {
      "@type": "Question",
      "name": "What kind of support is provided during the Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The course includes dedicated instructor support through Q&amp;A sessions, forums, and email. Additionally, participants can access course materials, recordings, and resources for review."
      }
    }, {
      "@type": "Question",
      "name": "How long is the course and what is the schedule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The duration of the course may vary, but typically it spans 14 weeks with a combination of live sessions, pre-recorded content, and self-paced assignments. The specific schedule will be provided upon enrollment."
      }
    }, {
      "@type": "Question",
      "name": "Is there a certification offered at the end of course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, participants who successfully complete the course and meet the requirements will receive a certification of completion. This certification can be a valuable addition to your professional profile."
      }
    }, {
      "@type": "Question",
      "name": "What is the cost of the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please reach out on the contact number for course fee. Check for early bird discounts, group discounts, or any other promotions that may be available."
      }
    }]
  }

  const SdetCourse = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is QA Automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "QA Automation refers to the use of automated tools and scripts to perform software testing tasks. It involves creating test scripts that can automatically execute test cases, verify results, and provide quick feedback on the quality of software."
      }
    }, {
      "@type": "Question",
      "name": "Who is this course designed for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This course is designed for software testers, QA professionals, and individuals aspiring to enhance their skills in test automation. It is suitable for beginners as well as those with some testing experience."
      }
    }, {
      "@type": "Question",
      "name": "What are the prerequisites for this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While there are no strict prerequisites, a basic understanding of software testing concepts and some programming knowledge (preferably in languages like Java, Python, or C#) would be beneficial."
      }
    }, {
      "@type": "Question",
      "name": "What programming languages will be covered in the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The course will cover popular programming languages used in test automation, such as Java,sellinium. The choice of language may vary, and the instructor will guide students through the selected language."
      }
    }, {
      "@type": "Question",
      "name": "What automation tools will be covered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The course will cover a range of automation tools, including Selenium WebDriver for web application testing,  and tools like JUnit or TestNG for test scripting and execution."
      }
    }, {
      "@type": "Question",
      "name": "Will the course cover both web and mobile automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, Mobile automation will not be covered"
      }
    }, {
      "@type": "Question",
      "name": "Are there any practical exercises or projects in the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! The course will include hands-on practical exercises, real-world projects, and case studies to provide participants with practical experience and ensure they can apply the concepts learned in real testing scenarios."
      }
    }, {
      "@type": "Question",
      "name": "What kind of support is provided during the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The course includes dedicated instructor support through Q&A sessions, forums, and email. Additionally, participants can access course materials, recordings, and resources for review."
      }
    }, {
      "@type": "Question",
      "name": "How long is the course, and what is the schedule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The duration of the course may vary, but typically it spans 20 weeks with a combination of live sessions, pre-recorded content, and self-paced assignments. The specific schedule will be provided upon enrollment."
      }
    }, {
      "@type": "Question",
      "name": "Is there a certification offered at the end of the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, participants who successfully complete the course and meet the requirements will receive a certification of completion. This certification can be a valuable addition to your professional profile."
      }
    }, {
      "@type": "Question",
      "name": "What is the cost of the course? Are there any discounts available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please reach out on the contact number for course fee. Check for early bird discounts, group discounts, or any other promotions that may be available."
      }
    }]
  }

  const DataScienceCourse = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is the duration of the Data Science course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The course is designed to be completed over a period of 32 Weeks. However, it may vary based on individual learning pace and course format."
      }
    }, {
      "@type": "Question",
      "name": "Is this course suitable for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this course is designed to cater to beginners with little to no prior knowledge of data science. It provides a comprehensive introduction to the field and gradually builds up the necessary skills."
      }
    }, {
      "@type": "Question",
      "name": "Will there be any hands-on projects or assignments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the course includes hands-on projects and assignments to reinforce learning and provide practical experience in applying data science techniques."
      }
    }, {
      "@type": "Question",
      "name": "Can I access the course materials after the course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, participants will have continued access to the course materials, including lecture slides, code samples, and additional resources, even after completing the course."
      }
    }, {
      "@type": "Question",
      "name": "Are there any prerequisites for the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While there are no strict prerequisites, a basic understanding of mathematics, statistics, and some programming concepts would be beneficial for a smoother learning experience."
      }
    }, {
      "@type": "Question",
      "name": "Is there any tutor support or online community for learners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes there will be tutor support , you can ask the questions during training or post training or you can even schedule the call with tutor to get the doubts clarified."
      }
    }, {
      "@type": "Question",
      "name": "What if I fail to attend one or more lectures?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you fail to attend any of the live lectures, you will get a copy of the recorded session in the next 12 hours. Moreover, if you have any other queries, you can get in touch with our course advisors or post them on our community."
      }
    }]
  }

  const AzureCourse = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is the duration of the Azure Data Engineering course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The course is designed to be completed over a period of [duration]. However, it may vary based on individual learning pace and course format."
      }
    }, {
      "@type": "Question",
      "name": "Do I need any prior experience or programming knowledge to enroll in the   course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While prior experience in programming and basic understanding of data and related technologies like ETL would be helpful, the course is designed to accommodate learners with varying levels of prior knowledge."
      }
    }, {
      "@type": "Question",
      "name": "What if I fail to attend one or more lectures?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you fail to attend any of the live lectures, you will get a copy of the recorded session in the next 12 hours. Moreover, if you have any other queries, you can get in touch with our course advisors or post them on our community."
      }
    }, {
      "@type": "Question",
      "name": "Will I receive a certificate upon completion of the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, upon successful completion of the course and meeting the requirements, a certificate of completion will be awarded."
      }
    }, {
      "@type": "Question",
      "name": "Is this course suitable for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this course is designed to cater to beginners with little to no prior knowledge of data science. It provides a comprehensive introduction to the field and gradually builds up the necessary skills."
      }
    }, {
      "@type": "Question",
      "name": "Will there be any hands-on projects or assignments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the course includes hands-on projects and assignments to reinforce learning and provide practical experience in applying data science techniques."
      }
    }, {
      "@type": "Question",
      "name": "Can I access the course materials after the course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, participants will have continued access to the course materials, including lecture slides, code samples, and additional resources, even after completing the course."
      }
    }, {
      "@type": "Question",
      "name": "Is there any tutor support or online community for learners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the course provides tutor support via [method(s)] and encourages learners to engage with peers through an online community/forum for discussion, collaboration, and assistance."
      }
    }]
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang="en-US" />
      <link rel="alternate" href={seo.url} hreflang="en-us" />
      <link rel="alternate" href={seo.url} hreflang="en" />
      <link rel="alternate" href={seo.url} hreflang="x-default" />
      <link href="https://stack-learn.com/opensearch.xml" rel="search" title={seo.title} type="application/opensearchdescription+xml" />
      <link rel="canonical" href={seo.url} />
      <meta name="author" content="stack-learn" />
      <meta name={seo.title} CONTENT="Online Professional Traning Cources and Certifications" />
      <meta name="rating" CONTENT="General" />
      <meta name="robots" content="index,follow,noarchive" />
      <meta name="revisit-after" CONTENT="daily" />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={seo.image} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}

      <meta property="og:site_name" content={seo.title} />
      <script type="application/ld+json">
        {seo.url.includes('rpa-uipath-course')
          ?
          JSON.stringify(RpaCourse)
          :
          seo.url.includes('qa-automation-course')
            ?
            JSON.stringify(SdetCourse)
            :
            seo.url.includes('data-science-course')
              ?
              JSON.stringify(DataScienceCourse)
              :
              seo.url.includes('azure-data-engineer-course')
                ?
                JSON.stringify(AzureCourse)
                :
                JSON.stringify(schemaHomepage)
        }
      </script>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        defaultKeywords: keywords
        siteUrl: siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`
