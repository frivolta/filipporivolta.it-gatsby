import React from 'react'
import PropTypes from 'prop-types'
import Footer from './containers/footer/Footer'
//import { StaticQuery, graphql } from 'gatsby'

import Header from './containers/header'
import '../styles/main.scss'
import ShoutBar from './commons/shoutbar';

const Layout = ({ children }) => (
  <div>
    <header>
      <Header />
    </header>
    <ShoutBar />
    {children}
    <footer>
      <Footer />
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
