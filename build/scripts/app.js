(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _presenters = require('./presenters/presenters.js');

var _presenters2 = _interopRequireDefault(_presenters);

var _presenterGoods = require('./presenters/presenterGoods.js');

var _presenterGoods2 = _interopRequireDefault(_presenterGoods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var page /*= new mainPresenter()*/;
var targetContainer = document.getElementById('content');
//targetContainer.innerHTML = page.getView().getHtml();


//var element = document.querySelector('#content');


function changeView() {
    switch (location.hash) {
        case '':
            page = new _presenters2.default();
            break;
        case '#goods':
            console.log('show me goods');
            page = new _presenterGoods2.default();
            break;
    }
    targetContainer.innerHTML = page.getView().getHtml();
};

window.addEventListener('hashchange', function () {
    switch (location.hash) {
        case '':
            page = new _presenters2.default();
            break;
        case '#goods':
            console.log('show me goods');
            page = new _presenterGoods2.default();
            break;
    }
    targetContainer.innerHTML = page.getView().getHtml();
});

changeView();

},{"./presenters/presenterGoods.js":3,"./presenters/presenters.js":4}],2:[function(require,module,exports){
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
            goods: [{
                title: "Dry food – 'Brand' (0.2kg)",
                price: "10.9$",
                description: "Little description of a good goes here. It could be much wider.",
                img: "img/dry.jpg"
            }, {
                title: "Dry food – 'Brand' (0.2kg)",
                price: "0.29$",
                description: "Little description of a good goes here. It could be much wider.",
                img: "img/wet.jpg"
            }, {
                title: "Dry food – 'Brand' (0.2kg)",
                price: "0.9$",
                description: "Little description of a good goes here. It could be much wider.",
                img: "img/dry.jpg"
            }, {
                title: "Dry food – 'Brand' (0.2kg)",
                price: "0.9$",
                description: "Little description of a good goes here. It could be much wider.",
                img: "img/dry.jpg"
            }, {
                title: "Dry food – 'Brand' (0.2kg)",
                price: "0.9$",
                description: "Little description of a good goes here. It could be much wider.",
                img: "img/dry.jpg"
            }, {
                title: "Dry food – 'Brand' (0.2kg)",
                price: "0.9$",
                description: "Little description of a good goes here. It could be much wider.",
                img: "img/dry.jpg"
            }, {
                title: "Dry food – 'Brand' (0.2kg)",
                price: "0.9$",
                description: "Little description of a good goes here. It could be much wider.",
                img: "img/dry.jpg"
            }]
        }, {
            title: "Wet Food",
            img: "img/wet.jpg",
            goods: []
        }, {
            title: "Medicines",
            img: "img/meds.jpg",
            goods: []
        }, {
            title: "Sleeping places",
            img: "img/sleep.jpg",
            goods: []
        }, {
            title: "Toys",
            img: "img/toys.jpg",
            goods: []
        }, {
            title: "Brushes",
            img: "img/brush.jpg",
            goods: []
        }, {
            title: "Accessories",
            img: "img/acs.jpg",
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
exports.default = goodsPresenter;

var _models = require('../models/models');

var _models2 = _interopRequireDefault(_models);

var _viewGoods = require('../views/viewGoods');

var _viewGoods2 = _interopRequireDefault(_viewGoods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function goodsPresenter() {
    var view;
    var model;

    function init() {
        model = new _models2.default();
        view = new _viewGoods2.default(model.get());

        view.showPopUp();
        view.controlWindows();
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

},{"../models/models":2,"../views/viewGoods":5}],4:[function(require,module,exports){
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

},{"../models/models":2,"../views/views":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = goodsView;
function goodsView(data) {
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
        var goodsTemplate = getTemplate('goods');
        var compileTemplate = Handlebars.compile(goodsTemplate);
        var goodsPage = compileTemplate(initialData);
        html = goodsPage;
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
        }
    };

    init(data);
    return view;
}

},{}],6:[function(require,module,exports){
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
                scrollTo(window.innerHeight - 50, 500);
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
