(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _mainPresenter = require('./presenters/mainPresenter.js');

var _categoryPresenter = require('./presenters/categoryPresenter.js');

var _productPresenter = require('./presenters/productPresenter.js');

var _cartPresenter = require('./presenters/cartPresenter.js');

var _contactsPresenter = require('./presenters/contactsPresenter.js');

var _paymentPresenter = require('./presenters/paymentPresenter.js');

var _authPresenter = require('./presenters/authPresenter.js');

var _utils = require('./utils/utils');

var page;

function changeView() {
    if (location.hash.indexOf('access_token') >= 0) {
        page = new _authPresenter.AuthPresenter();
    } else if (location.hash === '') {
        page = new _mainPresenter.MainPresenter();
        (0, _utils.scrollTo)(0);
    } else if (location.hash.indexOf('category') >= 0) {
        var categoryPosition = location.hash.substring(9);
        page = new _categoryPresenter.CategoryPresenter(categoryPosition);
        (0, _utils.scrollTo)(0);
    } else if (location.hash.indexOf('product') >= 0) {
        var reg = /\d+/g;
        var numbersFromHash = location.hash.match(reg);
        var categoryPosition = numbersFromHash[0];
        var productPosition = numbersFromHash[1];
        page = new _productPresenter.ProductPresenter(categoryPosition, productPosition);
        (0, _utils.scrollTo)(0);
    } else if (location.hash.indexOf('cart') >= 0) {
        page = new _cartPresenter.CartPresenter();
        (0, _utils.scrollTo)(0);
    } else if (location.hash.indexOf('contacts') >= 0) {
        page = new _contactsPresenter.ContactsPresenter();
        (0, _utils.scrollTo)(0);
    } else if (location.hash.indexOf('payment') >= 0) {
        page = new _paymentPresenter.PaymentPresenter();
        (0, _utils.scrollTo)(0);
    }
};

window.addEventListener('hashchange', changeView);

changeView();

},{"./presenters/authPresenter.js":5,"./presenters/cartPresenter.js":6,"./presenters/categoryPresenter.js":7,"./presenters/contactsPresenter.js":8,"./presenters/mainPresenter.js":9,"./presenters/paymentPresenter.js":10,"./presenters/productPresenter.js":11,"./utils/utils":12}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.View = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View(data) {
        _classCallCheck(this, View);

        this.html = '';
        this.init(data);
    }

    _createClass(View, [{
        key: 'insertView',
        value: function insertView() {
            var container = document.getElementById('content');
            container.innerHTML = this.html;
        }
    }, {
        key: 'showPopUp',
        value: function showPopUp() {
            localStorage.removeItem('cat-shop-token');
            (0, _utils.manipulateClasses)('.modal-window', 'modal-window--visible', 'add');
            (0, _utils.manipulateClasses)('#sign-window', 'modal-window__pop-ups--visible', 'add');
        }
    }, {
        key: 'controlWindows',
        value: function controlWindows(event) {
            var eventTraget = event.target;
            if (eventTraget.classList.contains('modal-window') || eventTraget.classList.contains('modal-window__close')) {
                (0, _utils.manipulateClasses)('.modal-window', 'modal-window--visible', 'remove');
                (0, _utils.manipulateClasses)('#reg-window', 'modal-window__pop-ups--visible', 'remove');
                (0, _utils.manipulateClasses)('#sign-window', 'modal-window__pop-ups--visible', 'remove');
            } else if (eventTraget.classList.contains('modal-window__sign-link') || eventTraget.classList.contains('modal-window__reg-link')) {
                (0, _utils.manipulateClasses)('#reg-window', 'modal-window__pop-ups--visible', 'toggle');
                (0, _utils.manipulateClasses)('#sign-window', 'modal-window__pop-ups--visible', 'toggle');
            }
        }
    }, {
        key: 'scrollUp',
        value: function scrollUp() {
            (0, _utils.scrollTo)(0);
        }
    }, {
        key: 'showScrollUp',
        value: function showScrollUp() {
            if (document.body.scrollTop < window.innerHeight - 50) {
                (0, _utils.manipulateClasses)('.page__scroll-up', 'page__scroll-up--visible', 'remove');
            } else {
                (0, _utils.manipulateClasses)('.page__scroll-up', 'page__scroll-up--visible', 'add');
            }
        }
    }, {
        key: 'sayHi',
        value: function sayHi() {
            var el = document.getElementById('userName');
            if (localStorage.getItem('cat-shop-token')) {

                (0, _utils.corsApiVkRequest)().then(function (result) {
                    return result.response[0].first_name;
                }).then(function (name) {
                    return 'Hi ' + name;
                }).then(function (phrase) {
                    el.innerHTML = phrase;
                }).catch(function (err) {
                    return console.log(err);
                });
            } else {
                el.innerHTML = '';
            }
        }
    }]);

    return View;
}();

