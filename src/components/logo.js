import React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const Logo = props => (
  <div className="site-logo">
    <Link to={`/`} className="px-2 lg:px-0">
      <StaticImage
        src="../assets/images/logo.png"
        formats={['auto', 'webp', 'avif']}
        alt={props.title}
        title={props.title}
        placeholder="blurred"
        width={250}
        height={70}
      />
    </Link>
  </div>
)

export default Logo
