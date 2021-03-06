import React from 'react';
import PropTypes from 'prop-types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const ShoutBar = ({callToAction}) => (
    <div className="ShoutBar">
        <div className="ShoutBar__cta">
            <h4 className="color--primary">
                <span className="color--gradient">[ </span>
                <AnchorLink href='#contact'>
                    {callToAction}
                </AnchorLink>
                <span className="color--gradient"> ]</span>
            </h4>
        </div>
        <h4 className="color--primary">
            <a href="tel:+393347001377">
                +39 3347001377
        </a>
            <span className="color--gradient"> • </span>
            <a href="mailto:info@filipporivolta.it">
                info@filipporivolta.it
        </a>
        </h4>
    </div>
)
ShoutBar.propTypes = {
    callToAction: PropTypes.string
}
export default ShoutBar;