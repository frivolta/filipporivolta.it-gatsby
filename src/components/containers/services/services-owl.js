import React from 'react'
import ServiceElement from './service-element'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from 'reactstrap'
import OwlCarousel from 'react-owl-carousel'
//Import Services Images for {imagename}
import Consulting from '../../../images/carousel/consulting.svg'
import CustomDesign from '../../../images/carousel/custom-design.svg'
import CustomDevelopment from '../../../images/carousel/custom-development.svg'
import Migrations from '../../../images/carousel/migrations.svg'
import BestPerformance from '../../../images/carousel/performance.svg'
import Support from '../../../images/carousel/support.svg'

//Define Owl Carousel Options
const options = {
	center: true,
	loop: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: false,
	autoplay: true,
	stagePadding: 10,
	lazyLoad: true,
	items: 4,
	pagination: false,
	dots: false,
	smartSpeed: 1000,
	responsive: {
		0: {
			items: 1
		},
		580: {
			items: 2
		},
		768: {
			items: 2
		},
		900: {
			items: 3
		},
		1200: {
			items: 4
		}
	}
};

const ServicesOwl = () => (
	<div className="Services">
		<OwlCarousel {...options}>
			<ServiceElement textField={'Consulting and discovery'} image={Consulting} />
			<ServiceElement textField={'Custom Design'} image={CustomDesign} />
			<ServiceElement textField={'Custom Development'} image={CustomDevelopment} />
			<ServiceElement textField={'Performance & Security'} image={Migrations} />
			<ServiceElement textField={'Content Migrations'} image={BestPerformance} />
			<ServiceElement textField={'Support & Maintenance'} image={Support} />
		</OwlCarousel>
		<AnchorLink href="#contact">
			<Button className="contact-button btn--gradient slider-button Services__button">Let's get in touch</Button>
		</AnchorLink>
	</div>
)

export default ServicesOwl;