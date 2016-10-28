/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	var _guild = __webpack_require__(5);
	
	var _guild2 = _interopRequireDefault(_guild);
	
	var _index = __webpack_require__(7);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _main = __webpack_require__(12);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _search = __webpack_require__(18);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _share = __webpack_require__(21);
	
	var _share2 = _interopRequireDefault(_share);
	
	var _watch = __webpack_require__(22);
	
	var _watch2 = _interopRequireDefault(_watch);
	
	var _my = __webpack_require__(23);
	
	var _my2 = _interopRequireDefault(_my);
	
	var _detail = __webpack_require__(26);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	var _commonUtil = __webpack_require__(14);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _store = __webpack_require__(29);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_commonUtil2.default.myScroll();
	
	// views
	
	
	var router = new VueRouter();
	
	//引入store 在根组件中使用它与他的子组件连接起来。
	
	var App = Vue.extend({
	  store: _store2.default //在根组件加入store ,让她的子组件和store连接
	});
	
	router.map({
	  '/': {
	    component: _guild2.default
	  },
	  '/index': {
	    component: _index2.default,
	    subRoutes: {
	      '/': {
	        component: _main2.default
	      },
	      '/search': {
	        component: _search2.default
	      },
	      '/share': {
	        component: _share2.default
	      },
	      '/watch': {
	        component: _watch2.default
	      },
	      '/my': {
	        component: _my2.default
	      }
	    }
	  },
	  '/detail/:id': {
	    name: 'detail',
	    component: _detail2.default
	  }
	});
	
	router.start(App, 'body');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b8a67a38/guild.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"guild-container\">\n    <img v-link=\"{path: '/index'}\" src=\"/images/guild.png\">\n  </div>\n</tempalte>\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3c93af7a/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(9);
	
	var _getters = __webpack_require__(10);
	
	// <template>
	//   <div>
	//     <div class="index-container">
	//         <router-view></router-view>
	//     </div>
	//     <footer id="footer">
	//         <ul>
	//             <li
	//               v-bind:class="curIndex == $index ? 'active' : ''"
	//               v-on:click="changPage($index)"
	//               v-for="tab in tablist"
	//               v-link="{path: tab.path}">
	//                 <i class="iconfont">{{{tab.icon}}}</i>
	//                 <b>{{tab.name}}</b>
	//             </li>
	//         </ul>
	//     </footer>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  vuex: {
	    getters: {
	      curIndex: _getters.getIndex
	    },
	    actions: {
	      change: _actions.changeIndex
	    }
	  },
	  data: function data() {
	    return {
	      tablist: [{ path: '/index', icon: '&#xe600;', name: '首页' }, { path: '/index/search', icon: '&#xe604;', name: '发现' }, { path: '/index/share', icon: '&#xe608;', name: '' }, { path: '/index/watch', icon: '&#xe605;', name: '关注' }, { path: '/index/my', icon: '&#xe601;', name: '个人' }]
	    };
	  },
	
	
	  methods: {
	    changPage: function changPage(i) {}
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//操作状态
	var changeIndex = exports.changeIndex = function changeIndex(_ref, tabIndex) {
	  var dispatch = _ref.dispatch;
	  var states = _ref.states;
	
	  dispatch('CHANGEINDEX', tabIndex);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getIndex = exports.getIndex = function getIndex(state) {
	  return state.tabIndex;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div class=\"index-container\">\n      <router-view></router-view>\n  </div>\n  <footer id=\"footer\">\n      <ul>\n          <li\n            v-bind:class=\"curIndex == $index ? 'active' : ''\"\n            v-on:click=\"changPage($index)\"\n            v-for=\"tab in tablist\"\n            v-link=\"{path: tab.path}\">\n              <i class=\"iconfont\">{{{tab.icon}}}</i>\n              <b>{{tab.name}}</b>\n          </li>\n      </ul>\n  </footer>\n</div>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(13)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-39d08ed8/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _commonUtil = __webpack_require__(14);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _vueLoading = __webpack_require__(15);
	
	var _vueLoading2 = _interopRequireDefault(_vueLoading);
	
	var _actions = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//    <div class="main-container">
	//       <div class="main-header">
	//           <p><img src="/images/logo.png"/></p>
	//           <input class='iconfont' type="button" value="&#xe603;">
	//       </div>
	//       <div class="main-scroll">
	//           <div class="scroll-box">
	//               <div class="head">
	//                     <img v-bind:src="imgArrow"/>
	//                     <span>下拉刷新...</span>
	//               </div>
	//               <div class="swiper-container">
	//                   <div class="swiper-wrapper">
	//                      <div class="swiper-slide"><img src="/images/slide1.png"/></div>
	//                      <div class="swiper-slide"><img src="/images/slide2.png"/></div>
	//                      <div class="swiper-slide"><img src="/images/slide3.png"/></div>
	//                   </div>
	//                   <div class="swiper-pagination"></div>
	//               </div>
	//               <section class="first-list">
	//                   <ul>
	//                     <li><image src="/images/3.png"></image></li>
	//                     <li><image src="/images/4.png"></image></li>
	//                     <li><image src="/images/5.png"></image></li>
	//                   </ul>
	//               </section>
	//               <div class="main-list">
	//                  <dl v-for="l in list" v-link="{name: 'detail', params: {id: l.id}}">
	//                     <dt>
	//                         <p><img v-bind:src="l.img"/><i>{{l.name}}</i></p>
	//                         <span class="iconfont">&#xe602;</span>
	//                     </dt>
	//                     <dd><img v-bind:src="l.img1"/></dd>
	//                     <dd>{{l.text}}</dd>
	//                     <dd>
	//                         <span><i class="iconfont">&#xe604;</i>{{l.num1}}</span>
	//                         <span><i class="iconfont">&#xe606;</i>{{l.num2}}</span>
	//                         <span><i class="iconfont">&#xe605;</i>{{l.num3}}</span>
	//                     </dd>
	//                  <dl>
	//                </div>
	//                <div class="foot">
	//                   <img v-bind:src="imgArrow"/>
	//                   <span>加载中...</span>
	//                </div>
	//           </div>
	//       </div>
	//   </div>
	// </template>
	//
	// <script>
	var mySwiper = null;
	
	//引入action.js 中定义的 changeIndex 方法,改变tabIndex
	exports.default = {
	    vuex: {
	        actions: {
	            change: _actions.changeIndex
	        }
	    },
	    data: function data() {
	        return {
	            list: [],
	            beautylist: [],
	            imgArrow: './images/arrow.png',
	            curIndex: 0,
	            isShowLoading: false,
	            isLoading: true
	        };
	    },
	
	    directives: {
	        loading: _vueLoading2.default
	    },
	    ready: function ready() {
	        var _this = this;
	
	        this.change(0);
	        var that = this;
	        this.$http.get('/rest/list').then(function (res) {
	            _this.list = res.data.data;
	            _this.isLoading = false;
	            // DOM 更新后，图片加载完 实例化 IScroll
	            Vue.nextTick(function () {
	                _commonUtil2.default.isAllLoaded('.main-scroll', function () {
	                    var myScroll = new IScroll('.main-scroll', {
	                        probeType: 3,
	                        mouseWheel: true,
	                        click: true
	                    });
	
	                    myScroll.scrollTo(0, -55);
	
	                    var head = $('.head img'),
	                        topImgHasClass = head.hasClass('up');
	                    var foot = $('.foot img'),
	                        bottomImgHasClass = head.hasClass('down');
	
	                    myScroll.on('scroll', function () {
	                        var y = this.y,
	                            maxY = this.maxScrollY - y;
	                        if (y >= 0) {
	                            !topImgHasClass && head.addClass('up');
	                            return '';
	                        }
	                        if (maxY >= 0) {
	                            !bottomImgHasClass && foot.addClass('down');
	                            return '';
	                        }
	                    });
	
	                    myScroll.on('scrollEnd', function () {
	                        if (this.y >= -55 && this.y < 0) {
	                            myScroll.scrollTo(0, -55);
	                            head.removeClass('up');
	                        } else if (this.y >= 0) {
	                            head.attr('src', './images/ajax-loader.gif');
	
	                            // ajax下拉刷新数据
	                            that.$http.get('/rest/refreshlist').then(function (res) {
	                                that.list = res.data.data.concat(that.list);
	                                myScroll.scrollTo(0, -55);
	                                head.removeClass('up');
	                                head.attr('src', './images/arrow.png');
	                                Vue.nextTick(function () {
	                                    myScroll.refresh();
	                                });
	                            });
	                        }
	
	                        var self = this;
	                        var maxY = this.maxScrollY - this.y;
	                        if (maxY > -55 && maxY < 0) {
	                            myScroll.scrollTo(0, self.maxScrollY + 55);
	                            foot.removeClass('down');
	                        } else if (maxY >= 0) {
	                            foot.attr('src', './images/ajax-loader.gif');
	                            //ajax上拉加载数据
	                            that.$http.get('/rest/morelist').then(function (res) {
	                                that.list = that.list.concat(res.data.data);
	                                foot.removeClass('down');
	                                foot.attr('src', './images/arrow.png');
	                                Vue.nextTick(function () {
	                                    myScroll.refresh();
	                                    myScroll.scrollTo(0, self.maxScrollY + 55);
	                                });
	                            });
	                        }
	                    });
	                });
	            });
	        });
	    }
	
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var commonUtil = {
	    isAllLoaded: function isAllLoaded(scope, cb) {
	        var t_img; // 定时器
	        var isLoad = true; // 控制变量
	
	        // 判断图片加载状况，加载完成后回调
	        return isImgLoad(cb);
	
	        // 判断图片加载的函数
	        function isImgLoad(callback) {
	            // 查找所有图片，迭代处理
	            $(scope).find('img').each(function () {
	                // 找到为0就将isLoad设为false，并退出each
	                if (this.height === 0) {
	                    isLoad = false;
	                    return false;
	                }
	            });
	            // 为true，没有发现为0的。加载完毕
	            if (isLoad) {
	                clearTimeout(t_img); // 清除定时器
	                // 回调函数
	                callback(scope);
	                // 为false，因为找到了没有加载完成的图，将调用定时器递归
	            } else {
	                isLoad = true;
	                t_img = setTimeout(function () {
	                    isImgLoad(callback); // 递归扫描
	                }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	            }
	        }
	    },
	    myScroll: function myScroll() {
	        var that = this;
	        Vue.directive('scroll', function (value) {
	            if (value) {
	                that.isAllLoaded(value, function (value) {
	                    new IScroll(value);
	                });
	            }
	        });
	    }
	};
	
	exports.default = commonUtil;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	!function (t, e) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports["vue-loading"] = e() : t["vue-loading"] = e();
	}(undefined, function () {
	  return function (t) {
	    function e(o) {
	      if (n[o]) return n[o].exports;var r = n[o] = { exports: {}, id: o, loaded: !1 };return t[o].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports;
	    }var n = {};return e.m = t, e.c = n, e.p = "", e(0);
	  }([function (t, e, n) {
	    "use strict";
	    function o(t) {
	      return t && t.__esModule ? t : { "default": t };
	    }Object.defineProperty(e, "__esModule", { value: !0 });var r = n(2),
	        i = o(r);n(19), e["default"] = { params: ["loadingOptions"], handleShow: function handleShow() {
	        var t = window.getComputedStyle(this.el).position;"static" !== t && "" !== t || (this["static"] = !0, this.el.style.position = "relative");var e = document.createElement("div");e.className = "vue-loading", e.style.backgroundColor = this.options.bg, this.el.appendChild(e);var n = document.createElement("div");n.className = "vue-loading-msg", n.textContent = this.options.text, e.appendChild(n), window.requestAnimationFrame(function () {
	          e.style.opacity = 1;
	        }), this.loadingBox = e;
	      }, handleHide: function handleHide() {
	        var t = this;this.loadingBox.addEventListener("transitionend", function () {
	          t.loadingBox.remove(), t["static"] && t.el.style.removeProperty("position");
	        }), this.loadingBox.style.opacity = 0;
	      }, bind: function bind() {
	        this["static"] = !1, this.loadingBox = null, this.first = !0, this.options = { text: "Loading ...", bg: "rgba(230, 233, 236, 0.8)" }, this.params.loadingOptions && (0, i["default"])(this.options, this.params.loadingOptions);
	      }, update: function update(t) {
	        if (t) this.first = !1, this.handleShow();else {
	          if (this.first) return void (this.first = !1);this.handleHide();
	        }
	      } };
	  }, function (t, e) {
	    var n = t.exports = { version: "1.2.6" };"number" == typeof __e && (__e = n);
	  }, function (t, e, n) {
	    t.exports = { "default": n(3), __esModule: !0 };
	  }, function (t, e, n) {
	    n(15), t.exports = n(1).Object.assign;
	  }, function (t, e) {
	    t.exports = function (t) {
	      if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
	    };
	  }, function (t, e) {
	    var n = {}.toString;t.exports = function (t) {
	      return n.call(t).slice(8, -1);
	    };
	  }, function (t, e, n) {
	    var o = n(4);t.exports = function (t, e, n) {
	      if (o(t), void 0 === e) return t;switch (n) {case 1:
	          return function (n) {
	            return t.call(e, n);
	          };case 2:
	          return function (n, o) {
	            return t.call(e, n, o);
	          };case 3:
	          return function (n, o, r) {
	            return t.call(e, n, o, r);
	          };}return function () {
	        return t.apply(e, arguments);
	      };
	    };
	  }, function (t, e) {
	    t.exports = function (t) {
	      if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
	    };
	  }, function (t, e, n) {
	    var o = n(10),
	        r = n(1),
	        i = n(6),
	        s = "prototype",
	        a = function a(t, e, n) {
	      var u,
	          c,
	          f,
	          l = t & a.F,
	          p = t & a.G,
	          d = t & a.S,
	          h = t & a.P,
	          g = t & a.B,
	          v = t & a.W,
	          b = p ? r : r[e] || (r[e] = {}),
	          y = p ? o : d ? o[e] : (o[e] || {})[s];p && (n = e);for (u in n) {
	        c = !l && y && u in y, c && u in b || (f = c ? y[u] : n[u], b[u] = p && "function" != typeof y[u] ? n[u] : g && c ? i(f, o) : v && y[u] == f ? function (t) {
	          var e = function e(_e) {
	            return this instanceof t ? new t(_e) : t(_e);
	          };return e[s] = t[s], e;
	        }(f) : h && "function" == typeof f ? i(Function.call, f) : f, h && ((b[s] || (b[s] = {}))[u] = f));
	      }
	    };a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, t.exports = a;
	  }, function (t, e) {
	    t.exports = function (t) {
	      try {
	        return !!t();
	      } catch (e) {
	        return !0;
	      }
	    };
	  }, function (t, e) {
	    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
	  }, function (t, e, n) {
	    var o = n(5);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
	      return "String" == o(t) ? t.split("") : Object(t);
	    };
	  }, function (t, e) {
	    var n = Object;t.exports = { create: n.create, getProto: n.getPrototypeOf, isEnum: {}.propertyIsEnumerable, getDesc: n.getOwnPropertyDescriptor, setDesc: n.defineProperty, setDescs: n.defineProperties, getKeys: n.keys, getNames: n.getOwnPropertyNames, getSymbols: n.getOwnPropertySymbols, each: [].forEach };
	  }, function (t, e, n) {
	    var o = n(12),
	        r = n(14),
	        i = n(11);t.exports = n(9)(function () {
	      var t = Object.assign,
	          e = {},
	          n = {},
	          o = Symbol(),
	          r = "abcdefghijklmnopqrst";return e[o] = 7, r.split("").forEach(function (t) {
	        n[t] = t;
	      }), 7 != t({}, e)[o] || Object.keys(t({}, n)).join("") != r;
	    }) ? function (t, e) {
	      for (var n = r(t), s = arguments, a = s.length, u = 1, c = o.getKeys, f = o.getSymbols, l = o.isEnum; a > u;) {
	        for (var p, d = i(s[u++]), h = f ? c(d).concat(f(d)) : c(d), g = h.length, v = 0; g > v;) {
	          l.call(d, p = h[v++]) && (n[p] = d[p]);
	        }
	      }return n;
	    } : Object.assign;
	  }, function (t, e, n) {
	    var o = n(7);t.exports = function (t) {
	      return Object(o(t));
	    };
	  }, function (t, e, n) {
	    var o = n(8);o(o.S + o.F, "Object", { assign: n(13) });
	  }, function (t, e, n) {
	    e = t.exports = n(17)(), e.push([t.id, ".vue-loading{top:0;left:0;z-index:1000;padding:0;width:100%;height:100%;border:none;background-color:rgba(230,233,236,.8);opacity:0;-webkit-transition:opacity .4s;transition:opacity .4s}.vue-loading,.vue-loading-msg{position:absolute;margin:0;cursor:wait}.vue-loading-msg{box-sizing:content-box!important;z-index:1001;padding:0 35px;height:40px;top:20%;left:50%;text-align:center;font-size:14px;line-height:40px;background-color:#f4f4f4;border-radius:4px;box-shadow:0 1px 8px rgba(0,0,0,.15);border:1px solid #bbb;-webkit-transform:translateX(-50%);transform:translateX(-50%)}", ""]);
	  }, function (t, e) {
	    t.exports = function () {
	      var t = [];return t.toString = function () {
	        for (var t = [], e = 0; e < this.length; e++) {
	          var n = this[e];n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1]);
	        }return t.join("");
	      }, t.i = function (e, n) {
	        "string" == typeof e && (e = [[null, e, ""]]);for (var o = {}, r = 0; r < this.length; r++) {
	          var i = this[r][0];"number" == typeof i && (o[i] = !0);
	        }for (r = 0; r < e.length; r++) {
	          var s = e[r];"number" == typeof s[0] && o[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s));
	        }
	      }, t;
	    };
	  }, function (t, e, n) {
	    function o(t, e) {
	      for (var n = 0; n < t.length; n++) {
	        var o = t[n],
	            r = d[o.id];if (r) {
	          r.refs++;for (var i = 0; i < r.parts.length; i++) {
	            r.parts[i](o.parts[i]);
	          }for (; i < o.parts.length; i++) {
	            r.parts.push(c(o.parts[i], e));
	          }
	        } else {
	          for (var s = [], i = 0; i < o.parts.length; i++) {
	            s.push(c(o.parts[i], e));
	          }d[o.id] = { id: o.id, refs: 1, parts: s };
	        }
	      }
	    }function r(t) {
	      for (var e = [], n = {}, o = 0; o < t.length; o++) {
	        var r = t[o],
	            i = r[0],
	            s = r[1],
	            a = r[2],
	            u = r[3],
	            c = { css: s, media: a, sourceMap: u };n[i] ? n[i].parts.push(c) : e.push(n[i] = { id: i, parts: [c] });
	      }return e;
	    }function i(t, e) {
	      var n = v(),
	          o = m[m.length - 1];if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), m.push(e);else {
	        if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e);
	      }
	    }function s(t) {
	      t.parentNode.removeChild(t);var e = m.indexOf(t);e >= 0 && m.splice(e, 1);
	    }function a(t) {
	      var e = document.createElement("style");return e.type = "text/css", i(t, e), e;
	    }function u(t) {
	      var e = document.createElement("link");return e.rel = "stylesheet", i(t, e), e;
	    }function c(t, e) {
	      var n, o, r;if (e.singleton) {
	        var i = y++;n = b || (b = a(e)), o = f.bind(null, n, i, !1), r = f.bind(null, n, i, !0);
	      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = u(e), o = p.bind(null, n), r = function r() {
	        s(n), n.href && URL.revokeObjectURL(n.href);
	      }) : (n = a(e), o = l.bind(null, n), r = function r() {
	        s(n);
	      });return o(t), function (e) {
	        if (e) {
	          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;o(t = e);
	        } else r();
	      };
	    }function f(t, e, n, o) {
	      var r = n ? "" : o.css;if (t.styleSheet) t.styleSheet.cssText = x(e, r);else {
	        var i = document.createTextNode(r),
	            s = t.childNodes;s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(i, s[e]) : t.appendChild(i);
	      }
	    }function l(t, e) {
	      var n = e.css,
	          o = e.media;if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
	        for (; t.firstChild;) {
	          t.removeChild(t.firstChild);
	        }t.appendChild(document.createTextNode(n));
	      }
	    }function p(t, e) {
	      var n = e.css,
	          o = e.sourceMap;o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");var r = new Blob([n], { type: "text/css" }),
	          i = t.href;t.href = URL.createObjectURL(r), i && URL.revokeObjectURL(i);
	    }var d = {},
	        h = function h(t) {
	      var e;return function () {
	        return "undefined" == typeof e && (e = t.apply(this, arguments)), e;
	      };
	    },
	        g = h(function () {
	      return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
	      );
	    }),
	        v = h(function () {
	      return document.head || document.getElementsByTagName("head")[0];
	    }),
	        b = null,
	        y = 0,
	        m = [];t.exports = function (t, e) {
	      e = e || {}, "undefined" == typeof e.singleton && (e.singleton = g()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");var n = r(t);return o(n, e), function (t) {
	        for (var i = [], s = 0; s < n.length; s++) {
	          var a = n[s],
	              u = d[a.id];u.refs--, i.push(u);
	        }if (t) {
	          var c = r(t);o(c, e);
	        }for (var s = 0; s < i.length; s++) {
	          var u = i[s];if (0 === u.refs) {
	            for (var f = 0; f < u.parts.length; f++) {
	              u.parts[f]();
	            }delete d[u.id];
	          }
	        }
	      };
	    };var x = function () {
	      var t = [];return function (e, n) {
	        return t[e] = n, t.filter(Boolean).join("\n");
	      };
	    }();
	  }, function (t, e, n) {
	    var o = n(16);"string" == typeof o && (o = [[t.id, o, ""]]);n(18)(o, {});o.locals && (t.exports = o.locals);
	  }]);
	});
	//# sourceMappingURL=vue-loading.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n <div class=\"main-container\">\n    <div class=\"main-header\">\n        <p><img src=\"/images/logo.png\"/></p>\n        <input class='iconfont' type=\"button\" value=\"&#xe603;\">\n    </div>\n    <div class=\"main-scroll\">\n        <div class=\"scroll-box\">\n            <div class=\"head\">\n                  <img v-bind:src=\"imgArrow\"/>\n                  <span>下拉刷新...</span>\n            </div>\n            <div class=\"swiper-container\">\n                <div class=\"swiper-wrapper\">\n                   <div class=\"swiper-slide\"><img src=\"/images/slide1.png\"/></div>\n                   <div class=\"swiper-slide\"><img src=\"/images/slide2.png\"/></div>\n                   <div class=\"swiper-slide\"><img src=\"/images/slide3.png\"/></div>\n                </div>\n                <div class=\"swiper-pagination\"></div>\n            </div>\n            <section class=\"first-list\">\n                <ul>\n                  <li><image src=\"/images/3.png\"></image></li>\n                  <li><image src=\"/images/4.png\"></image></li>\n                  <li><image src=\"/images/5.png\"></image></li>\n                </ul>\n            </section>\n            <div class=\"main-list\">\n               <dl v-for=\"l in list\" v-link=\"{name: 'detail', params: {id: l.id}}\">\n                  <dt>\n                      <p><img v-bind:src=\"l.img\"/><i>{{l.name}}</i></p>\n                      <span class=\"iconfont\">&#xe602;</span>\n                  </dt>\n                  <dd><img v-bind:src=\"l.img1\"/></dd>\n                  <dd>{{l.text}}</dd>\n                  <dd>\n                      <span><i class=\"iconfont\">&#xe604;</i>{{l.num1}}</span>\n                      <span><i class=\"iconfont\">&#xe606;</i>{{l.num2}}</span>\n                      <span><i class=\"iconfont\">&#xe605;</i>{{l.num3}}</span>\n                  </dd>\n               <dl>\n             </div>\n             <div class=\"foot\">\n                <img v-bind:src=\"imgArrow\"/>\n                <span>加载中...</span>\n             </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(19)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(20)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-00cdb987/search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(9);
	
	var _getters = __webpack_require__(10);
	
	// <template>
	//   <div class="search-container">
	//       <div class="search-header">
	//           <p>妆品</p>
	//       </div>
	//       <div class="search-scroll">
	//          <div class="search-box">
	//              <div class="inputbox">
	//                 <input type="text" class="iconfont" value="&#xe603;搜索妆品、视频、文章、用户"/>
	//              </div>
	//              <ul class="img-box">
	//                 <li><img src='/images/search01.png'/></li>
	//                 <li><img src='/images/search02.png'/></li>
	//                 <li><img src='/images/search03.png'/></li>
	//                 <li><img src='/images/search04.png'/></li>
	//                 <li><img src='/images/search05.png'/></li>
	//                 <li><img src='/images/search06.png'/></li>
	//              </ul>
	//              <ul class="nav-box">
	//                 <li><i class="iconfont">&#xe60b;</i><span>好物分类</span></li>
	//                 <li><i class="iconfont">&#xe60a;</i><span>免费试用</span></li>
	//                 <li><i class="iconfont">&#xe609;</i><span>最新分享</span></li>
	//                 <li><i class="iconfont">&#xe607;</i><span>达人推荐</span></li>
	//              </ul>
	//              <section>
	//                 <dl v-for="l in list">
	//                     <dt><img v-bind:src="l.img"/></dt>
	//                     <dd>{{l.text}}</dd>
	//                     <dd>
	//                         <span><img v-bind:src="l.headerimg"/><i>{{l.name}}</i></span>
	//                         <span><i class="iconfont">&#xe605;</i><b>{{l.num}}</b><span>
	//                     </dd>
	//                 </dl>
	//              </section>
	//           </div>
	//         <div>{{curIndex}}</div>
	//      </div>
	//   </div>
	// </template>
	//
	//
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.changeIndex
	    },
	    getters: {
	      curIndex: _getters.getIndex
	    }
	  },
	  data: function data() {
	    return {
	      list: []
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    this.change(1);
	    var that = this;
	    this.$http.get('/rest/searchlist').then(function (res) {
	      _this.list = res.data.data;
	      setTimeout(function () {
	        console.log(9);
	        new IScroll(".search-scroll");
	      }, 500);
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"search-container\">\n    <div class=\"search-header\">\n        <p>妆品</p>\n    </div>\n    <div class=\"search-scroll\">\n       <div class=\"search-box\">\n           <div class=\"inputbox\">\n              <input type=\"text\" class=\"iconfont\" value=\"&#xe603;搜索妆品、视频、文章、用户\"/>\n           </div>\n           <ul class=\"img-box\">\n              <li><img src='/images/search01.png'/></li>\n              <li><img src='/images/search02.png'/></li>\n              <li><img src='/images/search03.png'/></li>\n              <li><img src='/images/search04.png'/></li>\n              <li><img src='/images/search05.png'/></li>\n              <li><img src='/images/search06.png'/></li>\n           </ul>\n           <ul class=\"nav-box\">\n              <li><i class=\"iconfont\">&#xe60b;</i><span>好物分类</span></li>\n              <li><i class=\"iconfont\">&#xe60a;</i><span>免费试用</span></li>\n              <li><i class=\"iconfont\">&#xe609;</i><span>最新分享</span></li>\n              <li><i class=\"iconfont\">&#xe607;</i><span>达人推荐</span></li>\n           </ul>\n           <section>\n              <dl v-for=\"l in list\">\n                  <dt><img v-bind:src=\"l.img\"/></dt>\n                  <dd>{{l.text}}</dd>\n                  <dd>\n                      <span><img v-bind:src=\"l.headerimg\"/><i>{{l.name}}</i></span>\n                      <span><i class=\"iconfont\">&#xe605;</i><b>{{l.num}}</b><span>\n                  </dd>\n              </dl>\n           </section>\n        </div>\n      <div>{{curIndex}}</div>\n   </div>\n</div>\n";

/***/ },
/* 21 */
/***/ function(module, exports) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 22 */
/***/ function(module, exports) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\my.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-278909ea/my.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports) {

	// <template>
	//   <div>{{curIndex}}</div>
	// </template>
	// <script>
	// </script>

	/* generated by vue-loader */
	"use strict";

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div>{{curIndex}}</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\detail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-253c20a0/detail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="detail-container">
	//      <div class="detail-header">
	//         <span class="iconfont" v-link="{path: '/index'}">&#xe60c;</span>
	//         <span class="iconfont">&#xe60d;</span>
	//      </div>
	//      <div class="video-box">
	//          <img v-bind:src="detailContent.img1"/>
	//      </div>
	//      <div class="detail-scroll" v-scroll="detailId">
	//         <div class="scroll-box">
	//            <dl class="information">
	//                <dt><img v-bind:src="detailContent.img"/></dt>
	//                <dd>
	//                    <i>{{{detailContent.text}}}</i>
	//                    <p>
	//                        <span>{{{detailContent.name}}}</span>
	//                        <span><i class="iconfont">&#xe604;</i>{{{detailContent.num1}}}</span>
	//                        <span><i class="iconfont">&#xe606;</i>{{{detailContent.num2}}}</span>
	//                        <span><i class="iconfont">&#xe605;</i>{{{detailContent.num3}}}</span>
	//                    </p>
	//                </dd>
	//            </dl>
	//            <div class="moreproduct">
	//              <span>提及产品</span>
	//              <ul v-for="l in list">
	//                   <li><i>{{l.content}}</i><span class="iconfont">&#xe60e; </span></li>
	//              </ul>
	//            </div>
	//        </div>
	//      </div>
	//      <div class="detail-footer">
	//        <span><i class="iconfont">&#xe604;</i>{{{detailContent.num1}}}</span>
	//        <span><i class="iconfont">&#xe605;</i>{{{detailContent.num3}}}</span>
	//        <span><i class="iconfont">&#xe60f;</i>收藏</span>
	//      </div>
	//   </div>
	//   <!-- <div>
	//     {{$route.params.id}}
	//   </div> -->
	// </template>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      detailId: '',
	      detailContent: {},
	      list: []
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    //首页原有数据    下拉刷新数据   上拉加载数据  他们的index 值不同。。id不同
	    //index=0  从main-list 里面取数据 渲染详情页
	    this.$http.get('/rest/list').then(function (res) {
	      res.data.data.forEach(function (_ref) {
	        var id = _ref.id;
	        var img = _ref.img;
	        var name = _ref.name;
	        var img1 = _ref.img1;
	        var text = _ref.text;
	        var num1 = _ref.num1;
	        var num2 = _ref.num2;
	        var num3 = _ref.num3;
	        var index = _ref.index;
	
	        if (that.$route.params.id == id) {
	          that.detailContent = { img: img, name: name, img1: img1, text: text, num1: num1, num2: num2, num3: num3, index: index };
	          Vue.nextTick(function () {
	            that.detailId = '.detail-scroll';
	          });
	          return;
	        }
	      });
	    });
	
	    //index=1  下拉刷新后，在main-refresh-list 里面取数据渲染详情页
	    this.$http.get('/rest/refreshlist').then(function (res) {
	      res.data.data.forEach(function (_ref2) {
	        var id = _ref2.id;
	        var img = _ref2.img;
	        var name = _ref2.name;
	        var img1 = _ref2.img1;
	        var text = _ref2.text;
	        var num1 = _ref2.num1;
	        var num2 = _ref2.num2;
	        var num3 = _ref2.num3;
	        var index = _ref2.index;
	
	        if (that.$route.params.id == id) {
	          that.detailContent = { img: img, name: name, img1: img1, text: text, num1: num1, num2: num2, num3: num3, index: index };
	          Vue.nextTick(function () {
	            that.detailId = '#detail-scroll';
	          });
	          return;
	        }
	      });
	    });
	
	    //index=2   上拉加载更多后  在main-more-list 里面取数据渲染详情页
	    this.$http.get('/rest/morelist').then(function (res) {
	      res.data.data.forEach(function (_ref3) {
	        var id = _ref3.id;
	        var img = _ref3.img;
	        var name = _ref3.name;
	        var img1 = _ref3.img1;
	        var text = _ref3.text;
	        var num1 = _ref3.num1;
	        var num2 = _ref3.num2;
	        var num3 = _ref3.num3;
	        var index = _ref3.index;
	
	        if (that.$route.params.id == id) {
	          that.detailContent = { img: img, name: name, img1: img1, text: text, num1: num1, num2: num2, num3: num3, index: index };
	          Vue.nextTick(function () {
	            that.detailId = '#detail-scroll';
	          });
	          return;
	        }
	      });
	    });
	    //请求  详情页数据
	    this.$http.get('/rest/moreproductlist').then(function (res) {
	      _this.list = res.data.data;
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"detail-container\">\n   <div class=\"detail-header\">\n      <span class=\"iconfont\" v-link=\"{path: '/index'}\">&#xe60c;</span>\n      <span class=\"iconfont\">&#xe60d;</span>\n   </div>\n   <div class=\"video-box\">\n       <img v-bind:src=\"detailContent.img1\"/>\n   </div>\n   <div class=\"detail-scroll\" v-scroll=\"detailId\">\n      <div class=\"scroll-box\">\n         <dl class=\"information\">\n             <dt><img v-bind:src=\"detailContent.img\"/></dt>\n             <dd>\n                 <i>{{{detailContent.text}}}</i>\n                 <p>\n                     <span>{{{detailContent.name}}}</span>\n                     <span><i class=\"iconfont\">&#xe604;</i>{{{detailContent.num1}}}</span>\n                     <span><i class=\"iconfont\">&#xe606;</i>{{{detailContent.num2}}}</span>\n                     <span><i class=\"iconfont\">&#xe605;</i>{{{detailContent.num3}}}</span>\n                 </p>\n             </dd>\n         </dl>\n         <div class=\"moreproduct\">\n           <span>提及产品</span>\n           <ul v-for=\"l in list\">\n                <li><i>{{l.content}}</i><span class=\"iconfont\">&#xe60e; </span></li>\n           </ul>\n         </div>\n     </div>\n   </div>\n   <div class=\"detail-footer\">\n     <span><i class=\"iconfont\">&#xe604;</i>{{{detailContent.num1}}}</span>\n     <span><i class=\"iconfont\">&#xe605;</i>{{{detailContent.num3}}}</span>\n     <span><i class=\"iconfont\">&#xe60f;</i>收藏</span>\n   </div>\n</div>\n<!-- <div>\n  {{$route.params.id}}\n</div> -->\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _states = __webpack_require__(30);
	
	var _mutations = __webpack_require__(31);
	
	exports.default = new Vuex.Store({
	  state: _states.state,
	  mutations: _mutations.mutations
	});

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var state = exports.state = {
	  tabIndex: 0
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var mutations = exports.mutations = {
	  CHANGEINDEX: function CHANGEINDEX(state, curIndex) {
	    state.tabIndex = curIndex;
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map