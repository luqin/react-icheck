import React from 'react';

import EnhancedSwitch from './EnhancedSwitch';

class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getValue() {
    return this.refs.enhancedSwitch.getValue();
  }

  setChecked(newCheckedValue) {
    this.refs.enhancedSwitch.setSwitched(newCheckedValue);
  }

  isChecked() {
    return this.refs.enhancedSwitch.isSwitched();
  }

  render() {
    return (
      <EnhancedSwitch ref="enhancedSwitch" {...this.props} inputType="checkbox"/>
    );
  }
}

export default Checkbox;
