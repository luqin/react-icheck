'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EnhancedSwitch = require('./EnhancedSwitch');

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

var Radio = (function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio() {
    _classCallCheck(this, Radio);

    _get(Object.getPrototypeOf(Radio.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Radio, [{
    key: 'getValue',
    value: function getValue() {
      return this.refs.enhancedSwitch.getValue();
    }
  }, {
    key: 'setChecked',
    value: function setChecked(newCheckedValue) {
      this.refs.enhancedSwitch.setSwitched(newCheckedValue);
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.refs.enhancedSwitch.isSwitched();
    }
  }, {
    key: 'render',
    value: function render() {
      var enhancedSwitchProps = {
        ref: 'enhancedSwitch',
        inputType: 'radio'
      };

      // labelClassName
      return _react2['default'].createElement(_EnhancedSwitch2['default'], _extends({}, this.props, enhancedSwitchProps));
    }
  }]);

  return Radio;
})(_react2['default'].Component);

exports['default'] = Radio;
module.exports = exports['default'];