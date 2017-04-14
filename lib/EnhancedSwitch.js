'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _defineProperty = require('babel-runtime/helpers/define-property')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _iCheck = 'iCheck';
var _iCheckHelper = _iCheck + '-helper';

var EnhancedSwitch = (function (_React$Component) {
  _inherits(EnhancedSwitch, _React$Component);

  _createClass(EnhancedSwitch, null, [{
    key: 'propTypes',
    value: {
      inputType: _propTypes2['default'].string.isRequired,

      checked: _propTypes2['default'].bool,
      defaultChecked: _propTypes2['default'].bool,

      label: _propTypes2['default'].node,

      disabled: _propTypes2['default'].bool,

      indeterminate: _propTypes2['default'].bool,

      onChange: _propTypes2['default'].func,
      onBlur: _propTypes2['default'].func,
      onFocus: _propTypes2['default'].func,

      // base class added to customized checkboxes
      checkboxClass: _propTypes2['default'].string,

      // base class added to customized radio buttons
      radioClass: _propTypes2['default'].string,

      // class added on checked state (input.checked = true)
      checkedClass: _propTypes2['default'].string,

      // if not empty, used instead of 'checkedClass' option (input type specific)
      checkedCheckboxClass: _propTypes2['default'].string,
      checkedRadioClass: _propTypes2['default'].string,

      // if not empty, added as class name on unchecked state (input.checked = false)
      uncheckedClass: _propTypes2['default'].string,

      // if not empty, used instead of 'uncheckedClass' option (input type specific)
      uncheckedCheckboxClass: _propTypes2['default'].string,
      uncheckedRadioClass: _propTypes2['default'].string,

      // class added on disabled state (input.disabled = true)
      disabledClass: _propTypes2['default'].string,

      // if not empty, used instead of 'disabledClass' option (input type specific)
      disabledCheckboxClass: _propTypes2['default'].string,
      disabledRadioClass: _propTypes2['default'].string,

      // if not empty, added as class name on enabled state (input.disabled = false)
      enabledClass: _propTypes2['default'].string,

      // if not empty, used instead of 'enabledClass' option (input type specific)
      enabledCheckboxClass: _propTypes2['default'].string,
      enabledRadioClass: _propTypes2['default'].string,

      // class added on indeterminate state (input.indeterminate = true)
      indeterminateClass: _propTypes2['default'].string,

      // if not empty, used instead of 'indeterminateClass' option (input type specific)
      indeterminateCheckboxClass: _propTypes2['default'].string,
      indeterminateRadioClass: _propTypes2['default'].string,

      // if not empty, added as class name on determinate state (input.indeterminate = false)
      determinateClass: _propTypes2['default'].string,

      // if not empty, used instead of 'determinateClass' option (input type specific)
      determinateCheckboxClass: _propTypes2['default'].string,
      determinateRadioClass: _propTypes2['default'].string,

      // class added on hover state (pointer is moved onto input)
      hoverClass: _propTypes2['default'].string,

      // class added on focus state (input has gained focus)
      focusClass: _propTypes2['default'].string,

      // class added on active state (mouse button is pressed on input)
      activeClass: _propTypes2['default'].string,

      // adds hoverClass to customized input on label hover and labelHoverClass to label on input hover
      labelHover: _propTypes2['default'].bool,

      // class added to label if labelHover set to true
      labelHoverClass: _propTypes2['default'].string,

      // increase clickable area by given % (negative number to decrease)
      increaseArea: _propTypes2['default'].string,

      // true to set 'pointer' CSS cursor over enabled inputs and 'default' over disabled
      cursor: _propTypes2['default'].bool,

      // set true to inherit original input's class name
      inheritClass: _propTypes2['default'].bool,

      // if set to true, input's id is prefixed with 'iCheck-' and attached
      inheritID: _propTypes2['default'].bool,

      // set true to activate ARIA support
      aria: _propTypes2['default'].bool,

      // add HTML code or text inside customized input
      insert: _propTypes2['default'].node,

      children: _propTypes2['default'].node,

      // class added for outer label
      labelClassName: _propTypes2['default'].string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {

      checkboxClass: 'icheckbox',

      // base class added to customized radio buttons
      radioClass: 'iradio',

      // class added on checked state (input.checked = true)
      checkedClass: 'checked',

      // class added on disabled state (input.disabled = true)
      disabledClass: 'disabled',

      // class added on indeterminate state (input.indeterminate = true)
      indeterminateClass: 'indeterminate',

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
      aria: false
    },
    enumerable: true
  }]);

  function EnhancedSwitch(props) {
    _classCallCheck(this, EnhancedSwitch);

    _get(Object.getPrototypeOf(EnhancedSwitch.prototype), 'constructor', this).call(this, props);
    var checked = false;
    if ('checked' in props) {
      checked = props.checked;
    } else {
      checked = props.defaultChecked;
    }
    // Assume we aren't on a mobile for server-side-rendering
    this._mobile = false;
    this.state = {
      checked: checked,
      focused: false,
      hovered: false,
      active: false
    };
  }

  _createClass(EnhancedSwitch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof navigator !== 'undefined') {
        this._mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
      }
      this.adjustStyle();
      this.setIndeterminate();
      this.forceUpdate();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.adjustStyle();
      this.setIndeterminate();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.checkbox.value;
    }
  }, {
    key: 'setChecked',
    value: function setChecked(newCheckedValue) {
      if (!this.props.hasOwnProperty('checked') || this.props.checked === false) {
        // TODO: this.props.onParentShouldUpdate(newSwitchedValue);
        this.refs.checkbox.checked = newCheckedValue;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          var message = 'Cannot call set method while checked is defined as a property.';
          console.error(message); // eslint-disable-line
        }
      }
    }
  }, {
    key: 'setIndeterminate',
    value: function setIndeterminate() {
      if (this.props.indeterminate) {
        this.refs.checkbox.indeterminate = true;
      }
    }
  }, {
    key: 'adjustStyle',
    value: function adjustStyle() {
      var inputContainer = this.refs.inputContainer;

      var _window$getComputedStyle = window.getComputedStyle(inputContainer);

      var position = _window$getComputedStyle.position;

      if (position === 'static') {
        inputContainer.style.position = 'relative';
      }
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.refs.checkbox.checked;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var checked = e.target.checked;
      if (!('checked' in this.props)) {
        this.setState({
          checked: checked
        });
      }

      if (this.props.onChange) {
        this.props.onChange(e, checked);
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      this.setState({
        focused: false
      });

      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      this.setState({
        focused: true
      });

      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'handleHelperClick',
    value: function handleHelperClick(event) {
      if (this.props.label) {
        return;
      }

      if (this.props.disabled) {
        return;
      }

      var newChecked = !this.refs.checkbox.checked;

      if (!('checked' in this.props)) {
        this.refs.checkbox.checked = newChecked;
        this.setState({
          checked: newChecked
        });
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.props.onChange) {
        // make sure <ins /> element is not target
        event.target = this.refs.checkbox;
        this.props.onChange(event, newChecked);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var props = this.props;
      var disabled = props.disabled;
      var type = props.type;
      var name = props.name;
      var value = props.value;
      var label = props.label;
      var onBlur = props.onBlur;
      var onFocus = props.onFocus;
      var onMouseUp = props.onMouseUp;
      var onMouseDown = props.onMouseDown;
      var onMouseLeave = props.onMouseLeave;
      var onTouchStart = props.onTouchStart;
      var onTouchEnd = props.onTouchEnd;
      var className = props.className;
      var checkboxClass = props.checkboxClass;
      var increaseArea = props.increaseArea;
      var inputType = props.inputType;
      var radioClass = props.radioClass;
      var checkedClass = props.checkedClass;
      var disabledClass = props.disabledClass;
      var indeterminate = props.indeterminate;
      var indeterminateClass = props.indeterminateClass;
      var hoverClass = props.hoverClass;
      var focusClass = props.focusClass;
      var activeClass = props.activeClass;
      var labelHover = props.labelHover;
      var labelHoverClass = props.labelHoverClass;
      var labelClassName = props.labelClassName;
      var inheritClass = props.inheritClass;
      var inheritID = props.inheritID;
      var aria = props.aria;
      var insert = props.insert;

      var other = _objectWithoutProperties(props, ['type', 'name', 'value', 'label', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'className', 'checkboxClass', 'increaseArea', 'inputType', 'radioClass', 'checkedClass', 'disabledClass', 'indeterminate', 'indeterminateClass', 'hoverClass', 'focusClass', 'activeClass', 'labelHover', 'labelHoverClass', 'labelClassName', 'inheritClass', 'inheritID', 'aria', 'insert']);

      var checked = this.state.checked;

      // Setup clickable area
      var area = ('' + props.increaseArea).replace('%', '') | 0;

      // Clickable area limit
      if (area < -50) {
        area = -50;
      }

      var id = props.id;

      // Layer styles
      var offset = -area + '%';
      var size = 100 + area * 2 + '%';
      var layer = {
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
        cursor: disabled ? 'default' : 'pointer'
      };

      // Choose how to hide input
      var hide = undefined;
      if (this._mobile) {
        hide = {
          position: 'absolute',
          visibility: 'hidden'
        };
      } else if (area) {
        hide = layer;
      } else {
        hide = {
          position: 'absolute',
          opacity: 0
        };
      }

      // Check ARIA option
      aria = !!props.aria;

      // TODO: Set ARIA placeholder
      // let ariaID = _iCheck + '-' + Math.random().toString(36).substr(2, 6);

      var helper = undefined;
      if (props.inputType === 'checkbox' && typeof props.indeterminateCheckboxClass !== 'undefined') {
        indeterminateClass = props.indeterminateCheckboxClass;
      } else if (props.inputType === 'radio' && typeof props.indeterminateRadioClass !== 'undefined') {
        indeterminateClass = props.indeterminateRadioClass;
      }

      var wrapProps = {
        className: (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, props.checkboxClass, props.inputType === 'checkbox'), _defineProperty(_classnames, props.radioClass, props.inputType === 'radio'), _defineProperty(_classnames, indeterminateClass, indeterminate), _defineProperty(_classnames, props.checkedClass, checked), _defineProperty(_classnames, props.disabledClass, disabled), _defineProperty(_classnames, props.hoverClass, this.state.hovered), _defineProperty(_classnames, props.focusClass, this.state.focused), _defineProperty(_classnames, props.activeClass, this.state.active), _classnames))
      };

      if (aria) {
        wrapProps.role = props.inputType;
        // Set ARIA "labelledby"
        wrapProps['aria-labelledby'] = '';
      }

      if (props.inheritClass) {
        wrapProps.className = (0, _classnames3['default'])(wrapProps.className, props.className);
      }

      if (props.inheritID && id) {
        wrapProps.id = _iCheck + '-' + id;
      }

      // Layer addition
      helper = _react2['default'].createElement('ins', {
        className: _iCheckHelper,
        style: layer,
        onClick: this.handleHelperClick.bind(this)
      });

      var inputElement = _react2['default'].createElement('input', _extends({}, other, {

        ref: 'checkbox',
        type: props.inputType,
        style: hide,
        name: name,
        value: value,
        defaultChecked: props.defaultChecked,
        onChange: this.handleChange.bind(this),
        onBlur: this.handleBlur.bind(this),
        onFocus: this.handleFocus.bind(this)
      }));

      var insertElement = props.insert;
      if (insertElement && !_react2['default'].isValidElement(insertElement)) {
        insertElement = _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: insertElement } });
      }

      var inputContainer = _react2['default'].createElement(
        'div',
        _extends({ ref: 'inputContainer' }, wrapProps),
        inputElement,
        insertElement,
        helper
      );

      var labelElement = props.label;
      if (!labelElement) {
        return inputContainer;
      }
      if (!_react2['default'].isValidElement(labelElement)) {
        labelElement = _react2['default'].createElement('span', { dangerouslySetInnerHTML: { __html: labelElement } });
      }

      // Label events
      function handleLabelEvent(event) {
        // Do nothing if input is disabled
        if (disabled) {
          return;
        }

        var etype = event.type;

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
              hovered: !/ut|nd/.test(etype)
            });
          }

        if (this._mobile) {
          event.stopPropagation();
        }
        // return false;
      }

      var labelProps = {
        // onClick: handleLabelEvent.bind(this),
        onMouseOver: handleLabelEvent.bind(this),
        onMouseOut: handleLabelEvent.bind(this),
        onTouchStart: handleLabelEvent.bind(this),
        onTouchEnd: handleLabelEvent.bind(this)
      };

      // add className prop for outer label
      if (labelClassName) {
        labelProps.className = labelClassName;
      }

      return _react2['default'].createElement(
        'label',
        labelProps,
        inputContainer,
        labelElement
      );
    }
  }]);

  return EnhancedSwitch;
})(_react2['default'].Component);

exports['default'] = EnhancedSwitch;
module.exports = exports['default'];