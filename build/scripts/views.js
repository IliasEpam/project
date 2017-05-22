function mainView(data) {
    var html;

    function getTemplate(name) {
        var template = '';
        $.ajax({
            url: 'templates/' + name + '.html',
            dataType: 'html',
            success: function(data) {
                template = data;
            },
            async: false
        });
        return template;
    };

    function init(initialData) {
        var categoryTemplate = getTemplate('categories');
        var compileTemplate = Handlebars.compile(categoryTemplate);
        var categories = compileTemplate(initialData);
        var partners = getTemplate('partners');
        var mainBanner = getTemplate('main-banner');
        html = $(mainBanner + categories + partners);
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

    var public = {
        getHtml: function() {
            return html;
        },
        showPopUp: function() {
            $(document).on('click', '.navigation-top__icon--profile', function() {
                manipulateClasses('.modal-window', 'modal-window--visible', 'add');
                manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'add');
            });
        },
        controlWindows: function() {
            $(document).on('click', '.modal-window', function(event) {
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
            $(document).on('click', '.main-banner__scroll-down', function() {
                scrollTo(window.innerHeight - 50, 500);
            });
        },
        scrollUp: function() {
            $(document).on('click', '.page__scroll-up', function() {
                scrollTo(0, 500);
            });
        },
        showScrollUp: function() {
            $(document).on('scroll', document, function() {
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