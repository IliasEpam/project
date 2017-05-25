(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _presenters = require('./presenters/presenters.js');

var _presenterCategory = require('./presenters/presenterCategory.js');

var _presenterProduct = require('./presenters/presenterProduct.js');

var page;
var targetContainer = document.getElementById('content');

function changeView() {
    if (location.hash === '') {
        page = new _presenters.mainPresenter();
    } else if (location.hash.indexOf('category') >= 0) {
        var categoryPosition = location.hash.substring(9);
        page = new _presenterCategory.categoryPresenter(categoryPosition);
    } else if (location.hash.indexOf('product') >= 0) {
        var reg = /\d+/g;
        var digitsFromHash = location.hash.match(reg);
        var categoryPosition = digitsFromHash[0];
        var productPosition = digitsFromHash[1];
        page = new _presenterProduct.productPresenter(categoryPosition, productPosition);
    }
    targetContainer.innerHTML = page.getView().getHtml();
};

window.addEventListener('hashchange', changeView);

changeView();

},{"./presenters/presenterCategory.js":4,"./presenters/presenterProduct.js":5,"./presenters/presenters.js":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.view = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var view = exports.view = function () {
    function view() {
        _classCallCheck(this, view);

        this.html = '';
    }

    _createClass(view, [{
        key: 'init',
        value: function init(initialData) {
            var categoryTemplate = (0, _utils.getTemplate)('main-page');
            var compileTemplate = Handlebars.compile(categoryTemplate);
            var mainPage = compileTemplate(initialData);
            this.html = mainPage;
        }
    }, {
        key: 'getHtml',
        value: function getHtml() {
            return this.html;
        }
    }, {
        key: 'showPopUp',
        value: function showPopUp() {
            (0, _utils.delegateEvent)(document, 'click', '.navigation-top__icon--profile', function () {
                (0, _utils.manipulateClasses)('.modal-window', 'modal-window--visible', 'add');
                (0, _utils.manipulateClasses)('#sign-window', 'modal-window__pop-ups--visible', 'add');
            });
        }
    }, {
        key: 'controlWindows',
        value: function controlWindows() {
            (0, _utils.delegateEvent)(document, 'click', '.modal-window', function (event) {
                var eventTraget = event.target;
                if (eventTraget.classList.contains('modal-window') || eventTraget.classList.contains('modal-window__close')) {
                    (0, _utils.manipulateClasses)('.modal-window', 'modal-window--visible', 'remove');
                    (0, _utils.manipulateClasses)('#reg-window', 'modal-window__pop-ups--visible', 'remove');
                    (0, _utils.manipulateClasses)('#sign-window', 'modal-window__pop-ups--visible', 'remove');
                } else if (eventTraget.classList.contains('modal-window__sign-link') || eventTraget.classList.contains('modal-window__reg-link')) {
                    (0, _utils.manipulateClasses)('#reg-window', 'modal-window__pop-ups--visible', 'toggle');
                    (0, _utils.manipulateClasses)('#sign-window', 'modal-window__pop-ups--visible', 'toggle');
                }
            });
        }
    }, {
        key: 'scrollUp',
        value: function scrollUp() {
            (0, _utils.delegateEvent)(document, 'click', '.page__scroll-up', function () {
                (0, _utils.scrollTo)(0, 500);
            });
        }
    }, {
        key: 'showScrollUp',
        value: function showScrollUp() {
            window.addEventListener('scroll', function () {
                if (document.body.scrollTop <= window.innerHeight) {
                    (0, _utils.manipulateClasses)('.page__scroll-up', 'page__scroll-up--visible', 'remove');
                } else {
                    (0, _utils.manipulateClasses)('.page__scroll-up', 'page__scroll-up--visible', 'add');
                }
            });
        }
    }]);

    return view;
}();

},{"../utils/utils":7}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mainModel = function () {
    function mainModel() {
        _classCallCheck(this, mainModel);

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

    _createClass(mainModel, [{
        key: "get",
        value: function get() {
            return this.data;
        }
    }]);

    return mainModel;
}();

exports.default = mainModel;
;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.categoryPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

var _viewCategory = require('../views/viewCategory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var categoryPresenter = exports.categoryPresenter = function () {
    function categoryPresenter(categoryPosition) {
        _classCallCheck(this, categoryPresenter);

        this.model = new _models2.default();
        this.view = new _viewCategory.categoryView();

        this.view.init(this.model.get().categories[categoryPosition]);
        this.view.showPopUp();
        this.view.controlWindows();
        this.view.changeToGridView();
        this.view.changeToListView();
        this.view.showScrollUp();
        this.view.scrollUp();
    }

    _createClass(categoryPresenter, [{
        key: 'getView',
        value: function getView() {
            return this.view;
        }
    }]);

    return categoryPresenter;
}();

},{"../models/models":3,"../views/viewCategory":9}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.productPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

