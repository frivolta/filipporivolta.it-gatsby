import React from 'react';
//import { Link } from 'gatsby'
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Slider from '../components/containers/slider/slider';
import ServicesCarousel from '../components/containers/services/services-carousel';
import DescriptionText from '../components/containers/description-text/DescriptionText';
import PortfolioCarousel from '../components/containers/portfolio-carousel/PortfolioCarousel';
import BlogWidget from '../components/containers/blog/blog-widget';
import Fade from 'react-reveal/Fade';


const IndexPage = ({data}) => {
  const { edges: portfolio } = data.allWordpressAcfPortfolio;
  /* const { edges: blog } = data.allWordpressPost; */
	return(
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		<Fade bottom>
      <Slider />
    </Fade>
    <Fade bottom>
		  <ServicesCarousel />
    </Fade>
		<DescriptionText title="I develop digital experiences,
      products and services" buttonText="Ask for more">
			My name is Filippo Rivolta. I am a passionate Ui / Ux designer and frontend developer focusing on modern and
			engaging user interfaces.
		</DescriptionText>
    {console.log(data)}
    <PortfolioCarousel items={portfolio}/>
    {/* <BlogWidget items={blog}/> */}
	</Layout>
)};

export const pageQuery = graphql`
  query {
    allWordpressAcfPortfolio {
      edges {
        node {
          id
          acf {
            slug
            project_title
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
      }
    }
    allWordpressPost(limit:3) {
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
export default IndexPage;
