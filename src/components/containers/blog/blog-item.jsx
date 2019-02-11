import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'gatsby'


const BlogItem = ({post, locale})=>{
    const strings = {
        meta: {
            published:{
                it: "Pubblicato il",
                en: "Published on"
            },
            author:{
                it:"da Filippo Rivolta",
                en:"by Filippo Rivolta"
            }
        }
    }
    return (
        <div className="Posts__intro">
            <Container>
                <Row>
                    <Col>
                        <h2 className="Post__title " ><Link className="button is-small" to={`/blog/${post.node.slug}`}>{post.node.title}</Link></h2>
                        <small className="Post__date color--secondaryColor">{locale==='en' ? strings.meta.published.en : strings.meta.published.it} <Moment locale="it" format="DD/MM/YYYY" date={post.node.date} /> {locale==='en' ? strings.meta.author.en : strings.meta.author.it}</small>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

BlogItem.propTypes = {
    post: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired
}

export default BlogItem