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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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

var _styledMediaQuery = __webpack_require__(23);

var container = exports.container = function container(p) {
  return (0, _styledComponents.css)(['max-width:', ';margin-left:auto;margin-right:auto;'], function (p) {
    return p.theme.sizes.maxWidth;
  });
};

var m = exports.m = (0, _styledMediaQuery.generateMedia)({
  small: '750px',
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

var _Person = __webpack_require__(13);

var _Person2 = _interopRequireDefault(_Person);

var _ashkor = __webpack_require__(35);

var _ashkor2 = _interopRequireDefault(_ashkor);

var _etsaryk = __webpack_require__(36);

var _etsaryk2 = _interopRequireDefault(_etsaryk);

var _aermolaev = __webpack_require__(37);

var _aermolaev2 = _interopRequireDefault(_aermolaev);

var _akulik = __webpack_require__(38);

var _akulik2 = _interopRequireDefault(_akulik);

var _arusetskiy = __webpack_require__(39);

var _arusetskiy2 = _interopRequireDefault(_arusetskiy);

var _akulichkin = __webpack_require__(40);

var _akulichkin2 = _interopRequireDefault(_akulichkin);

var _nsvyaznoy = __webpack_require__(41);

var _nsvyaznoy2 = _interopRequireDefault(_nsvyaznoy);

var _emarushko = __webpack_require__(42);

var _emarushko2 = _interopRequireDefault(_emarushko);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var personsFirstRow = [{ src: _ashkor2.default, name: 'Alex Shkor', role: 'CO-FOUNDER & CEO', linkedin: 'https://www.linkedin.com/in/alexshkor/', github: 'https://github.com/alexshkor' }, { src: _etsaryk2.default, name: 'Egor Tsaryk', role: 'CO-FOUNDER & CTO', linkedin: 'https://www.linkedin.com/in/yahor-tsaryk-92032a68/', github: 'https://github.com/egortsaryk9' }, { src: _aermolaev2.default, name: 'Artur Yermalayeu', role: 'CFO', facebook: 'https://www.facebook.com/ArturYermalayeu' }, { src: _akulik2.default, name: 'Alexey Kulik', role: 'CHIEF ARCHITECT', linkedin: 'https://www.linkedin.com/in/alexey-kulik-61576027/', github: 'https://github.com/akulik-paralect' }];

var personsSecondRow = [{ src: _arusetskiy2.default, name: 'Artyom Rusetskiy', role: 'CHIEF SCIENTIST', linkedin: 'https://www.linkedin.com/in/artyom-ruseckiy-8521a89a/' }, { src: _akulichkin2.default, name: 'Anton Kulichkin', role: 'CHIEF INVESTMENT OFFICER', linkedin: 'https://www.linkedin.com/in/anton-kulichkin-b158a886/' }, { src: _nsvyaznoy2.default, name: 'Nikolay Svyaznoy', role: 'CMO', linkedin: 'src' }, { src: _emarushko2.default, name: 'Egor Marushko', role: 'CORE DEVELOPER', linkedin: 'https://www.linkedin.com/in/egor-marushko-477175122/', github: 'https://github.com/egormarushko' }];

// reused in the advisors section
var Root = exports.Root = _styledComponents2.default.section.withConfig({
  displayName: '04_Team__Root',
  componentId: 'fktpbo-0'
})(['', ';'], _styles.container);

// reused in the advisors section
var Container = exports.Container = _styledComponents2.default.div.withConfig({
  displayName: '04_Team__Container',
  componentId: 'fktpbo-1'
})(['text-align:center;width:', '%;margin-left:', '%;margin-top:64px;margin-bottom:64px;', ';'], 100 * 2 / 3, 100 / 6, _styles.m.lessThan('small')(_templateObject));

// reused in the advisors section
var Block = exports.Block = _styledComponents2.default.div.withConfig({
  displayName: '04_Team__Block',
  componentId: 'fktpbo-2'
})(['display:flex;justify-content:space-between;&:first-of-type{margin-top:48px;}', ';'], _styles.m.lessThan('small')(_templateObject2));

// reused in the advisors section
var Person = exports.Person = (0, _styledComponents2.default)(_Person2.default).withConfig({
  displayName: '04_Team__Person',
  componentId: 'fktpbo-3'
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStatic = __webpack_require__(9);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Root = (0, _styledComponents2.default)(_reactStatic.Link).withConfig({
  displayName: 'Button__Root',
  componentId: 's1o6uhjy-0'
})(['border-radius:5px;display:inline-block;font-weight:500;font-size:16px;height:49px;line-height:49px;min-width:186px;cursor:pointer;text-align:center;text-decoration:none;text-transform:uppercase;', ';'], function (p) {
  return p.primary ? primary : p.contrast ? contrast : secondary;
});

var RootAnchor = Root.withComponent('a');

Root.propTypes = {
  to: _propTypes2.default.string.isRequired,
  primary: _propTypes2.default.bool,
  contrast: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

var Button = function Button(_ref) {
  var href = _ref.href,
      to = _ref.to,
      primary = _ref.primary,
      constrast = _ref.constrast,
      children = _ref.children;

  if (href) {
    return _react2.default.createElement(RootAnchor, {
      href: href,
      primary: primary,
      contrast: contrast,
      children: children
    });
  }

  return _react2.default.createElement(RootAnchor, {
    href: href,
    primary: primary,
    contrast: contrast,
    children: children
  });
};

exports.default = Root;

/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-static");

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

var _reactStatic = __webpack_require__(9);

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

var _Icon = __webpack_require__(7);

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
  componentId: 's1gz5ddm-0'
})(['font-size:24px;line-height:60px;color:#fff;width:60px;height:60px;.open{display:inline-block;}.close{display:none;}', ';'], _styles.m.greaterThan('medium')(_templateObject));

var Top = _styledComponents2.default.div.withConfig({
  displayName: 'MobileMenu__Top',
  componentId: 's1gz5ddm-1'
})(['display:flex;align-items:center;justify-content:space-between;padding-left:16px;height:60px;min-height:60px;']);

var Nav = _styledComponents2.default.div.withConfig({
  displayName: 'MobileMenu__Nav',
  componentId: 's1gz5ddm-2'
})(['display:none;flex-flow:column;align-items:center;justify-content:space-between;height:100%;']);

var Links = _styledComponents2.default.div.withConfig({
  displayName: 'MobileMenu__Links',
  componentId: 's1gz5ddm-3'
})(['display:flex;flex-flow:column;align-items:center;padding-top:32px;']);

var opened = (0, _styledComponents.css)(['position:fixed;background:#fff;height:100%;.open{display:none;}.close{display:inline-block;}', '{visibility:visible;}', '{display:flex;}', ',', ',', '{color:inherit;}'], _Menu.Logo, Nav, _Menu.Link, _Menu.Anchor, Toggler);

var attached = (0, _styledComponents.css)(['position:fixed;background:#fff;box-shadow:0px 1px 14px rgba(0,0,0,0.12);', '{visibility:visible;}', ',', ',', '{color:inherit;}'], _Menu.Logo, _Menu.Link, _Menu.Anchor, Toggler);

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'MobileMenu__Root',
  componentId: 's1gz5ddm-4'
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
            { primary: true, to: '/join' },
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
/* 13 */
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

var _Text = __webpack_require__(8);

var _Text2 = _interopRequireDefault(_Text);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Icon = __webpack_require__(7);

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
/* 14 */
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

var _Icon = __webpack_require__(7);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(17);

var _styledComponents = __webpack_require__(1);

var _App = __webpack_require__(18);

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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: Roboto, sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n'], ['\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: Roboto, sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(9);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStaticRoutes = __webpack_require__(19);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(20);

var _Index = __webpack_require__(21);

var _Index2 = _interopRequireDefault(_Index);

var _Join = __webpack_require__(60);

var _Join2 = _interopRequireDefault(_Join);

var _ = __webpack_require__(66);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var templateMap = {
  t_0: _Index2.default,
  t_1: _Join2.default,
  t_2: _2.default
};
var templateTree = { c: { "404": { t: "t_2" }, "/": { t: "t_0" }, "join": { t: "t_1" } } };

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
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(9);

var _Hero = __webpack_require__(22);

var _Hero2 = _interopRequireDefault(_Hero);

var _Vision = __webpack_require__(27);

var _Vision2 = _interopRequireDefault(_Vision);

var _We = __webpack_require__(29);

var _We2 = _interopRequireDefault(_We);

var _Roadmap = __webpack_require__(34);

var _Roadmap2 = _interopRequireDefault(_Roadmap);

var _Team = __webpack_require__(5);

var _Team2 = _interopRequireDefault(_Team);

var _Advisors = __webpack_require__(47);

var _Advisors2 = _interopRequireDefault(_Advisors);

var _Researchers = __webpack_require__(48);

var _Researchers2 = _interopRequireDefault(_Researchers);

var _Partners = __webpack_require__(50);

var _Partners2 = _interopRequireDefault(_Partners);

var _Media = __webpack_require__(52);

var _Media2 = _interopRequireDefault(_Media);

var _Subscribe = __webpack_require__(57);

var _Subscribe2 = _interopRequireDefault(_Subscribe);

var _Footer = __webpack_require__(14);

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
    _react2.default.createElement(_Researchers2.default, { id: 'researchers' }),
    _react2.default.createElement(_Partners2.default, { id: 'partners' }),
    _react2.default.createElement(_Media2.default, { id: 'media' }),
    _react2.default.createElement(_Subscribe2.default, { id: 'subscribe' }),
    _react2.default.createElement(_Footer2.default, { id: 'footer' })
  );
};

exports.default = (0, _reactStatic.getSiteProps)(Index);

/***/ }),
/* 22 */
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

