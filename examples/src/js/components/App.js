import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'icheck/skins/all.css';
import 'jquery';
import 'bootstrap';
import {
  Navbar,
  NavBrand,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Navbar inverse toggleNavKey={0}>
          <NavBrand><a href="#">React-DataTables</a></NavBrand>
          <Nav>
            <LinkContainer to="/getting-started">
              <NavItem>Getting started</NavItem>
            </LinkContainer>
            <NavDropdown title="Examples" id="collapsible-navbar-dropdown">
              <LinkContainer to={'/examples/basic'}>
                <MenuItem>Basic</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <NavItem eventKey={2} href="https://github.com/luqin/react-icheck" target="_blank">GitHub</NavItem>
          </Nav>
        </Navbar>
        <Grid fluid>
          <Row>
            <Col md={12}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
