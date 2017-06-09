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
        var categoryId = location.hash.substring(11);
        page = new _categoryPresenter.CategoryPresenter(categoryId);
        (0, _utils.scrollTo)(0);
    } else if (location.hash.indexOf('product') >= 0) {
        var productId = location.hash.substring(10);
        page = new _productPresenter.ProductPresenter(productId);
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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainModel = function () {
    function MainModel() {
        _classCallCheck(this, MainModel);
    }

    _createClass(MainModel, [{
        key: 'get',
        value: function get() {}
    }, {
        key: 'getCategories',
        value: function getCategories() {
            return fetch(_utils.basicURI + '/categories').then(function (result) {
                return result.json();
            }).then(function (result) {
                var data = {};
                data.categories = result;
                return data;
            }).then(function (data) {
                var promises = [];

                var _loop = function _loop(i) {
                    promises.push(fetch(_utils.basicURI + '/products?categoryID=' + data.categories[i].id).then(function (result) {
                        return result.json();
                    }).then(function (result) {
                        data.categories[i].amount = result.length;
                        return data;
                    }));
                };

                for (var i = 0; i < data.categories.length; i++) {
                    _loop(i);
                }
                return Promise.all(promises).then(function (data) {
                    return data[0];
                });
            });
        }
    }, {
        key: 'getCategoryProducts',
        value: function getCategoryProducts(categoryId) {
            return fetch(_utils.basicURI + '/products?categoryID=' + categoryId).then(function (result) {
                return result.json();
            }).then(function (result) {
                var data = {};
                data.goods = result;
                return data;
            });
        }
    }, {
        key: 'getProduct',
        value: function getProduct(productId) {
            return fetch(_utils.basicURI + '/products/' + productId).then(function (result) {
                return result.json();
            });
        }
    }, {
        key: 'addCategory',
        value: function addCategory(categoryData) {
            fetch(_utils.basicURI + '/categories', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoryData)
            }).then(function (result) {
                console.log(result.status);
            });
        }
    }, {
        key: 'addProduct',
        value: function addProduct(productData) {
            fetch(_utils.basicURI + '/products', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            }).then(function (result) {
                console.log(result.status);
            });
        }
    }, {
        key: 'updateCategory',
        value: function updateCategory(categoryId, newCategoryData) {
            fetch(_utils.basicURI + '/categories/' + categoryId, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCategoryData)
            }).then(function (result) {
                console.log(result.status);
            });
        }
    }, {
        key: 'updateProduct',
        value: function updateProduct(productId, newProductData) {
            fetch(_utils.basicURI + '/categories/' + productId, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProductData)
            }).then(function (result) {
                console.log(result.status);
            });
        }
    }, {
        key: 'deleteCategory',
        value: function deleteCategory(categoryId) {
            fetch(_utils.basicURI + '/categories/' + categoryId, { method: 'DELETE' }).then(function (result) {
                console.log(result.status);
            });
        }
    }, {
        key: 'deleteProduct',
        value: function deleteProduct(productId) {
            fetch(_utils.basicURI + '/categories/' + productId, { method: 'DELETE' }).then(function (result) {
                console.log(result.status);
            });
        }
    }]);

    return MainModel;
}();

exports.default = MainModel;
;

},{"../utils/utils":12}],4:[function(require,module,exports){
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
            window.location = _utils.basicURI;
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
    function CategoryPresenter(categoryId) {
        var _this = this;

        _classCallCheck(this, CategoryPresenter);

        this.model = new _models2.default();
        this.view = new _categoryView.CategoryView();

        this.model.getCategoryProducts(categoryId).then(function (data) {
            _this.view.init(data);
            _this.view.changePageTitle(data.goods[0]);
        });
        this.executeEvents();
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
        var _this = this;

        _classCallCheck(this, MainPresenter);

        this.model = new _models2.default();
        this.view = new _mainView.MainView();

        this.model.getCategories().then(function (data) {
            _this.view.init(data);
        });

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
    function ProductPresenter(productId) {
        var _this = this;

        _classCallCheck(this, ProductPresenter);

        this.view = new _productView.ProductView();
        this.model = new _models2.default();

        this.model.getProduct(productId).then(function (result) {
            _this.view.init(result);
            _this.view.changePageTitle(result);
        });

        this.executeEvents();
    }

    _createClass(ProductPresenter, [{
        key: 'executeEvents',
        value: function executeEvents() {
            (0, _utils.delegateEvent)(document, 'click', '.navigation-top__icon--profile', this.view.showPopUp);
            (0, _utils.delegateEvent)(document, 'click', '.modal-window', this.view.controlWindows);
            (0, _utils.delegateEvent)(document, 'click', '.page__scroll-up', this.view.scrollUp);
            (0, _utils.delegateEvent)(document, 'click', '.slider__arrow--right', this.view.carouselSetNextImg);
            (0, _utils.delegateEvent)(document, 'click', '.slider__shown-img', this.view.carouselSetNextImg);
            (0, _utils.delegateEvent)(document, 'click', '.slider__source-img', this.view.carouselSetTargetImg);
            (0, _utils.delegateEvent)(document, 'click', '.slider__arrow--left', this.view.carouselSetPrevImg);

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
var basicURI = exports.basicURI = location.origin;
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
            target.innerHTML = someData.categoryName;
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
        /*carousel(event) {
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
        }*/

    }, {
        key: 'carouselSetNextImg',
        value: function carouselSetNextImg() {
            var currentImg = document.querySelector('.slider__source-img--active');
            var sources = document.querySelector('.slider__source');
            var bigImg = document.querySelector('.slider__shown-img');
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
        }
    }, {
        key: 'carouselSetPrevImg',
        value: function carouselSetPrevImg() {
            var currentImg = document.querySelector('.slider__source-img--active');
            var sources = document.querySelector('.slider__source');
            var bigImg = document.querySelector('.slider__shown-img');
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
        }
    }, {
        key: 'carouselSetTargetImg',
        value: function carouselSetTargetImg(event) {
            var currentImg = document.querySelector('.slider__source-img--active');
            var bigImg = document.querySelector('.slider__shown-img');
            var eventTarget = event.target;
            var source = eventTarget.getAttribute('src');
            currentImg.classList.remove('slider__source-img--active');
            eventTarget.classList.add('slider__source-img--active');
            bigImg.setAttribute('src', source);
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