var _MobileMenu = __webpack_require__(12);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

var _HeroBackground = __webpack_require__(24);

var _HeroBackground2 = _interopRequireDefault(_HeroBackground);

var _Logo = __webpack_require__(26);

var _Logo2 = _interopRequireDefault(_Logo);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.section.withConfig({
  displayName: '00_Hero__Root',
  componentId: 's1gzheyy-0'
})(['position:relative;text-align:center;height:100vh;']);

var Container = _styledComponents2.default.div.withConfig({
  displayName: '00_Hero__Container',
  componentId: 's1gzheyy-1'
})(['', ';display:flex;flex-flow:column;align-items:center;justify-content:center;padding-bottom:5vh;height:100vh;'], _styles.container);

var Description = _styledComponents2.default.p.withConfig({
  displayName: '00_Hero__Description',
  componentId: 's1gzheyy-2'
})(['font-weight:400;font-size:24px;letter-spacing:2.16px;color:#fff;margin:0;', ';'], _styles.m.lessThan('small')(_templateObject));

var ButtonsLine = _styledComponents2.default.div.withConfig({
  displayName: '00_Hero__ButtonsLine',
  componentId: 's1gzheyy-3'
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
          { contrast: true, to: '/' },
          'white paper'
        )
      )
    )
  );
};

exports.default = Hero;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("styled-media-query");

/***/ }),
/* 24 */
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

var _icon_mouse = __webpack_require__(25);

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
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iNjEiIHZpZXdCb3g9IjAgMCAxOCA2MSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cHM6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cHM6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8dGl0bGU+bW91c2VfMTwvdGl0bGU+CjxkZXNjPkNyZWF0ZWQgdXNpbmcgRmlnbWE8L2Rlc2M+CjxnIGlkPSJDYW52YXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUyNiAtNzc0KSI+CjxnIGlkPSJtb3VzZV8xIj4KPGcgaWQ9IlJlY3RhbmdsZSAyIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDBfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUxOCA4MDcpIiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgxX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MjUuMjUgNzc0KSIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPHBhdGggaWQ9InBhdGgwX2ZpbGwiIGQ9Ik0gMCAwTCAyIDBMIDIgMjhMIDAgMjhMIDAgMFoiLz4KPHBhdGggaWQ9InBhdGgxX2ZpbGwiIGQ9Ik0gOC4yNTEyOSA0LjQ5MjE5ZS0wNUMgOC4yNTA4OSA0LjQ5MjE5ZS0wNSA4LjI1MDQ0IDAgOC4yNDk5OSAwQyA4LjI0OTU0IDAgOC4yNDkxNCA0LjQ5MjE5ZS0wNSA4LjI0ODY5IDQuNDkyMTllLTA1QyAzLjcwMDI2IDAuMDAwNzYzNjcyIC0xLjkxOTI3ZS0wOCAzLjcwMTM4IC0xLjkxOTI3ZS0wOCA4LjI1MDA0TCAtMS45MTkyN2UtMDggMTQuNzVDIC0xLjkxOTI3ZS0wOCAxOS4yOTkxIDMuNzAwOTMgMjMgOC4yNDk5OSAyM0MgMTIuNzk5MSAyMyAxNi41IDE5LjI5OTEgMTYuNSAxNC43NUwgMTYuNSA4LjI1MDA0QyAxNi41IDMuNzAxMzggMTIuNzk5OCAwLjAwMDc2MzY3MiA4LjI1MTI5IDQuNDkyMTllLTA1Wk0gOC4yNDk5OSA2LjAwMDAzQyA4LjY2MzU0IDYuMDAwMDMgOS4wMDAwMSA2LjMzNjUgOS4wMDAwMSA2Ljc1MDA1TCA5LjAwMDAxIDguMjUwMDRDIDkuMDAwMDEgOC42NjM1OSA4LjY2MzU0IDkuMDAwMDUgOC4yNDk5OSA5LjAwMDA1QyA3LjgzNjQ0IDkuMDAwMDUgNy40OTk5OCA4LjY2MzU5IDcuNDk5OTggOC4yNTAwNEwgNy40OTk5OCA2Ljc1MDA1QyA3LjQ5OTk4IDYuMzM2NSA3LjgzNjQ0IDYuMDAwMDMgOC4yNDk5OSA2LjAwMDAzWk0gMTUgMTQuNzVDIDE1IDE4LjQ3MiAxMS45NzE5IDIxLjUgOC4yNDk5OSAyMS41QyA0LjUyODA0IDIxLjUgMS40OTk5OSAxOC40NzIgMS40OTk5OSAxNC43NUwgMS40OTk5OSA4LjI1MDA0QyAxLjQ5OTk5IDQuNzgxNTcgNC4xMjk2NyAxLjkxNjIzIDcuNDk5OTggMS41NDE5NEwgNy40OTk5OCA0LjYyOTA2QyA2LjYyNzAxIDQuOTM4NjcgNS45OTk5OSA1Ljc3MjMzIDUuOTk5OTkgNi43NTAwNUwgNS45OTk5OSA4LjI1MDA0QyA1Ljk5OTk5IDkuNDkwNjkgNy4wMDkzNCAxMC41IDguMjQ5OTkgMTAuNUMgOS40OTA2NCAxMC41IDEwLjUgOS40OTA2OSAxMC41IDguMjUwMDRMIDEwLjUgNi43NTAwNUMgMTAuNSA1Ljc3MjI4IDkuODcyOTMgNC45Mzg2NyA5LjAwMDAxIDQuNjI5MDZMIDkuMDAwMDEgMS41NDE5NEMgMTIuMzcwMyAxLjkxNjIzIDE1IDQuNzgxNTcgMTUgOC4yNTAwNEwgMTUgMTQuNzVMIDE1IDE0Ljc1WiIvPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),
/* 26 */
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
/* 27 */
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

var _Text = __webpack_require__(8);

var _Text2 = _interopRequireDefault(_Text);

var _vision = __webpack_require__(28);

var _vision2 = _interopRequireDefault(_vision);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.section.withConfig({
  displayName: '01_Vision__Root',
  componentId: 'xphz6l-0'
})(['overflow:hidden;position:relative;display:flex;align-items:center;justify-content:space-between;height:100vh;', ';'], _styles.m.lessThan('small')(_templateObject));

var Block = _styledComponents2.default.div.withConfig({
  displayName: '01_Vision__Block',
  componentId: 'xphz6l-1'
})(['display:inline-block;margin-left:', '%;width:', '%;', ';'], 100 / 12, 100 * 5 / 12, _styles.m.lessThan('small')(_templateObject2));

var Decor = _styledComponents2.default.img.withConfig({
  displayName: '01_Vision__Decor',
  componentId: 'xphz6l-2'
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
        '\u201CFair rewarding for contribution to human knowledge creation\u201D'
      ),
      _react2.default.createElement(
        _Text2.default,
        null,
        'We aim to revolutionize science and resolve its current crisis by applying decentralization to most important processes, like publication, financing, assessment of expertises, peer review and collaboration. We are trying to create an environment, where all researchers can collaborate as efficient as possible ocusing on primary goal - to gain new insights into Universe for Humanity.'
      )
    ),
    _react2.default.createElement(Decor, { src: _vision2.default })
  );
};

exports.default = Vision;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vision.27a83549.svg";

/***/ }),
/* 29 */
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

var _Text = __webpack_require__(8);

var _Text2 = _interopRequireDefault(_Text);

var _we = __webpack_require__(30);

var _we2 = _interopRequireDefault(_we);

var _icon_dollar = __webpack_require__(31);

var _icon_dollar2 = _interopRequireDefault(_icon_dollar);

var _icon_pen = __webpack_require__(32);

var _icon_pen2 = _interopRequireDefault(_icon_pen);

