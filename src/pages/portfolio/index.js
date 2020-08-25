import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import {
  Form, Icon, Input, Button,
} from 'antd';
import Main from '../../layouts/Main';
import Image1 from '../../assets/images/article1.jpg';
import './style.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Main>
        <Container>
          <div style={{ fontSize: '30px', marginBottom: '30px', fontWeight: '600' }}>What I have done</div>
          <section id="contact-info">
            <Row className="project-card">
              <Col md="5" style={{ paddingLeft: 0, paddingRight: 0 }}>
                <img src={Image1} alt="" style={{ width: '100%' }} />
              </Col>
              <Col md="7" style={{ padding: '25px', border: '1px solid rgb(220, 220, 220)' }}>
                <div>Web app page for travel company</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div>
                  <span>Used stack:</span>
                  <div>
                    #HTML #NodeJS #ReactJS
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="project-card">
              <Col md="5" style={{ paddingLeft: 0, paddingRight: 0 }}>
                <img src={Image1} alt="" style={{ width: '100%' }} />
              </Col>
              <Col md="7" style={{ padding: '25px', border: '1px solid rgb(220, 220, 220)' }}>
                2
              </Col>
            </Row>
            <Row className="project-card">
              <Col md="5" style={{ paddingLeft: 0, paddingRight: 0 }}>
                <img src={Image1} alt="" style={{ width: '100%' }} />
              </Col>
              <Col md="7" style={{ padding: '25px', border: '1px solid rgb(220, 220, 220)' }}>
                2
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Portfolio));
