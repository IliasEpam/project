(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _presenters = require('./presenters/presenters.js');

var _presenters2 = _interopRequireDefault(_presenters);

var _presenterCategory = require('./presenters/presenterCategory.js');

var _presenterCategory2 = _interopRequireDefault(_presenterCategory);

var _presenterProduct = require('./presenters/presenterProduct.js');

var _presenterProduct2 = _interopRequireDefault(_presenterProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var page;
var targetContainer = document.getElementById('content');

function changeView() {
    if (location.hash === '') {
        page = new _presenters2.default();
    } else if (location.hash.indexOf('category') >= 0) {
        var categoryPosition = location.hash.substring(9);
        page = new _presenterCategory2.default(categoryPosition);
    } else if (location.hash.indexOf('product') >= 0) {
        var reg = /\d+/g;
        var digitsFromHash = location.hash.match(reg);
        var categoryPosition = digitsFromHash[0];
        var productPosition = digitsFromHash[1];
        page = new _presenterProduct2.default(categoryPosition, productPosition);
    }
    targetContainer.innerHTML = page.getView().getHtml();
};

window.addEventListener('hashchange', changeView);

changeView();

},{"./presenters/presenterCategory.js":3,"./presenters/presenterProduct.js":4,"./presenters/presenters.js":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mainModel;
function mainModel() {
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

mainModel.prototype.get = function () {
    return this.data;
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = categoryPresenter;

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

var _viewCategory = require('../views/viewCategory');

var _viewCategory2 = _interopRequireDefault(_viewCategory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function categoryPresenter(categoryPosition) {
    var view;
    var model;

    function init() {
        model = new _models2.default();
        view = new _viewCategory2.default(model.get().categories[categoryPosition]);

        view.showPopUp();
        view.controlWindows();
        view.showScrollUp();
        view.scrollUp();
        view.changeToListView();
        view.changeToGridView();
    }

    var presenter = {
        getView: function getView() {
            return view;
        }
    };

    init();
    return presenter;
}

},{"../models/models":2,"../views/viewCategory":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = productPresenter;

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

var _viewProduct = require('../views/viewProduct');

var _viewProduct2 = _interopRequireDefault(_viewProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function productPresenter(categoryPosition, productPosition) {
    var view;
    var model;

    function init() {
        model = new _models2.default();
        view = new _viewProduct2.default(model.get().categories[categoryPosition].goods[productPosition]);

        view.showPopUp();
        view.controlWindows();
        view.showScrollUp();
        view.scrollUp();
        view.carousel();
    }

    var presenter = {
        getView: function getView() {
            return view;
        }
    };

    init();
    return presenter;
}

},{"../models/models":2,"../views/viewProduct":7}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mainPresenter;

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

var _views = require('../views/views');

var _views2 = _interopRequireDefault(_views);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mainPresenter() {
    var view;
    var model;

    function init() {
        model = new _models2.default();
        view = new _views2.default(model.get());

        view.showPopUp();
        view.controlWindows();
        view.scrollDown();
        view.showScrollUp();
        view.scrollUp();
    }

    var presenter = {
        getView: function getView() {
            return view;
        }
    };

    init();
    return presenter;
}

},{"../models/models":2,"../views/views":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = categoryView;
function categoryView(data) {
    var html;

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

    function init(initialData) {
        var categoryTemplate = getTemplate('category');
        var compileTemplate = Handlebars.compile(categoryTemplate);
        var categoryPage = compileTemplate(initialData);
        html = categoryPage;
    }

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

    var view = {
        getHtml: function getHtml() {
            return html;
        },
        showPopUp: function showPopUp() {
            delegateEvent(document, 'click', '.navigation-top__icon--profile', function () {
                manipulateClasses('.modal-window', 'modal-window--visible', 'add');
                manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'add');
            });
        },
        controlWindows: function controlWindows() {
            delegateEvent(document, 'click', '.modal-window', function (event) {
                var eventTraget = event.target;
                if (eventTraget.classList.contains('modal-window') || eventTraget.classList.contains('modal-window__close')) {
                    manipulateClasses('.modal-window', 'modal-window--visible', 'remove');
                    manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'remove');
                    manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'remove');
                } else if (eventTraget.classList.contains('modal-window__sign-link') || eventTraget.classList.contains('modal-window__reg-link')) {
                    manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'toggle');
                    manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'toggle');
                }
            });
        },
        scrollUp: function scrollUp() {
            delegateEvent(document, 'click', '.page__scroll-up', function () {
                scrollTo(0, 500);
            });
        },
        showScrollUp: function showScrollUp() {
            window.addEventListener('scroll', function () {
                if (document.body.scrollTop <= window.innerHeight) {
                    manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'remove');
                } else {
                    manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'add');
                }
            });
        },
        changeToListView: function changeToListView() {
            delegateEvent(document, 'click', '.list-view', function () {
                manipulateClasses('.grid-view', 'grid-view--visible', 'add');
                manipulateClasses('.list-view', 'list-view--visible', 'remove');
                manipulateClasses('.goods__good-description', 'goods__good-description--visible', 'add');
                manipulateClasses('.goods__good', 'goods__good--list', 'add');
                manipulateClasses('.goods__good-info', 'goods__good-info--list', 'add');
                manipulateClasses('.goods__good-img', 'goods__good-img--list', 'add');
                manipulateClasses('.goods__good-price', 'goods__good-price--list', 'add');
                manipulateClasses('.goods__good-name', 'goods__good-name--list', 'add');
            });
        },
        changeToGridView: function changeToGridView() {
            delegateEvent(document, 'click', '.grid-view', function () {
                manipulateClasses('.goods__good-description', 'goods__good-description--visible', 'remove');
                manipulateClasses('.goods__good', 'goods__good--list', 'remove');
                manipulateClasses('.goods__good-info', 'goods__good-info--list', 'remove');
                manipulateClasses('.goods__good-img', 'goods__good-img--list', 'remove');
                manipulateClasses('.goods__good-price', 'goods__good-price--list', 'remove');
                manipulateClasses('.goods__good-name', 'goods__good-name--list', 'remove');
                manipulateClasses('.grid-view', 'grid-view--visible', 'remove');
                manipulateClasses('.list-view', 'list-view--visible', 'add');
            });
        }
    };

    init(data);
    return view;
}

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = productView;
function productView(data) {
    var html;

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

    function init(initialData) {
        var productTemplate = getTemplate('product');
        var compileTemplate = Handlebars.compile(productTemplate);
        var productyPage = compileTemplate(initialData);
        html = productyPage;
    }

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

    var view = {
        getHtml: function getHtml() {
            return html;
        },
        showPopUp: function showPopUp() {
            delegateEvent(document, 'click', '.navigation-top__icon--profile', function () {
                manipulateClasses('.modal-window', 'modal-window--visible', 'add');
                manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'add');
            });
        },
        controlWindows: function controlWindows() {
            delegateEvent(document, 'click', '.modal-window', function (event) {
                var eventTraget = event.target;
                if (eventTraget.classList.contains('modal-window') || eventTraget.classList.contains('modal-window__close')) {
                    manipulateClasses('.modal-window', 'modal-window--visible', 'remove');
                    manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'remove');
                    manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'remove');
                } else if (eventTraget.classList.contains('modal-window__sign-link') || eventTraget.classList.contains('modal-window__reg-link')) {
                    manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'toggle');
                    manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'toggle');
                }
            });
        },
        scrollUp: function scrollUp() {
            delegateEvent(document, 'click', '.page__scroll-up', function () {
                scrollTo(0, 500);
            });
        },
        showScrollUp: function showScrollUp() {
            window.addEventListener('scroll', function () {
                if (document.body.scrollTop <= window.innerHeight) {
                    manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'remove');
                } else {
                    manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'add');
                }
            });
        },
        carousel: function carousel() {
            delegateEvent(document, 'click', '.slider', function (event) {
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
    };

    init(data);
    return view;
}

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mainView;
function mainView(data) {
    var html;

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

    function init(initialData) {
        var categoryTemplate = getTemplate('main-page');
        var compileTemplate = Handlebars.compile(categoryTemplate);
        var mainPage = compileTemplate(initialData);
        html = mainPage;
    }

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

    var view = {
        getHtml: function getHtml() {
            return html;
        },
        showPopUp: function showPopUp() {
            delegateEvent(document, 'click', '.navigation-top__icon--profile', function () {
                manipulateClasses('.modal-window', 'modal-window--visible', 'add');
                manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'add');
            });
        },
        controlWindows: function controlWindows() {
            delegateEvent(document, 'click', '.modal-window', function (event) {
                var eventTraget = event.target;
                if (eventTraget.classList.contains('modal-window') || eventTraget.classList.contains('modal-window__close')) {
                    manipulateClasses('.modal-window', 'modal-window--visible', 'remove');
                    manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'remove');
                    manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'remove');
                } else if (eventTraget.classList.contains('modal-window__sign-link') || eventTraget.classList.contains('modal-window__reg-link')) {
                    manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'toggle');
                    manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'toggle');
                }
            });
        },
        scrollDown: function scrollDown() {
            delegateEvent(document, 'click', '.main-banner__scroll-down', function () {
                scrollTo(window.innerHeight - 50, 300);
            });
        },
        scrollUp: function scrollUp() {
            delegateEvent(document, 'click', '.page__scroll-up', function () {
                scrollTo(0, 500);
            });
        },
        showScrollUp: function showScrollUp() {
            window.addEventListener('scroll', function () {
                if (document.body.scrollTop <= window.innerHeight) {
                    manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'remove');
                } else {
                    manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'add');
                }
            });
        }
    };

    init(data);
    return view;
}

},{}]},{},[1])


//# sourceMappingURL=app.js.map
