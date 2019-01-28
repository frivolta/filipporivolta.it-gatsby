import React from 'react'
import PropTypes from 'prop-types'
import Footer from './containers/footer/Footer'
//import { StaticQuery, graphql } from 'gatsby'
import Contact from '../components/containers/contacts/Contacts'
import Header from './containers/header'
import '../styles/main.scss'
import ShoutBar from './commons/shoutbar';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-133277122-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Layout = ({ children }) => (
  <div>
    <header>
      <Header />
    </header>
    <ShoutBar />
    {children}
    <Contact/>
    <footer>
      <Footer />
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
