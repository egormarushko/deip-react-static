(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.m = exports.container = undefined;

var _styledComponents = __webpack_require__(1);

var _styledMediaQuery = __webpack_require__(24);

var container = exports.container = function container(p) {
  return (0, _styledComponents.css)(['max-width:', ';margin-left:auto;margin-right:auto;'], function (p) {
    return p.theme.sizes.maxWidth;
  });
};

var m = exports.m = (0, _styledMediaQuery.generateMedia)({
  small: '900px',
  medium: '920px'

});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _Heading = _styledComponents2.default.h1.withConfig({
  displayName: 'Heading___Heading',
  componentId: 'aeqe8f-0'
})(['font-weight:700;font-size:32px;line-height:1;color:', ';margin:0 0 16px 0;'], function (p) {
  return p.theme.palette.primary;
});

var Subheading = _styledComponents2.default.h2.withConfig({
  displayName: 'Heading__Subheading',
  componentId: 'aeqe8f-1'
})(['font-weight:200;font-size:24px;line-height:1.2;letter-spacing:0.48px;color:', ';margin:0 0 24px 0;'], function (p) {
  return p.theme.palette.text.secondary;
});

var Title = _styledComponents2.default.h3.withConfig({
  displayName: 'Heading__Title',
  componentId: 'aeqe8f-2'
})(['font-weight:700;font-size:18px;line-height:1;text-transform:uppercase;color:', ';margin:0 0 16px 0;'], function (p) {
  return p.theme.palette.primary;
});

var Heading = function Heading(_ref) {
  var type = _ref.type,
      rest = _objectWithoutProperties(_ref, ['type']);

  if (type === 'heading') return _react2.default.createElement(_Heading, rest);
  if (type === 'sub') return _react2.default.createElement(Subheading, rest);
  if (type === 'title') return _react2.default.createElement(Title, rest);
  return _react2.default.createElement(_Heading, rest);
};

Heading.propTypes = {
  type: _propTypes2.default.oneOf(['heading', 'sub', 'title'])
};

exports.default = Heading;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = exports.Block = exports.Container = exports.Root = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    margin: 64px 0;\n    padding: 0 32px;\n  '], ['\n    width: 100%;\n    margin: 64px 0;\n    padding: 0 32px;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    flex-flow: column;\n    align-items: center;\n    justify-content: flex-start;\n  '], ['\n    flex-flow: column;\n    align-items: center;\n    justify-content: flex-start;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Person = __webpack_require__(15);

var _Person2 = _interopRequireDefault(_Person);

var _ashkor = __webpack_require__(36);

var _ashkor2 = _interopRequireDefault(_ashkor);

var _etsaryk = __webpack_require__(37);

var _etsaryk2 = _interopRequireDefault(_etsaryk);

var _aermolaev = __webpack_require__(38);

var _aermolaev2 = _interopRequireDefault(_aermolaev);

var _akulik = __webpack_require__(39);

var _akulik2 = _interopRequireDefault(_akulik);

var _arusetskiy = __webpack_require__(40);

var _arusetskiy2 = _interopRequireDefault(_arusetskiy);

var _akulichkin = __webpack_require__(41);

var _akulichkin2 = _interopRequireDefault(_akulichkin);

var _nsvyaznoy = __webpack_require__(42);

var _nsvyaznoy2 = _interopRequireDefault(_nsvyaznoy);

var _emarushko = __webpack_require__(43);

var _emarushko2 = _interopRequireDefault(_emarushko);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var personsFirstRow = [{ src: _ashkor2.default, name: 'Alex Shkor', role: 'CHIEF EXECUTIVE OFFICER', linkedin: 'https://www.linkedin.com/in/alexshkor/', github: 'https://github.com/alexshkor' }, { src: _etsaryk2.default, name: 'Egor Tsaryk', role: 'CHIEF TECHNOLOGY OFFICER', linkedin: 'https://www.linkedin.com/in/yahor-tsaryk-92032a68/', github: 'https://github.com/egortsaryk9' }, { src: _akulik2.default, name: 'Alexey Kulik', role: 'CHIEF ARCHITECT', linkedin: 'https://www.linkedin.com/in/alexey-kulik-61576027/', github: 'https://github.com/akulik-paralect' }, { src: _aermolaev2.default, name: 'Artur Yermalayeu', role: 'CHIEF FINANCIAL OFFICER', facebook: 'https://www.facebook.com/ArturYe' }];

var personsSecondRow = [{ src: _arusetskiy2.default, name: 'Artyom Rusetskiy', role: 'CHIEF SCIENTIST', linkedin: 'https://www.linkedin.com/in/artyom-ruseckiy-8521a89a/' }, { src: _akulichkin2.default, name: 'Anton Kulichkin', role: 'CHIEF PARTNERSHIPS OFFICER', linkedin: 'https://www.linkedin.com/in/anton-kulichkin-b158a886/' }, { src: _nsvyaznoy2.default, name: 'Nikolay Svyaznoy', role: 'CHIEF MARKETING OFFICER', linkedin: 'src' }, { src: _emarushko2.default, name: 'Egor Marushko', role: 'CORE DEVELOPER', linkedin: 'https://www.linkedin.com/in/egor-marushko-477175122/', github: 'https://github.com/egormarushko' }];

// reused in the advisors section
var Root = exports.Root = _styledComponents2.default.section.withConfig({
  displayName: '04_Team__Root',
  componentId: 's1o4tlo3-0'
})(['', ';'], _styles.container);

// reused in the advisors section
var Container = exports.Container = _styledComponents2.default.div.withConfig({
  displayName: '04_Team__Container',
  componentId: 's1o4tlo3-1'
})(['text-align:center;width:', '%;margin-left:', '%;margin-top:64px;margin-bottom:64px;', ';'], 100 * 2 / 3, 100 / 6, _styles.m.lessThan('small')(_templateObject));

// reused in the advisors section
var Block = exports.Block = _styledComponents2.default.div.withConfig({
  displayName: '04_Team__Block',
  componentId: 's1o4tlo3-2'
})(['display:flex;justify-content:space-between;&:first-of-type{margin-top:48px;}', ';'], _styles.m.lessThan('small')(_templateObject2));

// reused in the advisors section
var Person = exports.Person = (0, _styledComponents2.default)(_Person2.default).withConfig({
  displayName: '04_Team__Person',
  componentId: 's1o4tlo3-3'
})(['margin:24px 0;&:list-of-type{margin-bottom:0;}']);

var Team = function Team(p) {
  return _react2.default.createElement(
    Root,
    p,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        _Heading2.default,
        null,
        'Team'
      ),
      _react2.default.createElement(
        _Heading2.default,
        { type: 'sub' },
        'Who\'s develop DEIP platform'
      ),
      _react2.default.createElement(
        Block,
        null,
        personsFirstRow.map(function (p) {
          return _react2.default.createElement(Person, _extends({}, p, { key: p.name }));
        })
      ),
      _react2.default.createElement(
        Block,
        null,
        personsSecondRow.map(function (p) {
          return _react2.default.createElement(Person, _extends({}, p, { key: p.name }));
        })
      )
    )
  );
};

exports.default = Team;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStatic = __webpack_require__(8);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var primary = (0, _styledComponents.css)(['background:', ';color:#fff;transition:background 0.15s;&:hover{background:', ';}'], function (p) {
  return p.theme.palette.accent;
}, function (p) {
  return (0, _polished.darken)(0.1, p.theme.palette.accent);
});

var secondary = (0, _styledComponents.css)(['border:1px solid ', ';color:', ';transition:border 0.15s,color 0.15s;&:hover{border:1px solid ', ';color:', ';}'], function (p) {
  return p.theme.palette.primaryLight;
}, function (p) {
  return p.theme.palette.primaryLight;
}, function (p) {
  return p.theme.palette.primary;
}, function (p) {
  return p.theme.palette.primary;
});

var contrast = (0, _styledComponents.css)(['border:1px solid #fff;color:#fff;']);

var common = (0, _styledComponents.css)(['border:0px solid transparent;border-radius:5px;display:inline-block;font-weight:500;font-size:16px;height:49px;line-height:49px;min-width:186px;cursor:pointer;text-align:center;text-decoration:none;text-transform:uppercase;', ';'], function (p) {
  return p.primary ? primary : p.contrast ? contrast : secondary;
});

var Link = (0, _styledComponents2.default)(_reactStatic.Link).withConfig({
  displayName: 'Button__Link',
  componentId: 'nkkmj8-0'
})(['', ';'], common);
var Anchor = _styledComponents2.default.a.withConfig({
  displayName: 'Button__Anchor',
  componentId: 'nkkmj8-1'
})(['', ';'], common);
var Submit = _styledComponents2.default.button.withConfig({
  displayName: 'Button__Submit',
  componentId: 'nkkmj8-2'
})(['', ';'], common);

var Button = function Button(_ref) {
  var href = _ref.href,
      to = _ref.to,
      submit = _ref.submit,
      primary = _ref.primary,
      constrast = _ref.constrast,
      rest = _objectWithoutProperties(_ref, ['href', 'to', 'submit', 'primary', 'constrast']);

  if (submit) {
    return _react2.default.createElement(Submit, _extends({ primary: primary, contrast: contrast }, rest));
  }

  if (href) {
    return _react2.default.createElement(Anchor, _extends({ href: href, primary: primary, contrast: contrast }, rest));
  }

  return _react2.default.createElement(Link, _extends({ to: to, primary: primary, contrast: contrast }, rest));
};

Button.propTypes = {
  to: _propTypes2.default.string,
  href: _propTypes2.default.string,
  submit: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  contrast: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents2.default)(Button).withConfig({
  displayName: 'Button',
  componentId: 'nkkmj8-3'
})(['']);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ', ';\n'], ['\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  color: ', ';\n'], ['\n  font-size: 12px;\n  color: ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var p = _styledComponents2.default.p.withConfig({
  displayName: 'Text__p',
  componentId: 's1ldn5q5-0'
})(['margin:0;']);

var Normal = p.extend(_templateObject, function (p) {
  return p.theme.palette.primary;
});

var Small = p.extend(_templateObject2, function (p) {
  return p.theme.palette.text.secondary;
});

var Text = function Text(_ref) {
  var type = _ref.type,
      rest = _objectWithoutProperties(_ref, ['type']);

  if (type === 'normal') return _react2.default.createElement(Normal, rest);
  if (type === 'small') return _react2.default.createElement(Small, rest);
  return _react2.default.createElement(Normal, rest);
};

Text.propTypes = {
  type: _propTypes2.default.oneOf(['normal', 'small'])
};

exports.default = Text;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var modular = function modular(value) {
  return value * 8 + 'px';
};

var margins = function margins(p) {
  return (0, _styledComponents.css)(['margin-left:', ';margin-right:', ';'], function (p) {
    return p.ml ? modular(p.ml) : '0';
  }, function (p) {
    return p.mr ? modular(p.mr) : '0';
  });
};

var Root = _styledComponents2.default.i.withConfig({
  displayName: 'Icon__Root',
  componentId: 'm0d39l-0'
})(['font-size:', ';', ';'], function (p) {
  return p.size ? p.size + 'px' : 'inherit';
}, margins);

var Icon = function Icon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['className', 'children']);

  var cn = 'fa fa-' + children;
  if (className) {
    cn = cn + ' ' + className;
  }

  return _react2.default.createElement(Root, _extends({ className: cn }, rest));
};

Icon.propTypes = {
  className: _propTypes2.default.string,
  size: _propTypes2.default.number,
  ml: _propTypes2.default.number,
  mr: _propTypes2.default.number,
  children: _propTypes2.default.string.isRequired
};

exports.default = Icon;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Anchor = exports.Link = exports.Logo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: none;\n  '], ['\n    display: none;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStatic = __webpack_require__(8);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Logo = exports.Logo = (0, _styledComponents2.default)(_reactStatic.Link).withConfig({
  displayName: 'Menu__Logo',
  componentId: 's10ar4al-0'
})(['visibility:hidden;font-weight:700;font-size:32px;text-decoration:none;color:', ';'], function (p) {
  return p.theme.palette.text.primary;
});

var Link = exports.Link = (0, _styledComponents2.default)(_reactStatic.Link).withConfig({
  displayName: 'Menu__Link',
  componentId: 's10ar4al-1'
})(['display:inline-block;font-weight:500;font-size:16px;color:#fff;text-transform:uppercase;text-decoration:none;&:not(:last-child){margin-right:32px;}']);

var Anchor = exports.Anchor = Link.withComponent('a');

var Nav = _styledComponents2.default.div.withConfig({
  displayName: 'Menu__Nav',
  componentId: 's10ar4al-2'
})(['']);

var attached = (0, _styledComponents.css)(['position:fixed;background:#fff;box-shadow:0px 1px 14px rgba(0,0,0,0.12);', '{visibility:visible;}', ',', '{color:', ';}'], Logo, Link, Anchor, function (p) {
  return p.theme.palette.primaryLight;
});

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'Menu__Root',
  componentId: 's10ar4al-3'
})(['z-index:10;position:absolute;width:100%;top:0;left:0;', ';', ';'], function (p) {
  return p.attached ? attached : '';
}, _styles.m.lessThan('medium')(_templateObject));

var Content = _styledComponents2.default.div.withConfig({
  displayName: 'Menu__Content',
  componentId: 's10ar4al-4'
})(['display:flex;align-items:center;justify-content:space-between;width:100%;height:60px;padding:0 48px;']);

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      attached: false
    }, _this.handleScroll = function (e) {
      var attached = _this.state.attached;
      var _window = window,
          scrollY = _window.scrollY,
          innerHeight = _window.innerHeight;


      if (scrollY >= innerHeight) {
        if (attached) return;
        _this.setState({ attached: true });
      } else {
        if (!attached) return;
        _this.setState({ attached: false });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.attached) {
        document.addEventListener('scroll', this.handleScroll);
      } else {
        this.setState({ attached: true });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.props.attached) document.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var attached = this.state.attached;

      return _react2.default.createElement(
        Root,
        { attached: attached },
        _react2.default.createElement(
          Content,
          null,
          _react2.default.createElement(
            Logo,
            { to: '/' },
            'DEIP'
          ),
          _react2.default.createElement(
            Nav,
            null,
            _react2.default.createElement(
              Anchor,
              { href: '/#about' },
              'About us'
            ),
            _react2.default.createElement(
              Anchor,
              { href: '/#roadmap' },
              'Roadmap'
            ),
            _react2.default.createElement(
              Anchor,
              { href: '/#team' },
              'Team'
            ),
            _react2.default.createElement(
              Anchor,
              { href: '/#advisors' },
              'Advisors'
            ),
            _react2.default.createElement(
              Anchor,
              { href: '/#researchers' },
              'Researches'
            ),
            attached ? _react2.default.createElement(
              _Button2.default,
              { primary: true, to: '/join' },
              'Join us'
            ) : _react2.default.createElement(
              Link,
              { to: '/join' },
              'Join us'
            )
          )
        )
      );
    }
  }]);

  return Menu;
}(_react.Component);

Menu.propTypes = {
  attached: _propTypes2.default.bool
};

exports.default = Menu;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    flex-flow: column;\n  '], ['\n    flex-flow: column;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 100%;\n    margin: 0 0 16px 0;\n  '], ['\n    width: 100%;\n    margin: 0 0 16px 0;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    justify-content: center;\n    width: 100%;\n  '], ['\n    justify-content: center;\n    width: 100%;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Team = __webpack_require__(5);

var _Icon = __webpack_require__(9);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div.withConfig({
  displayName: '10_Footer__Container',
  componentId: 's17hdqcd-0'
})(['display:flex;padding:16px 32px 16px 32px;', ';'], _styles.m.lessThan('medium')(_templateObject));

var Block = _styledComponents2.default.div.withConfig({
  displayName: '10_Footer__Block',
  componentId: 's17hdqcd-1'
})(['display:flex;flex-wrap:wrap;align-items:center;justify-content:center;width:', '%;margin-left:', '%;', ';'], 100 * 6 / 12, 100 * 3 / 12, _styles.m.lessThan('medium')(_templateObject2));

var Wrap = _styledComponents2.default.div.withConfig({
  displayName: '10_Footer__Wrap',
  componentId: 's17hdqcd-2'
})(['display:flex;align-items:center;justify-content:flex-end;width:', '%;', ';'], 100 * 3 / 12, _styles.m.lessThan('medium')(_templateObject3));

var Copyright = _styledComponents2.default.p.withConfig({
  displayName: '10_Footer__Copyright',
  componentId: 's17hdqcd-3'
})(['font-size:16px;color:', ';margin:0;'], function (p) {
  return p.theme.palette.text.secondary;
});

var Icon = (0, _styledComponents2.default)(_Icon2.default).withConfig({
  displayName: '10_Footer__Icon',
  componentId: 's17hdqcd-4'
})(['font-size:24px;color:', ';'], function (p) {
  return p.theme.palette.primary;
});

var Link = _styledComponents2.default.a.withConfig({
  displayName: '10_Footer__Link',
  componentId: 's17hdqcd-5'
})(['margin:16px;']);

var Footer = function Footer(p) {
  return _react2.default.createElement(
    _Team.Root,
    p,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        Block,
        null,
        _react2.default.createElement(
          Link,
          { href: '#' },
          _react2.default.createElement(
            Icon,
            null,
            'gitlab'
          )
        ),
        _react2.default.createElement(
          Link,
          { href: '#' },
          _react2.default.createElement(
            Icon,
            null,
            'telegram'
          )
        ),
        _react2.default.createElement(
          Link,
          { href: '#' },
          _react2.default.createElement(
            Icon,
            null,
            'slack'
          )
        ),
        _react2.default.createElement(
          Link,
          { href: '#' },
          _react2.default.createElement(
            Icon,
            null,
            'medium'
          )
        ),
        _react2.default.createElement(
          Link,
          { href: '#' },
          _react2.default.createElement(
            Icon,
            null,
            'twitter'
          )
        ),
        _react2.default.createElement(
          Link,
          { href: '#' },
          _react2.default.createElement(
            Icon,
            null,
            'instagram'
          )
        ),
        _react2.default.createElement(
          Link,
          { href: '#' },
          _react2.default.createElement(
            Icon,
            null,
            'facebook'
          )
        ),
        _react2.default.createElement(
          Link,
          { href: '#' },
          _react2.default.createElement(
            Icon,
            null,
            'envelope'
          )
        )
      ),
      _react2.default.createElement(
        Wrap,
        null,
        _react2.default.createElement(
          Copyright,
          null,
          '\xA9 DEIP, ',
          new Date().getFullYear()
        )
      )
    )
  );
};

