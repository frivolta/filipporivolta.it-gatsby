import React from 'react';
import PortfolioElement from './PortfolioElement';
import Fade from 'react-reveal/Fade';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button } from 'reactstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//Slider Params
const parameters = {
	dots: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 4,
	slidesToScroll: 1,
	centerMode: true,
  autoplay: true,
  arrows: false
};

class PortfolioCarousel extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Fade bottom>
				<div className="Portfolio">
					<div className="Portfolio__title">
						<h4 className="color--gradient text--spacing">WORKS</h4>
					</div>
					<ul>
						<Slider {...parameters}>
							<PortfolioElement />
							<PortfolioElement />
							<PortfolioElement />
							<PortfolioElement />
							<PortfolioElement />
							<PortfolioElement />
						</Slider>
					</ul>
					<AnchorLink href="#contact">
						<Button className="contact-button btn--gradient slider-button Services__button">
							Let's get in touch
						</Button>
					</AnchorLink>
				</div>
			</Fade>
		);
	}
}

export default PortfolioCarousel;
