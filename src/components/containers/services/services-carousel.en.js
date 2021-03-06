import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from 'reactstrap'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//Services
import Consulting from '../../../images/carousel/consulting.svg'
import CustomDesign from '../../../images/carousel/custom-design.svg'
import CustomDevelopment from '../../../images/carousel/custom-development.svg'
import Migrations from '../../../images/carousel/migrations.svg'
import BestPerformance from '../../../images/carousel/performance.svg'
import Support from '../../../images/carousel/support.svg'
import Dots from '../../../images/layout/dots.png'
import ServiceElement from './service-element';
/*@Todo: Transform in custom post type*/

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
				breakpoint: 1250,
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
					centerMode: false,
				}
			},
		]
  };

const ServicesCarousel = () => (
	<div className="Services" style={{backgroundImage: `url(${Dots})`}}>
		<Slider {...parameters}>
			<ServiceElement textField="Consulting and discovery" image={Consulting} />
			<ServiceElement textField="Custom Design" image={CustomDesign} />
			<ServiceElement textField="Custom Development" image={CustomDevelopment} />
			<ServiceElement textField="Content Migrations" image={Migrations} />
			<ServiceElement textField="Performance & Security" image={BestPerformance} />
			<ServiceElement textField="Support & Maintenance" image={Support} />
		</Slider>
		<AnchorLink href="#contact">
			<Button className="contact-button btn--gradient slider-button Services__button">Contact Me</Button>
		</AnchorLink>
	</div>
)

export default ServicesCarousel;