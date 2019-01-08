import React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Slider from '../components/containers/slider/slider';
import ServicesCarousel from '../components/containers/services/services-carousel';
import About from '../components/containers/about';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slider/>
    <ServicesCarousel/>
    <About/>
  </Layout>
)

export default IndexPage
