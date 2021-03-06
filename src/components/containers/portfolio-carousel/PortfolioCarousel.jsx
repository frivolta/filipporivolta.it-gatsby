import React from 'react';
import PropTypes from 'prop-types';
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

const PortfolioCarousel = ({items, locale, title, callToAction}) => {

		return (
			<Fade bottom>
				<div className="Portfolio"  style={{backgroundImage: `url(${Dots})`}}>
					<div className="Portfolio__title">
						<h4 className="color--gradient text--spacing">{title}</h4>
					</div>
					<ul>
						<Slider {...parameters}>
							{items.map((item)=> <PortfolioElement
								 key={item.node.id}
								 title={item.node.acf.project_title}
								 slug={item.node.acf.slug}
								 locale={locale}
								 image={item.node.acf.featured_image.localFile.publicURL}
							/>)}					
						</Slider>
					</ul>
					<AnchorLink href="#contact">
						<Button className="contact-button btn--gradient slider-button Services__button">
							{callToAction}
						</Button>
					</AnchorLink>
				</div>
			</Fade>
		);
}

PortfolioCarousel.propTypes = {
	items: PropTypes.array,
	locale: PropTypes.string,
	title: PropTypes.string,
	callToAction: PropTypes.string
}

export default PortfolioCarousel;
