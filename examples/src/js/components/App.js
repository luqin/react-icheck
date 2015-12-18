import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'icheck/skins/all.css';
import 'jquery';
import 'bootstrap';
import {
  Navbar,
  NavBrand,
  Nav,
  NavItem,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Navbar inverse staticTop toggleNavKey={0}>
          <NavBrand><a href="#">React-iCheck</a></NavBrand>
          <Nav>
            <LinkContainer to="/examples">
              <NavItem>Examples</NavItem>
            </LinkContainer>
            <NavItem href="api" target="_blank">API</NavItem>
            <NavItem eventKey={2} href="//github.com/luqin/react-icheck" target="_blank">GitHub</NavItem>
          </Nav>
        </Navbar>
        <Grid>
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
