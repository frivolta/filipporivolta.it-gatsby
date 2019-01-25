import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Button } from 'reactstrap';

import Sad from '../images/404/sad-404.jpg'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Pagina non trovata" />
    <div className="NotFoundPage">
      <img src={Sad} alt="Nessuna pagina trovata"/>
      <h1>Pagina non trovata</h1>
      <p>Che figuraccia... la pagina che stavi cercando non esiste!</p>
      <Link to="/">
        <Button className="contact-button btn--gradient slider-button Services__button">
                Torna alla Home page!
        </Button>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
