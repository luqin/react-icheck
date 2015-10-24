import React from 'react';
import {Panel, Row, Col} from 'react-bootstrap';
import {Checkbox, Radio} from 'react-icheck';

class Demo extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h2>DEMO</h2>
        <Panel>
          <Row>
            <Col md={6}>
              <Checkbox
                checkboxClass="icheckbox_square-blue"
                increaseArea="20%"
                label="Checkbox"
              />
              <br/>
              <Checkbox
                checkboxClass="icheckbox_square-blue"
                increaseArea="20%"
                label="Checkbox, defaultChecked"
                defaultChecked
              />
            </Col>
            <Col md={6}>
              <Radio
                name="aa"
                radioClass="iradio_square-blue"
                increaseArea="20%"
                label="Radio"
              />
              <br/>
              <Radio
                name="aa"
                radioClass="iradio_square-blue"
                increaseArea="20%"
                label="Radio, defaultChecked"
                defaultChecked
              />
            </Col>
          </Row>
        </Panel>
      </div>
    );
  }
}

export default Demo;
