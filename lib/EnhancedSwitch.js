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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _iCheck = 'iCheck';
var _iCheckHelper = _iCheck + '-helper';
var _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);

var EnhancedSwitch = (function (_React$Component) {
  _inherits(EnhancedSwitch, _React$Component);

  _createClass(EnhancedSwitch, null, [{
    key: 'propTypes',
    value: {
      inputType: _react2['default'].PropTypes.string.isRequired,

      checked: _react2['default'].PropTypes.bool,
      defaultChecked: _react2['default'].PropTypes.bool,

      label: _react2['default'].PropTypes.node,

      disabled: _react2['default'].PropTypes.bool,

      onChange: _react2['default'].PropTypes.func,
      onBlur: _react2['default'].PropTypes.func,
      onFocus: _react2['default'].PropTypes.func,

      // base class added to customized checkboxes
      checkboxClass: _react2['default'].PropTypes.string,

      // base class added to customized radio buttons
      radioClass: _react2['default'].PropTypes.string,

      // class added on checked state (input.checked = true)
      checkedClass: _react2['default'].PropTypes.string,

      // if not empty, used instead of 'checkedClass' option (input type specific)
      checkedCheckboxClass: _react2['default'].PropTypes.string,
      checkedRadioClass: _react2['default'].PropTypes.string,

      // if not empty, added as class name on unchecked state (input.checked = false)
      uncheckedClass: _react2['default'].PropTypes.string,

      // if not empty, used instead of 'uncheckedClass' option (input type specific)
      uncheckedCheckboxClass: _react2['default'].PropTypes.string,
      uncheckedRadioClass: _react2['default'].PropTypes.string,

      // class added on disabled state (input.disabled = true)
      disabledClass: _react2['default'].PropTypes.string,

      // if not empty, used instead of 'disabledClass' option (input type specific)
      disabledCheckboxClass: _react2['default'].PropTypes.string,
      disabledRadioClass: _react2['default'].PropTypes.string,

      // if not empty, added as class name on enabled state (input.disabled = false)
      enabledClass: _react2['default'].PropTypes.string,

      // if not empty, used instead of 'enabledClass' option (input type specific)
      enabledCheckboxClass: _react2['default'].PropTypes.string,
      enabledRadioClass: _react2['default'].PropTypes.string,

      // class added on indeterminate state (input.indeterminate = true)
      indeterminateClass: _react2['default'].PropTypes.string,

      // if not empty, used instead of 'indeterminateClass' option (input type specific)
      indeterminateCheckboxClass: _react2['default'].PropTypes.string,
      indeterminateRadioClass: _react2['default'].PropTypes.string,

      // if not empty, added as class name on determinate state (input.indeterminate = false)
      determinateClass: _react2['default'].PropTypes.string,

      // if not empty, used instead of 'determinateClass' option (input type specific)
      determinateCheckboxClass: _react2['default'].PropTypes.string,
      determinateRadioClass: _react2['default'].PropTypes.string,

      // class added on hover state (pointer is moved onto input)
      hoverClass: _react2['default'].PropTypes.string,

      // class added on focus state (input has gained focus)
      focusClass: _react2['default'].PropTypes.string,

      // class added on active state (mouse button is pressed on input)
      activeClass: _react2['default'].PropTypes.string,

      // adds hoverClass to customized input on label hover and labelHoverClass to label on input hover
      labelHover: _react2['default'].PropTypes.bool,

      // class added to label if labelHover set to true
      labelHoverClass: _react2['default'].PropTypes.string,

      // increase clickable area by given % (negative number to decrease)
      increaseArea: _react2['default'].PropTypes.string,

      // true to set 'pointer' CSS cursor over enabled inputs and 'default' over disabled
      cursor: _react2['default'].PropTypes.bool,

      // set true to inherit original input's class name
      inheritClass: _react2['default'].PropTypes.bool,

      // if set to true, input's id is prefixed with 'iCheck-' and attached
      inheritID: _react2['default'].PropTypes.bool,

      // set true to activate ARIA support
      aria: _react2['default'].PropTypes.bool,

      // add HTML code or text inside customized input
      insert: _react2['default'].PropTypes.node,

      children: _react2['default'].PropTypes.node
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      defaultChecked: false,

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
      this.adjustStyle();
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
    key: 'isChecked',
    value: function isChecked() {
      return this.refs.checkbox.checked;
    }
  }, {
    key: 'adjustStyle',
    value: function adjustStyle() {
      var inputContainer = this.refs.inputContainer;

      if (inputContainer.style.position === 'static') {
        inputContainer.style.position = 'relative';
      }
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

      // let type = event.type;

      var newChecked = !this.refs.checkbox.checked;

      if (!('checked' in this.props)) {
        this.refs.checkbox.checked = newChecked;
        this.setState({
          checked: newChecked
        });
      }

      if (this.props.onChange && !this.props.label) {
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

      var other = _objectWithoutProperties(props, ['type', 'name', 'value', 'label', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'className']);

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
      if (_mobile) {
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
      var aria = !!props.aria;

      // TODO: Set ARIA placeholder
      // let ariaID = _iCheck + '-' + Math.random().toString(36).substr(2, 6);

      var helper = undefined;

      var wrapProps = {
        className: (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, props.checkboxClass, props.inputType === 'checkbox'), _defineProperty(_classnames, props.radioClass, props.inputType === 'radio'), _defineProperty(_classnames, props.checkedClass, checked), _defineProperty(_classnames, props.disabledClass, disabled), _defineProperty(_classnames, props.hoverClass, this.state.hovered), _defineProperty(_classnames, props.focusClass, this.state.focused), _defineProperty(_classnames, props.activeClass, this.state.active), _classnames))
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

      var helperProps = {
        className: _iCheckHelper,
        style: layer,
        onClick: this.handleHelperClick.bind(this)
      };

      // Layer addition
      helper = _react2['default'].createElement('ins', helperProps);

      var inputProps = {
        ref: 'checkbox',
        type: props.inputType,
        style: hide,
        name: name,
        value: value,
        defaultChecked: props.defaultChecked,
        // checked: !!checked,
        onChange: this.handleChange.bind(this),
        onBlur: this.handleBlur.bind(this),
        onFocus: this.handleFocus.bind(this)
      };

      var inputElement = _react2['default'].createElement('input', _extends({}, other, inputProps));

      var insertElement = props.insert || undefined;
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

        if (_mobile) {
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