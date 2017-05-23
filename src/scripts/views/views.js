function mainView(data) {
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

    var public = {
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
        scrollDown: function() {
            delegateEvent(document, 'click', '.main-banner__scroll-down', function() {
                scrollTo(window.innerHeight - 50, 500);
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
        }
    };

    init(data);
    return public;
}