var _icon_speech = __webpack_require__(33);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/we.4a3abe31.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cHM6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cHM6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8dGl0bGU+R3JvdXAgMTE8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPgo8ZyBpZD0iQ2FudmFzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY3NiAtMjAxMykiPgo8ZyBpZD0iR3JvdXAgMTEiPgo8ZyBpZD0iRWxsaXBzZSA4LjMiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMF9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjc2IDIwMTMpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjwvZz4KPGcgaWQ9IiQiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMV9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjkzIDIwMjUuODIpIiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIDQ2LjQ2NDYgLTQ2LjM0NzEgMCAyMy42MjU3IDI0LjU0MikiPgo8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzMzFENTAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjQ3RkFEIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSJNIDQ3LjI1MTUgMjMuNjg1NkMgNDcuMjUxNSAzNi43NjY5IDM2LjY3MzkgNDcuMzcxMyAyMy42MjU3IDQ3LjM3MTNDIDEwLjU3NzYgNDcuMzcxMyAwIDM2Ljc2NjkgMCAyMy42ODU2QyAwIDEwLjYwNDQgMTAuNTc3NiAwIDIzLjYyNTcgMEMgMzYuNjczOSAwIDQ3LjI1MTUgMTAuNjA0NCA0Ny4yNTE1IDIzLjY4NTZaIi8+CjxwYXRoIGlkPSJwYXRoMV9maWxsIiBkPSJNIDEuMDA5NDkgMTQuMTYzOEMgMS4wMDk0OSAxNS43OTI1IDEuNDYxMSAxNy4xMDA2IDIuMzY0MzMgMTguMDg4MUMgMy4yODUyNiAxOS4wNzU3IDQuNjc1NTIgMTkuNjIxNSA2LjUzNTEgMTkuNzI1NEwgNi41MzUxIDExLjA3MTJMIDUuMjg2NTMgMTAuNzg1M0MgNC43MTk4IDEwLjY2NCA0LjE1MzA3IDEwLjUwODEgMy41ODYzNCAxMC4zMTc1QyAzLjAzNzMyIDEwLjEwOTYgMi41MzI1NyA5Ljg0MTA1IDIuMDcyMTEgOS41MTE4NkMgMS42MjkzNSA5LjE2NTM1IDEuMjY2MjkgOC43MzIyIDAuOTgyOTIyIDguMjEyNDNDIDAuNzE3MjY4IDcuNjc1MzMgMC41ODQ0NCA3LjAwODI5IDAuNTg0NDQgNi4yMTEzQyAwLjU4NDQ0IDUuOTE2NzYgMC42Mjg3MTYgNS41MDk2IDAuNzE3MjY4IDQuOTg5ODNDIDAuODA1ODE5IDQuNDUyNzMgMS4wNDQ5MSAzLjkxNTYzIDEuNDM0NTQgMy4zNzg1M0MgMS44NDE4NyAyLjg0MTQzIDIuNDM1MTcgMi4zNzM2MyAzLjIxNDQyIDEuOTc1MTRDIDQuMDExMzggMS41NTkzMiA1LjExODI4IDEuMzI1NDIgNi41MzUxIDEuMjczNDVMIDYuNTM1MSAwTCA3LjM4NTIgMEwgNy4zODUyIDEuMjczNDVDIDkuMjI3MDcgMS4zMDgxIDEwLjY5NyAxLjc3NTg5IDExLjc5NTEgMi42NzY4NEMgMTIuODkzMSAzLjU3Nzc4IDEzLjQ3NzUgNS4wMTU4MiAxMy41NDg0IDYuOTkwOTZMIDEyLjUzODkgNi45OTA5NkMgMTIuNDMyNiA1LjI5MzAzIDExLjkyNzkgNC4wODg4OSAxMS4wMjQ3IDMuMzc4NTNDIDEwLjEyMTQgMi42NTA4NSA4LjkwODI5IDIuMjY5NjggNy4zODUyIDIuMjM1MDNMIDcuMzg1MiAxMC4yOTE1TCA5LjQ1NzMxIDEwLjc4NTNDIDEwLjMyNTEgMTAuOTkzMiAxMS4wNTEyIDExLjI2MTggMTEuNjM1NyAxMS41OTFDIDEyLjIyMDEgMTEuOTAyOCAxMi42ODk0IDEyLjI2NjcgMTMuMDQzNiAxMi42ODI1QyAxMy4zOTc4IDEzLjA4MSAxMy42NDU4IDEzLjUyMjggMTMuNzg3NSAxNC4wMDc5QyAxMy45MjkyIDE0LjQ3NTcgMTQgMTQuOTc4MiAxNCAxNS41MTUzQyAxNCAxNi40ODU1IDEzLjgwNTIgMTcuMjk5OCAxMy40MTU2IDE3Ljk1ODJDIDEzLjA0MzYgMTguNTk5MiAxMi41NDc4IDE5LjEyNzcgMTEuOTI3OSAxOS41NDM1QyAxMS4zMDggMTkuOTQyIDEwLjU5OTYgMjAuMjI3OSA5LjgwMjY2IDIwLjQwMTFDIDkuMDA1NjkgMjAuNTkxNyA4LjE5OTg3IDIwLjY5NTcgNy4zODUyIDIwLjcxM0wgNy4zODUyIDIzTCA2LjUzNTEgMjNMIDYuNTM1MSAyMC43MTNDIDUuNTYxMDQgMjAuNjI2NCA0LjY2NjY3IDIwLjQ1MzEgMy44NTE5OSAyMC4xOTMyQyAzLjA1NTAzIDE5LjkxNiAyLjM3MzE4IDE5LjUxNzUgMS44MDY0NSAxOC45OTc3QyAxLjIzOTcyIDE4LjQ3OCAwLjc5Njk2NCAxNy44MjgyIDAuNDc4MTc4IDE3LjA0ODZDIDAuMTU5MzkzIDE2LjI1MTYgMCAxNS4yOSAwIDE0LjE2MzhMIDEuMDA5NDkgMTQuMTYzOFpNIDYuNTM1MSAxMC4wNTc2TCA2LjUzNTEgMi4yNjEwMkMgNS42MzE4OCAyLjI5NTY3IDQuODcwMzQgMi40MjU2MSA0LjI1MDQ3IDIuNjUwODVDIDMuNjMwNjEgMi44NTg3NiAzLjExNzAxIDMuMTM1OTcgMi43MDk2OCAzLjQ4MjQ5QyAyLjMyMDA1IDMuODI5IDIuMDM2NjkgNC4yMzYxNiAxLjg1OTU4IDQuNzAzOTVDIDEuNjgyNDggNS4xNzE3NSAxLjU5MzkzIDUuNjc0MiAxLjU5MzkzIDYuMjExM0MgMS41OTM5MyA2LjgxNzcgMS42OTEzMyA3LjMyODgxIDEuODg2MTUgNy43NDQ2M0MgMi4wOTg2NyA4LjE0MzEzIDIuMzczMTggOC40ODA5OCAyLjcwOTY4IDguNzU4MTlDIDMuMDYzODggOS4wMTgwOCAzLjQ3MTIyIDkuMjM0NjUgMy45MzE2OSA5LjQwNzkxQyA0LjQwOTg3IDkuNTYzODQgNC45MTQ2MSA5LjcwMjQ1IDUuNDQ1OTIgOS44MjM3M0wgNi41MzUxIDEwLjA1NzZaTSA3LjM4NTIgMTkuNzI1NEMgOC4xNDY3NCAxOS43MjU0IDguODY0MDEgMTkuNjQ3NSA5LjUzNyAxOS40OTE1QyAxMC4yMSAxOS4zMzU2IDEwLjgwMzMgMTkuMDkzIDExLjMxNjkgMTguNzYzOEMgMTEuODMwNSAxOC40MTczIDEyLjIzNzggMTcuOTg0MiAxMi41Mzg5IDE3LjQ2NDRDIDEyLjg0IDE2LjkyNzMgMTIuOTkwNSAxNi4yNzc2IDEyLjk5MDUgMTUuNTE1M0MgMTIuOTkwNSAxNC41Mjc3IDEyLjY3MTcgMTMuNzIyIDEyLjAzNDIgMTMuMDk4M0MgMTEuMzk2NiAxMi40NzQ2IDEwLjM4NzEgMTEuOTg5NSA5LjAwNTY5IDExLjY0MjlMIDcuMzg1MiAxMS4yNTMxTCA3LjM4NTIgMTkuNzI1NFoiLz4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cHM6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cHM6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8dGl0bGU+R3JvdXAgMTI8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPgo8ZyBpZD0iQ2FudmFzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY3NiAtMTc5OSkiPgo8ZyBpZD0iR3JvdXAgMTIiPgo8ZyBpZD0iR3JvdXAgOSI+CjxnIGlkPSJFbGxpcHNlIDguNCI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgwX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2NzYgMTc5OSkiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPC9nPgo8ZyBpZD0iZm91bnRhaW4tcGVuIj4KPGcgaWQ9Ikdyb3VwIj4KPGcgaWQ9Ikdyb3VwIj4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgxX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OTEuNDQgMTgxMykiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8ZyBpZD0iVmVjdG9yIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDJfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY5OS40MiAxODEzKSIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjwvZz4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgzX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OTkuNDIgMTgyMi40NSkiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8ZyBpZD0iVmVjdG9yIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDRfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY5OC4yIDE4MTkuOTkpIiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGg1X2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OTIuMjEgMTgxMykiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8L2c+CjwvZz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgNDYuNDY0NiAtNDYuMzQ3MSAwIDIzLjYyNTcgMjQuNTQyKSI+CjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzMzMUQ1MCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyNDdGQUQiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggaWQ9InBhdGgwX2ZpbGwiIGQ9Ik0gNDcuMjUxNSAyMy42ODU2QyA0Ny4yNTE1IDM2Ljc2NjkgMzYuNjczOSA0Ny4zNzEzIDIzLjYyNTcgNDcuMzcxM0MgMTAuNTc3NiA0Ny4zNzEzIDAgMzYuNzY2OSAwIDIzLjY4NTZDIDAgMTAuNjA0NCAxMC41Nzc2IDAgMjMuNjI1NyAwQyAzNi42NzM5IDAgNDcuMjUxNSAxMC42MDQ0IDQ3LjI1MTUgMjMuNjg1NloiLz4KPHBhdGggaWQ9InBhdGgxX2ZpbGwiIGQ9Ik0gOC4zMTY3NCAyMi45OTk5QyA4LjEyNjk0IDIyLjk5OTkgNy45NzI5IDIyLjg0MzggNy45NzI5IDIyLjY1MTRDIDcuOTcyOSAxNC45NTI3IDAuMTg3NzQyIDcuNDgwNTQgMC4xMDg2NTkgNy40MDY2NkMgMC4wMjQ3NjMgNy4zMjcyIC0wLjAxNDQzNDQgNy4yMTAxMSAwLjAwNDgyMDQ3IDcuMDk1MTFDIDAuMDI0MDc1NCA2Ljk4MDExIDAuMDk4MzQ0MiA2Ljg4MTg0IDAuMjAzNTU4IDYuODM0NDVDIDUuMjYyNzggNC41MzU4NSAzLjk0ODYzIDAuNjMxNDQ4IDMuODkwMTggMC40NjYyNjdDIDMuODI2MjMgMC4yODUwNTUgMy45MTkwNiAwLjA4NTcyMyA0LjA5Nzg2IDAuMDIwMjA4MUMgNC4yNzQ1OSAtMC4wNDM5MTI4IDQuNDczMzMgMC4wNDk0ODA3IDQuNTM3OTcgMC4yMzA2OTJDIDQuNTUzNzkgMC4yNzU5OTUgNi4wMzIyOSA0LjY1NjQzIDAuOTM4NjgyIDcuMjUxOTNDIDIuNTIzMDggOC44NTcwNCA4LjY2MDU4IDE1LjUzNDcgOC42NjA1OCAyMi42NTE0QyA4LjY2MDU4IDIyLjg0MzggOC41MDY1NCAyMi45OTk5IDguMzE2NzQgMjIuOTk5OVoiLz4KPHBhdGggaWQ9InBhdGgyX2ZpbGwiIGQ9Ik0gMC4zNDM4MzcgMjIuOTk5NkMgMC4xNTQwMzkgMjIuOTk5NiAwIDIyLjg0MzUgMCAyMi42NTExQyAwIDE1LjUzNDQgNi4xMzc0OSA4Ljg1Njc3IDcuNzIyNTggNy4yNTE2NUMgMi42Mjg5OCA0LjY1NTQ2IDQuMTA3NDggMC4yNzU3MTkgNC4xMjMyOSAwLjIzMDQxNkMgNC4xODcyNSAwLjA0OTIwNDcgNC4zODMyNCAtMC4wNDM0OTE4IDQuNTYyMDMgMC4wMTk5MzIxQyA0Ljc0MDE0IDAuMDg0NzUgNC44MzM2NiAwLjI4MzM4NSA0Ljc3MTA4IDAuNDY1Mjk0QyA0LjcxMzMyIDAuNjMwNDc1IDMuNDE5MTIgNC41NDUzMyA4LjQ1NzAyIDYuODM0MTdDIDguNTYyMjMgNi44ODE1NyA4LjYzNjUgNi45Nzk4NCA4LjY1NTc2IDcuMDk0ODRDIDguNjc0MzIgNy4yMDk4NCA4LjYzNTgxIDcuMzI2OTMgOC41NTE5MiA3LjQwNjM4QyA4LjQ3MjgzIDcuNDgwMjYgMC42ODc2NzQgMTQuOTU4IDAuNjg3Njc0IDIyLjY1MTFDIDAuNjg3Njc0IDIyLjg0MzUgMC41MzM2MzUgMjIuOTk5NiAwLjM0MzgzNyAyMi45OTk2WiIvPgo8cGF0aCBpZD0icGF0aDNfZmlsbCIgZD0iTSAwLjM0MzgzNyAxMy41NDk3QyAwLjE1NDAzOSAxMy41NDk3IDAgMTMuMzkzNiAwIDEzLjIwMTJMIDAgMC4zNDg0ODNDIDAgMC4xNTYxMiAwLjE1NDAzOSAxLjA2MzQ5ZS0wOCAwLjM0MzgzNyAxLjA2MzQ5ZS0wOEMgMC41MzM2MzUgMS4wNjM0OWUtMDggMC42ODc2NzQgMC4xNTYxMiAwLjY4NzY3NCAwLjM0ODQ4M0wgMC42ODc2NzQgMTMuMjAxMkMgMC42ODc2NzQgMTMuMzkzNiAwLjUzMzYzNSAxMy41NDk3IDAuMzQzODM3IDEzLjU0OTdaIi8+CjxwYXRoIGlkPSJwYXRoNF9maWxsIiBkPSJNIDEuNTU2MjEgMy4xNTQ0N0MgMC42OTc5ODkgMy4xNTQ0NyAzLjIwMDM5ZS0wNyAyLjQ0NzA1IDMuMjAwMzllLTA3IDEuNTc3OTNDIDMuMjAwMzllLTA3IDAuNzA4MTE4IDAuNjk3OTg5IC01LjMxNzQzZS0wOSAxLjU1NjIxIC01LjMxNzQzZS0wOUMgMi40MTQ0MiAtNS4zMTc0M2UtMDkgMy4xMTI0MSAwLjcwODExOCAzLjExMjQxIDEuNTc3OTNDIDMuMTEyNDEgMi40NDcwNSAyLjQxNDQyIDMuMTU0NDcgMS41NTYyMSAzLjE1NDQ3Wk0gMS41NTYyMSAwLjY5Njk2NkMgMS4wNzc1OSAwLjY5Njk2NiAwLjY4NzY3NSAxLjA5MTQ1IDAuNjg3Njc1IDEuNTc3OTNDIDAuNjg3Njc1IDIuMDYyMzIgMS4wNzY5IDIuNDU3NSAxLjU1NjIxIDIuNDU3NUMgMi4wMzU1MiAyLjQ1NzUgMi40MjQ3NCAyLjA2MzAyIDIuNDI0NzQgMS41Nzc5M0MgMi40MjQ3NCAxLjA5MjE1IDIuMDM0ODMgMC42OTY5NjYgMS41NTYyMSAwLjY5Njk2NloiLz4KPHBhdGggaWQ9InBhdGg1X2ZpbGwiIGQ9Ik0gMTQuNzUwNiAwLjY5Njk2NkwgMC4zNDM4MzcgMC42OTY5NjZDIDAuMTU0MDM5IDAuNjk2OTY2IDYuNTU4MTdlLTA4IDAuNTQwODQ2IDYuNTU4MTdlLTA4IDAuMzQ4NDgzQyA2LjU1ODE3ZS0wOCAwLjE1NjEyIDAuMTU0MDM5IDAgMC4zNDM4MzcgMEwgMTQuNzQ5OSAwQyAxNC45Mzk3IDAgMTUuMDkzOCAwLjE1NjEyIDE1LjA5MzggMC4zNDg0ODNDIDE1LjA5MzggMC41NDA4NDYgMTQuOTQwNCAwLjY5Njk2NiAxNC43NTA2IDAuNjk2OTY2WiIvPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cHM6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cHM6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8dGl0bGU+R3JvdXAgMTA8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPgo8ZyBpZD0iQ2FudmFzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY3NiAtMjIyNSkiPgo8ZyBpZD0iR3JvdXAgMTAiPgo8ZyBpZD0iRWxsaXBzZSA4LjYiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMF9maWxsIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAxNzIzLjI1IDIyMjUpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjwvZz4KPGcgaWQ9InNwZWVjaC1idWJibGUiPgo8ZyBpZD0iR3JvdXAiPgo8ZyBpZD0iVmVjdG9yIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDFfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY4NyAyMjM3LjIzKSIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnIGlkPSJWZWN0b3IiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMl9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzA0Ljk5IDIyNDcuMDIpIiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgzX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OTkuMTcgMjI0Ny4wMikiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8ZyBpZD0iVmVjdG9yIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDRfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY5My4zNSAyMjQ3LjAyKSIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjwvZz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgNDYuNDY0NiAtNDYuMzQ3MSAwIDIzLjYyNTcgMjQuNTQyKSI+CjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzMzMUQ1MCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyNDdGQUQiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggaWQ9InBhdGgwX2ZpbGwiIGQ9Ik0gNDcuMjUxNSAyMy42ODU2QyA0Ny4yNTE1IDM2Ljc2NjkgMzYuNjczOSA0Ny4zNzEzIDIzLjYyNTcgNDcuMzcxM0MgMTAuNTc3NiA0Ny4zNzEzIDAgMzYuNzY2OSAwIDIzLjY4NTZDIDAgMTAuNjA0NCAxMC41Nzc2IDAgMjMuNjI1NyAwQyAzNi42NzM5IDAgNDcuMjUxNSAxMC42MDQ0IDQ3LjI1MTUgMjMuNjg1NloiLz4KPHBhdGggaWQ9InBhdGgxX2ZpbGwiIGQ9Ik0gNS43MjA5OSAyNUMgNS42NTczNSAyNSA1LjU5MjkzIDI0Ljk4NDYgNS41MzQ3OSAyNC45NTM3QyA1LjQwNzUyIDI0Ljg4NjYgNS4zMjgxNyAyNC43NTU1IDUuMzI4MTcgMjQuNjE0M0wgNS4zMjgxNyAxOS4xMTk1QyAxLjg4OTQ1IDE3LjM2MzkgMCAxNC4yOTAyIDAgMTAuNDM5QyAwIDQuNDg3NTQgNS41NzI1IC0xLjgzODk3ZS0xMCAxMi45NjMgLTEuODM4OTdlLTEwQyAyMC4zNTM0IC0xLjgzODk3ZS0xMCAyNS45MjU5IDQuNDg3NTQgMjUuOTI1OSAxMC40MzlDIDI1LjkyNTkgMTYuMzg5OCAyMC4zNTM0IDIwLjg3NzMgMTIuOTYzIDIwLjg3NzNDIDEyLjcyMDIgMjAuODc3MyAxMi40ODIyIDIwLjg2NDIgMTIuMjQzMyAyMC44NTE4TCAxMi4yMjc2IDIwLjg1MTFMIDUuOTM3MDQgMjQuOTM2QyA1Ljg3MTgzIDI0Ljk3ODQgNS43OTY0MSAyNSA1LjcyMDk5IDI1Wk0gMTIuOTYzIDAuNzcxMzE5QyA2LjAyMTEgMC43NzEzMTkgMC43ODU2MzQgNC45Mjc5NiAwLjc4NTYzNCAxMC40MzlDIDAuNzg1NjM0IDEzLjAwMjEgMS42NzE4MyAxNi40ODc3IDUuODk0NjEgMTguNTM3MUMgNi4wMjgxNyAxOC42MDE5IDYuMTEzMDIgMTguNzM2MSA2LjExMzAyIDE4Ljg4MjdMIDYuMTEzMDIgMjMuODk3TCAxMS45MDI0IDIwLjEzNzZDIDExLjk3MzEgMjAuMDkxMyAxMi4wNTg3IDIwLjA2NDMgMTIuMTM5NiAyMC4wNzQ0TCAxMi4yODU3IDIwLjA4MjFDIDEyLjUxMDQgMjAuMDk0NCAxMi43MzQzIDIwLjEwNiAxMi45NjIyIDIwLjEwNkMgMTkuOTA0IDIwLjEwNiAyNS4xMzk1IDE1Ljk1MDEgMjUuMTM5NSAxMC40MzlDIDI1LjEzOTUgNC45Mjc5NiAxOS45MDQ4IDAuNzcxMzE5IDEyLjk2MyAwLjc3MTMxOVoiLz4KPHBhdGggaWQ9InBhdGgyX2ZpbGwiIGQ9Ik0gMC43OTU4NDggMS41NjI2OUMgMS4yMzUzOCAxLjU2MjY5IDEuNTkxNyAxLjIxMjg3IDEuNTkxNyAwLjc4MTM0N0MgMS41OTE3IDAuMzQ5ODIxIDEuMjM1MzggMCAwLjc5NTg0OCAwQyAwLjM1NjMxMyAwIDAgMC4zNDk4MjEgMCAwLjc4MTM0N0MgMCAxLjIxMjg3IDAuMzU2MzEzIDEuNTYyNjkgMC43OTU4NDggMS41NjI2OVoiLz4KPHBhdGggaWQ9InBhdGgzX2ZpbGwiIGQ9Ik0gMC43OTU4NDcgMS41NjI2OUMgMS4yMzUzOCAxLjU2MjY5IDEuNTkxNyAxLjIxMjg3IDEuNTkxNyAwLjc4MTM0N0MgMS41OTE3IDAuMzQ5ODIxIDEuMjM1MzggMCAwLjc5NTg0NyAwQyAwLjM1NjMxMyAwIDAgMC4zNDk4MjEgMCAwLjc4MTM0N0MgMCAxLjIxMjg3IDAuMzU2MzEzIDEuNTYyNjkgMC43OTU4NDcgMS41NjI2OVoiLz4KPHBhdGggaWQ9InBhdGg0X2ZpbGwiIGQ9Ik0gMC43OTU4NDcgMS41NjI2OUMgMS4yMzUzOCAxLjU2MjY5IDEuNTkxNjkgMS4yMTI4NyAxLjU5MTY5IDAuNzgxMzQ3QyAxLjU5MTY5IDAuMzQ5ODIxIDEuMjM1MzggMCAwLjc5NTg0NyAwQyAwLjM1NjMxMyAwIDAgMC4zNDk4MjEgMCAwLjc4MTM0N0MgMCAxLjIxMjg3IDAuMzU2MzEzIDEuNTYyNjkgMC43OTU4NDcgMS41NjI2OVoiLz4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),
/* 34 */
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