exports.default = Footer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    font-size: 16px;\n    letter-spacing: 0;\n  '], ['\n    font-size: 16px;\n    letter-spacing: 0;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    flex-flow: column;\n  '], ['\n    display: flex;\n    flex-flow: column;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      margin: 0 16px 16px 16px;\n    '], ['\n      margin: 0 16px 16px 16px;\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      width: 225px;\n      margin-bottom: 16px;\n    '], ['\n      width: 225px;\n      margin-bottom: 16px;\n    ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Menu = __webpack_require__(11);

var _Menu2 = _interopRequireDefault(_Menu);

var _MobileMenu = __webpack_require__(14);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

var _HeroBackground = __webpack_require__(25);

var _HeroBackground2 = _interopRequireDefault(_HeroBackground);

var _Logo = __webpack_require__(27);

var _Logo2 = _interopRequireDefault(_Logo);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.section.withConfig({
  displayName: '00_Hero__Root',
  componentId: 's17xwbgr-0'
})(['position:relative;text-align:center;height:100vh;']);

var Container = _styledComponents2.default.div.withConfig({
  displayName: '00_Hero__Container',
  componentId: 's17xwbgr-1'
})(['', ';display:flex;flex-flow:column;align-items:center;justify-content:center;padding-bottom:5vh;height:100vh;'], _styles.container);

var Description = _styledComponents2.default.p.withConfig({
  displayName: '00_Hero__Description',
  componentId: 's17xwbgr-2'
})(['font-weight:400;font-size:24px;letter-spacing:2.16px;color:#fff;margin:0;', ';'], _styles.m.lessThan('small')(_templateObject));

var ButtonsLine = _styledComponents2.default.div.withConfig({
  displayName: '00_Hero__ButtonsLine',
  componentId: 's17xwbgr-3'
})(['text-align:center;margin-top:50px;', ';', '{', ';', ';}'], _styles.m.lessThan('small')(_templateObject2), _Button2.default, _styles.m.greaterThan('small')(_templateObject3), _styles.m.lessThan('small')(_templateObject4));

var Hero = function Hero() {
  return _react2.default.createElement(
    Root,
    null,
    _react2.default.createElement(_HeroBackground2.default, null),
    _react2.default.createElement(_Menu2.default, null),
    _react2.default.createElement(_MobileMenu2.default, null),
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        _Logo2.default,
        null,
        'DEIP'
      ),
      _react2.default.createElement(
        Description,
        null,
        'Decentralized research platform'
      ),
      _react2.default.createElement(
        ButtonsLine,
        null,
        _react2.default.createElement(
          _Button2.default,
          { primary: true, to: '/join' },
          'join us'
        ),
        _react2.default.createElement(
          _Button2.default,
          { contrast: true, to: '/whitepaper' },
          'white paper'
        )
      )
    )
  );
};

exports.default = Hero;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: none;\n  '], ['\n    display: none;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Menu = __webpack_require__(11);

var _Icon = __webpack_require__(9);

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Toggler = _styledComponents2.default.a.withConfig({
  displayName: 'MobileMenu__Toggler',
  componentId: 'm7lrw4-0'
})(['font-size:24px;line-height:60px;color:#fff;width:60px;height:60px;.open{display:inline-block;}.close{display:none;}', ';'], _styles.m.greaterThan('medium')(_templateObject));

var Top = _styledComponents2.default.div.withConfig({
  displayName: 'MobileMenu__Top',
  componentId: 'm7lrw4-1'
})(['display:flex;align-items:center;justify-content:space-between;padding-left:16px;height:60px;min-height:60px;']);

var Nav = _styledComponents2.default.div.withConfig({
  displayName: 'MobileMenu__Nav',
  componentId: 'm7lrw4-2'
})(['display:none;flex-flow:column;align-items:center;justify-content:space-between;height:100%;']);

var Links = _styledComponents2.default.div.withConfig({
  displayName: 'MobileMenu__Links',
  componentId: 'm7lrw4-3'
})(['display:flex;flex-flow:column;align-items:center;padding-top:32px;']);

var opened = (0, _styledComponents.css)(['position:fixed;background:#fff;height:100%;.open{display:none;}.close{display:inline-block;}', '{visibility:visible;}', '{display:flex;}', ',', ',', '{color:inherit;}'], _Menu.Logo, Nav, _Menu.Link, _Menu.Anchor, Toggler);

var attached = (0, _styledComponents.css)(['position:fixed;background:#fff;box-shadow:0px 1px 14px rgba(0,0,0,0.12);', '{visibility:visible;}', ',', ',', '{color:inherit;}'], _Menu.Logo, _Menu.Link, _Menu.Anchor, Toggler);

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'MobileMenu__Root',
  componentId: 'm7lrw4-4'
})(['z-index:10;position:absolute;display:flex;flex-flow:column;width:100%;top:0;left:0;', ';', ';', ';', ',', '{margin:16px 0;}', '{width:50%;margin-bottom:32px;}'], function (p) {
  return p.attached ? attached : '';
}, function (p) {
  return p.opened ? opened : '';
}, _styles.m.greaterThan('medium')(_templateObject), _Menu.Link, _Menu.Anchor, _Button2.default);

var MobileMenu = function (_Component) {
  _inherits(MobileMenu, _Component);

  function MobileMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MobileMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MobileMenu.__proto__ || Object.getPrototypeOf(MobileMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      opened: false,
      attached: false
    }, _this.handleScroll = function (e) {
      var attached = _this.state.attached;
      var _window = window,
          scrollY = _window.scrollY,
          innerHeight = _window.innerHeight;


      if (scrollY >= innerHeight) {
        if (attached) return;
        _this.setState({ attached: true });
      } else {
        if (!attached) return;
        _this.setState({ attached: false });
      }
    }, _this.handleToggle = function (e) {
      e.preventDefault();
      _this.setState({ opened: !_this.state.opened });
    }, _this.handleClick = function (e) {
      _this.setState({ opened: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MobileMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.attached) {
        document.addEventListener('scroll', this.handleScroll);
      } else {
        this.setState({ attached: true });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.props.attached) document.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Root,
        this.state,
        _react2.default.createElement(
          Top,
          null,
          _react2.default.createElement(
            _Menu.Logo,
            { to: '/' },
            'DEIP'
          ),
          _react2.default.createElement(
            Toggler,
            { onClick: this.handleToggle },
            _react2.default.createElement(
              _Icon2.default,
              { className: 'open' },
              'bars'
            ),
            _react2.default.createElement(
              _Icon2.default,
              { className: 'close' },
              'close'
            )
          )
        ),
        _react2.default.createElement(
          Nav,
          null,
          _react2.default.createElement(
            Links,
            null,
            _react2.default.createElement(
              _Menu.Anchor,
              { href: '/#about', onClick: this.handleClick },
              'About us'
            ),
            _react2.default.createElement(
              _Menu.Anchor,
              { href: '/#roadmap', onClick: this.handleClick },
              'Roadmap'
            ),
            _react2.default.createElement(
              _Menu.Anchor,
              { href: '/#team', onClick: this.handleClick },
              'Team'
            ),
            _react2.default.createElement(
              _Menu.Anchor,
              { href: '/#advisors', onClick: this.handleClick },
              'Advisors'
            ),
            _react2.default.createElement(
              _Menu.Anchor,
              { href: '/#researchers', onClick: this.handleClick },
              'Researches'
            )
          ),
          _react2.default.createElement(
            _Button2.default,
            { primary: true, to: '/join', onClick: this.handleClick },
            'Join us'
          )
        )
      );
    }
  }]);

  return MobileMenu;
}(_react.Component);

MobileMenu.propTypes = {
  attached: _propTypes2.default.bool
};

exports.default = MobileMenu;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    font-size: 24px;\n  '], ['\n    font-size: 24px;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Text = __webpack_require__(7);

var _Text2 = _interopRequireDefault(_Text);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Icon = __webpack_require__(9);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'Person__Root',
  componentId: 'tzqfhe-0'
})(['display:flex;flex-direction:column;align-items:center;width:132px;']);

var special = function special(p) {
  return p.special ? 'border: 4px solid #f2c94c' : 'box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15)';
};

var Avatar = _styledComponents2.default.img.withConfig({
  displayName: 'Person__Avatar',
  componentId: 'tzqfhe-1'
})(['border-radius:100%;width:132px;height:132px;margin-bottom:8px;', ';'], special);

var Info = _styledComponents2.default.div.withConfig({
  displayName: 'Person__Info',
  componentId: 'tzqfhe-2'
})(['text-align:center;margin-bottom:8px;p:first-child{font-weight:500;}p{margin:0;}']);

var Icon = (0, _styledComponents2.default)(_Icon2.default).withConfig({
  displayName: 'Person__Icon',
  componentId: 'tzqfhe-3'
})(['font-size:18px;', ';'], _styles.m.lessThan('small')(_templateObject));

var A = _styledComponents2.default.a.withConfig({
  displayName: 'Person__A',
  componentId: 'tzqfhe-4'
})(['display:inline-block;color:', ';opacity:0.3;text-decoration:none;transition:opacity 0.15s;&:hover{opacity:1;}&:not(:last-child){margin-right:10px;}'], function (p) {
  return p.theme.palette.primary;
});

var Person = function Person(_ref) {
  var special = _ref.special,
      src = _ref.src,
      name = _ref.name,
      role = _ref.role,
      facebook = _ref.facebook,
      linkedin = _ref.linkedin,
      github = _ref.github,
      rest = _objectWithoutProperties(_ref, ['special', 'src', 'name', 'role', 'facebook', 'linkedin', 'github']);

  return _react2.default.createElement(
    Root,
    rest,
    _react2.default.createElement(Avatar, { special: special, src: src }),
    _react2.default.createElement(
      Info,
      null,
      _react2.default.createElement(
        _Text2.default,
        null,
        name
      ),
      _react2.default.createElement(
        _Text2.default,
        { type: 'small' },
        role
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      facebook && _react2.default.createElement(
        A,
        { href: facebook },
        _react2.default.createElement(
          Icon,
          null,
          'facebook-square'
        )
      ),
      linkedin && _react2.default.createElement(
        A,
        { href: linkedin },
        _react2.default.createElement(
          Icon,
          null,
          'linkedin-square'
        )
      ),
      github && _react2.default.createElement(
        A,
        { href: github },
        _react2.default.createElement(
          Icon,
          null,
          'github-square'
        )
      )
    )
  );
};

Person.propTypes = {
  special: _propTypes2.default.bool,
  src: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string,
  role: _propTypes2.default.string,
  facebook: _propTypes2.default.string,
  linkedin: _propTypes2.default.string,
  github: _propTypes2.default.string
};

exports.default = Person;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHRpdGxlPlN1YnRyYWN0PC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB1c2luZyBGaWdtYTwvZGVzYz4KPGcgaWQ9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc3NSAtNzMwMCkiPgo8ZyBpZD0iU3VidHJhY3QiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMF9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NzUgNzMwMCkiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8L2c+CjxkZWZzPgo8cGF0aCBpZD0icGF0aDBfZmlsbCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNIDIxIDQyQyAzMi41OTggNDIgNDIgMzIuNTk3NyA0MiAyMUMgNDIgOS40MDIzNCAzMi41OTggMCAyMSAwQyA5LjQwMjA0IDAgMCA5LjQwMjM0IDAgMjFDIDAgMzIuNTk3NyA5LjQwMjA0IDQyIDIxIDQyWk0gMjcuNDI4NiAxMy4yODYxQyAyNy41NDQ2IDEzLjI4NjEgMjcuNjYwNyAxMy4zMjEzIDI3Ljc1IDEzLjM4MzhDIDI3LjkzNzUgMTMuNTE3NiAyOC4wMjY4IDEzLjczMjQgMjcuOTkxMSAxMy45NTUxTCAyNS43MDU0IDI3LjY2OTlDIDI1LjY3ODYgMjcuODM4OSAyNS41NzE0IDI3Ljk4MjQgMjUuNDE5NiAyOC4wNzEzQyAyNS4zMzkzIDI4LjExNjIgMjUuMjQxMSAyOC4xNDI2IDI1LjE0MjkgMjguMTQyNkMgMjUuMDcxNCAyOC4xNDI2IDI1IDI4LjEyNSAyNC45Mjg2IDI4LjA5ODZMIDIwLjg4MzkgMjYuNDQ2M0wgMTguNzIzMiAyOS4wODAxQyAxOC42MTYxIDI5LjIxMzkgMTguNDU1NCAyOS4yODYxIDE4LjI4NTcgMjkuMjg2MUMgMTguMjIzMiAyOS4yODYxIDE4LjE1MTggMjkuMjc2NCAxOC4wODkzIDI5LjI1QyAxNy44NjYxIDI5LjE2OTkgMTcuNzE0MyAyOC45NTUxIDE3LjcxNDMgMjguNzEzOUwgMTcuNzE0MyAyNS41OTg2TCAyNS40Mjg2IDE2LjE0MjZMIDE1Ljg4MzkgMjQuNDAxNEwgMTIuMzU3MSAyMi45NTUxQyAxMi4xNTE4IDIyLjg3NSAxMi4wMTc5IDIyLjY4NzUgMTIgMjIuNDYzOUMgMTEuOTkxMSAyMi4yNSAxMi4wOTgyIDIyLjA0NDkgMTIuMjg1NyAyMS45Mzc1TCAyNy4xNDI5IDEzLjM2NjJDIDI3LjIzMjEgMTMuMzEyNSAyNy4zMzA0IDEzLjI4NjEgMjcuNDI4NiAxMy4yODYxWiIvPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(19);

var _styledComponents = __webpack_require__(1);

var _App = __webpack_require__(20);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.hydrate(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: Roboto, sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n'], ['\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: Roboto, sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(8);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStaticRoutes = __webpack_require__(21);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

var theme = {
  sizes: {
    maxWidth: '1280px'
  },
  palette: {
    accent: '#e71d36',
    primary: '#331d50',
    primaryLight: 'rgba(51,29,80,0.5)',
    text: {
      primary: 'rgba(0,0,0,.87)',
      secondary: 'rgba(0,0,0,.26)',
      accent: '#331d50'
    },
    background: {
      primary: '#fcf9ff'
    }
  }
};

exports.default = function () {
  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: theme },
    _react2.default.createElement(
      _reactStatic.Router,
      null,
      _react2.default.createElement(_reactStaticRoutes2.default, null)
    )
  );
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _Index = __webpack_require__(23);

var _Index2 = _interopRequireDefault(_Index);

var _Join = __webpack_require__(64);

var _Join2 = _interopRequireDefault(_Join);

var _Whitepaper = __webpack_require__(73);

var _Whitepaper2 = _interopRequireDefault(_Whitepaper);

var _ = __webpack_require__(76);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var templateMap = {
  t_0: _Index2.default,
  t_1: _Join2.default,
  t_2: _Whitepaper2.default,
  t_3: _2.default
};
var templateTree = { c: { "404": { t: "t_3" }, "/": { t: "t_0" }, "join": { t: "t_1" }, "whitepaper": { t: "t_2" } } };

var getTemplateForPath = function getTemplateForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Template = getTemplateForPath(props.location.pathname);
          if (!Template) {
            Template = getTemplateForPath('404');
          }
          return Template && _react2.default.createElement(Template, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(8);

var _Hero = __webpack_require__(13);

var _Hero2 = _interopRequireDefault(_Hero);

var _Vision = __webpack_require__(28);

var _Vision2 = _interopRequireDefault(_Vision);

var _We = __webpack_require__(30);

var _We2 = _interopRequireDefault(_We);

var _Roadmap = __webpack_require__(35);

var _Roadmap2 = _interopRequireDefault(_Roadmap);

var _Team = __webpack_require__(5);

var _Team2 = _interopRequireDefault(_Team);

var _Advisors = __webpack_require__(48);

var _Advisors2 = _interopRequireDefault(_Advisors);

var _Researchers = __webpack_require__(51);

var _Researchers2 = _interopRequireDefault(_Researchers);

var _Partners = __webpack_require__(53);

var _Partners2 = _interopRequireDefault(_Partners);

var _Media = __webpack_require__(55);

var _Media2 = _interopRequireDefault(_Media);

var _Subscribe = __webpack_require__(60);

var _Subscribe2 = _interopRequireDefault(_Subscribe);

var _Footer = __webpack_require__(12);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index(_ref) {
  var someData = _ref.someData;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Hero2.default, { id: 'hero' }),
    _react2.default.createElement(_Vision2.default, { id: 'vision' }),
    _react2.default.createElement(_We2.default, { id: 'about' }),
    _react2.default.createElement(_Roadmap2.default, { id: 'roadmap' }),
    _react2.default.createElement(_Team2.default, { id: 'team' }),
    _react2.default.createElement(_Advisors2.default, { id: 'advisors' }),
    _react2.default.createElement(_Subscribe2.default, { id: 'subscribe' }),
    _react2.default.createElement(_Footer2.default, { id: 'footer' })
  );
};

exports.default = (0, _reactStatic.getSiteProps)(Index);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("styled-media-query");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      display: none;\n    '], ['\n      display: none;\n    ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _icon_mouse = __webpack_require__(26);

