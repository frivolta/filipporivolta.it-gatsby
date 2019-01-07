import React from 'react';
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import logo from '../../images/logo/filippo-rivolta-logo.svg' //Import static logo


export const Logo = ({logoWidth}) => (
  <div className="Logo">
    <Link to="/">
      <img width={logoWidth} src={logo} alt="Filippo Rivolta Logo" />
    </Link>
  </div>
)

Logo.propTypes = {
    width: PropTypes.object
}
Logo.defaultProps = {
    logoWidth: `180`
}