import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Divider from '../../commons/divider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state={
      formSent: false
    }
  }
  formSubmitHandler = (email,name,message) => {
    fetch('https://www.filipporivolta.com/wp-json/contact-form-7/v1/contact-forms/34/feedback', {
      method: 'post',
      body: `your-name=${name}&your-email=${email}&your-message=${message}`,
      headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    });
    
  }

  render() {
    const {locale} = this.props;
    const strings = {
      title: {
          it: "Parla con me",
          en: "Talk to me"
      },
      description: {
        it: "Compila tutti i campi obbligatori, verrai ricontattato in poco tempo. Puoi cotattarmi anche tramite email o telefono.",
        en: "Please fill in all required fields, I will get back to you ASAP. You can contact me by mail or phone too!"
      },
      errors: {
        email: {
          it:"Indirizzo email non valido",
          en:"Email address not valid"
        },
        fields: {
          it:"Per favore, compila tutti i campi",
          en:"Please fill in all fields"
        }
      },
      placehodlers: {
        email: {
          it:"Email *",
          en:"Email *"
        },
        name: {
          it:"Nome *",
          en:"Name *"
        },
        message: {
          it:"Come posso aiutarti...",
          en:"How can I help you with..."
        }
      },
      sendButton: {
        it: "Invia il messaggio!",
        en: "Send message!"
      },
      messageSent: {
        title: {
          it:"Grazie il tuo messaggio è stato inviato!",
          en:"Thanks, your message have been sent!"
        },
        message: {
          it:"Sarai contattato il prima possibile, puoi metterti ancora in contatto con me mandandomi una mail o telefonandomi!",
          en:"I will get back to you as soon as possible, you can still reach me by mail or phone!"
        }
      } 
    } 
    return (
        <div className="Contact" id={'contact'}>
        
        <Divider dividerColor={'gradient'} />
        {!this.state.formSent&&
        <Container>
          <Row>
            <Col>
              <h2 className="Contact__title color--gradient">{locale === 'en' ? strings.title.en : strings.title.it}</h2>
              <p className="Contact__text">{locale === 'en' ? strings.description.en : strings.description.it}</p>
            </Col>
          </Row>
          <Row>
            <Formik
              initialValues={{ email: '', name: '', textarea: '' }}
              validate={values => {
                let errors = {};
                if (!values.email || !values.name) {
                  errors.email = (locale === 'en' ? strings.errors.fields.en : strings.errors.fields.it);
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = (locale === 'en' ? strings.errors.email.en : strings.errors.email.it);
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                this.formSubmitHandler(values.email, values.name, values.textarea)
                this.setState({
                  ...this.state,
                  formSent:true
                })
              }}
            >           
              {({ isSubmitting }) => (
                  <Form>
                    <Row>
                      <Col sm="6" xs="12">
                        <Field type="input" name="name" className="input-field" placeholder={locale === 'en' ? strings.placehodlers.name.en : strings.placehodlers.name.it}/>
                      </Col>
                      <Col sm="6" xs="12">
                        <Field type="email" name="email" className="input-field" placeholder={locale === 'en' ? strings.placehodlers.email.en : strings.placehodlers.email.it} />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <Field component="textarea" rows="7" type="textarea" name="textarea" className="input-field" placeholder={locale === 'en' ? strings.placehodlers.message.en : strings.placehodlers.message.it} />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="Contact__text Contact__errors">
                          <ErrorMessage name="name" component="div" className="form-error" />
                          <ErrorMessage name="email" component="div" className="form-error" />
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button type="submit" disabled={isSubmitting} className="contact-button btn--gradient slider-button Services__button">{locale === 'en' ? strings.sendButton.en : strings.sendButton.it}</Button>
                      </Col>
                    </Row>
                  </Form>
              )}
            </Formik>
          </Row>
        </Container>
        }
          {this.state.formSent&&
        <Container>
          <Row>
            <Col>
              <h2 className="Contact__title color--gradient">{locale === 'en' ? strings.messageSent.title.en : strings.messageSent.title.it}</h2>
              <p className="Contact__text">{locale === 'en' ? strings.messageSent.message.en : strings.messageSent.message.it}</p>
            </Col>
          </Row>    
        </Container>
        }
      </div>
    )
  }
}