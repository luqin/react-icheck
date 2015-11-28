import React from 'react';
import {Panel, Row, Col} from 'react-bootstrap';
import {Checkbox, Radio} from 'react-icheck';

class FuturicoSkin extends React.Component {

  static propTypes = {
    color: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      skin: 'futurico',
      color: props.color,
    };
  }

  getCheckboxClass() {
    const {skin, color} = this.state;
    if (color) {
      return `icheckbox_${skin}-${color}`;
    }
    return `icheckbox_${skin}`;
  }

  getRadioClass() {
    const {skin, color} = this.state;
    if (color) {
      return `iradio_${skin}-${color}`;
    }
    return `iradio_${skin}`;
  }

  render() {
    return (
      <div className="skin skin-polaris">
        <h3>Futurico skin</h3>
        <Panel>
          <Row>
            <Col md={6}>
              <Checkbox
                checkboxClass={this.getCheckboxClass()}
                increaseArea="-10%"
                label="Checkbox"
              />
              <br/>
              <Checkbox
                checkboxClass={this.getCheckboxClass()}
                increaseArea="-10%"
                label="Checkbox, defaultChecked"
                defaultChecked
              />
              <br/>
              <Checkbox
                checkboxClass={this.getCheckboxClass()}
                increaseArea="-10%"
                label="Checkbox, disabled"
                disabled
              />
              <br/>
              <Checkbox
                checkboxClass={this.getCheckboxClass()}
                increaseArea="-10%"
                label="Checkbox, defaultChecked disabled"
                defaultChecked
                disabled
              />
            </Col>
            <Col md={6}>
              <Radio
                radioClass={this.getRadioClass()}
                increaseArea="-10%"
                label="Radio"
              />
              <br/>
              <Radio
                radioClass={this.getRadioClass()}
                increaseArea="-10%"
                label="Radio, defaultChecked"
                defaultChecked
              />
              <br/>
              <Radio
                radioClass={this.getRadioClass()}
                increaseArea="-10%"
                label="Radio, disabled"
                disabled
              />
              <br/>
              <Radio
                radioClass={this.getRadioClass()}
                increaseArea="-10%"
                label="Radio, defaultChecked disabled"
                defaultChecked
                disabled
              />
            </Col>
          </Row>
        </Panel>

      </div>
    );
  }
}

export default FuturicoSkin;
