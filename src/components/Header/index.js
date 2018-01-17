import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <nav className="navbar is-info" role="navigation" aria-label="main navigation">
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
        src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU3AAAAJGE1MzYxNzYzLTE1NTUtNDEyYi04MzRjLTgzZjNkOGU0MGIzNg.jpg" />
        AaronKlaser.com
      </Link>
    </div>
    <div className="navbar-menu">
    <div className="navbar-start">
      <Link className="navbar-item" to="/">
        Home
      </Link>
    </div>
    </div>
  </nav>
  // <div
  //   style={{
  //     background: 'rebeccapurple',
  //     marginBottom: '1.45rem',
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: '0 auto',
  //       maxWidth: 960,
  //       padding: '1.45rem 1.0875rem',
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: 'white',
  //           textDecoration: 'none',
  //         }}
  //       >
  //         Gatsby
  //       </Link>
  //     </h1>
  //   </div>
  // </div>
)

export default Header
