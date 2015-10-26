import React from 'react';
// import ReactDOM from 'react-dom';
import classnames from 'classnames';

const _iCheck = 'iCheck';
const _iCheckHelper = _iCheck + '-helper';
const _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);

class EnhancedSwitch extends React.Component {

  static propTypes = {
    inputType: React.PropTypes.string.isRequired,

    checked: React.PropTypes.bool,
    defaultChecked: React.PropTypes.bool,

    label: React.PropTypes.node,

    disabled: React.PropTypes.bool,

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
    uncheckedClass: React.PropTypes.string,

    // if not empty, used instead of 'uncheckedClass' option (input type specific)
    uncheckedCheckboxClass: React.PropTypes.string,
    uncheckedRadioClass: React.PropTypes.string,

    // class added on disabled state (input.disabled = true)
    disabledClass: React.PropTypes.string,

    // if not empty, used instead of 'disabledClass' option (input type specific)
    disabledCheckboxClass: React.PropTypes.string,
    disabledRadioClass: React.PropTypes.string,

    // if not empty, added as class name on enabled state (input.disabled = false)
    enabledClass: React.PropTypes.string,

    // if not empty, used instead of 'enabledClass' option (input type specific)
    enabledCheckboxClass: React.PropTypes.string,
    enabledRadioClass: React.PropTypes.string,

    // class added on indeterminate state (input.indeterminate = true)
    indeterminateClass: React.PropTypes.string,

    // if not empty, used instead of 'indeterminateClass' option (input type specific)
    indeterminateCheckboxClass: React.PropTypes.string,
    indeterminateRadioClass: React.PropTypes.string,

    // if not empty, added as class name on determinate state (input.indeterminate = false)
    determinateClass: React.PropTypes.string,

    // if not empty, used instead of 'determinateClass' option (input type specific)
    determinateCheckboxClass: React.PropTypes.string,
    determinateRadioClass: React.PropTypes.string,

    // class added on hover state (pointer is moved onto input)
    hoverClass: React.PropTypes.string,

    // class added on focus state (input has gained focus)
    focusClass: React.PropTypes.string,

    // class added on active state (mouse button is pressed on input)
    activeClass: React.PropTypes.string,

    // adds hoverClass to customized input on label hover and labelHoverClass to label on input hover
    labelHover: React.PropTypes.bool,

    // class added to label if labelHover set to true
    labelHoverClass: React.PropTypes.string,

    // increase clickable area by given % (negative number to decrease)
    increaseArea: React.PropTypes.string,

    // true to set 'pointer' CSS cursor over enabled inputs and 'default' over disabled
    cursor: React.PropTypes.bool,

    // set true to inherit original input's class name
    inheritClass: React.PropTypes.bool,

    // if set to true, input's id is prefixed with 'iCheck-' and attached
    inheritID: React.PropTypes.bool,

    // set true to activate ARIA support
    aria: React.PropTypes.bool,

    // add HTML code or text inside customized input
    insert: React.PropTypes.node,

    children: React.PropTypes.node,
  };

  static defaultProps = {
    defaultChecked: false,

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
    let checked = false;
    if ('checked' in props) {
      checked = props.checked;
    } else {
      checked = props.defaultChecked;
    }
    this.state = {
      checked,
      focused: false,
      hovered: false,
      active: false,
    };
  }

  componentDidMount() {
    this.adjustStyle();
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }

  componentDidUpdate() {
    this.adjustStyle();
  }

  componentWillUnmount() {
  }

  setChecked(newCheckedValue) {

  }

  isChecked() {
    return this.refs.checkbox.checked;
  }

  adjustStyle() {
    const {inputContainer} = this.refs;
    if (inputContainer.style.position === 'static') {
      inputContainer.style.position = 'relative';
    }
  }

  handleChange(e) {
    const checked = e.target.checked;
    if (!('checked' in this.props)) {
      this.setState({
        checked: checked,
      });
    }
    if (this.props.onChange) {
      this.props.onChange(e, checked);
    }
  }

