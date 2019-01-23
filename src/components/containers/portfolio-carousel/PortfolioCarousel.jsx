import React from 'react';
import PortfolioElement from './PortfolioElement';
import Fade from 'react-reveal/Fade';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button } from 'reactstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Dots from '../../../images/layout/dots.png'


//Slider Params
const parameters = {
	dots: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 4,
	slidesToScroll: 1,
	centerMode: true,
  autoplay: true,
	arrows: false,
	responsive:
		[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 968,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 690,
				settings: {
					slidesToShow: 1,
				}
			},
		]
};

const PortfolioCarousel = () => {
		return (
			<Fade bottom>
				<div className="Portfolio"  style={{backgroundImage: `url(${Dots})`}}>
					<div className="Portfolio__title">
						<h4 className="color--gradient text--spacing">WORKS</h4>
					</div>
					<ul>
						<Slider {...parameters}>
							<PortfolioElement title="Project Test" slug="/project-test" image="/static/01-1-4063cd7db43a7d625f501f6e1e40e213.jpg"/>
							<PortfolioElement title="Project Test" slug="/project-test" image="/static/01-1-4063cd7db43a7d625f501f6e1e40e213.jpg"/>
							<PortfolioElement title="Project Test" slug="/project-test" image="/static/01-1-4063cd7db43a7d625f501f6e1e40e213.jpg"/>
							<PortfolioElement title="Project Test" slug="/project-test" image="/static/01-1-4063cd7db43a7d625f501f6e1e40e213.jpg"/>
							<PortfolioElement title="Project Test" slug="/project-test" image="/static/01-1-4063cd7db43a7d625f501f6e1e40e213.jpg"/>
							<PortfolioElement title="Project Test" slug="/project-test" image="/static/01-1-4063cd7db43a7d625f501f6e1e40e213.jpg"/>
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

export default PortfolioCarousel;
