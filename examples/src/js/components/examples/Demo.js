import React from 'react';
import {Panel, Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import {Checkbox, Radio} from 'react-icheck';

class Demo extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      i1checked: false,
      i3checked: false,
      i2disabled: false,
      i4disabled: false,
    };
  }

  componentDidMount() {
  }

  handle1() {
    this.setState({
      i1checked: true,
      i3checked: true,
    });
  }

  handle2() {
    this.setState({
      i1checked: false,
      i3checked: false,
    });
  }

  handle3() {
    this.setState({
      i2disabled: true,
      i4disabled: true,
    });
  }

  handle4() {
    this.setState({
      i2disabled: false,
      i4disabled: false,
    });
  }

  handle1Change(e, checked) {
    this.setState({
      i1checked: checked,
    });
  }

  handle3Change(e, checked) {
    this.setState({
      i3checked: checked,
    });
  }

  render() {
    return (
      <div className="demo">
        <h2>DEMO</h2>
        <Panel>
          <Row>
            <Col md={6}>
              <Checkbox
                checkboxClass="icheckbox_square-blue"
                increaseArea="20%"
                label="Checkbox, <span class='label1'>#input-1</span>"
                checked={this.state.i1checked}
                onChange={this.handle1Change.bind(this)}
              />
              <br/>
              <Checkbox
                checkboxClass="icheckbox_square-blue"
                increaseArea="20%"
                label="Checkbox, <span class='label1'>#input-2</span>"
                defaultChecked
                disabled={this.state.i2disabled}
              />
            </Col>
            <Col md={6}>
              <Radio
                name="aa"
                radioClass="iradio_square-blue"
                increaseArea="20%"
                label="Radio, <span class='label1'>#input-3</span>"
                checked={this.state.i3checked}
                onChange={this.handle3Change.bind(this)}
              />
              <br/>
              <Radio
                name="aa"
                radioClass="iradio_square-blue"
                increaseArea="20%"
                label="Radio, <span class='label1'>#input-4</span>"
                defaultChecked
                disabled={this.state.i4disabled}
              />
            </Col>
          </Row>

          <dl className="demo-methods">
            <dt onClick={this.handle1.bind(this)}>
              <span className="self do-check">Add <span className="mark">checked</span> state to 1 and 3 inputs</span>
            </dt>
            <dt onClick={this.handle2.bind(this)}>
              <span className="self do-uncheck">Remove <span className="mark">checked</span> state from 1 and 3 inputs</span>
            </dt>
            <dt onClick={this.handle3.bind(this)}>
              <span className="self do-disable">Add <span className="mark">disabled</span> state to 2 and 4 inputs</span>
            </dt>
            <dt onClick={this.handle4.bind(this)}>
              <span className="self do-enable">Remove <span className="mark">disabled</span> state from 2 and 4 inputs</span>
            </dt>
          </dl>
        </Panel>
      </div>
    );
  }
}

export default Demo;