var _icon_mouse2 = _interopRequireDefault(_icon_mouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Body = _styledComponents2.default.div.withConfig({
  displayName: 'HeroBackground__Body',
  componentId: 's1991oeo-0'
})(['z-index:-10;position:absolute;top:0;left:0;right:0;bottom:0;line{transition:stroke-width 0.3s;', ';}'], _styles.m.lessThan('small')(_templateObject));

var Wrap = _styledComponents2.default.div.withConfig({
  displayName: 'HeroBackground__Wrap',
  componentId: 's1991oeo-1'
})(['']);

var Icon = _styledComponents2.default.img.withConfig({
  displayName: 'HeroBackground__Icon',
  componentId: 's1991oeo-2'
})(['position:absolute;left:calc(50% - 9px);bottom:10%;']);

var renderLines = function renderLines(cb, count) {
  var lines = [];
  for (var i = 1; i < count; i++) {
    var x = i * 100 / count + '%';
    lines.push(_react2.default.createElement('line', {
      ref: cb,
      x1: x,
      y1: '0',
      x2: x,
      y2: '100%',
      stroke: 'rgba(39, 49, 96, 0.5)',
      strokeWidth: '2',
      key: i
    }));
  }
  return lines;
};

function makeInterpolation(range, f, t) {
  return function (value) {
    if (value >= range) return f;
    if (value === 0) return t;
    return (range - value) / range * (t - f) + f;
  };
}

var HeroBackground = function (_React$Component) {
  _inherits(HeroBackground, _React$Component);

  function HeroBackground() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeroBackground);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeroBackground.__proto__ || Object.getPrototypeOf(HeroBackground)).call.apply(_ref, [this].concat(args))), _this), _this.lineRefs = [], _this.interpolateWidth = makeInterpolation(100, 2, 10), _this.interpolateColor = makeInterpolation(100, 0.5, 1), _this.mouseMove = function (e) {
      _this.lineRefs.forEach(function (line) {
        var rect = line.getBoundingClientRect();
        var delta = Math.abs(e.clientX - rect.x);

        line.setAttribute('stroke-width', _this.interpolateWidth(delta));
        line.setAttribute('stroke', 'rgba(39, 49, 96, ' + _this.interpolateColor(delta) + ')');
      });
    }, _this.addLine = function (ref) {
      return _this.lineRefs.push(ref);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeroBackground, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mousemove', this.mouseMove);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousemove', this.mouseMove);
    }
  }, {
    key: 'render',
    value: function render() {
      this.lineRefs = [];

      return _react2.default.createElement(
        Body,
        null,
        _react2.default.createElement(
          'svg',
          { style: { zIndex: -10, height: '100%', width: '100%' } },
          _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement(
              'linearGradient',
              { id: 'heroGradient', gradientTransform: 'rotate(90)' },
              _react2.default.createElement('stop', { offset: '50%', stopColor: '#331d50' }),
              _react2.default.createElement('stop', { offset: '100%', stopColor: '#1C3D6E' })
            ),
            _react2.default.createElement(
              'mask',
              { id: 'heroMask' },
              _react2.default.createElement('ellipse', { cx: '50%', cy: '-10%', rx: '100%', ry: '100%', fill: 'white' })
            )
          ),
          _react2.default.createElement('ellipse', {
            id: 'ellipse',
            cx: '50%',
            cy: '-10%',
            rx: '100%',
            ry: '100%',
            fill: 'url(#heroGradient)'
          }),
          _react2.default.createElement(
            'g',
            { mask: 'url(#heroMask)' },
            renderLines(this.addLine, 70)
          )
        ),
        _react2.default.createElement(Icon, { src: _icon_mouse2.default })
      );
    }
  }]);

  return HeroBackground;
}(_react2.default.Component);

exports.default = HeroBackground;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iNjEiIHZpZXdCb3g9IjAgMCAxOCA2MSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHRpdGxlPm1vdXNlXzE8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPgo8ZyBpZD0iQ2FudmFzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MjYgLTc3NCkiPgo8ZyBpZD0ibW91c2VfMSI+CjxnIGlkPSJSZWN0YW5nbGUgMiI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgwX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MTggODA3KSIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnIGlkPSJWZWN0b3IiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMV9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTI1LjI1IDc3NCkiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSJNIDAgMEwgMiAwTCAyIDI4TCAwIDI4TCAwIDBaIi8+CjxwYXRoIGlkPSJwYXRoMV9maWxsIiBkPSJNIDguMjUxMjkgNC40OTIxOWUtMDVDIDguMjUwODkgNC40OTIxOWUtMDUgOC4yNTA0NCAwIDguMjQ5OTkgMEMgOC4yNDk1NCAwIDguMjQ5MTQgNC40OTIxOWUtMDUgOC4yNDg2OSA0LjQ5MjE5ZS0wNUMgMy43MDAyNiAwLjAwMDc2MzY3MiAtMS45MTkyN2UtMDggMy43MDEzOCAtMS45MTkyN2UtMDggOC4yNTAwNEwgLTEuOTE5MjdlLTA4IDE0Ljc1QyAtMS45MTkyN2UtMDggMTkuMjk5MSAzLjcwMDkzIDIzIDguMjQ5OTkgMjNDIDEyLjc5OTEgMjMgMTYuNSAxOS4yOTkxIDE2LjUgMTQuNzVMIDE2LjUgOC4yNTAwNEMgMTYuNSAzLjcwMTM4IDEyLjc5OTggMC4wMDA3NjM2NzIgOC4yNTEyOSA0LjQ5MjE5ZS0wNVpNIDguMjQ5OTkgNi4wMDAwM0MgOC42NjM1NCA2LjAwMDAzIDkuMDAwMDEgNi4zMzY1IDkuMDAwMDEgNi43NTAwNUwgOS4wMDAwMSA4LjI1MDA0QyA5LjAwMDAxIDguNjYzNTkgOC42NjM1NCA5LjAwMDA1IDguMjQ5OTkgOS4wMDAwNUMgNy44MzY0NCA5LjAwMDA1IDcuNDk5OTggOC42NjM1OSA3LjQ5OTk4IDguMjUwMDRMIDcuNDk5OTggNi43NTAwNUMgNy40OTk5OCA2LjMzNjUgNy44MzY0NCA2LjAwMDAzIDguMjQ5OTkgNi4wMDAwM1pNIDE1IDE0Ljc1QyAxNSAxOC40NzIgMTEuOTcxOSAyMS41IDguMjQ5OTkgMjEuNUMgNC41MjgwNCAyMS41IDEuNDk5OTkgMTguNDcyIDEuNDk5OTkgMTQuNzVMIDEuNDk5OTkgOC4yNTAwNEMgMS40OTk5OSA0Ljc4MTU3IDQuMTI5NjcgMS45MTYyMyA3LjQ5OTk4IDEuNTQxOTRMIDcuNDk5OTggNC42MjkwNkMgNi42MjcwMSA0LjkzODY3IDUuOTk5OTkgNS43NzIzMyA1Ljk5OTk5IDYuNzUwMDVMIDUuOTk5OTkgOC4yNTAwNEMgNS45OTk5OSA5LjQ5MDY5IDcuMDA5MzQgMTAuNSA4LjI0OTk5IDEwLjVDIDkuNDkwNjQgMTAuNSAxMC41IDkuNDkwNjkgMTAuNSA4LjI1MDA0TCAxMC41IDYuNzUwMDVDIDEwLjUgNS43NzIyOCA5Ljg3MjkzIDQuOTM4NjcgOS4wMDAwMSA0LjYyOTA2TCA5LjAwMDAxIDEuNTQxOTRDIDEyLjM3MDMgMS45MTYyMyAxNSA0Ljc4MTU3IDE1IDguMjUwMDRMIDE1IDE0Ljc1TCAxNSAxNC43NVoiLz4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    font-size: 96px;\n    letter-spacing: 9px;\n  '], ['\n    font-size: 96px;\n    letter-spacing: 9px;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Logo = _styledComponents2.default.h1.withConfig({
  displayName: 'Logo',
  componentId: 's121q4ik-0'
})(['font-weight:400;font-size:182px;letter-spacing:12px;color:#fff;margin:0;', ';'], _styles.m.lessThan('small')(_templateObject));

exports.default = Logo;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    flex-flow: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    height: auto;\n  '], ['\n    flex-flow: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    height: auto;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 100%;\n    padding: 0 32px 32px 32px;\n    margin: 0;\n  '], ['\n    width: 100%;\n    padding: 0 32px 32px 32px;\n    margin: 0;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    align-self: flex-end;\n    height: 60vw;\n  '], ['\n    align-self: flex-end;\n    height: 60vw;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Text = __webpack_require__(7);

var _Text2 = _interopRequireDefault(_Text);

var _vision = __webpack_require__(29);

var _vision2 = _interopRequireDefault(_vision);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.section.withConfig({
  displayName: '01_Vision__Root',
  componentId: 's1y6iquf-0'
})(['overflow:hidden;position:relative;display:flex;align-items:center;justify-content:space-between;height:100vh;', ';'], _styles.m.lessThan('small')(_templateObject));

var Block = _styledComponents2.default.div.withConfig({
  displayName: '01_Vision__Block',
  componentId: 's1y6iquf-1'
})(['display:inline-block;margin-left:', '%;width:', '%;', ';'], 100 / 12, 100 * 5 / 12, _styles.m.lessThan('small')(_templateObject2));

var Decor = _styledComponents2.default.img.withConfig({
  displayName: '01_Vision__Decor',
  componentId: 's1y6iquf-2'
})(['height:40vw;', ';'], _styles.m.lessThan('small')(_templateObject3));

var Vision = function Vision(p) {
  return _react2.default.createElement(
    Root,
    p,
    _react2.default.createElement(
      Block,
      null,
      _react2.default.createElement(
        _Heading2.default,
        null,
        'Our vision'
      ),
      _react2.default.createElement(
        _Heading2.default,
        { type: 'sub' },
        '\u201COpen science and rewarding for knowledge creation\u201D'
      ),
      _react2.default.createElement(
        _Text2.default,
        null,
        'We believe that science will be open and anyone will be able to use results of scientific findings. This should reveal huge human capital and boost knowledge creation. New science will work on global scale and let everyone from any place in the world to participate in scientific research. Review and assessment of academic papers will be transparent and controlled by decentralized protocol, which increases collaboration and incentivizes contribution to global science.'
      )
    ),
    _react2.default.createElement(Decor, { src: _vision2.default })
  );
};

exports.default = Vision;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vision.dde4bb84.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    background: #fff;\n    padding-left: 32px;\n    padding-right: 32px;\n  '], ['\n    background: #fff;\n    padding-left: 32px;\n    padding-right: 32px;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: none;\n  '], ['\n    display: none;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    flex-flow: column;\n    width: 100%;\n    margin-left: 0;\n  '], ['\n    flex-flow: column;\n    width: 100%;\n    margin-left: 0;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    width: 100%;\n    padding: 32px 0;\n  '], ['\n    width: 100%;\n    padding: 32px 0;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  width: ', '%;\n  flex-flow: column;\n  margin: 48px auto auto;\n'], ['\n  width: ', '%;\n  flex-flow: column;\n  margin: 48px auto auto;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  flex-flow: column;\n  justify-content: flex-end;\n'], ['\n  flex-flow: column;\n  justify-content: flex-end;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  align-items: center;\n  justify-content: center;\n  width: ', '%;\n  ', '\n'], ['\n  align-items: center;\n  justify-content: center;\n  width: ', '%;\n  ', '\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  flex-flow: column;\n  justify-content: flex-end;\n  padding-bottom: 1.6em;\n'], ['\n  flex-flow: column;\n  justify-content: flex-end;\n  padding-bottom: 1.6em;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Text = __webpack_require__(7);

var _Text2 = _interopRequireDefault(_Text);

var _we = __webpack_require__(31);

var _we2 = _interopRequireDefault(_we);

var _icon_dollar = __webpack_require__(32);

var _icon_dollar2 = _interopRequireDefault(_icon_dollar);

var _icon_pen = __webpack_require__(33);

var _icon_pen2 = _interopRequireDefault(_icon_pen);

var _icon_speech = __webpack_require__(34);

var _icon_speech2 = _interopRequireDefault(_icon_speech);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.section.withConfig({
  displayName: '02_We__Root',
  componentId: 's1mv5guo-0'
})(['overflow:hidden;position:relative;background:', ';padding:64px 0;', ';'], function (p) {
  return p.theme.palette.background.primary;
}, _styles.m.lessThan('small')(_templateObject));

var Container = _styledComponents2.default.div.withConfig({
  displayName: '02_We__Container',
  componentId: 's1mv5guo-1'
})(['', ';text-align:center;'], _styles.container);

var Decor = _styledComponents2.default.img.withConfig({
  displayName: '02_We__Decor',
  componentId: 's1mv5guo-2'
})(['width:90%;margin-top:32px;']);

var Icon = _styledComponents2.default.img.withConfig({
  displayName: '02_We__Icon',
  componentId: 's1mv5guo-3'
})(['width:64px;height:64px;margin:0 auto 24px auto;', ';'], _styles.m.greaterThan('small')(_templateObject2));

var Block = _styledComponents2.default.div.withConfig({
  displayName: '02_We__Block',
  componentId: 's1mv5guo-4'
})(['display:flex;width:', '%;margin-left:', '%;', ';'], 100 * 10 / 12, 100 / 12, _styles.m.lessThan('small')(_templateObject3));

var baseCell = _styledComponents2.default.div.withConfig({
  displayName: '02_We__baseCell',
  componentId: 's1mv5guo-5'
})(['display:flex;width:', '%;', ';'], 100 * 3 / 10, _styles.m.lessThan('small')(_templateObject4));
var TopCenter = baseCell.extend(_templateObject5, 100 * 3 / 12);

var LeftBottom = baseCell.extend(_templateObject6);

var CenterMiddle = baseCell.extend(_templateObject7, 100 * 4 / 10, _styles.m.lessThan('small')(_templateObject2));

var RightBottom = baseCell.extend(_templateObject8);

var We = function We(p) {
  return _react2.default.createElement(
    Root,
    p,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        _Heading2.default,
        null,
        'Who we are'
      ),
      _react2.default.createElement(
        _Heading2.default,
        { type: 'sub' },
        'What we propose'
      ),
      _react2.default.createElement(
        TopCenter,
        null,
        _react2.default.createElement(Icon, { src: _icon_pen2.default }),
        _react2.default.createElement(
          _Heading2.default,
          { type: 'title' },
          'Publishing platform'
        ),
        _react2.default.createElement(
          _Text2.default,
          null,
          'DEIP provides decentralized publishing platform headed by scientists and researchers.'
        )
      ),
      _react2.default.createElement(
        Block,
        null,
        _react2.default.createElement(
          LeftBottom,
          null,
          _react2.default.createElement(Icon, { src: _icon_dollar2.default }),
          _react2.default.createElement(
            _Heading2.default,
            { type: 'title' },
            'Research financing'
          ),
          _react2.default.createElement(
            _Text2.default,
            null,
            'Various mechanisms to fund a research. Getting financing by automated reward distribution or receive a direct grant of investment.'
          )
        ),
        _react2.default.createElement(
          CenterMiddle,
          null,
          _react2.default.createElement(Decor, { src: _we2.default })
        ),
        _react2.default.createElement(
          RightBottom,
          null,
          _react2.default.createElement(Icon, { src: _icon_speech2.default }),
          _react2.default.createElement(
            _Heading2.default,
            { type: 'title' },
            'Review system'
          ),
          _react2.default.createElement(
            _Text2.default,
            null,
            'Economic model that incentivizes fair and qualitative feedback to provide collaborative environment for researches.'
          )
        )
      )
    )
  );
};

