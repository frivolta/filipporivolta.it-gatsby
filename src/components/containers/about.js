import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fade from 'react-reveal/Fade';

const About = () => (
    <Fade bottom>
        <div className="About">
            <Container>
                <Row>
                    <Col>
                        <h2 className="About__title color--gradient">I develop digital experiences,
    products and services</h2>
                        <p className="About__text">My name is Filippo Rivolta. I am a passionate Ui / Ux designer
                        and frontend developer focusing on modern and engaging
    user interfaces.</p>
                        <AnchorLink href='#contact'><Button className="contact-button btn--gradient slider-button Services__button">Ask for more</Button></AnchorLink>
                    </Col>
                </Row>
            </Container>
        </div>
    </Fade>

)
export default About;
