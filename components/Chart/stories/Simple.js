"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BarChart = function BarChart() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Chart, {
    type: "bar",
    values: [[10, 20], [20, 30], [30, 15]]
  })));
};

var LineChart = function LineChart() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Chart, {
    type: "line",
    values: [20, 30, 15]
  })));
};

var AreaChart = function AreaChart() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Chart, {
    type: "area",
    values: [{
      value: [10, 20]
    }, {
      value: [20, 30]
    }, {
      value: [30, 15]
    }]
  })));
};

var PointChart = function PointChart() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Chart, {
    type: "point",
    values: [[10, 20], [20, 30], [30, 15]]
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Chart, {
    type: "point",
    values: [[10, 20], [20, 30], [30, 15]],
    round: true
  })));
};

(0, _react2.storiesOf)('Chart', module).add('Bar', function () {
  return /*#__PURE__*/_react["default"].createElement(BarChart, null);
}).add('Line', function () {
  return /*#__PURE__*/_react["default"].createElement(LineChart, null);
}).add('Area', function () {
  return /*#__PURE__*/_react["default"].createElement(AreaChart, null);
}).add('Point', function () {
  return /*#__PURE__*/_react["default"].createElement(PointChart, null);
});