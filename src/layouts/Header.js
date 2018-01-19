import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <nav className="navbar"
       role="navigation"
       aria-label="main navigation"
       style={{
         borderBottom: 'solid 1px #dddddd',
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
        <Link className="navbar-item" to="/blog">
          <span className="icon has-text-primary" style={{ marginRight: 5 }}>
            <i className="fas fa-code"></i>
          </span>
          Code Blog
        </Link>
        <Link className="navbar-item" to="/medium">
          <span className="icon" style={{ marginRight: 5 }}>
            <i className="fab fa-lg fa-medium"></i>
          </span>
          Medium
        </Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-link" to="/projects">
            Projects
          </Link>
          <div className="navbar-dropdown">
            <Link className="navbar-item" to="/projects">
              Overview
            </Link>
            <hr className="navbar-divider" />
            <Link className="navbar-item" to="/">
              This Site
            </Link>
            <Link className="navbar-item" to="/">
              Angular The React Way
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/aaronklaser">
          <span className="icon">
            <i className="fab fa-lg fa-github"></i>
          </span>
        </a>
        <a className="navbar-item" href="https://twitter.com/awklaser">
          <span className="icon has-text-info" style={{ color: '#0084FF' }}>
            <i className="fab fa-lg fa-twitter"></i>
          </span>
        </a>
        <a className="navbar-item" href="http://resume.aaronklaser.com">
          Resume
          <span className="icon" style={{ color: '#0077B5', marginLeft: 5 }}>
            <i className="fab fa-lg fa-linkedin"></i>
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Header
