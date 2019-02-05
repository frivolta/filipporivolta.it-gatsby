import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SliderImage from '../../../images/slider/hero_1.jpg'

//Define inline style (hero would be dynamic)
const sliderStyle = {
    backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url('${SliderImage}')`
}

const Slider = ({ children, callToAction }) => (
    <div className="Slider" style={sliderStyle}>
        <div className="container__wide">
            <div className="container__wide__wrapper">
                <h1 className="Slider__text">
                    {children}
                </h1>
                <AnchorLink href='#contact'><Button className="contact-button btn--gradient slider-button ">{callToAction}</Button></AnchorLink>
            </div>
        </div>
    </div>
)

Slider.propTypes = {
    children: PropTypes.array,
    callToAction: PropTypes.string
}

export default Slider;