import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap';
import Moment from 'react-moment';
import Layout from '../components/layout'
import SEO from '../components/seo'

class Post extends React.Component {
  render() {
    const post = this.props.data.wordpressPost;
    const featuredMedia = post.featured_media.localFile.publicURL;
    const metaDescription = '';
    return (
      <Layout background="white" locale={post.acf.language}>
        <SEO title={post.title} description={metaDescription} />
        <Container>
          <Row>
            <Col xs="12" sm="8" className="Blog__featured-img">
               <img src={featuredMedia} alt={post.title}/>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="8" className="Blog__content">
                <small className="Blog__content-date"><Moment locale="it" format="DD-MM-YYYY" date={post.date} /> </small>
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
    	date
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
