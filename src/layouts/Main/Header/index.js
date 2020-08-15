/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Drawer } from 'antd';
import './style.scss';
//
class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  _onOpenDrawer = () => {
    this.setState({
      isOpen: true,
    });
  };

  _onCloseDrawer = () => {
    this.setState({
      isOpen: false,
    });
  };

  _renderNavItems = () => {
    const abc = '';
    return (
      <>
        <NavItem>
          <NavLink href="/components/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Contact</NavLink>
        </NavItem>
      </>
    );
  }

  _renderDrawer = () => {
    const { isOpen } = this.state;
    return (
      <Drawer
        title=""
        placement="right"
        closable
        onClose={this._onCloseDrawer}
        visible={isOpen}
        width="350"
      >
        <Nav className="mr-auto" navbar>
          { this._renderNavItems() }
        </Nav>
      </Drawer>
    );
  }

  render() {
    return (
      <header>
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand href="/">Me</NavbarBrand>
            <NavbarToggler onClick={this._onOpenDrawer} />
            <Nav className="mr-auto hide-on-mobile main-menu" navbar>
              { this._renderNavItems() }
            </Nav>
            { this._renderDrawer() }
          </Container>
        </Navbar>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainHeader));
