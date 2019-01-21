import React from 'react';
//import { Link } from 'gatsby'
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Slider from '../components/containers/slider/slider';
import ServicesCarousel from '../components/containers/services/services-carousel';
<<<<<<< HEAD
import About from '../components/containers/about';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slider/>
    <ServicesCarousel/>
    <About/>
  </Layout>
)
=======
import DescriptionText from '../components/containers/description-text/DescriptionText';
import PortfolioCarousel from '../components/containers/portfolio-carousel/PortfolioCarousel';

const IndexPage = ({data}) => {
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
    {/* <PortfolioCarousel items={data}/> */}
	</Layout>
)};
>>>>>>> 3cfe11a90315e0ec0213746ea59e4b8c06705d1c

//Query portfolio elements from Netlify CMS 
//Saved as md in portfolio folder
/* export const portfolioQuery = graphql `
 query{
  allMarkdownRemark(limit:10){
    edges{
      node{
        frontmatter{
          title,
          path,
          date
        }
      }
    }
  }
}
`  */
export default IndexPage;