var _Roadmap = __webpack_require__(43);

var _roadmap = __webpack_require__(45);

var _roadmap2 = _interopRequireDefault(_roadmap);

var _roadmap_mobile = __webpack_require__(46);

var _roadmap_mobile2 = _interopRequireDefault(_roadmap_mobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Bg = _styledComponents2.default.div.withConfig({
  displayName: '03_Roadmap__Bg',
  componentId: 's1jesdl1-0'
})(['background:linear-gradient(180deg,#331d50 51.81%,#247fad 149.89%);']);

var Root = _styledComponents2.default.section.withConfig({
  displayName: '03_Roadmap__Root',
  componentId: 's1jesdl1-1'
})(['', ';position:relative;h1{color:#fff;}'], _styles.container);

var Container = _Team.Container.extend(_templateObject, _styles.m.lessThan('small')(_templateObject2));

var Small = _styledComponents2.default.p.withConfig({
  displayName: '03_Roadmap__Small',
  componentId: 's1jesdl1-2'
})(['font-weight:700;font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;margin:0 0 4px 0;']);

var Headline = _styledComponents2.default.div.withConfig({
  displayName: '03_Roadmap__Headline',
  componentId: 's1jesdl1-3'
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
              _react2.default.createElement(_Roadmap.Entry, {
                done: true,
                label: 'Some date',
                text: 'Some text some text some text some text some text'
              }),
              _react2.default.createElement(_Roadmap.Entry, { done: true, label: 'Some date', text: 'Some text' }),
              _react2.default.createElement(_Roadmap.Entry, { label: 'Some date', text: 'Some text' })
            ),
            _react2.default.createElement(
              _Roadmap.Section,
              null,
              _react2.default.createElement(_Roadmap.Entry, { label: 'Some date', text: 'Some text' }),
              _react2.default.createElement(_Roadmap.Popup, { label: 'Some label', text: 'some text' }),
              _react2.default.createElement(_Roadmap.Entry, {
                label: 'Some date',
                text: 'Some text some text some text some text'
              })
            ),
            _react2.default.createElement(
              _Roadmap.Section,
              null,
              _react2.default.createElement(_Roadmap.Entry, { label: 'Some date', text: 'Some text' }),
              _react2.default.createElement(_Roadmap.Popup, { accent: true, label: 'Some date', text: 'Some text' }),
              _react2.default.createElement(_Roadmap.Entry, { label: 'Some date', text: 'Some text' })
            )
          )
        )
      )
    )
  );
};