exports.default = We;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/we.3f7681bc.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHRpdGxlPkdyb3VwIDExPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB1c2luZyBGaWdtYTwvZGVzYz4KPGcgaWQ9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2NzYgLTIwMTMpIj4KPGcgaWQ9Ikdyb3VwIDExIj4KPGcgaWQ9IkVsbGlwc2UgOC4zIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDBfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY3NiAyMDEzKSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8L2c+CjxnIGlkPSIkIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDFfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY5MyAyMDI1LjgyKSIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCA0Ni40NjQ2IC00Ni4zNDcxIDAgMjMuNjI1NyAyNC41NDIpIj4KPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMzMxRDUwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI0N0ZBRCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBpZD0icGF0aDBfZmlsbCIgZD0iTSA0Ny4yNTE1IDIzLjY4NTZDIDQ3LjI1MTUgMzYuNzY2OSAzNi42NzM5IDQ3LjM3MTMgMjMuNjI1NyA0Ny4zNzEzQyAxMC41Nzc2IDQ3LjM3MTMgMCAzNi43NjY5IDAgMjMuNjg1NkMgMCAxMC42MDQ0IDEwLjU3NzYgMCAyMy42MjU3IDBDIDM2LjY3MzkgMCA0Ny4yNTE1IDEwLjYwNDQgNDcuMjUxNSAyMy42ODU2WiIvPgo8cGF0aCBpZD0icGF0aDFfZmlsbCIgZD0iTSAxLjAwOTQ5IDE0LjE2MzhDIDEuMDA5NDkgMTUuNzkyNSAxLjQ2MTEgMTcuMTAwNiAyLjM2NDMzIDE4LjA4ODFDIDMuMjg1MjYgMTkuMDc1NyA0LjY3NTUyIDE5LjYyMTUgNi41MzUxIDE5LjcyNTRMIDYuNTM1MSAxMS4wNzEyTCA1LjI4NjUzIDEwLjc4NTNDIDQuNzE5OCAxMC42NjQgNC4xNTMwNyAxMC41MDgxIDMuNTg2MzQgMTAuMzE3NUMgMy4wMzczMiAxMC4xMDk2IDIuNTMyNTcgOS44NDEwNSAyLjA3MjExIDkuNTExODZDIDEuNjI5MzUgOS4xNjUzNSAxLjI2NjI5IDguNzMyMiAwLjk4MjkyMiA4LjIxMjQzQyAwLjcxNzI2OCA3LjY3NTMzIDAuNTg0NDQgNy4wMDgyOSAwLjU4NDQ0IDYuMjExM0MgMC41ODQ0NCA1LjkxNjc2IDAuNjI4NzE2IDUuNTA5NiAwLjcxNzI2OCA0Ljk4OTgzQyAwLjgwNTgxOSA0LjQ1MjczIDEuMDQ0OTEgMy45MTU2MyAxLjQzNDU0IDMuMzc4NTNDIDEuODQxODcgMi44NDE0MyAyLjQzNTE3IDIuMzczNjMgMy4yMTQ0MiAxLjk3NTE0QyA0LjAxMTM4IDEuNTU5MzIgNS4xMTgyOCAxLjMyNTQyIDYuNTM1MSAxLjI3MzQ1TCA2LjUzNTEgMEwgNy4zODUyIDBMIDcuMzg1MiAxLjI3MzQ1QyA5LjIyNzA3IDEuMzA4MSAxMC42OTcgMS43NzU4OSAxMS43OTUxIDIuNjc2ODRDIDEyLjg5MzEgMy41Nzc3OCAxMy40Nzc1IDUuMDE1ODIgMTMuNTQ4NCA2Ljk5MDk2TCAxMi41Mzg5IDYuOTkwOTZDIDEyLjQzMjYgNS4yOTMwMyAxMS45Mjc5IDQuMDg4ODkgMTEuMDI0NyAzLjM3ODUzQyAxMC4xMjE0IDIuNjUwODUgOC45MDgyOSAyLjI2OTY4IDcuMzg1MiAyLjIzNTAzTCA3LjM4NTIgMTAuMjkxNUwgOS40NTczMSAxMC43ODUzQyAxMC4zMjUxIDEwLjk5MzIgMTEuMDUxMiAxMS4yNjE4IDExLjYzNTcgMTEuNTkxQyAxMi4yMjAxIDExLjkwMjggMTIuNjg5NCAxMi4yNjY3IDEzLjA0MzYgMTIuNjgyNUMgMTMuMzk3OCAxMy4wODEgMTMuNjQ1OCAxMy41MjI4IDEzLjc4NzUgMTQuMDA3OUMgMTMuOTI5MiAxNC40NzU3IDE0IDE0Ljk3ODIgMTQgMTUuNTE1M0MgMTQgMTYuNDg1NSAxMy44MDUyIDE3LjI5OTggMTMuNDE1NiAxNy45NTgyQyAxMy4wNDM2IDE4LjU5OTIgMTIuNTQ3OCAxOS4xMjc3IDExLjkyNzkgMTkuNTQzNUMgMTEuMzA4IDE5Ljk0MiAxMC41OTk2IDIwLjIyNzkgOS44MDI2NiAyMC40MDExQyA5LjAwNTY5IDIwLjU5MTcgOC4xOTk4NyAyMC42OTU3IDcuMzg1MiAyMC43MTNMIDcuMzg1MiAyM0wgNi41MzUxIDIzTCA2LjUzNTEgMjAuNzEzQyA1LjU2MTA0IDIwLjYyNjQgNC42NjY2NyAyMC40NTMxIDMuODUxOTkgMjAuMTkzMkMgMy4wNTUwMyAxOS45MTYgMi4zNzMxOCAxOS41MTc1IDEuODA2NDUgMTguOTk3N0MgMS4yMzk3MiAxOC40NzggMC43OTY5NjQgMTcuODI4MiAwLjQ3ODE3OCAxNy4wNDg2QyAwLjE1OTM5MyAxNi4yNTE2IDAgMTUuMjkgMCAxNC4xNjM4TCAxLjAwOTQ5IDE0LjE2MzhaTSA2LjUzNTEgMTAuMDU3NkwgNi41MzUxIDIuMjYxMDJDIDUuNjMxODggMi4yOTU2NyA0Ljg3MDM0IDIuNDI1NjEgNC4yNTA0NyAyLjY1MDg1QyAzLjYzMDYxIDIuODU4NzYgMy4xMTcwMSAzLjEzNTk3IDIuNzA5NjggMy40ODI0OUMgMi4zMjAwNSAzLjgyOSAyLjAzNjY5IDQuMjM2MTYgMS44NTk1OCA0LjcwMzk1QyAxLjY4MjQ4IDUuMTcxNzUgMS41OTM5MyA1LjY3NDIgMS41OTM5MyA2LjIxMTNDIDEuNTkzOTMgNi44MTc3IDEuNjkxMzMgNy4zMjg4MSAxLjg4NjE1IDcuNzQ0NjNDIDIuMDk4NjcgOC4xNDMxMyAyLjM3MzE4IDguNDgwOTggMi43MDk2OCA4Ljc1ODE5QyAzLjA2Mzg4IDkuMDE4MDggMy40NzEyMiA5LjIzNDY1IDMuOTMxNjkgOS40MDc5MUMgNC40MDk4NyA5LjU2Mzg0IDQuOTE0NjEgOS43MDI0NSA1LjQ0NTkyIDkuODIzNzNMIDYuNTM1MSAxMC4wNTc2Wk0gNy4zODUyIDE5LjcyNTRDIDguMTQ2NzQgMTkuNzI1NCA4Ljg2NDAxIDE5LjY0NzUgOS41MzcgMTkuNDkxNUMgMTAuMjEgMTkuMzM1NiAxMC44MDMzIDE5LjA5MyAxMS4zMTY5IDE4Ljc2MzhDIDExLjgzMDUgMTguNDE3MyAxMi4yMzc4IDE3Ljk4NDIgMTIuNTM4OSAxNy40NjQ0QyAxMi44NCAxNi45MjczIDEyLjk5MDUgMTYuMjc3NiAxMi45OTA1IDE1LjUxNTNDIDEyLjk5MDUgMTQuNTI3NyAxMi42NzE3IDEzLjcyMiAxMi4wMzQyIDEzLjA5ODNDIDExLjM5NjYgMTIuNDc0NiAxMC4zODcxIDExLjk4OTUgOS4wMDU2OSAxMS42NDI5TCA3LjM4NTIgMTEuMjUzMUwgNy4zODUyIDE5LjcyNTRaIi8+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHRpdGxlPkdyb3VwIDEyPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB1c2luZyBGaWdtYTwvZGVzYz4KPGcgaWQ9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2NzYgLTE3OTkpIj4KPGcgaWQ9Ikdyb3VwIDEyIj4KPGcgaWQ9Ikdyb3VwIDkiPgo8ZyBpZD0iRWxsaXBzZSA4LjQiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMF9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjc2IDE3OTkpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjwvZz4KPGcgaWQ9ImZvdW50YWluLXBlbiI+CjxnIGlkPSJHcm91cCI+CjxnIGlkPSJHcm91cCI+CjxnIGlkPSJWZWN0b3IiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMV9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjkxLjQ0IDE4MTMpIiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgyX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OTkuNDIgMTgxMykiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8L2c+CjxnIGlkPSJWZWN0b3IiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoM19maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjk5LjQyIDE4MjIuNDUpIiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGg0X2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OTguMiAxODE5Ljk5KSIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnIGlkPSJWZWN0b3IiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoNV9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjkyLjIxIDE4MTMpIiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPC9nPgo8L2c+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIDQ2LjQ2NDYgLTQ2LjM0NzEgMCAyMy42MjU3IDI0LjU0MikiPgo8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzMzFENTAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjQ3RkFEIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSJNIDQ3LjI1MTUgMjMuNjg1NkMgNDcuMjUxNSAzNi43NjY5IDM2LjY3MzkgNDcuMzcxMyAyMy42MjU3IDQ3LjM3MTNDIDEwLjU3NzYgNDcuMzcxMyAwIDM2Ljc2NjkgMCAyMy42ODU2QyAwIDEwLjYwNDQgMTAuNTc3NiAwIDIzLjYyNTcgMEMgMzYuNjczOSAwIDQ3LjI1MTUgMTAuNjA0NCA0Ny4yNTE1IDIzLjY4NTZaIi8+CjxwYXRoIGlkPSJwYXRoMV9maWxsIiBkPSJNIDguMzE2NzQgMjIuOTk5OUMgOC4xMjY5NCAyMi45OTk5IDcuOTcyOSAyMi44NDM4IDcuOTcyOSAyMi42NTE0QyA3Ljk3MjkgMTQuOTUyNyAwLjE4Nzc0MiA3LjQ4MDU0IDAuMTA4NjU5IDcuNDA2NjZDIDAuMDI0NzYzIDcuMzI3MiAtMC4wMTQ0MzQ0IDcuMjEwMTEgMC4wMDQ4MjA0NyA3LjA5NTExQyAwLjAyNDA3NTQgNi45ODAxMSAwLjA5ODM0NDIgNi44ODE4NCAwLjIwMzU1OCA2LjgzNDQ1QyA1LjI2Mjc4IDQuNTM1ODUgMy45NDg2MyAwLjYzMTQ0OCAzLjg5MDE4IDAuNDY2MjY3QyAzLjgyNjIzIDAuMjg1MDU1IDMuOTE5MDYgMC4wODU3MjMgNC4wOTc4NiAwLjAyMDIwODFDIDQuMjc0NTkgLTAuMDQzOTEyOCA0LjQ3MzMzIDAuMDQ5NDgwNyA0LjUzNzk3IDAuMjMwNjkyQyA0LjU1Mzc5IDAuMjc1OTk1IDYuMDMyMjkgNC42NTY0MyAwLjkzODY4MiA3LjI1MTkzQyAyLjUyMzA4IDguODU3MDQgOC42NjA1OCAxNS41MzQ3IDguNjYwNTggMjIuNjUxNEMgOC42NjA1OCAyMi44NDM4IDguNTA2NTQgMjIuOTk5OSA4LjMxNjc0IDIyLjk5OTlaIi8+CjxwYXRoIGlkPSJwYXRoMl9maWxsIiBkPSJNIDAuMzQzODM3IDIyLjk5OTZDIDAuMTU0MDM5IDIyLjk5OTYgMCAyMi44NDM1IDAgMjIuNjUxMUMgMCAxNS41MzQ0IDYuMTM3NDkgOC44NTY3NyA3LjcyMjU4IDcuMjUxNjVDIDIuNjI4OTggNC42NTU0NiA0LjEwNzQ4IDAuMjc1NzE5IDQuMTIzMjkgMC4yMzA0MTZDIDQuMTg3MjUgMC4wNDkyMDQ3IDQuMzgzMjQgLTAuMDQzNDkxOCA0LjU2MjAzIDAuMDE5OTMyMUMgNC43NDAxNCAwLjA4NDc1IDQuODMzNjYgMC4yODMzODUgNC43NzEwOCAwLjQ2NTI5NEMgNC43MTMzMiAwLjYzMDQ3NSAzLjQxOTEyIDQuNTQ1MzMgOC40NTcwMiA2LjgzNDE3QyA4LjU2MjIzIDYuODgxNTcgOC42MzY1IDYuOTc5ODQgOC42NTU3NiA3LjA5NDg0QyA4LjY3NDMyIDcuMjA5ODQgOC42MzU4MSA3LjMyNjkzIDguNTUxOTIgNy40MDYzOEMgOC40NzI4MyA3LjQ4MDI2IDAuNjg3Njc0IDE0Ljk1OCAwLjY4NzY3NCAyMi42NTExQyAwLjY4NzY3NCAyMi44NDM1IDAuNTMzNjM1IDIyLjk5OTYgMC4zNDM4MzcgMjIuOTk5NloiLz4KPHBhdGggaWQ9InBhdGgzX2ZpbGwiIGQ9Ik0gMC4zNDM4MzcgMTMuNTQ5N0MgMC4xNTQwMzkgMTMuNTQ5NyAwIDEzLjM5MzYgMCAxMy4yMDEyTCAwIDAuMzQ4NDgzQyAwIDAuMTU2MTIgMC4xNTQwMzkgMS4wNjM0OWUtMDggMC4zNDM4MzcgMS4wNjM0OWUtMDhDIDAuNTMzNjM1IDEuMDYzNDllLTA4IDAuNjg3Njc0IDAuMTU2MTIgMC42ODc2NzQgMC4zNDg0ODNMIDAuNjg3Njc0IDEzLjIwMTJDIDAuNjg3Njc0IDEzLjM5MzYgMC41MzM2MzUgMTMuNTQ5NyAwLjM0MzgzNyAxMy41NDk3WiIvPgo8cGF0aCBpZD0icGF0aDRfZmlsbCIgZD0iTSAxLjU1NjIxIDMuMTU0NDdDIDAuNjk3OTg5IDMuMTU0NDcgMy4yMDAzOWUtMDcgMi40NDcwNSAzLjIwMDM5ZS0wNyAxLjU3NzkzQyAzLjIwMDM5ZS0wNyAwLjcwODExOCAwLjY5Nzk4OSAtNS4zMTc0M2UtMDkgMS41NTYyMSAtNS4zMTc0M2UtMDlDIDIuNDE0NDIgLTUuMzE3NDNlLTA5IDMuMTEyNDEgMC43MDgxMTggMy4xMTI0MSAxLjU3NzkzQyAzLjExMjQxIDIuNDQ3MDUgMi40MTQ0MiAzLjE1NDQ3IDEuNTU2MjEgMy4xNTQ0N1pNIDEuNTU2MjEgMC42OTY5NjZDIDEuMDc3NTkgMC42OTY5NjYgMC42ODc2NzUgMS4wOTE0NSAwLjY4NzY3NSAxLjU3NzkzQyAwLjY4NzY3NSAyLjA2MjMyIDEuMDc2OSAyLjQ1NzUgMS41NTYyMSAyLjQ1NzVDIDIuMDM1NTIgMi40NTc1IDIuNDI0NzQgMi4wNjMwMiAyLjQyNDc0IDEuNTc3OTNDIDIuNDI0NzQgMS4wOTIxNSAyLjAzNDgzIDAuNjk2OTY2IDEuNTU2MjEgMC42OTY5NjZaIi8+CjxwYXRoIGlkPSJwYXRoNV9maWxsIiBkPSJNIDE0Ljc1MDYgMC42OTY5NjZMIDAuMzQzODM3IDAuNjk2OTY2QyAwLjE1NDAzOSAwLjY5Njk2NiA2LjU1ODE3ZS0wOCAwLjU0MDg0NiA2LjU1ODE3ZS0wOCAwLjM0ODQ4M0MgNi41NTgxN2UtMDggMC4xNTYxMiAwLjE1NDAzOSAwIDAuMzQzODM3IDBMIDE0Ljc0OTkgMEMgMTQuOTM5NyAwIDE1LjA5MzggMC4xNTYxMiAxNS4wOTM4IDAuMzQ4NDgzQyAxNS4wOTM4IDAuNTQwODQ2IDE0Ljk0MDQgMC42OTY5NjYgMTQuNzUwNiAwLjY5Njk2NloiLz4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHRpdGxlPkdyb3VwIDEwPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB1c2luZyBGaWdtYTwvZGVzYz4KPGcgaWQ9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2NzYgLTIyMjUpIj4KPGcgaWQ9Ikdyb3VwIDEwIj4KPGcgaWQ9IkVsbGlwc2UgOC42Ij4KPHVzZSB4bGluazpocmVmPSIjcGF0aDBfZmlsbCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTcyMy4yNSAyMjI1KSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8L2c+CjxnIGlkPSJzcGVlY2gtYnViYmxlIj4KPGcgaWQ9Ikdyb3VwIj4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgxX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2ODcgMjIzNy4yMykiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8ZyBpZD0iVmVjdG9yIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDJfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcwNC45OSAyMjQ3LjAyKSIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnIGlkPSJWZWN0b3IiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoM19maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjk5LjE3IDIyNDcuMDIpIiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGg0X2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OTMuMzUgMjI0Ny4wMikiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8L2c+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIDQ2LjQ2NDYgLTQ2LjM0NzEgMCAyMy42MjU3IDI0LjU0MikiPgo8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzMzFENTAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjQ3RkFEIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSJNIDQ3LjI1MTUgMjMuNjg1NkMgNDcuMjUxNSAzNi43NjY5IDM2LjY3MzkgNDcuMzcxMyAyMy42MjU3IDQ3LjM3MTNDIDEwLjU3NzYgNDcuMzcxMyAwIDM2Ljc2NjkgMCAyMy42ODU2QyAwIDEwLjYwNDQgMTAuNTc3NiAwIDIzLjYyNTcgMEMgMzYuNjczOSAwIDQ3LjI1MTUgMTAuNjA0NCA0Ny4yNTE1IDIzLjY4NTZaIi8+CjxwYXRoIGlkPSJwYXRoMV9maWxsIiBkPSJNIDUuNzIwOTkgMjVDIDUuNjU3MzUgMjUgNS41OTI5MyAyNC45ODQ2IDUuNTM0NzkgMjQuOTUzN0MgNS40MDc1MiAyNC44ODY2IDUuMzI4MTcgMjQuNzU1NSA1LjMyODE3IDI0LjYxNDNMIDUuMzI4MTcgMTkuMTE5NUMgMS44ODk0NSAxNy4zNjM5IDAgMTQuMjkwMiAwIDEwLjQzOUMgMCA0LjQ4NzU0IDUuNTcyNSAtMS44Mzg5N2UtMTAgMTIuOTYzIC0xLjgzODk3ZS0xMEMgMjAuMzUzNCAtMS44Mzg5N2UtMTAgMjUuOTI1OSA0LjQ4NzU0IDI1LjkyNTkgMTAuNDM5QyAyNS45MjU5IDE2LjM4OTggMjAuMzUzNCAyMC44NzczIDEyLjk2MyAyMC44NzczQyAxMi43MjAyIDIwLjg3NzMgMTIuNDgyMiAyMC44NjQyIDEyLjI0MzMgMjAuODUxOEwgMTIuMjI3NiAyMC44NTExTCA1LjkzNzA0IDI0LjkzNkMgNS44NzE4MyAyNC45Nzg0IDUuNzk2NDEgMjUgNS43MjA5OSAyNVpNIDEyLjk2MyAwLjc3MTMxOUMgNi4wMjExIDAuNzcxMzE5IDAuNzg1NjM0IDQuOTI3OTYgMC43ODU2MzQgMTAuNDM5QyAwLjc4NTYzNCAxMy4wMDIxIDEuNjcxODMgMTYuNDg3NyA1Ljg5NDYxIDE4LjUzNzFDIDYuMDI4MTcgMTguNjAxOSA2LjExMzAyIDE4LjczNjEgNi4xMTMwMiAxOC44ODI3TCA2LjExMzAyIDIzLjg5N0wgMTEuOTAyNCAyMC4xMzc2QyAxMS45NzMxIDIwLjA5MTMgMTIuMDU4NyAyMC4wNjQzIDEyLjEzOTYgMjAuMDc0NEwgMTIuMjg1NyAyMC4wODIxQyAxMi41MTA0IDIwLjA5NDQgMTIuNzM0MyAyMC4xMDYgMTIuOTYyMiAyMC4xMDZDIDE5LjkwNCAyMC4xMDYgMjUuMTM5NSAxNS45NTAxIDI1LjEzOTUgMTAuNDM5QyAyNS4xMzk1IDQuOTI3OTYgMTkuOTA0OCAwLjc3MTMxOSAxMi45NjMgMC43NzEzMTlaIi8+CjxwYXRoIGlkPSJwYXRoMl9maWxsIiBkPSJNIDAuNzk1ODQ4IDEuNTYyNjlDIDEuMjM1MzggMS41NjI2OSAxLjU5MTcgMS4yMTI4NyAxLjU5MTcgMC43ODEzNDdDIDEuNTkxNyAwLjM0OTgyMSAxLjIzNTM4IDAgMC43OTU4NDggMEMgMC4zNTYzMTMgMCAwIDAuMzQ5ODIxIDAgMC43ODEzNDdDIDAgMS4yMTI4NyAwLjM1NjMxMyAxLjU2MjY5IDAuNzk1ODQ4IDEuNTYyNjlaIi8+CjxwYXRoIGlkPSJwYXRoM19maWxsIiBkPSJNIDAuNzk1ODQ3IDEuNTYyNjlDIDEuMjM1MzggMS41NjI2OSAxLjU5MTcgMS4yMTI4NyAxLjU5MTcgMC43ODEzNDdDIDEuNTkxNyAwLjM0OTgyMSAxLjIzNTM4IDAgMC43OTU4NDcgMEMgMC4zNTYzMTMgMCAwIDAuMzQ5ODIxIDAgMC43ODEzNDdDIDAgMS4yMTI4NyAwLjM1NjMxMyAxLjU2MjY5IDAuNzk1ODQ3IDEuNTYyNjlaIi8+CjxwYXRoIGlkPSJwYXRoNF9maWxsIiBkPSJNIDAuNzk1ODQ3IDEuNTYyNjlDIDEuMjM1MzggMS41NjI2OSAxLjU5MTY5IDEuMjEyODcgMS41OTE2OSAwLjc4MTM0N0MgMS41OTE2OSAwLjM0OTgyMSAxLjIzNTM4IDAgMC43OTU4NDcgMEMgMC4zNTYzMTMgMCAwIDAuMzQ5ODIxIDAgMC43ODEzNDdDIDAgMS4yMTI4NyAwLjM1NjMxMyAxLjU2MjY5IDAuNzk1ODQ3IDEuNTYyNjlaIi8+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 0;\n  margin-bottom: 0;\n\n  ', ';\n'], ['\n  margin-top: 0;\n  margin-bottom: 0;\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin: 0;\n  '], ['\n    margin: 0;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    // position: absolute;\n    top: 64px;\n    left: 0;\n    right: 0;\n  '], ['\n    // position: absolute;\n    top: 64px;\n    left: 0;\n    right: 0;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    padding: 32px 0;\n  '], ['\n    padding: 32px 0;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Team = __webpack_require__(5);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Roadmap = __webpack_require__(44);

