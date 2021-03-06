import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Divider from '../../commons/divider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'reactstrap';


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
    return (
        <div className="Contact" id={'contact'}>
        
        <Divider dividerColor={'gradient'} />
        {!this.state.formSent&&
        <Container>
          <Row>
            <Col>
              <h2 className="Contact__title color--gradient">Talk to me</h2>
              <p className="Contact__text">Please fill in all required fields, I will get back to you ASAP. You can contact me by mail or phone too!</p>s
            </Col>
          </Row>
          <Row>
            <Formik
              initialValues={{ email: '', name: '', textarea: '' }}
              validate={values => {
                let errors = {};
                if (!values.email || !values.name) {
                  errors.email = 'Please fill in all fields';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Email address not valid';
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
                        <Field type="input" name="name" className="input-field" placeholder="Name *" />
                      </Col>
                      <Col sm="6" xs="12">
                        <Field type="email" name="email" className="input-field" placeholder="Email *" />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <Field component="textarea" rows="7" type="textarea" name="textarea" className="input-field" placeholder="How can I help you..." />
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
                        <Button type="submit" disabled={isSubmitting} className="contact-button btn--gradient slider-button Services__button">Send message!</Button>
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
              <h2 className="Contact__title color--gradient">Thanks, your message have been sent!</h2>
              <p className="Contact__text">I will get back to you as soon as possible, you can still reach me by mail or phone!</p>
            </Col>
          </Row>    
        </Container>
        }
      </div>
    )
  }
}