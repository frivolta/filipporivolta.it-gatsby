import React from 'react'
import PropTypes from 'prop-types'
import Footer from './containers/footer/Footer'
//import { StaticQuery, graphql } from 'gatsby'
import Contact from '../components/containers/contacts/Contacts'
import Header from './containers/header'
import '../styles/main.scss'
import ShoutBar from './commons/shoutbar';
import MediaQuery from 'react-responsive';
import LanguageSwitcher from '../components/commons/languageSwitcher'
import SEO from './seo'

//import ReactGA from 'react-ga';


class Layout extends React.Component {
  render() {
    const { locale } = this.props;
    const renderLayout = (locale) => {
      if (locale === 'en') {
        return (
          <React.Fragment>
          <SEO lang="en" title="Filippo Rivolta" keywords={[`filippo rivolta`, `web design milano`, `frontend developer milano`, `graphic designer milano`]} description="Passionate Ui / Ux designer and frontend developer focusing on modern and engaging user interfaces. Take a look!" />
          <div>
            <header>
              <Header locale="en" callToAction="Contact Me" />
              <MediaQuery query="(max-width: 495px)">
                <LanguageSwitcher locale="en" />
              </MediaQuery>
            </header>
            <ShoutBar callToAction="GET STARTED NOW" />
            {this.props.children}
            <Contact locale="en" />
            <footer>
              <Footer locale="en" />
            </footer>
          </div>
          </React.Fragment>
        )
      } else {
        return (
          <div>
            <header>
              <Header locale="it" callToAction="Contattami" />
              <MediaQuery query="(max-width: 495px)">
                <LanguageSwitcher locale="it" />
              </MediaQuery>
            </header>
            <ShoutBar callToAction="Sviluppa ora il tuo progetto" />
            {this.props.children}
            <Contact locale="it" />
            <footer>
              <Footer locale="it" />
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
  locale: PropTypes.string.isRequired
}

export default Layout