var _roadmap = __webpack_require__(46);

var _roadmap2 = _interopRequireDefault(_roadmap);

var _roadmap_mobile = __webpack_require__(47);

var _roadmap_mobile2 = _interopRequireDefault(_roadmap_mobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Bg = _styledComponents2.default.div.withConfig({
  displayName: '03_Roadmap__Bg',
  componentId: 'wbhvi8-0'
})(['background:linear-gradient(180deg,#331d50 51.81%,#247fad 149.89%);']);

var Root = _styledComponents2.default.section.withConfig({
  displayName: '03_Roadmap__Root',
  componentId: 'wbhvi8-1'
})(['', ';position:relative;h1{color:#fff;}'], _styles.container);

var Container = _Team.Container.extend(_templateObject, _styles.m.lessThan('small')(_templateObject2));

var Small = _styledComponents2.default.p.withConfig({
  displayName: '03_Roadmap__Small',
  componentId: 'wbhvi8-2'
})(['font-weight:700;font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;margin:0 0 4px 0;']);

var Headline = _styledComponents2.default.div.withConfig({
  displayName: '03_Roadmap__Headline',
  componentId: 'wbhvi8-3'
})(['padding:64px 0 32px 0;', ';', ';'], _styles.m.greaterThan('small')(_templateObject3), _styles.m.lessThan('small')(_templateObject4));

// const Roadmaps = styled.div`
//   img {
//     width: 100%;
//   }

//   .desktop {
//     ${m.lessThan('small')`
//       display: none;
//     `};
//   }

//   .mobile {
//     ${m.greaterThan('small')`
//       display: none;
//     `};
//   }
// `
// <Roadmaps>
// <img src={roadmap} className="desktop" />
// <img src={roadmapMobile} className="mobile" />
// </Roadmaps>

var Roadmap = function Roadmap(p) {
  return _react2.default.createElement(
    Bg,
    null,
    _react2.default.createElement(
      Root,
      p,
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          Headline,
          null,
          _react2.default.createElement(
            Small,
            null,
            'Decentralization Plan'
          ),
          _react2.default.createElement(
            _Heading2.default,
            null,
            'DEIP Roadmap'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Roadmap.Main,
            null,
            _react2.default.createElement(
              _Roadmap.Section,
              null,
              _react2.default.createElement(_Roadmap.Entry, { done: true, label: 'September 2017', text: 'New protocol design initiated. Started work on new white-paper' }),
              _react2.default.createElement(_Roadmap.Entry, { done: true, label: 'August 2017', text: 'Infrastructure change initiated. WP for initial protocol design finished.Graphene infrastructure adjustment' }),
              _react2.default.createElement(_Roadmap.Entry, { done: true, label: 'July 2017', text: 'Initial protocol design. Proof-of-concept smart-contracts implementation' })
            ),
            _react2.default.createElement(
              _Roadmap.Section,
              null,
              _react2.default.createElement(_Roadmap.Entry, { done: true, label: 'October 2017', text: 'Protocol final design' }),
              _react2.default.createElement(_Roadmap.Entry, { done: true, label: 'November 2017', text: 'Architecture design finished. WP finished' }),
              _react2.default.createElement(_Roadmap.Entry, { done: true, label: 'December 2017', text: 'Graphene framework initial setup. Refactoring. Infrastructure setup' })
            ),
            _react2.default.createElement(
              _Roadmap.Section,
              null,
              _react2.default.createElement(_Roadmap.Entry, { label: 'March 2018', text: 'Test-net launch. Alfa-version of UI release. Wallet UI release (for testnet)' }),
              _react2.default.createElement(_Roadmap.Entry, { label: 'February 2018', text: 'Emission distribution system completed' }),
              _react2.default.createElement(_Roadmap.Entry, { label: 'January 2018', text: '[SHOULDBECHANGED] Blockchaine developer' })
            ),
            _react2.default.createElement(
              _Roadmap.Section,
              null,
              _react2.default.createElement(_Roadmap.Entry, { label: 'April 2018', text: 'Research Platform Beta UI Launch' }),
              _react2.default.createElement(_Roadmap.Entry, { label: 'May 2018', text: 'Expertise tokens distribution' }),
              _react2.default.createElement(_Roadmap.Entry, { label: 'June 2018', text: 'Main-net launch. Initial expertise tokens distribution. Initial research publishing preparation. ' })
            ),
            _react2.default.createElement(
              _Roadmap.Section,
              null,
              _react2.default.createElement(_Roadmap.Entry, { label: 'September 2018', text: 'Storage sidechain for research data (beta-version). Disciplines expansion system implementation' }),
              _react2.default.createElement(_Roadmap.Entry, { label: 'August 2018', text: '[SHOULDBECHANGED] Expertise tokens monthly awards for best researchers based on expertise voting (beta-version). ' }),
              _react2.default.createElement(_Roadmap.Entry, { label: 'July 2018', text: 'Platform launch' })
            ),
            _react2.default.createElement(
              _Roadmap.Section,
              null,
              _react2.default.createElement(_Roadmap.Entry, { label: 'October 2018', text: 'Scientific Resources marketplace (beta-version)' }),
              _react2.default.createElement(_Roadmap.Entry, { label: 'November 2018', text: 'Funding Agency DAO (beta-version). Research tokens Hedge-fund initial implementation' }),
              _react2.default.createElement(_Roadmap.Entry, { label: 'December 2018', text: 'Target trade volume $10mln per day' })
            )
          )
        )
      )
    )
  );
};

exports.default = Roadmap;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ashkor.7ff44c16.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/etsaryk.052cb4d2.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/aermolaev.bf4059ea.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/akulik.39060d33.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/arusetskiy.f6875500.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/akulichkin.5d20cb3b.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/nsvyaznoy.aa798147.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/emarushko.9a95db57.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popup = exports.Entry = exports.Section = exports.Main = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    background: transparent;\n\n    &:after {\n      content: \'\';\n      position: absolute;\n      border-radius: 3px;\n      background: rgba(255,255,255,0.2);\n      left: calc(25% + 24px);\n      top: 0;\n      width: 6px;\n      height: 100%;\n    }\n  '], ['\n    background: transparent;\n\n    &:after {\n      content: \'\';\n      position: absolute;\n      border-radius: 3px;\n      background: rgba(255,255,255,0.2);\n      left: calc(25% + 24px);\n      top: 0;\n      width: 6px;\n      height: 100%;\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    flex-flow: column;\n    height: auto;\n  '], ['\n    flex-flow: column;\n    height: auto;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    flex-flow: row;\n    top: auto;\n    width: 100%;\n    min-width: 100%;\n    padding: 36px 0;\n  '], ['\n    flex-flow: row;\n    top: auto;\n    width: 100%;\n    min-width: 100%;\n    padding: 36px 0;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    text-align: right;\n    min-width: 25%;\n    margin: 0;\n  '], ['\n    text-align: right;\n    min-width: 25%;\n    margin: 0;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    margin: 0 16px;\n  '], ['\n    margin: 0 16px;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    text-align: left;\n    margin: 0;\n  '], ['\n    text-align: left;\n    margin: 0;\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    flex-flow: row-reverse;\n    justify-content: flex-end;\n    top: auto;\n    padding: 16px 0;\n    left: calc(25% + 24px);\n  '], ['\n    flex-flow: row-reverse;\n    justify-content: flex-end;\n    top: auto;\n    padding: 16px 0;\n    left: calc(25% + 24px);\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    border-left: 16px solid transparent;\n    border-right: 16px solid transparent;\n    border-top: 16px solid rgba(255, 255, 255, 0.1);\n    width: 0;\n    height: 0;\n    margin-top: 8px;\n  '], ['\n    border-left: 16px solid transparent;\n    border-right: 16px solid transparent;\n    border-top: 16px solid rgba(255, 255, 255, 0.1);\n    width: 0;\n    height: 0;\n    margin-top: 8px;\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    border-top: 16px solid transparent;\n    border-bottom: 16px solid transparent;\n    border-right: 16px solid rgba(255,255,255,0.1);\n    width: 0;\n    height: 0;\n    margin-right: 8px;\n  '], ['\n    border-top: 16px solid transparent;\n    border-bottom: 16px solid transparent;\n    border-right: 16px solid rgba(255,255,255,0.1);\n    width: 0;\n    height: 0;\n    margin-right: 8px;\n  ']),
    _templateObject10 = _taggedTemplateLiteral(['\n    margin-top: 0;\n    margin-right: 16px;\n  '], ['\n    margin-top: 0;\n    margin-right: 16px;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _bg = __webpack_require__(45);

var _bg2 = _interopRequireDefault(_bg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Main = exports.Main = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__Main',
  componentId: 's1kjkxpd-0'
})(['overflow:hidden;position:relative;background-image:url(', ');background-repeat:repeat-y;background-size:100% 411px;', ';'], _bg2.default, _styles.m.lessThan('small')(_templateObject));

var Section = exports.Section = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__Section',
  componentId: 's1kjkxpd-1'
})(['position:relative;display:flex;justify-content:space-around;height:', 'px;', ';'], 411 / 2, _styles.m.lessThan('small')(_templateObject2));

var EntryRoot = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__EntryRoot',
  componentId: 's1kjkxpd-2'
})(['position:relative;display:flex;flex-flow:column;align-items:center;color:#fff;top:52px;width:25%;min-width:25%;height:100%;opacity:', ';', ';'], function (p) {
  return p.done ? '0.2' : '1';
}, _styles.m.lessThan('small')(_templateObject3));

var EntryLabel = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__EntryLabel',
  componentId: 's1kjkxpd-3'
})(['font-weight:700;text-align:center;line-height:1.5;text-transform:uppercase;margin-bottom:16px;', ';'], _styles.m.lessThan('small')(_templateObject4));

var EntryPoint = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__EntryPoint',
  componentId: 's1kjkxpd-4'
})(['border-radius:100%;background:#fff;width:22px;height:22px;min-width:22px;min-height:22px;box-shadow:0px 4px 4px rgba(0,0,0,0.25);', ';'], _styles.m.lessThan('small')(_templateObject5));

var EntryText = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__EntryText',
  componentId: 's1kjkxpd-5'
})(['font-size:12px;line-height:1.5;text-align:center;margin:16px 0 0 0;', ';'], _styles.m.lessThan('small')(_templateObject6));

var Entry = exports.Entry = function Entry(_ref) {
  var done = _ref.done,
      label = _ref.label,
      text = _ref.text;
  return _react2.default.createElement(
    EntryRoot,
    { done: done },
    _react2.default.createElement(
      EntryLabel,
      null,
      label
    ),
    _react2.default.createElement(EntryPoint, null),
    _react2.default.createElement(
      EntryText,
      null,
      text
    )
  );
};

var PopupRoot = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__PopupRoot',
  componentId: 's1kjkxpd-6'
})(['position:relative;display:flex;flex-flow:column;align-items:center;text-align:center;color:#fff;top:-38px;height:100%;opacity:', ';', ';'], function (p) {
  return p.done ? '0.2' : '1';
}, _styles.m.lessThan('small')(_templateObject7));

var PopupContent = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__PopupContent',
  componentId: 's1kjkxpd-7'
})(['width:150px;min-width:150px;']);

var PopupLabel = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__PopupLabel',
  componentId: 's1kjkxpd-8'
})(['background:', ';font-weight:400;font-size:15px;color:', ';height:24px;min-height:24px;line-height:24px;width:100%;'], function (p) {
  return p.accent ? '#e71d36' : '#fff';
}, function (p) {
  return p.accent ? '#fff' : p.theme.palette.primary;
});

var PopupText = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__PopupText',
  componentId: 's1kjkxpd-9'
})(['background:rgba(255,255,255,0.1);font-weight:300;font-size:18px;height:72px;line-height:72px;width:100%;']);

var PopupArrow = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__PopupArrow',
  componentId: 's1kjkxpd-10'
})(['', ';', ';'], _styles.m.greaterThan('small')(_templateObject8), _styles.m.lessThan('small')(_templateObject9));

var PopupPoint = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__PopupPoint',
  componentId: 's1kjkxpd-11'
})(['border-radius:100%;background:', ';width:9px;min-width:9px;height:9px;min-height:9px;margin-top:16px;', ';'], function (p) {
  return p.accent ? '#e71d36' : '#fff';
}, _styles.m.lessThan('small')(_templateObject10));

var Popup = exports.Popup = function Popup(_ref2) {
  var done = _ref2.done,
      accent = _ref2.accent,
      label = _ref2.label,
      text = _ref2.text;
  return _react2.default.createElement(
    PopupRoot,
    { done: done },
    _react2.default.createElement(
      PopupContent,
      null,
      _react2.default.createElement(
        PopupLabel,
        { accent: accent },
        label
      ),
      _react2.default.createElement(
        PopupText,
        null,
        text
      )
    ),
    _react2.default.createElement(PopupArrow, null),
    _react2.default.createElement(PopupPoint, { accent: accent })
  );
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bg.ebfd0c34.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/roadmap.b1d587c0.svg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/roadmap_mobile.6eedd7c7.svg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    flex-flow: column;\n    align-items: center;\n    justify-content: flex-start;\n  '], ['\n    flex-flow: column;\n    align-items: center;\n    justify-content: flex-start;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Team = __webpack_require__(5);

var _ayantsevich = __webpack_require__(49);

var _ayantsevich2 = _interopRequireDefault(_ayantsevich);

var _dklevzhits = __webpack_require__(50);

var _dklevzhits2 = _interopRequireDefault(_dklevzhits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Block = exports.Block = _styledComponents2.default.div.withConfig({
  displayName: '05_Advisors__Block',
  componentId: 'rp4yn6-0'
})(['display:flex;justify-content:space-around;&:first-of-type{margin-top:48px;}', ';'], _styles.m.lessThan('small')(_templateObject));

var persons = [{ src: _ayantsevich2.default, name: 'Aleksei Yantsevich', role: 'SENIOR RESEARCHER IN BIOORGANIC CHEMISTRY, PhD' }, { src: _dklevzhits2.default, name: 'Dmitry Klevzhits', role: 'PhD IN ECONOMICS', linkedin: 'https://www.linkedin.com/in/dmitry-klevzhits-25917413/' }];

var Advisors = function Advisors(p) {
  return _react2.default.createElement(
    _Team.Root,
    p,
    _react2.default.createElement(
      _Team.Container,
      null,
      _react2.default.createElement(
        _Heading2.default,
        null,
        'Advisors'
      ),
      _react2.default.createElement(
        _Heading2.default,
        { type: 'sub' },
        'Who\'s mentored DEIP platform'
      ),
      _react2.default.createElement(
        Block,
        null,
        persons.map(function (p) {
          return _react2.default.createElement(_Team.Person, _extends({ special: true }, p, { key: p.name }));
        })
      )
    )
  );
};

exports.default = Advisors;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ayantsevich.ac4ef1f3.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/dklevzhits.fba700ae.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    flex-flow: column;\n    align-items: center;\n    margin-top: 64px;\n  '], ['\n    flex-flow: column;\n    align-items: center;\n    margin-top: 64px;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin-right: 64px;\n  '], ['\n    margin-right: 64px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 100%;\n    margin-top: 24px;\n  '], ['\n    width: 100%;\n    margin-top: 24px;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Person = __webpack_require__(15);

var _Person2 = _interopRequireDefault(_Person);

var _MessageBox = __webpack_require__(52);

var _MessageBox2 = _interopRequireDefault(_MessageBox);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Team = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ph = 'http://via.placeholder.com/350/eee/777?text=Person';

var lorem = '\nNullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien.\n';

var responses = [{
  src: ph,
  href: '#1',
  name: 'Name',
  role: 'Role',
  body: 'lorem ipsum',
  linkedin: 'src',
  github: 'src'
}, {
  src: ph,
  href: '#2',
  name: 'Name',
  role: 'Role',
  body: 'lorem ipsum',
  linkedin: 'src',
  github: 'src'
}, {
  src: ph,
  href: '#3',
  name: 'Name',
  role: 'Role',
  body: 'lorem ipsum',
  linkedin: 'src',
  github: 'src'
}];

var Block = _styledComponents2.default.div.withConfig({
  displayName: '06_Researchers__Block',
  componentId: 's1edbvcz-0'
})(['display:flex;margin-top:64px;', ';'], _styles.m.lessThan('small')(_templateObject));

var Person = (0, _styledComponents2.default)(_Person2.default).withConfig({
  displayName: '06_Researchers__Person',
  componentId: 's1edbvcz-1'
})(['', ';'], _styles.m.greaterThan('small')(_templateObject2));

var MessageBox = (0, _styledComponents2.default)(_MessageBox2.default).withConfig({
  displayName: '06_Researchers__MessageBox',
  componentId: 's1edbvcz-2'
})(['width:', '%;', ';'], 100 * 5 / 8, _styles.m.lessThan('small')(_templateObject3));

var Button = (0, _styledComponents2.default)(_Button2.default).withConfig({
  displayName: '06_Researchers__Button',
  componentId: 's1edbvcz-3'
})(['margin-top:48px;']);

var Researchers = function Researchers(p) {
  return _react2.default.createElement(
    _Team.Root,
    p,
    _react2.default.createElement(
      _Team.Container,
      null,
      _react2.default.createElement(
        _Heading2.default,
        null,
        'Researchers'
      ),
      _react2.default.createElement(
        _Heading2.default,
        { type: 'sub' },
        'Who is using DEIP platform'
      ),
      responses.map(function (r) {
        return _react2.default.createElement(
          Block,
          { key: r.href },
          _react2.default.createElement(Person, { src: r.src, github: r.github, linkedin: r.linkedin }),
          _react2.default.createElement(
            MessageBox,
            { href: r.href, name: r.name, role: r.role },
            lorem
          )
        );
      }),
      _react2.default.createElement(
        Button,
        { to: '/' },
        'All researches'
      )
    )
  );
};

exports.default = Researchers;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: none;\n  '], ['\n    display: none;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Text = __webpack_require__(7);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'MessageBox__Root',
  componentId: 'fke2c5-0'
})(['border:1px solid ', ';border-radius:4px;position:relative;text-align:left;p:first-child{font-weight:500;}p:not(:nth-child(3)){margin:0;}p:nth-child(3){padding-top:8px;margin:0;}'], function (p) {
  return p.theme.palette.primaryLight;
});

