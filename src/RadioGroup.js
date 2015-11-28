import React from 'react';
import RadioButton from './Radio';
import warning from 'warning';

class RadioGroup extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    onChange: React.PropTypes.func,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
  };

  static defaultProps = {};

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

    this.setState({numberCheckedRadioButtons: cnt});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('value')) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  componentWillUnmount() {
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
      this.setState({value: newValue});
    } else {
      let message = 'Cannot select a different radio button while another radio button ' +
        'has the \'checked\' property set to true.';
      warning(false, message);
    }
  }

  handleRadioChange(e /* TODO , newValue */) {
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
    let children = React.Children.map(this.props.children, (radio) => {
      let {
        name,
        value,
        label,
        onChange,
        ...other,
        } = radio.props;

      return (
        <RadioButton
          {...other}
          ref={radio.props.value}
          name={this.props.name}
          key={radio.props.value}
          value={radio.props.value}
          label={radio.props.label}
          onChange={this.handleRadioChange.bind(this)}
          checked={radio.props.value === this.state.value}
        />
      );
    }, this);

    return (
      <div className={this.props.className || ''}>
        {children}
      </div>
    );
  }
}

export default RadioGroup;
