import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Container,
} from 'reactstrap';

class MainFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer style={{ borderTop: '1px solid' }}>
        <Container style={{ padding: '20px', textAlign: 'center' }}>
          Copyright @ tuankim
        </Container>
      </footer>
    );
  }
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainFooter));