exports.View = View;

},{"../utils/utils":12}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainModel = function () {
    function MainModel() {
        _classCallCheck(this, MainModel);

        this.data = {
            categories: [{
                title: "Dry Food",
                img: "img/dry.jpg",
                categoryPosition: 0,
                goods: [{
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "10.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/dry.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 0
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.29$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/wet.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 1
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/logo.jpg",
                    imgs: [{ imgPath: 'img/logo.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }, { imgPath: 'img/brush.jpg' }],
                    categoryPosition: 0,
                    productPosition: 2
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 3
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 4
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 5
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 6
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 7
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 8
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 9
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 10
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 11
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 12
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 13
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 14
                }, {
                    title: "Dry food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 0,
                    productPosition: 15
                }]
            }, {
                title: "Wet Food",
                img: "img/wet.jpg",
                categoryPosition: 1,
                goods: [{
                    title: "Wet food – 'Brand' (0.2kg)",
                    price: "9.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/wet.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 1,
                    productPosition: 0
                }, {
                    title: "Wet food – 'Brand' (0.2kg)",
                    price: "5.29$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/dry.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 1,
                    productPosition: 1
                }, {
                    title: "Wet food – 'Brand' (0.2kg)",
                    price: "3.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/wet.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 1,
                    productPosition: 2
                }, {
                    title: "Wet food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/wet.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 1,
                    productPosition: 3
                }, {
                    title: "Wet food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/logo.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 1,
                    productPosition: 4
                }, {
                    title: "Wet food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/wet.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 1,
                    productPosition: 5
                }, {
                    title: "Wet food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/wet.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 1,
                    productPosition: 6
                }, {
                    title: "Wet food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/wet.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 1,
                    productPosition: 7
                }, {
                    title: "Wet food – 'Brand' (0.2kg)",
                    price: "0.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/wet.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 1,
                    productPosition: 8
                }]
            }, {
                title: "Medicines",
                img: "img/meds.jpg",
                categoryPosition: 2,
                goods: [{
                    title: "Some tablets – 'Brand'",
                    price: "20.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/meds.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 2,
                    productPosition: 0
                }, {
                    title: "Some other tablets – 'Brand'",
                    price: "15.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/logo.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 2,
                    productPosition: 0
                }, {
                    title: "Some more tablets – 'Brand'",
                    price: "10.9$",
                    description: "Little description of a good goes here. It could be much wider.",
                    img: "img/logo.jpg",
                    imgs: [{ imgPath: 'img/wet.jpg' }, { imgPath: 'img/banner.jpg' }, { imgPath: 'img/logo.jpg' }],
                    categoryPosition: 2,
                    productPosition: 0
                }]
            }, {
                title: "Sleeping places",
                img: "img/sleep.jpg",
                categoryPosition: 3,
                goods: []
            }, {
                title: "Toys",
                img: "img/toys.jpg",
                categoryPosition: 4,
                goods: []
            }, {
                title: "Brushes",
                img: "img/brush.jpg",
                categoryPosition: 5,
                goods: []
            }, {
                title: "Accessories",
                img: "img/acs.jpg",
                categoryPosition: 6,
                goods: []
            }]
        };
    }

    _createClass(MainModel, [{
        key: "get",
        value: function get() {
            return this.data;
        }
    }]);

    return MainModel;
}();

exports.default = MainModel;
;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserModel = function () {
    function UserModel() {
        _classCallCheck(this, UserModel);

        this.data = [{ id: 1, token: 'asdasd123qsdas21sf21e' }, { id: 2, token: 'asdasd123qsasddas21sf21e' }, { id: 3, token: 'asdasd12312asdsdas21sf21e' }];
    }

    _createClass(UserModel, [{
        key: 'get',
        value: function get() {
            return this.data;
        }
    }, {
        key: 'addNewUser',
        value: function addNewUser(newId, newToken) {
            var newUser = { id: newId, token: newToken };
            this.data.push(newUser);
        }
    }]);

    return UserModel;
}();

exports.default = UserModel;
;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _userModel = require('../models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

var _authView = require('../views/authView');

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthPresenter = exports.AuthPresenter = function () {
    function AuthPresenter() {
        _classCallCheck(this, AuthPresenter);

        this.model = new _userModel2.default();
        this.view = new _authView.AuthView();
        this.view.init(this.model.get());

        this.executeEvents();
    }

    _createClass(AuthPresenter, [{
        key: 'executeEvents',
        value: function executeEvents() {
            var hash = location.hash;
            var firstChar = hash.indexOf('=') + 1;
            var lastChar = hash.indexOf('&');
            var token = hash.slice(firstChar, lastChar);
            localStorage.setItem('cat-shop-token', token);
            window.location = 'http://localhost:8000/#';
        }
    }]);

    return AuthPresenter;
}();

},{"../models/userModel":4,"../utils/utils":12,"../views/authView":13}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CartPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

var _cartView = require('../views/cartView');

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CartPresenter = exports.CartPresenter = function () {
    function CartPresenter() {
        _classCallCheck(this, CartPresenter);

        this.model = new _models2.default();
        this.view = new _cartView.CartView();
        this.view.init(this.model.get());

        this.executeEvents();
        this.view.changePageTitle();
    }

    _createClass(CartPresenter, [{
        key: 'executeEvents',
        value: function executeEvents() {
            (0, _utils.delegateEvent)(document, 'click', '.navigation-top__icon--profile', this.view.showPopUp);
            (0, _utils.delegateEvent)(document, 'click', '.modal-window', this.view.controlWindows);
            (0, _utils.delegateEvent)(document, 'click', '.page__scroll-up', this.view.scrollUp);
            window.addEventListener('scroll', this.view.showScrollUp);
        }
    }, {
        key: 'getView',
        value: function getView() {
            return this.view;
        }
    }]);

    return CartPresenter;
}();

},{"../models/models":3,"../utils/utils":12,"../views/cartView":14}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CategoryPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

var _categoryView = require('../views/categoryView');

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CategoryPresenter = exports.CategoryPresenter = function () {
    function CategoryPresenter(categoryPosition) {
        _classCallCheck(this, CategoryPresenter);

        this.model = new _models2.default();
        this.view = new _categoryView.CategoryView();
        this.view.init(this.model.get().categories[categoryPosition]);

        this.executeEvents();
        this.view.changePageTitle(this.model.get().categories[categoryPosition]);
    }

    _createClass(CategoryPresenter, [{
        key: 'executeEvents',
        value: function executeEvents() {
            (0, _utils.delegateEvent)(document, 'click', '.navigation-top__icon--profile', this.view.showPopUp);
            (0, _utils.delegateEvent)(document, 'click', '.modal-window', this.view.controlWindows);
            (0, _utils.delegateEvent)(document, 'click', '.page__scroll-up', this.view.scrollUp);
            (0, _utils.delegateEvent)(document, 'click', '.main-banner__scroll-down', this.view.scrollDown);
            (0, _utils.delegateEvent)(document, 'click', '.grid-view', this.view.changeToGridView);
            (0, _utils.delegateEvent)(document, 'click', '.list-view', this.view.changeToListView);
            window.addEventListener('scroll', this.view.showScrollUp);
        }
    }, {
        key: 'getView',
        value: function getView() {
            return this.view;
        }
    }]);

    return CategoryPresenter;
}();

},{"../models/models":3,"../utils/utils":12,"../views/categoryView":15}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContactsPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

