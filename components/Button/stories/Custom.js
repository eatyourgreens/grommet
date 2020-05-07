"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var customTheme = {
  global: {
    font: {
      family: 'Arial'
    }
  },
  button: {
    border: {
      radius: undefined,
      color: '#2196f3'
    },
    disabled: {
      color: 'orange',
      border: {
        color: 'orange'
      },
      extend: "border: 10px dashed red;"
    },
    padding: {
      vertical: '12px',
      horizontal: '24px'
    },
    primary: {
      color: '#2196f3',
      active: {
        border: {
          color: 'red'
        },
        extend: "background: cadetblue;"
      },
      extend: "background: skyblue; border: 5px dotted green;"
    },
    extend: function extend(props) {
      var extraStyles = '';

      if (props.primary) {
        extraStyles = "\n            text-transform: uppercase;\n          ";
      }

      return "\n          font-size: 12px;\n          font-weight: bold;\n          " + extraStyles + "\n        ";
    }
  }
};
var coloredButton = {
  button: {
    border: {
      color: 'accent-1'
    },
    color: {
      dark: 'accent-1',
      light: 'dark-2'
    },
    primary: {
      color: 'neutral-2'
    }
  }
};

var CustomTheme = function CustomTheme() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: customTheme
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    justify: "center",
    pad: "large",
    direction: "row",
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    label: "custom theme",
    onClick: function onClick() {},
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    label: "custom active primary",
    onClick: function onClick() {},
    primary: true,
    active: true
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    label: "primary disabled",
    onClick: function onClick() {},
    primary: true,
    disabled: true
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    label: "Disabled",
    onClick: function onClick() {},
    disabled: true
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    label: "Plain Disabled",
    onClick: function onClick() {},
    plain: true,
    disabled: true
  }))), /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: coloredButton
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    as: "span",
    label: "theme on dark background",
    primary: true
  }))), /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: _grommet.grommet
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    as: "span",
    label: "Custom as=span"
  }))));
};

(0, _react2.storiesOf)('Button', module).add('Custom', function () {
  return /*#__PURE__*/_react["default"].createElement(CustomTheme, null);
});