var Content = _styledComponents2.default.div.withConfig({
  displayName: 'MessageBox__Content',
  componentId: 'fke2c5-1'
})(['padding:16px 24px;']);

var ArrowLeft = _styledComponents2.default.div.withConfig({
  displayName: 'MessageBox__ArrowLeft',
  componentId: 'fke2c5-2'
})(['position:absolute;background:#fff;top:65px;', ';&:after,&:before{right:100%;top:50%;border:solid transparent;content:\' \';height:0;width:0;position:absolute;pointer-events:none;}&:after{border-color:rgba(255,255,255,0);border-right-color:#fff;border-width:10px;margin-top:-10px;}&:before{border-color:rgba(', ');border-right-color:', ';border-width:11px;margin-top:-11px;}'], _styles.m.lessThan('small')(_templateObject), function (p) {
  return p.theme.palette.primaryLight;
}, function (p) {
  return p.theme.palette.primaryLight;
});

var ArrowTop = _styledComponents2.default.div.withConfig({
  displayName: 'MessageBox__ArrowTop',
  componentId: 'fke2c5-3'
})(['position:absolute;background:#fff;left:50%;', ';&:after,&:before{bottom:100%;left:50%;border:solid transparent;content:\' \';height:0;width:0;position:absolute;pointer-events:none;}&:after{border-color:rgba(255,255,255,0);border-bottom-color:#fff;border-width:10px;margin-left:-10px;}&:before{border-color:rgba(', ');border-bottom-color:', ';border-width:11px;margin-left:-11px;}'], _styles.m.greaterThan('small')(_templateObject), function (p) {
  return p.theme.palette.primaryLight;
}, function (p) {
  return p.theme.palette.primaryLight;
});

var MessageBox = function MessageBox(_ref) {
  var name = _ref.name,
      role = _ref.role,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['name', 'role', 'children']);

  return _react2.default.createElement(
    Root,
    rest,
    _react2.default.createElement(ArrowTop, null),
    _react2.default.createElement(ArrowLeft, null),
    _react2.default.createElement(
      Content,
      null,
      _react2.default.createElement(
        _Text2.default,
        null,
        name
      ),
      _react2.default.createElement(
        _Text2.default,
        { type: 'small' },
        role
      ),
      _react2.default.createElement(
        _Text2.default,
        null,
        children
      )
    )
  );
};

MessageBox.propTypes = {
  name: _propTypes2.default.string.isRequired,
  role: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = MessageBox;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 0;\n  margin-bottom: 0;\n\n  ', ';\n'], ['\n  margin-top: 0;\n  margin-bottom: 0;\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin: 0;\n  '], ['\n    margin: 0;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: calc(100% / 2 - 32px);\n  '], ['\n    width: calc(100% / 2 - 32px);\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Team = __webpack_require__(5);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Partner = __webpack_require__(54);

var _Partner2 = _interopRequireDefault(_Partner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ph = 'http://via.placeholder.com/350x150?text=Partner';

var Bg = _styledComponents2.default.div.withConfig({
  displayName: '07_Partners__Bg',
  componentId: 's1qlodpf-0'
})(['background:', ';'], function (p) {
  return p.theme.palette.background.primary;
});

var Root = _styledComponents2.default.section.withConfig({
  displayName: '07_Partners__Root',
  componentId: 's1qlodpf-1'
})(['', ';padding:64px 0;'], _styles.container);

var Container = _Team.Container.extend(_templateObject, _styles.m.lessThan('small')(_templateObject2));

var Block = _styledComponents2.default.div.withConfig({
  displayName: '07_Partners__Block',
  componentId: 's1qlodpf-2'
})(['display:flex;flex-wrap:wrap;align-items:center;justify-content:center;margin-top:32px;margin-left:-16px;margin-right:-16px;']);

var Partner = (0, _styledComponents2.default)(_Partner2.default).withConfig({
  displayName: '07_Partners__Partner',
  componentId: 's1qlodpf-3'
})(['width:calc(100% / 3 - 32px);margin:16px;', ';'], _styles.m.lessThan('small')(_templateObject3));

var Partners = function Partners(p) {
  return _react2.default.createElement(
    Bg,
    null,
    _react2.default.createElement(
      Root,
      p,
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          _Heading2.default,
          null,
          'Our partners'
        ),
        _react2.default.createElement(
          _Heading2.default,
          { type: 'sub' },
          'Change me'
        ),
        _react2.default.createElement(
          Block,
          null,
          _react2.default.createElement(Partner, { src: ph, href: '#' }),
          _react2.default.createElement(Partner, { src: ph, href: '#' }),
          _react2.default.createElement(Partner, { src: ph, href: '#' }),
          _react2.default.createElement(Partner, { src: ph, href: '#' }),
          _react2.default.createElement(Partner, { src: ph, href: '#' })
        )
      )
    )
  );
};

exports.default = Partners;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Root = _styledComponents2.default.a.withConfig({
  displayName: 'Partner__Root',
  componentId: 's1oj3c0q-0'
})(['opacity:0.3;transition:opacity 0.3s;&:hover{opacity:1;}']);

var Img = _styledComponents2.default.img.withConfig({
  displayName: 'Partner__Img',
  componentId: 's1oj3c0q-1'
})(['width:100%;']);

var Partner = function Partner(_ref) {
  var src = _ref.src,
      href = _ref.href,
      rest = _objectWithoutProperties(_ref, ['src', 'href']);

  return _react2.default.createElement(
    Root,
    _extends({ href: href }, rest),
    _react2.default.createElement(Img, { src: src })
  );
};

Partner.propTypes = {
  src: _propTypes2.default.string.isRequired,
  href: _propTypes2.default.string.isRequired
};

exports.default = Partner;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Team = __webpack_require__(5);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Mention = __webpack_require__(56);

var _Mention2 = _interopRequireDefault(_Mention);

var _icon_meduza = __webpack_require__(57);

var _icon_meduza2 = _interopRequireDefault(_icon_meduza);

var _icon_medium = __webpack_require__(58);

var _icon_medium2 = _interopRequireDefault(_icon_medium);

var _icon_tj = __webpack_require__(59);

var _icon_tj2 = _interopRequireDefault(_icon_tj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mentions = [{
  src: _icon_meduza2.default,
  href: '#',
  children: '“Creating a first Product Design System in ...” – Medium (@toommycash)'
}, {
  src: _icon_medium2.default,
  href: '#',
  children: '“Дудь стал лицом «Альфа-банка» на год ...” – TJ'
}, {
  src: _icon_tj2.default,
  href: '#',
  children: '“Дудь стал лицом «Альфа-банка» на год ...” – TJ'
}];

var Button = (0, _styledComponents2.default)(_Button2.default).withConfig({
  displayName: '08_Media__Button',
  componentId: 's1ci9knk-0'
})(['margin-top:48px;']);

var Mention = (0, _styledComponents2.default)(_Mention2.default).withConfig({
  displayName: '08_Media__Mention',
  componentId: 's1ci9knk-1'
})(['margin-top:32px;']);

var Media = function Media(p) {
  return _react2.default.createElement(
    _Team.Root,
    p,
    _react2.default.createElement(
      _Team.Container,
      null,
      _react2.default.createElement(
        _Heading2.default,
        null,
        'Media'
      ),
      _react2.default.createElement(
        _Heading2.default,
        { type: 'sub' },
        'Change me'
      ),
      _react2.default.createElement(
        Mention,
        { src: _icon_meduza2.default, href: '#' },
        '\u201CCreating a first Product Design System in ...\u201D \u2013 Medium (@toommycash)'
      ),
      _react2.default.createElement(
        Mention,
        { src: _icon_medium2.default, href: '#' },
        '\u201CCreating a first Product Design System in ...\u201D \u2013 Medium (@toommycash)'
      ),
      _react2.default.createElement(
        Mention,
        { src: _icon_tj2.default, href: '#' },
        '\u201CCreating a first Product Design System in ...\u201D \u2013 Medium (@toommycash)'
      ),
      _react2.default.createElement(
        Button,
        { to: '/' },
        'Show more'
      )
    )
  );
};

exports.default = Media;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Text = __webpack_require__(7);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Root = _styledComponents2.default.a.withConfig({
  displayName: 'Mention__Root',
  componentId: 's19omwv3-0'
})(['display:flex;align-items:center;border-radius:4px;border:1px solid ', ';text-align:left;text-decoration:none;padding:24px 32px;transition:background 0.15s,border 0.15s;&:hover{background:', ';border:1px solid ', ';}p{margin:0;transition:color 0.15s;}'], function (p) {
  return p.theme.palette.primaryLight;
}, function (p) {
  return p.theme.palette.background.primary;
}, function (p) {
  return p.theme.palette.primary;
});

var Icon = _styledComponents2.default.img.withConfig({
  displayName: 'Mention__Icon',
  componentId: 's19omwv3-1'
})(['width:32px;margin-right:32px;']);

var Mention = function Mention(_ref) {
  var src = _ref.src,
      href = _ref.href,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['src', 'href', 'children']);

  return _react2.default.createElement(
    Root,
    _extends({ href: href }, rest),
    _react2.default.createElement(Icon, { src: src }),
    _react2.default.createElement(
      _Text2.default,
      null,
      children
    )
  );
};

Mention.propTypes = {
  src: _propTypes2.default.string.isRequired,
  href: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = Mention;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCA0NiAyNyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHRpdGxlPk1lZHV6YV9sb2dvPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB1c2luZyBGaWdtYTwvZGVzYz4KPGcgaWQ9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4NSAtNjg2OSkiPgo8ZyBpZD0iTWVkdXphX2xvZ28iPgo8ZyBpZD0iSW1wb3J0ZWQgTGF5ZXJzIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDBfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg1IDY4NjkpIiBmaWxsPSIjMzMxRDUwIi8+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8cGF0aCBpZD0icGF0aDBfZmlsbCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNIDE4Ljg3MyA3LjA1NTc1TCAxOC44NzMgMjQuNDU5OUwgMjcuMTI3IDI3TCAyNy4xMjcgNy4wNTU3NUwgMzIuNDM2NSA3LjA1NTc1TCAzMi40MzY1IDI0LjQ1OTlMIDQwLjY0MjIgMjdMIDQ2IDE5Ljk0NDNMIDQwLjY5MDQgMTkuOTQ0M0wgNDAuNjkwNCAyLjc3NTI2TCAzMi40ODQ4IDBMIDI3LjEyNyA2LjExNDk4TCAyNy4xMjcgMi43NzUyNkwgMTguOTIxMyAwTCAxMy41NjM1IDYuMTE0OThMIDEzLjU2MzUgMi43NzUyNkwgNS4zNTc4MiAwTCAwIDcuMDU1NzVMIDUuMzA5NTUgNy4wNTU3NUwgNS4zMDk1NSAyNC40NTk5TCAxMy41NjM1IDI3TCAxMy41NjM1IDcuMDU1NzVMIDE4Ljg3MyA3LjA1NTc1WiIvPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAzMiAyOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHRpdGxlPiYjMjM5OyYjMTM2OyYjMTg2OzwvdGl0bGU+CjxkZXNjPkNyZWF0ZWQgdXNpbmcgRmlnbWE8L2Rlc2M+CjxnIGlkPSJDYW52YXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOTUgLTY2MDUpIj4KPGcgaWQ9IiYjMjM5OyYjMTM2OyYjMTg2OyI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgwX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5NSA2NjA1LjA0KSIgZmlsbD0iIzMzMUQ1MCIvPgo8L2c+CjwvZz4KPGRlZnM+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSJNIDEwLjY2MDcgNS4wNTM1N0MgMTAuNjYwNyA1LjAzNTcxIDEwLjYyNSA0Ljk4MjE0IDEwLjYwNzEgNC45NjQyOEwgMS40ODIxNCAwLjM5Mjg1N0MgMS4yMzIxNCAwLjI2Nzg1NyAwLjk4MjE0MyAwLjEyNSAwLjY5NjQyOCAwLjEyNUMgMC4yMTQyODUgMC4xMjUgMCAwLjUzNTcxMyAwIDAuOTgyMTQxTCAwIDIxLjMzOTNDIDAgMjEuODc1IDAuMzkyODU4IDIyLjUxNzkgMC44OTI4NTggMjIuNzY3OUwgOS4xOTY0MyAyNi45Mjg2QyA5LjM3NSAyNy4wMTc5IDkuNTcxNDMgMjcuMDcxNCA5Ljc4NTcxIDI3LjA3MTRDIDEwLjM5MjkgMjcuMDcxNCAxMC42NjA3IDI2LjU1MzYgMTAuNjYwNyAyNkwgMTAuNjYwNyA1LjA1MzU3Wk0gMTEuODAzNiA2Ljg1NzE0TCAxMS44MDM2IDE3LjU3MTRMIDIxLjMzOTMgMjIuMzIxNEwgMTEuODAzNiA2Ljg1NzE0Wk0gMzIgNy4xNzg1N0wgMjIuMzU3MSAyMi44MzkzTCAzMC4yMzIxIDI2Ljc2NzlDIDMwLjQ4MjEgMjYuOTEwNyAzMC43Njc5IDI3IDMxLjA3MTQgMjdDIDMxLjY2MDcgMjcgMzIgMjYuNTg5MyAzMiAyNkwgMzIgNy4xNzg1N1pNIDMxLjk0NjQgNS4wMzU3MUMgMzEuOTQ2NCA0Ljk4MjE0IDMxLjkxMDcgNC45NDY0MyAzMS44NzUgNC45Mjg1N0wgMjIuMjE0MyAwLjEwNzE0MUMgMjIuMDcxNCAwLjAzNTcxMzIgMjEuOTEwNyAwIDIxLjc1IDBDIDIxLjM3NSAwIDIxLjAxNzkgMC4xNzg1NyAyMC44MjE0IDAuNUwgMTUuMDM1NyA5LjkxMDcxTCAyMiAyMS4yMzIxQyAyMi43MTQzIDIwLjA4OTMgMzEuOTQ2NCA1LjEwNzE0IDMxLjk0NjQgNS4wMzU3MVoiLz4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHRpdGxlPkdyb3VwIDY8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPgo8ZyBpZD0iQ2FudmFzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjk1IC02NzM1KSI+CjxnIGlkPSJHcm91cCA2Ij4KPGcgaWQ9IlZlY3RvciAyIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDBfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk1IDY3MzUpIiBmaWxsPSIjMzMxRDUwIi8+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8cGF0aCBpZD0icGF0aDBfZmlsbCIgZD0iTSAwIDBMIDMyIDBMIDMyIDguNjU4ODJMIDIwLjU3MTQgOC42NTg4MkwgMjAuNTcxNCAyNC40NzA2TCAxMS44MDk1IDMyTCAwIDMyTCAwIDI0LjA5NDFMIDExLjgwOTUgMjQuMDk0MUwgMTEuODA5NSA4LjY1ODgyTCAwIDguNjU4ODJMIDAgMFoiLz4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 0;\n  margin-bottom: 0;\n\n  ', ';\n'], ['\n  margin-top: 0;\n  margin-bottom: 0;\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin: 0;\n  '], ['\n    margin: 0;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Team = __webpack_require__(5);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _SubscribeInput = __webpack_require__(61);

var _SubscribeInput2 = _interopRequireDefault(_SubscribeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Bg = _styledComponents2.default.div.withConfig({
  displayName: '09_Subscribe__Bg',
  componentId: 's1s8wlkm-0'
})(['background:linear-gradient(167.13deg,#331d50 24.88%,#247fad 99.11%);']);

var Root = _styledComponents2.default.section.withConfig({
  displayName: '09_Subscribe__Root',
  componentId: 's1s8wlkm-1'
})(['', ';padding:64px 0;h1{color:#fff;}'], _styles.container);

var Container = _Team.Container.extend(_templateObject, _styles.m.lessThan('small')(_templateObject2));

var Small = _styledComponents2.default.p.withConfig({
  displayName: '09_Subscribe__Small',
  componentId: 's1s8wlkm-2'
})(['font-weight:700;font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;margin:0 0 4px 0;']);

var Form = _styledComponents2.default.form.withConfig({
  displayName: '09_Subscribe__Form',
  componentId: 's1s8wlkm-3'
})(['display:flex;justify-content:center;margin-top:32px;']);

var Subscribe = function Subscribe(p) {
  return _react2.default.createElement(
    Bg,
    null,
    _react2.default.createElement(
      Root,
      p,
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          Small,
          null,
          'The last news and releases'
        ),
        _react2.default.createElement(
          _Heading2.default,
          null,
          'Subscribe on DEIP'
        ),
        _react2.default.createElement(
          Form,
          { method: 'post' },
          _react2.default.createElement(_SubscribeInput2.default, {
            name: 'email',
            type: 'email',
            placeholder: 'Enter your email'
          })
        )
      )
    )
  );
};

exports.default = Subscribe;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon_send = __webpack_require__(16);

var _icon_send2 = _interopRequireDefault(_icon_send);

var _SubscribeForm = __webpack_require__(62);

