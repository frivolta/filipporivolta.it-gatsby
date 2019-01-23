import React from 'react';
//import { Link } from 'gatsby'
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Slider from '../components/containers/slider/slider';
import ServicesCarousel from '../components/containers/services/services-carousel';
import DescriptionText from '../components/containers/description-text/DescriptionText';
import PortfolioCarousel from '../components/containers/portfolio-carousel/PortfolioCarousel';

const IndexPage = ({data}) => {
  const { edges: portfolio } = data.allWordpressAcfPortfolio;
	return(
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		<Slider />
		<ServicesCarousel />
		<DescriptionText title="I develop digital experiences,
      products and services" buttonText="Ask for more">
			My name is Filippo Rivolta. I am a passionate Ui / Ux designer and frontend developer focusing on modern and
			engaging user interfaces.
		</DescriptionText>
    {console.log(data)}
    <PortfolioCarousel items={portfolio}/>
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
  }
`
export default IndexPage;
