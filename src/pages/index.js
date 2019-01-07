import React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Slider from '../components/containers/slider/slider';
import ServicesOwl from './../components/containers/services/services-owl'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slider/>
    <ServicesOwl/>
  </Layout>
)

export default IndexPage
