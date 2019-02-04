import React from 'react'
import PropTypes from 'prop-types'
import Footer from './containers/footer/Footer'
import Contact from '../components/containers/contacts/Contacts.en'
import Header from './containers/header'
import '../styles/main.scss'
import ShoutBar from './commons/shoutbar';


class Layout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header locale="en" callToAction="Contact Me"/>
        </header>
        <ShoutBar callToAction="GET STARTED NOW"/>
        {this.props.children}
        <Contact />
        <footer>
          <Footer locale="en"/>
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