var _contactsView = require('../views/contactsView');

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContactsPresenter = exports.ContactsPresenter = function () {
    function ContactsPresenter() {
        _classCallCheck(this, ContactsPresenter);

        this.model = new _models2.default();
        this.view = new _contactsView.ContactsView();
        this.view.init(this.model.get());

        this.executeEvents();
        this.view.changePageTitle();
    }

    _createClass(ContactsPresenter, [{
        key: 'executeEvents',
        value: function executeEvents() {
            (0, _utils.delegateEvent)(document, 'click', '.navigation-top__icon--profile', this.view.showPopUp);
            (0, _utils.delegateEvent)(document, 'click', '.modal-window', this.view.controlWindows);
            (0, _utils.delegateEvent)(document, 'click', '.page__scroll-up', this.view.scrollUp);
            (0, _utils.delegateEvent)(document, 'click', '.main-banner__scroll-down', this.view.scrollDown);
            (0, _utils.delegateEvent)(document, 'click', '#ckeckboxSameAdress', this.view.copyInputValues);
            window.addEventListener('scroll', this.view.showScrollUp);
        }
    }, {
        key: 'getView',
        value: function getView() {
            return this.view;
        }
    }]);

    return ContactsPresenter;
}();

},{"../models/models":3,"../utils/utils":12,"../views/contactsView":16}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

