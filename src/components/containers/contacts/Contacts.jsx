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
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
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
              <p className="Contact__text">Fill out all the fields, you will be contacted As Soon As Possible.
You can reach me by mail or telephone.</p>

            </Col>
          </Row>
          <Row>
            <Formik
              initialValues={{ email: '', name: '', textarea: '' }}
              validate={values => {
                let errors = {};
                if (!values.email || !values.name) {
                  errors.email = 'Fill out all required fields';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
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
                <ScrollableAnchor id={'contact'}>
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
                        <Field component="textarea" rows="7" type="textarea" name="textarea" className="input-field" placeholder="How can I help you with..." />
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
                        <Button type="submit" disabled={isSubmitting} className="contact-button btn--gradient slider-button Services__button">Send Now!</Button>
                      </Col>
                    </Row>
                  </Form>
                </ScrollableAnchor>
              )}
            </Formik>
          </Row>
        </Container>
        }
          {this.state.formSent&&
        <Container>
          <Row>
            <Col>
              <h2 className="Contact__title color--gradient">Thank you, your message has been sent!</h2>
              <p className="Contact__text">You will be contacted As Soon As Possible. You can still reach me by mail or telephone.</p>
            </Col>
          </Row>    
        </Container>
        }
      </div>
    )
  }
}