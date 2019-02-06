import React from 'react'
import PropTypes from 'prop-types'
import Footer from './containers/footer/Footer'
//import { StaticQuery, graphql } from 'gatsby'
import Contact from '../components/containers/contacts/Contacts'
import Header from './containers/header'
import '../styles/main.scss'
import ShoutBar from './commons/shoutbar';
//import ReactGA from 'react-ga';


class Layout extends React.Component {
  render() {
    const {locale} = this.props;
    const renderLayout = (locale) => {
      if (locale==='en'){
        return(
          <div style={{background: this.props.background}}>
            <header>
              <Header locale="en" callToAction="Contact Me"/>
            </header>
            <ShoutBar callToAction="GET STARTED NOW"/>
            {this.props.children}
            <Contact locale="en"/>
            <footer>
              <Footer locale="en"/>
            </footer>
          </div>
        )
      } else {
        return(
          <div style={{backgroundColor: this.props.background}}>
            <header>
              <Header locale="it" callToAction="Contattami"/>
            </header>
              <ShoutBar callToAction="Sviluppa ora il tuo progetto"/>
            {this.props.children}
            <Contact locale="it"/>
            <footer>
              <Footer locale="it"/>
            </footer>
          </div>
        )
      }
    }
    return (
      renderLayout(locale)
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
  background: PropTypes.string
}

export default Layout