exports.default = Roadmap;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ashkor.7ff44c16.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/etsaryk.052cb4d2.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/aermolaev.53699c58.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/akulik.39060d33.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/arusetskiy.f6875500.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/akulichkin.5d20cb3b.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/nsvyaznoy.aa798147.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/emarushko.9a95db57.png";

/***/ }),
/* 43 */
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

var _bg = __webpack_require__(44);

var _bg2 = _interopRequireDefault(_bg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Main = exports.Main = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__Main',
  componentId: 's1vuz0i8-0'
})(['position:relative;background-image:url(', ');background-repeat:repeat-y;background-size:100% 411px;', ';'], _bg2.default, _styles.m.lessThan('small')(_templateObject));

var Section = exports.Section = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__Section',
  componentId: 's1vuz0i8-1'
})(['position:relative;display:flex;justify-content:space-around;height:', 'px;', ';'], 411 / 2, _styles.m.lessThan('small')(_templateObject2));

var EntryRoot = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__EntryRoot',
  componentId: 's1vuz0i8-2'
})(['position:relative;display:flex;flex-flow:column;align-items:center;color:#fff;top:52px;width:25%;min-width:25%;height:100%;opacity:', ';', ';'], function (p) {
  return p.done ? '0.2' : '1';
}, _styles.m.lessThan('small')(_templateObject3));

