import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogItem from '../components/containers/blog/blog-item';

class Blog extends React.Component {
  render() {
    return (
      <Layout>
        		<SEO title="Filippo Rivolta" keywords={[ `filippo`, `rivolta`, `filippo rivolta`, `web design`, `frontend developer` ]} description="Filippo Rivolta, blog dedicato allo sviluppo e al web moderno. Applicazioni, siti web e consulenza. 3347001377"/>
        <Container>
          <Row>
            <Col xs="12" sm="12" className="Posts">
              {this.props.data.allWordpressPost.edges.map((post)=>(
                <BlogItem post={post}/>
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