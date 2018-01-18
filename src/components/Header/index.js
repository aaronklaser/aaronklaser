import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <nav className="navbar"
       role="navigation"
       aria-label="main navigation"
       style={{
         borderBottom: 'solid 1px #dddddd',
         marginBottom: 15
       }}>
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img
          style={{
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            marginRight: 15
          }}
          src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU3AAAAJGE1MzYxNzYzLTE1NTUtNDEyYi04MzRjLTgzZjNkOGU0MGIzNg.jpg"
          width="30px" />
        <span>AaronKlaser.com</span>
      </Link>
      <button className="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Blog
        </Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            Features
          </a>

          <div className="navbar-dropdown">
            <Link className="navbar-item">
              Overview
            </Link>
            <hr className="navbar-divider" />
            <Link className="navbar-item">
              This Site
            </Link>
            <Link className="navbar-item">
              Angular The React Way
            </Link>

          </div>
        </div>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/aaronklaser">
          <span className="icon">
            <i className="fa fa-lg fa-github"></i>
          </span>
        </a>
        <a className="navbar-item" href="https://twitter.com/awklaser">
          <span className="icon has-text-info">
            <i className="fa fa-lg fa-twitter"></i>
          </span>
        </a>
        <a className="navbar-item" href="https://resume.aaronklaser.com">
          Resume
          <span className="icon" style={{ color: '#0077B5', marginLeft: 5 }}>
            <i className="fa fa-lg fa-linkedin-square"></i>
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Header
