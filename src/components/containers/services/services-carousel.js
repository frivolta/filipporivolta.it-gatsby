//@Todo: Refactor Service Element
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from 'reactstrap'
import Swiper from 'react-id-swiper';
//Services
import Consulting from '../../../images/carousel/consulting.svg'
import CustomDesign from '../../../images/carousel/custom-design.svg'
import CustomDevelopment from '../../../images/carousel/custom-development.svg'
import Migrations from '../../../images/carousel/migrations.svg'
import BestPerformance from '../../../images/carousel/performance.svg'
import Support from '../../../images/carousel/support.svg'
import Dots from '../../../images/layout/dots.png'

//Slider Params
const parameters = {
	slidesPerView: 4,
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	initialSlide: 3,
	loop: true,
	autoplay:true,
	speed: 1000,
	breakpoints: {
		1200: {
			slidesPerView: 3
		},
        968: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
  };

const ServicesCarousel = () => (
	<div className="Services" style={{backgroundImage: `url(${Dots})`}}>
		<Swiper {...parameters}>
			<div className="service">
				<div className="service__container">
					<img src={Consulting} alt="Consulting and discovery"/>
					<p style={{color:'white'}}>Consulting and discovery</p>
				</div>
			</div>
			<div className="service">
				<div className="service__container">
					<img src={CustomDesign} alt="Custom Design"/>
					<p style={{color:'white'}}>Custom Design</p>
				</div>
			</div>
			<div className="service">
				<div className="service__container">
					<img src={CustomDevelopment} alt="Custom Development"/>
					<p style={{color:'white'}}>Custom Development</p>
				</div>
			</div>
			<div className="service">
				<div className="service__container">
					<img src={Migrations} alt="Content Migrations"/>
					<p style={{color:'white'}}>Content Migrations</p>
				</div>
			</div>
			<div className="service">
				<div className="service__container">
					<img src={BestPerformance} alt="Performance & Security"/>
					<p style={{color:'white'}}>Performance & Security</p>
				</div>
			</div>
			<div className="service">
				<div className="service__container">
					<img src={Support} alt="Support & Maintenance"/>
					<p style={{color:'white'}}>Support & Maintenance</p>
				</div>
			</div>
		</Swiper>
		<AnchorLink href="#contact">
			<Button className="contact-button btn--gradient slider-button Services__button">Let's get in touch</Button>
		</AnchorLink>
	</div>
)

export default ServicesCarousel;