var _SubscribeForm2 = _interopRequireDefault(_SubscribeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'SubscribeInput__Root',
  componentId: 's27t0xl-0'
})(['display:inline-flex;align-items:center;border-radius:30px;border:1px solid #fff;']);

var Submit = _styledComponents2.default.button.withConfig({
  displayName: 'SubscribeInput__Submit',
  componentId: 's27t0xl-1'
})(['border:none;background:transparent;cursor:pointer;padding:0;margin-right:9px;transition:opacity 0.3s;opacity:0.6;']);

var InputComp = _styledComponents2.default.input.withConfig({
  displayName: 'SubscribeInput__InputComp',
  componentId: 's27t0xl-2'
})(['border:none;background:transparent;font-size:16px;line-height:60px;color:#fff;width:100%;min-width:0;margin:0 16px 0 30px;&:focus{outline:none;}&:focus ~ button{opacity:1;}&::placeholder{color:rgba(255,255,255,0.5);}']);

var Icon = _styledComponents2.default.img.withConfig({
  displayName: 'SubscribeInput__Icon',
  componentId: 's27t0xl-3'
})(['display:block;width:42px;']);

var formProps = {
  action: 'https://prizoners.us9.list-manage.com/subscribe/post?u=d66d8c5d1ef09114cf8c27ccb&id=3c7edc9b14',
  messages: {
    inputPlaceholder: "Enter your email",
    sending: "Sending...",
    success: "Thank you! Now check your e-mail.",
    error: "Try again"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
};

var Input = function Input() {
  return _react2.default.createElement(_SubscribeForm2.default, formProps);
};

exports.default = Input;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jsonp = __webpack_require__(63);

var _jsonp2 = _interopRequireDefault(_jsonp);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon_send = __webpack_require__(16);

var _icon_send2 = _interopRequireDefault(_icon_send);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = _styledComponents2.default.div.withConfig({
  displayName: "SubscribeForm__Root",
  componentId: "s1x0akt3-0"
})(["display:inline-flex;align-items:center;border-radius:30px;border:1px solid #fff;"]);

var Icon = _styledComponents2.default.img.withConfig({
  displayName: "SubscribeForm__Icon",
  componentId: "s1x0akt3-1"
})(["display:block;width:42px;"]);

var Submit = _styledComponents2.default.button.withConfig({
  displayName: "SubscribeForm__Submit",
  componentId: "s1x0akt3-2"
})(["border:none;background:transparent;cursor:pointer;padding:0;margin-right:9px;transition:opacity 0.3s;opacity:0.6;"]);

var InputComp = _styledComponents2.default.input.withConfig({
  displayName: "SubscribeForm__InputComp",
  componentId: "s1x0akt3-3"
})(["border:none;background:transparent;font-size:16px;line-height:60px;color:#fff;width:100%;min-width:0;margin:0 16px 0 30px;&:focus{outline:none;}&:focus ~ button{opacity:1;}&::placeholder{color:rgba(255,255,255,0.5);}"]);

var getAjaxUrl = function getAjaxUrl(url) {
  return url.replace('/post?', '/post-json?');
};

var SubscribeForm = function (_React$Component) {
  _inherits(SubscribeForm, _React$Component);

  function SubscribeForm(props) {
    var _ref;

    _classCallCheck(this, SubscribeForm);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SubscribeForm.__proto__ || Object.getPrototypeOf(SubscribeForm)).call.apply(_ref, [this, props].concat(args)));

    _this.onSubmit = function (e) {
      var input = _this.refs.myInput;
      var input2 = _this.refs.myInputButton;

      e.preventDefault();
      debugger;
      if (!_this.state.inputValue || _this.state.inputValue.length < 5 || _this.state.inputValue.indexOf("@") === -1) {

        _this.setState({
          status: "error"
        });
        return;
      }
      var url = getAjaxUrl(_this.props.action) + ("&EMAIL=" + encodeURIComponent(_this.state.inputValue));
      _this.setState({
        status: "sending",
        msg: null
      }, function () {
        return (0, _jsonp2.default)(url, {
          param: "c"
        }, function (err, data) {
          if (err) {
            _this.setState({
              status: 'error',
              msg: err
            });
          } else if (data.result !== 'success') {
            _this.setState({
              status: 'error',
              msg: data.msg
            });
          } else {
            _this.setState({
              status: 'success',
              msg: data.msg
            });
          }
        });
      });
    };

    _this.state = {
      inputValue: '',
      status: null,
      msg: null
    };
    _this.focusTextInput = _this.focusTextInput.bind(_this);
    _this.onInputChange = _this.onInputChange.bind(_this);
    return _this;
  }

  _createClass(SubscribeForm, [{
    key: "onInputChange",
    value: function onInputChange(e) {
      var value = e.target.value;

      this.setState({
        inputValue: value
      });
    }
  }, {
    key: "focusTextInput",
    value: function focusTextInput() {
      // Explicitly focus the text input using the raw DOM API
      this.textInput.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var inputValue = this.state.inputValue;
      var _props = this.props,
          action = _props.action,
          messages = _props.messages,
          className = _props.className,
          style = _props.style,
          styles = _props.styles;
      var _state = this.state,
          status = _state.status,
          msg = _state.msg;

      return _react2.default.createElement(
        "div",
        { className: className, style: style },
        _react2.default.createElement(
          "form",
          { action: action, method: "post", noValidate: true },
          _react2.default.createElement(
            Root,
            null,
            _react2.default.createElement(InputComp, {
              onChange: this.onInputChange,
              ref: "myInput",
              type: "email",
              defaultValue: "",
              name: "EMAIL",
              required: true,
              value: inputValue,
              placeholder: messages.inputPlaceholder
            }),
            _react2.default.createElement(
              Submit,
              {
                ref: "myInputButton",
                disabled: this.state.status === "sending" || this.state.status === "success",
                onClick: this.onSubmit,
                type: "submit"
              },
              _react2.default.createElement(Icon, { src: _icon_send2.default }),
              messages.btnLabel
            )
          ),
          status === "sending" && _react2.default.createElement("p", { style: styles.sending, dangerouslySetInnerHTML: { __html: messages.sending } }),
          status === "success" && _react2.default.createElement("p", { style: styles.success, dangerouslySetInnerHTML: { __html: messages.success || msg } }),
          status === "error" && _react2.default.createElement("p", { style: styles.error, dangerouslySetInnerHTML: { __html: messages.error || msg } })
        )
      );
    }
  }]);

  return SubscribeForm;
}(_react2.default.Component);

exports.default = SubscribeForm;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("jsonp");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(8);

var _Poll = __webpack_require__(65);

var _Poll2 = _interopRequireDefault(_Poll);

var _Footer = __webpack_require__(12);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Join = function Join(_ref) {
  var someData = _ref.someData;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Poll2.default, { id: 'poll' }),
    _react2.default.createElement(_Footer2.default, { id: 'footer' })
  );
};

exports.default = (0, _reactStatic.getSiteProps)(Join);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    text-align: left;\n    width: 100%;\n    margin: 0;\n  '], ['\n    text-align: left;\n    width: 100%;\n    margin: 0;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin: 0 -8px 32px -8px;\n  '], ['\n    margin: 0 -8px 32px -8px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-size: 13px;\n    width: calc(100% / 2 - 16px);\n    margin: 8px;\n  '], ['\n    font-size: 13px;\n    width: calc(100% / 2 - 16px);\n    margin: 8px;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    width: 100%;\n    margin: 8px;\n  '], ['\n    width: 100%;\n    margin: 8px;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Team = __webpack_require__(5);

var _Menu = __webpack_require__(11);

var _Menu2 = _interopRequireDefault(_Menu);

var _MobileMenu = __webpack_require__(14);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Text = __webpack_require__(7);

var _Text2 = _interopRequireDefault(_Text);

var _Shower = __webpack_require__(66);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _RadioButton = __webpack_require__(67);

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _Input = __webpack_require__(68);

var _Input2 = _interopRequireDefault(_Input);

var _Checkbox = __webpack_require__(69);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _TextArea = __webpack_require__(70);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _axios = __webpack_require__(71);

var _axios2 = _interopRequireDefault(_axios);

var _reactToggleDisplay = __webpack_require__(72);