var EntryLabel = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__EntryLabel',
  componentId: 's1vuz0i8-3'
})(['font-weight:700;text-align:center;line-height:1.5;text-transform:uppercase;margin-bottom:16px;', ';'], _styles.m.lessThan('small')(_templateObject4));

var EntryPoint = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__EntryPoint',
  componentId: 's1vuz0i8-4'
})(['border-radius:100%;background:#fff;width:22px;height:22px;min-width:22px;min-height:22px;box-shadow:0px 4px 4px rgba(0,0,0,0.25);', ';'], _styles.m.lessThan('small')(_templateObject5));

var EntryText = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__EntryText',
  componentId: 's1vuz0i8-5'
})(['font-size:16px;line-height:1.5;text-align:center;margin:16px 0 0 0;', ';'], _styles.m.lessThan('small')(_templateObject6));

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
  componentId: 's1vuz0i8-6'
})(['position:relative;display:flex;flex-flow:column;align-items:center;text-align:center;color:#fff;top:-38px;height:100%;opacity:', ';', ';'], function (p) {
  return p.done ? '0.2' : '1';
}, _styles.m.lessThan('small')(_templateObject7));

var PopupContent = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__PopupContent',
  componentId: 's1vuz0i8-7'
})(['width:150px;min-width:150px;']);

var PopupLabel = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__PopupLabel',
  componentId: 's1vuz0i8-8'
})(['background:', ';font-weight:400;font-size:15px;color:', ';height:24px;min-height:24px;line-height:24px;width:100%;'], function (p) {
  return p.accent ? '#e71d36' : '#fff';
}, function (p) {
  return p.accent ? '#fff' : p.theme.palette.primary;
});

var PopupText = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__PopupText',
  componentId: 's1vuz0i8-9'
})(['background:rgba(255,255,255,0.1);font-weight:300;font-size:18px;height:72px;line-height:72px;width:100%;']);

var PopupArrow = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__PopupArrow',
  componentId: 's1vuz0i8-10'
})(['', ';', ';'], _styles.m.greaterThan('small')(_templateObject8), _styles.m.lessThan('small')(_templateObject9));

var PopupPoint = _styledComponents2.default.div.withConfig({
  displayName: 'Roadmap__PopupPoint',
  componentId: 's1vuz0i8-11'
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bg.ebfd0c34.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/roadmap.312880b3.svg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/roadmap_mobile.0d652514.svg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Team = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ph = 'https://via.placeholder.com/350/eee/777?text=Person';

var persons = [{ src: ph, name: 'Name', role: 'Role', linkedin: 'src', github: 'src' }, { src: ph, name: 'Name', role: 'Role', linkedin: 'src', github: 'src' }, { src: ph, name: 'Name', role: 'Role', linkedin: 'src', github: 'src' }];

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
        _Team.Block,
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    flex-flow: column;\n    align-items: center;\n    margin-top: 64px;\n  '], ['\n    flex-flow: column;\n    align-items: center;\n    margin-top: 64px;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin-right: 64px;\n  '], ['\n    margin-right: 64px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 100%;\n    margin-top: 24px;\n  '], ['\n    width: 100%;\n    margin-top: 24px;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  margin-top: 48px;\n'], ['\n  margin-top: 48px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(3);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Person = __webpack_require__(13);

var _Person2 = _interopRequireDefault(_Person);

var _MessageBox = __webpack_require__(49);

var _MessageBox2 = _interopRequireDefault(_MessageBox);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Team = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ph = 'https://via.placeholder.com/350/eee/777?text=Person';

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
  componentId: 's18dv0n9-0'
})(['display:flex;margin-top:64px;', ';'], _styles.m.lessThan('small')(_templateObject));

var Person = (0, _styledComponents2.default)(_Person2.default).withConfig({
  displayName: '06_Researchers__Person',
  componentId: 's18dv0n9-1'
})(['', ';'], _styles.m.greaterThan('small')(_templateObject2));

var MessageBox = (0, _styledComponents2.default)(_MessageBox2.default).withConfig({
  displayName: '06_Researchers__MessageBox',
  componentId: 's18dv0n9-2'
})(['width:', '%;', ';'], 100 * 5 / 8, _styles.m.lessThan('small')(_templateObject3));

var Button = _Button2.default.extend(_templateObject4);

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
/* 49 */
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

var _Text = __webpack_require__(8);

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
/* 50 */
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

var _Partner = __webpack_require__(51);

