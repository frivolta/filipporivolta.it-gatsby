import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout'
import SEO from '../components/seo'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from 'reactstrap';
import ProfileImage from '../images/about/profile-filippo-rivolta.jpg'

class About extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="Filippo Rivolta" keywords={[`filippo`, `rivolta`, `filippo rivolta`, `web design`, `frontend developer`]} description="Frontend Developer e Ui Designer. Applicazioni web immersive con codice realizzato con attenzione e un'interfaccia user-centrica. 334 7001377." />
                <Container>
                    <Row>
                        <Col xs="12" sm="12" className="Profile">
                            <div className="ProfileImage" style={{backgroundImage: `url(${ProfileImage})`}}>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="AboutColumn">
                            <h2 className="About__title color--gradient color--low-contrast">Chi sono e di cosa mi occupo?</h2>
                            <p className="About__text ">Mi chiamo Filippo Rivolta, Frontend Developer e Ui Designer. Il mio scopo è quello di creare applicazioni web immersive e coinvolgenti tramite codice realizzato con attenzione e un'interfaccia user-centrica.</p>
                            <p className="About__text ">Amo ogni aspetto dello sviluppo di siti e applicazioni web, dalla definizione iniziale dell' Ux fino al deploy.</p>
            

                            <AnchorLink href='#contact'><Button className="contact-button btn--gradient slider-button Services__button">Vuoi fare due chiacchiere?</Button></AnchorLink>
                        </Col>
                    </Row>
                </Container>
                  {/* <Col xs="12" sm="6" className="Profile">
                            <p className="About__text color--low-contrast">Mi chiamo Filippo Rivolta, Frontend Developer e Ui Designer. Il mio scopo è quello di creare applicazioni web immersive e coinvolgenti tramite codice realizzato con attenzione e un'interfaccia user-centrica. Amo ogni aspetto dello sviluppo di siti e applicazioni web, dalla definizione iniziale dell' Ux fino al deploy. Con la mia esperienza posso:
                                Creare siti web responsive, perfetti su tutti i dispositivi.<br/></p>
                            
                        </Col>
                        <Col xs="12" sm="6" className="Profile">
                            <p className="About__text color--low-contrast">
                                Produrre Ui chiare e funzionali.<br/>
                                Colmare il problema comunicativo tra designer e developer<br/>
                                Sviluppare Web App funzionali, incentrate sulla performance e progressive<br/>
                                Integrare siti web in un content management system facile da fruire<br/>
                                </p>
                        </Col> */}
            </Layout>
            
        )
    }
}


export default About

