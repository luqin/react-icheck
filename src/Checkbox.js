import React from 'react';
import ReactDOM from 'react-dom';


class Checkbox extends React.Component {

  static propTypes = {
    checked: React.PropTypes.bool,
    defaultChecked: React.PropTypes.bool,
    onChange: React.PropTypes.func,

    // base class added to customized checkboxes
    checkboxClass: React.PropTypes.string,

    // base class added to customized radio buttons
    radioClass: React.PropTypes.string,

    // class added on checked state (input.checked = true)
    checkedClass: React.PropTypes.string,

    // if not empty, used instead of 'checkedClass' option (input type specific)
    checkedCheckboxClass: React.PropTypes.string,
    checkedRadioClass: React.PropTypes.string,

    // if not empty, added as class name on unchecked state (input.checked = false)
    uncheckedClass: '',

    // if not empty, used instead of 'uncheckedClass' option (input type specific)
    uncheckedCheckboxClass: '',
    uncheckedRadioClass: '',

    // class added on disabled state (input.disabled = true)
    disabledClass: 'disabled',

    // if not empty, used instead of 'disabledClass' option (input type specific)
    disabledCheckboxClass: '',
    disabledRadioClass: '',

    // if not empty, added as class name on enabled state (input.disabled = false)
    enabledClass: '',

    // if not empty, used instead of 'enabledClass' option (input type specific)
    enabledCheckboxClass: '',
    enabledRadioClass: '',

    // class added on indeterminate state (input.indeterminate = true)
    indeterminateClass: 'indeterminate',

    // if not empty, used instead of 'indeterminateClass' option (input type specific)
    indeterminateCheckboxClass: '',
    indeterminateRadioClass: '',

    // if not empty, added as class name on determinate state (input.indeterminate = false)
    determinateClass: '',

    // if not empty, used instead of 'determinateClass' option (input type specific)
    determinateCheckboxClass: '',
    determinateRadioClass: '',

    // class added on hover state (pointer is moved onto input)
    hoverClass: 'hover',

    // class added on focus state (input has gained focus)
    focusClass: 'focus',

    // class added on active state (mouse button is pressed on input)
    activeClass: 'active',

    // adds hoverClass to customized input on label hover and labelHoverClass to label on input hover
    labelHover: true,

    // class added to label if labelHover set to true
    labelHoverClass: 'hover',

    // increase clickable area by given % (negative number to decrease)
    increaseArea: '',

    // true to set 'pointer' CSS cursor over enabled inputs and 'default' over disabled
    cursor: false,

    // set true to inherit original input's class name
    inheritClass: false,

    // if set to true, input's id is prefixed with 'iCheck-' and attached
    inheritID: false,

    // set true to activate ARIA support
    aria: false,

    // add HTML code or text inside customized input
    insert: '',

    children: React.PropTypes.node,
  };

  static defaultProps = {
    checkboxClass: 'icheckbox',

    // base class added to customized radio buttons
    radioClass: 'iradio',

    // class added on checked state (input.checked = true)
    checkedClass: 'checked',

    // if not empty, used instead of 'checkedClass' option (input type specific)
    checkedCheckboxClass: '',
    checkedRadioClass: '',

    // if not empty, added as class name on unchecked state (input.checked = false)
    uncheckedClass: '',

    // if not empty, used instead of 'uncheckedClass' option (input type specific)
    uncheckedCheckboxClass: '',
    uncheckedRadioClass: '',

    // class added on disabled state (input.disabled = true)
    disabledClass: 'disabled',

    // if not empty, used instead of 'disabledClass' option (input type specific)
    disabledCheckboxClass: '',
    disabledRadioClass: '',

    // if not empty, added as class name on enabled state (input.disabled = false)
    enabledClass: '',

    // if not empty, used instead of 'enabledClass' option (input type specific)
    enabledCheckboxClass: '',
    enabledRadioClass: '',

    // class added on indeterminate state (input.indeterminate = true)
    indeterminateClass: 'indeterminate',

    // if not empty, used instead of 'indeterminateClass' option (input type specific)
    indeterminateCheckboxClass: '',
    indeterminateRadioClass: '',

    // if not empty, added as class name on determinate state (input.indeterminate = false)
    determinateClass: '',

    // if not empty, used instead of 'determinateClass' option (input type specific)
    determinateCheckboxClass: '',
    determinateRadioClass: '',

    // class added on hover state (pointer is moved onto input)
    hoverClass: 'hover',

    // class added on focus state (input has gained focus)
    focusClass: 'focus',

    // class added on active state (mouse button is pressed on input)
    activeClass: 'active',

    // adds hoverClass to customized input on label hover and labelHoverClass to label on input hover
    labelHover: true,

    // class added to label if labelHover set to true
    labelHoverClass: 'hover',

    // increase clickable area by given % (negative number to decrease)
    increaseArea: '',

    // true to set 'pointer' CSS cursor over enabled inputs and 'default' over disabled
    cursor: false,

    // set true to inherit original input's class name
    inheritClass: false,

    // if set to true, input's id is prefixed with 'iCheck-' and attached
    inheritID: false,

    // set true to activate ARIA support
    aria: false,

    // add HTML code or text inside customized input
    insert: '',
  };

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
      <input type="checkbox"/>
    );
  }
}

export default Checkbox;
