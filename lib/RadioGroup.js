'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

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

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var RadioGroup = (function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  _createClass(RadioGroup, null, [{
    key: 'propTypes',
    value: {
      /**
       * The name that will be applied to all radio buttons inside it.
       */
      name: _propTypes2['default'].string.isRequired,

      /**
       * Sets the default radio button to be the one whose
       * value matches defaultValue (case-sensitive).
       * This will override any individual radio button with
       * the defaultChecked or checked property stated.
       */
      defaultValue: _propTypes2['default'].string,

      /**
       * The value of the currently selected radio button.
       */
      value: _propTypes2['default'].string,

      /**
       * Callback function that is fired when a radio button has
       * been clicked. Returns the event and the value of the radio
       * button that has been selected.
       */
      onChange: _propTypes2['default'].func,

      /**
       * Should be used to pass `Radio` components.
       */
      children: _propTypes2['default'].node,

      /**
       * The css class name of the root element.
       */
      className: _propTypes2['default'].string
    },
    enumerable: true
  }]);

  function RadioGroup(props) {
    _classCallCheck(this, RadioGroup);

    _get(Object.getPrototypeOf(RadioGroup.prototype), 'constructor', this).call(this, props);
    this.state = {
      numberCheckedRadioButtons: 0,
      value: this.props.value || this.props.defaultValue || ''
    };
  }

  _createClass(RadioGroup, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this = this;

      var cnt = 0;

      _react2['default'].Children.forEach(this.props.children, function (option) {
        if (_this.hasCheckAttribute(option)) cnt++;
      }, this);

      this.setState({ numberCheckedRadioButtons: cnt });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hasOwnProperty('value')) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      this.updateRadioButtons(newValue);
    }
  }, {
    key: 'clearValue',
    value: function clearValue() {
      this.setValue('');
    }
  }, {
    key: 'hasCheckAttribute',
    value: function hasCheckAttribute(radioButton) {
      return radioButton.props.hasOwnProperty('checked') && radioButton.props.checked;
    }
  }, {
    key: 'updateRadioButtons',
    value: function updateRadioButtons(newValue) {
      if (this.state.numberCheckedRadioButtons === 0) {
        this.setState({ value: newValue });
      } else {
        if (process.env.NODE_ENV !== 'production') {
          var message = 'Cannot select a different radio button while another radio button ' + 'has the \'checked\' property set to true.';
          console.error(message); // eslint-disable-line
        }
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e /* TODO , newValue */) {
      var newValue = e.target.value;

      this.updateRadioButtons(newValue);

      // Successful update
      if (this.state.numberCheckedRadioButtons === 0) {
        if (this.props.onChange) {
          this.props.onChange(e, newValue);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var options = _react2['default'].Children.map(this.props.children, function (option) {
        var _option$props = option.props;
        var name = _option$props.name;
        var value = _option$props.value;
        var label = _option$props.label;
        var onChange = _option$props.onChange;

        var other = _objectWithoutProperties(_option$props, ['name', 'value', 'label', 'onChange']);

        return _react2['default'].createElement(_Radio2['default'], _extends({}, other, {
          ref: option.props.value,
          name: _this2.props.name,
          key: option.props.value,
          value: option.props.value,
          label: option.props.label,
          onChange: _this2.handleChange.bind(_this2),
          checked: option.props.value === _this2.state.value
        }));
      }, this);

      return _react2['default'].createElement(
        'div',
        { className: this.props.className },
        options
      );
    }
  }]);

  return RadioGroup;
})(_react2['default'].Component);

exports['default'] = RadioGroup;
module.exports = exports['default'];