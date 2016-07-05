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

var Checkbox = (function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    _get(Object.getPrototypeOf(Checkbox.prototype), 'constructor', this).call(this, props);
    this.state = {};
  }

  _createClass(Checkbox, [{
    key: 'getValue',
    value: function getValue() {
      return this.refs.enhancedSwitch.getValue();
    }
  }, {
    key: 'setChecked',
    value: function setChecked(newCheckedValue) {
      this.refs.enhancedSwitch.setChecked(newCheckedValue);
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.refs.enhancedSwitch.isChecked();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(_EnhancedSwitch2['default'], _extends({ ref: 'enhancedSwitch' }, this.props, { inputType: 'checkbox' }));
    }
  }]);

  return Checkbox;
})(_react2['default'].Component);

exports['default'] = Checkbox;
module.exports = exports['default'];