var _Partner2 = _interopRequireDefault(_Partner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ph = 'https://via.placeholder.com/350x150?text=Partner';

var Bg = _styledComponents2.default.div.withConfig({
  displayName: '07_Partners__Bg',
  componentId: 's1r809a0-0'
})(['background:', ';'], function (p) {
  return p.theme.palette.background.primary;
});

var Root = _styledComponents2.default.section.withConfig({
  displayName: '07_Partners__Root',
  componentId: 's1r809a0-1'
})(['', ';padding:64px 0;'], _styles.container);

var Container = _Team.Container.extend(_templateObject, _styles.m.lessThan('small')(_templateObject2));

var Block = _styledComponents2.default.div.withConfig({
  displayName: '07_Partners__Block',
  componentId: 's1r809a0-2'
})(['display:flex;flex-wrap:wrap;align-items:center;justify-content:center;margin-top:32px;margin-left:-16px;margin-right:-16px;']);

var Partner = (0, _styledComponents2.default)(_Partner2.default).withConfig({
  displayName: '07_Partners__Partner',
  componentId: 's1r809a0-3'
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
/* 51 */
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 48px;\n'], ['\n  margin-top: 48px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Team = __webpack_require__(5);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Mention = __webpack_require__(53);

var _Mention2 = _interopRequireDefault(_Mention);

var _icon_meduza = __webpack_require__(54);

var _icon_meduza2 = _interopRequireDefault(_icon_meduza);

var _icon_medium = __webpack_require__(55);

var _icon_medium2 = _interopRequireDefault(_icon_medium);

var _icon_tj = __webpack_require__(56);

var _icon_tj2 = _interopRequireDefault(_icon_tj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var Button = _Button2.default.extend(_templateObject);

var Mention = (0, _styledComponents2.default)(_Mention2.default).withConfig({
  displayName: '08_Media__Mention',
  componentId: 's3aaihm-0'
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
/* 53 */
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

var _Text = __webpack_require__(8);

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
/* 54 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCA0NiAyNyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cHM6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cHM6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8dGl0bGU+TWVkdXphX2xvZ288L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPgo8ZyBpZD0iQ2FudmFzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjg1IC02ODY5KSI+CjxnIGlkPSJNZWR1emFfbG9nbyI+CjxnIGlkPSJJbXBvcnRlZCBMYXllcnMiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMF9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODUgNjg2OSkiIGZpbGw9IiMzMzFENTAiLz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0gMTguODczIDcuMDU1NzVMIDE4Ljg3MyAyNC40NTk5TCAyNy4xMjcgMjdMIDI3LjEyNyA3LjA1NTc1TCAzMi40MzY1IDcuMDU1NzVMIDMyLjQzNjUgMjQuNDU5OUwgNDAuNjQyMiAyN0wgNDYgMTkuOTQ0M0wgNDAuNjkwNCAxOS45NDQzTCA0MC42OTA0IDIuNzc1MjZMIDMyLjQ4NDggMEwgMjcuMTI3IDYuMTE0OThMIDI3LjEyNyAyLjc3NTI2TCAxOC45MjEzIDBMIDEzLjU2MzUgNi4xMTQ5OEwgMTMuNTYzNSAyLjc3NTI2TCA1LjM1NzgyIDBMIDAgNy4wNTU3NUwgNS4zMDk1NSA3LjA1NTc1TCA1LjMwOTU1IDI0LjQ1OTlMIDEzLjU2MzUgMjdMIDEzLjU2MzUgNy4wNTU3NUwgMTguODczIDcuMDU1NzVaIi8+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAzMiAyOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cHM6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cHM6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8dGl0bGU+JiMyMzk7JiMxMzY7JiMxODY7PC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB1c2luZyBGaWdtYTwvZGVzYz4KPGcgaWQ9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI5NSAtNjYwNSkiPgo8ZyBpZD0iJiMyMzk7JiMxMzY7JiMxODY7Ij4KPHVzZSB4bGluazpocmVmPSIjcGF0aDBfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk1IDY2MDUuMDQpIiBmaWxsPSIjMzMxRDUwIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPHBhdGggaWQ9InBhdGgwX2ZpbGwiIGQ9Ik0gMTAuNjYwNyA1LjA1MzU3QyAxMC42NjA3IDUuMDM1NzEgMTAuNjI1IDQuOTgyMTQgMTAuNjA3MSA0Ljk2NDI4TCAxLjQ4MjE0IDAuMzkyODU3QyAxLjIzMjE0IDAuMjY3ODU3IDAuOTgyMTQzIDAuMTI1IDAuNjk2NDI4IDAuMTI1QyAwLjIxNDI4NSAwLjEyNSAwIDAuNTM1NzEzIDAgMC45ODIxNDFMIDAgMjEuMzM5M0MgMCAyMS44NzUgMC4zOTI4NTggMjIuNTE3OSAwLjg5Mjg1OCAyMi43Njc5TCA5LjE5NjQzIDI2LjkyODZDIDkuMzc1IDI3LjAxNzkgOS41NzE0MyAyNy4wNzE0IDkuNzg1NzEgMjcuMDcxNEMgMTAuMzkyOSAyNy4wNzE0IDEwLjY2MDcgMjYuNTUzNiAxMC42NjA3IDI2TCAxMC42NjA3IDUuMDUzNTdaTSAxMS44MDM2IDYuODU3MTRMIDExLjgwMzYgMTcuNTcxNEwgMjEuMzM5MyAyMi4zMjE0TCAxMS44MDM2IDYuODU3MTRaTSAzMiA3LjE3ODU3TCAyMi4zNTcxIDIyLjgzOTNMIDMwLjIzMjEgMjYuNzY3OUMgMzAuNDgyMSAyNi45MTA3IDMwLjc2NzkgMjcgMzEuMDcxNCAyN0MgMzEuNjYwNyAyNyAzMiAyNi41ODkzIDMyIDI2TCAzMiA3LjE3ODU3Wk0gMzEuOTQ2NCA1LjAzNTcxQyAzMS45NDY0IDQuOTgyMTQgMzEuOTEwNyA0Ljk0NjQzIDMxLjg3NSA0LjkyODU3TCAyMi4yMTQzIDAuMTA3MTQxQyAyMi4wNzE0IDAuMDM1NzEzMiAyMS45MTA3IDAgMjEuNzUgMEMgMjEuMzc1IDAgMjEuMDE3OSAwLjE3ODU3IDIwLjgyMTQgMC41TCAxNS4wMzU3IDkuOTEwNzFMIDIyIDIxLjIzMjFDIDIyLjcxNDMgMjAuMDg5MyAzMS45NDY0IDUuMTA3MTQgMzEuOTQ2NCA1LjAzNTcxWiIvPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cHM6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cHM6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8dGl0bGU+R3JvdXAgNjwvdGl0bGU+CjxkZXNjPkNyZWF0ZWQgdXNpbmcgRmlnbWE8L2Rlc2M+CjxnIGlkPSJDYW52YXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOTUgLTY3MzUpIj4KPGcgaWQ9Ikdyb3VwIDYiPgo8ZyBpZD0iVmVjdG9yIDIiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMF9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTUgNjczNSkiIGZpbGw9IiMzMzFENTAiLz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSJNIDAgMEwgMzIgMEwgMzIgOC42NTg4MkwgMjAuNTcxNCA4LjY1ODgyTCAyMC41NzE0IDI0LjQ3MDZMIDExLjgwOTUgMzJMIDAgMzJMIDAgMjQuMDk0MUwgMTEuODA5NSAyNC4wOTQxTCAxMS44MDk1IDguNjU4ODJMIDAgOC42NTg4MkwgMCAwWiIvPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),
/* 57 */
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

var _SubscribeInput = __webpack_require__(58);

var _SubscribeInput2 = _interopRequireDefault(_SubscribeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Bg = _styledComponents2.default.div.withConfig({
  displayName: '09_Subscribe__Bg',
  componentId: 'k0f0lg-0'
})(['background:linear-gradient(167.13deg,#331d50 24.88%,#247fad 99.11%);']);

var Root = _styledComponents2.default.section.withConfig({
  displayName: '09_Subscribe__Root',
  componentId: 'k0f0lg-1'
})(['', ';padding:64px 0;h1{color:#fff;}'], _styles.container);

var Container = _Team.Container.extend(_templateObject, _styles.m.lessThan('small')(_templateObject2));

var Small = _styledComponents2.default.p.withConfig({
  displayName: '09_Subscribe__Small',
  componentId: 'k0f0lg-2'
})(['font-weight:700;font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;margin:0 0 4px 0;']);

var Form = _styledComponents2.default.form.withConfig({
  displayName: '09_Subscribe__Form',
  componentId: 'k0f0lg-3'
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
          { method: 'post', action: '/subscribe' },
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
/* 58 */
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

var _icon_send = __webpack_require__(59);

var _icon_send2 = _interopRequireDefault(_icon_send);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'SubscribeInput__Root',
  componentId: 's1yytw65-0'
})(['display:inline-flex;align-items:center;border-radius:30px;border:1px solid #fff;']);

var Submit = _styledComponents2.default.button.withConfig({
  displayName: 'SubscribeInput__Submit',
  componentId: 's1yytw65-1'
})(['border:none;background:transparent;cursor:pointer;padding:0;margin-right:9px;transition:opacity 0.3s;opacity:0.6;']);

var InputComp = _styledComponents2.default.input.withConfig({
  displayName: 'SubscribeInput__InputComp',
  componentId: 's1yytw65-2'
})(['border:none;background:transparent;font-size:16px;line-height:60px;color:#fff;width:100%;min-width:0;margin:0 16px 0 30px;&:focus{outline:none;}&:focus ~ button{opacity:1;}&::placeholder{color:rgba(255,255,255,0.5);}']);

var Icon = _styledComponents2.default.img.withConfig({
  displayName: 'SubscribeInput__Icon',
  componentId: 's1yytw65-3'
})(['display:block;width:42px;']);

var Input = function Input(p) {
  return _react2.default.createElement(
    Root,
    null,
    _react2.default.createElement(InputComp, p),
    _react2.default.createElement(
      Submit,
      null,
      _react2.default.createElement(Icon, { src: _icon_send2.default })
    )
  );
};

exports.default = Input;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cHM6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cHM6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8dGl0bGU+U3VidHJhY3Q8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPgo8ZyBpZD0iQ2FudmFzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzc1IC03MzAwKSI+CjxnIGlkPSJTdWJ0cmFjdCI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgwX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc3NSA3MzAwKSIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjwvZz4KPGRlZnM+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0gMjEgNDJDIDMyLjU5OCA0MiA0MiAzMi41OTc3IDQyIDIxQyA0MiA5LjQwMjM0IDMyLjU5OCAwIDIxIDBDIDkuNDAyMDQgMCAwIDkuNDAyMzQgMCAyMUMgMCAzMi41OTc3IDkuNDAyMDQgNDIgMjEgNDJaTSAyNy40Mjg2IDEzLjI4NjFDIDI3LjU0NDYgMTMuMjg2MSAyNy42NjA3IDEzLjMyMTMgMjcuNzUgMTMuMzgzOEMgMjcuOTM3NSAxMy41MTc2IDI4LjAyNjggMTMuNzMyNCAyNy45OTExIDEzLjk1NTFMIDI1LjcwNTQgMjcuNjY5OUMgMjUuNjc4NiAyNy44Mzg5IDI1LjU3MTQgMjcuOTgyNCAyNS40MTk2IDI4LjA3MTNDIDI1LjMzOTMgMjguMTE2MiAyNS4yNDExIDI4LjE0MjYgMjUuMTQyOSAyOC4xNDI2QyAyNS4wNzE0IDI4LjE0MjYgMjUgMjguMTI1IDI0LjkyODYgMjguMDk4NkwgMjAuODgzOSAyNi40NDYzTCAxOC43MjMyIDI5LjA4MDFDIDE4LjYxNjEgMjkuMjEzOSAxOC40NTU0IDI5LjI4NjEgMTguMjg1NyAyOS4yODYxQyAxOC4yMjMyIDI5LjI4NjEgMTguMTUxOCAyOS4yNzY0IDE4LjA4OTMgMjkuMjVDIDE3Ljg2NjEgMjkuMTY5OSAxNy43MTQzIDI4Ljk1NTEgMTcuNzE0MyAyOC43MTM5TCAxNy43MTQzIDI1LjU5ODZMIDI1LjQyODYgMTYuMTQyNkwgMTUuODgzOSAyNC40MDE0TCAxMi4zNTcxIDIyLjk1NTFDIDEyLjE1MTggMjIuODc1IDEyLjAxNzkgMjIuNjg3NSAxMiAyMi40NjM5QyAxMS45OTExIDIyLjI1IDEyLjA5ODIgMjIuMDQ0OSAxMi4yODU3IDIxLjkzNzVMIDI3LjE0MjkgMTMuMzY2MkMgMjcuMjMyMSAxMy4zMTI1IDI3LjMzMDQgMTMuMjg2MSAyNy40Mjg2IDEzLjI4NjFaIi8+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(9);

var _Poll = __webpack_require__(61);

var _Poll2 = _interopRequireDefault(_Poll);

var _Footer = __webpack_require__(14);

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
/* 61 */
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

var _MobileMenu = __webpack_require__(12);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

var _Heading = __webpack_require__(4);

var _Heading2 = _interopRequireDefault(_Heading);

var _Text = __webpack_require__(8);

var _Text2 = _interopRequireDefault(_Text);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _RadioButton = __webpack_require__(62);

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _Input = __webpack_require__(63);

var _Input2 = _interopRequireDefault(_Input);

var _Checkbox = __webpack_require__(64);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _TextArea = __webpack_require__(65);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.section.withConfig({
  displayName: '20_Poll__Root',
  componentId: 's13jusgx-0'
})(['', ';padding:48px 0 0 0;'], _styles.container);

var Section = _styledComponents2.default.div.withConfig({
  displayName: '20_Poll__Section',
  componentId: 's13jusgx-1'
})(['margin:48px 0;']);

var Description = (0, _styledComponents2.default)(_Text2.default).withConfig({
  displayName: '20_Poll__Description',
  componentId: 's13jusgx-2'
})(['display:block;width:', '%;margin:0 auto;', ';'], 100 * 6 / 8, _styles.m.lessThan('small')(_templateObject));

var ControlBlock = _styledComponents2.default.div.withConfig({
  displayName: '20_Poll__ControlBlock',
  componentId: 's13jusgx-3'
})(['display:flex;flex-wrap:wrap;text-align:left;margin:0 -16px 32px -16px;', ';'], _styles.m.lessThan('small')(_templateObject2));

var Radio = (0, _styledComponents2.default)(_RadioButton2.default).withConfig({
  displayName: '20_Poll__Radio',
  componentId: 's13jusgx-4'
})(['width:calc(100% / 4 - 32px);margin:16px;', ';'], _styles.m.lessThan('small')(_templateObject3));

var Input = (0, _styledComponents2.default)(_Input2.default).withConfig({
  displayName: '20_Poll__Input',
  componentId: 's13jusgx-5'
})(['width:calc(100% / 2 - 32px);margin:16px;', ';'], _styles.m.lessThan('small')(_templateObject4));

var Checkbox = (0, _styledComponents2.default)(_Checkbox2.default).withConfig({
  displayName: '20_Poll__Checkbox',
  componentId: 's13jusgx-6'
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
      type: 'researcher'
    }, _this.setType = function (e) {
      return _this.setState({ type: e.target.id });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Poll, [{
    key: 'render',
    value: function render() {
      var setType = this.setType;

      return _react2.default.createElement(
        Root,
        this.props,
        _react2.default.createElement(_Menu2.default, { attached: true }),
        _react2.default.createElement(_MobileMenu2.default, { attached: true }),
        _react2.default.createElement(
          _Team.Container,
          null,
          _react2.default.createElement(
            'form',
            { action: '' },
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
                  onClick: setType
                }),
                _react2.default.createElement(Radio, {
                  id: 'collaborator',
                  name: 'type',
                  icon: 'user-plus',
                  children: 'Collaborator',
                  onClick: setType
                }),
                _react2.default.createElement(Radio, {
                  id: 'investor',
                  name: 'type',
                  icon: 'usd',
                  children: 'Investor',
                  onClick: setType
                }),
                _react2.default.createElement(Radio, {
                  id: 'organisation',
                  name: 'type',
                  icon: 'building',
                  children: 'Organisation',
                  onClick: setType
                })
              ),
              _react2.default.createElement(
                Description,
                null,
                descs[this.state.type]
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
                _react2.default.createElement(Input, { icon: 'user', placeholder: 'Full name' }),
                _react2.default.createElement(Input, { icon: 'graduation-cap', placeholder: 'Academic degree' }),
                _react2.default.createElement(Input, { icon: 'envelope', placeholder: 'Email' }),
                _react2.default.createElement(Input, { icon: 'users', placeholder: 'Association' })
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
                  { checked: true, name: '1' },
                  'Publish research on the platform'
                ),
                _react2.default.createElement(
                  Checkbox,
                  { name: '2' },
                  'Invite scientists and researchers to your research'
                ),
                _react2.default.createElement(
                  Checkbox,
                  { name: '3' },
                  'Attract fundings for your research'
                ),
                _react2.default.createElement(
                  Checkbox,
                  { name: '4' },
                  'Work as reviewer for other research'
                ),
                _react2.default.createElement(
                  Checkbox,
                  { checked: true, name: '5' },
                  'Manage your research'
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
                  { checked: true, name: '6' },
                  'Prepare your previous researches to be included into genesis block'
                ),
                _react2.default.createElement(
                  Checkbox,
                  { name: '7' },
                  'To become advisor'
                ),
                _react2.default.createElement(
                  Checkbox,
                  { name: '8' },
                  'Invite scientists for participate in disciplines tokens distribution'
                ),
                _react2.default.createElement(
                  Checkbox,
                  { checked: true, name: '9' },
                  'Use prototype of DEIP platform and provide feedback to the development team'
                )
              ),
              _react2.default.createElement(_TextArea2.default, { placeholder: 'Please, provide your background' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { primary: true, to: '/' },
              'Send'
            )
          )
        )
      );
    }
  }]);

  return Poll;
}(_react.Component);

var descs = {
  researcher: '1 You will be one of the first members of DEIP platform. Your feedback is very important\nfor us, and we would be glad to have you in our advisory board. Every scientist and \nresearcher, who joins DEIP platform before its official release (genesis block) will have \nan abbility to participate in initial expertise token distribution and obtain tokens in \nconformity with his proficiency.',
  collaborator: '2 You will be one of the first members of DEIP platform. Your feedback is very important\nfor us, and we would be glad to have you in our advisory board. Every scientist and \nresearcher, who joins DEIP platform before its official release (genesis block) will have \nan abbility to participate in initial expertise token distribution and obtain tokens in \nconformity with his proficiency.',
  investor: '3 You will be one of the first members of DEIP platform. Your feedback is very important\nfor us, and we would be glad to have you in our advisory board. Every scientist and \nresearcher, who joins DEIP platform before its official release (genesis block) will have \nan abbility to participate in initial expertise token distribution and obtain tokens in \nconformity with his proficiency.',
  organisation: '4 You will be one of the first members of DEIP platform. Your feedback is very important\nfor us, and we would be glad to have you in our advisory board. Every scientist and \nresearcher, who joins DEIP platform before its official release (genesis block) will have \nan abbility to participate in initial expertise token distribution and obtain tokens in \nconformity with his proficiency.'
};

exports.default = Poll;

/***/ }),
/* 62 */
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

var _Icon = __webpack_require__(7);

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
/* 63 */
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

var _Icon = __webpack_require__(7);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Root = _styledComponents2.default.div.withConfig({
  displayName: 'Input__Root',
  componentId: 's1k4erxv-0'
})(['position:relative;']);

var ph = function ph(p) {
  return (0, _polished.placeholder)({ color: p.theme.palette.text.secondary });
};

var Comp = _styledComponents2.default.input.withConfig({
  displayName: 'Input__Comp',
  componentId: 's1k4erxv-1'
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
  componentId: 's1k4erxv-2'
})(['position:absolute;font-size:18px;line-height:49px;top:2px;right:16px;']);

var Input = function Input(_ref) {
  var icon = _ref.icon,
      placeholder = _ref.placeholder,
      rest = _objectWithoutProperties(_ref, ['icon', 'placeholder']);

  return _react2.default.createElement(
    Root,
    rest,
    _react2.default.createElement(Comp, { placeholder: placeholder }),
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
/* 64 */
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

var _Icon = __webpack_require__(7);

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
/* 65 */
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
/* 66 */
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
//# sourceMappingURL=app.static.c1b90636.js.map