import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Main from '../../layouts/Main';
import './style.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Main>
        <Container>
          <section className="about-me">
            <Row>
              <Col md="12" sm="12">
                <div className="personal-profile">
                  <div className="typewriter">
                    <div className="typewriter-text1">Hello,</div>
                  </div>
                  <div className="typewriter block">
                    <div className="typewriter-text2">I'm Tuan Nguyen.</div>
                  </div>
                  <br />
                  <span className="personal-profile-role">A full-stack developer || A blogger</span>
                </div>
                <br />
                <div>
                  <span className="about-me-text">About me</span>:
                  <div>
                    I have 5 years of experience of working on a variety of web development projects. I work on all aspects of the development life cycle, applying my knowledge of OOP and MVC principles. My past work includes building user-focused, dynamic, innovative and functional websites using responsive / adaptive / mobile-first design and development. I have good ReactJS/NodeJS/MongoDB knowledge and willing to learn new things.
                  </div>
                </div>
              </Col>
            </Row>
          </section>
          <br />
          <section id="experience">
            <span className="about-me-text">Experiences</span>:
            <Row>
              <Col md="3" sm="3">
                <div className="font-weight-bold">Xenia Tech</div>
                <div>2014 - Present</div>
              </Col>
              <Col md="9" sm="9">
                <div className="font-weight-bold">Senior Developer</div>
                <div>
                  <ul>
                    <li>
                      Migrated from old websites to modern websites to help to improve UI/UX and Security by using
                      modern techniques (ReactJS, NodeJS, MongoDB, AWS)
                    </li>
                    <li>
                      Increased performance for the websites by 80% by applying Progressive Web App standard
                    </li>
                    <li>
                      Coordinated with team members to build a CI/CD for deploying and testing
                    </li>
                    <li>
                      Built a chat application and integrated it into customer’s system.
                    </li>
                    <li>
                      Liaising directly with clients, taking briefs and developing user stories
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="3" sm="3">
                <div className="font-weight-bold">Xenia Tech</div>
                <div>2014 - Present</div>
              </Col>
              <Col md="9" sm="9">
                <div className="font-weight-bold">Senior Developer</div>
                <div>
                  <ul>
                    <li>
                      Migrated from old websites to modern websites to help to improve UI/UX and Security by using
                      modern techniques (ReactJS, NodeJS, MongoDB, AWS)
                    </li>
                    <li>
                      Increased performance for the websites by 80% by applying Progressive Web App standard
                    </li>
                    <li>
                      Coordinated with team members to build a CI/CD for deploying and testing
                    </li>
                    <li>
                      Built a chat application and integrated it into customer’s system.
                    </li>
                    <li>
                      Liaising directly with clients, taking briefs and developing user stories
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="3" sm="3">
                <div className="font-weight-bold">Xenia Tech</div>
                <div>2014 - Present</div>
              </Col>
              <Col md="9" sm="9">
                <div className="font-weight-bold">Senior Developer</div>
                <div>
                  <ul>
                    <li>
                      Migrated from old websites to modern websites to help to improve UI/UX and Security by using
                      modern techniques (ReactJS, NodeJS, MongoDB, AWS)
                    </li>
                    <li>
                      Increased performance for the websites by 80% by applying Progressive Web App standard
                    </li>
                    <li>
                      Coordinated with team members to build a CI/CD for deploying and testing
                    </li>
                    <li>
                      Built a chat application and integrated it into customer’s system.
                    </li>
                    <li>
                      Liaising directly with clients, taking briefs and developing user stories
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </section>
          <br />
          <section id="education">
            <span className="about-me-text">Educations</span>:
            <Row>
              <Col md="3" sm="3">
                <div className="font-weight-bold">Aptech Computer Education</div>
                <div>2014 - 2016</div>
              </Col>
              <Col md="9" sm="9">
                <div className="font-weight-bold">Higher Diploma in Software Engineering</div>
                <div>
                  GRADE: Distinction
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md="3" sm="3">
                <div className="font-weight-bold">Danang College of Technology</div>
                <div>2011 - 2013</div>
              </Col>
              <Col md="9" sm="9">
                <div className="font-weight-bold">Associate's Degree</div>
                <div>
                  GRADE: Good
                </div>
              </Col>
            </Row>
          </section>
          <br />
          <section id="certification">
            <span className="about-me-text">Certifications & Awards</span>:
            <Row>
              <Col md="3" sm="3">
                <div className="font-weight-bold">Coursera</div>
                <div>2020</div>
              </Col>
              <Col md="9" sm="9">
                <div className="font-weight-bold">IBM Data Science Professional Certificate</div>
                <div>
                  GRADE: Good
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md="3" sm="3">
                <div className="font-weight-bold">PIKALONG WAR</div>
                <div>2019</div>
              </Col>
              <Col md="9" sm="9">
                <div className="font-weight-bold">Top 10 team of PIKALONG WAR – Code Challenge competence at FPT Software</div>
                <div>
                  GRADE: Top 10
                </div>
              </Col>
            </Row>
          </section>
          <br />
          <section id="skill">
            <span className="about-me-text">Technical Skills</span>:
            <Row>
              <Col md="6" sm="12">
                <div className="font-weight-bold">Proficient skills</div>
                <div>
                  <ul>
                    <li>ReactJS, Redux, NodeJS, MongoDB</li>
                    <li>JavaScript, HTML/CSS, Bootstrap,
                      SASS/LESS
                    </li>
                    <li>Progressive Web App, Design Pattern</li>
                    <li>Version control – GIT</li>
                    <li>Experience of building and integrating
                      with RESTful API
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="6" sm="12">
                <div className="font-weight-bold">Familiar skills</div>
                <div>
                  <ul>
                    <li>React Native</li>
                    <li>SQL Server, PostgreSQL</li>
                    <li>WebSocket, socket.io</li>
                    <li>Python</li>
                    <li>Amazon Web Services, Docker</li>
                  </ul>
                </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
