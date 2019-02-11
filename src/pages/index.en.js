import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Slider from '../components/containers/slider/slider';
import ServicesCarousel from '../components/containers/services/services-carousel.en';
import DescriptionText from '../components/containers/description-text/DescriptionText';
import PortfolioCarousel from '../components/containers/portfolio-carousel/PortfolioCarousel';
import BlogWidget from '../components/containers/blog/blog-widget';
import Fade from 'react-reveal/Fade';


const IndexPage = ({data}) => {
  const lang = "en"
  const { edges: portfolio } = data.allWordpressAcfPortfolio;
  const localePortfolio = portfolio.filter(item => item.node.acf.language===lang);
  const { edges: blog } = data.allWordpressPost;
  const localeBlog = blog.filter(item => item.node.acf.language===lang);

	return(
	<Layout locale="en">
    <SEO lang="en" title="Filippo Rivolta" keywords={[`filippo rivolta`, `web design milano`, `frontend developer milano`, `graphic designer milano`]} description="Passionate Ui / Ux designer and frontend developer focusing on modern and engaging user interfaces. Take a look!" />
		<Fade bottom>
      <Slider callToAction="Send me a message">
        <span className="word--wrap word--bold word--gradient">
          Web
          <span className="text-highlight-gradient-block"></span>
        </span>
          design and <br /> Front-end Development.
      </Slider>
    </Fade>
    <Fade bottom>
		  <ServicesCarousel />
    </Fade>
		<DescriptionText title="I develop digital experiences,
      products and services" buttonText="Ask for more">
			My name is Filippo Rivolta. I am a passionate Ui / Ux designer and frontend developer focusing on modern and
			engaging user interfaces.
		</DescriptionText>
    <PortfolioCarousel items={localePortfolio} title="Works" locale="/en/" callToAction="Contact me now"/>
   <BlogWidget items={localeBlog} locale={lang}/>
	</Layout>
)};

export const pageQuery = graphql`
  query {
    allWordpressAcfPortfolio {
      edges {
        node {
          id
          acf {
            language
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
          acf{
            language
          }
        }
      }
    }
  }
`
export default IndexPage;
