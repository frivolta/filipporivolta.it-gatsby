import React from 'react';
import { Logo } from '../../commons/logo';
const TopFooter = () => {
  return (
    <div className="TopFooter">
      <div className="container__wide--responsive">
        <Logo logoWidth="150"/>
        <p className="footer-contacts small color--gradient text--center"><a href="tel:+393347001377">+39 3347001377</a> <span className="padding--left padding--right">•</span><a href="mailto:info@filipporivolta.it">info@filipporivolta.it</a></p>
      </div>
    </div>
  )
}
export default TopFooter;