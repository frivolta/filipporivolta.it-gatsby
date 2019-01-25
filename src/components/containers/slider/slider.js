import React from 'react';
import { Button } from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SliderImage from '../../../images/slider/hero_1.jpg'

//Define inline style (hero would be dynamic)
const sliderStyle = {
  backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url('${SliderImage}')`
}

const Slider = ()=> (
            <div className="Slider" style={sliderStyle}>
                <div className="container__wide">
                    <div className="container__wide__wrapper">
                        <h1 className="Slider__text">
                            <span className="word--wrap word--bold word--gradient">
                                User interface
                        <span className="text-highlight-gradient-block"></span>
                            </span>
                            design e <br /> frontend development.
                    </h1>
                        <AnchorLink href='#contact'><Button className="contact-button btn--gradient slider-button ">Inviami un messaggio</Button></AnchorLink>
                    </div>
                </div>
            </div>
)

export default Slider;