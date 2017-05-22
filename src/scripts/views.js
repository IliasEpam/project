function mainView(data) {
    var html;

    function init(initialData) {
        var categoryTemplate = document.getElementById('template-category').innerHTML;
        var compileTemplate = Handlebars.compile(categoryTemplate);
        var categories = compileTemplate(initialData);
        html = $('<header class="page__navigation-top">' +
            '<div class="navigation-top">' +
            '<nav class="navigation-top__content">' +
            '<a class="navigation-top__logo" href="index.html" title="Go the main page"><img class="navigation-top__logo-img" src="img/logo.png" alt="red panda logo" /> Cat shop</a>' +
            '<div class="navigation-top__panel">' +
            '<label class="navigation-top__search"><input type="search" placeholder="Search..."/><img  class="navigation-top__search-img" src="img/icons/search.png"></label>' +
            '<a class="navigation-top__icon navigation-top__icon--cart" href="cart.html"></a>' +
            '<a class="navigation-top__icon navigation-top__icon--profile"></a>' +
            '</div>' +
            '</nav>' +
            '</div>' +
            '</header>' +
            '<div class="page__modal-window">' +
            '<div class="modal-window">' +
            '<div class="modal-window__pop-ups" id="reg-window">' +
            ' <div class="modal-window__close">' +
            '</div>' +
            ' <form class="modal-window__form">' +
            '<div class="modal-window__line">' +
            'Registration' +
            '</div>' +
            '<div class="modal-window__line">' +
            '<input class="modal-window__input-email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2}" name="email" type="email" required placeholder="Email adress" />' +
            '</div>' +
            '<div class="modal-window__line">' +
            '<input class="modal-window__input-password" name="password" type="password" required placeholder="***" />' +
            ' </div>' +
            '<div class="modal-window__line">' +
            '<button class="modal-window__button" type="submit">Register</button>' +
            '</div>' +
            '<div class="modal-window__line modal-window__line--text-right">' +
            '<a href="#" class="modal-window__sign-link">Sign In</a>' +
            '</div>' +
            '</form>' +
            '</div>' +
            '<div class="modal-window__pop-ups" id="sign-window">' +
            '<div class="modal-window__close">' +
            ' </div>' +
            '<form class="modal-window__form">' +
            '<div class="modal-window__line">' +
            'Please Sign In' +
            '</div>' +
            '<div class="modal-window__line">' +
            '<input class="modal-window__input-email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2}" name="email" type="email" required placeholder="Email adress" />' +
            '</div>' +
            '<div class="modal-window__line">' +
            '<input class="modal-window__input-password" name="password" type="password" required placeholder="***" />' +
            '</div>' +
            '<div class="modal-window__line">' +
            '<label><input type="checkbox" name="remember" value="remember"> Remember me </label>' +
            '</div>' +
            '<div class="modal-window__line">' +
            '<button class="modal-window__button" type="submit">Sign In</button>' +
            '</div>' +
            '<div class="modal-window__line modal-window__line--text-right">' +
            '<a href="#" class="modal-window__reg-link">Register</a>' +
            '</div>' +
            ' </form>' +
            '</div>' +
            ' </div>' +
            '</div>' +
            categories);

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
        }
    };

    init(data);
    return public;
}