var _reactToggleDisplay2 = _interopRequireDefault(_reactToggleDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.section.withConfig({
  displayName: '20_Poll__Root',
  componentId: 'zpq9sm-0'
})(['', ';padding:48px 0 0 0;'], _styles.container);

var Section = _styledComponents2.default.div.withConfig({
  displayName: '20_Poll__Section',
  componentId: 'zpq9sm-1'
})(['margin:48px 0;']);

var Message = _styledComponents2.default.div.withConfig({
  displayName: '20_Poll__Message',
  componentId: 'zpq9sm-2'
})(['padding-top:100px;height:450px;']);

var Description = (0, _styledComponents2.default)(_Text2.default).withConfig({
  displayName: '20_Poll__Description',
  componentId: 'zpq9sm-3'
})(['display:block;width:', '%;margin:0 auto;', ';'], 100 * 6 / 8, _styles.m.lessThan('small')(_templateObject));

var ControlBlock = _styledComponents2.default.div.withConfig({
  displayName: '20_Poll__ControlBlock',
  componentId: 'zpq9sm-4'
})(['display:flex;flex-wrap:wrap;text-align:left;margin:0 -16px 32px -16px;', ';'], _styles.m.lessThan('small')(_templateObject2));

var Radio = (0, _styledComponents2.default)(_RadioButton2.default).withConfig({
  displayName: '20_Poll__Radio',
  componentId: 'zpq9sm-5'
})(['width:calc(100% / 4 - 32px);margin:16px;', ';'], _styles.m.lessThan('small')(_templateObject3));

var Input = (0, _styledComponents2.default)(_Input2.default).withConfig({
  displayName: '20_Poll__Input',
  componentId: 'zpq9sm-6'
})(['width:calc(100% / 2 - 32px);margin:16px;', ';'], _styles.m.lessThan('small')(_templateObject4));

var Checkbox = (0, _styledComponents2.default)(_Checkbox2.default).withConfig({
  displayName: '20_Poll__Checkbox',
  componentId: 'zpq9sm-7'
})(['width:calc(100% / 2 - 32px);margin:16px;', ';'], _styles.m.lessThan('small')(_templateObject4));

var Poll = function (_Component) {
  _inherits(Poll, _Component);

  function Poll() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Poll);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Poll.__proto__ || Object.getPrototypeOf(Poll)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: 'researcher',
      isVisibleSuccesSubscriptionMessage: false,

      researcherName: '',
      researcherEmail: '',
      researcherAcademicDegree: '',
      researcherAssociation: '',
      researcherPublishResearch: false,
      researcherLookingForInvestment: false,
      researcherCarryOutResearch: false,
      researcherSearchScientists: false,
      researcherReviewResearch: false,
      researcherGbResearchPreparation: false,
      researcherExpTokensDistributionPromotion: false,
      researcherPrototypeReviewer: false,
      researcherAdvisor: false,
      researcherIntroduce: false,
      researcherMessage: '',

      collaboratorName: '',
      collaboratorEmail: '',
      collaboratorRegion: '',
      collaboratorPromote: false,
      collaboratorSpeech: false,
      collaboratorAttractResearchers: false,
      collaboratorParticipateInResearch: false,
      collaboratorGatherFeedback: false,
      collaboratorAdvisor: false,
      collaboratorMessage: '',

      investorName: '',
      investorEmail: '',
      investorBuyResearchTokens: false,
      investorPrivatePresale: false,
      investorCrowdsale: false,
      investorResearchesGrant: false,
      investorDisciplineGrant: false,
      investorMessage: '',

      organisationName: '',
      organisationFieldOfActivity: '',
      organisationDelegateName: '',
      organisationEmail: '',
      organisationApplyTechnologies: false,
      organisationAttractFunding: false,
      organisationDetermineDirection: false,
      organisationProvideEquipment: false,
      organisationMessage: ''
    }, _this.setShow = function (e) {
      return _this.setState({ value: e.target.id });
    }, _this.setValue = function (e) {
      return _this.setState(_defineProperty({}, e.target.name, e.target.type === 'checkbox' ? e.target.checked : e.target.value));
    }, _this.sendForm = function (e) {
      var val = _this.state.value;
      e.preventDefault();

      switch (val) {
        case "researcher":
          _this.sendResearcherForm();
          break;
        case "collaborator":
          _this.sendCollaboratorForm();
          break;
        case "investor":
          _this.sendInvestorForm();
          break;
        case "organisation":
          _this.sendOrganisationForm();
          break;
      }
    }, _this.sendResearcherForm = function () {
      var self = _this;
      var form = {
        generalInfo: {
          fullName: _this.state.researcherName,
          email: _this.state.researcherEmail
        },
        researcherInfo: {
          academicDegree: _this.state.researcherAcademicDegree,
          association: _this.state.researcherAssociation,
          publishResearch: _this.state.researcherPublishResearch,
          lookingForInvestment: _this.state.researcherLookingForInvestment,
          carryOutResearch: _this.state.researcherCarryOutResearch,
          searchScientists: _this.state.researcherSearchScientists,
          reviewResearch: _this.state.researcherReviewResearch,
          gbResearchPreparation: _this.state.researcherGbResearchPreparation,
          expTokensDistributionPromotion: _this.state.researcherExpTokensDistributionPromotion,
          prototypeReviewer: _this.state.researcherPrototypeReviewer,
          advisor: _this.state.researcherAdvisor,
          introduce: _this.state.researcherIntroduce,
          message: _this.state.researcherMessage
        }

      };
      console.log(form);
      _axios2.default.post('http://146.185.140.12/api/subscriber', form).then(function (response) {
        self.state.isVisibleSuccesSubscriptionMessage = true;
        self.forceUpdate();
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }, _this.sendCollaboratorForm = function () {
      var self = _this;
      var form = {
        generalInfo: {
          fullName: _this.collaboratorForm.name,
          email: _this.collaboratorForm.email
        },
        contributorInfo: {
          region: _this.collaboratorForm.region,
          promote: _this.collaboratorForm.promote,
          speech: _this.collaboratorForm.speech,
          attractResearchers: _this.collaboratorForm.attractResearchers,
          participateInResearch: _this.collaboratorForm.participateInResearch,
          gatherFeedback: _this.collaboratorForm.gatherFeedback,
          advisor: _this.collaboratorForm.advisor,
          message: _this.collaboratorForm.message
        }

      };
      _axios2.default.post('http://146.185.140.12/api/subscriber', form).then(function (response) {
        self.state.isVisibleSuccesSubscriptionMessage = true;
        self.forceUpdate();
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Poll, [{
    key: 'sendInvestorForm',
    value: function sendInvestorForm() {
      var sel = this;
      var form = {
        generalInfo: {
          fullName: this.investorForm.name,
          email: this.investorForm.email
        },
        investorInfo: {
          buyResearchesTokens: this.investorForm.buyResearchesTokens,
          privatePresale: this.investorForm.privatePresale,
          crowdsale: this.investorForm.crowdsale,
          researchesGrant: this.investorForm.researchesGrant,
          disciplineGrant: this.investorForm.disciplineGrant,
          message: this.investorForm.message
        }

      };
      console.log(form);
      _axios2.default.post('http://146.185.140.12/api/subscriber', form).then(function (response) {
        self.state.isVisibleSuccesSubscriptionMessage = true;
        self.forceUpdate();
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'sendOrganisationForm',
    value: function sendOrganisationForm() {
      var self = this;
      var form = {
        generalInfo: {
          fullName: this.organisationForm.delegateName,
          email: this.organisationForm.email
        },
        organisationInfo: {
          organisationName: this.organisationForm.organisationName,
          fieldOfActivity: this.organisationForm.fieldOfActivity,
          applyTechnologies: this.organisationForm.applyTechnologies,
          attractFunding: this.organisationForm.attractFunding,
          determineDirection: this.organisationForm.determineDirection,
          provideEquipment: this.organisationForm.provideEquipment,
          message: this.organisationForm.message
        }

      };
      console.log(form);
      _axios2.default.post('http://146.185.140.12/api/subscriber', form).then(function (response) {
        self.state.isVisibleSuccesSubscriptionMessage = true;
        self.forceUpdate();
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var setShow = this.setShow;
      var sendForm = this.sendForm;
      var setValue = this.setValue;

      return _react2.default.createElement(
        Root,
        this.props,
        _react2.default.createElement(_Menu2.default, { attached: true }),
        _react2.default.createElement(_MobileMenu2.default, { attached: true }),
        _react2.default.createElement(
          _Team.Container,
          null,
          _react2.default.createElement(
            _reactToggleDisplay2.default,
            { show: !this.state.isVisibleSuccesSubscriptionMessage, tag: 'section' },
            _react2.default.createElement(
              'form',
              { onSubmit: this.sendForm, action: '' },
              _react2.default.createElement(
                Section,
                null,
                _react2.default.createElement(
                  _Heading2.default,
                  null,
                  'Join Us'
                ),
                _react2.default.createElement(
                  _Heading2.default,
                  { type: 'sub' },
                  'Choose your role'
                ),
                _react2.default.createElement(
                  ControlBlock,
                  null,
                  _react2.default.createElement(Radio, {
                    checked: true,
                    id: 'researcher',
                    name: 'type',
                    icon: 'flask',
                    children: 'Researcher',
                    onClick: setShow
                  }),
                  _react2.default.createElement(Radio, {
                    id: 'collaborator',
                    name: 'type',
                    icon: 'user-plus',
                    children: 'Collaborator',
                    onClick: setShow
                  }),
                  _react2.default.createElement(Radio, {
                    id: 'investor',
                    name: 'type',
                    icon: 'usd',
                    children: 'Investor',
                    onClick: setShow
                  }),
                  _react2.default.createElement(Radio, {
                    id: 'organisation',
                    name: 'type',
                    icon: 'building',
                    children: 'Organisation',
                    onClick: setShow
                  })
                )
              ),
              _react2.default.createElement(
                _Shower.Shower,
                { value: this.state.value },
                _react2.default.createElement(
                  _Shower.Show,
                  { value: 'researcher' },
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      Description,
                      null,
                      'You will be one of the first members of DEIP platform, who will start and lead DEIP community. Every scientist and researcher, who joins DEIP platform before its official release (genesis block) will have an ability to participate in initial expertise token distribution and obtain tokens in conformity with his proficiency. These tokens are not only the measure of your influence within your disciplines, on early stages it is also a great responsibility because your vote will have a big impact on emission distribution thus affecting how much each research is rewarded.'
                    )
                  ),
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      _Heading2.default,
                      { type: 'sub' },
                      'Basic information'
                    ),
                    _react2.default.createElement(
                      ControlBlock,
                      null,
                      _react2.default.createElement(Input, { name: 'researcherName', icon: 'user', placeholder: 'Full name', onChange: setValue }),
                      _react2.default.createElement(Input, {
                        name: 'researcherAcademicDegree',
                        icon: 'graduation-cap',
                        placeholder: 'Academic degree',
                        onChange: setValue
                      }),
                      _react2.default.createElement(Input, { name: 'researcherEmail', icon: 'envelope', placeholder: 'Email', onChange: setValue }),
                      _react2.default.createElement(Input, {
                        name: 'researcherAssociation',
                        icon: 'users',
                        placeholder: 'Association',
                        onChange: setValue
                      })
                    )
                  ),
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      _Heading2.default,
                      { type: 'sub' },
                      'How do you intend to use DEIP?'
                    ),
                    _react2.default.createElement(
                      ControlBlock,
                      null,
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'researcherPublishResearch', onChange: setValue },
                        'Publish research on the platform'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'researcherLookingForInvestment', onChange: setValue },
                        'Obtain funding for your research'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'researcherCarryOutResearch', onChange: setValue },
                        'Manage your research'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'researcherSearchScientists', onChange: setValue },
                        'Collaborate with scientists and researchers on your research'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'researcherReviewResearch', onChange: setValue },
                        'Review and evaluate other researches'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      _Heading2.default,
                      { type: 'sub' },
                      'How can you help the platform?'
                    ),
                    _react2.default.createElement(
                      ControlBlock,
                      null,
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'researcherGbResearchPreparation', onChange: setValue },
                        'Prepare your previous researches to be included into genesis block'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'researcherExpTokensDistributionPromotion', onChange: setValue },
                        'Invite scientists and researches to participate in initial discipline specific tokens distribution'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'researcherPrototypeReviewer', onChange: setValue },
                        'Use prototype of DEIP platform and provide feedback to the development team'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'researcherAdvisor', onChange: setValue },
                        'Advise on any specific matter correlated to your expertise'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'researcherIntroduce', onChange: setValue },
                        'Introduce us with your academic community'
                      )
                    ),
                    _react2.default.createElement(_TextArea2.default, { name: 'researcherMessage', placeholder: 'Please, provide your background', onChange: setValue })
                  )
                ),
                _react2.default.createElement(
                  _Shower.Show,
                  { value: 'collaborator' },
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      Description,
                      null,
                      'We are constantly looking for people who are willing to spread the word about DEIP around the world. You can join our team if you are lecturer at university or take part in conferences, or can speak to potential DEIP user in any other way. Please let us know how you can help DEIP and we will be in touch with you shortly.'
                    )
                  ),
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      _Heading2.default,
                      { type: 'sub' },
                      'Basic information'
                    ),
                    _react2.default.createElement(
                      ControlBlock,
                      null,
                      _react2.default.createElement(Input, { name: 'collaboratorName', icon: 'user', placeholder: 'Full name', onChange: setValue }),
                      _react2.default.createElement(Input, { name: 'collaboratorRegion', icon: 'globe', placeholder: 'Region', onChange: setValue }),
                      _react2.default.createElement(Input, { name: 'collaboratorEmail', icon: 'envelope', placeholder: 'Email', onChange: setValue })
                    )
                  ),
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      _Heading2.default,
                      { type: 'sub' },
                      'How can you help the platform?'
                    ),
                    _react2.default.createElement(
                      ControlBlock,
                      null,
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'collaboratorPromote', onChange: setValue },
                        'Share information about DIEP (blog posts / social media / offline / etc.)'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'collaboratorParticipateInResearch', onChange: setValue },
                        'Participate in researches on the platform'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'collaboratorSpeech', onChange: setValue },
                        'Tell about DEIP in your public speech'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'collaboratorGatherFeedback', onChange: setValue },
                        'Gather feedback from potential users'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'collaboratorAttractResearchers', onChange: setValue },
                        'Engage researchers to use DEIP'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'collaboratorAdvisor', onChange: setValue },
                        'Advise on any specific matter correlated to your expertise'
                      )
                    ),
                    _react2.default.createElement(_TextArea2.default, { name: 'collaboratorMessage', placeholder: 'Please, provide your background', onChange: setValue })
                  )
                ),
                _react2.default.createElement(
                  _Shower.Show,
                  { value: 'investor' },
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      Description,
                      null,
                      'Either you are interested in funding researches on our platform or just want to grant specific research we believe you may be interested in DEIP token sale. Please provide your contact information and we will let you know what we can offer.'
                    )
                  ),
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      _Heading2.default,
                      { type: 'sub' },
                      'Basic information'
                    ),
                    _react2.default.createElement(
                      ControlBlock,
                      null,
                      _react2.default.createElement(Input, { name: 'investorName', icon: 'user', placeholder: 'Full name', onChange: setValue }),
                      _react2.default.createElement(Input, { name: 'investorEmail', icon: 'envelope', placeholder: 'Email', onChange: setValue })
                    )
                  ),
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      _Heading2.default,
                      { type: 'sub' },
                      'Are you interested in investing in research on DEIP platform?'
                    ),
                    _react2.default.createElement(
                      ControlBlock,
                      null,
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'investorBuyResearchTokens', onChange: setValue },
                        'Buy researches tokens'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      _Heading2.default,
                      { type: 'sub' },
                      'Are you interested in investing in DEIP platform?'
                    ),
                    _react2.default.createElement(
                      ControlBlock,
                      null,
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'investorPrivatePresale', onChange: setValue },
                        'Private presale'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'investorCrowdsale', onChange: setValue },
                        'Public tokensale'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      _Heading2.default,
                      { type: 'sub' },
                      'Use DEIP to allocate grants'
                    ),
                    _react2.default.createElement(
                      ControlBlock,
                      null,
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'investorResearchesGrant', onChange: setValue },
                        'Grant for researches'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'investorDisciplineGrant', onChange: setValue },
                        'Grant for disciplines'
                      )
                    ),
                    _react2.default.createElement(_TextArea2.default, { name: 'investorMessage', placeholder: 'Please, provide your background', onChange: setValue })
                  )
                ),
                _react2.default.createElement(
                  _Shower.Show,
                  { value: 'organisation' },
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      Description,
                      null,
                      'We are open to partnership proposals, so if your organization have an interest in collaboration with DEIP or be presented on the platform as funding agency or group of researchers we are ready to find best win-win strategies with you.'
                    )
                  ),
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      _Heading2.default,
                      { type: 'sub' },
                      'Basic information'
                    ),
                    _react2.default.createElement(
                      ControlBlock,
                      null,
                      _react2.default.createElement(Input, {
                        name: 'organisationName',
                        icon: 'building',
                        placeholder: 'Organisation (Company, Univercity)',
                        onChange: setValue
                      }),
                      _react2.default.createElement(Input, {
                        name: 'organisationDelegateName',
                        icon: 'user',
                        placeholder: 'Contact person name',
                        onChange: setValue
                      }),
                      _react2.default.createElement(Input, {
                        name: 'organisationFieldOfActivity',
                        icon: 'book',
                        placeholder: 'Field of activity',
                        onChange: setValue
                      }),
                      _react2.default.createElement(Input, { name: 'organisationEmail', icon: 'envelope', placeholder: 'Email', onChange: setValue })
                    )
                  ),
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      _Heading2.default,
                      { type: 'sub' },
                      'How do you intend to use DEIP?'
                    ),
                    _react2.default.createElement(
                      ControlBlock,
                      null,
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'organisationApplyTechnologies', onChange: setValue },
                        'Apply DEIP technologies within the organization'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'organisationAttractFunding', onChange: setValue },
                        'Attract funding for your researches'
                      ),
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'organisationDetermineDirection', onChange: setValue },
                        'Determine the direction of research using the DEIP statistics'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    Section,
                    null,
                    _react2.default.createElement(
                      _Heading2.default,
                      { type: 'sub' },
                      'How can you help the platform?'
                    ),
                    _react2.default.createElement(
                      ControlBlock,
                      null,
                      _react2.default.createElement(
                        Checkbox,
                        { type: 'checkbox', name: 'organisationProvideEquipment', onChange: setValue },
                        'Provide your equipment for research on the DEIP platform.'
                      )
                    ),
                    _react2.default.createElement(_TextArea2.default, { name: 'organisationMessage', placeholder: 'Please, provide your background', onChange: setValue })
                  )
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { submit: true, primary: true },
                'Send'
              )
            )
          ),
          _react2.default.createElement(
            _reactToggleDisplay2.default,
            { show: this.state.isVisibleSuccesSubscriptionMessage },
            _react2.default.createElement(
              'form',
              { onSubmit: this.sendForm, action: '' },
              _react2.default.createElement(
                Message,
                null,
                _react2.default.createElement(
                  _Text2.default,
                  null,
                  'Thank you for joining DEIP community. We have added you to our initial users list and provide you with a link as soon as an alfa version of DEIP platform is released.'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Poll;
}(_react.Component);

exports.default = Poll;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Show = exports.Shower = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Shower = exports.Shower = function Shower(_ref) {
  var value = _ref.value,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.Children.map(children, function (child) {
      return child.props.value == value ? child : null;
    })
  );
};

Shower.propTypes = {
  value: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

var Show = exports.Show = function Show(_ref2) {
  var value = _ref2.value,
      children = _ref2.children;
  return _react2.default.createElement(
    'div',
    null,
    children
  );
};

Show.propTypes = {
  value: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icon = __webpack_require__(9);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'RadioButton__Root',
  componentId: 'sml6sz-0'
})(['']);

var Radio = _styledComponents2.default.input.attrs({
  type: 'radio'
}).withConfig({
  displayName: 'RadioButton__Radio',
  componentId: 'sml6sz-1'
})(['display:none;&:checked + label{border:1px solid ', ';background:', ';color:#fff;}'], function (p) {
  return p.theme.palette.primary;
}, function (p) {
  return p.theme.palette.primary;
});

var Label = _styledComponents2.default.label.withConfig({
  displayName: 'RadioButton__Label',
  componentId: 'sml6sz-2'
})(['display:inline-block;border-radius:5px;border:1px solid ', ';font-size:16px;font-weight:700;color:', ';height:49px;line-height:49px;width:100%;cursor:pointer;text-align:center;text-decoration:none;transition:border 0.15s,background 0.15s,color 0.15s;'], function (p) {
  return p.theme.palette.primaryLight;
}, function (p) {
  return p.theme.palette.primaryLight;
});

var RadioButton = function RadioButton(_ref) {
  var id = _ref.id,
      name = _ref.name,
      icon = _ref.icon,
      checked = _ref.checked,
      children = _ref.children,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ['id', 'name', 'icon', 'checked', 'children', 'onClick']);

  return _react2.default.createElement(
    Root,
    rest,
    _react2.default.createElement(Radio, { id: id, name: name, defaultChecked: checked, onClick: onClick }),
    _react2.default.createElement(
      Label,
      { htmlFor: id },
      _react2.default.createElement(
        _Icon2.default,
        { size: 18, mr: 1 },
        icon
      ),
      children
    )
  );
};

RadioButton.propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired,
  onClick: _propTypes2.default.func.isRequired
};

exports.default = RadioButton;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = __webpack_require__(10);

var _Icon = __webpack_require__(9);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'Input__Root',
  componentId: 's1l2yb49-0'
})(['position:relative;']);

var ph = function ph(p) {
  return (0, _polished.placeholder)({ color: p.theme.palette.text.secondary });
};

var Comp = _styledComponents2.default.input.withConfig({
  displayName: 'Input__Comp',
  componentId: 's1l2yb49-1'
})(['border-radius:5px;border:1px solid ', ';font-size:16px;color:1px solid ', ';line-height:49px;padding:0 48px 0 16px;width:100%;min-width:0;transition:border 0.15s;', ';& + i{color:', ';transition:color 0.15s;}&:focus{outline:none;border:1px solid ', ';}&:focus + i{color:', ';}'], function (p) {
  return p.theme.palette.primaryLight;
}, function (p) {
  return p.theme.palette.primary;
}, ph, function (p) {
  return p.theme.palette.primaryLight;
}, function (p) {
  return p.theme.palette.primary;
}, function (p) {
  return p.theme.palette.primary;
});

var Icon = (0, _styledComponents2.default)(_Icon2.default).withConfig({
  displayName: 'Input__Icon',
  componentId: 's1l2yb49-2'
})(['position:absolute;font-size:18px;line-height:49px;top:2px;right:16px;']);

var Input = function Input(_ref) {
  var icon = _ref.icon,
      type = _ref.type,
      name = _ref.name,
      placeholder = _ref.placeholder,
      rest = _objectWithoutProperties(_ref, ['icon', 'type', 'name', 'placeholder']);

  return _react2.default.createElement(
    Root,
    rest,
    _react2.default.createElement(Comp, { type: type, name: name, placeholder: placeholder }),
    _react2.default.createElement(
      Icon,
      null,
      icon
    )
  );
};

Input.propTypes = {
  icon: _propTypes2.default.string.isRequired
};

exports.default = Input;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = __webpack_require__(10);

var _Icon = __webpack_require__(9);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'Checkbox__Root',
  componentId: 's1iuu2q3-0'
})(['display:inline-flex;']);

var Check = _styledComponents2.default.div.withConfig({
  displayName: 'Checkbox__Check',
  componentId: 's1iuu2q3-1'
})(['border-radius:4px;border:1px solid ', ';text-align:center;color:', ';width:25px;min-width:25px;height:25px;line-height:25px;margin-right:16px;cursor:pointer;'], function (p) {
  return p.theme.palette.primary;
}, function (p) {
  return p.theme.palette.primary;
});

var Comp = _styledComponents2.default.input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: 'Checkbox__Comp',
  componentId: 's1iuu2q3-2'
})(['position:absolute;opacity:0;width:25px;min-width:25px;height:25px;line-height:25px;cursor:pointer;& ~ .full{display:none;}& ~ .empty{display:block;}&:checked ~ .full{display:block;}&:checked ~ .empty{display:none;}']);

var Label = _styledComponents2.default.label.withConfig({
  displayName: 'Checkbox__Label',
  componentId: 's1iuu2q3-3'
})(['font-size:16px;padding-top:2px;cursor:pointer;']);

var Checkbox = function Checkbox(_ref) {
  var name = _ref.name,
      checked = _ref.checked,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['name', 'checked', 'children', 'className']);

  return _react2.default.createElement(
    Root,
    { className: className },
    _react2.default.createElement(Comp, _extends({ id: name, name: name, defaultChecked: checked }, rest)),
    _react2.default.createElement(
      Check,
      { className: 'full' },
      _react2.default.createElement(
        _Icon2.default,
        null,
        'check'
      )
    ),
    _react2.default.createElement(Check, { className: 'empty' }),
    _react2.default.createElement(
      Label,
      { htmlFor: name },
      children
    )
  );
};

Checkbox.propTypes = {
  name: _propTypes2.default.string.isRequired,
  checked: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired
};

exports.default = Checkbox;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextArea = _styledComponents2.default.textarea.withConfig({
  displayName: 'TextArea',
  componentId: 'coy5jc-0'
})(['border-radius:5px;border:1px solid ', ';font-size:16px;color:1px solid ', ';padding:16px;width:100%;min-width:0;transition:border 0.15s;&:focus{outline:none;border:1px solid ', ';}&::placeholder{font-family:Roboto,sans-serif;color:', ';}'], function (p) {
  return p.theme.palette.primaryLight;
}, function (p) {
  return p.theme.palette.primary;
}, function (p) {
  return p.theme.palette.primary;
}, function (p) {
  return p.theme.palette.text.secondary;
});

exports.default = TextArea;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-toggle-display");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(8);

var _Hero = __webpack_require__(13);

var _Hero2 = _interopRequireDefault(_Hero);

var _Footer = __webpack_require__(12);

var _Footer2 = _interopRequireDefault(_Footer);

var _LanguageSwitcher = __webpack_require__(74);

var _LanguageSwitcher2 = _interopRequireDefault(_LanguageSwitcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Whitepaper = function Whitepaper(_ref) {
  var someData = _ref.someData;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_LanguageSwitcher2.default, { id: 'language_switcher' })
  );
};

exports.default = (0, _reactStatic.getSiteProps)(Whitepaper);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Team = __webpack_require__(5);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Language = __webpack_require__(75);

var _Language2 = _interopRequireDefault(_Language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (0, _styledComponents2.default)(_Button2.default).withConfig({
  displayName: '11_LanguageSwitcher__Button',
  componentId: 's1mbrx5t-0'
})(['margin-top:48px;']);

var Language = (0, _styledComponents2.default)(_Language2.default).withConfig({
  displayName: '11_LanguageSwitcher__Language',
  componentId: 's1mbrx5t-1'
})(['margin-top:12px;text-align:center;']);

var LanguageSwitcher = function LanguageSwitcher(p) {
  return _react2.default.createElement(
    _Team.Root,
    p,
    _react2.default.createElement(
      _Team.Container,
      null,
      _react2.default.createElement(
        _Heading2.default,
        null,
        'DEIP White Paper'
      ),
      _react2.default.createElement(
        _Heading2.default,
        { type: 'sub' },
        'Choose language'
      ),
      _react2.default.createElement(
        Language,
        { href: '/WP_DEIP_ENG.pdf' },
        'English'
      ),
      _react2.default.createElement(
        Language,
        { href: '/WP_DEIP_RUS.pdf' },
        '\u0420\u0443\u0441\u0441\u043A\u0438\u0439'
      )
    )
  );
};

exports.default = LanguageSwitcher;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Text = __webpack_require__(7);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Root = _styledComponents2.default.a.withConfig({
  displayName: 'Language__Root',
  componentId: 'docu6p-0'
})(['display:flex;align-items:center;border-radius:4px;border:1px solid ', ';text-align:left;text-decoration:none;padding:24px 32px;transition:background 0.15s,border 0.15s;&:hover{background:', ';border:1px solid ', ';}p{margin:0;width:100%;transition:color 0.15s;}'], function (p) {
  return p.theme.palette.primaryLight;
}, function (p) {
  return p.theme.palette.background.primary;
}, function (p) {
  return p.theme.palette.primary;
});

var Language = function Language(_ref) {
  var href = _ref.href,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['href', 'children']);

  return _react2.default.createElement(
    Root,
    _extends({ href: href }, rest),
    _react2.default.createElement(
      _Text2.default,
      null,
      children
    )
  );
};

Language.propTypes = {
  href: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = Language;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.b9824c3a.js.map