var _viewProduct = require('../views/viewProduct');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var productPresenter = exports.productPresenter = function () {
    function productPresenter(categoryPosition, productPosition) {
        _classCallCheck(this, productPresenter);

        this.model = new _models2.default();
        this.view = new _viewProduct.productView();

        this.view.init(this.model.get().categories[categoryPosition].goods[productPosition]);
        this.view.showPopUp();
        this.view.controlWindows();
        this.view.carousel();
        this.view.showScrollUp();
        this.view.scrollUp();
    }

    _createClass(productPresenter, [{
        key: 'getView',
        value: function getView() {
            return this.view;
        }
    }]);

    return productPresenter;
}();

},{"../models/models":3,"../views/viewProduct":10}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mainPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

var _mainView = require('../views/mainView');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mainPresenter = exports.mainPresenter = function () {
    function mainPresenter() {
        _classCallCheck(this, mainPresenter);

        this.model = new _models2.default();
        this.view = new _mainView.mainView();
        this.view.init(this.model.get());
        this.view.showPopUp();
        this.view.controlWindows();
        this.view.scrollDown();
        this.view.showScrollUp();
        this.view.scrollUp();
    }

    _createClass(mainPresenter, [{
        key: 'getView',
        value: function getView() {
            return this.view;
        }
    }]);

    return mainPresenter;
}();

},{"../models/models":3,"../views/mainView":8}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTemplate = getTemplate;
exports.manipulateClasses = manipulateClasses;
exports.scrollTo = scrollTo;
exports.delegateEvent = delegateEvent;
function getTemplate(fileName) {
    var template = '';
    $.ajax({
        url: 'templates/' + fileName + '.html',
        dataType: 'html',
        async: false,
        success: function success(data) {
            template = data;
        },
        error: function error(request, status, _error) {
            console.log('ERROR template ' + fileName + '.html ' + request.status + ' ' + _error);
        }
    });
    return template;
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

function scrollTo(to, duration) {
    var difference = to - document.body.scrollTop;
    var step = difference / duration * 20;
    setTimeout(function () {
        document.body.scrollTop = document.body.scrollTop + step;
        if (document.body.scrollTop === to) return;
        scrollTo(to, duration - 10);
    }, 10);
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

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mainView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view2 = require('../common/view');

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainView = exports.mainView = function (_view) {
    _inherits(mainView, _view);

    function mainView() {
        _classCallCheck(this, mainView);

        return _possibleConstructorReturn(this, (mainView.__proto__ || Object.getPrototypeOf(mainView)).apply(this, arguments));
    }

    _createClass(mainView, [{
        key: 'init',
        value: function init(initialData) {
            var categoryTemplate = (0, _utils.getTemplate)('main-page');
            var compileTemplate = Handlebars.compile(categoryTemplate);
            var mainPage = compileTemplate(initialData);
            this.html = mainPage;
        }
    }, {
        key: 'scrollDown',
        value: function scrollDown() {
            (0, _utils.delegateEvent)(document, 'click', '.main-banner__scroll-down', function () {
                (0, _utils.scrollTo)(window.innerHeight - 50, 300);
            });
        }
    }]);

    return mainView;
}(_view2.view);

},{"../common/view":2,"../utils/utils":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.categoryView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view2 = require('../common/view');

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var categoryView = exports.categoryView = function (_view) {
    _inherits(categoryView, _view);

    function categoryView() {
        _classCallCheck(this, categoryView);

        return _possibleConstructorReturn(this, (categoryView.__proto__ || Object.getPrototypeOf(categoryView)).apply(this, arguments));
    }

    _createClass(categoryView, [{
        key: 'init',
        value: function init(initialData) {
            var categoryTemplate = (0, _utils.getTemplate)('category');
            var compileTemplate = Handlebars.compile(categoryTemplate);
            var categoryPage = compileTemplate(initialData);
            this.html = categoryPage;
        }
    }, {
        key: 'changeToListView',
        value: function changeToListView() {
            (0, _utils.delegateEvent)(document, 'click', '.list-view', function () {
                (0, _utils.manipulateClasses)('.grid-view', 'grid-view--visible', 'add');
                (0, _utils.manipulateClasses)('.list-view', 'list-view--visible', 'remove');
                (0, _utils.manipulateClasses)('.goods__good-description', 'goods__good-description--visible', 'add');
                (0, _utils.manipulateClasses)('.goods__good', 'goods__good--list', 'add');
                (0, _utils.manipulateClasses)('.goods__good-info', 'goods__good-info--list', 'add');
                (0, _utils.manipulateClasses)('.goods__good-img', 'goods__good-img--list', 'add');
                (0, _utils.manipulateClasses)('.goods__good-price', 'goods__good-price--list', 'add');
                (0, _utils.manipulateClasses)('.goods__good-name', 'goods__good-name--list', 'add');
            });
        }
    }, {
        key: 'changeToGridView',
        value: function changeToGridView() {
            (0, _utils.delegateEvent)(document, 'click', '.grid-view', function () {
                (0, _utils.manipulateClasses)('.goods__good-description', 'goods__good-description--visible', 'remove');
                (0, _utils.manipulateClasses)('.goods__good', 'goods__good--list', 'remove');
                (0, _utils.manipulateClasses)('.goods__good-info', 'goods__good-info--list', 'remove');
                (0, _utils.manipulateClasses)('.goods__good-img', 'goods__good-img--list', 'remove');
                (0, _utils.manipulateClasses)('.goods__good-price', 'goods__good-price--list', 'remove');
                (0, _utils.manipulateClasses)('.goods__good-name', 'goods__good-name--list', 'remove');
                (0, _utils.manipulateClasses)('.grid-view', 'grid-view--visible', 'remove');
                (0, _utils.manipulateClasses)('.list-view', 'list-view--visible', 'add');
            });
        }
    }]);

    return categoryView;
}(_view2.view);

},{"../common/view":2,"../utils/utils":7}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.productView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view2 = require('../common/view');

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var productView = exports.productView = function (_view) {
    _inherits(productView, _view);

    function productView() {
        _classCallCheck(this, productView);

        return _possibleConstructorReturn(this, (productView.__proto__ || Object.getPrototypeOf(productView)).apply(this, arguments));
    }

    _createClass(productView, [{
        key: 'init',
        value: function init(initialData) {
            var productTemplate = (0, _utils.getTemplate)('product');
            var compileTemplate = Handlebars.compile(productTemplate);
            var productyPage = compileTemplate(initialData);
            this.html = productyPage;
        }
    }, {
        key: 'carousel',
        value: function carousel() {
            (0, _utils.delegateEvent)(document, 'click', '.slider', function (event) {
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
            });
        }
    }]);

    return productView;
}(_view2.view);

},{"../common/view":2,"../utils/utils":7}]},{},[1])


//# sourceMappingURL=app.js.map
