import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout'
import SEO from '../components/seo'

class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              {this.props.data.allWordpressPost.edges.map((post)=>(
                <div className="Post">
                  <Container>
                    <Row>
                      <Col>
                        <h2 className="Post__title"><Link className="button is-small" to={post.node.slug}>{post.node.title}</Link></h2>
                        <div
                           dangerouslySetInnerHTML={{
                            __html: post.node.excerpt.replace(/<p class="link-more.*/, ''),
                          }}
                        />

                        <small className="Post__date">{post.node.date}</small>
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