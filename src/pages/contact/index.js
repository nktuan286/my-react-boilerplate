import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FaGithub, FaLinkedin, FaSkype } from 'react-icons/fa';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import Main from '../../layouts/Main';
import avatar from '../../assets/images/me2.jpg';
import './style.scss';

const { TextArea } = Input;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Main>
        <Container>
          <div style={{ fontSize: '30px', marginBottom: '30px', fontWeight: '600' }}>Get in touch</div>
          <section id="contact-info">
            <Row>
              <Col md="5">
                {/* <img src={avatar} alt="" style={{ width: '100%', height: '90%', borderRadius: '10px' }} /> */}
                <dl>
                  <dt style={{ float: 'left' }}>Email:</dt>
                  <dd style={{ paddingLeft: '100px' }}>nktuan286@gmail.com</dd>
                  <dt style={{ float: 'left' }}>Phone:</dt>
                  <dd style={{ paddingLeft: '100px' }}>+84 905 856 823</dd>
                  <dt style={{ float: 'left' }}>Address:</dt>
                  <dd style={{ paddingLeft: '100px' }}>Da Nang, Vietnam</dd>
                </dl>
                <div style={{ marginBottom: '20px' }}>
                  <a style={{ color: '#000000' }} href="https://github.com/nktuan286?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FaGithub size="40" />
                  </a>
                  <a style={{ color: '#000000', margin: '0 20px' }} href="https://www.linkedin.com/in/tuankim/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size="40" />
                  </a>
                  <a style={{ color: '#000000' }} href="https://join.skype.com/invite/KhIovglrM9XW" target="_blank" rel="noopener noreferrer">
                    <FaSkype size="40" />
                  </a>
                </div>
              </Col>
              <Col md="7">
                <div style={{ marginBottom: '15px' }}>Or just write me a letter here.</div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <Form.Item>
                    {getFieldDecorator('name', {
                      rules: [{ required: true, message: 'Please input your name!' }],
                    })(
                      <Input size="large" placeholder="Your name" />,
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('email', {
                      rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                      <Input size="large" placeholder="Your email" />,
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('message', {
                      rules: [{ required: true, message: 'Please input your message!' }],
                    })(
                      <TextArea className="ant-input-lg" size="large" rows={4} placeholder="Type the message here" />,
                    )}
                  </Form.Item>
                  <Form.Item>
                    <Button size="large" type="primary" block>
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </section>
        </Container>
      </Main>
    );
  }
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({});

const WrappedContactForm = Form.create({ name: 'contact_login' })(Contact);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedContactForm));
