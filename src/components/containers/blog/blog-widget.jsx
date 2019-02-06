import React from 'react';
import PropTypes from 'prop-types';
import Dots from '../../../images/layout/dots.png'
import Fade from 'react-reveal/Fade';
import BlogItem from './blog-item'
import { Container, Row, Col } from 'reactstrap';


const BlogWidget = ({ items, locale }) => {
    const strings = {
        title: {
            it: "ULTIMI ARTICOLI",
            en: "LATEST ARTICLES"
        }
    }
    return (
        <Fade bottom>
            <div className="Portfolio" style={{ backgroundImage: `url(${Dots})` }}>
                <div className="Portfolio__title">
                    <h4 className="color--gradient text--spacing">{locale==='en' ? strings.title.en : strings.title.it}</h4>
                </div>

                <Container>
                    <Row>
                        <Col xs="12" sm="12" className="PostsWidget">
                            {items.map((item) => <BlogItem post={item} locale={locale} />)}
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fade>
    );
}

BlogWidget.propTypes = {
    items: PropTypes.array.isRequired,
    locale: PropTypes.string.isRequired
}

export default BlogWidget;