var _mainView = require('../views/mainView');

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainPresenter = exports.MainPresenter = function () {
    function MainPresenter() {
        _classCallCheck(this, MainPresenter);

        this.model = new _models2.default();
        this.view = new _mainView.MainView();
        this.view.init(this.model.get());

        this.executeEvents();
        this.view.changePageTitle();
    }

    _createClass(MainPresenter, [{
        key: 'executeEvents',
        value: function executeEvents() {
            (0, _utils.delegateEvent)(document, 'click', '.navigation-top__icon--profile', this.view.showPopUp);
            (0, _utils.delegateEvent)(document, 'click', '.modal-window', this.view.controlWindows);
            (0, _utils.delegateEvent)(document, 'click', '.page__scroll-up', this.view.scrollUp);
            (0, _utils.delegateEvent)(document, 'click', '.main-banner__scroll-down', this.view.scrollDown);
            window.addEventListener('scroll', this.view.showScrollUp);
        }
    }, {
        key: 'getView',
        value: function getView() {
            return this.view;
        }
    }]);

    return MainPresenter;
}();

},{"../models/models":3,"../utils/utils":12,"../views/mainView":17}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PaymentPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

var _paymentView = require('../views/paymentView');

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaymentPresenter = exports.PaymentPresenter = function () {
    function PaymentPresenter() {
        _classCallCheck(this, PaymentPresenter);

        this.model = new _models2.default();
        this.view = new _paymentView.PaymentView();
        this.view.init(this.model.get());

        this.executeEvents();
        this.view.changePageTitle();
    }

    _createClass(PaymentPresenter, [{
        key: 'executeEvents',
        value: function executeEvents() {
            (0, _utils.delegateEvent)(document, 'click', '.navigation-top__icon--profile', this.view.showPopUp);
            (0, _utils.delegateEvent)(document, 'click', '.modal-window', this.view.controlWindows);
            (0, _utils.delegateEvent)(document, 'click', '.page__scroll-up', this.view.scrollUp);
            (0, _utils.delegateEvent)(document, 'click', '.main-banner__scroll-down', this.view.scrollDown);
            window.addEventListener('scroll', this.view.showScrollUp);
        }
    }, {
        key: 'getView',
        value: function getView() {
            return this.view;
        }
    }]);

    return PaymentPresenter;
}();

},{"../models/models":3,"../utils/utils":12,"../views/paymentView":18}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProductPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

