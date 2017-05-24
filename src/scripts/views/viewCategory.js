export default function categoryView(data) {
    var html;

    function getTemplate(fileName) {
        var template = '';
        $.ajax({
            url: 'templates/' + fileName + '.html',
            dataType: 'html',
            async: false,
            success: function(data) {
                template = data;
            },
            error: function(request, status, error) {
                console.log('ERROR template ' + fileName + '.html ' + request.status + ' ' + error);
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
        setTimeout(function() {
            document.body.scrollTop = document.body.scrollTop + step;
            if (document.body.scrollTop === to) return;
            scrollTo(to, duration - 10);
        }, 10);
    }

    function delegateEvent(element, e, selector, handler) {
        element.addEventListener(e, function(event) {
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
        getHtml: function() {
            return html;
        },
        showPopUp: function() {
            delegateEvent(document, 'click', '.navigation-top__icon--profile', function() {
                manipulateClasses('.modal-window', 'modal-window--visible', 'add');
                manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'add');
            });
        },
        controlWindows: function() {
            delegateEvent(document, 'click', '.modal-window', function(event) {
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
        scrollUp: function() {
            delegateEvent(document, 'click', '.page__scroll-up', function() {
                scrollTo(0, 500);
            });
        },
        showScrollUp: function() {
            window.addEventListener('scroll', function() {
                if (document.body.scrollTop <= window.innerHeight) {
                    manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'remove');
                } else {
                    manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'add');
                }
            });
        },
        changeToListView: function() {
            delegateEvent(document, 'click', '.list-view', function() {
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
        changeToGridView: function() {
            delegateEvent(document, 'click', '.grid-view', function() {
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