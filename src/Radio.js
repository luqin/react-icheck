import React from 'react';

import EnhancedSwitch from './EnhancedSwitch';

class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (
      <EnhancedSwitch {...this.props} inputType="radio"/>
    );
  }
}

export default Checkbox;
