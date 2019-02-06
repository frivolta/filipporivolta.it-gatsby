import React from 'react';
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
  const lang = "it"
  const { edges: portfolio } = data.allWordpressAcfPortfolio;
  const localePortfolio = portfolio.filter(item => item.node.acf.language===lang);
  const { edges: blog } = data.allWordpressPost;
  const localeBlog = blog.filter(item => item.node.acf.language===lang);
	return(
	<Layout locale="it">
		<SEO title="Filippo Rivolta" keywords={[ `filippo`, `rivolta`, `filippo rivolta`, `web design`, `frontend developer` ]} />
		<Fade bottom>
    <Slider callToAction="Inviami un messaggio">
      <span className="word--wrap word--bold word--gradient">
        Web
        <span className="text-highlight-gradient-block"></span>
      </span>
        design e <br /> Front-end Development.
    </Slider>
    </Fade>
    <Fade bottom>
		  <ServicesCarousel />
    </Fade>
		<DescriptionText title="Sviluppo di esperienze digitali,
      prodotti e servizi" buttonText="Richiedi maggiori informazioni">
      Mi chiamo Filippo Rivolta. Ho una grande passione per l' Ui / Ux design e lo sviluppo frontend, realizzo User interface moderne e coinvolgenti prendendomi cura delle performance e dei dettagli del prodotto finale.
		</DescriptionText>
    <PortfolioCarousel items={localePortfolio} title="Lavori" locale="" callToAction="Contattami Ora"/>
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
            language
          }
        }
      }
    }
    allWordpressPost(limit:1) {
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
