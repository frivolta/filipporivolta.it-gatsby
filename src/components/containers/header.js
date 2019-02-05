import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Button } from 'reactstrap'
import { Logo } from './../commons/logo'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import InstagramImg from '../../images/social/instagram.svg'
import LanguageSwitcher from '../commons/languageSwitcher';
/* import BurgerMenu from '../commons/burger-menu';
 */
const Header = ({locale, callToAction}) => (
    <React.Fragment>
        <div className="Header">
            <div className="container__wide Header__container">
                <Logo logoWidth="180" locale={locale}/>
                <div className="Header__right">
                    {/*<AnchorLink href='#contact'><Button color="primary" className="contact-button d-none d-sm-block" >{callToAction}</Button></AnchorLink>*/}
                    {/* <BurgerMenu/> */}
                    <a href="https://www.instagram.com/filippo.jsx/" target="_blank">
                        <img className="social-button" src={InstagramImg} alt="Instagram Filippo Rivolta Social"/>
                    </a>
                    <LanguageSwitcher locale={locale}/>
                </div>
            </div>
        </div>
        <div className="Header__padding"></div>
    </React.Fragment>
)

Header.propTypes = {
    locale: PropTypes.string.isRequired,
    callToAction: PropTypes.string
}

export default Header
