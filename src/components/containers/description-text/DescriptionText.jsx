import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';


const DescriptionText = ({title, children, buttonText}) => (
    <Fade bottom>
        <div className="About">
            <Container>
                <Row>
                    <Col>
                        <h2 className="About__title color--gradient">{title}</h2>
                        <p className="About__text">{children}</p>
                        <AnchorLink href='#contact'><Button className="contact-button btn--gradient slider-button Services__button">{buttonText}</Button></AnchorLink>
                    </Col>
                </Row>
            </Container>
        </div>
    </Fade>

);

DescriptionText.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default DescriptionText;
