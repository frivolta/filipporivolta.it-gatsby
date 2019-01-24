import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout'
import SEO from '../components/seo'
import BackBar from '../components/commons/backBar';

class Portfolio extends React.Component {
    render() {
        const item = this.props.data.wordpressAcfPortfolio.acf;
        return (
            <Layout>
                {console.log("DATA: ", this.props.data)}
                <BackBar>Torna alla Home page</BackBar>
                <div className="SingleTitle">
                    <h1 className="color--secondaryColor">{item.project_title}</h1>
                </div>
                <Container>
                    <Row>
                        <Col md="8" xs="12">
                            <div className="SingleImage">
                                {item.image_one.localFile.publicURL && <img src={item.image_one.localFile.publicURL} alt={item.project_title}/>}
                                {item.image_two.localFile.publicURL && <img src={item.image_two.localFile.publicURL} alt={item.project_title}/> }
                                {item.image_three.localFile.publicURL && <img src={item.image_three.localFile.publicURL} alt={item.project_title}/> }
                            </div>
                        </Col>
                        <Col md="4" xs="12">
                            <div className="SingleMeta">
                                <h3 className="SingleMeta__title color--gradient">Descrizione</h3>
                                <p className="SingleMeta__description" dangerouslySetInnerHTML={ { __html : item.description } }/>
                                <h4 className="SingleMeta__title color--gradient mt-4 mb-2">Task</h4>
                                <p className="SingleMeta__description" dangerouslySetInnerHTML={ { __html : item.task_list } }/>
                                <h4 className="SingleMeta__title color--gradient mt-4 mb-3"><small>{item.credits}</small></h4>
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