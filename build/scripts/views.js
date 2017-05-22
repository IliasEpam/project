function mainView(data) {
    var html;

    function init(initialData) {
        var categoryTemplate = document.getElementById('template-category').innerHTML;
        var compileTemplate = Handlebars.compile(categoryTemplate);
        var categories = compileTemplate(initialData);
        html = $(' <div class="page__main-banner">' +
            ' <section class="main-banner">' +
            '<div class="main-banner__text-container">' +
            '<h1 class="main-banner__heading">Any exciting header</h1>' +
            '<p class="main-banner__text">Some attractive text, shouldn\'t be too large. Just a couple lines. Some attractive text, shouldn\'t be too large. Just a couple lines.</p>' +
            '</div>' +
            '<div class="main-banner__scroll-down">' +
            '<div class="main-banner__scroll-down-text">Start shopping</div>' +
            '</div>' +
            '</section>' +
            '</div>' +
            '<main class="page__categories">' +
            ' <div class="categories">' +
            '<section class="categories__content">' +
            '<h2 class="categories__header">Categories</h2>' +
            categories +
            '</section>' +
            '</div>' +
            '</main>' +
            '<div class="page__partners">' +
            '<div class="partners">' +
            '<div class="partners__content">' +
            '<img class="partners__logo" alt="partner" src="img/partners/wwf.png">' +
            '<img class="partners__logo" alt="partner" src="img/partners/green.png">' +
            '<img class="partners__logo" alt="partner" src="img/partners/royal.png">' +
            '<img class="partners__logo" alt="partner" src="img/partners/wwf.png">' +
            '</div>' +
            '</div>' +
            '</div>');

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

    function closeAllModalWindows() {
        manipulateClasses('.modal-window', 'modal-window--visible', 'remove');
        manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'remove');
        manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'remove');
    }

    function swapModalWindow() {
        manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'toggle');
        manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'toggle');
    }

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
                    closeAllModalWindows();
                } else if (eventTraget.classList.contains('modal-window__sign-link') || eventTraget.classList.contains('modal-window__reg-link')) {
                    swapModalWindow();
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
            $(document).on('scroll', 'window', function() {
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