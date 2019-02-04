import React from 'react';
import PropTypes from 'prop-types';

import { Logo } from '../../commons/logo';
const TopFooter = ({locale}) => {
  return (
    <div className="TopFooter">
      <div className="container__wide--responsive">
        <Logo logoWidth="150" locale={locale}/>
        <p className="footer-contacts small color--gradient text--center"><a href="tel:+393347001377">+39 3347001377</a> <span className="padding--left padding--right">•</span><a href="mailto:info@filipporivolta.it">info@filipporivolta.it</a></p>
      </div>
    </div>
  )
}

TopFooter.propTypes = {
  locale: PropTypes.string.isRequired
}

export default TopFooter;