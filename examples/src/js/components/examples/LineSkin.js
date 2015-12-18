import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';
import { Checkbox, Radio } from 'react-icheck';
import ColorToolbar from './ColorToolbar';

class LineSkin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      skin: 'line',
      color: 'blue',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      color: nextProps.color,
    });
  }

  getCheckboxClass() {
    const { skin, color } = this.state;
    if (color) {
      return `icheckbox_${skin}-${color}`;
    }
    return `icheckbox_${skin}`;
  }

  getRadioClass() {
    const { skin, color } = this.state;
    if (color) {
      return `iradio_${skin}-${color}`;
    }
    return `iradio_${skin}`;
  }

  handleColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <div>
        <h3>Line skin</h3>
        <Panel>
          <Row>
            <Col md={3}>
              <Checkbox
                checkboxClass={this.getCheckboxClass()}
                insert={'<div class="icheck_line-icon"></div>Checkbox'}
              />
              <br/>
              <Checkbox
                checkboxClass={this.getCheckboxClass()}
                insert={<div><div className="icheck_line-icon"></div>Checkbox, defaultChecked</div>}
                defaultChecked
              />
              <br/>
              <Checkbox
                checkboxClass={this.getCheckboxClass()}
                insert={'<div class="icheck_line-icon"></div>Checkbox, disabled'}
                disabled
              />
              <br/>
              <Checkbox
                checkboxClass={this.getCheckboxClass()}
                insert={'<div class="icheck_line-icon"></div>Checkbox, defaultChecked disabled'}
                defaultChecked
                disabled
              />
            </Col>
            <Col md={3}/>
            <Col md={3}>
              <Radio
                radioClass={this.getRadioClass()}
                insert={'<div class="icheck_line-icon"></div>Radio'}
              />
              <br/>
              <Radio
                radioClass={this.getRadioClass()}
                insert={<div><div className="icheck_line-icon"/>Radio, defaultChecked</div>}
                defaultChecked
              />
              <br/>
              <Radio
                radioClass={this.getRadioClass()}
                insert={'<div class="icheck_line-icon"></div>Radio, disabled'}
                disabled
              />
              <br/>
              <Radio
                radioClass={this.getRadioClass()}
                insert={'<div class="icheck_line-icon"></div>Radio, defaultChecked disabled'}
                defaultChecked
                disabled
              />
            </Col>
          </Row>
          <ColorToolbar color={this.state.color} onChange={this.handleColor.bind(this)}/>
        </Panel>

      </div>
    );
  }
}

export default LineSkin;
