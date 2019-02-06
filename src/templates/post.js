import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout'
import SEO from '../components/seo'

class Post extends React.Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <Layout background="white" locale={post.acf.language}>
        <Container>
          <Row>
            <Col xs="12" sm="8" className="Blog__content">
                <h1 dangerouslySetInnerHTML={{__html: post.title}}/>
                <p dangerouslySetInnerHTML={{__html: post.content}}/>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}
export default Post
export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    	
      author {
        name
        description
        id
      }
    	featured_media {
    	  id
        localFile{
          publicURL
        }
    	}
      acf {
        language
      }
    }
  }
`
