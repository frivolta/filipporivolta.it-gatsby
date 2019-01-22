import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout'
import SEO from '../components/seo'

class Post extends React.Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
                <h1 dangerouslySetInnerHTML={{__html: post.title}}/>
                {post.content}
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
    }
  }
`
