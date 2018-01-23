import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './Header'
import Footer from './Footer'

import './index.scss'

require("prismjs/themes/prism.css");

const TemplateWrapper = ({ children }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    minHeight: '100vh'
  }}>
    <Helmet
      title="Aaron is Awesome"
      meta={[
        { name: 'description', content: 'Aaron Klaser\'s personal wedsite, portfolio, blog, tutorials, and just cool $h!t' },
        { name: 'keywords', content: 'resume, blog, porfolio, tutorials, aaron klaser' },
      ]}
      script={[
        { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
        // { 'src': 'https://buttons.github.io/buttons.js'}
      ]}
      link={[
        {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
      ]}
    />
    <Header />
    <div style={{ flex: 1 }}>
      {children()}
    </div>
    <Footer />
  </div>

)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
