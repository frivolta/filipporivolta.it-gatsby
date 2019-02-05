import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

const BackBar = ({children, locale})=>(
    <div className="BackBar gradient">
        <Link to={locale === 'it' ? '/' : '/en'} className="BackBar__link">{children}</Link>
    </div>
)

BackBar.propTypes = {
    locale: PropTypes.string.isRequired,
    children: PropTypes.string
}

export default BackBar;