var _productView = require('../views/productView');

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductPresenter = exports.ProductPresenter = function () {
    function ProductPresenter(categoryPosition, productPosition) {
        _classCallCheck(this, ProductPresenter);

        this.model = new _models2.default();
        this.view = new _productView.ProductView();
        this.view.init(this.model.get().categories[categoryPosition].goods[productPosition]);

        this.executeEvents();
        this.view.changePageTitle(this.model.get().categories[categoryPosition].goods[productPosition]);
    }

    _createClass(ProductPresenter, [{
        key: 'executeEvents',
        value: function executeEvents() {
            (0, _utils.delegateEvent)(document, 'click', '.navigation-top__icon--profile', this.view.showPopUp);
            (0, _utils.delegateEvent)(document, 'click', '.modal-window', this.view.controlWindows);
            (0, _utils.delegateEvent)(document, 'click', '.page__scroll-up', this.view.scrollUp);
            (0, _utils.delegateEvent)(document, 'click', '.slider', this.view.carousel);
            window.addEventListener('scroll', this.view.showScrollUp);
        }
    }, {
        key: 'getView',
        value: function getView() {
            return this.view;
        }
    }]);

    return ProductPresenter;
}();

},{"../models/models":3,"../utils/utils":12,"../views/productView":19}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTemplate = getTemplate;
exports.corsApiVkRequest = corsApiVkRequest;
exports.manipulateClasses = manipulateClasses;
exports.scrollTo = scrollTo;
exports.delegateEvent = delegateEvent;
function getTemplate(fileName) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: 'templates/' + fileName + '.html',
            dataType: 'html',
            success: function success(data) {
                resolve(data);
            },
            error: function error(request, status, _error) {
                console.log('ERROR template ' + fileName + '.html ' + request.status + ' ' + _error);
            }
        });
    });
};
function corsApiVkRequest() {
    return new Promise(function (resolve, reject) {
        var token = localStorage.getItem('cat-shop-token');
        var url = 'https://api.vk.com/method/users.get?PARAMETERS&access_token=' + token;
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
            crossDomain: true,
            success: function success(data) {
                resolve(data);
            }
        });
    });
};

function manipulateClasses(selector, actionClass, action) {
    var selectedElements = document.querySelectorAll(selector);
    if (action === 'add') {
        for (var i = 0; i < selectedElements.length; i++) {
            selectedElements[i].classList.add(actionClass);
        }
    } else if (action === 'remove') {
        for (var i = 0; i < selectedElements.length; i++) {
            selectedElements[i].classList.remove(actionClass);
        }
    } else if (action === 'toggle') {
        for (var i = 0; i < selectedElements.length; i++) {
            selectedElements[i].classList.toggle(actionClass);
        }
    }
};

function scrollTo(destination) {
    $("html, body").animate({ scrollTop: destination }, "slow");
}

