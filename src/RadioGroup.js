import React from 'react';
import RadioButton from './Radio';

class RadioGroup extends React.Component {

  static propTypes = {
    /**
     * The name that will be applied to all radio buttons inside it.
     */
    name: React.PropTypes.string.isRequired,

    /**
     * Sets the default radio button to be the one whose
     * value matches defaultValue (case-sensitive).
     * This will override any individual radio button with
     * the defaultChecked or checked property stated.
     */
    defaultValue: React.PropTypes.string,

    /**
     * The value of the currently selected radio button.
     */
    value: React.PropTypes.string,

    /**
     * Callback function that is fired when a radio button has
     * been clicked. Returns the event and the value of the radio
     * button that has been selected.
     */
    onChange: React.PropTypes.func,

    /**
     * Should be used to pass `Radio` components.
     */
    children: React.PropTypes.node,

    /**
     * The css class name of the root element.
     */
    className: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      numberCheckedRadioButtons: 0,
      value: this.props.value || this.props.defaultValue || '',
    };
  }

  componentWillMount() {
    let cnt = 0;

    React.Children.forEach(this.props.children, (option) => {
      if (this.hasCheckAttribute(option)) cnt++;
    }, this);

    this.setState({ numberCheckedRadioButtons: cnt });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('value')) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  getValue() {
    return this.state.value;
  }

  setValue(newValue) {
    this.updateRadioButtons(newValue);
  }

  clearValue() {
    this.setValue('');
  }

  hasCheckAttribute(radioButton) {
    return radioButton.props.hasOwnProperty('checked') && radioButton.props.checked;
  }

  updateRadioButtons(newValue) {
    if (this.state.numberCheckedRadioButtons === 0) {
      this.setState({ value: newValue });
    } else {
      if (process.env.NODE_ENV !== 'production') {
        let message = 'Cannot select a different radio button while another radio button ' +
          'has the \'checked\' property set to true.';
        console.error(message); // eslint-disable-line
      }
    }
  }

  handleChange(e /* TODO , newValue */) {
    let newValue = e.target.value;

    this.updateRadioButtons(newValue);

    // Successful update
    if (this.state.numberCheckedRadioButtons === 0) {
      if (this.props.onChange) {
        this.props.onChange(e, newValue);
      }
    }
  }

  render() {
    let options = React.Children.map(this.props.children, (option) => {
      let {
        name,
        value,
        label,
        onChange,
        ...other,
      } = option.props;

      return (
        <RadioButton
          {...other}
          ref={option.props.value}
          name={this.props.name}
          key={option.props.value}
          value={option.props.value}
          label={option.props.label}
          onChange={this.handleChange.bind(this)}
          checked={option.props.value === this.state.value}
        />
      );
    }, this);

    return (
      <div className={this.props.className}>
        {options}
      </div>
    );
  }
}

export default RadioGroup;
