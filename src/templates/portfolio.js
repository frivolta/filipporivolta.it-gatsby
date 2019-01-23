import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout'
import SEO from '../components/seo'
import BackBar from '../components/commons/backBar';

class Portfolio extends React.Component {
    render() {
        return (
            <Layout>
                {console.log("DATA: ", this.props.data)}
                <BackBar>Torna alla Home page</BackBar>
                <div className="SingleTitle">
                    <h1 className="color--secondaryColor">title</h1>
                </div>
                <Container>
                    <Row>
                        <Col md="8" xs="12">
                            <div className="SingleCarousel">
                                <p>Single image</p>
                                <p>Single image</p>
                            </div>
                        </Col>
                        <Col md="4" xs="12">
                            <div className="SingleMeta">
                                <h3 className="SingleMeta__title color--gradient">Description</h3>
                                <p className="SingleMeta__description">desc text</p>
                                <h4 className="SingleMeta__title color--gradient mt-4 mb-2">Tasks</h4>
                                <ul className="SingleMeta__char">
                                    <li>task list</li>
                                </ul>
                                <h4 className="SingleMeta__title color--gradient mt-4 mb-3"><small>credits</small></h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <BackBar>Torna alla Home page</BackBar>
            </Layout>
        )
    }
}


export default Portfolio
export const portfolioQuery = graphql
`query portfolioQuery($id: String!) {
    wordpressAcfPortfolio(id: { eq: $id }) {
      id
      acf {
            slug
            project_title
            description
            task_list
            credits
            image_one {
                id
                source_url
                localFile {
                    id
                    publicURL
                }
            }
            image_two {
                id
                source_url
                localFile {
                    id
                    publicURL
                }
            }
            image_three {
                id
                source_url
                localFile {
                    id
                    publicURL
                }
            }
            featured_image {
                id
                source_url
                localFile {
                    id
                    publicURL
                }
            }
        }
    }
}`