  handleBlur(e) {
    this.setState({
      focused: false,
    });

    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  handleFocus(e) {
    this.setState({
      focused: true,
    });

    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  handleHelperClick(event) {
    if (this.props.disabled) {
      return;
    }

    // let type = event.type;

    let checked = !this.refs.checkbox.checked;

    if (!('checked' in this.props)) {
      this.setState({
        checked: checked,
      });
    }

    if (this.props.onChange && !this.props.label) {
      // this.props.onChange(event, checked);
    }
  }

  render() {
    let props = this.props;
    let {disabled} = props;
    let {
      type,
      name,
      value,
      label,
      onBlur,
      onFocus,
      onMouseUp,
      onMouseDown,
      onMouseLeave,
      onTouchStart,
      onTouchEnd,
      className,
      ...other,
      } = props;

    let {checked} = this.state;

    // Setup clickable area
    let area = ('' + props.increaseArea).replace('%', '') | 0;

    // Clickable area limit
    if (area < -50) {
      area = -50;
    }

    let id = props.id;

    // Layer styles
    let offset = -area + '%';
    let size = 100 + (area * 2) + '%';
    let layer = {
      position: 'absolute',
      top: offset,
      left: offset,
      display: 'block',
      width: size,
      height: size,
      margin: 0,
      padding: 0,
      background: '#fff',
      border: 0,
      opacity: 0,
      cursor: disabled ? 'default' : 'pointer',
    };

    // Choose how to hide input
    let hide = _mobile ? {
      position: 'absolute',
      visibility: 'hidden',
    } : area ? layer : {
      position: 'absolute',
      opacity: 0,
    };

    // Check ARIA option
    let aria = !!props.aria;

    // Set ARIA placeholder
    let ariaID = _iCheck + '-' + Math.random().toString(36).substr(2, 6);

    let helper;

    const wrapProps = {
      className: classnames({
        [props.checkboxClass]: props.inputType === 'checkbox',
        [props.radioClass]: props.inputType === 'radio',
        [props.checkedClass]: checked,
        [props.disabledClass]: disabled,
        [props.hoverClass]: this.state.hovered,
        [props.focusClass]: this.state.focused,
        [props.activeClass]: this.state.active,
      }),
    };

    if (aria) {
      wrapProps.role = props.inputType;
      // Set ARIA "labelledby"
      wrapProps['aria-labelledby'] = '';
    }

    if (props.inheritClass) {
      wrapProps.className = classnames(wrapProps.className, props.className);
    }

    if (props.inheritID && id) {
      wrapProps.id = _iCheck + '-' + id;
    }

    const helperProps = {
      className: _iCheckHelper,
      style: layer,
      onClick: this.handleHelperClick.bind(this),
    };

    // Layer addition
    helper = <ins {...helperProps}/>;

    const inputProps = {
      ref: 'checkbox',
      type: props.inputType,
      style: hide,
      name: name,
      value: value,
      defaultChecked: props.defaultChecked,
      // checked: !!checked,
      onChange: this.handleChange.bind(this),
      onBlur: this.handleBlur.bind(this),
      onFocus: this.handleFocus.bind(this),
    };

    const inputElement = (
      <input
        {...other}
        {...inputProps}
      />
    );

    let insertElement = props.insert;
    if (!React.isValidElement(insertElement)) {
      insertElement = <div dangerouslySetInnerHTML={{__html: insertElement}}></div>;
    }

    const inputContainer = (
      <div ref="inputContainer" {...wrapProps}>
        {inputElement}
        {insertElement}
        {helper}
      </div>
    );

    let labelElement = props.label;
    if (!labelElement) {
      return inputContainer;
    }
    if (!React.isValidElement(labelElement)) {
      labelElement = <span dangerouslySetInnerHTML={{__html: labelElement}}></span>;
    }

    // Label events
    function handleLabelEvent(event) {
      // Do nothing if input is disabled
      if (disabled) {
        return;
      }

      const etype = event.type;

      // Click
      if (etype === 'click') {
        // FIXME
        // if ($(event.target).is('a')) {
        //  return;
        // }
        // Hover state
      } else if (props.labelHover) {
        // mouseout|touchend false
        this.setState({
          hovered: !/ut|nd/.test(etype),
        });
      }

      if (_mobile) {
        event.stopPropagation();
      }
      // return false;
    }

    const labelProps = {
      // onClick: handleLabelEvent.bind(this),
      onMouseOver: handleLabelEvent.bind(this),
      onMouseOut: handleLabelEvent.bind(this),
      onTouchStart: handleLabelEvent.bind(this),
      onTouchEnd: handleLabelEvent.bind(this),
    };

    return (
      <label {...labelProps}>
        {inputContainer}
        {labelElement}
      </label>
    );
  }
}

export default EnhancedSwitch;
