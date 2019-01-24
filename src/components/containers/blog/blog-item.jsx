import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Moment from 'react-moment';
import { Link } from 'gatsby'


export default function BlogItem({post}) {
    return (
        <div className="Posts__intro">
            <Container>
                <Row>
                    <Col>
                        <h2 className="Post__title " ><Link className="button is-small" to={`/blog/${post.node.slug}`}>{post.node.title}</Link></h2>
                        <small className="Post__date color--secondaryColor">Pubblicato il <Moment locale="it" format="DD/MM/YYYY" date={post.node.date} /> da Filippo Rivolta</small>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
