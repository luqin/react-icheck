import React from 'react';

import EnhancedSwitch from './EnhancedSwitch';

class Radio extends React.Component {

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
    let enhancedSwitchProps = {
      ref: 'enhancedSwitch',
      inputType: 'radio',
      // labelClassName
    };

    return (
      <EnhancedSwitch {...this.props} {...enhancedSwitchProps}/>
    );
  }
}

export default Radio;
