import React from 'react';
import Dots from '../../../images/layout/dots.png'
import Fade from 'react-reveal/Fade';
import BlogItem from './blog-item'
import { Container, Row, Col } from 'reactstrap';


const BlogWidget = ({ items }) => {
    return (
        <Fade bottom>
            <div className="Portfolio" style={{ backgroundImage: `url(${Dots})` }}>
                <div className="Portfolio__title">
                    <h4 className="color--gradient text--spacing">ULTIMI ARTICOLI</h4>
                </div>

                <Container>
                    <Row>
                        <Col xs="12" sm="12" className="PostsWidget">
                            {items.map((item) => <BlogItem post={item} />)}
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fade>
    );
}

export default BlogWidget;
