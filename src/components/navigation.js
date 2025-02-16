/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import Theme from "../components/theme"

const MenuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/it-courses",
    title: "IT Courses",
  },
  {
    path: "/non-it-courses",
    title: "Non IT Courses",
  },
  {
    path: "/study-abroad",
    title: "Study Abroad",
  },
  // {
  //   path: "/blog",
  //   title: "Blog",
  // },
  // {
  //   path: "/contact",
  //   title: "Contact",
  // },
]

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }))
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <ListLink key={index} to={menuItem.path}>
        {menuItem.title}
      </ListLink>
    ))
    if (this.props.footer) {
      listMenuItems.push(<li><Link to='/terms-of-use'>Terms Of Use</Link></li>, <li><Link to='/privacy-policy'>Privacy Policy</Link></li>, <li><Link to='/refund-policy'>Refund Policy</Link></li>)
    }
    return (
      <nav className="site-navigation">
        <button
          aria-label="toggle menu"
          onClick={this.handleToggleClick}
          className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}
        >
          <div className="icon-menu-line">
            <RiMenu3Line />
          </div>
          <div className="icon-menu-close">
            <RiCloseLine />
          </div>
        </button>
        <ul>
          {listMenuItems}
        </ul>
      </nav>
    )
  }
}

export default Navigation

const navStyle = {
  menu: {
    ul: {
      bg: "white",
    },
  },
  theme: {
    display: ["block", "block", "block", "none"],
    p: " 25px 20px 20px",
  },
  border: {
    bg: "borderColor",
    borderTop: "1px solid transparent",
    display: ["block", "block", "block", "none"],
  },
}
