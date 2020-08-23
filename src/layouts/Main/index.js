import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header>
          Header
        </Header>
        <main style={{ marginTop: '30px', marginBottom: '30px' }}>
          { this.props.children }
        </main>
        <Footer>
          {/* Footer */}
        </Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
