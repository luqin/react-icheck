import 'bootstrap/dist/css/bootstrap.css';
import 'icheck/skins/all.css';

import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-iCheck</a>
            </Navbar.Brand>
          </Navbar.Header>
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