function delegateEvent(element, e, selector, handler) {
    element.addEventListener(e, function (event) {
        var targetElement = event.target;
        while (targetElement && targetElement !== this) {
            if (targetElement.matches(selector)) {
                handler.call(targetElement, event);
            }
            targetElement = targetElement.parentNode;
        }
    });
}

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = require('../common/view');

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthView = exports.AuthView = function (_View) {
    _inherits(AuthView, _View);

    function AuthView() {
        _classCallCheck(this, AuthView);

        return _possibleConstructorReturn(this, (AuthView.__proto__ || Object.getPrototypeOf(AuthView)).apply(this, arguments));
    }

    _createClass(AuthView, [{
        key: 'init',
        value: function init() {}
        /* getToken() {
             var hash = location.hash;
             var firstChar = hash.indexOf('=') + 1;
             var lastChar = hash.indexOf('&');
             var token = hash.slice(firstChar, lastChar);
             localStorage.setItem('cat-shop-token', token);
             window.location = 'http://localhost:8000/#';
         }*/

    }]);

    return AuthView;
}(_view.View);

},{"../common/view":2,"../utils/utils":12}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CartView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = require('../common/view');

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CartView = exports.CartView = function (_View) {
    _inherits(CartView, _View);

    function CartView() {
        _classCallCheck(this, CartView);

        return _possibleConstructorReturn(this, (CartView.__proto__ || Object.getPrototypeOf(CartView)).apply(this, arguments));
    }

    _createClass(CartView, [{
        key: 'init',
        value: function init(initialData) {
            var _this2 = this;

            (0, _utils.getTemplate)('cart').then(function (results) {
                return Handlebars.compile(results);
            }).then(function (compileTemplate) {
                return compileTemplate(initialData);
            }).then(function (html) {
                _this2.html = html;
            }).then(function () {
                _this2.insertView();
            }).catch(function (err) {
                return console.log(err);
            });
            this.sayHi();
        }
    }, {
        key: 'changePageTitle',
        value: function changePageTitle() {
            var target = document.getElementsByTagName('title')[0];
            target.innerHTML = 'Cart – Cat Shop';
        }
    }]);

    return CartView;
}(_view.View);

},{"../common/view":2,"../utils/utils":12}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CategoryView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = require('../common/view');

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoryView = exports.CategoryView = function (_View) {
    _inherits(CategoryView, _View);

    function CategoryView() {
        _classCallCheck(this, CategoryView);

        return _possibleConstructorReturn(this, (CategoryView.__proto__ || Object.getPrototypeOf(CategoryView)).apply(this, arguments));
    }

    _createClass(CategoryView, [{
        key: 'init',
        value: function init(initialData) {
            var _this2 = this;

            (0, _utils.getTemplate)('category').then(function (results) {
                return Handlebars.compile(results);
            }).then(function (compileTemplate) {
                return compileTemplate(initialData);
            }).then(function (html) {
                _this2.html = html;
            }).then(function () {
                _this2.insertView();
            }).catch(function (err) {
                return console.log(err);
            });
            this.sayHi();
        }
    }, {
        key: 'changeToListView',
        value: function changeToListView() {
            (0, _utils.manipulateClasses)('.grid-view', 'grid-view--visible', 'add');
            (0, _utils.manipulateClasses)('.list-view', 'list-view--visible', 'remove');
            (0, _utils.manipulateClasses)('.goods__good-description', 'goods__good-description--visible', 'add');
            (0, _utils.manipulateClasses)('.goods__good', 'goods__good--list', 'add');
            (0, _utils.manipulateClasses)('.goods__good-info', 'goods__good-info--list', 'add');
            (0, _utils.manipulateClasses)('.goods__good-img', 'goods__good-img--list', 'add');
            (0, _utils.manipulateClasses)('.goods__good-price', 'goods__good-price--list', 'add');
            (0, _utils.manipulateClasses)('.goods__good-name', 'goods__good-name--list', 'add');
        }
    }, {
        key: 'changeToGridView',
        value: function changeToGridView() {
            (0, _utils.manipulateClasses)('.goods__good-description', 'goods__good-description--visible', 'remove');
            (0, _utils.manipulateClasses)('.goods__good', 'goods__good--list', 'remove');
            (0, _utils.manipulateClasses)('.goods__good-info', 'goods__good-info--list', 'remove');
            (0, _utils.manipulateClasses)('.goods__good-img', 'goods__good-img--list', 'remove');
            (0, _utils.manipulateClasses)('.goods__good-price', 'goods__good-price--list', 'remove');
            (0, _utils.manipulateClasses)('.goods__good-name', 'goods__good-name--list', 'remove');
            (0, _utils.manipulateClasses)('.grid-view', 'grid-view--visible', 'remove');
            (0, _utils.manipulateClasses)('.list-view', 'list-view--visible', 'add');
        }
    }, {
        key: 'changePageTitle',
        value: function changePageTitle(someData) {
            var target = document.getElementsByTagName('title')[0];
            target.innerHTML = someData.title;
        }
    }]);

    return CategoryView;
}(_view.View);

},{"../common/view":2,"../utils/utils":12}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContactsView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = require('../common/view');

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactsView = exports.ContactsView = function (_View) {
    _inherits(ContactsView, _View);

    function ContactsView() {
        _classCallCheck(this, ContactsView);

        return _possibleConstructorReturn(this, (ContactsView.__proto__ || Object.getPrototypeOf(ContactsView)).apply(this, arguments));
    }

    _createClass(ContactsView, [{
        key: 'init',
        value: function init(initialData) {
            var _this2 = this;

            (0, _utils.getTemplate)('contacts').then(function (results) {
                return Handlebars.compile(results);
            }).then(function (compileTemplate) {
                return compileTemplate(initialData);
            }).then(function (html) {
                _this2.html = html;
            }).then(function () {
                _this2.insertView();
            }).catch(function (err) {
                return console.log(err);
            });
            this.sayHi();
        }
    }, {
        key: 'scrollDown',
        value: function scrollDown() {
            (0, _utils.scrollTo)(window.innerHeight - 50);
        }
    }, {
        key: 'changePageTitle',
        value: function changePageTitle() {
            var target = document.getElementsByTagName('title')[0];
            target.innerHTML = 'Contact Information';
        }
    }, {
        key: 'copyInputValues',
        value: function copyInputValues() {
            var checkbox = document.getElementById('ckeckboxSameAdress');
            var allAdressInputs = document.querySelectorAll('.contacts__input');
            if (checkbox.checked) {
                for (var i = 0; i < allAdressInputs.length / 2; i++) {
                    allAdressInputs[i + allAdressInputs.length / 2].value = allAdressInputs[i].value;
                }
            } else {
                for (var i = 0; i < allAdressInputs.length / 2; i++) {
                    allAdressInputs[i + allAdressInputs.length / 2].value = '';
                }
            }
        }
    }]);

    return ContactsView;
}(_view.View);

},{"../common/view":2,"../utils/utils":12}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = require('../common/view');

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainView = exports.MainView = function (_View) {
    _inherits(MainView, _View);

    function MainView() {
        _classCallCheck(this, MainView);

        return _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).apply(this, arguments));
    }

    _createClass(MainView, [{
        key: 'init',
        value: function init(initialData) {
            var _this2 = this;

            (0, _utils.getTemplate)('main-page').then(function (results) {
                return Handlebars.compile(results);
            }).then(function (compileTemplate) {
                return compileTemplate(initialData);
            }).then(function (mainPage) {
                _this2.html = mainPage;
            }).then(function () {
                _this2.insertView();
            }).catch(function (err) {
                return console.log(err);
            });
            this.sayHi();
        }
    }, {
        key: 'scrollDown',
        value: function scrollDown() {
            (0, _utils.scrollTo)(window.innerHeight - 50);
        }
    }, {
        key: 'changePageTitle',
        value: function changePageTitle() {
            var target = document.getElementsByTagName('title')[0];
            target.innerHTML = 'Cat Shop';
        }
    }]);

    return MainView;
}(_view.View);

},{"../common/view":2,"../utils/utils":12}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PaymentView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = require('../common/view');

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaymentView = exports.PaymentView = function (_View) {
    _inherits(PaymentView, _View);

    function PaymentView() {
        _classCallCheck(this, PaymentView);

        return _possibleConstructorReturn(this, (PaymentView.__proto__ || Object.getPrototypeOf(PaymentView)).apply(this, arguments));
    }

    _createClass(PaymentView, [{
        key: 'init',
        value: function init(initialData) {
            var _this2 = this;

            (0, _utils.getTemplate)('payment').then(function (results) {
                return Handlebars.compile(results);
            }).then(function (compileTemplate) {
                return compileTemplate(initialData);
            }).then(function (html) {
                _this2.html = html;
            }).then(function () {
                _this2.insertView();
            }).catch(function (err) {
                return console.log(err);
            });
            this.sayHi();
        }
    }, {
        key: 'scrollDown',
        value: function scrollDown() {
            (0, _utils.scrollTo)(window.innerHeight - 50);
        }
    }, {
        key: 'changePageTitle',
        value: function changePageTitle() {
            var target = document.getElementsByTagName('title')[0];
            target.innerHTML = 'Payment Information';
        }
    }]);

    return PaymentView;
}(_view.View);

},{"../common/view":2,"../utils/utils":12}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProductView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = require('../common/view');

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductView = exports.ProductView = function (_View) {
    _inherits(ProductView, _View);

    function ProductView() {
        _classCallCheck(this, ProductView);

        return _possibleConstructorReturn(this, (ProductView.__proto__ || Object.getPrototypeOf(ProductView)).apply(this, arguments));
    }

    _createClass(ProductView, [{
        key: 'init',
        value: function init(initialData) {
            var _this2 = this;

            (0, _utils.getTemplate)('product').then(function (results) {
                return Handlebars.compile(results);
            }).then(function (compileTemplate) {
                return compileTemplate(initialData);
            }).then(function (html) {
                _this2.html = html;
            }).then(function () {
                _this2.insertView();
            }).catch(function (err) {
                return console.log(err);
            });
            this.sayHi();
        }
    }, {
        key: 'carousel',
        value: function carousel(event) {
            var currentImg = document.querySelector('.slider__source-img--active');
            var sources = document.querySelector('.slider__source');
            var bigImg = document.querySelector('.slider__shown-img');
            var eventTarget = event.target;
            if (eventTarget.classList.contains('slider__arrow--left')) {
                if (currentImg.previousElementSibling === null) {
                    var source = sources.lastElementChild.getAttribute('src');
                    currentImg.classList.remove('slider__source-img--active');
                    sources.lastElementChild.classList.add('slider__source-img--active');
                } else {
                    var source = currentImg.previousElementSibling.getAttribute('src');
                    currentImg.classList.remove('slider__source-img--active');
                    currentImg.previousElementSibling.classList.add('slider__source-img--active');
                }
                bigImg.setAttribute('src', source);
            } else if (eventTarget.classList.contains('slider__arrow--right') || eventTarget.classList.contains('slider__shown-img')) {
                if (currentImg.nextElementSibling === null) {
                    var source = sources.firstElementChild.getAttribute('src');
                    currentImg.classList.remove('slider__source-img--active');
                    sources.firstElementChild.classList.add('slider__source-img--active');
                } else {
                    var source = currentImg.nextElementSibling.getAttribute('src');
                    currentImg.classList.remove('slider__source-img--active');
                    currentImg.nextElementSibling.classList.add('slider__source-img--active');
                }
                bigImg.setAttribute('src', source);
            } else if (eventTarget.classList.contains('slider__source-img')) {
                var source = eventTarget.getAttribute('src');
                currentImg.classList.remove('slider__source-img--active');
                eventTarget.classList.add('slider__source-img--active');
                bigImg.setAttribute('src', source);
            }
        }
    }, {
        key: 'changePageTitle',
        value: function changePageTitle(someData) {
            var target = document.getElementsByTagName('title')[0];
            target.innerHTML = someData.title;
        }
    }]);

    return ProductView;
}(_view.View);

},{"../common/view":2,"../utils/utils":12}]},{},[1])


//# sourceMappingURL=app.js.map
