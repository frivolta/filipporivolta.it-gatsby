import React from 'react'
import { Button } from 'reactstrap'
import { Logo } from './../commons/logo'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => (
    <React.Fragment>
        <div className="Header">
            <div className="container__wide Header__container">
                <Logo logoWidth="180" />
                <div className="Header__right">
                    <AnchorLink href='#contact'><Button color="primary" className="contact-button d-none d-sm-block" >Contattami</Button></AnchorLink>
                    {/*<Menu />*/}
                </div>
            </div>
        </div>
        <div className="Header__padding"></div>
    </React.Fragment>
)

export default Header
