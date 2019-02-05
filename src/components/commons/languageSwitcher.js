import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const LanguageSwitcher = ({ locale }) => {
    return (
        <div className="language-switcher">
            <Link className={locale === 'en' ? 'language-switcher--active' : ''} to="/en">SWITCH TO ENGLISH</Link>
            <Link to="/" className={locale === 'it' ? 'language-switcher--active' : ''}>LINGUA ITALIANA</Link>
        </div>
    )
}

LanguageSwitcher.propTypes = {
    locale: PropTypes.string.isRequired
}

export default LanguageSwitcher;
