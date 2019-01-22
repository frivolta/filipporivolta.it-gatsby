import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout'
import Moment from 'react-moment';
import SEO from '../components/seo'

class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <Col xs="12" sm="12" className="Posts">
              {this.props.data.allWordpressPost.edges.map((post)=>(
                <div className="Posts__intro">
                  <Container>
                    <Row>
                      <Col>
                        <h2 className="Post__title " ><Link className="button is-small" to={post.node.slug}>{post.node.title}</Link></h2>
                        <small className="Post__date color--secondaryColor">Pubblicato il <Moment locale="it" format="DD/MM/YYYY" date={post.node.date}/> da Filippo Rivolta</small>
                      </Col>
                    </Row>
                  </Container>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}


export default Blog

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          date
          modified
        }
      }
    }
  }
`